import React, { Component } from "react";

import "./App.css";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

/* Video tutorial : [Hamza Mirza] https://www.youtube.com/watch?v=204C9yNeOYI&t=1540s */

const API_KEY = "511ec7f3621bd1981185d6aca1830384";

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();

    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;

    if (!city) {
      city = "Waterloo";
      country = "BE";
      e.target.elements.city.value = "Waterloo";
      e.target.elements.country.value = "BE";
    }

    let api_call;
    if (!country) {
      api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
    } else {
      api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
      );
    }

    const data = await api_call.json();
    console.log(data);
    if (data.weather) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: undefined
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        humidity: undefined,
        description: undefined,
        error: data.message
      });
    }
  };

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;

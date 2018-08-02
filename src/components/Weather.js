import React from "react";

const Weather = props => {
  const { city, country, description, temperature, humidity, error } = props;

  return (
    <div>
      {city &&
        country && (
          <p>
            Location: {city}, {country}
          </p>
        )}

      {description && <p>Condition : {description}</p>}
      {temperature && <p>Temperature: {temperature} C</p>}
      {humidity && <p>Humidity: {humidity} %</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Weather;

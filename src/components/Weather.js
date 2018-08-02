import React from "react";

const Weather = props => {
  const { city, country, description, temperature, humidity, error } = props;

  return (
    <div>
      {city &&
        country && (
          <p>
            <span>Location : </span>
            <span className="light-red">
              {city}, {country}
            </span>
          </p>
        )}

      {description && (
        <p>
          <span>Condition : </span>
          <span className="light-red">{description}</span>
        </p>
      )}
      {temperature && (
        <p>
          <span>Temperature : </span>
          <span className="light-red">{temperature} C</span>
        </p>
      )}
      {humidity && (
        <p>
          <span>Humidity : </span>
          <span className="light-red">{humidity} %</span>
        </p>
      )}
      {error && <p className="light-red">{error}</p>}
    </div>
  );
};

export default Weather;

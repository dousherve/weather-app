import React from 'react';
import '../App.css'

const Weather = props => (
  <div className="weather__info">
    { !props.error && props.city && <p>City: {props.city}</p> }
    { !props.error && props.country && <p>Country: {props.country}</p> }
    { !props.error && props.temperature && <p>Temperature: {props.temperature} °C</p> }
    { !props.error && props.humidity && <p>Humidity: {props.humidity}</p> }
    { !props.error && props.conditions && <p>Conditions: {props.conditions}</p> }

    { props.error && <p>Error {props.error}</p> }
  </div>
);

export default Weather;
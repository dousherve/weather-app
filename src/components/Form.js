import React from 'react';
import '../App.css'

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City"/>
    <input type="text" name="country" placeholder="Country"/>
    <button>Get Weather</button>
  </form>
);

export default Form;
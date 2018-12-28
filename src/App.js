import React from 'react';
import './App.css';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '5816ac021fedcfa50aa9496310dd5d7c';

class App extends React.Component {
  constructor() {
    super();

    this.getWeather = this.getWeather.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  componentDidMount() {
    this.resetState();
  }

  resetState() {
    this.setState({
      city: undefined,
      country: undefined,
      temperature: undefined,
      humidity: undefined,
      conditions: undefined,
      error: undefined
    });
  }

  async getWeather(e) {
    e.preventDefault();
    this.resetState();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if (!city || !country) {
      alert("Please fill in both fields.");
      return;
    }

    let api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city},${country}&APPID=${API_KEY}`);
    let data = await api_call.json();

    if (data.cod === 200) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        conditions: data.weather[0].main
      });
    } else {
      this.setState({
        error: `${data.cod}: ${data.message}`
      });
    }

    console.log(data);
  }

  render() {
    return (
      // <div>
      //   <Titles />
      //   <Form getWeather={this.getWeather}/>
      //   <Weather {...this.state}/>
      // </div>

      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React,{useEffect,useState,setState} from 'react';
import logo from './logo.svg';
import WheaterReport from './wheaterReport';
import './App.css';
import Form from './Form';

const KEY = "7d4b78cea729daa176565c4c65958158";


class App extends React.Component {
 // let wheaterReports = useState();
  state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    }
  

//  const getWheater = async () => {
//    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=${KEY}`);
//    const data =  await response.json();
//    console.log(data); 
 //   wheaterReports = data;
    
//    this.setState({
 //     temperature: data.main.temp,
//      city: data.name,
//      country: data.sys.country,
//      humidity: data.main.humidity,
//      description: data.weather[0].description,
//      error: ""
//    });
 //   console.log(wheaterReports.name,wheaterReports.sys.country,wheaterReports.weather[0].description,wheaterReports.main.temp);
 // }
   
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`);
    const data = await api_call.json();
    if (city) {
      this.setState({
        temperature: data.main.temp+" °C",
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""       
      });
      //console.log(data)
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  }

  


  render() {
    return (
        <div className="App">
          <Form getWeather={this.getWeather}/>          
            <WheaterReport 
              city_name={this.state.city} 
              country={this.state.country}
              description={this.state.description} 
              temp={this.state.temperature} 
              />                
        </div>
    );
  }
};

export default App;

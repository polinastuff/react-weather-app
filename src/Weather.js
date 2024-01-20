import React, { useState } from "react"; 
import "./Weather.css"
import WeatherData from "./WeatherData";
import Forecast from "./Forecast"
import axios from "axios";


export default function Weather (props) {
     let [city, setCity]= useState(props.defaultCity)
     let [weatherData, setWeatherData] = useState({showInfo:false})
 

function updateWeatherData (response) {
setWeatherData({
showInfo: true,
city: response.data.name,
temperature: Math.round(response.data.main.temp), 
feelsTemperature: Math.round(response.data.main.feels_like),
description: response.data.weather[0].main,
wind: Math.round(response.data.wind.speed), 
humidity: response.data.main.humidity,
icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
main: response.data.weather[0].main,
timezone: response.data.timezone,
coordinates: response.data.coord
})}   

function sendRequest(){
const apiKey = "d9682284ab68bba42fdaf690958f42f3";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiURL).then(updateWeatherData).catch(function (error) {
alert("Sorry, we could not get data for this city. Please check if spelling is correct.");});}   


function submitForm (event){
    event.preventDefault();
    sendRequest();
    event.target.reset()
}

function updateCity (event){
    setCity(event.target.value);
}

let form = <form onSubmit={submitForm}>
                <div className="row">
                  <div className="col-md-9">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search for another city"
                        autoComplete="off"
                        onChange={updateCity}
                      />
                    </div>
                  </div>
                  <div className="buttons col-md-3">
                    <input
                      type="Submit"
                      className="btn btn-info"
                      value="Search"
                    />

                    <input
                      type="button"
                      className="btn btn-success ms-1"
                      value="My location"
                    />
                  </div>
                </div>
            </form>

if (weatherData.showInfo) {
return (
  <div className="row">
        <div className="col-md-9">
    <div className="Card card">
        <div className="card-body">
        {form}
        <WeatherData data={weatherData} />
        </div>
    </div>
    </div>
        <div className="col-md-3">
        <Forecast coordinates={weatherData.coordinates}/> 
    </div>
    </div>
    )}
     else {
        sendRequest();
    return (
      <div className="row">
        <div className="col-md-9">
    <div className="Card card">
        <div className="card-body">
        {form}
        </div>
        </div>
        </div>
     <div className="col-md-3">
        </div> 
    </div>)}
}
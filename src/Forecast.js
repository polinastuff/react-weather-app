import React from "react"; 
import "./Forecast.css";
import axios from "axios";

export default function Forecast (props){
  let apiKey = "c8a77112b2faf6684bb4b21a0aa778ae";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&exclude=hourly,minutely&appid=${apiKey}&units=metric`;

  function displayForecast (response) {
console.log(response)
  }

axios.get(apiUrl).then(displayForecast);

    return (
        <div className="Forecast">
          <li>
          <ul>
          <span>☁️</span> Sat
          <div className="temp">
          <span >1°</span>
          <span className="night-temp"> -2°</span>
          </div>
          </ul>
          </li>
        </div>
    )
}
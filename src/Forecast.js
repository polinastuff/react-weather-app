import React, {useState, useEffect} from "react"; 
import "./Forecast.css";
import UpdateEmoji from "./UpdateEmoji";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function Forecast (props){
let [loaded, setLoaded]=useState(false);
let [forecastData, setForecast] = useState(null);


useEffect(() =>{
    setLoaded(false);
},[props.coordinates]);


function displayForecast (response) {
setLoaded(true)
setForecast(response.data.daily)
  }

if (loaded) {
    return (
        <div className="Forecast">
          <ul>
            {forecastData.map(function(forecastDataDay, index){
          if (index > 0 && index < 6){
          return <li key={index}>
          <span><UpdateEmoji main={forecastDataDay.weather[0].main}/></span> <ForecastDay timestamp={forecastDataDay.dt}/>
          <div className="temp">
          <span >{Math.round(forecastDataDay.temp.day)}°</span>
          <span className="night-temp"> {Math.round(forecastDataDay.temp.night)}°</span>
          </div>
          </li>} else {
            return null;
          }})}
          </ul>
        </div>
    )
} else {
  let apiKey="210d99196a88b9257ed8cb3535a0a0c5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&exclude=hourly,minutely&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayForecast);

    return null;
}

}
import React from "react";
import "./WeatherData.css";
import GetDate from "./GetDate";
import UpdateEmoji from "./UpdateEmoji";

export default function WeatherData (props){
 
    return (
     <div className="WeatherData"> 
        <div className="row">
                <div className="col-md-6">
                  <h1 className="city border border-dark rounded">{props.data.city}</h1>
                </div>
                <div className="col-md-6">
                  <h1 className="temperature">
                    {props.data.temperature} °C <UpdateEmoji main={props.data.main}/>
                
                  </h1>
                </div>
        </div>
              <div className="row">
                <div className="col">
                  <h4 className="feels-like">
                    Feels like {props.data.feelsTemperature}°
                  </h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6 currently text-center">
                    {props.data.description}
                  <img src={props.data.icon} alt="weather-icon" />
                </div>
              </div>
              <div className="row">
                <div className="col-6"></div>
                <div className="col-md-6 date-time text-center">
                    < GetDate timezone={props.data.timezone}/>
                </div>
              </div>
              <div className="row">
                <div className="col wind-humidity">
                  Wind {props.data.wind} meter/sec
                  <br />
                  Humidity {props.data.humidity}%
                </div>
              </div>
    </div>
           
            
   )
}
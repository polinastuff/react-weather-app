import React, { useState} from "react";

export default function WeatherTemperature (props){
    const [unit, setUnit] = useState("celsius");

function convertFahrenheit(event){
    event.preventDefault(); 
    setUnit("fahrenheit");
}

function showCelsius(event){
    event.preventDefault();
    setUnit("celsius")
}

function fahrenheit(){
return (props.celsius * 9/5) + 32}

 if (unit === "celsius") {
    return (
    
        <span>{props.celsius} °C<a href= "/" onClick={convertFahrenheit}>|°F</a>
        </span>
    );
 } else {
    return (
    
        <span>{Math.round(fahrenheit())}<a href="/" onClick={showCelsius}>°C</a>|°F
        </span>);
 }
   
}
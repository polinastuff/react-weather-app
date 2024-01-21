import React from "react"; 

export default function({timestamp}){
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return <span>{days[day]}</span>;
}
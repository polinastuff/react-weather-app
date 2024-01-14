import React from "react";

export default function GetDate(props){
  let date = new Date();
  let utcDate = date.getTime() + date.getTimezoneOffset() * 60000;
  let cityDate = utcDate + props.timezone * 1000;
  let newCityDate = new Date(cityDate);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = newCityDate.getDay();
  let hours = newCityDate.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = newCityDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let fullDate = `${days[day]}, ${hours}:${minutes}`;
  return <div>{fullDate}</div>;
}
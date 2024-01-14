import React from "react";
import Card from "./Card";
import Forecast from "./Forecast";

export default function Weather (){
    return (
    <div className="row">
        <div className="col-md-9">
       <Card defaultCity="Berlin"/>
        </div>
        <div className="col-md-3">
        <Forecast/></div> 
    </div>
    )
}
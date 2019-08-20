import React from "react";
import './App.css';
const Form = props => (	
    <form className="search-form" onSubmit={props.getWeather} >
        <input className="search-bar" type="text" name="city" placeholder="City..."/>
        <button className="search-button" >search</button>
    </form>          
);

export default Form;
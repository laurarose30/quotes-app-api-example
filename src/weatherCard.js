import React from "react"
export default function WeatherCard(props){

    const buildWeather = () => {
        //is it an array with more than  one thing in
        if(props.day.weather != undefined){
          //give me back all items in the array
          return props.day.weather.map ( (item) => {
            //for each item in the array give me back some JSX
            return (
              <div>
                {item.main} 
              &#8212; 
                
                {item.description}<br />
              </div>
  
            )
  
          }    )
  
        }
  
    }

   
    return (
        <card id="current">
        <h1>weather</h1>
        City:&nbsp;&nbsp;
        {props.day.name}
        <br></br>
        {buildWeather()}
        Temp: &nbsp;
        {props.day.main !== undefined? props.day.main.temp : ""}&#176;C
        <br></br>
        Temp (min):&nbsp;
        {props.day.main !== undefined? props.day.main.temp_min : "" }&#176;C
        &nbsp;Temp (max) :&nbsp;
        {props.day.main !== undefined? props.day.main.temp_max : ""}&#176;C
        <br></br>
        Feels like: &nbsp;
        {props.day.main !== undefined? props.day.main.feels_like: ""}&#176;C
        <br></br>
        {props.day.wind !== undefined? props.day.wind.speed:""}
        <br></br>
       
        </card>
    )


}
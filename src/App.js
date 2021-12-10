import React, { useState, useEffect } from "react";
import { ApiClient} from './ApiClient';
import './App.css';
import WeatherCard from "./weatherCard";



function App() {

  
//defaults in state
  const [quotes, changeQuotes] = useState({});
  const api = new ApiClient();

 

//getting data from api 
  const refreshQuote = () => {
   
    api
    .getQuote()
    
      .then( (res) => {
        changeQuotes(res.data);
        
      })
      .catch((error) => {
        console.log(error);
      })
      
  }

  useEffect(() => {
      refreshQuote();
    
  }, []);

  
//display funcition 

/*
  <WeatherCard day={quotes.day[0]} />
    <WeatherCard day={quotes.day[1]} />
    */
  return (


    <>
    <div class="container">
    <div class="main">
      
    <WeatherCard day={quotes} />
  

       </div>
       </div>
       
   
     
      <br></br>
    </>
  );
}
       
     



       
     

     
    



export default App;

import React, { useState, useEffect } from "react";
import { ApiClient} from './ApiClient';

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


  function buildWeather() {
      //is it an array with more than  one thing in
      if(quotes.weather != undefined){
        //give me back all items in the array
        return quotes.weather.map ( (item) => {
          //for each item in the array give me back some JSX
          return (
            <div>
              {item.main}<br />
              {item.description}<br />
            </div>

          )

        }    )

      }

  }






//display funcition 
  return (
    <>
      <h1>weather</h1>
      {quotes.name}
      <br></br>
      {quotes.dt}
      <br></br>
      {quotes.coord != undefined? quotes.coord.lat : "" }
      <br></br>
      {quotes.coord != undefined? quotes.coord.lon : ""}
      <br></br>
      {quotes.main != undefined? quotes.main.temp : ""}
      <br></br>
      {quotes.main != undefined? quotes.main.feels_like: ""}
      <br></br>
      
     {buildWeather()}
      
      <br></br>
    </>
  );
}

export default App;

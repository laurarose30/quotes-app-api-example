import axios from "axios";

export class ApiClient {
    responseStatusCheck(responseObject) {
        if(responseObject.status >= 200 && responseObject.status < 300){
          return Promise.resolve(responseObject);
    
        }else{
          return Promise.reject(new Error(responseObject.statusText));
        }
   
   
     }

     getItems(url){
        return axios
        .get(url)
        .then(this.responseStatusCheck)
        .catch((error) => {
            console.log(error);

        })
     }

     getWeather() {
      return this.getRequest(
        `https://api.openweathermap.org/data/2.5/weather?q=Sheffield,uk&units=metric&appid=a259dfea1e4b9fde6238fb3438509e75`
      );
    }

    getQuote(){
        return this.getItems(`https://api.openweathermap.org/data/2.5/weather?q=Sheffield,uk&units=metric&appid=a259dfea1e4b9fde6238fb3438509e75`);
    }




}
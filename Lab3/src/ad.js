export default class Ad {
  
    constructor(api_key) {
        //console.log('Ad has been loaded');

        this.apiKey = api_key; // de api key die we hebben gekregen van de api hierboven in de constructor zetten
        console.log(this.api_key);
        // check our location 
        this.getLocation();
        this.lat; // eigenschap latitude
        this.long; // eigenschap longitude
       
    }

    getLocation() {
        //console.log('getLocation');

        // get the location from the browser
        navigator.geolocation.getCurrentPosition(
            this.gotlocation.bind(this),  // bind this to the function bind will make sure that the this keyword is the same in the function (bind betekent dat je de this van de functie aanpast)
            this.errorlocation.bind(this) 
            ); // vragen aan de browser (navigator), aan het object (geolocation) om de huidige locatie (getCurrentPosition) te bepalen.
        // als het lukt, dan de functie gotlocation uitvoeren, als het niet lukt, dan de functie errorlocation uitvoeren.

       
    }   

    gotlocation(result) {

        this.lat = result.coords.latitude; // ik wil de latitude van de resultaten van de browser (result) en dan de coordinaten (coords) en dan de latitude (latitude)
        this.long = result.coords.longitude; // ik wil de longitude van de resultaten van de browser (result) en dan de coordinaten (coords) en dan de longitude (longitude)

        //console.log(result);
        //console.log(this.lat);
        //console.log(this.long);

        // call the function to get the weather als we de locatie hebben
        this.getWeather();
    }

    getWeather() {
        //https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=API_KEY&include=minutely
        let url =`https://api.weatherbit.io/v2.0/${this.lat}&${this.long}&key=${this.apiKey}&include=minutely`;
        
        fetch(url)
        .then((response)=>response.json())
        .then((data)=> {
            
            //then is een promise, een belofte dat de data er is dat die ons een response geeft

            //localStorage.setItem("weather", JSON.stringify(data));

            console.log (response); 
            //localStorage.setItem("timestamp", Date.now());
            console.log(data);
            //this.displayWeather(data);
        });


       

              
      

          

        
        // api key 8119c4ee4bd64d62bcb4e4b7388d7932


    }

    errorlocation(err) {

        console.log(err);

    }
    
   

}

let ad = new Ad();
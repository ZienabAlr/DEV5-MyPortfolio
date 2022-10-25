export default class Ad {
  
    constructor(api_key) {
        //console.log('Ad has been loaded');

        this.apiKey = api_key; // de api key die we hebben gekregen van de api hierboven in de constructor zetten
        console.log(this.apiKey);



        /*if (
                
            localStorage.getItem("weather")&&
            Date.now() - localStorage.getItem("timestamp") < 600000 // 10min
        ){

            const weatherData = JSON.parse(localStorage.getItem("weather"));
            this.displayWeather(weatherData);
        } else {
            
            // check our location 
            this.getLocation();
        }*/

        this.getLocation();

       


       
    }

    getLocation() {
        //console.log('getLocation');

        if (navigator.geolocation) { // als de browser geolocation ondersteunt dan: 

            // vraag aan de browser (navigator), aan het object (geolocation) om de huidige locatie (getCurrentPosition) te bepalen.
            navigator.geolocation.getCurrentPosition(

                // als de locatie bepaald is, dan voer de volgende functie (getWeather) uit met de positie als parameter (position)
                this.getWeather.bind(this)
            );
        } else {

            // als de browser geen geolocation ondersteunt, dan geef een foutmelding
            console.log('Geolocation is not supported by this browser.');
        }   

    }

    getWeather(position) {

        console.log(position);
        const lat= position.coords.latitude; // hier vraag ik de latitude op uit de positie
        const lon = position.coords.longitude; // hier vraag ik de longitude op uit de positie

        // hier maak ik een nieuwe url aan met de api key en de latitude en longitude deze is nodig om 
        const url =`https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${lat},${lon}&aqi=no`;

        // hier maak ik een nieuwe request aan met de url die ik hierboven heb gemaakt
    
        // fetch is een functie die een request maakt naar een url
        //The fetch() method in JavaScript is used to request data from a server. 
        //The request can be of any type of API that return the data in JSON or XML. The fetch() method requires one parameter, the URL to request, and returns a promise.
        //https://www.geeksforgeeks.org/javascript-fetch-method/

        // then((response)=>response.json()): hier zeg ik dat ik de response wil omzetten naar json formaat, dit is nodig om de data te kunnen gebruiken
        // then is een promise , een belofte dat de data er is dat die ons een response geeft
        
        // hier werken we met een api die in de server zit en die data teruggeeft in json formaat daarom gebruiken we ftech en dan de response omzetten naar json formaat
        fetch(url) 
        .then((response)=>response.json()) 
        .then((data)=> {
            
            localStorage.setItem("weather", JSON.stringify(data)); //converts data to string and stores it in local storage, local storge means it will be stored in the browser

            localStorage.setItem("timestamp", Date.now());
            //console.log(data);

            this.displayWeather(data); //
           
        }); 
    
    }   

   
}



       
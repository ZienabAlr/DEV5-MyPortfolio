export default class Ad {
  
    constructor(api_key) {
        //console.log('Ad has been loaded');

        this.apiKey = api_key; // de api key die we hebben gekregen van de api hierboven in de constructor zetten
        //console.log(this.apiKey);

        //this.getLocation();

        if ( // als de data in de local storage is en de tijd die we hebben opgeslagen in de local storage is groter dan 10 minuten dan haal de data opnieuw op
                
            localStorage.getItem("weather")&&
            Date.now() - localStorage.getItem("timestamp") < 600000 
        ){

            const weatherData = JSON.parse(localStorage.getItem("weather"));
            this.displayWeather(weatherData);
        } else {
            
            // check our location 
            this.getLocation();
        }



       
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
            
            //converts data to string and stores it in local storage, local storge means it will be stored in the browser
            localStorage.setItem("weather", JSON.stringify(data)); // waether is de naam van de key en data is de data die we willen opslaan die we hebben gekregen van de api

            localStorage.setItem("timestamp", Date.now()); // timestamp is de naam van de key en Date.now() is de tijd die we willen opslaan 
            //console.log(data);

            //local storage set item day
            //localStorage.setItem("day", JSON.stringify(data)); 


            this.displayWeather(data); // hier roep ik de functie displayWeather aan en geef ik de data mee als parameter in deze functie wil ik de data gebruiken om de data weer te geven op de pagina
           
        }); 
    
    }   

    displayWeather(data){

        const temp= data.current.temp_c; //haal de temperatuur uit de data
        document.querySelector(".weather__temp").innerText = temp + "°C"; // zet de temperatuur in de html

        const weather= data.current.condition.text; //haal de weersomstandigheden uit de data
        document.querySelector(".weather__summary").innerText = weather;// zet de weersomstandigheden in de html

        const icon= data.current.condition.icon; //haal de icon uit de data


        const img= document.createElement("img"); // maak een nieuwe img aan

        img.src =icon; // zet de src van de img op de icon die we hebben opgehaald uit de data
        document.querySelector(".weather__icon").appendChild(img); // zet de img in de html

        const date = data.location.localtime; //haal de datum uit de data
        document.querySelector(".weather__date").innerText = date;// zet de datum in de html

        const day= data.current.is_day; //haal de dag uit de data
        if(day == 1){ // als het dag is dan:
            document.querySelector(".weather__day").innerText = "Happy Nespresso Day";// zet de dag in de html
        } else {
            document.querySelector(".weather__day").innerText = " Happy Nespresso Night";// zet de nacht in de html
        }

    }

   
}



       
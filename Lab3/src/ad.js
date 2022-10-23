export default class Ad {
  
    constructor(api_key) {
        //console.log('Ad has been loaded');

        this.apiKey = api_key; // de api key die we hebben gekregen van de api hierboven in de constructor zetten
        console.log(this.api_key);

        // check our location 
        this.getLocation();

        //this.lat; // eigenschap latitude
        //this.long; // eigenschap longitude
       
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

    }   
}
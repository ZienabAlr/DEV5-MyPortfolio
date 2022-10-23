export default class Ad {
  
    constructor() {
        //console.log('Ad has been loaded');

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
    }

    errorlocation(err) {

        //console.log(err);

    }
    
   

}

let ad = new Ad();
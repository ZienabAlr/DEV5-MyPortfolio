export default class Ad {
  
    constructor() {
        //console.log('Ad has been loaded');

        // check our location 
        this.getLocation();
       
    }

    getLocation() {
        //console.log('getLocation');
        // get the location from the browser
        navigator.geolocation.getCurrentPosition(this.gotlocation, this.errorlocation); // vragen aan de browser (navigator), aan het object (geolocation) om de huidige locatie (getCurrentPosition) te bepalen.
        // als het lukt, dan de functie gotlocation uitvoeren, als het niet lukt, dan de functie errorlocation uitvoeren.

       
    }   

    gotlocation(result) {

        console.log(result);
    }

    errorlocation(err) {

        console.log(err);

    }
    
   

}

let ad = new Ad();
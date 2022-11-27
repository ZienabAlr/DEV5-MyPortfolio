<script setup>
import {onMounted, reactive, ref} from 'vue';

let messages = reactive([]); // hier maak ik een array waar ik de info van de messages in kan stoppen (namen en comments)"reactive" is een functie die een object maakt dat reageert op veranderingen in de data die erin zit 
let text = ref(''); // hier maak ik een variabele aan waar ik de text in kan stoppen


 onMounted(() => { // hier maak ik een functie die de data van de api ophaalt en in de array stopt
 
  const api_url =' https://lab5-p379.onrender.com/api/v1/messages/';
  fetch(api_url)
  .then((response) => response.json()) // parse JSON from request into native JavaScript objects json is a method of the response object that returns a promise that resolves with the result of parsing the body text as JSON 
  .then((data) => {

    console.log(api_url);
    data.forEach((item) => { // de data bestaat uit een array met daarin objecten, voor elk object in de array voer ik de volgende code uit 
    messages.push(item);// ik push de objecten in de array messages

    // reverse the array to show the newest message on top
    messages.reverse(); // ik draai de array om zodat de nieuwste bovenaan komt te staan
    
    });

  }); 

});

// Een functie die een post request maakt naar de api om de data te posten

const postMessage = () => { // hier maak ik een functie aan die de data van de input in de api stopt
  //Hieronder maak ik een object (variabele) aan met daarin de data die ik wil posten
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: 'Zienab',
      text: text.value  
    }) // hier geef ik aan dat ik de data van de input wil sturen
  };
  const api_url =' https://lab5-p379.onrender.com/api/v1/messages/';

  // eerst roep ik de api aan en geef ik aan dat ik een post request wil doen
  fetch(api_url, requestOptions)
  .then((response) => response.json()) 
  .then((data) => { // hier krijg ik de data terug van de api
    
    text.value = '';  // hier maak ik de input weer leeg na het versturen van de data 
  
  });
}

</script>

<template>
  <div>
    <!-- hier haal ik de namen en comments uit de array messages en zet ik elke message in een ul  -->
    <!-- In elke message vraag ik de user (username) en de text (de comment) -->
    <ul v-for="item in messages" :key="item">
      <h4>{{item.user}}</h4>
      <p>{{item.text}}</p>
    </ul>

    <input type="text" placeholder="Add comment" v-model="text" >
    <button @click="postMessage">Post</button>
   
  </div>
 
</template>

<style scoped>

.video_details{
  padding: 0 1rem;
}
</style>
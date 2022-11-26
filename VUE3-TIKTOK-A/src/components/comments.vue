<script setup>
import {onMounted, reactive, ref} from 'vue';

let messages = reactive([]); // hier maak ik een array waar ik de info van de messages in kan stoppen (namen en comments)"reactive" is een functie die een object maakt dat reageert op veranderingen in de data die erin zit 

onMounted(() => { // hier maak ik een functie die de data van de api ophaalt en in de array stopt

  const api_url =' https://lab5-p379.onrender.com/api/v1/messages/';
  fetch(api_url)
  .then((response) => response.json()) // parse JSON from request into native JavaScript objects json is a method of the response object that returns a promise that resolves with the result of parsing the body text as JSON 
  .then((data) => {
    console.log(data);

    
    data.forEach((item) => { // de data bestaat uit een array met daarin objecten, voor elk object in de array voer ik de volgende code uit
      

      messages.push(item);// ik push de objecten in de array messages

    
  });

}); 

</script>

<template>
  <div>
    <!-- hier haal ik de namen en comments uit de array messages en zet ik elke message in een ul  -->
    <!-- In elke message vraag ik de user (username) en de text (de comment) -->
    
   
  </div>
 
</template>

<style scoped>

.video_details{
  padding: 0 1rem;
}
</style>
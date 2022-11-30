<script setup>

import {onMounted, reactive, ref} from 'vue';

let username = ref(''); // ref is a reactive variable that can be used in the template and updated in the script
let description = ref (''); 
onMounted(() => {

    const api_url ='http://127.0.0.1:5173/tiktok.json';
    fetch(api_url)
    .then((response) => response.json()) // parse JSON from request into native JavaScript objects json is a method of the response object that returns a promise that resolves with the result of parsing the body text as JSON 
    .then((data) => {
      console.log(data);
      username.value = data.videos[0].username;
        description.value = data.videos[0].description;
     
    });

})

</script>

<template>
  <div class="video_details">
   <h3>{{username}}</h3>
    <p>{{description}}</p>
  </div>
 
</template>

<style scoped>

.video_details{
  padding: 0 1rem;
}
</style>
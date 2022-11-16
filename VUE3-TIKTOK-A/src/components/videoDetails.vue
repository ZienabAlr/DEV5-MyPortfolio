<script setup>

import {onMounted, reactive, ref} from 'vue';

let username = ref('');
let description = ref (''); 
onMounted(() => {

    const api_url ='http://127.0.0.1:5173/tiktok.json';
    fetch(api_url)
    .then((response) => response.json())
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
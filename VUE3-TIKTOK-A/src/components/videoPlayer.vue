<script setup>
import {onMounted, reactive, ref} from 'vue';
import 'animate.css';

let src = ref('');
let videos = reactive({ videos: [] });
let animation = ref('animate__fadeOut');
//onmouted
onMounted(() => {

let api_url= 'http://127.0.0.1:5173/tiktok.json';
    fetch(api_url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      src.value = data.videos[0].video;
      videos.videos = data.videos;

     
    });
})

const nextVideo = () => {
    animation.value = 'animate__fadeOut';
    setTimeout(() => {
      src.value = videos.videos[1].video;
      animation.value = 'animate__fadeIn';
    }, 1000);
    src.value = videos.videos[1].video;
}


</script>


<template>
   
  <div class="video">
    <div class="controls">
        <a @click.prevent="nextVideo" href="#" class="controls__next">⬇</a>
    </div>

    <video :class="animation" class="animate__animated" :src="src" controls autoplay></video>
    </div>
 
</template>

<style scoped>
.video{
  position: relative;
  
}
.controls{
    position: absolute;
    right: 2em;
    top: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

}
.controls__next{
  font-size: 2rem;
 
  color: black;
}
video {

    max-width: 100%;
    max-height: 100vh;
}

</style>
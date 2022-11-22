<script setup>
import VideoPlayer from './components/videoPlayer.vue';
import VideoDetails from './components/videoDetails.vue';
import VideoComments from './components/videoComments.vue';

</script>

<template>
  <div class="app">
   <VideoPlayer />
   <VideoDetails />
    <VideoComments />
  </div>
 
</template>

<style scoped>
.app{

  display: grid;
  grid-template-columns: 8fr 4fr;

}
</style>

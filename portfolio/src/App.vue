<script setup>
import FooterBar from './components/FooterBar.vue';
import NavigationBar from './components/NavigationBar.vue';

</script>

<template class="font-sans">
  <NavigationBar></NavigationBar>
    <div class="main-container content-center">  
      <router-view/>
    </div>  
  <FooterBar></FooterBar>
</template>

<style>
/* #app {
  font-family: 'SF Mono', SFMono-Regular, ui-monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>

<template>
  <header>
    <router-link to="/">
    <h1><span>Vue</span>Movies</h1>
    </router-link>
  </header>
<main>
   <router-view />
</main>
  
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
  }
}
</script>

<style>
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Fira Sans', sans-serif;

  &::selection{
    background:transparentize(#42B883,0.5);
  }
}

body{
  background-color:#35495E;
}
</style>

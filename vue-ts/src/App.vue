<template>
  <img id="logo" alt="Vue logo" src="./assets/logo.png">
  <contenuApp msg="Comparavroum"/>
  <contenuComparateur msg="Comparateur"/>
</template>

<script>
import contenuApp from './components/contenuApp.vue'
import contenuComparateur from './components/contenuComparateur.vue'

export default {
  name: 'App',
  components: {
    contenuApp,
    contenuComparateur
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  #logo{
    width: 100px;
    height: 100px;
  }
</style>

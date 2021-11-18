<template>
  <div id="app">
   <div class="jumbotron">
      <h1>JUEGO DE COLORES</h1>
      <br>
      <Juego></Juego>
    </div> 
  </div>
</template>





<script>

import Juego from './components/Juego.vue'
export default {
  name: 'App',
  components: {
    Juego
  }
}
</script>




<style>
#app {

}
</style>

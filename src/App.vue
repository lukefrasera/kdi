<template>
  <div id="app">
    <p>Hello World</p>
    <kdi title="Kernel Download Installer"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Kdi from './components/kdi.vue'
export default {
  name: 'app',
  components: {
    "kdi": Kdi
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

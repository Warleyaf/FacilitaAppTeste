<template>
  <section id='app'>
      <router-view></router-view>
  </section>  
</template>

<script>
import './global.styl'
import Home from './components/home/Home.vue'
// import Dashboard from './components/dashboard/Dashboard.vue'

export default {
  name: 'App',
    components: {
      Home
    }
  }
</script>


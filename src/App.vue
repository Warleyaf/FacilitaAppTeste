<template>
  <section id='app'>
      <Home/>
      <Dashboard/>
  </section>  
</template>

<script>
import './global.styl'
import Home from './components/home/Home.vue'
// import Dashboard from './components/dashboard/Dashboard.vue'

export default {
  name: 'App',
  components: {
    Home,
    // Dashboard,
  }
  
  }
</script>


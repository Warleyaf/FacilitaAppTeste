<template>
<main>
   <LogoLeft/>
   <Login/>
</main>
   
</template>

<script>
   import LogoLeft from './LogoLeft.vue';
   import Login from './Login.vue'
   
   export default{
      name: 'Home',
      components: {
         LogoLeft,
         Login
      }
   }

</script>

<style src="./styles.styl" lang="styl"/>
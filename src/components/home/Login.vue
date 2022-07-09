<template>
   <div class="login">
      <div class="login-info">
         <strong>Entre com seus dados de acesso.</strong>
         <form action="">

            <label for="user">Nome de usuário ou E-mail</label>
            <input type="text">

            
            <label for="password">Senha:</label>
            <input type="password">
            
            <router-link class="button" to="/dashboard">Entrar</router-link>
         </form>

         
         <a href="#">Esqueci minha senha</a>
      </div>


   </div>
</template>

<script>
   export default{
      name: 'Login',
   }
</script>
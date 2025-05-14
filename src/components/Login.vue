<template>
  <div>
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <input v-model="email" type="email" placeholder="Correo" />
      </div>
      <div class="form-group">
        <input v-model="password" type="password" placeholder="Contraseña" />
      </div>
      <button type="submit">Entrar</button><button  @click="registro">Registrarse</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      if (this.rol === 'admin'){
        this.$router.push('/clients');
      }else{
        this.$router.push('/home');
      }
    },
    registro(){
        this.$router.push('/register');
    }
  }
};
</script>

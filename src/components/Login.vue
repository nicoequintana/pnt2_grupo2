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
      const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));

      if (!usuarioGuardado) {
        alert("No hay usuario registrado.");
        return;
      }

      if (
        usuarioGuardado.email === this.email &&
        usuarioGuardado.password === this.password
      ) {
        if (usuarioGuardado.rol === 'admin') {
          alert("ADMIN");
          this.$router.push('/clients');
        } else {
          this.$router.push('/user');
        }
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    },

    registro() {
      this.$router.push('/register');
    }
  }
};
</script>

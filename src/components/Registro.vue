<template>
  <div>
    <h2>Registrarse</h2>
    <form @submit.prevent="registro">
      <div class="form-group">
        <input v-model="nombre" type="text" placeholder="Nombre" />
        <span v-if="!nombre && submitted" class="error">*</span>
      </div>
      <div class="form-group">
      <input v-model="apellido" type="text" placeholder="Apellido" />
      <span v-if="!apellido && submitted" class="error">*</span>
      </div>
      <div class="form-group">
        <input v-model="email" type="email" placeholder="Correo" />
        <span v-if="!email && submitted" class="error">*</span>
      </div>
      <div class="form-group">
        <input v-model="password" type="password" placeholder="Contraseña" />
        <span v-if="!password && submitted" class="error">*</span>
      </div>
      <div class="form-group">
        <input v-model="rol" type="text" placeholder="Rol" />
        <span v-if="!rol && submitted" class="error">*</span>
      </div>
      <div class="form-group">
        <button type="submit">Registrarse</button>
      </div>
    </form>
  </div>
</template>

<script>
    export default {
    data() {
        return {
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        rol: '',
        submitted: false //indico si fue enviado el formulario
        };
    },
  methods: {
    async registro() {
       this.submitted = true 
      if(!this.nombre || !this.apellido || !this.email || !this.password || !this.rol){
        alert("Completar los datos faltantes!")
        return
      }else{
        console.log(`Logueando con ${this.email} y ${this.password}`);
        this.$router.push('/home');;
        }
    }
  }
};
</script>
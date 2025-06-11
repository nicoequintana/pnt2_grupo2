<style>

.title{
    font-size: 5rem;
    font-weight: 700;
    color: var(--color-text-light);
    font-family: var(--font-nunito);
    text-align: center;
}

.subtitle{
    margin-bottom: 2rem;
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--color-text-light);
    font-family: var(--font-nunito);
    text-align: center;
}

.loginPage {
    width: 100dvw;
    height: 100dvh;
    padding: 2rem;
    padding-top: 4rem;
    background-color: var(--color-background-dark);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}


.loginContainer{
    padding: 1rem 1rem 0.5rem 1rem;
    width: 100%;
    max-width: 500px;
    height: 400px;
    border: 1px solid rgba(255, 255, 255, 0.137);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}


.form-group{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
    color: var(--color-text-light);
}

input {
    width: 100%; 
    height: 40px;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    margin-bottom: 0.5rem;
}

label{
    margin-bottom: .5em;
}

span{
    color: var(--color-text-light);
    font-size: 1.1rem;
    cursor: pointer;
    padding: 5px 15px;
    border: 1px solid var(--color-text-light);
    border-radius: 5px;
    align-self: self-end;
    margin-bottom: 4rem;
}

.form {
    width: 80%;
    align-self: center;
    font-size: 1.5rem;
}


.btn-login {
    width: 200px;
    height: 40px;
    margin-bottom: 1rem;
    background-color: var(--color-success);
    color: var(--color-text-light);
    font-size: 1.5rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-weight: 500;
}

:root {
    --color-success: #28a745;
}

.register-link {
    font-size: 0.9rem;         
    color: #e74c3c; 
    border: 1px solid #e74c3c; 
    border-radius: 5px;
    padding: 6px 12px; 
    cursor: pointer;
    margin: 0;
    font-weight: 500;
}

</style>

<template>
  
  <div class="loginPage">
    <h1 class="title">Hola!</h1>
    <p class="subtitle">Nos encanta tenerte por aca</p>
    <div class="loginContainer">
      <div class="form">
        <form class="form-group" @submit.prevent="login">
          <div class="form-group">
            <label for="email">Correo</label>
            <input v-model="email" type="email" placeholder="Correo" />
          </div>
          <div class="form-group">
            <label for="email">Contraseña</label>
            <input v-model="password" type="password" placeholder="Contraseña" />
          </div>
          <div class="form-actions">
              <button class="btn-login" type="submit">Ingresar</button>

              <span class="register-link">Registarse</span>
          </div>
          <!-- <button class="btn-login" type="submit">Entrar</button><button  @click="registro">Registrarse</button> -->
        </form>
        </div>
      </div>
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

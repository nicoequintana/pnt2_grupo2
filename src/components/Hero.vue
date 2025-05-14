<script setup>
import Nav from './Nav.vue'
</script>

<template>

  <div class="hero">
    <div class="hero-overlay"></div> <!-- Mueve la capa oscura aquí -->

    <Nav class="hero-nav" />

    <div class="hero-content">
      <h1>Bienvenido a NT 2</h1>
      <p>Proyecto de rutinas personalizadas - 3Q ORT</p>
      <table>
          <tr>
            <td>hola hola</td>
            
            <td>
                <router-view />
            </td>
          </tr>
      </table>
    </div>
  </div>


</template>

<style scoped>
.hero {
  width: 100%;
  height: 60vh;
  background-image: url('https://media.revistagq.com/photos/6012947c9976390c571e2666/16:9/w_2560%2Cc_limit/ejercicios%2520gluteos.jpg');
  background-size: cover;
  background-position: top;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  position: relative;
  color: white;
  text-align: center;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Oscurece la imagen de fondo */
  z-index: 1; /* Asegura que esté detrás del contenido */
}

.hero-nav {
  position: relative;
  z-index: 2; /* Asegura que Nav esté por encima de la capa oscura */
  width: 100%;
}

.hero-content {
  position: relative;
  z-index: 2; /* Asegura que el contenido esté por encima de la capa oscura */
  margin-top: 20px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}
</style>
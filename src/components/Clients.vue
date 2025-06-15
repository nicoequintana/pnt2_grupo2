<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('userRole')
  router.push('/login')
}
</script>

<template>
  <div class="alumno-dashboard">
    <h1>¡Bienvenido, Alumno!</h1>
    <p>Aquí verás tus rutinas, progreso, y más.</p>
    <button @click="logout">Cerrar sesión</button>
  </div>
</template>



<style scoped>
.alumno-dashboard {
  padding: 3rem;
  text-align: center;
}
</style>

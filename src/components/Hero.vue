<script setup>
import Nav from './Nav.vue'
</script>

<template>
  <div class="hero">
    <div class="hero-overlay"></div>
    <Nav class="hero-nav" />
    <div class="hero-content">
      <table>
        <tr>
          <td></td>
          <td>
            <router-view />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<!-- Global resets and table cleanup -->
<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-background-dark);
}

.hero-content table {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  background: transparent;
}

.hero-content td {
  border: none;
  padding: 0;
  background: transparent;
}
</style>

<!-- Scoped component styles -->
<style scoped>
.hero {
  width: 100%;
  height: 100vh;
  /* background-image: url('...'); */
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
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-nav {
  position: relative;
  z-index: 2;
  width: 100%;
}

.hero-content {
  position: relative;
  z-index: 2;
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

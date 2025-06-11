<script setup>
  import Layout from './Layout.vue'
  import Nav from './components/Nav.vue'
  import Hero from './components/Hero.vue'
</script>

<template>

<div class="testClass">

  <!-- <Nav /> -->
  <Hero />

</div>

</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  background-color: var(--color-background-dark);
  height: 100%;
  width: 100%;
}


.testClass {
  width: 100%;
  height: 100dvh;
  margin: 0;
  background-color: #373737;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: start;
}
</style>

<script setup>
import sectionsData from '../utils/sections.js';
import { ref } from 'vue'

const isCollapsed = ref(false)

const sections = ref(sectionsData)

function toggleSidebar() {
  isCollapsed.value = !isCollapsed.value
}
</script>

<style scoped>
.sidebar {
  width: 280px; 
  height: 100vh; 
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  position: fixed; 
  top: 0;
  right: 0; 
  background-color: rgba(27, 27, 27, 0.726);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.377);
  transition: all 0.3s ease; 
}


.avatar{
    width: 150px;
    height: 150px;
    background-color: rgba(93, 93, 93, 0);
    border-radius: 50%;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--color-background-light);
    overflow: hidden;
    position: relative;
}

.userName, .userType{
    color: var(--color-background-light);
    text-align: center;
    font-size: 2rem;
}
.userType{
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
}

.divLine{
    width: 100%;
    margin: 0 auto;
    height: 2px;
    background-color: aliceblue;
}

.listItemSidebar{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: end;
    align-items: center;
    color: var(--color-background-light);
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.sidebar.collapsed {
  width: 20px;           
  padding: 10px 5px;     
  overflow: hidden;     
  transition: width 0.3s ease;
}

.sidebar.collapsed .userName,
.sidebar.collapsed .userType,
.sidebar.collapsed .divLine,
.sidebar.collapsed .listItemSidebar,
.sidebar.collapsed .avatar {
  display: none;         
}

.sidebar.collapsed .toggle-button {
  right: 2px;
  top: 15px;
  font-size: 1.5rem;
  z-index: 2;            
  position: absolute;
}

.toggle-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 2;
  padding: 5px;
  transition: transform 0.3s ease;
}


</style>

<template>
  <div>
    <div class="sidebar" :class="{ collapsed: isCollapsed }">
      
      <button @click="toggleSidebar" class="toggle-button">
  <span>{{ isCollapsed ? '◀' : '➤' }}</span>
</button>


      <div class="avatar">
        <img src="https://www.pngarts.com/files/3/Avatar-PNG-Pic.png" alt="foto de perfil del usuario">
      </div>
      <span v-if="!isCollapsed" class="userName">Fernando Colombo</span>
      <span v-if="!isCollapsed" class="userType">Cliente</span>
      <div class="divLine" v-if="!isCollapsed"></div>
      <ul>
        <li class="listItemSidebar" v-for="section in sections" :key="section.id">
          <span v-if="!isCollapsed">{{ section.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>


<script setup>
import sections from '../utils/sections.js';
</script>

<style scoped>
.sidebar{
    width: 280px;
    height: 100dvh;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    position: absolute;
    border-radius: 50px 0 0 15px;
    top: 0;
    right: 0;
    background-color: rgba(27, 27, 27, 0.726);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.377);
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
</style>

<template>
    <div class="sidebar">
        <div class="avatar">
            <img src="https://www.pngarts.com/files/3/Avatar-PNG-Pic.png" alt="foto de perfil del usuario">
        </div>
        <span class="userName">Fernando Colombo</span>
        <span class="userType">Cliente</span>
        <div class="divLine"></div>
        <ul>
            <li class="listItemSidebar" v-for="section in sections" :key="section.id">
                <span>{{ section.name }}</span>
            </li>
        </ul>
    </div>
</template>
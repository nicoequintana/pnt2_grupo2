<script setup>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';


</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.layout{
    width: 100%;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.layoutContainer{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.headerStyle{
    width: 100%;
    height: 60px;
    padding: 5px 15px;
    background-color: var(--color-background-dark);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.avatar{
    width: 40px;
    height: 40px;
    background-color: var(--color-background-light);
    border-radius: 50%;
}

.headerStyle > span{
    font-size: 2rem;
    font-weight: 500;
    color: var(--color-text-light);
}

</style>

<template>
    <div class="layout">
        <div class="layoutContainer">
            <header class="headerStyle">
                <span>SMART ROUTINE APP</span>
            </header>
            <main>

            </main>
            <Navbar />
            <Sidebar />
        </div>
    </div>
</template>
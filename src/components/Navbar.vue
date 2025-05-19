<script setup>

</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.navbar{
    width: 100%;
    height: 70px;
    padding: 5px 15px;
    background-color: var(--color-background-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
}

.navbarContainer{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navIcon{
    width: 60px;
    height: 60px;
    border-radius:50%;
    border: 1px solid rgb(79, 79, 79);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-text-light);
    cursor: pointer;
}

</style>

<template>
    <div class="navbar">
        <div class="navbarContainer">
            <div class="navIcon">1</div>
            <div class="navIcon">2</div>
            <div class="navIcon">3</div>
            <div class="navIcon">4</div>
        </div>
    </div>
</template>


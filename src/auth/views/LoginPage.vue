
<!-- scripts -->

<script setup>

</script>

<!-- estilos -->

<style scoped>

.loginPage{
    width: 100dvw;
    height: 100dvh;
    padding: 2rem;
    background-color: var(--color-background-dark);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title{
    /* margin-bottom: 1rem; */
    font-size: 10rem;
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

.loginContainer{
    width: 100%;
    max-width: 500px;
    height: 400px;
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, 0.137);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.form{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.form-group{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    color: var(--color-text-light);
}

label{
    margin-bottom: .5em;
}

input{
    width: 100%;
    height: 40px;
    padding: 5px;
    margin-bottom: 1em;
    border-radius: 5px;
    border: none;
    background-color: var(--color-background-light);
    color: var(--color-text-dark);
    font-size: 1.2rem;
}

.btn-login{
    width: 200px;
    height: 40px;
    margin-bottom: 1.5rem;
    background-color: var(--color-success);
    color: var(--color-text-light);
    font-size: 1.5rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-weight: 500;
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

.form > span:nth-of-type(2) {
    align-self: center;
    font-size: 1.5rem;
}

/* @media only screen and (min-width: 500px) {
    .title{
        text-align: center;
        margin: 0 auto 2rem auto;
    }
} */

</style>

<!-- template -->
 <template>

    <div class="loginPage">
        <h1 class="title">hola!</h1>
        <p class="subtitle">Nos encanta tenerte por aca.</p>
        <div class="loginContainer">
            <div class="form">
                <div class="form-group">
                    <label for="email">Usuario</label>
                    <input type="email" id="email" placeholder="smart-routine@gim.com" />
                </div>
                <div class="form-group">
                    <label for="password">Clave</label>
                    <input type="password" id="password" placeholder="Ingresa tu clave" />
                </div>
                <span>Oops... olvide mi clave.</span>
                <button class="btn-login" type="submit">
                    Ingresar
                </button>
                <span>No tengo cuenta</span>
            </div>
        </div>
    </div>

 </template>
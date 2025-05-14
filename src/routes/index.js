import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Routines from '../components/Routines.vue'
import Login from '../components/Login.vue'
import Registro from '../components/Registro.vue'
import App from '../App.vue'


const routes = [
    // { path: '/', name: 'Home', component: App},
    { path: '/home', name: 'Home', component: Home},
    { path: '/login', name: 'login', component: Login},
    { path: '/registro', name: 'Registro', component: Registro},
    { path: '/routines', name: 'Routines', component: Routines},
]

const router = createRouter({ 
    history: createWebHistory(),
    routes,
 })

 export default router;
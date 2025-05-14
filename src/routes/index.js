import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Routines from '../components/Routines.vue'
import Login from '../components/Login.vue'
import Clients from '../components/Clients.vue'
import Register from '../components/Register.vue'
import App from '../App.vue'


const routes = [
    { path: '/', name: 'Home', component: App},
    { path: '/home', name: 'Home', component: Home},
    { path: '/login', name: 'login', component: Login},
    { path: '/register', name: 'Register', component: Register},
    { path: '/routines', name: 'Routines', component: Routines},
    { path: '/clients', name: 'Clients', component: Clients}
]

const router = createRouter({ 
    history: createWebHistory(),
    routes,
 })

 export default router;
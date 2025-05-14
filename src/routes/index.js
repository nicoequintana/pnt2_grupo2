import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Routines from '../components/Routines.vue'
import App from '../App.vue'


const routes = [
    // { path: '/', name: 'Home', component: App},
    { path: '/home', name: 'Home', component: Home},
    { path: '/routines', name: 'Routines', component: Routines},
]

const router = createRouter({ 
    history: createWebHistory(),
    routes,
 })

 export default router;
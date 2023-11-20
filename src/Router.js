import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
import CubosComponent from './components/CubosComponent.vue'
import DetallesCubo from './components/DetallesCubo.vue'
import LoginComponent from './components/LoginComponent.vue'
import PerfilComponent from './components/PerfilComponent.vue'

const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/cubos/:marca", component: CubosComponent
    },
    {
        path: "/detalles/:id", component: DetallesCubo
    },
    {
        path: "/login", component: LoginComponent
    },
    {
        path: "/perfil", component: PerfilComponent
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
});

export default router;

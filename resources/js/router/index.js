import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Inicio.vue')
        },
        {
            path: '/nosotros',
            name: 'Nosotros',
            component: () => import('../views/Nosotros.vue')
        },
    ]
});


export default router

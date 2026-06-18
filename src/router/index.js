import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'

import { useAuthStore } from '@/stores/authStore'



const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardView,
        meta: {
            requiresAuth: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})



router.beforeEach((to) => {
    const authStore = useAuthStore()

    const requieresAuth = to.matched.some(
        route => route.meta.requiresAuth
    )


    if (requieresAuth && !authStore.isAutenticado){
        return { name: 'login' }
    }
})
export default router;
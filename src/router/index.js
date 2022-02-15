import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routerHistory = createWebHistory('/aProject/')
const router = createRouter({
    history: routerHistory,
    routes: [{
        path: '/',
    }, {
        path: '/foo',
        component: () => import('../views/foo.vue')
    }, {
        path: '/bar',
        component: () => import('../views/bar.vue')
    }]
})
export default router
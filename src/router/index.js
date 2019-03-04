import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '*',
            redirect: '/home'
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        }
    ]
})

export default router;

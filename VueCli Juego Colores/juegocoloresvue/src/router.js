import Vue from 'vue'
import VueRouter from 'vue-router'

import Juego from './componentes/Juego.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/juego' },
        { path: '/juego', component: Juego }
    ]
})
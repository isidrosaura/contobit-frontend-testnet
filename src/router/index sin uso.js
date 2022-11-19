import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// parece que este fichero no actua desde que se añadio el router.js en raiz
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Notas',
    name: 'Notas',

    component: () => import(/* webpackChunkName: "about" */ '../views/Notas.vue')
  },
  {
    path: '/Comprar',
    name: 'Comprar',

    component: () => import(/* webpackChunkName: "about" */ '../views/Comprar.vue')
  },
  {
    path: '/Vender',
    name: 'Vender',

    component: () => import(/* webpackChunkName: "about" */ '../views/Vender.vue')
  },
  {
    path: '/Entrar',
    name: 'Entrar',

    component: () => import(/* webpackChunkName: "about" */ '../views/Entrar.vue')
  },
  {
    path: '/app',
    name: 'app',

    component: () => import(/* webpackChunkName: "about" */ '../views/app.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/nota',
    name: 'nota',
    component: () => import(/* webpackChunkName: "nota" */ '../views/Nota.vue'),
    meta: {requireAuth: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// agragados para nprogress loading barra

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router

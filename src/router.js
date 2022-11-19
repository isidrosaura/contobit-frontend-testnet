import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NProgress from 'vue-nprogress'

// Importamos la tienda
import store from './store.js';

Vue.use(Router)

const options = {
  latencyThreshold: 200, // Number of ms before progressbar starts showing, default: 100,
  router: true, // Show progressbar when navigating routes, default: true
  http: false // Show progressbar when doing Vue.http, default: true
};
Vue.use(NProgress, options);
const nprogress = new NProgress();

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    }, ,
    // {
    //      path: '/Notas',
    //      name: 'Notas', 
    //      component: () => import(/* webpackChunkName: "notas" */ './views/Notas.vue')
    //    },
    {
      path: '/Comprar',
      name: 'Comprar',
      component: () => import( /* webpackChunkName: "comprar" */ './views/Comprar.vue')
    },
    {
      path: '/Comprartt',
      name: 'Comprartt',
      component: () => import( /* webpackChunkName: "comprartt" */ './views/Comprartt.vue')
    },
    {
      path: '/Vender',
      name: 'Vender',
      component: () => import( /* webpackChunkName: "vender" */ './views/Vender.vue')
    },
    {
      path: '/Vendertt',
      name: 'Vendertt',
      component: () => import( /* webpackChunkName: "vendertt" */ './views/Vendertt.vue')
    },
    {
      path: '/Tx',
      name: 'Tx',
      component: () => import( /* webpackChunkName: "tx" */ './views/Tx.vue'),
      
      children: [
        {
          path: 'Txc',
          props: true,
          component: () => import( /* webpackChunkName: "txc" */ './views/Txc.vue')
        },
        {
          path: 'Txv',
          props: true,          
          component: () => import( /* webpackChunkName: "txv" */ './views/Txv.vue')
        },
      ],
    },
    {
      path: '/Txtt',
      name: 'Txtt',
      component: () => import( /* webpackChunkName: "txtt" */ './views/Txtt.vue'),
      children: [
        {
          path: 'Txttc',
          props: true,
          component: () => import( /* webpackChunkName: "txttc" */ './views/Txttc.vue')
        },
        {
          path: 'Txttv',
          props: true,          
          component: () => import( /* webpackChunkName: "txttv" */ './views/Txttv.vue')
        },
      ],      
    },
    {
      path: '/Entrar',
      name: 'Entrar',

      component: () => import( /* webpackChunkName: "entrar" */ './views/Entrar.vue')
    },
    //    {
    //      path: '/login',
    //      name: 'login',
    //     component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    //    }, 
//    {
//      path: '/Arbitro',
//      name: 'Arbitro',
//      component: () => import( /* webpackChunkName: "arbitro" */ './views/Arbitro.vue'),
//    },
//    {
//      path: '/Arbitrott',
//      name: 'Arbitrott',
//      component: () => import( /* webpackChunkName: "arbitrott" */ './views/Arbitrott.vue')
//    },
    {
      path: '/Alertas',
      name: 'Alertas',
      component: () => import( /* webpackChunkName: "alertas" */ './views/Alertas.vue'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/Perfil',
      name: 'Perfil',
      component: () => import( /* webpackChunkName: "perfil" */ './views/Perfil.vue'),
    },
    {
      path: '/About',
      name: 'About',
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue'),
    }
  ]
});

router.beforeEach((to, from, next) => {
  const rutaProtegida = to.matched.some(record => record.meta.requireAuth);

  if (rutaProtegida && store.state.token === '') {
    // console.log(store.state.token);
    // next({name: 'login'}) // en la guia aqui pone 'login' y no Entrar ** probando con login
    next({
      name: 'Entrar'
    }) // en pruebas de momento
  } else {
    next()
  }

})

// agragados para nprogress loading barra
router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {

    window.scrollTo(0, 0);

    // Start the route progress bar.
    nprogress.start()    
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  nprogress.done()
})

export default router;
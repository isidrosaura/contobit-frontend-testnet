import Vue from 'vue'
import VueClipboard from 'vue-clipboard2';
import NProgress from 'vue-nprogress'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import Chat from 'vue-beautiful-chat'
//import VueSimpleAlert from "vue-simple-alert";
//import VTooltip from 'v-tooltip';
import VueQrcodeReader from "vue-qrcode-reader";

require('./plugins/fontawesome');

Vue.use(BootstrapVue);
Vue.use(VueClipboard);
Vue.use(Chat);
//Vue.use(VueSimpleAlert);
//Vue.use(VTooltip);
Vue.use(VueQrcodeReader);

const options = {
  latencyThreshold: 200, // Number of ms before progressbar starts showing, default: 100,
  router: true, // Show progressbar when navigating routes, default: true
  http: false // Show progressbar when doing Vue.http, default: true
};
Vue.use(NProgress, options);

const nprogress = new NProgress();

//Vue.use(require("moment"));

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

// Agregamos la URL base de nuestra API 
  axios.defaults.baseURL = 'http://localhost:3000/api'; // para desarrollo ************************ 
  //axios.defaults.baseURL = 'https://' + window.location.hostname + '/api'; // 'https://www.contobit.com/api'; //

 // console.log(window.location.origin);
 // console.log('en el main window.location.hostname....' + window.location.hostname);  
 // console.log('en el main axios.defaults.baseURL....' + axios.defaults.baseURL);

Vue.config.productionTip = false

new Vue({
  nprogress,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

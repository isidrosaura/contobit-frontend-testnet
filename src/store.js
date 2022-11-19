import Vue from 'vue'
import Vuex from 'vuex'

import router from './router';
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
// para decodificar el jwt
import decode from 'jwt-decode'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    usuarioDB: '',
    nomuser: '', //yo
    iduser: '', //yo
    languser: '', //yo
    monuser: '', //yo
    operuser: '', //yo
    mgmf: '', //yo       
    lastValBtc: null, //yo
    lastValBtcEUR: null, //yo
    lastValBtcVES: null, //yo
    lastValBtcCOP: null, //yo
    lastValBtcCLP: null, //yo    
    lastValBtcBRL: null, //yo     
    lastValBtcMXN: null, //yo
    lastValBtcARS: null, //yo
    lastValBtcPEN: null, //yo
    lastValBtcRUB: null, //yo
    lastValBtcINR: null, //yo
    lastValBtcTRY: null, //yo
    lastValBtcIRR: null, //yo
    lastValBtcCNY: null, //yo
    lastValUsdt: null, //yo
    lastValUsdtEUR: null, //yo
    lastValUsdtVES: null, //yo
    lastValUsdtCOP: null, //yo
    lastValUsdtCLP: null, //yo    
    lastValUsdtBRL: null, //yo     
    lastValUsdtMXN: null, //yo
    lastValUsdtARS: null, //yo
    lastValUsdtPEN: null, //yo
    lastValUsdtRUB: null, //yo
    lastValUsdtINR: null, //yo
    lastValUsdtTRY: null, //yo
    lastValUsdtIRR: null, //yo
    lastValUsdtCNY: null, //yo    
    lastNumAlerts: 0, //yo
    lastClickMoneda: null, //yo
    lastClickLang: null, //yo
    lastClickOper: true, //yo
    lastValSelTx: 'vacio', //yo
    lastValSelAr: 'vacio', //yo
    lastValSelTxtt: 'vacio', //yo
    lastValSelArtt: 'vacio', //yo                  
    lastClickTime: null
  }, 
  mutations: {
    obtenerUsuario(state, payload){
      state.token = payload;
      state.selectedmon = payload; //yo
      state.selectedlang = payload; //yo
      state.selectedoper = payload; //yo           
      state.selectedbtc = payload; //yo      
      state.selectedbtceur = payload; //yo
      state.selectedbtcves = payload; //yo
      state.selectedbtccop = payload; //yo
      state.selectedbtcclp = payload; //yo
      state.selectedbtcbrl = payload; //yo
      state.selectedbtcmxn = payload; //yo
      state.selectedbtcars = payload; //yo
      state.selectedbtcpen = payload; //yo
      state.selectedbtcrub = payload; //yo
      state.selectedbtcinr = payload; //yo
      state.selectedbtctry = payload; //yo
      state.selectedbtcirr = payload; //yo
      state.selectedbtccny = payload; //yo
      state.selectedusdt = payload; //yo      
      state.selectedusdteur = payload; //yo
      state.selectedusdtves = payload; //yo
      state.selectedusdtcop = payload; //yo
      state.selectedusdtclp = payload; //yo
      state.selectedusdtbrl = payload; //yo
      state.selectedusdtmxn = payload; //yo
      state.selectedusdtars = payload; //yo
      state.selectedusdtpen = payload; //yo
      state.selectedusdtrub = payload; //yo
      state.selectedusdtinr = payload; //yo
      state.selectedusdttry = payload; //yo
      state.selectedusdtirr = payload; //yo
      state.selectedusdtcny = payload; //yo      
      state.selectedNumAlerts = payload; //yo
      state.selectedseltx = payload; //yo
      state.selectedselar = payload; //yo
      state.selectedseltxtt = payload; //yo
      state.selectedselartt = payload; //yo                             

      if(payload === ''){
        state.usuarioDB = ''
      }else{
        state.usuarioDB = decode(payload);
 //     console.log(state.usuarioDB.data.NOMBREUSUARIO); //yo
  //    router.push({name: 'Comprar'}); //si la direccion no tiene saldo a comprar
      }
    },

    updateLastClickTime: (state, payload) => {
      state.lastClickTime = payload;
    },
    updateLastClickMoneda: (state, payload) => {
      state.lastClickMoneda = payload;
    },
    updateLastClickLang: (state, payload) => {
      state.lastClickLang = payload;
    },
    updateLastClickOper: (state, payload) => {
      state.lastClickOper = payload;
    //  router.push({ name: "Alertas" })
    },
    updateLastValBtc: (state, payload) => {
      state.lastValBtc = payload;
    },
    updateLastValBtcEUR: (state, payload) => {
      state.lastValBtcEUR = payload;
    },
    updateLastValBtcVES: (state, payload) => {
      state.lastValBtcVES = payload;
    },
    updateLastValBtcCOP: (state, payload) => {
      state.lastValBtcCOP = payload;
    },
    updateLastValBtcCLP: (state, payload) => {
      state.lastValBtcCLP = payload;
    },
    updateLastValBtcBRL: (state, payload) => {
      state.lastValBtcBRL = payload;
    },
    updateLastValBtcMXN: (state, payload) => {
      state.lastValBtcMXN = payload;
    },
    updateLastValBtcARS: (state, payload) => {
      state.lastValBtcARS = payload;
    },
    updateLastValBtcPEN: (state, payload) => {
      state.lastValBtcPEN = payload;
    },
    updateLastValBtcRUB: (state, payload) => {
      state.lastValBtcRUB = payload;
    },
    updateLastValBtcINR: (state, payload) => {
      state.lastValBtcINR = payload;
    },
    updateLastValBtcTRY: (state, payload) => {
      state.lastValBtcTRY = payload;
    },
    updateLastValBtcIRR: (state, payload) => {
      state.lastValBtcIRR = payload;
    },
    updateLastValBtcCNY: (state, payload) => {
      state.lastValBtcCNY = payload;
    },
    updateLastValUsdt: (state, payload) => {
      state.lastValUsdt = payload;
    },
    updateLastValUsdtEUR: (state, payload) => {
      state.lastValUsdtEUR = payload;
    },
    updateLastValUsdtVES: (state, payload) => {
      state.lastValUsdtVES = payload;
    },
    updateLastValUsdtCOP: (state, payload) => {
      state.lastValUsdtCOP = payload;
    },
    updateLastValUsdtCLP: (state, payload) => {
      state.lastValUsdtCLP = payload;
    },
    updateLastValUsdtBRL: (state, payload) => {
      state.lastValUsdtBRL = payload;
    },
    updateLastValUsdtMXN: (state, payload) => {
      state.lastValUsdtMXN = payload;
    },
    updateLastValUsdtARS: (state, payload) => {
      state.lastValUsdtARS = payload;
    },
    updateLastValUsdtPEN: (state, payload) => {
      state.lastValUsdtPEN = payload;
    },
    updateLastValUsdtRUB: (state, payload) => {
      state.lastValUsdtRUB = payload;
    },
    updateLastValUsdtINR: (state, payload) => {
      state.lastValUsdtINR = payload;
    },
    updateLastValUsdtTRY: (state, payload) => {
      state.lastValUsdtTRY = payload;
    },
    updateLastValUsdtIRR: (state, payload) => {
      state.lastValUsdtIRR = payload;
    },
    updateLastValUsdtCNY: (state, payload) => {
      state.lastValUsdtCNY = payload;
    },
    updateLastValSelTx: (state, payload) => {
      state.lastValSelTx = payload;
    },    
    updateLastValSelAr: (state, payload) => {
      state.lastValSelAr = payload;
    },
    updateLastValSelTxtt: (state, payload) => {
      state.lastValSelTxtt = payload;
    },
    updateLastValSelArtt: (state, payload) => {
      state.lastValSelArtt = payload;
    },           
    updateLastNumAlerts: (state, payload) => {
      //console.log(state.lastNumAlerts);
      let antlastNumAlerts = state.lastNumAlerts;
      state.lastNumAlerts = payload;
      //console.log(state.lastNumAlerts);
      if (state.lastNumAlerts !== antlastNumAlerts & state.lastNumAlerts !== 0 ) {
       //Swal.fire(" + 🔔","","warning");        
        router.push({name: 'Alertas'}).catch(err => {});
       // window.history.back();  
      }   
    },        
  },
  actions: {

    guardarUsuario({commit}, payload){
      localStorage.setItem('token', payload);
      commit('obtenerUsuario', payload)   
    if (this.state.lastClickLang === "ESP") {  
    Swal
    .fire({
      icon: 'success',
      showConfirmButton: true,
      timer: 31000,
      title: "¡ Usuario Bitcoin habilitado y 🟢 en linea  !",
      text: "Menú principal de usuario accesible por completo. Si lo desea puede personalizar las opciones de usuario en la opción Perfil del submenú de su dirección bitcoin. Para iniciar con sus preferencias activadas pulse OK, sino, espere unos instantes...",
    }).then((result) => {
        if (result.value) {
          top.location.reload(); 
        } else {
          router.push({name: 'home'});//yo
        }
      })
    }
    if (this.state.lastClickLang === "ENG") {  
      Swal.fire({
        icon: 'success',
        showConfirmButton: true,
        timer: 31000,        
        title:  "Bitcoin user enabled and 🟢 online  !",
        text:  "Main user menu fully accessible. If you wish, you can customize the user options in the Profile option of the submenu of your bitcoin address. To start with your selected preferences, click OK, if not wait a few moments. ..",
      }).then((result) => {
        if (result.value) {
          top.location.reload(); 
        } else {
          router.push({name: 'home'});//yo
        }
      })      
      }    
    if (this.state.lastClickLang === "CAT") {  
        Swal.fire({
          icon: 'success',
          showConfirmButton: true,
          timer: 31000,          
          title:  "Usuari Bitcoin habilitat i 🟢 en línia  !",
          text:  "Menú principal d'usuari accessible al complet. Si ho desitja pot personalitzar les opcions d'usuari desde l'opció Perfil del submenú a la seva adreça bitcoin. Per iniciar amb les seves preferències activades premi OK, sinó espereu uns instants ..",
        }).then((result) => {
          if (result.value) {
            top.location.reload(); 
          } else {
            router.push({name: 'home'});//yo
          }
        })
        }
    if (this.state.lastClickLang === "PORT") {  
          Swal.fire({
            icon: 'success',
            showConfirmButton: true,
            timer: 31000,            
            title:  "Usuário Bitcoin habilitado e 🟢 online  !",
            text:  "Menu principal do usuário totalmente acessível. <br> <br> Se desejar, você pode personalizar as opções do usuário <br> na opção Perfil do submenu do seu endereço de bitcoin. Para começar com suas preferências, clique em OK, se não, espere alguns momentos.",
          }).then((result) => {
            if (result.value) {
              top.location.reload(); 
            } else {
              router.push({name: 'home'});//yo
            }
          })
        }        
    //top.location.reload(); // yo ;
    //router.push({name: 'home'});//yo
    },

    cerrarSesion({commit}){

      commit('obtenerUsuario', '');
      localStorage.removeItem('token');
      // top.location.reload(); 
      router.push({name: 'home'});//yo
    },
    leerToken({commit}){

      const token = localStorage.getItem('token');
      if(token){
        commit('obtenerUsuario', token);
      }else{
        commit('obtenerUsuario', '');
      }
    }, 
    syncUpdateTime: ({ commit }, payload) => {
      commit("updateLastClickTime", payload)
    },
    syncUpdateMoneda: ({ commit }, payload) => {
      commit("updateLastClickMoneda", payload)
    },
    syncUpdateLang: ({ commit }, payload) => {
      commit("updateLastClickLang", payload)
     // console.log("location.."+location.pathname);
    // if (location.pathname === "/Tx" ) router.push({name: '#'});
    // if (location.pathname === "/Arbitro" ) router.push({name: '#'});
    // if (location.pathname === "/Txtt" ) router.push({name: '#'});
    // if (location.pathname === "/Arbitrott" ) router.push({name: '#'});    
    },
    syncUpdateOper: ({ commit }, payload) => {
      commit("updateLastClickOper", payload)
    },       
    syncUpdateValSelTx: ({ commit }, payload) => {
      commit("updateLastValSelTx", payload)     
    },
    syncUpdateValSelAr: ({ commit }, payload) => {
      commit("updateLastValSelAr", payload)
    },
    syncUpdateValSelTxtt: ({ commit }, payload) => {
      commit("updateLastValSelTxtt", payload)     
    },
    syncUpdateValSelArtt: ({ commit }, payload) => {
      commit("updateLastValSelArtt", payload)
    },                    
    syncUpdateValBtc: ({ commit }, payload) => {
      commit("updateLastValBtc", payload)
    },
    syncUpdateValBtcEUR: ({ commit }, payload) => {
      commit("updateLastValBtcEUR", payload)
    },
    syncUpdateValBtcVES: ({ commit }, payload) => {
      commit("updateLastValBtcVES", payload)
    },
    syncUpdateValBtcCOP: ({ commit }, payload) => {
      commit("updateLastValBtcCOP", payload)
    },
    syncUpdateValBtcCLP: ({ commit }, payload) => {
      commit("updateLastValBtcCLP", payload)
    },    
    syncUpdateValBtcBRL: ({ commit }, payload) => {
      commit("updateLastValBtcBRL", payload)
    },
    syncUpdateValBtcMXN: ({ commit }, payload) => {
      commit("updateLastValBtcMXN", payload)
    },
    syncUpdateValBtcARS: ({ commit }, payload) => {
      commit("updateLastValBtcARS", payload)
    },
    syncUpdateValBtcPEN: ({ commit }, payload) => {
      commit("updateLastValBtcPEN", payload)
    },
    syncUpdateValBtcRUB: ({ commit }, payload) => {
      commit("updateLastValBtcRUB", payload)
    },    
    syncUpdateValBtcINR: ({ commit }, payload) => {
      commit("updateLastValBtcINR", payload)
    },
    syncUpdateValBtcTRY: ({ commit }, payload) => {
      commit("updateLastValBtcTRY", payload)
    },
    syncUpdateValBtcIRR: ({ commit }, payload) => {
      commit("updateLastValBtcIRR", payload)
    },
    syncUpdateValBtcCNY: ({ commit }, payload) => {
      commit("updateLastValBtcCNY", payload)
    },
    syncUpdateValUsdt: ({ commit }, payload) => {
      commit("updateLastValUsdt", payload)
    },
    syncUpdateValUsdtEUR: ({ commit }, payload) => {
      commit("updateLastValUsdtEUR", payload)
    },
    syncUpdateValUsdtVES: ({ commit }, payload) => {
      commit("updateLastValUsdtVES", payload)
    },
    syncUpdateValUsdtCOP: ({ commit }, payload) => {
      commit("updateLastValUsdtCOP", payload)
    },
    syncUpdateValUsdtCLP: ({ commit }, payload) => {
      commit("updateLastValUsdtCLP", payload)
    },    
    syncUpdateValUsdtBRL: ({ commit }, payload) => {
      commit("updateLastValUsdtBRL", payload)
    },
    syncUpdateValUsdtMXN: ({ commit }, payload) => {
      commit("updateLastValUsdtMXN", payload)
    },
    syncUpdateValUsdtARS: ({ commit }, payload) => {
      commit("updateLastValUsdtARS", payload)
    },
    syncUpdateValUsdtPEN: ({ commit }, payload) => {
      commit("updateLastValUsdtPEN", payload)
    },
    syncUpdateValUsdtRUB: ({ commit }, payload) => {
      commit("updateLastValUsdtRUB", payload)
    },    
    syncUpdateValUsdtINR: ({ commit }, payload) => {
      commit("updateLastValUsdtINR", payload)
    },
    syncUpdateValUsdtTRY: ({ commit }, payload) => {
      commit("updateLastValUsdtTRY", payload)
    },
    syncUpdateValUsdtIRR: ({ commit }, payload) => {
      commit("updateLastValUsdtIRR", payload)
    },
    syncUpdateValUsdtCNY: ({ commit }, payload) => {
      commit("updateLastValUsdtCNY", payload)
    },    
    syncUpdateNumAlerts: ({ commit }, payload) => {
      commit("updateLastNumAlerts", payload)
    },            
  },

  getters:{
    estaActivo: state => !!state.token,  
    nomuser: state => state.usuarioDB.data.NOMBREUSUARIO, //YO
    mgmf: state => state.usuarioDB.data.DIRMULTIFIRMA_FIANZALN, //YO    
    iduser: state => state.usuarioDB.data._id, //YO
    languser: state => state.usuarioDB.data.PREFIDIOMA, //YO
    monuser: state => state.usuarioDB.data.PREFDIVISA, //YO
    operuser: state => state.usuarioDB.data.PREFCADENA, //YO            
    getLastClickTime: state => {
      return new Date(state.lastClickTime)
    },
    selectedmon: state => {
      return state.lastClickMoneda
    },
    selectedlang: state => {
      return state.lastClickLang
    },
    selectedoper: state => {
      return state.lastClickOper
    },
    selectedselTX: state => {
      return state.lastValSelTx
    },
    selectedselAR: state => {
      return state.lastValSelAr
    },
    selectedselTXtt: state => {
      return state.lastValSelTxtt
    },
    selectedselARtt: state => {
      return state.lastValSelArtt
    },                    
    selectedbtc: state => {
      return state.lastValBtc
    },
    selectedbtcEUR: state => {
      return state.lastValBtcEUR
    },
    selectedbtcVES: state => {
      return state.lastValBtcVES
    },
    selectedbtcCOP: state => {
      return state.lastValBtcCOP
    },
    selectedbtcCLP: state => {
      return state.lastValBtcCLP
    },
    selectedbtcBRL: state => {
      return state.lastValBtcBRL
    },
    selectedbtcMXN: state => {
      return state.lastValBtcMXN
    },
    selectedbtcARS: state => {
      return state.lastValBtcARS
    },
    selectedbtcPEN: state => {
      return state.lastValBtcPEN
    },
    selectedbtcRUB: state => {
      return state.lastValBtcRUB
    },
    selectedbtcINR: state => {
      return state.lastValBtcINR
    },
    selectedbtcTRY: state => {
      return state.lastValBtcTRY
    },
    selectedbtcIRR: state => {
      return state.lastValBtcIRR
    },
    selectedbtcCNY: state => {
      return state.lastValBtcCNY
    },
    selectedusdt: state => {
      return state.lastValUsdt
    },
    selectedusdtEUR: state => {
      return state.lastValUsdtEUR
    },
    selectedusdtVES: state => {
      return state.lastValUsdtVES
    },
    selectedusdtCOP: state => {
      return state.lastValUsdtCOP
    },
    selectedusdtCLP: state => {
      return state.lastValUsdtCLP
    },
    selectedusdtBRL: state => {
      return state.lastValUsdtBRL
    },
    selectedusdtMXN: state => {
      return state.lastValUsdtMXN
    },
    selectedusdtARS: state => {
      return state.lastValUsdtARS
    },
    selectedusdtPEN: state => {
      return state.lastValUsdtPEN
    },
    selectedusdtRUB: state => {
      return state.lastValUsdtRUB
    },
    selectedusdtINR: state => {
      return state.lastValUsdtINR
    },
    selectedusdtTRY: state => {
      return state.lastValUsdtTRY
    },
    selectedusdtIRR: state => {
      return state.lastValUsdtIRR
    },
    selectedusdtCNY: state => {
      return state.lastValUsdtCNY
    },    
    selectedNumAlerts: state => {     
      return state.lastNumAlerts
    }                             
  }
})

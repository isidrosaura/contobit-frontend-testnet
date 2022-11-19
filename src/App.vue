<template> 
  <div id="app">
  <div class="view">
       
      <b-navbar toggleable="md" type="light" style="background:rgb(246, 251, 255);opacity: 0.95;padding-bottom:0px" fixed="top">
        <b-navbar-brand href="/">
          <popper
              :options= popoptions>
              <div class="popper">                         
                  <span v-html="tlp_logo.mt[selectedlang.value][0].vl"></span>                      
              </div>               
              <span slot="reference">
                  <img
                  id="etlogo"
                  align="top"
                  src="https://www.contobit.com/img/contobit.png"
                  width="200px"
                  height="30px"              
                  />
                  <img
                  id="etlogorp"
                  align="top"
                  src="https://www.contobit.com/img/logo.7d322e18.png"
                  />
              </span>
          </popper>        
          
        <span class="blink-bg"><i>*testnet version-beta testers trial period*</i></span>     
        </b-navbar-brand>

       <!--   <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
       <!--   <b-collapse id="nav-collapse" is-nav> -->

          <b-navbar class="navbar-nav mx-auto" style="font-size:14px;">
            <b-nav-item id="elemt" to="/Comprar" v-if="selectedoper" @click="navsame('Comprar')">
              <popper
                  :options= popoptions>
                  <div class="popper">                         
                      {{m_comprar.mt[selectedlang.value][0].vl}} Bitcoins<br>                      
                  </div>               
                  <span slot="reference">
                    <img
                      src="https://www.contobit.com/imagens/carrito.png"
                      width="33.3px"
                      height="23.2px"
                    ><br>               
                    <span id="textmenu"> {{m_comprar.mt[selectedlang.value][0].vl}}</span> 
                  </span>
              </popper>             
            </b-nav-item>

            <b-nav-item to="/Comprartt" v-if="!selectedoper" @click="navsame('Comprartt')">
              <popper
                  :options= popoptions>
                  <div class="popper">                         
                      {{m_comprar.mt[selectedlang.value][0].vl}} USDT<br>                      
                  </div>               
                  <span slot="reference">
                      <img
                        align="center"                 
                        src="https://www.contobit.com/imagens/carritott.png"
                        width="33.3px"
                        height="23.2px"
                      ><br>             
                      <span id="textmenu"> {{m_comprar.mt[selectedlang.value][0].vl}}</span>  
                  </span>
              </popper>
            </b-nav-item>

            <b-nav-item to="/Entrar" v-if="!estaActivo & selectedoper" @click="navsame('Entrar')">
              <popper
                  :options= popoptions>
                  <div class="popper">                         
                      {{m_vender.mt[selectedlang.value][0].vl}} Bitcoins<br>                      
                  </div>               
                  <span slot="reference">
                      <img
                        align="center"                
                        src="https://www.contobit.com/imagens/manita.png"
                        width="33.3px"
                        height="23.2px"
                      /><br>                
                      <span id="textmenu">&nbsp;{{m_vender.mt[selectedlang.value][0].vl}}</span> 
                  </span>
              </popper>
            </b-nav-item>              
            <b-nav-item to="/Entrar" v-if="!estaActivo & !selectedoper" @click="navsame('Entrar')">
              <popper
                  :options= popoptions>
                  <div class="popper">                         
                      {{m_vender.mt[selectedlang.value][0].vl}} USDT<br>                      
                  </div>               
                  <span slot="reference">
                      <img
                        align="center"                
                        src="https://www.contobit.com/imagens/manitatt.png"
                        width="33.3px"
                        height="23.2px"
                      ><br>                                
                      <span id="textmenu">&nbsp;{{m_vender.mt[selectedlang.value][0].vl}}</span> 
                  </span>
              </popper>             
            </b-nav-item>
            <b-nav-item to="/Vender" v-if="estaActivo & selectedoper" @click="navsame('Vender')">
              <popper
                  :options= popoptions>
                  <div class="popper">                         
                      {{m_vender.mt[selectedlang.value][0].vl}} Bitcoins<br>                      
                  </div>               
                  <span slot="reference">
                      <img
                        align="center"                
                        src="https://www.contobit.com/imagens/manita.png"
                        width="33.3px"
                        height="23.2px"
                      /><br>                
                      <span id="textmenu">&nbsp;{{m_vender.mt[selectedlang.value][0].vl}}</span> 
                  </span>
              </popper> 
            </b-nav-item>
            <b-nav-item to="/Vendertt" v-if="estaActivo & !selectedoper" @click="navsame('Vendertt')">
              <popper
                  :options= popoptions>
                  <div class="popper">                         
                      {{m_vender.mt[selectedlang.value][0].vl}} USDT<br>                      
                  </div>               
                  <span slot="reference">
                      <img
                        align="center"                
                        src="https://www.contobit.com/imagens/manitatt.png"
                        width="33.3px"
                        height="23.2px"
                      ><br>                                
                      <span id="textmenu">&nbsp;{{m_vender.mt[selectedlang.value][0].vl}}</span> 
                  </span>
              </popper> 
            </b-nav-item>            
            <b-nav-item to="/Tx" v-if="estaActivo & selectedoper" @click="navsame('Tx')">
              <popper
                  :options= popoptions>
                  <div class="popper">                         
                      {{m_Tx.mt[selectedlang.value][0].vl}} ₿ BTC<br>                      
                  </div>               
                  <span slot="reference">
                      <img
                      align="center"                  
                      src="https://www.contobit.com/imagens/txbtc.png"
                      width="36px"
                      height="25.33px"
                      ><br>
                      <span id="textmenu"> Tx</span> 
                  </span>
              </popper>                             
            </b-nav-item>          
            <b-nav-item to="/Txtt" v-if="estaActivo  & !selectedoper" @click="navsame('Txtt')">
              <popper
                  :options= popoptions>
                  <div class="popper">                         
                      {{m_Tx.mt[selectedlang.value][0].vl}} ₮ USDT<br>                      
                  </div>               
                  <span slot="reference">
                      <img
                        align="center"                
                        src="https://www.contobit.com/imagens/txtt.png"
                        width="36px"
                        height="25.33px"
                      ><br>
                      <span id="textmenu"> Tx</span>
                  </span>
              </popper>                            
            </b-nav-item>          

          </b-navbar> 

            <b-nav-form style="font-size:16px;">               
            <b-nav-item-dropdown
             id = "ajdropd"
             class="navbar-nav mx-auto"
             right
             v-if="estaActivo"
             >
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                  
                  <img
                    style="margin-bottom:0px;margin-top:-8px"
                    src="https://www.contobit.com/imagens/userbtc.png"
                    width="33px"
                    height="33px"
                    text="Dropdown"
                    toggle-class="nav-link-custom"
                  /><br>
                  <span id="textmenu" ><font color="green" >{{ nomuser | reduaddr}}...</font></span> 
                
              </template>
              
              <b-dropdown-item href="/" v-if="actualizado">
                <font color="Gray">
                  <a v-on:click="getsaldorefresh(nomuser)">
                    ₿: {{saldo | currencydecimal8 }}
                    <font-awesome-icon :icon="['fa', 'redo-alt']" />
                  </a>
                 <br>
               <span v-if="saldomfmg > 0"><small>🔐:</small><span style="margin-left:-17px;font-size:9px;padding-right:8px;">₿ </span> {{saldomfmg | currencydecimal8}}
                      <img
                        style="margin-left:4px"             
                        src="https://www.contobit.com/imagens/manita.png"
                        width="16.6px"
                        height="11.6px"
                      />               
               </span></font>

              </b-dropdown-item>
              <b-dropdown-item href="/" v-if="actualizado">
                <font color="Gray">
                  <a v-on:click="getsaldorefresh(nomuser)">
                    ₮: {{saldott | currencydecimal }}
                    <font-awesome-icon :icon="['fa', 'redo-alt']" />
                  </a>
                 <br>                  
                <span v-if="saldomfmg_tt > 0"><small>🔐:</small><span style="margin-left:-17px;font-size:10px;padding-right:8px;">₮ </span> {{saldomfmg_tt | currencydecimal}}
                      <img 
                        style="margin-left:4px"               
                        src="https://www.contobit.com/imagens/manitatt.png"
                        width="16.6px"
                        height="11.6px"
                      > 
                </span></font>
               
              </b-dropdown-item>

              <b-dropdown-item href="#" v-if="!actualizado">
                <font color="Gray">
                  ₿:
                  <img
                    align="bottom"
                    src="https://www.contobit.com/imagens/loader.gif"
                    width="20px"
                    height="15px"
                  />...nodo
                  <CountDown :seconds="1460" />
                </font>
              </b-dropdown-item>
              <b-dropdown-item to="/Perfil" v-if="estaActivo" @click="navsame('Perfil')">
                <font color="Gray">
                  <font-awesome-icon :icon="['fa', 'edit']" />                  
                  <span > {{m_Address.mt[selectedlang.value][0].vl}}</span>                   
                </font>
              </b-dropdown-item>
              <b-dropdown-item @click="desconectaryCerrar()">
                <font color="Gray">
                  <font-awesome-icon :icon="['fa', 'sign-out-alt']" /> 
                  <span> {{m_Address.mt[selectedlang.value][1].vl}}</span>                  
                </font>
              </b-dropdown-item>
            </b-nav-item-dropdown>
            </b-nav-form>

          <!-- Right aligned nav items -->
          <div class="inner">
            
          <b-navbar class="navbar-nav mx-auto" style="font-size:14px;">
            <b-nav-form style="font-size:23px;" v-if="estaActivo">
              <b-nav-item to="/Alertas" v-if="estaActivo" @click="navsame('Alertas')">
                <span v-if="selectedNumAlerts > 0" id="alert">{{selectedNumAlerts}}</span>

              <popper
                  :options= popoptions>
                  <div class="popper">                         
                      {{m_Alertas.mt[selectedlang.value][0].vl}}                      
                  </div>               
                  <span slot="reference">
                      <span v-if="selectedNumAlerts < 1" id="textawe"><font-awesome-icon :icon="['far', 'bell']" /></span>
                      <span v-if="selectedNumAlerts > 0" id="textawe"><font-awesome-icon :icon="['far', 'bell']" class="shake"/></span>                      
                      <span id="textmenuawe"> {{m_Alertas.mt[selectedlang.value][1].vl}}</span>
                  </span>
              </popper>
                <!-- Right aligned nav items -->
              </b-nav-item>&nbsp;&nbsp;
            </b-nav-form>
      <!-- <b-nav-form style="font-size:23px;">
              <b-nav-item to="#">
                
              <popper
                  :options= popoptions>
                  <div class="popper">                         
                      <span v-html="m_Ayuda.mt[selectedlang.value][0].vl"></span>                      
                  </div>               
                  <span slot="reference">
                      <span id="textawe"><font-awesome-icon :icon="['far', 'question-circle']" /></span>
                      <span id="textmenuawe"> {{m_Ayuda.mt[selectedlang.value][1].vl}}</span>
                  </span>
              </popper>                
              </b-nav-item>
            </b-nav-form> -->

            <b-nav-form style="font-size:14px;">              
              <b-nav-item to="/Entrar" v-if="!estaActivo" @click="navsame('Entrar')" style="font-size:14px;">
                <popper
                    :options= popoptions>
                    <div class="popper">                         
                        {{m_Entrar.mt[selectedlang.value][0].vl}}                      
                    </div>               
                    <span slot="reference">
                        <img              
                          id="etuser"
                          align="center"             
                          src="https://www.contobit.com/imagens/userbtc.png"
                          width="30px"
                          height="30px"
                        />
                        <img
                          id="etuserrp"                
                          style="margin-bottom:0px;margin-top:8px"              
                          src="https://www.contobit.com/imagens/userbtc.png"
                          width="30px"
                          height="30px"
                        />                                             
                        <span id="textmenu"><br> {{m_Entrar.mt[selectedlang.value][1].vl}}</span>
                    </span>
                </popper>            
              </b-nav-item>
            </b-nav-form>              
                 
          </b-navbar>
          </div>
          <span id="movleft">
              <popper
                  trigger="clickToOpen"              
                  :options= popoptionsb1>
                  <div class="popper">                         
                      {{m_Idioma.mt[selectedlang.value][0].vl}}                      
                  </div>               
                  <span slot="reference">
                      <v-select
                      :onchange="syncUpdateLang(this.selectedlang.label)" 
                      v-model="selectedlang" :option="optionslang" :placement="placement"
                      :oninput="syncUpdateLang(this.selectedlang.label)"
                      ></v-select>
                  </span>
              </popper>
          </span>                   
      <!--  </b-collapse> -->      
      </b-navbar>
    </div>
    <br><br><br><br><br>

  <nprogress-container></nprogress-container>
  <div>
 </div>
 
      <b-navbar toggleable="md" type="light" fixed="top" style="margin-top: 64px;padding-bottom: 0px;padding-top: 0px;padding-left: 10px;z-index:11;background:rgb(246, 251, 255);opacity: 0.95;">
          <b-navbar-brand>
               <popper 
                  :options= popoptions>
                  <div class="popper">
                     <span v-html="tit_intercambio.pp[selectedlang.value][0].vl"></span>                         
                  </div>               
                  <span slot="reference">
                      <span id="nav2a"> {{tit_intercambio.mt[selectedlang.value][0].vl}}</span>
                  </span>
              </popper>             
              
          </b-navbar-brand>    
     
          <b-navbar 
          id="nav2b">
                <font v-if="selectedoper" color="black"><b>🔗 </b></font>
                <font v-if="!selectedoper" color="black"><b>⛓️ </b></font>                
               <popper v-if="selectedoper" id="etlogo"
                  :options= popoptions>
                  <div class="popper">                         
                      {{sl_cadena.mt[selectedlang.value][0].vl}}  bitcoin                     
                  </div>               
                  <span slot="reference">
                      <a
                        href="https://blockstream.info/testnet/"
                        target="_blank"
                      > <font color="dimgray"> Bitcoin ·</font></a>
                  </span>
              </popper>               
               <popper v-if="!selectedoper" id="etlogo"
                  :options= popoptions>
                  <div class="popper">                         
                      {{sl_cadena.mt[selectedlang.value][0].vl}}  USDt                     
                  </div>               
                  <span slot="reference">
                      <a
                        href="https://blockexplorer.one/omni/testnet"
                        target="_blank"
                      > <font color="dimgray"> Omni ₮ USDT</font></a>
                  </span>
              </popper>                
                <font v-if="selectedoper" color="Darkorange" size=4><b> ⚡</b></font>
               <popper v-if="selectedoper" id="etlogo"
                  :options= popoptions>
                  <div class="popper">                         
                      {{sl_cadena.mt[selectedlang.value][1].vl}}  : 0274ddca1f15f170f8b0                     
                  </div>               
                  <span slot="reference">
                      <a
                        href="https://1ml.com/testnet/node/0274ddca1f15f170f8b0c744527a409c0e301a60086871558d4a7935e5ba12a3fb"
                        target="_blank"
                      ><font color="dimgray"> Lightning </font></a>
                  </span>
              </popper>                
                         <!--boton para alternar bitcoin o tether-------₮---₮-----₮------₮------------------>
                          <popper
                              :options= popoptions>
                              <div class="popper">                         
                                  {{sl_cadena.mt[selectedlang.value][2].vl}}                     
                              </div>               
                              <span slot="reference">
                                  <a
                                    class="btn-sm btn"
                                    @click="updateOper()"
                                  >
                                    <span v-if="selectedoper"><img
                                      style="margin-right: 3px;margin-left: 1px;margin-bottom: 2px;"
                                      align="center"                  
                                      src="https://www.contobit.com/imagens/btccoin.png"
                                      width="28.8px"
                                      height="20.26px"
                                    ></span>
                                    <span v-if="!selectedoper"><img
                                      style="margin-right: 3px;margin-left: 1px;margin-bottom: 2px;"                              
                                      align="center"                  
                                      src="https://www.contobit.com/imagens/ttcoin.png"
                                      width="28.8px"
                                      height="20.26px"
                                    ></span>                                                        
                                    <span style="color:grey;"><font-awesome-icon icon="caret-down" /> </span>
                                  </a>
                              </span>
                          </popper>                          
          </b-navbar>
          <div class="inner">                
          <b-navbar class="form-inline" id="nav2c">
            <span style="font-size:14px">

                <span v-if="selectedoper"
                  style="color:DodgerBlue"
                ><!--₿ {{selectedbtc | currencydecimal}} USD | -->  $ {{todos1 | currencydecimal}} {{selectedmon.label}} | ₿
                <span v-if="vtodos1 !== ''" style="color:DodgerBlue">
                {{vtodos1 | currencydecimal}}</span>
                <span v-if="vtodos1 === ''" class="blinking" style="color:red">
                {{vtodos1 | currencydecimal}}👉</span>
                </span>               
                <span v-if="!selectedoper"
                  style="color:DodgerBlue"
                ><!--₮ {{selectedusdt | currencydecimal8}} USD | -->  $ {{todos2 | currencydecimal4}} {{selectedmon.label}} | ₮ {{vtodos2 | currencydecimal4}}</span><popper
                            trigger="clickToOpen"
                            :options= popoptionsb1>
                            <div class="popper">                         
                                {{sl_currency.mt[selectedlang.value][0].vl}}                    
                            </div>               
                            <span slot="reference">
                                <v-select          
                                @change="getTodos1(selectedmon.label)"
                                v-model="selectedmon"
                                :option="optionsmon"
                                :placement="placement"
                                @input="getTodos1(selectedmon.label)"
                                @click="getTodos1(selectedmon.label)"                  
                                ></v-select>
                            </span>
                      </popper>                 
              </span><br>
          </b-navbar> 
          </div>
    </b-navbar>    

    <router-view />
          
                  <img
                    class="img1"
                    align="bottom"
                    src="https://www.contobit.com/imagens/live3.gif"
                  />
          <br>                                                  
          <hr>          
          <span style="color:lightgrey"> Legal | </span> 
          <span style="color:lightgrey">
               <popper
                  :options= popoptions>
                  <div class="popperpie">
                    <br /><strong><u>Privacy Policy</u></strong><br /> We may use third party DDOS protection services and they may also use cookies to deliver their services.<br />What do we use this information for? Basic usage information. We use basic usage information to monitor and improve the availability, performance and content of this website.<br />Personally identifiable information. We may use the information we collect to improve the content of the website. We may use this information to prevent or detect fraud or abuses of our websites and to enable third parties to carry out technical, logistical or other functions on our behalf.<br />Disclosure of personal information We will not disclose any information we collect to any third party unless it is:<br />Specifically authorized by you; or<br />Necessary to perform the functions requested by you (and only to the extent absolutely necessary to perform the function); or<br />Required to check for fraud or other misuse of resources; or Required by law.<br />In particular, we may release the information we collect to third parties when we believe it is appropriate to comply with the law, to enforce our legal rights, to protect the rights and safety of others, or to assist with industry efforts to control fraud, spam or other undesirable conduct.<br />If we contract with a third party to provide a particular service, we may release the information we collect to that third party, provided that the third party has agreed to use at least the same level of privacy protections described in this Privacy Policy, and is permitted to use the information only for the purpose of providing services to us.<br />Changes<br />Our Privacy Policy may change from time to time, and the new policy will be posted prominently on this website. We will never materially change our policies and practices to make them less protective of personal information collected in the past without your prior consent.<br /><br>                                             
                  </div>               
                  <a style="color:lightgrey" href="#" slot="reference">
                    Privacy Policy
                  </a>
              </popper> |             
    
               <popper
                  :options= popoptions>
                  <div class="popperpie">
                    <br /><strong><u>Cookie Policy</u></strong><br />Introduction<br />A cookie is a small text file which can be sent by a web-server to your web-browser when you request a page. This file is stored on your computer and it sent back to the website when you make another page request. Only the sending website can access it’s cookies.<br />Session cookies are deleted from your browser when you close your browser window or tab. Persistent cookies are deleted automatically by your browser when their expiry date is reached.<br />3rd party cookies are cookies that are sent and retrieved by 3rd services used by this website.<br />Consent<br />Users can configure their web browser to accept or refuse cookies. By using this website with your browser set to accepting cookies, you consent to cookies being set on your computer. If you do not consent either do not use this website, or disable cookies which may degrade or break your website experience.<br />This website uses cookies to provide essential functionality. 3rd party DDOS protection services may also set a cookie in order to deliver protected pages.<br /><br />                                             
                  </div>               
                  <a style="color:lightgrey" href="#" slot="reference">
                    Cookie Policy
                  </a>
              </popper> |
             </span>
          <span style="color:lightgrey"> © 2022 contobit </span>
                
  </div>
</template>
<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
import router from './router';
import axios from "axios";
import io from "socket.io-client"; //control de users online
import vSelect from "vselect-component";
import CountDown from "@/components/CountDown.vue";
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';
export default {
  components: {
    vSelect,
    CountDown,
    NprogressContainer,
    'popper': Popper,        
  },

  data() {
    return { 
      socket: io("http://localhost:3000"),  // control usersonline en modo desarrollo*******window.location.origin
      //socket: io(window.location.origin), //socket: io("https://contobit.com"), // server alemania**
      userstoline: [], //control users on line
      user: [],
      popoptions: {
                      placement: 'bottom',
                      modifiers: { offset: { offset: '0,5px' } }
                    },
      popoptionsl: {
                      placement: 'left',
                      modifiers: { offset: { offset: '0,5px' } }
                    },
      popoptionsb1: {
                      placement: 'bottom',
                      modifiers: { offset: { offset: '0,0px' } }
                    },                                                
      prevnumalerts: 0,
      selectedoper: true,
      ratios: {},          
      selectedbtc: "",
      selectedbtcEUR: "",
      selectedbtcVES: "",
      selectedbtcCOP: "",
      selectedbtcCLP: "",
      selectedbtcBRL: "",
      selectedbtcMXN: "",
      selectedbtcARS: "",
      selectedbtcPEN: "",
      selectedbtcRUB: "",
      selectedbtcINR: "",
      selectedbtcTRY: "",
      selectedbtcIRR: "",
      selectedbtcCNY: "",
      selectedusdt: "",
      selectedusdtEUR: "",
      selectedusdtVES: "",
      selectedusdtCOP: "",
      selectedusdtCLP: "",
      selectedusdtBRL: "",
      selectedusdtMXN: "",
      selectedusdtARS: "",
      selectedusdtPEN: "",
      selectedusdtRUB: "",
      selectedusdtINR: "",
      selectedusdtTRY: "",
      selectedusdtIRR: "",
      selectedusdtCNY: "",            
      todos: "",
      todos1: 1,
      todos2: 1,      
      vtodos1: "",
      vtodos2: "",      
      contador: 0,
      numregs: 1,
      timerCount: 36000,      
      saldo: 0,
      saldott: 0,
      mfmg: "",
      User: [],      
      saldomfmg: 0,
      saldomfmg_tt: 0,           
      actualizado: true,
      isonnod: false,
      index: 1,                        
      optionslang: [
        {
          value: 1,
          label: "ESP",
        },
        {
          value: 2,
          label: "ENG",
        },
        {
          value: 3,
          label: "CAT",
        },
        {
          value: 4,
          label: "PORT",
        },
      ],
      optionsmon: [
        {
          value: "united-states-dollar",
          label: "USD",
        },
        {
          value: "euro",
          label: "EUR",
        },
        {
          value: "venezuelan-bolívar-soberano",
          label: "VES",
        },
        {
          value: "colombian-peso",
          label: "COP",
        },
        {
          value: "chilean-peso",
          label: "CLP",
        },
        {
          value: "brazilian-real",
          label: "BRL",
        },
        {
          value: "mexican-peso",
          label: "MXN",
        },
        {
          value: "argentine-peso",
          label: "ARS",
        },
        {
          value: "peruvian-nuevo-sol",
          label: "PEN",
        },
        {
          value: "russian-ruble",
          label: "RUB",
        },
        {
          value: "indian-rupee",
          label: "INR",
        },
        {
          value: "turkish-lira",
          label: "TRY",
        },
         {
          value: "iranian-rial",
          label: "IRR",
        },
         {
          value: "chinese-yuan-renminbi",
          label: "CNY",
        },                                      
      ],
      selectedlang: {
        value: 2,
        label: "ENG",
      },
      selectedmon: {
        value: "united-states-dollar",
        label: "USD",
      },      
      placement: "down",
      // siguen variables para idiomas parte html
      tlp_logo: {
       mt: [
          [],
          [{ vl: 'Página de inicio contobit.com<br>' }],
          [{ vl: 'contobit.com Homepage<br>' }],
          [{ vl: 'Pàgina d inici contobit.com<br>' }],
          [{ vl: 'Página inicial contobit.com<br>' }]                                               
            ]            
      },
      m_comprar: {
       mt: [
          [],
          [{ vl: ' Comprar ' }],
          [{ vl: ' Buy ' }],
          [{ vl: ' Comprar ' }],
          [{ vl: ' Compre ' }]                                               
            ]                   
      },
      m_vender: {
       mt: [
          [],
          [{ vl: ' Vender ' }],
          [{ vl: ' Sell ' }],
          [{ vl: ' Vendre ' }],
          [{ vl: ' Vender ' }]                                               
            ]                   
      },
      m_Tx: {
       mt: [
          [],
          [{ vl: 'Transacciones o intercambios de compra-venta en curso ' }],
          [{ vl: 'Transactions or exchanges of purchase-sale in progress ' }],
          [{ vl: 'Transaccions o intercanvis de compravenda en curs ' }],
          [{ vl: 'Transações ou trocas de compra-venda em andamento de ' }]                                               
            ]            
      },
      /*
      m_Arbitro: {
       mt: [
          [],
          [{ vl: 'Arbitrajes en curso ' },{ vl: ' Arbitraje ' }],
          [{ vl: 'Arbitrations in progress ' },{ vl: ' Arbitration ' }],
          [{ vl: 'Arbitratges en curs ' },{ vl: ' Arbitratge ' }],
          [{ vl: 'Arbitragens em andamento ' },{ vl: ' Arbitragem ' }]                                               
            ]            
      }, */
      m_Address: {
       mt: [
          [],
          [{ vl: ' Perfil' },{ vl: ' Cerrar y Salir ' }],
          [{ vl: ' Profile' },{ vl: ' Close and Exit ' }],
          [{ vl: ' Perfil' },{ vl: ' Tancar i Sortir ' }],
          [{ vl: ' Perfil' },{ vl: ' Fechar e sair ' }]                                               
            ]            
      },
      m_Alertas: {
       mt: [
          [],
          [{ vl: 'Ver alertas y notificaciones ' },{ vl: ' Alertas ' }],
          [{ vl: 'View alerts and notifications ' },{ vl: ' Alerts ' }],
          [{ vl: 'Veure alertes i notificacions ' },{ vl: ' Alertes ' }],
          [{ vl: 'Ver alertas e notificações ' },{ vl: ' Alertas ' }]                                               
            ]            
      },
      m_Ayuda: {
       mt: [
          [],
          [{ vl: 'Las ayudas o tips, son interactivas en toda la aplicación, usando este sistema de etiquetas, al pulsar o posicionarse encima. Dentro de las ayudas o tips puede encontrar 📽️ video guías de ejemplo.<br>' },{ vl: ' Ayuda ' }],
          [{ vl: 'Help or tips are interactive throughout the application, using this tag system, by clicking or positioning on top. Within the help or tips you can find 📽️ example video guides.<br>' },{ vl: ' Help ' }],
          [{ vl: 'Els ajuts o tips, són interactius en tota l`aplicació, fent servir aquest sistema d`etiquetes, al prémer o posicionar-se a sobre. Dins de les ajudes o tips pot trobar 📽️ vídeo guies d`exemple. <br>' },{ vl: ' Ajuts ' }],
          [{ vl: 'Os auxílios ou dicas são interativos em todo o aplicativo, utilizando este sistema de tag, clicando ou posicionando sobre ele. Na ajuda ou dicas, você pode encontrar 📽️ exemplos de guias em vídeo. <br>' },{ vl: ' Dicas ' }]                                               
            ]            
      },
      m_Entrar: {
       mt: [
          [],
          [{ vl: 'Entrar con dirección pública bitcoin ' },{ vl: ' Entrar ' }],
          [{ vl: 'Login with bitcoin public address ' },{ vl: ' Enter ' }],
          [{ vl: 'Entrar amb adreça pública de bitcoin ' },{ vl: ' Entrada ' }],
          [{ vl: 'Entrar com endereço público bitcoin ' },{ vl: ' Entrar ' }]                                               
            ]            
      },
      m_Idioma: {
       mt: [
          [],
          [{ vl: 'Seleccionar idioma ' }],
          [{ vl: 'Select language ' }],
          [{ vl: 'Seleccionar idioma ' }],
          [{ vl: 'Selecione o idioma' }]                                               
            ]            
      },
      tit_intercambio: {
       mt: [
          [],
          [{ vl: ' Intercambio SIN custodia RT P2P ' }],
          [{ vl: ' NON-custodial P2P RT exchange ' }],
          [{ vl: ' Intercanvi SENSE custòdia RT P2P ' }],
          [{ vl: ' Troca sem custódia RT P2P' }]                                               
            ],
       pp: [
          [],
          [{ vl: ' <br>✔️ <b>Intercambios directos</b> en cadena de bloques bitcoin  <br>principal, red Lightning o capa Omni Tether USDT.<br><br> ✔️<b> Puros SIN custodia</b>(Tx Respaldo Entrega Multifirma)<br><br>✔️ <b>RT Tiempo Real </b>(compra-venta inmediata en 5 mins.) <br><br>✔️ <b>P2P , Punto a Punto</b>, directos de Usuario a Usuario.<br><br>  ' }],
          [{ vl: ' <br>✔️ <b>Direct exchanges</b> on the main bitcoin blockchain,<br> Lightning network or Omni Tether layer USDT.<br><br> ✔️<b> Pure NON-custodial</b> (Tx Multisign Delivery Backup)<br><br>✔️ <b>Real Time RT</b> (immediate purchase-sale in 5 mins.) <br><br>✔️ <b>P2P , Point to Point</b> , directly from User to User.<br><br> ' }],
          [{ vl: ' <br>✔️ <b>Intercanvis directes</b> en cadena de blocs bitcoin principal<br>, en xarxa Lightning o en capa Omni Tether USDT.<br><br> ✔️<b> Purs SENSE custòdia</b>(Respatller Lliurament Multisign)<br><br>✔️ <b>RT Temps Real </b>(compra-venda immediata en 5 mins.) <br><br>✔️ <b>P2P , Punt a Punt</b> , directament d`Usuari a Usuari.<br><br> ' }],
          [{ vl: ' <br>✔️ <b>Trocas diretas</b> na principal cadeia de blocos bitcoin,<br>na rede Lightning ou camada Omni Tether USDT.<br><br> ✔️<b> Pura NÃO-custodial</b> (Multisignature Delivery Suporte)<br><br>✔️ <b>RT em tempo real</b> (compra-venda imediata em 5 min.) <br><br>✔️ <b>P2P , Ponto a Ponto</b> , direto de usuário para usuário.<br><br>' }]                                               
            ]                        
      },
      sl_cadena: {
       mt: [
          [],
          [{ vl: 'Explorador ' },{ vl: 'Explorador ⚡ Red Lightning: Nodo público contobit ' },{ vl: 'Operar en Bitcoin o USDT ' }],
          [{ vl: 'Explorer ' },{ vl: '⚡ Lightning Network explorer: contobit public node ' },{ vl: 'trade in bitcoin or USDT ' }],
          [{ vl: 'Explorador ' },{ vl: 'Explorador ⚡ Xarxa Lightning: Node públic contobit ' },{ vl: 'traginar al bitcoin o en USDT ' }],
          [{ vl: 'Explorador ' },{ vl: 'Explorador ⚡ Rede Lightning: Nó público contobit ' },{ vl: 'Operar bitcoin o USDT' }],                                             
            ]            
      },
      sl_currency: {
       mt: [
          [],
          [{ vl: 'Seleccionar Divisa' }],
          [{ vl: 'Select Currency' }],
          [{ vl: 'Seleccionar Divisa' }],
          [{ vl: 'Selecione Moeda' }],                                            
            ]            
      },
      vtomf: {
       mt: [
          [],
          [{ vl: 'Expirada validez de 🔐MultiGarantía Ventas ' },{ vl: 'El periodo de validez(en el sitio) de la dirección bitcoin de su 🔐 MultiGarantía 🔗Multifirma para Ventas expiró hace ' },{ vl: ' días. Puede, verificar su saldo o retirarlo, y generar una nueva dirección MultiGarantía en el Perfil de su dirección de usuario.' }],
          [{ vl: 'Expired validity of 🔐MultiGarantía Sales ' },{ vl: 'The validity period (on the site) of the bitcoin address of your 🔐 MultiGuarantee 🔗Multifirma for Sales expired ago ' },{ vl: 'days. You can check your balance or withdraw it, and generate a new MultiGuarantee address in the Profile of your user address. ' }],
          [{ vl: 'Expirada validesa de 🔐MultiGarantia Vendes ' },{ vl: 'El període de validesa(al lloc) de la direcció bitcoin de la seva 🔐 MultiGarantia 🔗Multifirma per a Vendes va expirar fa ' },{ vl: 'dies. Podeu verificar el vostre saldo o retirar-lo, i generar una nova adreça MultiGarantia al Perfil de la vostra adreça d`usuari. ' }],
          [{ vl: 'Validade expirada de 🔐MultiGarantía Vendas ' },{ vl: 'O período de validade (no site) do endereço bitcoin da sua 🔐 MultiGuarantee 🔗Multifirma for Sales expirou atrás ' },{ vl: 'dias. Pode consultar o seu saldo ou retirá-lo, e gerar um novo endereço MultiGuarantee no Perfil do seu endereço de utilizador.' }],                                             
            ]            
      },
      vtomf10d: {
       mt: [
          [],
          [{ vl: 'Expiración validez de 🔐MultiGarantía Ventas ' },{ vl: 'El periodo de validez(en el sitio) de la dirección bitcoin de su 🔐 MultiGarantía 🔗Multifirma para Ventas expira en ' },{ vl: ' días. Puede previamente, verificar su saldo o retirarlo, y generar una nueva dirección MultiGarantía en el Perfil de su dirección de usuario.' }],
          [{ vl: 'Expiration validity of 🔐MultiGarantía Sales ' },{ vl: 'The validity period (on the site) of the bitcoin address of your 🔐 MultiGuarantee 🔗Multifirma for Sales expires in ' },{ vl: ' days. You can previously verify your balance or withdraw it, and generate a new MultiGuarantee address in the Profile of your user address. ' }],
          [{ vl: 'Expiració validesa de 🔐MultiGarantia Vendes ' },{ vl: 'El període de validesa (al lloc) de l`adreça bitcoin de la seva 🔐 MultiGarantia 🔗Multifirma per a Vendes expira en ' },{ vl: ' dies. Podeu prèviament verificar el vostre saldo o retirar-lo, i generar una nova adreça MultiGarantia al Perfil de la vostra adreça d`usuari. ' }],
          [{ vl: 'Validade de expiração de 🔐MultiGarantía Vendas ' },{ vl: 'O período de validade (no site) do endereço bitcoin da sua 🔐 MultiGuarantee 🔗Multifirma for Sales expira em ' },{ vl: ' dias. Você pode verificar previamente o seu saldo ou retirá-lo, e gerar um novo endereço MultiGuarantee no Perfil do seu endereço de usuário.' }],                                             
            ]            
      },
    };
  },
  watch: {
      timerCount: {
        handler(value) {
          // console.log('value..'+value);
          if ((value > 0 ) 
           ) {
             setTimeout(() => {
              this.timerCount--;
            }, 1000);
                          
              if ( ( value === 35900 | value === 35800 | value === 35700 | value === 35600 )                 
                   & (this.vtodos1 === "" | this.vtodos1 === 0 | this.vtodos1 === null) ) this.getTodos1(this.selectedmon.label);
                   
              //console.log( parseFloat(value/300) - parseInt(value/300));
              if ( ( parseFloat(value/300) - parseInt(value/300) ) === 0 ) this.getTodos1(this.selectedmon.label);              

          }

        },
        immediate: true, // This ensures the watcher is triggered upon creation
      },
  },       
  filters: {
    fecha_spa(value) {
     moment.locale('es'); 
     let fecha = moment(value).locale('es').fromNow();
     return fecha;  
    },
    fecha_eng(value) {
     moment.locale('en'); 
     let fecha = moment(value).locale('en').fromNow();
     return fecha;  
    },
    fecha_cat(value) {
     moment.locale('ca'); 
     let fecha = moment(value).locale('ca').fromNow();
     return fecha;  
    },
    fecha_port(value) {
     moment.locale('pt'); 
     let fecha = moment(value).locale('pt').fromNow();
     return fecha;  
    },    
    currencydecimal(value) {
      return Number(value).toFixed(2);
    },
    currencydecimal4(value) {
      return Number(value).toFixed(4);
    },     
    currencydecimal8(value) {
      return Number(value).toFixed(8);
    },

    reduaddr(value) {
      return value.substr(0, 6);
    },
  },
  methods: {
    ...mapMutations(["obtenerUsuario"]),
    ...mapActions([
      "guardarUsuario",
      "leerToken",
      "cerrarSesion",
      "syncUpdateTime",
      "syncUpdateMoneda",
      "syncUpdateLang",     
      "syncUpdateValBtc",
      "syncUpdateValBtcEUR",
      "syncUpdateValBtcVES",
      "syncUpdateValBtcCOP",
      "syncUpdateValBtcCLP",
      "syncUpdateValBtcBRL",
      "syncUpdateValBtcMXN",
      "syncUpdateValBtcARS",
      "syncUpdateValBtcPEN",
      "syncUpdateValBtcRUB",
      "syncUpdateValBtcINR",
      "syncUpdateValBtcTRY",
      "syncUpdateValBtcIRR",
      "syncUpdateValBtcCNY",
      "syncUpdateValUsdt",
      "syncUpdateValUsdtEUR",
      "syncUpdateValUsdtVES",
      "syncUpdateValUsdtCOP",
      "syncUpdateValUsdtCLP",
      "syncUpdateValUsdtBRL",
      "syncUpdateValUsdtMXN",
      "syncUpdateValUsdtARS",
      "syncUpdateValUsdtPEN",
      "syncUpdateValUsdtRUB",
      "syncUpdateValUsdtINR",
      "syncUpdateValUsdtTRY",
      "syncUpdateValUsdtIRR",
      "syncUpdateValUsdtCNY",           
      "syncUpdateNumAlerts",
      "syncUpdateOper",

    ]),        
    navsame(ruta) {

        if (location.pathname === '/' ) { 
        router.push({name: ruta});       
        } else if (location.pathname === '/'+ruta )  { 
        router.push({name: 'home'});        
        history.go(-1);                
        }       
    },
    // control de users on line
    joinServer() {

        this.socket.on("loggedInApp", (data) => {
          this.userstoline = data.userstoline;
          this.socket.emit("newuserapp", this.nomuser);
        });
      this.listen();
    },
    listen: function () {

      this.socket.on("loggedInAlerts", (data) => {
        let numalerts = 0;
        // this.syncUpdateNumAlerts(numalerts);
            //  console.log('this.iduser..'+this.iduser.trim());
        const index = data.alerts.findIndex(
          (item) => item.usuarioId.trim() === this.iduser.trim()
        );
        //      console.log('index].usuarioId..'+index);
        //      console.log('data.alerts[index].usuarioId..'+data.alerts[index].usuarioId.trim());
        //console.log('resultado del find antes del if..'+index);
        if (index > -1) {
          // this.alerts = data.alerts; //  actualizr las alertas mentira comentado de momento this.alerts ni existe
          //  console.log('entro en this.socket.on("loggedInAlerts.. lenght..'+data.alerts.length);
          // console.log('this alerts 0..'+this.alerts[0].descripcion);
          // primero filtrar data.alerts solo las alertas de este iduser
          for (var i = 0; i < data.alerts.length; i++) {
            if (
              !data.alerts[i].usuarioId ||
              data.alerts[i].usuarioId === undefined
            ) {
              //    console.log('elimina simplemente llega sin usuarioid..'+i)
              data.alerts.splice(i, 1);
              i = i - 1;
            } else {
              if (data.alerts[i].usuarioId === this.iduser) {
                //    console.log('no eliminar, id existe en la alerta ...'+i)
                //    console.log('descripcion en posicion..'+this.alerts[i].descripcion);
                numalerts = numalerts + 1;                 
              } else {
                //    console.log('si elimina, no cumple usuarioid === iduser.. '+i)
                data.alerts.splice(i, 1);
                i = i - 1;
              }
            }
          }          
          if ( numalerts !== this.selectedNumAlerts ) this.syncUpdateNumAlerts(numalerts); // ***** actualiza num alerts en todos ****
        }
      }),


      this.socket.on("userOnlineApp", (user) => {
        this.userstoline.push(user);
      });
      this.socket.on("userLeftApp", (user) => {
        this.userstoline.splice(this.userstoline.indexOf(user), 1);
      });
    },
    desconectaryCerrar() {
      this.socket.emit("desconectar");    
      this.cerrarSesion();
    },
   posym(symb) { 
    // console.log("symb.." + symb);
    if (this.ratios.data !== undefined) {
        let index = this.ratios.data.findIndex(
          (item) => item.symbol.trim() === symb.trim()
        );
    //console.log("esta en el indice num..."+index)
    return index
    } else {
    return   
    }
    },

   async getTodos() {

    let tsdelratios = parseInt(this.ratios.timestamp);
    let tsahora = Date. now();
    let difts_ultimasol = tsahora - tsdelratios;
    //console.log(difts_ultimasol);

     if (this.ratios.data === undefined |  difts_ultimasol > 10000 ) {  // para que solo procese la primera vez al cargar la pagina 
       

       try {
              let response = await axios.get("https://api.coincap.io/v2/rates?apikey=bc682798-b01d-4cfc-a1a5-17592d5d3be1")
              //console.log("response..."+response.data.timestamp);
              //console.log("response..."+response.data.data[0].rateUsd);
        if (response.data.data[0].rateUsd !== 0) {      
              this.ratios = response.data;
              //console.log(this.ratios.data);
                       
          //if (this.selectedoper)
          //console.log("desde getTodos leido posym BTC...."+this.ratios.data[this.posym("BTC")].rateUsd);
          this.selectedbtc = this.ratios.data[this.posym("BTC")].rateUsd;
          this.syncUpdateValBtc(this.selectedbtc);
          //  console.log(this.selectedbtc)
          //  if (selectedmon == 'EUR') this.todos = response.data.bpi.EUR.rate_float; // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
          
              //if (!this.selectedoper)
              //console.log("desde getTodos leido posym USDT...."+this.ratios.data[this.posym("USDT")].rateUsd);
                  this.selectedusdt = this.ratios.data[this.posym("USDT")].rateUsd;
                  this.syncUpdateValUsdt(this.selectedusdt);
                  
                  
              if ( this.selectedoper)
                  this.selectedbtcEUR = 1 / this.ratios.data[this.posym("EUR")].rateUsd;
                  this.selectedbtcEUR = this.selectedbtcEUR * this.selectedbtc;
                  this.syncUpdateValBtcEUR(this.selectedbtcEUR);

                  this.selectedbtcVES = 1 / this.ratios.data[this.posym("VES")].rateUsd;
                  this.selectedbtcVES = this.selectedbtcVES * this.selectedbtc;
                  this.syncUpdateValBtcVES(this.selectedbtcVES);

                  this.selectedbtcCOP = 1 / this.ratios.data[this.posym("COP")].rateUsd;
                  this.selectedbtcCOP = this.selectedbtcCOP * this.selectedbtc;
                  this.syncUpdateValBtcCOP(this.selectedbtcCOP);
                  
                  this.selectedbtcCLP = 1 / this.ratios.data[this.posym("CLP")].rateUsd;
                  this.selectedbtcCLP = this.selectedbtcCLP * this.selectedbtc;
                  this.syncUpdateValBtcCLP(this.selectedbtcCLP);          

                  this.selectedbtcBRL = 1 / this.ratios.data[this.posym("BRL")].rateUsd;
                  this.selectedbtcBRL = this.selectedbtcBRL * this.selectedbtc;
                  this.syncUpdateValBtcBRL(this.selectedbtcBRL);

                  this.selectedbtcMXN = 1 / this.ratios.data[this.posym("MXN")].rateUsd;
                  this.selectedbtcMXN = this.selectedbtcMXN * this.selectedbtc;
                  this.syncUpdateValBtcMXN(this.selectedbtcMXN);

                  this.selectedbtcARS = 1 / this.ratios.data[this.posym("ARS")].rateUsd;
                  this.selectedbtcARS = this.selectedbtcARS * this.selectedbtc;
                  this.syncUpdateValBtcARS(this.selectedbtcARS);

                  this.selectedbtcPEN = 1 / this.ratios.data[this.posym("PEN")].rateUsd;
                  this.selectedbtcPEN = this.selectedbtcPEN * this.selectedbtc;
                  this.syncUpdateValBtcPEN(this.selectedbtcPEN);

                  this.selectedbtcRUB = 1 / this.ratios.data[this.posym("RUB")].rateUsd;
                  this.selectedbtcRUB = this.selectedbtcRUB * this.selectedbtc;
                  this.syncUpdateValBtcRUB(this.selectedbtcRUB);

                  this.selectedbtcINR = 1 / this.ratios.data[this.posym("INR")].rateUsd;
                  this.selectedbtcINR = this.selectedbtcINR * this.selectedbtc;
                  this.syncUpdateValBtcINR(this.selectedbtcINR);

                  this.selectedbtcTRY = 1 / this.ratios.data[this.posym("TRY")].rateUsd;
                  this.selectedbtcTRY = this.selectedbtcTRY * this.selectedbtc;
                  this.syncUpdateValBtcTRY(this.selectedbtcTRY);

                  this.selectedbtcIRR = 1 / this.ratios.data[this.posym("IRR")].rateUsd;
                  this.selectedbtcIRR = this.selectedbtcIRR * this.selectedbtc;
                  this.syncUpdateValBtcIRR(this.selectedbtcIRR);

                  this.selectedbtcCNY = 1 / this.ratios.data[this.posym("CNY")].rateUsd;
                  this.selectedbtcCNY = this.selectedbtcCNY * this.selectedbtc;
                  this.syncUpdateValBtcCNY(this.selectedbtcCNY);


              if ( !this.selectedoper)
                  this.selectedusdtEUR = 1 / this.ratios.data[this.posym("EUR")].rateUsd;
                  this.selectedusdtEUR = this.selectedusdtEUR * this.selectedusdt;
                  this.syncUpdateValUsdtEUR(this.selectedusdtEUR);

                  this.selectedusdtVES = 1 / this.ratios.data[this.posym("VES")].rateUsd;
                  this.selectedusdtVES = this.selectedusdtVES * this.selectedusdt;
                  this.syncUpdateValUsdtVES(this.selectedusdtVES);

                  this.selectedusdtCOP = 1 / this.ratios.data[this.posym("COP")].rateUsd;
                  this.selectedusdtCOP = this.selectedusdtCOP * this.selectedusdt;
                  this.syncUpdateValUsdtCOP(this.selectedusdtCOP);
                  
                  this.selectedusdtCLP = 1 / this.ratios.data[this.posym("CLP")].rateUsd;
                  this.selectedusdtCLP = this.selectedusdtCLP * this.selectedusdt;
                  this.syncUpdateValUsdtCLP(this.selectedusdtCLP);          

                  this.selectedusdtBRL = 1 / this.ratios.data[this.posym("BRL")].rateUsd;
                  this.selectedusdtBRL = this.selectedusdtBRL * this.selectedusdt;
                  this.syncUpdateValUsdtBRL(this.selectedbtcBRL);

                  this.selectedusdtMXN = 1 / this.ratios.data[this.posym("MXN")].rateUsd;
                  this.selectedusdtMXN = this.selectedusdtMXN * this.selectedusdt;
                  this.syncUpdateValUsdtMXN(this.selectedusdtMXN);

                  this.selectedusdtARS = 1 / this.ratios.data[this.posym("ARS")].rateUsd;
                  this.selectedusdtARS = this.selectedusdtARS * this.selectedusdt;
                  this.syncUpdateValUsdtARS(this.selectedusdtARS);

                  this.selectedusdtPEN = 1 / this.ratios.data[this.posym("PEN")].rateUsd;
                  this.selectedusdtPEN = this.selectedusdtPEN * this.selectedusdt;
                  this.syncUpdateValUsdtPEN(this.selectedusdtPEN);

                  this.selectedusdtRUB = 1 / this.ratios.data[this.posym("RUB")].rateUsd;
                  this.selectedusdtRUB = this.selectedusdtRUB * this.selectedusdt;
                  this.syncUpdateValUsdtRUB(this.selectedusdtRUB);       

                  this.selectedusdtINR = 1 / this.ratios.data[this.posym("INR")].rateUsd;
                  this.selectedusdtINR = this.selectedusdtINR * this.selectedusdt;
                  this.syncUpdateValUsdtINR(this.selectedusdtINR);        
              
                  this.selectedusdtTRY = 1 / this.ratios.data[this.posym("TRY")].rateUsd;
                  this.selectedusdtTRY = this.selectedusdtTRY * this.selectedusdt;
                  this.syncUpdateValUsdtTRY(this.selectedusdtTRY);
              
                  this.selectedusdtIRR = 1 / this.ratios.data[this.posym("IRR")].rateUsd;
                  this.selectedusdtIRR = this.selectedusdtIRR * this.selectedusdt;
                  this.syncUpdateValUsdtIRR(this.selectedusdtIRR);

                  this.selectedusdtCNY = 1 / this.ratios.data[this.posym("CNY")].rateUsd;
                  this.selectedusdtCNY = this.selectedusdtCNY * this.selectedusdt;
                  this.syncUpdateValUsdtCNY(this.selectedusdtCNY); 
        
                
     // } catch (error) {console.log(error); }
     // } catch (error) { } 
        } else {
          this.ratios = this.ratios;
        }
        throw new Error("This won't show anything");
      } catch { };
      
     } 
    },
    async getTodos1(selectedm) {
          this.syncUpdateMoneda(this.selectedmon.label);
          await this.getTodos();
          //console.log("desde getTodos1 selectedm..." + selectedm);
      if (this.ratios.data !== undefined) {          
          let rddrt = this.ratios.data[this.posym(selectedm)].rateUsd;
           //console.log("desde getTodos1 rddrt..." + rddrt);
          this.todos1 = 1 / rddrt;
          //console.log("selectedbtc..." + this.selectedbtc);          
          this.vtodos1 = this.todos1 * this.selectedbtc;
          this.todos2 = 1 / rddrt;
          //console.log("selectedusdt..." + this.selectedusdt);
          this.vtodos2 = this.todos2 * this.selectedusdt;
      }
    },   
    isonnode(address) {
      let addressB64 = Buffer.from(address).toString("base64");
      this.axios
        .get(`/rpc-getaddressinfo/${addressB64}`)
        .then((res) => {
          this.isonnod = res.data.iswatchonly;
          if (res.data.ismine === true) this.isonnod = true;
          if (this.isonnod === false) {
            this.actualizado = false;
            this.axios
              .get(`/rpc-udptaddress/${addressB64}`)
              .then((res) => {
              })

              .catch((e) => {});
          } else {
            this.actualizado = true;
          }
        })
        .catch((e) => {});
    },
    getsaldo(address) {
      this.isonnode(address);
      if (this.contador < this.numregs) {
        let adr = address;
        let addressB64;
        addressB64 = Buffer.from(adr).toString("base64");
        this.axios
          .get(`/rpc-getsaldo-lu/${addressB64}`)
          .then((res) => {
            this.saldo = res.data;
            this.saldo = parseFloat(this.saldo);
            if (isNaN(this.saldo)) {
              this.saldo = 0;
            }
            this.actualizado = true;
          })
          .catch((e) => {});
        this.contador = this.contador + 1;
      }

      return this.saldo;
    },
    getsaldott(address) { // saldo en omnilayer
      this.isonnode(address);
      if (this.contador-1 < this.numregs) {
        let adr = address;
        let addressB64;
        addressB64 = Buffer.from(adr).toString("base64");
        this.axios
          .get(`/rpc-getsaldott/${addressB64}`)
          .then((res) => { 
            this.saldott = res.data.balance;
            this.saldott = parseFloat(this.saldott);
            if (isNaN(this.saldott)) {
              this.saldott = 0;
            }
            this.actualizado = true;
          })
          .catch((e) => {});
        this.contador = this.contador + 1;
      }

      return this.saldott;
    },    
    getsaldorefresh(address) {
      this.contador = 0;
      if (this.contador < this.numregs) {
        let adr = address;
        let addressB64;
        addressB64 = Buffer.from(adr).toString("base64");
        this.axios
          .get(`/rpc-getsaldo/${addressB64}`)
          .then((res) => {
            this.saldo = res.data;
            this.saldo = parseFloat(this.saldo);
            if (isNaN(this.saldo)) {
              this.saldo = 0;
            }
            this.actualizado = true;
          })
          .catch((e) => {});
        this.contador = this.contador + 1;
      }

      return this.saldo;
    },

    updateOper() {    
      this.selectedoper = !this.selectedoper;
      this.syncUpdateOper(this.selectedoper); 
    },    
    alerta() {
      Swal.fire(
        "Vender Bitcoins!",
        "Para ofertar y vender sus Bitcoins, <a href='/Entrar'>necesita entrar primero</a>.",
        "success"
      );
    },
    toTstamp(strDate){
        let datum = Date.parse(strDate);
        return datum/1000;
    },
    Tstamptomoment(Tstamp){
      //console.log(Tstamp)
     // console.log(moment.unix(Tstamp).format("yyyy-MM-DD"));
        let datum = moment.unix(Tstamp).format("yyyy-MM-DD");
        return datum;
    },                     
    async check_vto_mfmg() {
                
            //console.log(this.mfmg);
            //console.log(this.User.LOCKTIME_RAWTXOPEN);;
            //console.log(this.saldomfmg);
                                                                       
              if (this.User.LOCKTIME_RAWTXOPEN !== 2130000000) { //implica hay retiro seguridad y vto de mfmg a chequear
              // console.log(this.User.RETRAWTXOPEN_LOCKTIME);
               let  feclimas1d = moment().add(1, 'd').format("yyyy-MM-DD");
               let  feclimenos1d = moment().subtract(1, 'd').format("yyyy-MM-DD");
               let  fecha_ok = moment().format("yyyy-MM-DD");

                try {
                    let response = await axios.get(`/fecha-server/`)

                    let nowunixsite = response.data.ahora;
                   // nowunixsite = parseInt(nowunixsite);
                   // nowunixsite = Date.parse(nowunixsite);
                   // console.log("fecha serversite ahora..." + nowunixsite);
                    //nowunixsite = this.Tstamptomoment(nowunixsite);
                   // console.log("fecha unixsite ahora..." + nowunixsite);
                  //  console.log("fecha client 1 d mas..." + feclimas1d);
                  //  console.log("fecha client 1 d menos..." + feclimenos1d);
                    if ( feclimas1d >= nowunixsite & feclimenos1d <= nowunixsite) {
                    //console.log("fecha sistema cliente aceptable..." );
                      fecha_ok = fecha_ok;
                    } else {
                    //console.log("fecha sistema cliente NO aceptable o erronea..." );
                      fecha_ok = nowunixsite;
                    }
                    //console.log("fecha sistema  OK..." + fecha_ok );
                    let now_ok_tlock = this.toTstamp(fecha_ok);
           //  now_ok_tlock = 1651071946; //dia 27/4
           //  now_ok_tlock = 1650726346; //dia 23/4
                    // vto 1650844800
                    let vto = this.User.LOCKTIME_RAWTXOPEN;
                    let segs_to_vto = vto - now_ok_tlock ;
                    //console.log( "segs to vto " + segs_to_vto );
                    let dias_to_vto = (segs_to_vto / 86400).toFixed(0); 
                    //console.log("dias " + dias_to_vto );

                    if (segs_to_vto < 0) { // vencido

                    dias_to_vto = dias_to_vto * -1;
                    //console.log("vencido dias " + segs_to_vto / 86400 );
                          Swal.fire(
                            this.vtomf.mt[this.selectedlang.value][0].vl,
                            this.vtomf.mt[this.selectedlang.value][1].vl
                            + dias_to_vto + this.vtomf.mt[this.selectedlang.value][2].vl
                            ,
                            "warning"
                          );
                          router.push({name: 'Perfil'}); 

                    } else { // sin vencer, faltan dias                 
                      if (segs_to_vto < 864000) {  // faltan menos de 10 dias  
                      console.log("faltan menos de 10 dias " + segs_to_vto / 86400 );
                          Swal.fire(
                            this.vtomf10d.mt[this.selectedlang.value][0].vl,
                            this.vtomf10d.mt[this.selectedlang.value][1].vl
                            + dias_to_vto + this.vtomf.mt[this.selectedlang.value][2].vl
                            ,
                            "warning"
                          ); 
                          router.push({name: 'Perfil'}); 
                      }
                    } 

                     
                } catch (error) { console.log(" Error checking date" );  }

              }
               
    },   
    async getmfmg(vendedor) {  // User[],  multigarant y su saldo
      //console.log(vendedor);
                  let radr = vendedor; 
                  let raddressB64;
                  raddressB64 = Buffer.from(radr).toString("base64");     
          try {   
                  let response = await this.axios
                  .get(`/seekUser/${raddressB64}`)
                  this.mfmg = response.data.DIRMULTIFIRMA_FIANZALN;
                  this.User = response.data;
                          let adr = this.mfmg;
                          let addressB64;
                          addressB64 = Buffer.from(adr).toString("base64");
                          this.axios
                            .get(`/rpc-getsaldo/${addressB64}`)
                            .then((res) => {
                              this.saldomfmg = res.data;
                              this.saldomfmg = parseFloat(this.saldomfmg);
                              if (isNaN(this.saldomfmg)) {
                                this.saldomfmg = 0;
                              }
                            // analizamos si hay mfmg 
                            if (this.mfmg !== '⏳' )this.check_vto_mfmg(); 

                          })
                          .catch((e) => {});
              } catch (error) {console.log("error"); }           
    },
    async getmfmg_tt(vendedor) {  // User[],  multigarant y su saldo
      //console.log(vendedor);
                  let radr = vendedor; 
                  let raddressB64;
                  raddressB64 = Buffer.from(radr).toString("base64");     
          try {   
                  let response = await this.axios
                  .get(`/seekUser/${raddressB64}`)
                  this.mfmg = response.data.DIRMULTIFIRMA_FIANZALN;
                  this.User = response.data;
                          let adr = this.mfmg;
                          let addressB64;
                          addressB64 = Buffer.from(adr).toString("base64");
                          this.axios
                            .get(`/rpc-getsaldott/${addressB64}`)
                            .then((res) => {
                              this.saldomfmg_tt = res.data.balance;
                              this.saldomfmg_tt = parseFloat(this.saldomfmg_tt);
                              //console.log(this.saldomfmg_tt);
                              if (isNaN(this.saldomfmg_tt)) {
                                this.saldomfmg_tt = 0;
                              }
                            // analizamos si hay mfmg 
                            if (this.mfmg !== '⏳' )this.check_vto_mfmg(); 

                          })
                          .catch((e) => {});
              } catch (error) {console.log("error"); }           
    },         
  },
  computed: {
    ...mapGetters([
      "estaActivo",
      "nomuser",
      "iduser",
      "languser",
      "monuser",
      "operuser",            
      "selectedNumAlerts",
      "lastClickOper"
    ]),
  },
  created() {
    
    this.leerToken();
    if (this.estaActivo) {
    // LENGUA USER
    if (this.languser === 3) {this.selectedlang.value = 3; this.selectedlang.label = "CAT";}
    if (this.languser === 1) {this.selectedlang.value = 1; this.selectedlang.label = "ESP";}
    if (this.languser === 2) {this.selectedlang.value = 2; this.selectedlang.label = "ENG";}
    if (this.languser === 4) {this.selectedlang.value = 4; this.selectedlang.label = "PORT";}
    // MONEDA USER
    if (this.monuser === "united-states-dollar") {this.selectedmon.value = "united-states-dollar"; this.selectedmon.label = "USD";}
    if (this.monuser === "euro") {this.selectedmon.value = "euro"; this.selectedmon.label = "EUR";} 
    if (this.monuser === "venezuelan-bolívar-soberano") {this.selectedmon.value = "venezuelan-bolívar-soberano"; this.selectedmon.label = "VES";} 
    if (this.monuser === "colombian-peso") {this.selectedmon.value = "colombian-peso"; this.selectedmon.label = "COP";}
    if (this.monuser === "chilean-peso") {this.selectedmon.value = "chilean-peso"; this.selectedmon.label = "CLP";}
    if (this.monuser === "brazilian-real") {this.selectedmon.value = "brazilian-real"; this.selectedmon.label = "BRL";}
    if (this.monuser === "mexican-peso") {this.selectedmon.value = "mexican-peso"; this.selectedmon.label = "MXN";}
    if (this.monuser === "argentine-peso") {this.selectedmon.value = "argentine-peso"; this.selectedmon.label = "ARS";}
    if (this.monuser === "peruvian-nuevo-sol") {this.selectedmon.value = "peruvian-nuevo-sol"; this.selectedmon.label = "PEN";}
    if (this.monuser === "russian-ruble") {this.selectedmon.value = "russian-ruble"; this.selectedmon.label = "RUB";}
    if (this.monuser === "indian-rupee") {this.selectedmon.value = "indian-rupee"; this.selectedmon.label = "INR";}
    if (this.monuser === "turkish-lira") {this.selectedmon.value = "turkish-lira"; this.selectedmon.label = "TRY";}
    if (this.monuser === "iranian-rial") {this.selectedmon.value = "iranian-rial"; this.selectedmon.label = "IRR";}
    if (this.monuser === "chinese-yuan-renminbi") {this.selectedmon.value = "chinese-yuan-renminbi"; this.selectedmon.label = "CNY";}
    // cadena
    if (this.operuser === true) {this.selectedoper = true; this.syncUpdateOper(this.selectedoper);}
    if (this.operuser === false) {this.selectedoper = false; this.syncUpdateOper(this.selectedoper);} 
    } else {
      this.selectedmon.value = "united-states-dollar"; this.selectedmon.label = "USD";
    }
    
    this.getTodos1(this.selectedmon.label);
  },  
  mounted() {

                      if (this.estaActivo) {
                        this.getsaldo(this.nomuser);
                        this.getmfmg(this.nomuser);
                        this.getsaldott(this.nomuser);
                        this.getmfmg_tt(this.nomuser);;                             
                        this.joinServer();
                      }
                      this.getTodos1(this.selectedmon.label);                     
  },
};
</script>
<style lang="scss">
.blink-bg{
    width: 180px;
    display: flex;
    margin-top: -1px;
    margin-left: 15px;  
    font-size: 10px;  
		color: #fff;
		padding: 0px;;
		border-radius: 5px;
		animation: blinkingBackground 30s infinite;
	}
	@keyframes blinkingBackground{   
		0%		{ background-color: #10c018;}
		20%		{ background-color: #1056c0;}
		40%		{ background-color: #ef0a1a;}
		60%		{ background-color: #254878;}
		80% 	{ background-color: #04a1d5;}
    100%	{ background-color: white;} 
	}

#app {
  font-family: "Nunito", "Avenir", "Lato", Helvetica, Arial, sans-serif;
  /*font-family: "Montserrat", sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #233535;
  background-color: rgb(246, 251, 255);
}

#b-navbar {
  padding: 0px;
}

.navbar-nav{
  max-height: 55px;
  margin-bottom: -20px;
} 

.shake {
  animation: shake-animation 4.72s ease infinite;
  transform-origin: 50% 50%;
}
@keyframes shake-animation {
   0% { transform:translate(0,0) }
  1.78571% { transform:translate(5px,0) }
  3.57143% { transform:translate(0,0) }
  5.35714% { transform:translate(5px,0) }
  7.14286% { transform:translate(0,0) }
  8.92857% { transform:translate(5px,0) }
  10.71429% { transform:translate(0,0) }
  100% { transform:translate(0,0) }
} 
.popper {
    color: white;
    background-color: black;
    border-radius: 6px;
    padding: 5px 10px 1px;
    min-width: auto;    
    max-width: auto;
    max-inline-size: 540px;
    writing-mode: horizontal-tb;    
    max-height: 360px;
    text-align: center;
}
.popperpie {
    color: white;
    background-color: black;
    border-radius: 6px;
    padding: 5px 10px 1px;
    max-width: 540px;
    max-inline-size: 540px;
    writing-mode: horizontal-tb;    
    max-height: 300px;
    text-align: left;
    overflow-x: auto; //esconde el arrow  
    overflow-y: scroll; //esconde el arrow
} 
.img1 {
  max-width: 100%;
  height: auto;
}
#textmenu {
  width: auto;
  height: auto;
  font-size: 12px;
  left: -50px;
}
#textmenuawe {
  display: flex;
  margin-top: 9px;
  width: auto;
  height: auto;  
  font-size: 12px;
  display: list-item
}
#textawe {
  display: flex;
  margin-top: 4px;  
  width: auto;
  height: auto;  
  font-size: 24px;
}
#interc {
  color:Silver;
  font-size: 18px;
}

#cadena {
  color: rgb(218, 142, 1);
  border-color:aliceblue;
}
#etlogorp {
    display: none;
 }
 
#etuserrp {
    display: none;
 }
#interc {
  font-size: 18px;
  color: grey;
 }
#nav2a {
  font-size: 18px;
  color: grey;
 }
#nav2b {
  margin: auto;
}  
#nav2c {
  right: 125px;
  left: 14px;
}  

#movleft {
  margin-top: -20px;
  margin-left: -25px;
 }
#alert {
  z-index: 11;
}
.blinking {

        animation: opacity 2s ease-in-out infinite;
        opacity: 1;
}

@keyframes opacity {
      0% {
        opacity: 1;
      }

      50% {
        opacity: 0
      }

      100% {
        opacity: 1;
      }
} 

// moviles /////////////////////////// 
@media screen and (max-width: 767px) {
.view {
width: 360px;
} 
.container {
  margin-top:1px;
} 
 img {
  margin-right: 3.25px;
  margin-left: 3.25px;
  margin-bottom: 4px;
} 

    #etlogo {
      display: none;
    }
    #etlogorp {
      display: flex;
      margin-left: -3px;
      margin-top: -6px;      
      width: 34px;
      height: 34px;           
    }
    #etuser {
      display: none;
    }
    #etuserrp {
      display: flex;      
      margin-bottom: -25px;
      width: 25px;
      height: 25px;           
    }
    #movleft {
      margin-top: -20px;      
      margin-left: -69.9px;
    }            
    .blink-bg{
        display: flex;
        margin-top: -1px;
        margin-left: -10px;
        max-width: 44px; 
        width: 44px;
        max-inline-size: 44px;
        overflow: hidden; 
        font-size: 12px;  
        text-overflow: hidden;
    }       
    .navbar-nav{
      display: flex;           
      right: 53px;                
      width: auto;
      max-width: 125px;
      max-height: 30px;
    } 
    #textmenu {
      left: -1px;
      display: inline-block;
      width: 5px;
      max-width: 0.01px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }  
    #textmenuawe {
      /*display: none;*/
      display: flex;
      margin-top: 9px;
      max-width: 0.01px;
      overflow: hidden;    
    }
    #textawe {
      display: flex;
      margin-top: -2px;
      width: auto;
      height: auto;
      padding-left: 6px;
      padding-right: 0px;        
      font-size: 24px;
    }
    #minimenu {
      width: 360px;
    }
    #interc {
      font-size: 18px;
    }
    #alert {
      top: 13px;
      margin-left: 6px;
    }
    #ajdropd {
      top: -21px;
      left: -46px;
    }
  #nav2a {
    font-size: 16px;
    display: none;
  }
  #nav2b {
    position: relative;
    display: flex;    
    margin: -160px;    
    top:1px;
    left:-20px;
    right: auto;
    padding: 1px 1px 1px 1px;    
    background-color: transparent;
  }  
  #nav2c {
    position: relative;
    display: flex;    
    right: -1px;
    top:-1px;    
    left: auto;
    padding: 1px 1px 1px 1px;
    background-color: transparent;
  } 

.popper {
  max-width: 340px;
  max-inline-size: 340px;
}

}
</style>
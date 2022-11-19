<template>
<div class="home" v-if="selectedoper">
    <div class = "container">
  <!--  <HelloWorld msg="Welcome to Your Vue.js App"/> -->    
        <b-alert
        :show="dismissCountDown"
         dismissible
        :variant="mensaje.color"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
        >
        {{mensaje.texto}}
        </b-alert>
     </div>
    <div class="caja" v-if="vert2">            
                  <img
                    class="img"
                    align="bottom"
                    src="https://www.contobit.com/imagens/portada2.jpg"
                  />
    <div id="subet0"> 
                                <popper
                                  :visible-arrow = true
                                  :options= popoptions>
                                  <div class="popper" style="margin-left:-300px;">          
                                    <span> {{tit.pp[sl()][0].vl}}</span>                      
                                  </div>               
                                  <span slot="reference">
                                  <h1 style="color:white;">                 <img
                                    align="center"                  
                                    src="https://www.contobit.com/imagens/balance_btc.png"
                                    width="66.6px"
                                    height="50.66px"
                                  />                                    
                                    <span id="tit1"> {{tit.mt1[sl()][0].vl}}</span>
                                   </h1> 
                                  </span>
                                </popper>                           
    </div>                       
    <div id="subet1" >
                                <a
                                  class="btn"
                                  @click="(vert1 = !vert1) & (vert2 = false)"
                                >                               
                                  <h2 style="color:Orange;"><font-awesome-icon icon="caret-down" /> 
                                   <span id="tit2" > {{tit.mt2[sl()][0].vl}}</span>                               
                                  </h2>
                                </a>                       
    </div>
    <div id="subet2" > 
                                <a
                                  class="btn"
                                  @click="(vert2 = !vert2) & (vert1 = false)"
                                >
                                  <h4 style="color:white;"><font-awesome-icon icon="caret-down" /> 
                                   <span id="tit4" > {{tit.mt3[sl()][0].vl}}</span>                                 
                                   </h4>
                                </a>  
    </div>                   
    </div> 
    <div class="caja" v-if="!vert2">            
                  <img
                    class="img"                  
                    align="bottom"
                    src="https://www.contobit.com/imagens/portada.jpg"
                  />     
    <div id="subet0"> 
                                <popper
                                  :visible-arrow = true
                                  :options= popoptions>
                                  <div class="popper" style="margin-left:-300px;">          
                                    <span> {{tit.pp[sl()][0].vl}}</span>                      
                                  </div>               
                                  <span slot="reference">
                                  <h1 style="color:white;">                 <img
                                    align="center"                  
                                    src="https://www.contobit.com/imagens/balance_btc.png"
                                    width="66.6px"
                                    height="50.66px"
                                  />                                    
                                    <span id="tit1"> {{tit.mt1[sl()][0].vl}}</span>
                                   </h1> 
                                  </span>
                                </popper>  
    </div>                       
    <div id="subet1" >
                                <a
                                  class="btn"
                                  @click="(vert1 = !vert1) & (vert2 = false)"
                                >                               
                                  <h2 style="color:Orange;"><font-awesome-icon icon="caret-down" /> 
                                   <span id="tit2" > {{tit.mt2[sl()][0].vl}}</span>                               
                                  </h2>
                                </a>                       
    </div>
    <div id="subet2" > 
                                <a
                                  class="btn"
                                  @click="(vert2 = !vert2) & (vert1 = false)"
                                >
                                  <h4 style="color:White;"><font-awesome-icon icon="caret-down" /> 
                                   <span id="tit4" > {{tit.mt3[sl()][0].vl}}</span>                                 
                                   </h4>
                                </a>  
    </div>
    </div>
        
   <div v-if="vert1"> 
      <br>   
    <h5> 
      {{bpt1.tx1[sl()][0].vl}}
                    <popper
                    :visible-arrow = false
                    trigger="clickToOpen"
                    :options= popoptions>
                    <div class="popper">                                      
                      <span v-html="bpt1.tx2[sl()][0].vl"></span>                      
                    </div>               
                    <a href="#" slot="reference">
                      Satoshi
                    </a>
                  </popper>            
                    <span v-html="bpt1.tx3[sl()][0].vl"></span>
      <a
        href="https://blockstream.com/satellite/"
        target="_blank"
      > satelital</a><span v-html="bpt1.tx4[sl()][0].vl"></span> <a
        href="https://www.thetimes.co.uk/article/chancellor-alistair-darling-on-brink-of-second-bailout-for-banks-n9l382mn62h"
        target="_blank"
      > {{bpt1.tx5[sl()][0].vl}}</a> <span v-html="bpt1.tx7[sl()][0].vl"></span><a
                    href="https://academy.bit2me.com/que-es-deflacion-bitcoin/#:~:text=Durante%20el%20proceso%20de%20deflaci%C3%B3n,del%20dinero%20fiduciario%20se%20reduce."
                    target="_blank"
                  >{{bpt1.tx8[sl()][0].vl}}</a>{{bpt1.tx9[sl()][0].vl}}
      <a
        href="https://es.cointelegraph.com/news/if-you-had-invested-usd-032-in-bitcoin-in-2010-today-you-would-have-your-first-million-dollars"
        target="_blank"
      >{{bpt1.tx9_1[sl()][0].vl}}</a>."*
    </h5>

    <h5>
      <font color="red">{{bpt1.tx10[sl()][0].vl}}</font>
      <br />
    </h5>
    <font color="red">
      <span v-html="bpt1.tx11[sl()][0].vl"></span>
    </font>
    <br />
    <br />
    <br />
    </div>

   <div v-if="vert2">
   <br>   
    <div class="container" align="left" color="grey">
      <font color="grey">
        <section>
          <article>
            <p>
              {{bpt2.tx1[sl()][0].vl}}
              <br />
            </p>
            <h5>
              <strong>
                <u>{{bpt2.tx2[sl()][0].vl}}</u>
              </strong>{{bpt2.tx3[sl()][0].vl}}
            </h5>
            <br />
            <ol>
              <li>
                <strong>
                  <popper
                    :visible-arrow = false
                    trigger="clickToOpen"
                    :options="{
                      placement: 'top',
                      modifiers: { offset: { offset: '0,5px' } }
                    }">
                    <div class="popper_tl">                                      
                      <span v-html="bpt2.tx4[sl()][0].vl"></span>
                      
                    </div>
                
                    <a href="#" slot="reference">
                      {{bpt2.tx5[sl()][0].vl}}
                    <font-awesome-icon :icon="['far', 'question-circle']" />
                    </a>
                  </popper>                 
                  
                </strong>
                <span v-html="bpt2.tx6[sl()][0].vl"></span> <strong>
                <u>
                    <popper
                    :visible-arrow = false
                    trigger="clickToOpen"
                    :options= popoptions>
                    <div class="popper_tl">                                      
                      <span v-html="bpt2.tx7[sl()][0].vl"></span>                      
                    </div>               
                    <a href="#" slot="reference">
                      {{bpt2.tx8[sl()][0].vl}}
                    </a>
                  </popper>                  
                  </u></strong>{{bpt2.tx8[sl()][1].vl}}
                <br />
                <br />
              </li>
              <li>
                <span v-html="bpt2.tx9[sl()][0].vl"></span> 
                <a
                  href="https://es.cointelegraph.com/news/most-significant-hacks-of-2019-new-record-of-twelve-in-one-year"
                  target="_blank"
                > {{bpt2.tx9_1[sl()][0].vl}}</a>.
              </li>
              <br />
              <li>{{bpt2.tx10[sl()][0].vl}} bitcoins.</li>
              <br />
              <li>
                {{bpt2.tx11[sl()][0].vl}}
                    <popper
                    :visible-arrow = false
                    trigger="clickToOpen"
                    :options= popoptions>
                    <div class="popper_tl">                                      
                      <span v-html="bpt2.tx12[sl()][0].vl"></span>                      
                    </div>               
                    <a href="#" slot="reference">
                      {{bpt2.tx13[sl()][0].vl}}
                    </a>
                  </popper>                 
                {{bpt2.tx14[sl()][0].vl}}
                <i>
                  <a
                    href="https://www.bitcoinarmory.com/tutorials/armory-advanced-features/offline-wallets/"
                    target="_blank"
                  >Armory</a>
                </i>{{bpt2.tx15[sl()][0].vl}}
              </li>
              <br />
              <li>{{bpt2.tx16[sl()][0].vl}}</li>
              <br />
              <li>
                <span v-html="bpt2.tx17[sl()][0].vl"></span>
              </li>
              <br />
              <li>
                <span v-html="bpt2.tx18[sl()][0].vl"></span>
              </li>
              <br />
              <li>{{bpt2.tx19[sl()][0].vl}}</li>
              <br />
              <li>{{bpt2.tx20[sl()][0].vl}}</li>
              <br />
              <li>{{bpt2.tx21[sl()][0].vl}}</li>
              <br />
              <li>{{bpt2.tx22[sl()][0].vl}}</li>
              <br />
              <li>{{bpt2.tx23[sl()][0].vl}}</li>
              <br />
              <li>
                <span v-html="bpt2.tx24[sl()][0].vl"></span>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </li>
            </ol>
          </article>
        </section>
      </font>
    </div>
    </div>
</div>     

<div class="home" v-else-if="!selectedoper">
    <div class = "container">
        <b-alert
        :show="dismissCountDown"
         dismissible
        :variant="mensaje.color"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
        >
        {{mensaje.texto}}
        </b-alert>
     </div>
    <div class="caja" v-if="vert2">            
                  <img
                    class="img"                  
                    align="bottom"
                    src="https://www.contobit.com/imagens/T6.jpeg"
                  />
    <div id="subet0"> 
                                <popper
                                  :visible-arrow = true
                                  :options= popoptions>
                                  <div class="popper" style="margin-left:-300px;">          
                                    <span> {{tit.pp[sl()][0].vl}}</span>                      
                                  </div>               
                                  <span slot="reference">
                                  <h1 style="color:white;">                 <img
                                    align="center"                  
                                    src="https://www.contobit.com/imagens/balance_tt.png"
                                    width="66.6px"
                                    height="50.66px"
                                  />                                    
                                    <span id="tit1"> {{tit.mt1[sl()][0].vl}}</span>
                                   </h1> 
                                  </span>
                                </popper> 
    </div>                   
    <div id="subet1" >
                                <a
                                  class="btn"
                                  @click="(vert1 = !vert1) & (vert2 = false)"
                                >
                                  <h2 v-if="vert1" style="color:orange;"><font-awesome-icon icon="caret-down" /> 
                                   <span id="tit2" > {{tit.mt2t[sl()][0].vl}}</span>                                 
                                   </h2>
                                  <h2 v-if="vert2" style="color:green;"><font-awesome-icon icon="caret-down" /> 
                                   <span id="tit2" > {{tit.mt2t[sl()][0].vl}}</span>                                 
                                   </h2>
                                  <h2 v-if="!vert1 & !vert2" style="color:orange;"><font-awesome-icon icon="caret-down" /> 
                                   <span id="tit2" > {{tit.mt2t[sl()][0].vl}}</span>                              
                                   </h2>                                                                     
                                </a>                       
    </div>
    <div id="subet2" > 
                                <a
                                  class="btn"
                                  @click="(vert2 = !vert2) & (vert1 = false)"
                                >
                                  <h4 v-if="vert1" style="color:seagreen;"><font-awesome-icon icon="caret-down" /> 
                                   <span id="tit4"> {{tit.mt3t[sl()][0].vl}}</span>                                 
                                   </h4>
                                   <h4 v-if="vert2" style="color:seagreen;"><font-awesome-icon icon="caret-down" /> 
                                   <span id="tit4"> {{tit.mt3t[sl()][0].vl}}</span>                                 
                                   </h4>
                                   <h4 v-if="!vert1 & !vert2" style="color:seagreen;"><font-awesome-icon icon="caret-down" />
                                   <span id="tit4"> {{tit.mt3t[sl()][0].vl}}</span>                                 
                                   </h4>                                                                     
                                </a>  
    </div>                   
    </div> 
    <div class="caja" v-if="!vert2">            
                  <img
                    class="img"                  
                    align="bottom"
                    src="https://www.contobit.com/imagens/T5.jpeg"
                  /> 
    <div id="subet0"> 
                                <popper
                                  :visible-arrow = true
                                  :options= popoptions>
                                  <div class="popper" style="margin-left:-300px;">          
                                    <span> {{tit.pp[sl()][0].vl}}</span>                      
                                  </div>               
                                  <span slot="reference">
                                  <h1 style="color:white;">                 <img
                                    align="center"                  
                                    src="https://www.contobit.com/imagens/balance_tt.png"
                                    width="66.6px"
                                    height="50.66px"
                                  />                                    
                                    <span id="tit1"> {{tit.mt1[sl()][0].vl}}</span>
                                   </h1> 
                                  </span>
                                </popper>
    </div>                   
    <div id="subet1" >
                                <a
                                  class="btn"
                                  @click="(vert1 = !vert1) & (vert2 = false)"
                                >
                                  <h2 v-if="vert1" style="color:orange;"><font-awesome-icon icon="caret-down" /> 
                                   <span id="tit2" > {{tit.mt2t[sl()][0].vl}}</span>                                                                     
                                   </h2>
                                  <h2 v-if="vert2" style="color:darkolivegreen;"><font-awesome-icon icon="caret-down" /> 
                                   <span id="tit2" > {{tit.mt2t[sl()][0].vl}}</span>                                 
                                   </h2>
                                  <h2 v-if="!vert1 & !vert2" style="color:yellow;"><font-awesome-icon icon="caret-down" /> 
                                   <span id="tit2" > {{tit.mt2t[sl()][0].vl}}</span>                                 
                                   </h2>                                                                     
                                </a>                       
    </div>
    <div id="subet2" > 
                                <a
                                  class="btn"
                                  @click="(vert2 = !vert2) & (vert1 = false)"
                                >
                                  <h4 v-if="vert1" style="color:mintcream;"><font-awesome-icon icon="caret-down" /> 
                                   <span id="tit4"> {{tit.mt3t[sl()][0].vl}}</span>                                 
                                   </h4>
                                   <h4 v-if="vert2" style="color:mintcream;"><font-awesome-icon icon="caret-down" /> 
                                   <span id="tit4"> {{tit.mt3t[sl()][0].vl}}</span>                                 
                                   </h4>
                                   <h4 v-if="!vert1 & !vert2" style="color:mintcream;"><font-awesome-icon icon="caret-down" />
                                   <span id="tit4"> {{tit.mt3t[sl()][0].vl}}</span>                                   
                                   </h4>                                                                     
                                </a>  
    </div>
    </div>
       
<div v-if="vert1"> 
      <br>   
    <h5> 
      {{bpt1.tx1tt[sl()][0].vl}}                     
                  <popper
                  :visible-arrow = false
                    trigger="clickToOpen"
                    :options= popoptions>
                    <div class="popper">                                      
                      <span v-html="bpt1.tx2[sl()][0].vl"></span>                      
                    </div>               
                    <a href="#" slot="reference">
                      Satoshi
                    </a>
                  </popper> 
                    <span v-html="bpt1.tx3[sl()][0].vl"></span>
      <a
        href="https://blockstream.com/satellite/"
        target="_blank"
      > satelital</a><span v-html="bpt1.tx4[sl()][0].vl"></span> <a
        href="https://www.thetimes.co.uk/article/chancellor-alistair-darling-on-brink-of-second-bailout-for-banks-n9l382mn62h"
        target="_blank"
      > {{bpt1.tx5[sl()][0].vl}} </a><span v-html="bpt1.tx7tt[sl()][0].vl"></span><a
                    href="https://www.tokens24.com/es/cryptopedia/basics/que-es-usdt-y-como-funciona/amp"
                    target="_blank"
                  >{{bpt1.tx8tt[sl()][0].vl}}</a>{{bpt1.tx9tt[sl()][0].vl}}"*
    </h5>

    <h5>
      <font color="red">{{bpt1.tx10[sl()][0].vl}}</font>
      <br />
    </h5>
    <font color="red">
      <span v-html="bpt1.tx11[sl()][0].vl"></span>
    </font>
    <br />
    <br />
    <br />
    </div>

   <div v-if="vert2">
   <br>   
    <div class="container" align="left" color="grey">
      <font color="grey">
        <section>
          <article>
            <p>
              {{bpt2.tx1tt[sl()][0].vl}}
              <br />
            </p>
            <h5>
              <strong>
                <u>{{bpt2.tx2[sl()][0].vl}}</u>
              </strong>{{bpt2.tx3[sl()][0].vl}}
            </h5>
            <br />
            <ol>
              <li>
                <strong>
                     <popper
                     :visible-arrow = false
                    trigger="clickToOpen"
                    :options= popoptions>
                    <div class="popper_tl">                                      
                      <span v-html="bpt2.tx4tt[sl()][0].vl"></span>                      
                    </div>               
                    <a href="#" slot="reference">
                      {{bpt2.tx5[sl()][0].vl}}
                    <font-awesome-icon :icon="['far', 'question-circle']" />
                    </a>
                  </popper>                  
                </strong>
                {{bpt2.tx6tt[sl()][0].vl}} <strong>
                <u>
                    <popper
                    :visible-arrow = false
                    trigger="clickToOpen"
                    :options= popoptions>
                    <div class="popper_tl">                                      
                      <span v-html="bpt2.tx7tt[sl()][0].vl"></span>                      
                    </div>               
                    <a href="#" slot="reference">
                      {{bpt2.tx8[sl()][0].vl}}
                    </a>
                  </popper>                     
                    </u>
              </strong>{{bpt2.tx8[sl()][1].vl}}
                <br />
                <br />
              </li>
              <li>
                <span v-html="bpt2.tx9[sl()][1].vl"></span> 
                <a
                  href="https://es.cointelegraph.com/news/most-significant-hacks-of-2019-new-record-of-twelve-in-one-year"
                  target="_blank"
                > {{bpt2.tx9_1[sl()][0].vl}}</a>.
              </li>
              <br />
              <li>{{bpt2.tx10[sl()][0].vl}} USDT.</li>
              <br />
              <li>
                {{bpt2.tx11[sl()][0].vl}} 
                    <popper
                    :visible-arrow = false
                    trigger="clickToOpen"
                    :options= popoptions>
                    <div class="popper_tl">                                      
                      <span v-html="bpt2.tx12[sl()][0].vl"></span>                      
                    </div>               
                    <a href="#" slot="reference">
                      {{bpt2.tx13[sl()][0].vl}}
                    </a>
                  </popper>                  
                {{bpt2.tx14[sl()][0].vl}}
                <i>
                  <a
                    href="https://www.bitcoinarmory.com/tutorials/armory-advanced-features/offline-wallets/"
                    target="_blank"
                  >Armory</a>
                </i>{{bpt2.tx15[sl()][0].vl}}
              </li>
              <br />
              <li>{{bpt2.tx16[sl()][0].vl}}</li>
              <br />
              <li>
                <span v-html="bpt2.tx17[sl()][1].vl"></span>
              </li>
              <br />
              <li>
                <span v-html="bpt2.tx18[sl()][1].vl"></span>
              </li>
              <br />
              <li>{{bpt2.tx19[sl()][0].vl}}</li>
              <br />
              <li>{{bpt2.tx20[sl()][0].vl}}</li>
              <br />
              <li>{{bpt2.tx21[sl()][1].vl}}</li>
              <br />
              <li>{{bpt2.tx22[sl()][0].vl}}</li>
              <br />
              <li>{{bpt2.tx23[sl()][0].vl}}</li>
              <br />
              <li>
                <span v-html="bpt2.tx24[sl()][0].vl"></span>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </li>
            </ol>
          </article>
        </section>
      </font>
    </div>
</div>
</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';

export default {
  components: {
    //HelloWorld,
    'popper': Popper,
  },
  data() {
    return {
      popoptions: {
                      placement: 'top',
                      modifiers: { offset: { offset: '0,5px' } }
                    },     
      vert0: false,
      vert1: false,
      vert2: false,   
      name: "Home",
      todos: "",
      el: "#container",
      mensaje: {color: 'warning', texto: ''},
      dismissSecs: 5,
      dismissCountDown: 0,
      // idiomas
      tit: {
       mt1: [
          [{ vl: 'Arbitraje multifirma' }],
          [{ vl: 'Multisig arbitrage' }],
          [{ vl: 'Arbitratge multisign' }],
          [{ vl: 'Arbitragem multiassin' }]                                               
            ],
       pp: [
          [{ vl: 'Garantizado bajo pruebas de los medios de pago.' }],
          [{ vl: 'Guaranteed under proofs of the means of payment.' }],
          [{ vl: 'Garantit sota proves dels mitjans de pagament.' }],
          [{ vl: 'Garantido com comprovativos de meios de pagamento.' }]                                               
            ],            
       mt2: [
          [{ vl: 'La revolución del dinero' }],
          [{ vl: 'The money revolution' }],
          [{ vl: 'La revolució dels calés' }],
          [{ vl: 'A revolução do dinheiro' }]                                               
            ],
       mt2t: [
          [{ vl: 'La revolución blockchain' }],
          [{ vl: 'The blockchain revolution' }],
          [{ vl: 'La revolució blockchain' }],
          [{ vl: 'A revolução blockchain' }]                                               
            ],            
       mt3: [
          [{ vl: 'El camino fácil la simplicidad' }],
          [{ vl: 'The easy way simplicity' }],
          [{ vl: 'El camí fàcil la simplicitat' }],
          [{ vl: 'A maneira fácil, simplicidade' }]                                               
            ],
       mt3t: [
          [{ vl: 'Directo, el camino fácil' }],
          [{ vl: 'Direct, the easy way' }],
          [{ vl: 'Directe, el camí fàcil' }],
          [{ vl: 'Direto e fácil' }]                                               
            ] 
      },

      bpt1: {
       tx1: [
          [{ vl: 'La invención de Bitcoin por' }],
          [{ vl: 'The invention of Bitcoin by' }],
          [{ vl: 'La invenció de Bitcoin pel' }],
          [{ vl: 'A invenção do Bitcoin por' }]                                               
            ],
       tx1tt: [
          [{ vl: 'La invención de Blockchain por' }],
          [{ vl: 'The invention of Blockchain by' }],
          [{ vl: 'La invenció de Blockchain pel' }],
          [{ vl: 'A invenção do Blockchain por' }]                                               
            ],            
       tx2: [
          [{ vl: "<br /><strong>1. Libro blanco de bitcoin.</strong><br /><br /> Lo que se necesita es un sistema de pagos electrónicos basado en pruebas criptográficas<br /> en vez de confianza, permitiéndole a dos partes interesadas en realizar transacciones directamente sin la necesidad de un tercero confiable.<br /><br /> SATOSHI NAKAMOTO<br /><br />" }],
          [{ vl: '<br /><strong>1. Bitcoin white paper. </strong> <br /> <br /> What is needed is an electronic payment system based on cryptographic evidence <br /> instead of trust, allowing two interested parties to carry out transactions directly without the need for a trusted third party. <br /> <br /> SATOSHI NAKAMOTO<br /><br />' }],
          [{ vl: '<br /><strong>1. Llibre blanc de bitcoin.</strong><br /><br /> El que es necessita és un sistema de pagaments electrònics basat en proves criptogràfiques<br /> en comptes de confiança, permetent-li a dues parts interessades a realitzar transaccions directament sense la necessitat d`un tercer confiable.<br /><br /> SATOSHI NAKAMOTO<br /><br />' }],
          [{ vl: '<br /><strong>1. Papel branco bitcoin.</strong><br /><br /> O que é necessário é um sistema de pagamento eletrônico baseado em evidências criptográficas <br /> em vez de confiança, permitindo que duas partes interessadas façam transações diretamente sem a necessidade de um terceiro de confiança.<br /><br /> SATOSHI NAKAMOTO<br /><br />' }]                                               
            ],
       tx3: [
          [{ vl: ', trae consigo la soberanía sobre el dinero.<br />Cualquiera puede, manejar y, <b>custodiar por si mismo</b> su dinero en internet.<br />Sin necesidad de ser salvaguardado y controlado por otros. Accesible las 24 h.<br /> instantáneamente en cualquier punto del planeta, con total seguridad, avalada<br /> por más de trece años superados de andadura, sin fisuras.Blindado incluso a<br /> nivel' }],
          [{ vl: ', brings with it sovereignty over money.<br />Anyone anywhre can manage and <b>guard their own</b> money on the internet.<br />No need to be safeguarded and controlled by others. Accessible for all 24 h.<br /> instantly anywhere on the planet, with total security, guaranteed for more<br /> than thirteen years surpassed, without cracks. Shielded even to' }],
          [{ vl: ', porta inclosa la sobirania sobre els calés.<br />Qualsevol pot, manegar i, <b> custodiar per si mateix </b> els seus diners a internet.<br /> Sense necessitat de ser salvaguardat i controlat per uns altres. Accessible les 24 h.<br /> instantàniament a qualsevol punt de la planeta, amb total seguretat, avalada<br /> per més de tretze anys superats enguany, sense fissures. Blindat fins i tot a <br /> nivell' }],
          [{ vl: ', traz consigo a soberania sobre o dinheiro.<br /> Qualquer pessoa pode, gerir e <b> guardar por si </b> o seu dinheiro na Internet.<br /> Sem a necessidade de ser protegido e controlado por terceiros. Acessível por 24 h.<br /> instantaneamente em qualquer lugar do planeta, com total segurança, garantida<br /> por mais de treze anos se passaram, sem rachaduras. Blindado até <br /> nível' }]                                               
            ],
       tx4: [
          [{ vl: ', por 365 días hábiles al año. Gran parte de población no dispone<br />de los servicios bancarios, o simplemente, ya puede preferir' }],
          [{ vl: '<br />level, for 365 business days a year. Much of the population does not have<br />banking services, or simply, you may already prefer' }],
          [{ vl: ', per 365 dies hàbils l`any. Gran part de població no disposa<br /> de serveis bancaris, o simplement, ja pot preferir' }],
          [{ vl: ', pou 365 dias úteis por ano. Grande parte da população não tem<br /> de serviços bancários, ou simplesmente, você já pode preferir' }]                                               
            ],
       tx5: [
          [{ vl: 'prescindir de' }],
          [{ vl: 'to do without' }],
          [{ vl: 'prescindir d`' }],
          [{ vl: 'dispensar' }]                                               
            ],
       tx7: [
          [{ vl: 'ellos.<br />A salvo del robo institucionalizado por rescates bancarios o por las inflaciones.<br />Con sólo una llave digital encriptada de su exclusiva propiedad es suficente.<br />*"La forma de ganar dinero, lícitamente o no, como siempre va en la conciencia."*<br />*"' }],
          [{ vl: 'them.<br />Safe from institutionalized theft by bank bailouts or inflation.<br />Just an encrypted digital key that you own is enough.<br />* "The way to win money, lawfully or not, as always goes in the conscience." *<br />*"' }],
          [{ vl: 'ells.<br /> Fora de perill del robatori institucionalitzat be per rescats bancaris o per les inflacions.<br /> Amb només una clau digital encriptada de la seva exclusiva propietat és suficent.<br /> * "La forma de guanyar els calés, lícitament o no, com sempre va a la consciència." *<br />*"' }],
          [{ vl: 'eles.<br /> Protegido contra roubo institucionalizado por salvamento bancário ou inflação.<br /> Basta uma chave digital criptografada de sua propriedade exclusiva.<br /> * "A forma de ganhar dinheiro, legalmente ou não, como sempre vai na consciência." *<br />*"' }]                                               
            ],
       tx7tt: [
          [{ vl: 'ellos.<br /> Con sólo una llave digital encriptada de su exclusiva propiedad es suficente.<br />*"' }],
          [{ vl: 'them.<br /> Just an encrypted digital key that you own is enough.<br />*"' }],
          [{ vl: 'ells.<br /> Amb només una clau digital encriptada de la seva exclusiva propietat és suficent.<br />*"' }],
          [{ vl: 'eles.<br /> Basta uma chave digital criptografada de sua propriedade exclusiva.<br />*"' }]                                               
            ],            
       tx8: [
          [{ vl: 'Bitcoin es deflacionario' }],
          [{ vl: 'Bitcoin is deflationary' }],
          [{ vl: 'Bitcoin és deflacionista' }],
          [{ vl: 'Bitcoin é deflacionário' }]                                               
            ],
       tx8tt: [
          [{ vl: 'USDT es una criptomoneda estable' }],
          [{ vl: 'USDT is a stable cryptocurrency' }],
          [{ vl: 'USDT és una criptomoneda estable' }],
          [{ vl: 'USDT é uma criptomoeda estável' }]                                               
            ],            
       tx9: [
          [{ vl: ', incluso más que el oro, ver y analizar los' }],
          [{ vl: ', even more so than gold, see and analyze the' }],
          [{ vl: ', fins i tot més que l`or, veure i analitzar els' }],
          [{ vl: ', ainda mais do que ouro, veja e analise' }]                                               
            ],
       tx9tt: [
          [{ vl: ', equivalente al valor del dólar estadounidense.' }],
          [{ vl: ', equivalent to the value of the USA dollar.' }],
          [{ vl: ', equivalent al valor del dòlar nord-americà.' }],
          [{ vl: ', equivalente ao valor do dólar USA.' }]                                               
            ],            
       tx9_1: [
          [{ vl: 'gráficos' }],
          [{ vl: 'charts' }],
          [{ vl: 'gràfics' }],
          [{ vl: 'gráficos' }]                                               
            ],
       tx10: [
          [{ vl: '¡RECUERDE! *"¿ No tienes tus llaves privadas ? ¡ No son tus bitcoins !"*' }],
          [{ vl: 'REMEMBER! *" If you don`t have your private key, bitcoins are not yours."*' }],
          [{ vl: 'RECORDA! * "No tens les teves claus privades? No són els teus bitcoins!"*' }],
          [{ vl: 'LEMBRAR! * "Você não tem suas chaves privadas? Elas não são seus bitcoins!" *' }]                                               
            ],
        tx11: [
          [{ vl: '" Las carteras calientes, incluso las frías, no son infalibles a hackeos. Las llaves privadas de bitcoin SÍ."<br />Siempre y cuando las mantenga, a su buen resguardo y, en cartera de papel sin conexión a internet.' }],
          [{ vl: '"Hot wallets, even cold ones, are not foolproof to hacks. Bitcoin private keys YES. "<br />As long as you keep them, safeguarded and in a paper wallet without an internet connection.' }],
          [{ vl: '"Les carteres calentes, fins i tot les fredes, no són infal·libles a hackejos. Les claus privades de bitcoin Sí. "<br />Sempre que les mantingui, al seu bon resguard i, en cartera de paper sense connexió a internet.' }],
          [{ vl: '"Carteiras quentes, mesmo as frias, não são infalíveis para hacks. Chaves privadas Bitcoin SIM. "<br /> Desde que os mantenha, em boa guarda e numa carteira de papel sem ligação à Internet.' }]                                               
            ]                                                              
      },

      bpt2: {
       tx1: [
          [{ vl: 'NUESTRO GRANITO DE ARENA A LA REVOLUCIÓN BITCOIN:' }],
          [{ vl: 'OUR GRANITE SAND TO THE BITCOIN REVOLUTION:' }],
          [{ vl: 'EL NOSTRE GRANET DE SORRA A LA REVOLUCIÓ BITCOIN:' }],
          [{ vl: 'NOSSA AREIA DE GRANITO À REVOLUÇÃO DE BITCOIN:' }]                                               
            ],
       tx1tt: [
          [{ vl: 'NUESTRO GRANITO DE ARENA A LA REVOLUCIÓN BLOCKCHAIN:' }],
          [{ vl: 'OUR GRANITE SAND TO THE BLOCKCHAIN REVOLUTION:' }],
          [{ vl: 'EL NOSTRE GRANET DE SORRA A LA REVOLUCIÓ BLOCKCHAIN:' }],
          [{ vl: 'NOSSA AREIA DE GRANITO À REVOLUÇÃO DE BLOCKCHAIN:' }]                                               
            ],            
       tx2: [
          [{ vl: 'DIRECTO A SU LLAVE PRIVADA BITCOIN' }],
          [{ vl: 'DIRECT TO YOUR PRIVATE BITCOIN KEY' }],
          [{ vl: 'DIRECTE A LA SEVA CLAU PRIVADA BITCOIN' }],
          [{ vl: 'DIRETO PARA SUA CHAVE DE BITCOIN PRIVADA' }]                                               
            ],
       tx3: [
          [{ vl: ', principales medios de pago y monedas.' }],
          [{ vl: ', main means of payment and currencies.' }],
          [{ vl: ', principals mitjans de pagament i monedes.' }],
          [{ vl: ', principais meios de pagamento e moedas.' }]                                               
            ],
       tx4: [
          [{ vl: '<br /><strong>1. Arbitraje “sin confianza”.</strong><br /><br /> Un proceso de arbitraje, permite que un tercero actúe de juez, para determinar el resultado de una transacción entre dos partes. Por ejemplo si una parte vende bitcoins, puede tramitarlos a través de un tercero, cuando la otra parte pague los bitcoins, el árbitro se los entrega. <br />Esto no tiene ningún misterio y podría hacerse sin multifirma. Pero gracias a la multifirma, se añade la parte de “sin confianza”. Veamos por qué.<br />En el escenario planteado creamos un contrato bitcoin multifirma  para la transacción(Tx). Pues bien, sólo si dos de las  partes firman la transacción, el dinero podría moverse. Ninguna de las  partes por separado puede quedarse con el dinero, lo que fuerza a intentar encontrar la mejor solución, en caso de incidencia o desacuerdo.<br />Un símil simplificado del mundo tradicional son las cartas de pago. Un instrumento financiero gestionado por cualquier banco, donde el banco es, quien actúa como árbitro entre ambas partes. Un proceso donde sólo se podía depender de empresas “reputadas“ como los bancos, quienes se lucran justamente de esto, pues ellos son quienes hasta la llegada de bitcoin tenían, casi esclusivamente el control total de tu dinero, cobrando además comisiones desmesuradas por ello o por cualquier transacción con tu dinero.<br />De repente no necesitas al banco. Bitcoin te permite hacer esto, sin figuras burocráticas de gran “reputación“ que almacenen o custodien tu dinero, y los usuarios ahora son capaces de autogestionarse.<br />De hecho muchas plataformas que venden productos o servicios entre particulares, práctica cada día mas habitual, ya soportan Bitcoin como medio de pago. Incluso en los más innovadores como son los descentralizados.<br />Caso práctico, donde se eliminan fricciones de procesos tradicionales, ahorrando tiempo y burocracia, eliminando custodías e intermediarios y, por consiguiente minimizando costes.<br /><br />' }],
          [{ vl: '<br /><strong>1. Arbitration “without trust”.</strong><br /><br /> An arbitration process allows a third party to act as a judge to determine the outcome of a transaction between two parties. For example, if one party sells bitcoins, they can process them through a third party, when the other party pays for the bitcoins, the arbitrator delivers them to second. <br />This is no mystery and could be done without multi-signature. But thanks to the multi-signature, the part of “without trust” is added. Let`s see why. <br /> In the given scenario we create a multi-signature bitcoin contract for the transaction (Tx).Well, only if two of the  parties sign the transaction, the money could move. None of the  separate parties can keep the money, which forces to try to find the best solution, in case of incidence or disagreement. <br /> A simplified simile of the traditional world is the payment letters. A financial instrument managed by any bank, where the bank is, who acts as an arbitrator between both parties. A process where you could only depend on “reputable“ companies such as banks, who profit precisely from this, since they are the ones who until the arrival of bitcoin had, almost exclusively, total control of your money, also charging excessive commissions for it or for any transaction with your money. <br /> Suddenly you don`t need the bank. Bitcoin allows you to do this, without highly “reputable“ bureaucratic figures to store or guard your money, and users are now able to manage themselves. <br /> In fact, many platforms that sell products or services between individuals, a practice that is more and more common every day, they already support Bitcoin as a means of payment. Even in the most innovative such as decentralized ones. <br /> Practical case, where frictions are eliminated from traditional processes, saving time and bureaucracy, eliminating custodians and intermediaries and, therefore, minimizing costs.<br /><br />' }],
          [{ vl: '<br /><strong>1. Arbitratge “sense confiança”.</strong><br /><br /> Un procés d`arbitratge, permet que un tercer actuï de jutge, per determinar el resultat d`una transacció entre dues parts. Per exemple si una part ven bitcoins, pot tramitar a través d`un tercer, i quan l altra part pagui els bitcoins, l`àrbitre se`ls lliura. <br />Això no té cap misteri i podria fer-se sense multisignatura. Però gràcies a la multisignatura, s`afegeix la part de sense confiança. Vegem per què. <br /> A l`escenari plantejat podem crear un contracte bitcoin multisignatura  per a la transacció (Tx). Doncs bé, només si dues de les  parts signen la transacció, els diners es podrian moure. Cap de les  parts per separat pot quedar-se amb els calés, el que força a intentar trobar la millor solució, en cas d`incidència o desacord.<br />Un símil simplificat al món tradicional són les cartes de pagament. Un instrument financer gestionat per qualsevol banc, on el banc és, qui actua com a àrbitre entre les dues parts. Un procés on només es podia dependre d`empreses “reputades“ com els bancs, els qui es lucren justament d`això, ja que ells són els que fins a l`arribada de bitcoin tenien, gairebé esclusivamente el control total dels teus diners, cobrant a més comissions desmesurades per això o per qualsevol transacció amb els teus calés. <br /> Tot d`una no necessites el banc. Bitcoin et permet fer això, sense figures burocràtiques de gran “reputació“ que emmagatzemin o custodiïn els teus calés, i els usuaris ara són capaços de autogestionar-se. <br /> De fet moltes plataformes que venen productes o serveis entre particulars, pràctica cada dia més habitual, ja suporten Bitcoin com a mitjà de pagament. Fins i tot als més innovadors com són els descentralitzats. <br /> Cas pràctic, on s`eliminen friccions de processos tradicionals, estalviant temps i burocràcia, eliminant custòdies i intermediaris i, per tant minimitzant costos.<br /><br />' }],
          [{ vl: '<br /><strong>1. Arbitragem “sem confiança”.</strong><br /><br /> Um processo de arbitragem permite que um terceiro atue como juiz para determinar o resultado de uma transação entre duas partes. Por exemplo, se uma parte vende bitcoins, eles podem processá-los por meio de um terceiro, quando a outra parte paga pelos bitcoins, o árbitro os entrega a eles. <br />Isso não é nenhum mistério e pode ser feito sem múltiplas assinaturas. Mas, graças à multi-assinatura, a parte de “sem confiança”. Vamos ver o porquê. <br /> No cenário dado, criamos um contrato de bitcoin com várias assinaturas  para a transação (Tx). Bem, somente se duas das  partes assinarem a transação, o dinheiro poderá se mover. Nenhuma das  partes distintas consegue ficar com o dinheiro, o que obriga a tentar encontrar a melhor solução, em caso de incidente ou desacordo. <br /> Um símile simplificado do mundo tradicional são as cartas de pagamento. Um instrumento financeiro administrado por qualquer banco, onde o banco está, que atua como um árbitro entre ambas as partes. Um processo onde só se podia contar com empresas “conceituadas“ como os bancos, que lucram precisamente com isso, pois são eles que até à chegada do bitcoin tinham, quase exclusivamente, o controlo total do seu dinheiro, cobrando também comissões excessivas por ele ou por qualquer transação com seu dinheiro. <br /> De repente, você não precisa mais do banco. O Bitcoin permite que você faça isso, sem figuras burocráticas de alta “reputação“ para armazenar ou guardar seu dinheiro, e os usuários agora são capazes de administrar a si próprios. <br /> Na verdade, muitas plataformas que vendem produtos ou serviços entre indivíduos, uma prática que é cada vez mais comum a cada dia, eles já oferecem suporte ao Bitcoin como meio de pagamento. Mesmo nos mais inovadores como os descentralizados. <br /> Caso prático, onde se eliminam atritos dos processos tradicionais, economizando tempo e burocracia, eliminando custódios e intermediários e, portanto, minimizando custos.<br /><br />' }]                                               
            ],
       tx4tt: [
          [{ vl: '<br /><strong>1. Arbitraje “sin confianza”.</strong><br /><br /> Un proceso de arbitraje, permite que un tercero actúe de juez, para determinar el resultado de una transacción entre dos partes. Por ejemplo si una parte vende tethers, puede tramitarlos a través de un tercero, cuando la otra parte pague los tethers, el árbitro se los entrega. <br />Esto no tiene ningún misterio y podría hacerse sin multifirma. Pero gracias a la multifirma, se añade la parte de “sin confianza”. Veamos por qué.<br />En el escenario planteado creamos un contrato blockchain multifirma  para la transacción(Tx). Pues bien, sólo si dos de las  partes firman la transacción, el dinero podría moverse. Ninguna de las  partes por separado puede quedarse con el dinero, lo que fuerza a intentar encontrar la mejor solución, en caso de incidencia o desacuerdo.<br />Un símil simplificado del mundo tradicional son las cartas de pago. Un instrumento financiero gestionado por cualquier banco, donde el banco es, quien actúa como árbitro entre ambas partes. Un proceso donde sólo se podía depender de empresas “reputadas“ como los bancos, quienes se lucran justamente de esto, pues ellos son quienes hasta la llegada de blockchain tenían, casi esclusivamente el control total de tu dinero, cobrando además comisiones desmesuradas por ello o por cualquier transacción con tu dinero.<br />De repente no necesitas al banco. Blockchain te permite hacer esto, sin figuras burocráticas de gran “reputación“ que almacenen o custodien tu dinero, y los usuarios ahora son capaces de autogestionarse.<br />De hecho muchas plataformas que venden productos o servicios entre particulares, práctica cada día mas habitual, ya soportan Cryptomonedas como medio de pago. Incluso en los más innovadores como son los descentralizados.<br />Caso práctico, donde se eliminan fricciones de procesos tradicionales, ahorrando tiempo y burocracia, eliminando custodías e intermediarios y, por consiguiente minimizando costes.<br /><br />' }],
          [{ vl: '<br /><strong>1. Arbitration “without trust”.</strong><br /><br /> An arbitration process allows a third party to act as a judge to determine the outcome of a transaction between two parties. For example, if one party sells tethers, they can process them through a third party, when the other party pays for the tethers, the arbitrator delivers them to second. <br />This is no mystery and could be done without multi-signature. But thanks to the multi-signature, the part of “without trust” is added. Let`s see why. <br /> In the given scenario we create a multi-signature blockchain contract for the transaction (Tx).Well, only if two of the  parties sign the transaction, the money could move. None of the  separate parties can keep the money, which forces to try to find the best solution, in case of incidence or disagreement. <br /> A simplified simile of the traditional world is the payment letters. A financial instrument managed by any bank, where the bank is, who acts as an arbitrator between both parties. A process where you could only depend on “reputable“ companies such as banks, who profit precisely from this, since they are the ones who until the arrival of blockchain had, almost exclusively, total control of your money, also charging excessive commissions for it or for any transaction with your money. <br /> Suddenly you don`t need the bank. Blockchain allows you to do this, without highly “reputable“ bureaucratic figures to store or guard your money, and users are now able to manage themselves. <br /> In fact, many platforms that sell products or services between individuals, a practice that is more and more common every day, they already support Cryptos as a means of payment. Even in the most innovative such as decentralized ones. <br /> Practical case, where frictions are eliminated from traditional processes, saving time and bureaucracy, eliminating custodians and intermediaries and, therefore, minimizing costs.<br /><br />' }],
          [{ vl: '<br /><strong>1. Arbitratge “sense confiança”.</strong><br /><br /> Un procés d`arbitratge, permet que un tercer actuï de jutge, per determinar el resultat d`una transacció entre dues parts. Per exemple si una part ven tethers, pot tramitar a través d`un tercer, i quan l altra part pagui els tethers, l`àrbitre se`ls lliura. <br />Això no té cap misteri i podria fer-se sense multisignatura. Però gràcies a la multisignatura, s`afegeix la part de sense confiança. Vegem per què. <br /> A l`escenari plantejat podem crear un contracte tether multisignatura  per a la transacció (Tx). Doncs bé, només si dues de les  parts signen la transacció, els diners es podrian moure. Cap de les parts per separat pot quedar-se amb els calés, el que força a intentar trobar la millor solució, en cas d`incidència o desacord.<br />Un símil simplificat al món tradicional són les cartes de pagament. Un instrument financer gestionat per qualsevol banc, on el banc és, qui actua com a àrbitre entre les dues parts. Un procés on només es podia dependre d`empreses “reputades“ com els bancs, els qui es lucren justament d`això, ja que ells són els que fins a l`arribada de blockchain tenien, gairebé esclusivamente el control total dels teus diners, cobrant a més comissions desmesurades per això o per qualsevol transacció amb els teus calés. <br /> Tot d`una no necessites el banc. Blockchain et permet fer això, sense figures burocràtiques de gran “reputació“ que emmagatzemin o custodiïn els teus calés, i els usuaris ara són capaços de autogestionar-se. <br /> De fet moltes plataformes que venen productes o serveis entre particulars, pràctica cada dia més habitual, ja suporten Cryptos com a mitjà de pagament. Fins i tot als més innovadors com són els descentralitzats. <br /> Cas pràctic, on s`eliminen friccions de processos tradicionals, estalviant temps i burocràcia, eliminant custòdies i intermediaris i, per tant minimitzant costos.<br /><br />' }],
          [{ vl: '<br /><strong>1. Arbitragem “sem confiança”.</strong><br /><br /> Um processo de arbitragem permite que um terceiro atue como juiz para determinar o resultado de uma transação entre duas partes. Por exemplo, se uma parte vende tethers, eles podem processá-los por meio de um terceiro, quando a outra parte paga pelos tethers, o árbitro os entrega a eles. <br />Isso não é nenhum mistério e pode ser feito sem múltiplas assinaturas. Mas, graças à multi-assinatura, a parte de “sem confiança”. Vamos ver o porquê. <br /> No cenário dado, criamos um contrato de tethers com várias assinaturas  para a transação (Tx). Bem, somente se duas das  partes assinarem a transação, o dinheiro poderá se mover. Nenhuma das  partes distintas consegue ficar com o dinheiro, o que obriga a tentar encontrar a melhor solução, em caso de incidente ou desacordo. <br /> Um símile simplificado do mundo tradicional são as cartas de pagamento. Um instrumento financeiro administrado por qualquer banco, onde o banco está, que atua como um árbitro entre ambas as partes. Um processo onde só se podia contar com empresas “conceituadas“ como os bancos, que lucram precisamente com isso, pois são eles que até à chegada do blockchain tinham, quase exclusivamente, o controlo total do seu dinheiro, cobrando também comissões excessivas por ele ou por qualquer transação com seu dinheiro. <br /> De repente, você não precisa mais do banco. O Blockchain permite que você faça isso, sem figuras burocráticas de alta “reputação“ para armazenar ou guardar seu dinheiro, e os usuários agora são capazes de administrar a si próprios. <br /> Na verdade, muitas plataformas que vendem produtos ou serviços entre indivíduos, uma prática que é cada vez mais comum a cada dia, eles já oferecem suporte ao Crypto como meio de pagamento. Mesmo nos mais inovadores como os descentralizados. <br /> Caso prático, onde se eliminam atritos dos processos tradicionais, economizando tempo e burocracia, eliminando custódios e intermediários e, portanto, minimizando custos.<br /><br />' }]                                               
            ],            
       tx5: [
          [{ vl: 'Arbitraje "garantizado sin confianza"' }],
          [{ vl: 'Arbitration "guaranteed without trust"' }],
          [{ vl: 'Arbitratge "garantit sense confiança"' }],
          [{ vl: 'Arbitragem "garantido sem confiança"' }]                                               
            ],
       tx6: [
          [{ vl: ' simple, para intercambios <b>"inmediatos RT"</b> de compra-venta de Bitcoins, en 🔗 cadena o en ⚡ Red Lightning, entre pares punto a punto. Via contratos temporales bitcoin multifirma, multigarantía y multicadena, bajo Tx de Respaldo.' }],
          [{ vl: ' simple, for <b> "immediate RT" </b> exchanges of buying and selling Bitcoins, in 🔗 chain or in ⚡ Lightning Network, between peer-to-peer pairs. Via temporary multi-signature, multi-guarantee and multi-chain bitcoin contracts, under Backup Tx.' }],
          [{ vl: ' simple, per a intercanvis <b>"immediats RT"</b> de compravenda de Bitcoins, en 🔗 cadena o en ⚡ Xarxa Lightning, entre parells punt a punt. Via contractes temporals bitcoin multisignatura, multigarantia i multicadena, sota Tx de Respatller.' }],
          [{ vl: ' simples, para trocas <b> "imediatas RT" </b> de compra e venda de Bitcoins, em 🔗 cadeia ou em ⚡ Rede Lightning, entre pares ponto a ponto. Por meio de contratos bitcoin temporários com multiassinatura, multigarantia e multicadeia, sob o Backup Tx.' }]                                               
            ],
       tx6tt: [
          [{ vl: 'simple, intercambios en compra-venta de USDT en cadena, entre pares punto a punto. Bajo contratos blockchain multifirma ,' }],
          [{ vl: 'simple, exchanges in buying and selling USDT on chain, between peers point to point. Under  multi-signature blockchain contracts,' }],
          [{ vl: 'simple, intercanvis en compravenda de USDT en cadena, entre parells punt a punt. sota contractes USDT multisignatura  ,' }],
          [{ vl: 'simples, as trocas na compra e venda de USDT na rede, entre pares, ponto a ponto. Baixo  contratos de tethers com várias assinaturas,' }]                                               
            ],            
       tx7: [
          [{ vl: '<br /><strong>Sin custodias de carteras virtuales.</strong><br /><br /> NO custodiamos en ningún momento (no poseemos el dinero) las claves públicas de nadie, menos aún las claves privadas. La ventaja mas admirable de bitcoin es que uno mismo maneje, guarde y custodie su propio dinero sin necesidad de terceros. Simplemente nos hemos concentrado en brindar un sistema de intercambio privado entre pares a través de un arbitraje económico imparcial SIN CONFIANZA, EVITANDO LOS RIESGOS QUE SUPONE CEDER LA CUSTODIA DEL DINERO A TERCEROS.<br /> Lamentablemente la mayoria de sitios de intercambio no aprovechan esta ventaja de bitcoin. Dicen, estimado usuario en tal clave pública están tus bitcoins(ilusión virtual), en lugar de decir en tal clave pública NOSOTROS TENEMOS tus bitcoins, tranquilo estan mas seguros en nuestras manos, sino nos hakean o no nos los gastamos primero y desaparecemos(casos hay, los custidiadores por apego tienden a confundir custodia con propiedad), siendo ellos quienes tienen tu dinero(tus claves privadas) en verdad. Si deseas disponer de tu dinero, tus bitcoins, fuera del sitio atente a mis condiciones y paga comisiones(caso parecido a los bancos). Tienes primero que enviarlo a la dirección de tu propiedad de la que si tengas clave privada, pagando las consiguientes comisiones y gastos de mineria de la red, lo cual prueba que la clave pública donde tienen tu dinero evidentemente no era tuya. La pregunta es, si en tal clave pública estan mis bitcoins porqué no tengo mi clave privada. Esta es la realidad aunque no este de más recordarlo ¿ TU CLAVE PÚBLICA ? ¿ TUYA EN VERDAD ? ¿ SIN TENER TU CLAVE PRIVADA ? ¡ SIMPLEMENTE NO ES CIERTO !<br /> Bitcoin trajo consigo la soberania sobre el dinero de forma impecable y segura sin necesidad de terceros custodios, pero algunos se resisten e incluso dentro de la comunidad siguen empeñados en lucrarse custodiando lo de otros. <br /><br />' }],
          [{ vl: '<br /><strong>Without custody of virtual wallets.</strong><br /><br /> We DO NOT keep at any time (we do not own the money) anyone`s public keys, least of all the private keys. The most admirable advantage of bitcoin is that you manage, save and safeguard your own money without the need for third parties. We have simply focused on providing a private exchange system between peers through impartial economic arbitration WITHOUT TRUST, AVOIDING THE RISKS OF GIVING CUSTODY OF MONEY TO THIRD PARTIES.<br /> Unfortunately most exchange sites do not take profit of this bitcoin advantage. They say, dear user in such a public key are your bitcoins (virtual illusion), instead of saying in such a public key WE HAVE your bitcoins, quiet they are safer in our hands, if they do not hack us or we do not spend them first and we disappear (cases there are, the custodians by attachment tend to confuse custody with property), being they who have your money (your private keys) in truth. If you want to have your money, your bitcoins, outside the site, pay attention to my conditions and pay commissions (similar case to banks). You first have to send it to the address of your property from which you have a private key, paying the consequent commissions and network mining expenses, which proves that the public key where they have your money was obviously not yours. The question is, if my bitcoins are in such a public key, why don`t I have my private key. This is the reality although it is worth remembering YOUR PUBLIC KEY? REALLY YOURS? WITHOUT HAVING YOUR PRIVATE KEY? IT IS JUST NOT TRUE! <br /> Bitcoin brought sovereignty over money flawlessly and securely without the need for third-party custodians, but some resist and even within the community they are still determined to profit by guarding what of others. <br /><br />' }],
          [{ vl: '<br /><strong>Sense custòdies de carteres virtuals.</strong><br /><br /> NO custodiem en cap moment (no posseïm els calés) les claus públiques de ningú, menys encara les claus privades. L`avantatge més admirable de bitcoin és que un mateix manegi, guardi i custodiï els seus propis diners sense necessitat de tercers. Simplement ens hem concentrat a brindar un sistema d`intercanvi privat entre parells a través d`un arbitratge econòmic imparcial SENSE CONFIANÇA, EVITANT ELS RISCOS QUE SUPOSA CEDIR LA CUSTÒDIA DELS DINERS A TERCERS.<br /> Lamentablement la majoria de plataformes d`intercanvi no aprofiten aquest avantatge de bitcoin. Diuen, estimat usuari en tal clau pública són els teus bitcoins (il·lusió virtual), en lloc de dir en aquesta clau pública NOSALTRES TENIM els teus bitcoins, tranquil estan mes segurs a les nostres mans, si no ens haquegen o no ens els gastem primer i desapareixem (casos hi ha, els custodia-dors per afecció tendeixen a confondre custòdia amb propietat), sent ells els qui tenen els teus calés (les teves claus privades) en veritat. Si vols disposar dels teus diners, els teus bitcoins, fora de la plataforma has de atenir-te a les meves condicions i pagar comissions (cas semblant als bancs). Ten`s primer que enviar-los a alguna adreça de la teva propietat de la qual sí tinguis la clau privada, pagant les consegüents comissions i despeses de mineria de la xarxa, la qual cosa prova que la clau pública on tenen els teus diners evidentment no era teva. La pregunta és, si en tal clau pública estan els meus bitcoins perquè no tinc la meva clau privada. Aquesta és la realitat encara que no esta gens malament de recordar-ho. LA TEVA CLAU PÚBLICA? TEVA EN VERITAT? SENSE TENIR LA TEVA CLAU PRIVADA? ¡SIMPLEMENT NO ÉS CERT!<br /> Bitcoin va comportar la sobirania sobre els calés de manera impecable i segura sense necessitat de tercers custodis, però alguns es resisteixen i fins i tot dins de la comunitat segueixen entestats a lucrar-se custodiant el dels altres. <br /><br />' }],
          [{ vl: '<br /><strong>Nenhum guardião de carteiras virtuais.</strong><br /><br /> Nós NÃO guardamos em nenhum momento (não possuímos o dinheiro) as chaves públicas de ninguém, muito menos as chaves privadas. A vantagem mais admirável do bitcoin é que você gerencia, economiza e protege seu próprio dinheiro sem a necessidade de terceiros. Simplesmente nos concentramos em fornecer um sistema privado de troca ponto a ponto por meio de uma arbitragem econômica imparcial SEM CONFIANÇA, EVITANDO OS RISCOS DE CUSTÓDIA DE DINHEIRO A TERCEIROS. <br /> Infelizmente, a maioria dos sites de troca não tira proveito disso vantagem do bitcoin. Eles dizem, caro usuário em tal chave pública são seus bitcoins (ilusão virtual), ao invés de dizer em tal chave pública TEMOS seus bitcoins, calma eles estão mais seguros em nossas mãos, se eles não nos hackearem ou não os gastarmos primeiro e nós desapareceremos (casos existem, os guardiões por penhora tendem a confundir custódia com propriedade), sendo eles que têm o seu dinheiro (suas chaves privadas) na verdade. Se você quiser ter seu dinheiro, seus bitcoins, fora do site, preste atenção às minhas condições e pague comissões (caso semelhante aos bancos). Primeiro tem de enviá-lo para o endereço da sua propriedade de onde possui a chave privada, pagando as consequentes comissões e despesas de mineração da rede, o que prova que a chave pública onde se encontra o seu dinheiro obviamente não era sua. A questão é: se meus bitcoins estão em uma chave pública, por que não tenho minha chave privada? Essa é a realidade, mas vale a pena lembrar: SUA CHAVE PÚBLICA? REALMENTE SEU? SEM SUA CHAVE PRIVADA? SÓ NÃO É VERDADE! <br /> O Bitcoin trouxe soberania sobre o dinheiro de forma perfeita e segura, sem a necessidade de custódia de terceiros, mas alguns resistem e até mesmo dentro da comunidade eles ainda estão determinados a lucrar protegendo o que dos outros. <br /><br />' }]                                               
            ],
       tx7tt: [
          [{ vl: '<br /><strong>Sin custodias de carteras virtuales.</strong><br /><br /> NO custodiamos en ningún momento (no poseemos el dinero) las claves públicas de nadie, menos aún las claves privadas. La ventaja mas admirable de blockchain es que uno mismo maneje, guarde y custodie su propio dinero sin necesidad de terceros. Simplemente nos hemos concentrado en brindar un sistema de intercambio privado entre pares a través de un arbitraje económico imparcial SIN CONFIANZA, EVITANDO LOS RIESGOS QUE SUPONE CEDER LA CUSTODIA DEL DINERO A TERCEROS.<br /> Lamentablemente la mayoria de sitios de intercambio no aprovechan esta ventaja de blockchain. Dicen, estimado usuario en tal clave pública están tus criptomonedas(ilusión virtual), en lugar de decir en tal clave pública NOSOTROS TENEMOS tus criptomonedas, tranquilo estan mas seguros en nuestras manos, sino nos hakean o no nos los gastamos primero y desaparecemos(casos hay, los custidiadores por apego tienden a confundir custodia con propiedad), siendo ellos quienes tienen tu dinero(tus claves privadas) en verdad. Si deseas disponer de tu dinero, tus criptomonedas, fuera del sitio atente a mis condiciones y paga comisiones(caso parecido a los bancos). Tienes primero que enviarlo a la dirección de tu propiedad de la que si tengas clave privada, pagando las consiguientes comisiones y gastos de mineria de la red, lo cual prueba que la clave pública donde tienen tu dinero evidentemente no era tuya. La pregunta es, si en tal clave pública estan mis criptomonedas porqué no tengo mi clave privada. Esta es la realidad aunque no este de más recordarlo ¿ TU CLAVE PÚBLICA ? ¿ TUYA EN VERDAD ? ¿ SIN TENER TU CLAVE PRIVADA ? ¡ SIMPLEMENTE NO ES CIERTO !<br /> Blockchain trajo consigo la soberania sobre el dinero de forma impecable y segura sin necesidad de terceros custodios, pero algunos se resisten e incluso dentro de la comunidad siguen empeñados en lucrarse custodiando lo de otros. <br /><br />' }],
          [{ vl: '<br /><strong>Without custody of virtual wallets.</strong><br /><br /> We DO NOT keep at any time (we do not own the money) anyone`s public keys, least of all the private keys. The most admirable advantage of blockchain is that you manage, save and safeguard your own money without the need for third parties. We have simply focused on providing a private exchange system between peers through impartial economic arbitration WITHOUT TRUST, AVOIDING THE RISKS OF GIVING CUSTODY OF MONEY TO THIRD PARTIES.<br /> Unfortunately most exchange sites do not take profit of this blockchain advantage. They say, dear user in such a public key are your cryptos (virtual illusion), instead of saying in such a public key WE HAVE your money, quiet they are safer in our hands, if they do not hack us or we do not spend them first and we disappear (cases there are, the custodians by attachment tend to confuse custody with property), being they who have your money (your private keys) in truth. If you want to have your money, your cryptos, outside the site, pay attention to my conditions and pay commissions (similar case to banks). You first have to send it to the address of your property from which you have a private key, paying the consequent commissions and network mining expenses, which proves that the public key where they have your money was obviously not yours. The question is, if my cryptos are in such a public key, why don`t I have my private key. This is the reality although it is worth remembering YOUR PUBLIC KEY? REALLY YOURS? WITHOUT HAVING YOUR PRIVATE KEY? IT IS JUST NOT TRUE! <br /> Blockchain brought sovereignty over money flawlessly and securely without the need for third-party custodians, but some resist and even within the community they are still determined to profit by guarding what of others. <br /><br />' }],
          [{ vl: '<br /><strong>Sense custòdies de carteres virtuals.</strong><br /><br /> NO custodiem en cap moment (no posseïm els calés) les claus públiques de ningú, menys encara les claus privades. L`avantatge més admirable de blockchain és que un mateix manegi, guardi i custodiï els seus propis diners sense necessitat de tercers. Simplement ens hem concentrat a brindar un sistema d`intercanvi privat entre parells a través d`un arbitratge econòmic imparcial SENSE CONFIANÇA, EVITANT ELS RISCOS QUE SUPOSA CEDIR LA CUSTÒDIA DELS DINERS A TERCERS.<br /> Lamentablement la majoria de plataformes d`intercanvi no aprofiten aquest avantatge de blockchain. Diuen, estimat usuari en tal clau pública són els teus tethers (il·lusió virtual), en lloc de dir en aquesta clau pública NOSALTRES TENIM els teus tethers, tranquil estan mes segurs a les nostres mans, si no ens haquegen o no ens els gastem primer i desapareixem (casos hi ha, els custodia-dors per afecció tendeixen a confondre custòdia amb propietat), sent ells els qui tenen els teus calés (les teves claus privades) en veritat. Si vols disposar dels teus diners, els teus tethers, fora de la plataforma has de atenir-te a les meves condicions i pagar comissions (cas semblant als bancs). Ten`s primer que enviar-los a alguna adreça de la teva propietat de la qual sí tinguis la clau privada, pagant les consegüents comissions i despeses de mineria de la xarxa, la qual cosa prova que la clau pública on tenen els teus diners evidentment no era teva. La pregunta és, si en tal clau pública estan els meus tethers perquè no tinc la meva clau privada. Aquesta és la realitat encara que no esta gens malament de recordar-ho. LA TEVA CLAU PÚBLICA? TEVA EN VERITAT? SENSE TENIR LA TEVA CLAU PRIVADA? ¡SIMPLEMENT NO ÉS CERT!<br /> Blockchain va comportar la sobirania sobre els calés de manera impecable i segura sense necessitat de tercers custodis, però alguns es resisteixen i fins i tot dins de la comunitat segueixen entestats a lucrar-se custodiant el dels altres. <br /><br />' }],
          [{ vl: '<br /><strong>Nenhum guardião de carteiras virtuais.</strong><br /><br /> Nós NÃO guardamos em nenhum momento (não possuímos o dinheiro) as chaves públicas de ninguém, muito menos as chaves privadas. A vantagem mais admirável do blockchain é que você gerencia, economiza e protege seu próprio dinheiro sem a necessidade de terceiros. Simplesmente nos concentramos em fornecer um sistema privado de troca ponto a ponto por meio de uma arbitragem econômica imparcial SEM CONFIANÇA, EVITANDO OS RISCOS DE CUSTÓDIA DE DINHEIRO A TERCEIROS. <br /> Infelizmente, a maioria dos sites de troca não tira proveito disso vantagem do blockchain. Eles dizem, caro usuário em tal chave pública são seus tethers (ilusão virtual), ao invés de dizer em tal chave pública TEMOS seus tethers, calma eles estão mais seguros em nossas mãos, se eles não nos hackearem ou não os gastarmos primeiro e nós desapareceremos (casos existem, os guardiões por penhora tendem a confundir custódia com propriedade), sendo eles que têm o seu dinheiro (suas chaves privadas) na verdade. Se você quiser ter seu dinheiro, seus tethers, fora do site, preste atenção às minhas condições e pague comissões (caso semelhante aos bancos). Primeiro tem de enviá-lo para o endereço da sua propriedade de onde possui a chave privada, pagando as consequentes comissões e despesas de mineração da rede, o que prova que a chave pública onde se encontra o seu dinheiro obviamente não era sua. A questão é: se meus tethers estão em uma chave pública, por que não tenho minha chave privada? Essa é a realidade, mas vale a pena lembrar: SUA CHAVE PÚBLICA? REALMENTE SEU? SEM SUA CHAVE PRIVADA? SÓ NÃO É VERDADE! <br /> O Blockchain  trouxe soberania sobre o dinheiro de forma perfeita e segura, sem a necessidade de custódia de terceiros, mas alguns resistem e até mesmo dentro da comunidade eles ainda estão determinados a lucrar protegendo o que dos outros. <br /><br />' }]                                               
            ],

       tx8: [
          [{ vl: 'SIN custodias de carteras virtuales' },{ vl: ', directo en la cadena de bloques de bitcoin y aprovechando su seguridad, evitando cualquier riesgo de fraude. Usuario-a-Usuario.' }],
          [{ vl: 'WITHOUT custody of virtual wallets' },{ vl: ', directly on the bitcoin blockchain and taking advantage of its security, avoiding any risk of fraud. User-to-User.' }],
          [{ vl: 'SENSE custòdies de carteres virtuals' },{ vl: ', directe a la cadena de blocs de bitcoin i aprofitant la seva seguretat, evitant qualsevol risc de frau. Usuari-a-Usuari.' }],
          [{ vl: 'NENHUM custodiante de carteiras virtuais' },{ vl: ', diretamente no blockchain bitcoin e aproveitando sua segurança, evitando qualquer risco de fraude. Usuário para usuário.' }]                                               
            ],
       tx9: [
          [{ vl: 'Preservación de la <strong>privacidad</strong>, usando claves públicas de bitcoin, si se prefiere sólo carteras de papel. Sin innecesarias custodias de terceros expuestas a robos y' },{ vl: 'Preservación de la <strong>privacidad</strong>, usando claves públicas de USDT, si se prefiere sólo carteras de papel. Sin innecesarias custodias de terceros expuestas a robos y' }],
          [{ vl: 'Preservation of <strong>privacy</strong>, using bitcoin public keys, if you prefer only paper wallets. Without unnecessary custody of third parties exposed to theft and' },{ vl: 'Preservation of <strong>privacy</strong>, using USDT public keys, if you prefer only paper wallets. Without unnecessary custody of third parties exposed to theft and' }],
          [{ vl: 'Preservació de la <strong>privacitat</strong>, usant claus públiques de bitcoin, si es prefereix només carteres de paper. Sense innecessàries custòdies de tercers exposades a robatoris i' },{ vl: 'Preservació de la <strong>privacitat</strong>, usant claus públiques de USDT, si es prefereix només carteres de paper. Sense innecessàries custòdies de tercers exposades a robatoris i' }],
          [{ vl: 'Preservação de <strong>privacidade</strong>, usando chaves públicas bitcoin, se você preferir apenas carteiras de papel. Sem custódia desnecessária de terceiros expostos a furto e ' },{ vl: 'Preservação de <strong>privacidade</strong>, usando chaves públicas USDT, se você preferir apenas carteiras de papel. Sem custódia desnecessária de terceiros expostos a furto e ' }]                                               
            ],
       tx9_1: [
          [{ vl: 'haqueos' }],
          [{ vl: 'hackers' }],
          [{ vl: 'hackejos' }],
          [{ vl: 'haqueos' }]                                               
            ],
       tx10: [
          [{ vl: 'Principales medios y monedas de pago y cobro, nacionales y globales, virtuales, cripto o institucionales para comprar y vender ' }],
          [{ vl: 'Main means and coins of payment and collection, national and global, virtual, crypto or institutional to buy and sell ' }],
          [{ vl: 'Principals mitjans i monedes de pagament i cobrament, nacionals i globals, virtuals, cripto o institucionals per comprar i vendre ' }],
          [{ vl: 'Principais meios e moedas de pagamento e cobrança, nacional e global, virtual, crypto ou institucional para compra e venda de ' }]                                               
            ],
        tx11: [
          [{ vl: 'Mediante tres' }],
          [{ vl: 'Through three' }],
          [{ vl: 'Mitjançant tres' }],
          [{ vl: 'Até três' }]                                               
            ],
        tx12: [
          [{ vl: '<br /><font color=yellow><strong>Utilidades: ¡ Descargar, y mejor ejecutar desconectado de internet !</strong></font><br /><br /> Sin necesidad de usar, en principio, otro software de monedero crypto. Aunque sí pueden ser recomendados, pero frios, para uso muy frecuente. Gracias a la comunidad de desarrolladores de software libre, disponemos de algunas utilidades para ejecutar operaciones básicas de blockchain y, que podemos descargar de los repositorios y ejecutar desconectados de internet. Garantizando así la custodia, de nuestras claves privadas(nuestro dinero), únicamente en nuestras manos y bajo nuestra exclusiva responsabilidad en carteras de papel.<br /> Cuando siga los enlaces “ aquí ”, que aparecen a continuación, las utilidades que continenen, se ejecutarán en linea. Pero dentro, donde encontrará enlaces, podrá acceder a los repositorios (con los fuentes en formato zip) y, puede descargar las utilidades a su equipo. Descargue y ejecute tranquilo desde su navegador, pero desconectado de internet, para su absolata seguridad y privacidad. Incluso, y si puede extremando la seguridad, en una máquina que siempre este desconectada de la red, donde puede resguardar sus claves privadas de cualquier acceso no deseado. Ahí estaría su propio banco.<br /><br />( p.ej: direcciones y claves <a href=https://www.bitaddress.org target=_blank><font color=cyan>aquí</font></a> , firmar mensajes <a href=https://reinproject.org/bitcoin-signature-tool/#sign target=_blank><font color=cyan>aquí</font></a> y firmar transacciones-Tx<a href=https://coinb.in/#sign target=_blank><font color=cyan> aquí</font> </a>)<br /><br />' }],
          [{ vl: '<br /><font color=yellow><strong>Utilities: Download, and better run offline !</strong></font><br /><br /> No need to use, in principle, other crypto wallet software. Although they can be recommended, but cold, for very frequent use. Thanks to the community of free software developers, we have some utilities to execute basic blockchain operations and, that we can download from the repositories and execute disconnected from the internet. Thus guaranteeing the custody of our private keys (our money), only in our hands and under our exclusive responsibility in paper wallets.<br /> When you follow the links here below, the utilities that they contain will be executed online. But inside, where you will find links, you can access the repositories (with the sources in zip format) and you can download the utilities to your computer. Download and run quietly from your browser, but disconnected from the internet, for your absolute security and privacy. Even, and if you can by extreme security, on a machine that is always disconnected from the network, where you can protect your private keys from any unwanted access. There would be your own bank.<br /><br />(e.g. addresses and keys <a href=https://www.bitaddress.org target=_blank><font color=cyan>here</font></a> , sign messages <a href=https://reinproject.org/bitcoin-signature-tool/#sign target=_blank><font color=cyan>here</font></a> and sign Tx-transactions<a href=https://coinb.in/#sign target=_blank><font color=cyan> here</font> </a>)<br /><br />' }],
          [{ vl: '<br /><font color=yellow><strong>Utilitats: Descarregar, i millor executar desconnectat d`internet !</strong></font><br /><br /> Sense necessitat d`usar, en principi, cap altre software moneder crypto. Encara que sí es recomanen, pero freds, per l`ús molt freqüent. Gràcies a la comunitat de desenvolupadors de programari lliure, disposem d` algunes utilitats per a executar operacions bàsiques de blockchain i, que podem descarregar dels repositoris i executar desconnectats d`internet. Garantint així la custòdia, de les nostres claus privades (els nostres diners), únicament en les nostres mans i sota la nostra exclusiva responsabilitat en carteres de paper. <br /> Quan segueixi els enllaços `aquí`, que apareixen a continuació, les utilitats que continenen, s`executan en línia. Però dins, on trobareu enllaços, podeu accedir als repositoris (amb els fonts en format zip) i, pot descarregar les utilitats al seu equip. Descarregueu i executeu tranquils del vostre navegador, però desconnectats d`internet, per la seva absolata seguretat i privacitat. Fins i tot, i si pot extremant la seguretat, en una màquina que sempre estigui desconnectada de la xarxa, on pot protegir les seves claus privades de qualsevol accés no desitjat. Allà tindria el seu propi banc.<br /><br />( p.ex: Adreces i claus <a href=https://www.bitaddress.org target=_blank><font color=cyan>aquí</font></a> , signar missatges <a href=https://reinproject.org/bitcoin-signature-tool/#sign target=_blank><font color=cyan>aquí</font></a> i signar transaccions-Tx<a href=https://coinb.in/#sign target=_blank><font color=cyan> aquí</font> </a>)<br /><br />' }],
          [{ vl: '<br /><font color=yellow><strong>ferramentas: Baixe e execute melhor offline! </strong> </font> <br /> <br /> Sem usar, em princípio, outro software de carteira crypto. Embora sejam recomendados, mas frio, para uso muito  frequente. Graças à comunidade de desenvolvedores de software livre, contamos com alguns ferramentas para executar operações básicas de blockchain e, que podemos baixar dos repositórios e executar desconectados da internet. Garantindo assim a guarda das nossas chaves privadas (o nosso dinheiro), apenas nas nossas mãos e sob a nossa responsabilidade exclusiva nas carteiras de papel. <br /> Ao seguir os links aqui, que aparecem a seguir, os utilitários que contêm, eles serão executados online. Mas dentro, onde você encontrará links, você pode acessar os repositórios (com as fontes em formato zip) e pode baixar os ferramentas para o seu computador. Baixe e execute silenciosamente do seu navegador, mas desconectado da Internet, para sua total segurança e privacidade. Mesmo, e se puder por segurança extrema, em uma máquina que está sempre desconectada da rede, onde você pode proteger suas chaves privadas de qualquer acesso indesejado. Haveria seu próprio banco. <br /> <br /> (por exemplo: endereços e senhas <a href=https://www.bitaddress.org target=_blank><font color=cyan>aquí</font></a> , assinar mensagens <a href=https://reinproject.org/bitcoin-signature-tool/#sign target=_blank><font color=cyan>aquí</font></a> e assinar transações Tx<a href=https://coinb.in/#sign target=_blank><font color=cyan> aquí</font> </a>)<br /><br />' }]                                               
            ],
        tx13: [
          [{ vl: 'utilidades' }],
          [{ vl: 'utilities' }],
          [{ vl: 'utilitats' }],
          [{ vl: 'ferramentas' }]                                               
            ],
        tx14: [
          [{ vl: 'libres de código abierto, se completa cualquier compra-venta. Para uso frecuente, más cómodo monederos frios tipo' }],
          [{ vl: 'free open source, any purchase and sale is completed. For frequent use, more comfortable cold wallets type' }],
          [{ vl: 'lliures de codi obert, es completa qualsevol compravenda. Per a ús freqüent, encara més còmode usar moneders freds tipus' }],
          [{ vl: 'código aberto gratuito, qualquer compra e venda é concluída. Para uso frequente, tipo de carteira fria mais confortável' }]                                               
            ],
        tx15: [
          [{ vl: ', que incluyen utilidades similares y variedad de opciones más sofisticadas.' }],
          [{ vl: ', which include similar utilities and a variety of more sophisticated options.' }],
          [{ vl: ', que inclouen utilitats similars i varietat d`opcions més sofisticades.' }],
          [{ vl: ', que incluem utilitários semelhantes e uma variedade de opções mais sofisticadas.' }]                                               
            ],
        tx16: [
          [{ vl: 'SIN registros de datos personales que exponen la privacidad. Pudiendo utilizar diferentes direcciónes Bitcoin de un solo uso para cada transacción.' }],
          [{ vl: 'NO personal data records exposing privacy. Being able to use different single-use Bitcoin addresses for each transaction.' }],
          [{ vl: 'SENSE registres de dades personals que exposen la privacitat. Podent utilitzar diferents adreces Bitcoin d`un sol ús per a cada transacció.' }],
          [{ vl: 'NENHUM registro de dados pessoais expondo a privacidade. Ser capaz de usar diferentes endereços Bitcoin de uso único para cada transação.' }]                                               
            ],
        tx17: [
          [{ vl: 'Para <strong>comprar bitcoins</strong> solamente necesita disponer de una dirección de Bitcoin pública, vacia a conveniencia, de su propiedad.' },{ vl: 'Para <strong>comprar USDT</strong> solamente necesita disponer de una dirección de Bitcoin pública, vacia a conveniencia, de su propiedad.' }],
          [{ vl: 'To <strong>buy bitcoins</strong> you only need to have a public Bitcoin address, empty for convenience, of your property.' },{ vl: 'To <strong>buy USDT</strong> you only need to have a public Bitcoin address, empty for convenience, of your property.' }],
          [{ vl: 'Per <strong>comprar bitcoins</strong> només necessita disposar d`una adreça de Bitcoin pública, buida a conveniència, de la seva propietat.' },{ vl: 'Per <strong>comprar USDT</strong> només necessita disposar d`una adreça de Bitcoin pública, buida a conveniència, de la seva propietat.' }],
          [{ vl: 'Para <strong>comprar bitcoins</strong> você só precisa ter um endereço público Bitcoin, vazio para sua conveniência, de sua propriedade.' },{ vl: 'Para <strong>comprar USDT</strong> você só precisa ter um endereço público Bitcoin, vazio para sua conveniência, de sua propriedade.' }]                                               
            ],
        tx18: [
          [{ vl: 'Para <strong>vender bitcoins</strong>, y ofertar anuncios, solamente necesita tener algunos Satoshis o milésimas de bitcoin en su dirección Bitcoin. Sin un saldo mínimo requerido.' },{ vl: 'Para <strong>vender USDT</strong>, y ofertar anuncios, solamente necesita tener algunos USDT en su dirección Bitcoin. Sin un saldo mínimo requerido.' }],
          [{ vl: 'To <strong>sell bitcoins</strong>, and bidding ads, you only need to have a few Satoshis or thousandths of bitcoin in your Bitcoin address. No minimum balance required.' },{ vl: 'To <strong>sell USDT</strong>, and bidding ads, you only need to have a few USDT in your Bitcoin address. No minimum balance required.' }],
          [{ vl: 'Per <strong>vendre bitcoins</strong>, i oferir anuncis, només necessita tenir alguns Satoshis o mil·lèsimes de bitcoin en la seva adreça Bitcoin. Sense un saldo mínim requerit.' },{ vl: 'Per <strong>vendre USDT</strong>, i oferir anuncis, només necessita tenir alguns USDT en la seva adreça Bitcoin. Sense un saldo mínim requerit.' }],
          [{ vl: 'Para <strong>vender bitcoins</strong>, e oferecer anúncios, você só precisa ter alguns Satoshis ou milésimos de bitcoin em seu endereço Bitcoin. Nenhum saldo mínimo exigido.' },{ vl: 'Para <strong>vender USDT</strong>, e oferecer anúncios, você só precisa ter alguns USDT em seu endereço Bitcoin. Nenhum saldo mínimo exigido.' }]                                               
            ],
        tx19: [
          [{ vl: 'El vendedor/anunciante no paga nada por publicar sus anuncios/ofertas. Sólo en caso de materializarse una venta. El vendedor, paga un 0,25 % del importe total de la operación completada por servicio de arbitraje.' }],
          [{ vl: 'The seller / advertiser does not pay anything to publish their ads / offers. Only in the event of a sale. The seller pays 0.25% of the total amount of the completed transaction for arbitration service.' }],
          [{ vl: 'El venedor / anunciant no paga res per publicar els seus anuncis / ofertes. Només en cas de materialitzar una venda. El venedor, paga un 0,25% de l`import total de l`operació completada per servei d`arbitratge.' }],
          [{ vl: 'O vendedor / anunciante não paga nada para publicar seus anúncios / ofertas. Somente em caso de venda. O vendedor paga 0,25% do valor total da transação concluída pelo serviço de arbitragem.' }]                                               
            ],
        tx20: [
          [{ vl: 'El comprador paga un 0,25 % del importe total de la operación completada por servicio de arbitraje. Sólo en caso de materializarse una compra.' }],
          [{ vl: 'The buyer pays 0.25% of the total amount of the completed transaction for arbitration service. Only in the event of a purchase.' }],
          [{ vl: 'El comprador paga un 0,25% de l`import total de l`operació completada per servei d`arbitratge. Només en cas de materialitzar una compra.' }],
          [{ vl: 'O comprador paga 0,25% do valor total da transação concluída pelo serviço de arbitragem. Somente em caso de compra.' }]                                                         
            ],
        tx21: [
          [{ vl: 'Al iniciarse una transacción(Tx) de compra/venta, el precio vigente de Bitcoin, según valor de mercado, se considerará final y cerrado en el contrato multifirma, excepto si existe un error obvio en el precio.' },{ vl: 'Al iniciarse una transacción(Tx) de compra/venta, el precio vigente de USDT, según valor de mercado, se considerará final y cerrado en el contrato multifirma, excepto si existe un error obvio en el precio.' }],
          [{ vl: 'When starting a buy / sell transaction (Tx), the current price of Bitcoin, according to market value, will be considered final and closed in the multi-signature contract, except if there is an obvious error in the price.' },{ vl: 'When starting a buy / sell transaction (Tx), the current price of USDT, according to market value, will be considered final and closed in the multi-signature contract, except if there is an obvious error in the price.' }],
          [{ vl: 'Al iniciar-se una transacció (Tx) de compra / venda, el preu vigent de Bitcoin, segons valor de mercat, es considerarà final i tancat en el contracte multifirma, excepte si hi ha un error obvi en el preu.' },{ vl: 'Al iniciar-se una transacció (Tx) de compra / venda, el preu vigent de USDT, segons valor de mercat, es considerarà final i tancat en el contracte multifirma, excepte si hi ha un error obvi en el preu.' }],
          [{ vl: 'Ao iniciar uma transação de compra / venda (Tx), o preço atual do Bitcoin, de acordo com o valor de mercado, será considerado final e fechado no contrato multi-assinaturas, exceto se houver erro óbvio no preço.' },{ vl: 'Ao iniciar uma transação de compra / venda (Tx), o preço atual do USDT, de acordo com o valor de mercado, será considerado final e fechado no contrato multi-assinaturas, exceto se houver erro óbvio no preço.' }]                                               
            ],
        tx22: [
          [{ vl: 'La resolución de un arbitraje, en caso de ser necesaria la intervención arbitral por incidencia o desacuerdo entre comprador y vendedor, será en un máximo de 48 horas, para revisión del VAR, a contar desde el inicio de la incidencia en la transacción(Tx).' }],
          [{ vl: 'The resolution of an arbitration, if arbitration intervention is necessary due to incidence or disagreement between buyer and seller, will be in a maximum of 48 hours, for VAR review, from the beginning of the incidence within the transaction (Tx).' }],
          [{ vl: 'La resolució d`un arbitratge, en cas de ser necessària la intervenció arbitral per incidència o desacord entre comprador i venedor, serà en un màxim de 48 hores, per revisió del VAR, a comptar des de l`inici de la incidència dins de la transacció (Tx).' }],
          [{ vl: 'A resolução de uma arbitragem, se a intervenção da arbitragem for necessária devido a um incidente ou desacordo entre comprador e vendedor, será no prazo máximo de 48 horas, para revisão VAR, a partir do início do incidente da transação (Tx).' }]                                               
            ],
        tx23: [
          [{ vl: 'Dirección bitcoin destino entrega de la compra o destino cobro de la venta, estipulable sin restricciones, dentro de cada transacción.' }],
          [{ vl: 'Address bitcoin destination delivery of the purchase or destination collection of the sale, stipulated without restrictions, within each transaction.' }],
          [{ vl: 'Adreça bitcoin destí lliurament de la compra o destí del cobrament de la venda, estipulable sense restriccions, dins a cada transacció.' }],
          [{ vl: 'Endereço bitcoin destino de entrega da compra ou destino de cobrança da venda, estipulado sem restrições, dentro de cada transação.' }]                                               
            ],
        tx24: [
          [{ vl: '<b>El intercambio de datos, detalles personales</b> de identificación o de medios de cobro/pago, entre comprador y vendedor podrá ser (y es preferible) <b>de forma privada</b> entre los mismos,  <b>por cualquier vía externa a esta plataforma</b>. Según acuerden las partes a su conveniencia. Pruebas específicas de pago o cobro relacionadas a una compra/venta, sólo serían requeridas a través de la plataforma en caso excepcional de incidencia o impago. Dentro del chat privado, virtual y encriptado entre comprador, vendedor y árbitro. Cerrado para la Tx en curso. El Chat virtual de la Tx y datos remitidos en él, serán eliminados por completo, al finalizar la transacción de compra-venta.' }],
          [{ vl: '<b>The exchange of data, personal details </b> of identification or means of collection / payment, between buyer and seller may be (and is preferable) <b> privately </b> between them, <b> by any external way to this platform </b>. As agreed by the parties at their convenience. Specific proofs of payment or collection related to a purchase / sale, would only be required through the platform in exceptional cases of incidence or non-payment. Within the private, virtual and encrypted chat between buyer, seller and referee. Closed for ongoing Tx. The virtual chat of the Tx and data sent in it, will be completely eliminated, at the end of the purchase-sale transaction.' }],
          [{ vl: 'L`intercanvi de dades, detalls personals </b> d`identificació o de mitjans de cobrament / pagament, entre comprador i venedor podrà ser (i és preferible) <b> de forma privada </b> entre els mateixos, <b> per qualsevol via externa a aquesta plataforma </b>. Segons acordin les parts a la seva conveniència. Proves específiques de pagament o cobrament relacionades a una compra / venda, només serien requerides a través de la plataforma en cas excepcional d`incidència o impagament. Dins el xat privat, virtual i encriptat entre comprador, venedor i àrbitre. Tancat per a la Tx en curs. El Xat virtual de la Tx i dades remeses a ell, seran eliminats per complet, en acabar la transacció de compra-venda.' }],
          [{ vl: 'A troca de dados, dados pessoais </b> de identificação ou meios de cobrança / pagamento, entre comprador e vendedor pode ser (e é preferível) <b> privada </b> entre eles, <b> por qualquer forma externa a esta plataforma </b>. Conforme acordado pelas partes conforme sua conveniência. Comprovantes específicos de pagamento ou cobrança relativos a uma compra / venda, só seriam exigidos através da plataforma em casos excepcionais de incidência ou não pagamento. No chat privado, virtual e criptografado entre comprador, vendedor e árbitro. Fechado para Tx em andamento. O chat virtual do Tx e os dados nele enviados, serão totalmente eliminados, ao final da transação de compra-venda.' }]                                               
            ]                                                                                     
      },

    };
  },
  filters: {
    currencydecimal(value) {
      return Number(value).toFixed(2);
    },
    reduaddr(value) {
      return value.substr(0, 13);
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
      "syncUpdateOper",            
      "syncUpdateValBtc",
      "syncUpdateValBtcEUR",
      "syncUpdateValBtcVES",
      "syncUpdateNumAlerts"      
    ]),    
    sl() {
      //console.log("pasa")
        if (this.selectedlang === 'ESP') {
         return 0;
        }
        if (this.selectedlang === 'ENG'){
         return 1;
        } 
        if (this.selectedlang === 'CAT') {
         return 2;
        }
        if (this.selectedlang === 'PORT') {
         return 3;
        }       
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
    getalerts() {
      let config = {
        headers: {
          token: this.token
        }
      }
      this.axios.get('/letusuar', config)
        .then(res => {
          let alertas = res.data;
         // console.log(alertas);
          if (alertas.length  > 0) {
          this.mensaje.color = 'warning';
          this.mensaje.texto = alertas.length + ' 🔔...';
          this.showAlert();
          //router.push({name: 'Alertas'});
          }
        this.syncUpdateNumAlerts(alertas.length);
        })
        .catch(e => {
          console.log(e.response);
        })
    },         
  },
  computed: {
    ...mapGetters(["estaActivo", "nomuser","iduser", "getLastClickTime", "selectedNumAlerts",  "selectedlang", "selectedmon","selectedoper"]),
    ...mapState(["token"])
  },
  created() {
    this.leerToken();
  },        
  mounted() {    
    //console.log('hola mundo desde mounted')
      if (this.estaActivo) {
         this.getalerts();      
       }  
  },
};
</script>
<style lang="scss" scoped>

.popper_tl {
    z-index: 5;
    color: white;
    background-color: black;
    border-radius: 6px;
    padding: 5px 10px 1px;
    max-width: 540px;
    max-inline-size: 540px;
    writing-mode: horizontal-tb;    
    max-height: 270px;
    -moz-box-shadow: rgb(148, 148, 148) 0 0 6px 0;
    -webkit-box-shadow: rgb(148, 148, 148) 0 0 6px 0;
    box-shadow: rgb(148, 148, 148) 0 0 6px 0;    
    text-align: left;
    overflow-x: auto; //esconde el arrow  
    overflow-y: scroll; //esconde el arrow
}
.caja {
  position: relative;
}
.img {
  max-width: 100%;
  height: auto;
}
#subet0 {
  position: absolute;
  text-align: center;
  display: flex;
  top: 10%;
  right: 8%;
  color: DarkGoldenRod;
  width: auto;
  height: auto;
  background:transparent;
}
#subet1 {
  position: absolute;
  text-align: center;
  display: flex;
  top: 35%;
  right: 7%;
  width: auto;
  height: auto;
  background:transparent;
}
#subet2 {
  position: absolute;
  text-align: center;
  display: flex;
  top: 65%;
  right: 7%;
  color: white;
  width: auto;
  height: auto;
  background:transparent;
}
    #tit1 {
      font-size: 60px;
    }
    #tit2 {
      font-size: 40px;
    }
    #tit4 {
      font-size: 30px;
    }
@media screen and (max-width: 480px) {

.popper {
  max-width: 340px;
  max-inline-size: 340px;
}

    #tit1 {
      font-size: 23px;
    }
    #tit2 {
      font-size: 21px;
    }
    #tit4 {
      font-size: 17px;
    }
              
}
 
</style>
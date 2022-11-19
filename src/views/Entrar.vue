<template>
<div id="Entrar">
  <div v-if="!estaActivo">
    <div class="container">
      <br>
      <h2 style='color:rgb(80, 80, 80)'><img
                align="bottom"
                src="https://www.contobit.com/imagens/userbtc.png"
                width="40px"
                height="30.8px"
              />
              <img />{{titul.matrix[svl()][0].value}}</h2>            
      <b-alert
        :show="dismissCountDown"
        dismissible
        :variant="mensaje.color"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
      >{{mensaje.texto}}</b-alert>

        <transition name="fade">
          <div v-if="show1">
            <article>
              <div class="container" :class="{'sign-up-active' : signUp}">

                <!--///////////////////////////////////  ENTRAR /////////////////////////////////////// -->

                <form @submit.prevent="login" class="sign-in" action="#">
                  <h3 v-if="verqrget === false">{{titul.matrix[svl()][1].value}}</h3>                                                      
                  <p v-if="verqrget === false"><font color="yellow">{{titul.matrix[svl()][2].value}}</font></p>
                  <span v-if="verqrget === true">
                              {{titul.escan[svl()][0].value}}
                            <span class="error">{{ error }}</span>
                        <popper
                              trigger="clickToOpen"
                              :options= popoptionsb>
                              <div class="popper_tl" style="margin-left: -70px">                         
                                  <span v-html="txt_pops.mtx[svl()][2].value"></span> 
                              </div>                
                              <a  href="#" slot="reference" style="font-size: 16px;color: #c4c4c4;" > 
                                <font-awesome-icon :icon="['far', 'question-circle']" />
                              </a>
                        </popper>                            
                                                      
                          <qrcode-stream
                            @decode="onDecode"
                            @init="onInit"
                            style="width: 340px; height: 245px"
                          ></qrcode-stream>
                  </span>
                                                                      
                  <span v-if="(usuario.NOMBREUSUARIO === null | usuario.NOMBREUSUARIO === '' ) & dirvalid === false " id="siokinput"> 

                      <span v-if="verqrget === false" class="floating-label-group">
                      <span id="inp_prev">                
                                    <popper
                                            :options= popoptions>
                                            <div class="popper" >                         
                                                <span v-html="Textos_qrcode.vars[svl()][2].vl"></span> {{titul.matrix[svl()][3].value}} 
                                            </div>                
                                              <img
                                                 class="btn btn-sm"
                                                 style="margin-left:-2px;margin-top:9px;"
                                                 slot="reference"
                                                 @click="verqrget = !verqrget"
                                                  src="https://www.contobit.com/img/scanqr.jpg"
                                                  width="48px"
                                                  height="36px"
                                              />
                                    </popper>      
                      </span>                        
                      <input id="inp_solic" type="text" v-model="usuario.NOMBREUSUARIO"
                        autocomplete="off" autofocus
                        @paste="pasteUser(usuario.NOMBREUSUARIO)" @input="pasteUser(usuario.NOMBREUSUARIO)" required />
				                <label class="floating-label">{{titul.matrix[svl()][3].value}}</label>
                        <popper
                              trigger="clickToOpen"
                              :options= popoptionsb>
                              <div class="popper_tl" style="margin-left: -300px">                         
                                  <span v-html="txt_pops.mtx[svl()][1].value"></span> 
                              </div>                
                              <a  href="#" slot="reference" >
                                <font-awesome-icon id="inp_in_hlp" :icon="['far', 'question-circle']" />
                              </a>
                        </popper>                         
			                </span> 

                  </span>

                  <span v-if="usuario.NOMBREUSUARIO !== '' & usuario.NOMBREUSUARIO !== null & dirvalid === false " id="nookinput" class="shake"> 

                      <span v-if="verqrget === false" class="floating-label-group">
                      <span id="inp_prev">                
                                    <popper
                                            :options= popoptions>
                                            <div class="popper" >                         
                                                <span v-html="Textos_qrcode.vars[svl()][2].vl"></span> {{titul.matrix[svl()][3].value}} 
                                            </div>                
                                              <img
                                                 class="btn btn-sm"
                                                 style="margin-left:-2px;margin-top:9px;"
                                                 slot="reference"
                                                 @click="verqrget = !verqrget"
                                                  src="https://www.contobit.com/img/scanqr.jpg"
                                                  width="48px"
                                                  height="36px"
                                              />
                                    </popper>      
                      </span>                        
                      <input id="inp_solic" type="text" v-model="usuario.NOMBREUSUARIO"
                        autocomplete="off" autofocus
                        @paste="pasteUser(usuario.NOMBREUSUARIO)" @input="pasteUser(usuario.NOMBREUSUARIO)" required />
				                <label class="floating-label">{{titul.matrix[svl()][3].value}}</label>
                        <popper
                              trigger="clickToOpen"
                              :options= popoptionsb>
                              <div class="popper_tl" style="margin-left: -300px">                         
                                  <span v-html="txt_pops.mtx[svl()][1].value"></span> 
                              </div>                
                              <a  href="#" slot="reference" > <!-- class="btn btn btn-sm" -->
                                <font-awesome-icon id="inp_in_hlp" :icon="['far', 'question-circle']" />
                              </a>
                        </popper>                         
			                </span>

                  </span>                                  

                  <popper v-if="verqrget === true"
                              :options= popoptionsb>
                              <div class="popper">                         
                                  <span v-html="txt_pops.mtx[svl()][0].value"></span> 
                              </div>                
                              <img
                                      class="btn btn-sm"
                                      slot="reference"
                                      @click="verqrget = !verqrget"
                                      src="https://www.contobit.com/img/scanqr.jpg"
                                      width="48px"
                                      height="36px"
                              />
                              <img />
                  </popper>                                             
                
                 <br>                            
                 <div >
          <br> 
                </div>
              </form>
              </div>
            </article>
          </div>
        </transition>

    <!--///////////////////////////////////  FIRMAR ENTRAR/////////////////////////////////////// -->

    <transition name="fade">
    <div v-if="show">
    <article>      
    <div class="contenedor-entrar">     
    <div class="container" :class="{'sign-up-active' : sign-firm}">
          <form @submit.prevent="login()" class="sign-firm" action="#">
            <span><h4><font color="red">{{t_firmar_ent.mtx[svl()][0].vl}}<br></font></h4></span>                                  
            <p>
                  <span > {{t_firmar_ent.mtx[svl()][1].vl}}</span>             
              <font size=5 color="green"> {{aCopiar}} </font>
              <font color="DodgerBlue">
                <a class="btn btn-outline-primary" v-clipboard:copy="aCopiar" @click="alertacop()">
                  <font-awesome-icon  :icon="['far', 'copy']" />
                </a>
              </font>
              <br />
            </p>

                  <span v-if="(firma === null | firma === '' ) & firmaok === false " id="siokinput">

                      <span class="floating-label-group">
                      <span id="inp_prev">                
                               <popper
                                  trigger="clickToOpen"     
                                  :options= popoptionsl>
                                  <div class="popper_scanqr" style="margin-left:10px;margin-top:-270px;">                         
                                      <qrcode-stream
                                        v-if="verqrget === true"
                                        @decode="onDecode_firm" style="width: 278px; height: 278px;"><span style="font-size:12px;">{{Textos_qrcode.vars[svl()][1].vl}}{{t_firmar_ent.mtx[svl()][2].vl}}</span></qrcode-stream> 
                                  </div>                
                                  <a href="#" slot="reference" @click="verqrget = !verqrget">
                                    <popper
                                            :options= popoptions>
                                            <div class="popper" >                         
                                                <span v-html="Textos_qrcode.vars[svl()][2].vl"></span> {{t_firmar_ent.mtx[svl()][2].vl}} 
                                            </div>                
                                            <a href="#" slot="reference">
                                              <img
                                                  align="right"
                                                  style="margin-top: 15px;margin-left: 5px;"
                                                  src="https://www.contobit.com/img/scanqr.jpg"
                                                  width="26px"
                                                  height="24px"
                                              />
                                            </a>
                                    </popper>      
                                  </a>
                               </popper>
                      </span>                        
                      <input id="inp_solic" style="min-height:70px;min-width: 320px;" type="password" v-model="firma"
                        autocomplete="off" autofocus
                        @paste="pasteFirmaEntrar(firma)" @input="pasteFirmaEntrar(firma)" required />
				                <label class="floating-label">{{t_firmar_ent.mtx[svl()][2].vl}}</label>
                        <popper
                                trigger="clickToOpen"
                                :options= popoptionsb>
                                <div class="popper_tl" style="margin-left: -300px">                         
                                <span v-html="t_firmar_ent.mtx[svl()][3].vl"></span> 
                                </div>                
                                <a  href="#" slot="reference" >
                                <font-awesome-icon id="inp_in_hlp" :icon="['far', 'question-circle']" />
                                </a>
                        </popper>                         
			                </span>

                  </span> 

                  <span v-if="(firma !== '' ) & firmaok === false " id="nookinput" class="shake">

                      <span class="floating-label-group">
                      <span id="inp_prev">                
                               <popper
                                  trigger="clickToOpen"     
                                  :options= popoptionsl>
                                  <div class="popper_scanqr" style="margin-left:10px;margin-top:-270px;">                         
                                      <qrcode-stream
                                        v-if="verqrget === true"
                                        @decode="onDecode_firm" style="width: 278px; height: 278px;"><span style="font-size:12px;">{{Textos_qrcode.vars[svl()][1].vl}}{{t_firmar_ent.mtx[svl()][2].vl}}</span></qrcode-stream> 
                                  </div>                
                                  <a href="#" slot="reference" @click="verqrget = !verqrget">
                                    <popper
                                            :options= popoptions>
                                            <div class="popper" >                         
                                                <span v-html="Textos_qrcode.vars[svl()][2].vl"></span> {{t_firmar_ent.mtx[svl()][2].vl}} 
                                            </div>                
                                            <a href="#" slot="reference">
                                              <img
                                                  align="right"
                                                  style="margin-top: 15px;margin-left: 5px;"
                                                  src="https://www.contobit.com/img/scanqr.jpg"
                                                  width="26px"
                                                  height="24px"
                                              />
                                            </a>
                                    </popper>      
                                  </a>
                               </popper>
                      </span>                        
                      <input id="inp_solic" style="min-height:70px;min-width: 320px;" type="password" v-model="firma"
                        autocomplete="off" autofocus
                        @paste="pasteFirmaEntrar(firma)" @input="pasteFirmaEntrar(firma)" required />
				                <label class="floating-label">{{t_firmar_ent.mtx[svl()][2].vl}}</label>
                        <popper
                                trigger="clickToOpen"
                                :options= popoptionsb>
                                <div class="popper_tl" style="margin-left: -300px">                         
                                <span v-html="t_firmar_ent.mtx[svl()][3].vl"></span> 
                                </div>                
                                <a  href="#" slot="reference" >
                                <font-awesome-icon id="inp_in_hlp" :icon="['far', 'question-circle']" />
                                </a>
                        </popper>                         
			                </span>

                  </span> 


          </form>
        </div>
       </div>
    </article>               
    </div>        
    </transition>

      <!--///////////////////////////////////  FIRMAR CREAR /////////////////////////////////     
      / -->

      <transition name="fade">
        <div v-if="show2">
        <article>      
        <div class="contenedor-entrar">     
        <div class="container" :class="{'sign-up-active' : sign-firm}">          
          <form @submit.prevent="agregarUsuario()" class="sign-firm" action="#">
            <span><font size=2 color="orange">{{t_firmar_ent.mtx[svl()][4].vl}}</font><h4><font color="red">{{t_firmar_ent.mtx[svl()][0].vl}}<br></font></h4></span>
            <p>            
              <span> {{t_firmar_ent.mtx[svl()][1].vl}}</span>

              <font size=5 color="green"> {{aCopiar}} </font>
              <font color="DodgerBlue">
                <a class="btn btn-outline-primary" v-clipboard:copy="aCopiar" @click="alertacop()">
                  <font-awesome-icon :icon="['far', 'copy']" />
                </a>
              </font>
              <br />
            </p>

                  <span v-if="(firma === null | firma === '' ) & firmaok === false " id="siokinput">

                      <span class="floating-label-group">
                      <span id="inp_prev">                
                               <popper
                                  trigger="clickToOpen"     
                                  :options= popoptionsl>
                                  <div class="popper_scanqr" style="margin-left:10px;margin-top:-270px;">                         
                                      <qrcode-stream
                                        v-if="verqrget === true"
                                        @decode="onDecode_firmcrea" style="width: 278px; height: 278px;"><span style="font-size:12px;">{{Textos_qrcode.vars[svl()][1].vl}}{{t_firmar_ent.mtx[svl()][2].vl}}</span></qrcode-stream> 
                                  </div>                
                                  <a href="#" slot="reference" @click="verqrget = !verqrget">
                                    <popper
                                            :options= popoptions>
                                            <div class="popper" >                         
                                                <span v-html="Textos_qrcode.vars[svl()][2].vl"></span> {{t_firmar_ent.mtx[svl()][2].vl}} 
                                            </div>                
                                            <a href="#" slot="reference">
                                              <img
                                                  align="right"
                                                  style="margin-top: 15px;margin-left: 5px;"
                                                  src="https://www.contobit.com/img/scanqr.jpg"
                                                  width="26px"
                                                  height="24px"
                                              />
                                            </a>
                                    </popper>      
                                  </a>
                               </popper>
                      </span>                        
                      <input id="inp_solic" style="min-height:70px;min-width: 320px;" type="password" v-model="firma"
                        autocomplete="off" autofocus
                        @paste="pasteFirmaCrear(firma)" @input="pasteFirmaCrear(firma)" required />
				                <label class="floating-label">{{t_firmar_ent.mtx[svl()][2].vl}}</label>
                        <popper
                                trigger="clickToOpen"
                                :options= popoptionsb>
                                <div class="popper_tl" style="margin-left: -300px">                         
                                <span v-html="t_firmar_ent.mtx[svl()][3].vl"></span> 
                                </div>                
                                <a  href="#" slot="reference" >
                                <font-awesome-icon id="inp_in_hlp" :icon="['far', 'question-circle']" />
                                </a>
                        </popper>                         
			                </span>

                  </span> 

                  <span v-if="(firma !== '' ) & firmaok === false " id="nookinput" class="shake">

                      <span class="floating-label-group">
                      <span id="inp_prev">                
                               <popper
                                  trigger="clickToOpen"     
                                  :options= popoptionsl>
                                  <div class="popper_scanqr" style="margin-left:10px;margin-top:-270px;">                         
                                      <qrcode-stream
                                        v-if="verqrget === true"
                                        @decode="onDecode_firmcrea" style="width: 278px; height: 278px;"><span style="font-size:12px;">{{Textos_qrcode.vars[svl()][1].vl}}{{t_firmar_ent.mtx[svl()][2].vl}}</span></qrcode-stream> 
                                  </div>                
                                  <a href="#" slot="reference" @click="verqrget = !verqrget">
                                    <popper
                                            :options= popoptions>
                                            <div class="popper" >                         
                                                <span v-html="Textos_qrcode.vars[svl()][2].vl"></span> {{t_firmar_ent.mtx[svl()][2].vl}} 
                                            </div>                
                                            <a href="#" slot="reference">
                                              <img
                                                  align="right"
                                                  style="margin-top: 15px;margin-left: 5px;"
                                                  src="https://www.contobit.com/img/scanqr.jpg"
                                                  width="26px"
                                                  height="24px"
                                              />
                                            </a>
                                    </popper>      
                                  </a>
                               </popper>
                      </span>                        
                      <input id="inp_solic" style="min-height:70px;min-width: 320px;" type="password" v-model="firma"
                        autocomplete="off" autofocus
                        @paste="pasteFirmaCrear(firma)" @input="pasteFirmaCrear(firma)" required />
				                <label class="floating-label">{{t_firmar_ent.mtx[svl()][2].vl}}</label>
                        <popper
                                trigger="clickToOpen"
                                :options= popoptionsb>
                                <div class="popper_tl" style="margin-left: -300px">                         
                                <span v-html="t_firmar_ent.mtx[svl()][3].vl"></span> 
                                </div>                
                                <a  href="#" slot="reference" >
                                <font-awesome-icon id="inp_in_hlp" :icon="['far', 'question-circle']" />
                                </a>
                        </popper>                         
			                </span>

                  </span> 

         </form>
        </div>
       </div>
    </article>               
    </div>        
    </transition>


    </div>

  </div>
</div>  
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';
import QrcodeVue from "qrcode.vue"; 
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

export default {
    name: "Entrar",
    components: {
      QrcodeVue,
      'popper': Popper,
    },  
  data() {
    return {       
      nota: {
          nombre: "",
          descripcion: ""
        },
      popoptions: {
                      placement: 'top',
                      modifiers: { offset: { offset: '0,5px' } }
                    },
      popoptionsl: {
                      placement: 'left',
                      modifiers: { offset: { offset: '0,3px' } }
                    },
      popoptionsb: {
                      placement: 'bottom',
                      modifiers: { offset: { offset: '0,3px' } }
                    },       
      error: '',
      verqrget: false,
      ip_conexion: "",
      controlbyip: false,
      ip1: "",
      ip2: "",
      dirvalid: false,
      el: "#demo",
      url: "https://blockstream.info/testnet/address/",
      User: [],
      userReg: false,
      rpccheckfirma: [],
      mensaje: { color: "success", texto: "" },
      dismissSecs: 5,
      dismissCountDown: 0,
      usuario: { NOMBREUSUARIO: null, PASSWORDUSUARIO: "" },
      UserNew: { NOMBREUSUARIO: null, EMAILUSUARIO: "", PASSWORDUSUARIO: "", IP1: "" },
      sign: false,
      firm: false,
      signUp: false,
      show: false,
      show1: true,
      show2: false,
      show3: false,
      aCopiar: "",
      address: "",
      address_id: null,
      address_email: null,
      firma: "",
      firmaok: false,
      userEntrar: {},
      isPaste: false,
      // siguen variables para idiomas parte html
      Textos_qrcode: {
       vars: [
          [{ vl: ' Mostrar el código Qr a leer...'},{ vl: ' Escanear código Qr, '},{ vl: ' Activa / desactiva escanear el código Qr de '}],
          [{ vl: ' Show the Qr code to read...'},{ vl: ' Scan Qr code, '},{ vl: ' Activates / deactivates scanning the Qr code of '}],
          [{ vl: ' Mostra el codi Qr a llegir...'},{ vl: ' Escanejar codi Qr, '},{ vl: ' Activa / desactiva escanejar el codi Qr de l` '}],
          [{ vl: ' Mostrar o código Qr para ler...'},{ vl: ' Digitalize código Qr, '},{ vl: ' Ativa / desativa a digitalização do código Qr de '}],                                             
            ],
      },      
      titul: {
       matrix: [
                [{ value: 'Entrar' }, { value: '¡Bienvenido Bitcoiner!' }, { value: 'Acceda fácilmente con una dirección bitcoin pública de su propiedad' },{ value: '🔗Dirección bitcoin pública' }],
                [{ value: 'Enter' }, { value: 'Welcome Bitcoiner !' }, { value: 'Access easily with a public bitcoin address of your property' },{ value: '🔗Public bitcoin address' }],
                [{ value: 'Entrada' }, { value: 'Benvingut Bitcoiner !' }, { value: 'Entreu fàcilment amb una adreça bitcoin pública de la vostra propietat' },{ value: '🔗Adreça pública bitcoin' }],
                [{ value: 'Entrar' }, { value: 'Bem-vindo, Bitcoiner !' }, { value: 'Acesse facilmente com um endereço bitcoin público de sua propriedade' },{ value: '🔗Endereço público bitcoin' }],                                               
               ],
       escan: [
                [{ value: 'Escanear el código Qr de su 🔗 dirección bitcoin pública' }, { value: '¡Bienvenido Bitcoiner!' }, { value: 'Acceda fácilmente con una dirección bitcoin pública de su propiedad' }],
                [{ value: 'Scan the Qr code of your 🔗 public bitcoin address' }, { value: 'Welcome Bitcoiner !' }, { value: 'Access easily with a public bitcoin address of your property' }],
                [{ value: 'Escanejar el codi Qr de la seva 🔗 adreça bitcoin pública' }, { value: 'Benvingut Bitcoiner !' }, { value: 'Entreu fàcilment amb una adreça bitcoin pública de la vostra propietat' }],
                [{ value: 'Digitalize o código Qr do seu 🔗 endereço público de bitcoin' }, { value: 'Bem-vindo, Bitcoiner !' }, { value: 'Acesse facilmente com um endereço bitcoin público de sua propriedade' }],                                               
               ]               
      },      
      txt_pops: {
       mtx: [
                [{ value: 'Activa / desactiva escanear el código Qr de su <br />🔗 dirección bitcoin pública desde su cámara' }, { value: '<br><b>Dirección bitcoin pública:</b><a href=https://www.contobit.com/videohelp/publicaddr.webm target=_blank> 📽️ </a><br> Pegue aquí o escanee el código qr de la dirección bitcoin pública de su propiedad que desee usar. Para comprar bitcoins o tethers (puede ser vacía, sin saldo) o para vender bitcoins o tethers (anuncios visibles sólo mientras dispongan de algún saldo en las mismas).<br> Si no dispone de ninguna dirección bitcoin, o es su primera vez, desde <a href=https://www.bitaddress.org target=_blank><font color=cyan>aquí</font></a> puede crear una cartera bitcoin de papel (se recomienda guarde o imprima los detalles de su cartera en el momento de la creación ya que puede necesitarlos después). ¡ IMPORTANTE ! Para preservar su seguridad y privacidad, descarge primero y, ejecute la utilidad desconectado de internet .<br> Sólo se admiten, de momento, direcciones bitcoin tipo (legacy) heredadas. Por compatibilidad para el envio y verificación de mensajes con firma. Medio utilizado para verificaciones de propiedad y seguridad. <br> <br>' }, { value: '<br><b>Escanear el código Qr de su 🔗 dirección bitcoin pública:</b><br> Posicione el código Qr de su dirección bitcoin pública, estático frente a su cámara, hasta que se vea con claridad en el marco de la imagen, y sea reconocida automáticamente su dirección bitcoin pública como pegada. <br> <br>' }, { value: 'Detallles' }, { value: 'Medio de pago' }, { value: "Precio ₿" }, { value: 'Límites' }, { value: 'Proceso' }],

                [{ value: 'Enable / disable scanning the Qr code of your <br /> 🔗 public bitcoin address from your camera' }, { value: '<br><b>Public bitcoin address:</b><a href=https://www.contobit.com/videohelp/publicaddr.webm target=_blank> 📽️ </a><br> Paste here or scan the qr code of the public bitcoin address of your property that you want to use. To buy bitcoins or tethers (it can be empty, without balance) or to sell bitcoins or tethers (ads visible only as long as they have a balance in them). <br> If you do not have any bitcoin address, or it is your first time, since <a href=https://www.bitaddress.org target=_blank><font color=cyan>here</font></a> you can create a paper bitcoin wallet (it is recommended to save or print your wallet details at the time of creation as you may need them later). IMPORTANT! To preserve your security and privacy, first download and run the utility offline. <br> Only legacy bitcoin addresses are currently supported. For compatibility for the sending and verification of messages with signature. Medium used for property and security checks. <br> <br>' }, { value: '<br><b>Scan the Qr code of your 🔗 public bitcoin address: </b> <br> Position the Qr code of your public bitcoin address, static in front of your camera, until it is clearly visible in the image frame, and recognized automatically your public bitcoin address as pasted. <br> <br>' }, { value: 'Details' }, { value: 'Payment method' }, { value: "Price ₿" }, { value: 'Limits' }, { value: 'Process' }],

                [{ value: 'Activa / desactiva escanejar el codi Qr de la seva <br /> 🔗 adreça bitcoin pública des de la seva càmera' }, { value: '<br><b>Adreça bitcoin pública:</b><a href=https://www.contobit.com/videohelp/publicaddr.webm target=_blank> 📽️ </a><br> Enganxeu aquí o escanegeu el codi qr de l`adreça bitcoin pública de la vostra propietat que volgueu utilitzar. Per comprar bitcoins o tethers (pot ser buida, sense saldo) o per vendre bitcoins o tethers (anuncis visibles només mentre disposin d`algun saldo en les mateixes). <br> Si no disposa de cap Adreça bitcoin, o és la seva primera vegada, des d` <a href=https://www.bitaddress.org target=_blank><font color=cyan>aquí</font></a> pot crear una cartera bitcoin de paper (es recomana guardeu o imprimiu els detalls de la vostre cartera en el moment de la creació ja que podeu necessitar-los després). IMPORTANT! Per preservar la vostra seguretat i privacitat, descarreguru primer i, executeu la utilitat desconnectat d`internet. <br> Només s`admeten, de moment, adreces bitcoin tipus (legacy) heretades. Per compatibilitat per a l`enviament i verificació de missatges amb signatura. Mitjà utilitzat per a verificacions de propietat i seguretat. <br> <br>' }, { value: '<br><b>Escanejar el codi Qr de la seva 🔗 adreça bitcoin pública: </ b> <br> Posicioni el codi Qr de la seva adreça bitcoin pública, estàtic enfront de la seva càmera, fins que es vegi amb claredat en el marc de l`imatge, i sigui reconeguda automàticament la seva adreça bitcoin pública com enganxada. <br> <br>' }, { value: 'Detalls' }, { value: 'Mitjà de pagament' }, { value: "Preu ₿" }, { value: 'Límits' }, { value: 'Procés' }],

                [{ value: 'Ativar / desativar a digitalização do código Qr do seu <br /> 🔗 endereço público de bitcoin de sua câmera' },{ value: '<br><b>Endereço público de bitcoin:</b><a href=https://www.contobit.com/videohelp/publicaddr.webm target=_blank> 📽️ </a><br> Cole aqui ou escaneie o código qr do endereço bitcoin público de sua propriedade que deseja usar. Para comprar bitcoins ou tethers (pode estar vazio, sem saldo) ou para vender bitcoins ou tethers (anúncios visíveis apenas desde que tenham saldo). <br> Se você não possui nenhum endereço de bitcoin, ou se é sua primeira vez, desde <a href=https://www.bitaddress.org target=_blank><font color=cyan>aqui</font></a> você pode criar uma carteira de bitcoin de papel (é recomendável salvar ou imprimir os detalhes da carteira no momento da criação, pois você pode precisar deles mais tarde). IMPORTANTE! Para preservar sua segurança e privacidade, primeiro baixe e execute o utilitário off-line. <br> Somente endereços de bitcoin legados são atualmente suportados. Para compatibilidade de envio e verificação de mensagens com assinatura. Meio usado para verificações de propriedade e segurança. <br> <br>' }, { value: '<br><b>Digitalize o código Qr do seu 🔗 endereço público de bitcoin: </b> <br> Posicione o código Qr do seu endereço público de bitcoin, estático na frente de sua câmera, até que seja claramente visível no quadro da imagem e reconhecido automaticamente seu endereço bitcoin público conforme colado. <br> <br>' },{ value: 'Detalhes' }, { value: 'Meio de pagamento' }, { value: "Preço ₿" },{ value: 'Limites' }, { value: 'Processo' }],                                               
               ]
      },
      t_firmar_ent: {
       mtx: [
                [{ vl: '¡Verificación de propiedad y seguridad!' }, { vl: ' Mensaje a firmar:' }, { vl: '🖋️Firma bitcoin del mensaje' },{ vl: '<br><b>Entrar. Verificación de propiedad y seguridad:<a href=https://www.contobit.com/videohelp/signbitcoinmsg.webm target=_blank> 📽️ </a><br></b><br>1. Copie el mensaje a firmar sin cerrar esa pestaña de su navegador.<br> 2. En su cartera, o utilidad de firma, pegue el mensaje a firmar y genere la firma.<br>  3. Desde su cartera, o utilidad de firma, copie la firma(mensaje firmado).<br> 4. De nuevo aquí, en la casilla correspondiente, pegue la Firma bitcoin(mensaje firmado).<br><br> Si sólo dispone de cartera de papel, o simplemente prefiere no usar una cartera digital, para la firma. Puede hacerlo, <b>sin exponer su clave privada, mejor desconectado de internet (descargar primero)</b>, con <a href=https://reinproject.org/bitcoin-signature-tool/#sign target=_blank><font color=cyan>esta</font></a> utilidad. Esta validación se basa, simplemente en la comprobación por encriptación bitcoin de un mensaje(aleatorio) firmado por su dirección bitcoin a través de su cartera. Posterior verificación por nuestra parte. Esta firma actúa, como cerificación de propiedad y nivel de seguridad, para uso de su cuenta exlusivamente sin exponer su llave privada en absoluto. </a><br> <br>' }, { vl: '*usuario nuevo*' }],
                [{ vl: 'Property and security verification!' }, { vl: ' Message to sign:' }, { vl: '🖋️Bitcoin signature of the message' },{ vl: '<br><b>Enter. Property and security verification:<a href=https://www.contobit.com/videohelp/signbitcoinmsg.webm target=_blank> 📽️ </a> <br> </b> <br> 1. Copy the message to be signed without closing that tab of your browser. <br> 2. In your portfolio, or signature utility, paste the message to sign and generate the signature. <br> 3. From your portfolio, or signature utility , copy the signature (signed message). <br> 4. Again here, in the corresponding box, paste the bitcoin Signature (signed message). <br> <br> If you only have a paper wallet, or simply prefer not use a digital wallet, for the signature. You can do it, <b> without exposing your private key, better disconnected from the internet (download first) </b>, with <a href=https://reinproject.org/bitcoin-signature-tool/#sign target=_blank><font color=cyan>this</font></a> utility . This validation is based, simply on the verification by bitcoin encryption of a (random) message signed by your bitcoin address through your wallet. Subsequent verification on our part. This signature acts, as a certification of ownership and security level, for the exclusive use of your account without exposing your private key at all. </a><br> <br>' }, { vl: '*new user*' }],
                [{ vl: 'Verificació de propietat i seguretat !' }, { vl: ' Missatge a signar:' }, { vl: '🖋️Signatura bitcoin del missatge' },{ vl: '<br><b>Entrada. Verificació de propietat i seguretat:<a href=https://www.contobit.com/videohelp/signbitcoinmsg.webm target=_blank> 📽️ </a> <br> </b> <br> 1. Copieu el missatge a signar sense tancar aquesta pestanya del navegador. <br> 2. A la vostra cartera, o utilitat de signatura, enganxeu el missatge a signar i generi la firma. <br> 3. Des de la vostra cartera, o utilitat de signatura , copieu la signatura (missatge signat). <br> 4. De nou aquí, a la casella corresponent, enganxi la signatura bitcoin (missatge signat).<br> <br> Si només disposa de cartera de paper, o simplement prefereix no utilitzar una cartera digital, per a la signatura. Pot fer-ho, <b> sense exposar la seva clau privada, millor desconnectat d`internet (descarregar primer) </ b>, amb <a href=https://reinproject.org/bitcoin-signature-tool/#sign target=_blank><font color=cyan>aquesta</font></a> utilitat . Aquesta validació es basa, simplement en la comprovació per encriptació bitcoin d`un missatge (aleatori) signat per la vostra direcció bitcoin a través de la vostra cartera. Posterior verificació per part nostra. Aquesta signatura actua, com cerificació de propietat i nivell de seguretat, per a ús del seu compte exlusivament sense exposar la seva clau privada en absolut. </a><br> <br>' }, { vl: '*usuari nou*' }],
                [{ vl: 'Verificação de propriedade e segurança !' }, { vl: ' Mensagem para assinar:' }, { vl: '🖋️Assinatura Bitcoin da mensagem' },{ vl: '<br><b>Entrar. Verificação de propriedade e segurança:<a href=https://www.contobit.com/videohelp/signbitcoinmsg.webm target=_blank> 📽️ </a> <br> </b> <br> 1. Copie a mensagem a ser assinada sem fechar essa guia do navegador. <br> 2. Em seu portfólio ou utilitário de assinatura, cole a mensagem para assinar e gerar a assinatura. <br> 3. De seu portfólio ou utilitário de assinatura , copie a assinatura (mensagem assinada). <br> 4. Novamente aqui, na caixa correspondente, cole o bitcoin Assinatura (mensagem assinada). <br> <br> Se você tem apenas uma carteira de papel, ou simplesmente prefere não use uma carteira digital, para a assinatura. Você pode fazer isso, <b> sem expor sua chave privada, melhor desconectado da internet (faça o download primeiro) </b>, com <a href=https://reinproject.org/bitcoin-signature-tool/#sign target=_blank><font color=cyan>esta</font></a> ferramenta. Esta validação é baseada, simplesmente, na verificação por criptografia bitcoin de uma mensagem (aleatória) assinada por seu endereço bitcoin através de sua carteira. Verificação subsequente de nossa parte. Esta assinatura atua, como uma certificação de propriedade e nível de segurança, para o uso exclusivo de sua conta, sem expor sua chave privada de forma alguma. </a><br> <br>' }, { vl: '*novo usuário*' }],                                               
               ]             
      },
      f_alertacop: {
       txt: [
          [{ vl: ' Mensaje para firma bitcoin copiado al portapapeles'}],
          [{ vl: ' Bitcoin signature message copied to clipboard'}],
          [{ vl: ' Missatge per signatura bitcoin copiat a al porta-retalls'}],
          [{ vl: ' Mensagem de assinatura de Bitcoin copiada para a área de transferência'}],                                             
            ],
      },      
      f_pintaBtc: {
       txt: [
          [{ vl: '¡Verificado con éxito mensaje firma de Dirección Bitcoin!'},{ vl: '¡Verificacion no corresponde con mensaje firma de Dirección Bitcoin!'}],
          [{ vl: 'Successfully verified Bitcoin Address signature message!'},{ vl: 'Verification does not correspond to Bitcoin Address signature message!'}],
          [{ vl: 'Verificat amb èxit missatge signatura d`Acreça Bitcoin!'},{ vl: 'Verificació no correspon amb missatge signatura d`Acreça  Bitcoin!'}],
          [{ vl: 'Mensagem de assinatura do endereço Bitcoin verificada com sucesso!'},{ vl: 'A verificação não corresponde à mensagem de assinatura do endereço Bitcoin!'}],                                             
            ],
      },
      f_agregarUsuario: {
       txt: [
          [{ vl: '¡ Usuario agregado con éxito !'},{ vl: '¡ Error de sistema en proceso agregar dirección !'},{ vl: '¡ Verificación de propiedad y seguridad !'}],
          [{ vl: 'User added successfully!'},{ vl: 'System error in process add address!'},{ vl: 'Property and security verification!'}],
          [{ vl: 'Usuari afegit amb èxit!'},{ vl: 'Error de sistema en procés afegir l`Adreça!'},{ vl: 'Verificació de propietat i seguretat!'}],
          [{ vl: 'Usuário adicionado com sucesso!'},{ vl: 'Erro de sistema no processo de adição de endereço!'},{ vl: 'Verificação de propriedade e segurança!'}],                                             
            ],
      },
      f_pastes: {
       txt: [
          [{ vl: 'Analizando...'}],
          [{ vl: 'Analyzing... '}],
          [{ vl: 'Analitzant...'}],
          [{ vl: 'Analisando...'}],                                             
            ],
      },
      f_checkUser: {
       txt: [
          [{ vl: '¡ Dirección Bitcoin válida en CoinstoBitcoins !'},{ vl: '¡ Control de acceso por IP habilitado para esta dirección Bitcoin !'},{ vl: 'La IP de su ubicación actual no coincide con sus IP habituales. Si usted es el propietario de la dirección Bitcoin, debe acceder desde alguna de las IP registradas y modificar las preferencias de seguridad en su Perfil si lo desea. '},{ vl: '¡ Dirección Bitcoin válida, primer acceso a CoinstoBitcoins !'},{ vl: '¡ No es una Dirección Bitcoin válida !'}],
          [{ vl: 'Valid Bitcoin address in CoinstoBitcoins !'},{ vl: 'IP access control enabled for this Bitcoin address!'},{ vl: 'The IP of your current location does not match your usual IPs. If you are the owner of the Bitcoin address, you must access from any of the registered IPs and modify the security preferences in your Profile if you wish.'},{ vl: 'Valid Bitcoin address, first access to CoinstoBitcoins !'},{ vl: 'Not a valid Bitcoin Address !'}],
          [{ vl: 'Adreça Bitcoin vàlida a CoinstoBitcoins !'},{ vl: 'Control d`accés per IP habilitat per a aquesta adreça Bitcoin!'},{ vl: 'La IP de la vostra ubicació actual no coincideix amb les vostres IP habituals. Si sou el propietari de l`adreça Bitcoin, heu d`accedir des d`alguna de les IP registrades i modificar les preferències de seguretat al vostre Perfil si ho desitgeu. '},{ vl: 'Adreça Bitcoin vàlida, primer accés a CoinstoBitcoins !'},{ vl: 'No és una adreça Bitcoin vàlida !'}],
          [{ vl: 'Endereço Bitcoin válido em CoinstoBitcoins !'},{ vl: 'Controle de acesso IP habilitado para este endereço Bitcoin!'},{ vl: 'O IP da sua localização atual não corresponde aos seus IPs usuais. Se você for o proprietário do endereço Bitcoin, deve acessar de qualquer um dos IPs registrados e modificar as preferências de segurança em seu Perfil, se desejar.'},{ vl: 'Endereço Bitcoin válido, primeiro acesso a CoinstoBitcoins !'},{ vl: 'Não é um endereço Bitcoin válido !'}],                                             
            ],
      },
      f_checkUserNew: {
       txt: [
          [{ vl: '¡ La Dirección Bitcoin ya tiene cuenta creada en Contobit '},{ vl: '¡ Dirección Bitcoin válida, sin cuenta creada en Contobit, continue... !'},{ vl: '¡ No es una Dirección Bitcoin válida !'}],
          [{ vl: 'The Bitcoin Address already has an account created in Contobit !'},{ vl: 'Valid Bitcoin address, no account created in Contobit, continue ... !'},{ vl: 'Not a valid Bitcoin Address !'}],
          [{ vl: 'L`Adreça Bitcoin ja té compte creat a Contobit !'},{ vl: 'Adreça Bitcoin vàlida, sense compte creat a Contobit, continue ... !'},{ vl: 'No és una adreça Bitcoin vàlida !'}],
          [{ vl: 'O endereço Bitcoin já tem uma conta criada em Contobit !'},{ vl: 'Endereço Bitcoin válido, nenhuma conta criada em Contobit, continue ...!'},{ vl: 'Não é um endereço Bitcoin válido !'}],                                             
            ],
      },
      f_login: {
       txt: [
          [{ vl: ' ¡ La Dirección Bitcoin acaba de ingresar en la plataforma  Contobit.com !'}],
          [{ vl: ' The Bitcoin Address has just entered the Contobit.com platform !'}],
          [{ vl: ' L`Adreça Bitcoin acaba d`ingressar a la plataforma Contobit.com !'}],
          [{ vl: ' O endereço Bitcoin acabou de entrar na plataforma Contobit.com !'}],                                             
            ],
      },

    };
  },
  filters: {
    currencydecimal(value) {
      return Number(value).toFixed(2);
    },
    reduaddr(value) {
      return value.substr(0, 8);
    },
  },
  computed: {
    ...mapGetters(["estaActivo",
      "selectedlang"]),
  },
  mounted() {
    //console.log('hola mundo desde mounted')
    this.getcopiar();
  },
  created() {
    this.listarUsers();
  },

  methods: {
    ...mapMutations(["obtenerUsuario"]),
    ...mapActions(["guardarUsuario", "leerToken", "cerrarSesion",
      "syncUpdateLang"]),
    svl() {
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
    onDecode(decodedString) {
      if (decodedString !== null) {
        //console.log(decodedString.substr(0, 8));
        //console.log(decodedString.substr(8, 48));        
        if (decodedString.substr(0, 8) === 'bitcoin:') {
          decodedString = decodedString.substr(8, 48);  
        }
        this.usuario.NOMBREUSUARIO = decodedString.trim();
        this.verqrget = false;
        this.pasteUser(this.usuario.NOMBREUSUARIO);
      }
    },
    onDecode_firm(decodedString) {
      if (decodedString !== null) {
        //console.log(decodedString.substr(0, 8));
        //console.log(decodedString.substr(8, 48));        
        if (decodedString.substr(0, 8) === 'bitcoin:') {
          decodedString = decodedString.substr(8, 48);  
        }
        this.firma = decodedString.trim();
        this.verqrget = false;
        this.pasteFirmaEntrar(this.firma);
      }
    },
    onDecode_firmcrea(decodedString) {
      if (decodedString !== null) {
        //console.log(decodedString.substr(0, 8));
        //console.log(decodedString.substr(8, 48));        
        if (decodedString.substr(0, 8) === 'bitcoin:') {
          decodedString = decodedString.substr(8, 48);  
        }
        this.firma = decodedString.trim();
        this.verqrget = false;
        this.pasteFirmaCrear(this.firma);
      }
    },        
    async onInit (promise) {
        try {
          await promise
        } catch (error) {
          if (error.name === 'NotAllowedError') {
            this.error = "ERROR: you need to grant camera access permisson"
          } else if (error.name === 'NotFoundError') {
            this.error = "ERROR: no camera on this device"
          } else if (error.name === 'NotSupportedError') {
            this.error = "ERROR: secure context required (HTTPS, localhost)"
          } else if (error.name === 'NotReadableError') {
            this.error = "ERROR: is the camera already in use?"
          } else if (error.name === 'OverconstrainedError') {
            this.error = "ERROR: installed cameras are not suitable"
          } else if (error.name === 'StreamApiNotSupportedError') {
            this.error = "ERROR: Stream API is not supported in this browser"
          }
        }
    },         
    login() {
      this.axios
        .post("/login", this.usuario)
        .then((res) => {
          // console.log(res.data.token);
          //console.log(res.data.usuarioDB.NOMBREUSUARIO);
          const token = res.data.token;

          this.usuarioDB = res.data.usuarioDB;
          let noti_nomuser = res.data.usuarioDB._id;
          let noti_email = res.data.usuarioDB.EMAILUSUARIO;

          // antes guardar usuario verificar firma aqui
          this.singUp = false;
          this.show1 = false;
          this.show = true;
          if (this.firmaok) { 
                      this.guardarUsuario(token); // if checkinfirma  **** ojo es sin el ! probando*******

                        // alerta y email al usuario del ingreso a la plataforma***
                      let config = {
                          headers: {
                            token: token,
                          },
                      };                        
                        this.nota.nombre = "login";
                        this.nota.descripcion = " 👤 " + res.data.usuarioDB.NOMBREUSUARIO + " LOGIN !! " + this.f_login.txt[this.svl()][0].vl;
                  
                        this.axios
                          .post(
                            `/nueva-a-otro/${noti_nomuser},${noti_email}`,
                            this.nota,
                            config
                          )
                          .then((res) => {
                            this.nota.nombre = "";
                            this.nota.descripcion = "";
                            this.mensaje.color = "success";
                            this.mensaje.texto = this.this.f_login.txts[this.svl()][0].vl;
                            this.showAlert();
                            //router.push({ name: "About" });                            
                          })
                          .catch((e) => {
                            console.log(e.response);
                          });
                           
          }
        })
        .catch((error) => {
          //console.log(err.response.data.mensaje);
          //this.mensaje = err.response.data.mensaje;
        });
    },
    getcopiar() {
      let text = " ";
      let chars = "abcdefghijklmnopqrstuvwxyz1234567890";
      for (let i = 0; i < 16; i++) {
        text += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      this.aCopiar = text.trim();
    },
    rndStr(len) {
      // no hace falta lo hace la funcion de encima personalizada
      let text = " ";
      let chars = "abcdefghijklmnopqrstuvwxyz1234567890";
      for (let i = 0; i < len; i++) {
        text += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return text;
    },
    alertacop() {
      this.mensaje.color = "success";
      this.mensaje.texto = this.f_alertacop.txt[this.svl()][0].vl;      
      this.showAlert();
    },
    listarUsers() {
      // solo se activa la vista para visionar en desarrollo
      this.axios
        .get("/User")
        .then((res) => {
          //    console.log(res.data);
          this.User = res.data;
        })
        .catch((e) => {
         // console.log(e.response);
        });
    },
    pintaBtc(firma) {
     // console.log('llega a la func con firma ..... ' + firma);
      let firmaB64 = Buffer.from(firma).toString("base64");
      let addressB64;
      if (this.usuario.NOMBREUSUARIO) {
        addressB64 = this.usuario.NOMBREUSUARIO;
      }
      if (this.UserNew.NOMBREUSUARIO) {
        addressB64 = this.UserNew.NOMBREUSUARIO;
      }   
      addressB64 = Buffer.from(addressB64).toString("base64");

      let aCopiarB64 = this.aCopiar;
      aCopiarB64 = Buffer.from(aCopiarB64).toString("base64");
     
      this.axios
        .get(`/rpc-checkf/${addressB64},${firmaB64},${aCopiarB64}`)
        .then((res) => {
         // console.log(res.data);
          if (res.data === true) {
            this.firmaok = true;
      this.mensaje.texto = this.f_pintaBtc.txt[this.svl()][0].vl;             
            this.mensaje.color = "success";
            this.showAlert();
            this.login();
            return true;
          } else {
            this.firmaok = false;
      this.mensaje.texto = this.f_pintaBtc.txt[this.svl()][1].vl;             
            this.mensaje.color = "danger";
            this.showAlert();
            return false;
          }
        })
        .catch((e) => {
          //console.log(e.response);
          this.firmaok = false;
      this.mensaje.texto = this.f_pintaBtc.txt[this.svl()][1].vl;
          this.mensaje.color = "danger";
          this.showAlert();
          return false;
        });
    },    
    pintaBtccrear(firma) {
      let firmaB64 = Buffer.from(firma).toString("base64");
      let addressB64;
      if (this.usuario.NOMBREUSUARIO) {
        addressB64 = this.usuario.NOMBREUSUARIO;
      }
      if (this.UserNew.NOMBREUSUARIO) {
        addressB64 = this.UserNew.NOMBREUSUARIO;
      }
      addressB64 = Buffer.from(addressB64).toString("base64");
      let aCopiarB64 = this.aCopiar;
      aCopiarB64 = Buffer.from(aCopiarB64).toString("base64");
      this.axios
        .get(`/rpc-checkf/${addressB64},${firmaB64},${aCopiarB64}`)
        .then((res) => {
         // console.log(res.data);
          if (res.data === true) {
            this.firmaok = true;
      this.mensaje.texto = this.f_pintaBtc.txt[this.svl()][0].vl;
            this.mensaje.color = "success";
            this.showAlert();
            this.agregarUsuario();
            return true;
          } else {
            this.firmaok = false;
      this.mensaje.texto = this.f_pintaBtc.txt[this.svl()][1].vl;
            this.mensaje.color = "danger";
            this.showAlert();
            return false;
          }
        })
        .catch((e) => {
        //  console.log(e.response);
          this.firmaok = false;
      this.mensaje.texto = this.f_pintaBtc.txt[this.svl()][1].vl;
          this.mensaje.color = "danger";
          this.showAlert();
          return false;
        });
    },
    agregarUsuario() {
      // antes guardar usuario verificar firma aqui

      this.show1 = false; //***************************** comentada para saltar verificación firma
      this.show2 = true; //***************************** comentada para saltar verificación firma

      if (this.firmaok) {
        //***************************** comentada para saltar verificación firma
      axios
        .get("https://api.ipify.org?format=json")
        .then((response) => {         
            this.UserNew.IP1 = response.data.ip;
         // console.log("IP del usuario..." + this.UserNew.IP1);

        this.axios
          .post("/nuevo-usuario", this.usuario)
          .then((res) => {
            this.User.push(res.data);
            this.show2 = false;
            this.show1 = true;
            this.signUp = false;
            this.mensaje.color = "success";
            this.dismissSecs = 10;
      this.mensaje.texto = this.f_agregarUsuario.txt[this.svl()][0].vl;              
            this.showAlert();
            this.dismissSecs = 5;
            this.dirvalid = true;
            this.login();

          })

          .catch((e) => {
          //  console.log(e.response);
            if (e.response.data.error) {
              this.mensaje.texto =
                e.response.data.error.errors.NOMBREUSUARIO.message;
            } else {
      this.mensaje.texto = this.f_agregarUsuario.txt[this.svl()][1].vl;               
            }
            this.mensaje.color = "danger";
            this.showAlert();
          });

          })
          .catch((e) => {
          console.log(e.response);
          });
      } else {
        //***************************** comentada para saltar verificación firma
        this.mensaje.color = "success"; //***************************** comentada para saltar verificación firma
      this.mensaje.texto = this.f_agregarUsuario.txt[this.svl()][2].vl;         
        this.showAlert(); //***************************** comentada para saltar verificación firma
      } //***************************** comentada para saltar verificación firma
    },
    pasteUser(valor) {
      this.isPaste = true;
      if (this.isPaste) {
        this.mensaje.color = "info";
        this.mensaje.texto = this.f_pastes.txt[this.svl()][0].vl + valor;       
        this.showAlert();
        this.isPaste = false;
        if (valor) {
          this.checkUser(valor);
        }
      }
    },
    pasteUserNew(valor) {
      this.isPaste = true;
      if (this.isPaste) {
        this.mensaje.color = "success";
        this.mensaje.texto = this.f_pastes.txt[this.svl()][0].vl + valor;  
        this.showAlert();
        this.isPaste = false;
        if (valor) {
          this.checkUserNew(valor);
        }
      }
    },
    pasteFirmaEntrar(valor) {
      this.isPaste = true;
      if (this.isPaste) {
        this.mensaje.color = "success";
        this.mensaje.texto = this.f_pastes.txt[this.svl()][0].vl + valor;   
        this.showAlert();
        this.isPaste = false;
        this.pintaBtc(valor);
      }
    },    
    pasteFirmaCrear(valor) {
      this.isPaste = true;
      if (this.isPaste) {
        this.mensaje.color = "success";
        this.mensaje.texto = this.f_pastes.txt[this.svl()][0].vl + valor; 
        this.showAlert();
        this.isPaste = false;
        this.pintaBtccrear(valor);
      }
    },
    checkUser(address) {
      let addressB64 = address;
      addressB64 = Buffer.from(addressB64).toString("base64");
      // comprobamos que sea una direccion bitcoin válida
      this.axios
        .get(`/rpc-checkaddrvalid/${addressB64}`)
        .then((res) => {
          // console.log(res.data);
          if (res.data === true) {  // cuenta ya registrada en ususrios
            // comprobamos que la direccion exista en usuarios
            this.axios
              .get(`/seekUser/${addressB64}`)
              .then((res) => {
                //console.log(res.data.NOMBREUSUARIO);
               // console.log(res.data._id);
                this.address_id = res.data._id;
                this.address_email = res.data.EMAILUSUARIO;
                this.controlbyip = res.data.IPSHABITUALES;
                //console.log("control por ip recibido.."+this.controlbyip);
                if (this.controlbyip === true) {
                  this.IP1 = res.data.IP1;
                  this.IP2 = res.data.IP2;
                }
                            axios
                              .get("https://api.ipify.org?format=json")
                               .then((response) => {
                               // console.log("IP de la conexión..." + response.data.ip);
                              this.ip_conexion = response.data.ip;
                              
                 
      this.mensaje.texto = this.f_checkUser.txt[this.svl()][0].vl;                  
                this.mensaje.color = "success";
                this.showAlert();
      //  if sino control ip enabled o si enabled y no coinciden ip1 o ip2
           if (this.controlbyip === false) { 
             // console.log("control por ip false.."+this.controlbyip);     // sin control de ips activado
                this.dirvalid = true;
                this.login();
           } else {                  // con control de ip activado
                // if ip1 o ip2 else mje 
                //console.log("control por ip true.."+this.controlbyip);
                //console.log(" ip conexion actual .."+this.ip_conexion);                
                //console.log("ip1..."+this.IP1); console.log("ip2..."+this.IP2);
                if (this.ip_conexion === this.IP1 | this.ip_conexion === this.IP2) {
                this.dirvalid = true;
                this.login();
                } else {
                  // swal control de ip activo para la adres no coincide... ni validamos ni login solo mje
                  Swal.fire({
                              icon: 'error',
                              title: this.f_checkUser.txt[this.svl()][1].vl,
                              text: this.f_checkUser.txt[this.svl()][2].vl,
                            })
                }

           }

              })
              .catch((e) => {}); 
             // ir a firma de entrar

              })
              .catch((e) => {
                //console.log(e.response);
      this.mensaje.texto = this.f_checkUser.txt[this.svl()][3].vl;                  
                this.mensaje.color = "warning";
                this.showAlert();
                //  procedemos a crear Cuenta nueva en bd  ***********************************  ***** **** ***** *****
                //  aquí
                this.dirvalid = false;
                this.agregarUsuario();
              });
          } else {
      this.mensaje.texto = this.f_checkUser.txt[this.svl()][4].vl;             
            this.mensaje.color = "danger";
            this.showAlert();
            this.dirvalid = false;
          }
        })
        .catch((e) => {
          //console.log(e.response);
          this.dirvalid = false;
      this.mensaje.texto = this.f_checkUser.txt[this.svl()][4].vl; 
          this.mensaje.color = "danger";
          this.showAlert();
        });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    checkUserNew(address) {
      let addressB64 = address;
      addressB64 = Buffer.from(addressB64).toString("base64");
      // comprobamos que sea una direccion bitcoin válida
      this.axios
        .get(`/rpc-checkaddrvalid/${addressB64}`)
        .then((res) => {
         // console.log(res.data);
          if (res.data === true) {
            // comprobamos que la direccion exista en usuarios
            this.axios
              .get(`/seekUser/${addressB64}`)
              .then((res) => {
                //console.log(res.data.NOMBREUSUARIO);
                this.mensaje.texto = this.f_checkUserNew.txt[this.svl()][0].vl;                  
                this.mensaje.color = "warning";
                this.showAlert();
              })
              .catch((e) => {
                console.log(e.response);
                this.mensaje.texto = this.f_checkUserNew.txt[this.svl()][1].vl;                   
                this.mensaje.color = "success";
                this.showAlert();
              });
          } else {
            this.mensaje.texto = this.f_checkUserNew.txt[this.svl()][2].vl; 
            this.mensaje.color = "danger";
            this.showAlert();
          }
        })
        .catch((e) => {
         // console.log(e.response);
          this.dirvalid = false;
          this.mensaje.texto = this.f_checkUserNew.txt[this.svl()][2].vl;
          this.mensaje.color = "danger";
          this.showAlert();
        });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>

<style lang="scss" scoped>
.popper {
    z-index: 100;
    color: white;
    background-color: black;
    border-radius: 6px;
    padding: 5px 10px 1px;
    min-width: 240px;    
    max-width: 540px;
    max-inline-size: 540px;
    writing-mode: horizontal-tb;    
    max-height: 360px;
    text-align: left;
}
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
.popper_scanqr {
    z-index: 5;
    color: black;
    background-color: red;
    border-radius: 6px;
    padding: 1px 1px 1px 1px;
    max-width: 300px;  
    max-height: 300px;
    -moz-box-shadow: rgb(148, 148, 148) 0 0 6px 0;
    -webkit-box-shadow: rgb(148, 148, 148) 0 0 6px 0;
    box-shadow: rgb(148, 148, 148) 0 0 6px 0;    
}
#sube {
  display: flex;
  padding-bottom: 10px;
  margin-bottom: 15px;
  margin-top: -90px;
  margin-left: 235px;
  color: grey;
  width: 30px;
  height: 20px;
  background: transparent;
  a {
    padding-left: 1px;
    padding-right: 1px;
    margin-left: -1px;
    margin-top: 2px;
    height: 40px;
  }
}
#baja {
  display: flex;
  padding-bottom: 1px;
  margin-bottom: 1px;
  margin-top: 1px;
  margin-left: -15px;
  color: grey;
  width: 30px;
  height: 20px;
  background: transparent;
  a {
    padding-left: 1px;
    padding-right: 1px;
    margin-left: -1px;
    margin-top: 2px;
    height: 35px;
  }
}

.container {
  position: relative;
  width: 360px;
  height: auto;
  min-height: 360px;
  border-radius: 10px;
  // overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to bottom, rgb(246, 251, 255), rgb(233, 245, 255));
  padding: 1px;

  .overlay-container {
    position: absolute;
    top: 10;
    left: 50%;
    width: 50%;
    height: 95%;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    z-index: 100;
    border-radius: 5px;
  }

  .overlay {
    position: relative;
    left: -100%;
    height: 140%;
    width: 200%;
    background: linear-gradient(to bottom right, rgb(63, 82, 44), #009345);
    color: #fff;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
  }

  @mixin overlays($property) {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 70px 40px;
    width: calc(50% - 20px); // centrar el contenido de bienvenida
    height: calc(100% - 140px);
    text-align: center;
    transform: translateX($property);
    transition: transform 0.5s ease-in-out;
  }

  .overlay-left {
    @include overlays(-20%);
  }

  .overlay-right {
    @include overlays(0);
    right: 0;
  }
}
h1 {
  margin: 0;
}
h2 {
  margin: 20;
}
h3 {
  margin: 20;
}
p {
  margin: 20px 0 10px;
}

button {
  margin-top: 30px;
  border-radius: 20px;
  border: 1px solid #02dd68;
  background-color: #2b8656;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 5px 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.1s ease-in;

  &:active {
    transform: scale(0.9);
  }

  &:focus {
    outline: none;
  }
}
a {
  margin: 1px 0;
  font-size: 0.9rem;
}
button.invert {
  background-color: transparent;
  border-color: #fff;
}

form {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 30px 30px;
  width: calc(50% - 120px);
  height: calc(100% - 180px);
  text-align: center;
  background: linear-gradient(to bottom, #efefef, #ccc);
  transition: all 0.5s ease-in-out;

  div {
    font-size: 1rem;
  }

  input {
    background-color: #eee;
    border: none;
    padding: 17px 15px;
    margin: 17px 0;
    width: calc(105% - 1px);
    border-radius: 15px;
    border-bottom: 1px solid #ddd;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff,
      0 1px 0 #fff;
    overflow: hidden;

    &:focus {
      outline: none;
      background-color: #fff;
    }
  }

    .floating-label-group {
      position: relative;
      margin-top: 5px;
      margin-bottom: 15px;
      margin-left: 30px;
      display: inline-flex;

      .floating-label {
        font-size: 20px;
        color: #a2a2a2;
        position: absolute;
        pointer-events: none;
        top: 32px;
        left: 17px;
        transition: all 0.3s ease;
      }

      input:focus ~ .floating-label,
      input:not(:focus):valid ~ .floating-label {
        top: 17px;
        bottom: 0px;
        left: 0px;
        font-size: 11px;
        opacity: 1;
        color: #404040;
        background-color: transparent;
      }    
    }
    .floating-label-group-ro {
      position: relative;
      margin-top: 15px;
      margin-bottom: 25px;

      .floating-label-ro {
        position: absolute;        
        top: 5px;
        bottom: 0px;
        left: 0px;
        font-size: 11px;
        opacity: 1;
        color: #404040;
        background-color: transparent;
      }

      input:focus ~ .floating-label-ro,
      input:not(:focus):valid ~ .floating-label-ro {
        top: 5px;
        bottom: 0px;
        left: 0px;
        font-size: 11px;
        opacity: 1;
        color: #404040;
        background-color: transparent;
      }    
    }

}

.sign-in {
  border-radius: 10px;
  top: 1px;
  left: 0;
  z-index: 2;
  width: 99%;
  height: 99%;
  background: linear-gradient(to bottom right, rgb(53, 66, 90), #2a323d);
    color: #fff;  
}

.sign-up {
  top: 1px;
  left: 0;
  z-index: 1;
  opacity: 0;
  width: 50%;
  height: 97%;
}

.sign-firm {
  border-radius: 10px;
  background: linear-gradient(to bottom right, rgb(246, 251, 255), rgb(233, 245, 255));
  top: 1px;
  left: 1px;
  z-index: 1;
  width: 99%;
  height: 99%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /*  .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.sign-up-active {
  .sign-in {
    transform: translateX(100%);
  }

  .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.5s;
  }

  .overlay-container {
    transform: translateX(-100%);
  }

  .overlay {
    transform: translateX(50%);
  }

  .overlay-left {
    transform: translateX(0);
  }

  .overlay-right {
    transform: translateX(20%);
  }
}

@keyframes show {
  
  0% {
    opacity: 0;
    z-index: 1;
  }
  49% {
    opacity: 0;
    z-index: 1;
  }
  50% {
    opacity: 1;
    z-index: 10;
  }
}
.error {
  font-weight: bold;
  color: red;
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

  #siokinput {
    input {
      background: rgb(246, 251, 255);
      color: rgb(73, 73, 73);
      font-size: 20px;
    }
  }

  #nookinput {
    input {
      background: rgb(250, 221, 221);
      color: rgb(138, 0, 0);
      font-size: 20px;
    }
  }
#inp_prev {
   z-index: 1;
   margin-top: 19.5px;
   margin-left: -25px;
   margin-right: -20px;   
   font-size: 19px;
   font-weight: 100; 
   color: #c4c4c4;
   width: 40px;
   background-color: transparent;        
}
#inp_in_hlp {
   margin-top: 35px;
   margin-left: -24px; 
   font-size: 20px; 
   color: #c4c4c4;       
} 
#inp_solic {
    color:black;
    min-width: 310px;
    display: flex;
    margin-left: -17px;
    padding: 10.5px 30px 7.5px 40px;
    letter-spacing: 0.5px;
    min-height: 57.5px;
    font-size: 22px;        
}
.shake {
  animation: shake-animation 5.72s ease;
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


@media screen and (max-width: 480px) {
.container {
  min-height: 400px;
    }
.popper {
  margin-left: 345px;
  max-width: 345px;
  max-inline-size: 330px;
}
.popper_tl {
    margin-left: -160px;
    max-width: 320px;
    max-inline-size: 320px;
}
.popper_scanqr {
    margin-right: 65px;
    max-width: 300px;
    max-inline-size: 300px;   
}    
    
}

</style>
<template>
<div id="Txc">
  <div class="container">
  <div class="view">
   
      <!-- ********************************** INICIO BLOQUE COMPRADOR **********************************************-->
      <!-- ********************************** INICIO BLOQUE COMPRADOR **********************************************-->
      
      <div v-if="nomuser === tx.COMPRADOR">
         
      <b-alert :show="dismissCountDown" dismissible :variant="mensaje.color" @dismissed="dismissCountDown = 0"
        @dismiss-count-down="countDownChanged">{{ mensaje.texto }}</b-alert> 
               
        <div id="demo1">
          <transition name="fade">
            <div v-if="show1">
              <article>
                <div class="container" :class="{ 'sign-up-active': signUp }">

                  <!-- ///////////////////////////// solicitud  COMPRADOR ////////////////BLOQUE COMPRADOR/////////-->                  

                  <div v-if="tx.TIMELINE === '1.Oferta'">
                    <form @submit.prevent="updateSolicitud()" :class="signinn ? 'sign-in' : 'sign-inln'" action="#">                    
                      <h4>
                        <font color="grey">
                          <b>{{tit_table_tx_encurso_td.td_momentum[svl()][1].vl}}. {{tit_table_tx_encurso_td.td_rol[svl()][0].vl}}</b>
                        </font>
                      </h4>
                      <!--v-model="tx.IMPORTEMONEDA -->
                      
                      <span class="floating-label-group">
                      <span v-if='oferta.MONEDAOFERTA === "EUR"'  id="inp_prevcant">💶</span>
                      <span v-else-if='oferta.MONEDAOFERTA === "VES"'  id="inp_prevcant">Bs</span>
                      <span v-else-if='oferta.MONEDAOFERTA === "BRL"'  id="inp_prevcant">R$</span>
                      <span v-else-if='oferta.MONEDAOFERTA === "PEN"'  id="inp_prevcant">s/.</span>
                      <span v-else-if='oferta.MONEDAOFERTA === "IRR"'  id="inp_prevcant">﷼</span>
                      <span v-else-if='oferta.MONEDAOFERTA === "INR"'  id="inp_prevcant"> </span>
                      <span v-else-if='oferta.MONEDAOFERTA === "CNY"' 
                      id="inp_prevcant">¥</span>
                      <span v-else-if='oferta.MONEDAOFERTA === "RUB"' 
                      id="inp_prevcant">₽</span>
                      <span v-else-if='oferta.MONEDAOFERTA === "TRY"' 
                      id="inp_prevcant">Kr</span>
                      <span v-else id="inp_prevcant">💵</span>                      
                      <input id="inp_solic" type="text" v-model="cdadmoncompra"
                      autocomplete="off" autofocus  @blur="cdadmoncompr()"
                      @keyup.enter="cdadmoncompr()" required />
				                <label class="floating-label">{{C_dad.Cantidad[svl()][0].vl}} {{ this.oferta.MONEDAOFERTA }} {{C_dad.a_pagar[svl()][0].vl}}</label>
                        <popper
                              trigger="clickToOpen"
                              :options= popoptionsb>
                              <div class="popper_tl" style="margin-left: -300px">                         
                                  <br><b>{{caps.mtx[svl()][1].vl}}. {{C_dad.Cantidad[svl()][0].vl}} (
                                  {{this.oferta.MONEDAOFERTA}}</b> 
                                  <span v-html="hlp_cdad.pt2[svl()][0].vl"></span>
                                  {{this.oferta.MONEDAOFERTA}} 
                                  <span v-html="hlp_cdad.pt3[svl()][0].vl"></span>
                              </div>                
                              <a  href="#" slot="reference" >                               
                                <font-awesome-icon id="inp_in_hlp" :icon="['far', 'question-circle']" />
                              </a>
                        </popper>                        
			                </span>                        

                      <span class="floating-label-group">
                      <span id="inp_prevcant">₿</span>                         
                      <input id="inp_solic" type="text" v-model="cdadbtccompra" autocomplete="off" autofocus @blur="cdadbtccompr()" @keyup.enter="cdadbtccompr()"
                        required />
				                <label class="floating-label">{{C_dad.Cantidad[svl()][0].vl}} BTC {{C_dad.a_comprar[svl()][0].vl}}</label>
                        <popper
                              trigger="clickToOpen"
                              :options= popoptionsb>
                              <div class="popper_tl" style="margin-left: -300px">                         
                                  <span v-html="hlp_cdad_btc.mtx[svl()][0].vl"></span> 
                              </div>                
                              <a  href="#" slot="reference" >
                                <font-awesome-icon  id="inp_in_hlp" :icon="['far', 'question-circle']" />
                              </a>
                        </popper>                         
			                </span>                         

                        <span v-if="this.destinovalid === '✅' & tx.CADENARED !== '⚡'" id="siokinput">
                          <span class="floating-label-group">
                              <input id="inp_destino" type="text" 
                                v-model="destino" @paste="pasteDESTINO(destino)" @input="pasteDESTINO(destino)" required />
                            <label v-if="tx.CADENARED === '₿'" class="floating-label">{{Entrega_de_la_compra.vars[svl()][4].vl}}</label>
                          </span>         
                        </span>
                        <div v-if="this.destinovalid === '❌' & tx.CADENARED !== '⚡'" id="nookinput" class="shake" >
                          <span class="floating-label-group">

                            <span id="inp_prevcant">
                                  <popper
                                      trigger="clickToOpen"     
                                      :options= popoptionsl>
                                      <div class="popper_scanqr" style="margin-left:260px;margin-top:-240px;">                         
                                          <qrcode-stream
                                            @decode="onDecodedestiny" style="width: 298px; height: 298px;"><span style="font-size:12px;">{{Textos_qrcode.vars[svl()][1].vl}}{{Entrega_de_la_compra.vars[svl()][4].vl}}</span></qrcode-stream> 
                                      </div>                
                                      <a href="#" slot="reference" @click="verqrget = !verqrget">
                                        <popper
                                                :options= popoptions>
                                                <div class="popper" >                         
                                                    <span v-html="Textos_qrcode.vars[svl()][2].vl"></span> {{Entrega_de_la_compra.vars[svl()][4].vl}} 
                                                </div>                
                                                <a href="#" slot="reference">
                                                  <img
                                                      align="right"
                                                      style="margin-top: 0px;margin-left: -1px;"
                                                      src="https://www.contobit.com/img/scanqr.jpg"
                                                      width="24px"
                                                      height="22px"
                                                  />
                                                </a>
                                        </popper>      
                                      </a>
                                  </popper>
                            </span> 

                              <input id="inp_destino" type="text"
                              style="padding-left:30px;padding-right:30px;" 
                                autocomplete="off" autofocus
                                v-model="destino" @paste="pasteDESTINO(destino)" @input="pasteDESTINO(destino)" @change="pasteDESTINO(destino)" required />
                            <label v-if="tx.CADENARED === '₿'" class="floating-label">{{Entrega_de_la_compra.vars[svl()][4].vl}}</label>
                            <label v-if="tx.CADENARED === '⚡'" class="floating-label">{{Entrega_de_la_compra.vars[svl()][7].vl}}</label>                            
                            <popper
                                  trigger="clickToOpen"
                                  :options= popoptionsb>
                                  <div class="popper_tl" style="margin-left: -300px">                         
                                      <span
                                      v-html="Entrega_de_la_compra.hlp[svl()][0]. vl"></span>
                                  </div>                
                                  <a  href="#" slot="reference" > <!-- class="btn btn btn-sm" -->
                                    <font-awesome-icon id="inp_in_hlp" :icon="['far', 'question-circle']" />
                                  </a>
                            </popper>
                          </span>
                        </div>
                                              
                      <br>
                      <b-form-checkbox v-model="contratoSIcomprador" value="✅" unchecked-value="❌" required>
                        {{Acepto_terminos_del.mtx[svl()][0].vl}}

                        <popper 
                              trigger="clickToOpen"
                              :options= popoptions>
                              <div class="popper_tl"> 
                                  <span v-if="tx.CADENARED === '₿'" v-html="help_CONTRATO_BITCOIN_MULTIFIRMA.pte1[svl()][0].vl"></span>
                                  <span v-if="tx.CADENARED === '⚡'" v-html="CONTRATO_BITCOIN_MULTIFIRMA_LN.hlp_pte1[svl()][0].vl"></span>                                  
                                  <i><b><a :href= 
                                  "this.url+this.tx.COMPRADOR" target="_blank">
                                  <font color=mediumseagreen>{{this.tx.COMPRADOR}} </font></a></b></i><br>
                                  <i><span v-html="help_CONTRATO_BITCOIN_MULTIFIRMA.pte2[svl()][0].vl"></span><b> 
                                  <a :href="this.url + this.oferta.NOMBREUSUARIO" target="_blank"> <font color=RED>{{this.oferta.NOMBREUSUARIO}} </font></a></b></i><br>
                                  <i><span v-html="help_CONTRATO_BITCOIN_MULTIFIRMA.pte3[svl()][0].vl"></span><b> <a :href="this.url + this.User.ARBITRAJE" target="_blank">
                                  <font color=DodgerBlue>{{this.User.ARBITRAJE}} </font></a></b></i><br>
                                  <span v-html="help_CONTRATO_BITCOIN_MULTIFIRMA.pte4[svl()][0].vl"></span> <font color=red>{{this.cdadbtccompra}}</font> 
                                  <span v-html="help_CONTRATO_BITCOIN_MULTIFIRMA.pte5[svl()][0].vl"></span> 
                                  <font color=mediumseagreen>{{this.cdadmoncompra}} 
                                  {{this.oferta.MONEDAOFERTA}}</font> 
                                  <span v-if="tx.CADENARED === '₿'" v-html="help_CONTRATO_BITCOIN_MULTIFIRMA.pte6_comprador[svl()][0].vl"></span>
                                  <span v-if="tx.CADENARED === '⚡'" v-html="CONTRATO_BITCOIN_MULTIFIRMA_LN.pte6_comprador[svl()][0].vl"></span>                                    
                              </div>                
                              <a  href="#" slot="reference" > <!-- class="btn btn btn-sm" -->
                                {{CONTRATO_destino.mtx1[svl()][0].vl}}
                              </a>
                        </popper>                        

                      </b-form-checkbox>

                      <div>
                        {{Estado_var.mtx[svl()][0].vl}}:
                        <strong>
                          <i>{{ this.contratoSIcomprador }}</i>
                        </strong>
                      </div>

                        <popper 
                              trigger="clickToOpen"
                              :options= popoptions>
                              <div class="popper_tl" style="margin-left: 0px"> 
                                    <span
                                     v-html="Facilitar_liberacion_de_solicitud.tlp_pt1_LN[svl()][0].vl"></span>  
                                      <span v-html="Facilitar_liberacion_de_solicitud.tlp_pt2[svl()][0].vl"></span> 
                                    {{this.oferta.NOMBANCO}} 
                                    <span v-html="Facilitar_liberacion_de_solicitud.tlp_pt3[svl()][0].vl"></span> 
                                    {{this.oferta.GRUPOBANCO}} 
                                    <b>- <font color=yellow> 
                                    {{this.oferta.NOMBANCO}} </font></b>
                                    <span v-html="Facilitar_liberacion_de_solicitud.tlp_pt4[svl()][0].vl"></span> {{this.oferta.NOMBANCO}}.  <span v-html="Facilitar_liberacion_de_solicitud.tlp_pt7[svl()][0].vl"></span>
                              </div>                
                              <a  href="#" slot="reference" > <!-- class="btn btn btn-sm" -->
                                {{Facilitar_liberacion_de_solicitud.mtx[svl()][1].vl}}
                                <font-awesome-icon :icon="['far', 'question-circle']" />
                              </a>
                        </popper> 

                      <br /><br />
                      <b-button variant="outline-primary btn-success btn-block" type="submit">
                        <img align="bottom" src="https://www.contobit.com/imagens/carrito.png" width="25px"
                          height="17.4px" />
                        <img /> {{Solicitar_var.mtx[svl()][0].vl}}
                      </b-button>
                    </form>
                  </div>

                  <div v-if="
                      (tx.TIMELINE === '2.Solicitud')
                    ">
                    
                    <form @submit.prevent="updateAceptada()" :class="signinn ? 'sign-in' : 'sign-inln'" action="#">
                      <h4>
                        <font color="grey">
                          <b> {{tit_table_tx_encurso_td.td_momentum[svl()][2].vl}}</b>
                        </font>
                      </h4>

                    <span v-if="tx.DOCS_COMPRADOR === '⏳'">

                     {{en_espera_de.tx1[svl()][2].vl}}

                    </span>
                    <span v-if="tx.DOCS_COMPRADOR === '✅'">

                      <span v-if="!fee_OK & tx.RAWTXUNSIGNED === '⏳' & this.tx.SIZERAW > 0 & tx.CADENARED === '₿'">
                      <font color="Gray" size="2">
                         {{en_espera_de.tx1[svl()][1].vl}}<br>
                         <span v-if="tx.CADENARED === '⚡'">({{en_espera_de.tx1[svl()][3].vl}})</span>
                      </font>
                      <b-form-select  v-model="fee_tipo.mtx[svl()][0].vl" :options="don_min.text[svl()][0].vl" size="sm"
                        class="mt-3" @input="putfee()" required>
                      </b-form-select><br />

                      <div>
                        {{pre_rati_cobro_selminers.vars[svl()][2].vl}}: <br>
                        <strong>
                          <font size=5 color="red"> - <i>{{ this.tx.FEE }}</i></font>
                        </strong>
                      </div>
                      <popper
                            trigger="clickToOpen"
                            :options= popoptionsb>
                            <div class="popper_tl" style="margin-left: 0px"> 
                              <span
                              v-html="pre_rati_cobro_selminers.hlp_selminers[svl()][0].vl"></span>                         
                            </div>                
                              <a  href="#" slot="reference" >
                                  <font-awesome-icon :icon="['far', 'question-circle']" />
                                  {{pre_rati_cobro_selminers.vars[svl()][3].vl}}
                              </a>
                      </popper>
                       <b-button variant="outline-primary btn-success btn-block" @click="savefee()">
                         {{f_updateSolicitud.txts[svl()][3].vl}}
                      </b-button>                     
                      <hr />
                      </span>                      

                     <popper 
                              trigger="clickToOpen"
                              :options= popoptionsb>
                              <div class="popper_tl" style="margin-left: 0px"> 
                                    <span
                                     v-html="TRANSACCION_en_transito.hlp_prev[svl()][0].vl"></span>
                              </div>                
                              <a  href="#" slot="reference" > <!-- class="btn btn btn-sm"  -->
                                <font color="red">
                                  <font-awesome-icon :icon="['far', 'question-circle']" />
                                </font>
                              </a>
                     </popper><br />
                      <font color="Gray" size="3">
                         {{tit_transac.enunciats[svl()][6].vl}}: {{ tx.DOCS_COMPRADOR }}
                      </font>
                    </span>

                    <span v-if="tx.RAWTXUNSIGNED !== '⏳'" style="font-size:12px;color:Gray;text-align:right;">
                      {{en_espera_de.previo[svl()][0].vl}} <br>
                      {{en_espera_de.previo[svl()][1].vl}} <br>
                      {{en_espera_de.previo[svl()][2].vl}} 
                      <span v-if="tx.RAWTXSIGNEDARB === '⏳'" > ⏳</span>
                      <span v-if="tx.RAWTXSIGNEDARB !== '⏳'" > ✅</span>     <br>                      
                      {{en_espera_de.previo[svl()][3].vl}} 
                      <span v-if="tx.RAWTXSIGNEDVEND === '⏳'" > ⏳</span>
                      <span v-if="tx.RAWTXSIGNEDVEND !== '⏳'" > ✅</span>
                      <br>
                    </span>           

                    <div v-if="tx.RAWTXSIGNEDVEND === '⏳' & tx.DOCS_COMPRADOR === '✅'">
                      <font color="Gray" size="4">
                         {{ tx.RAWTXSIGNEDVEND }} <br />{{en_espera_de.tx1[svl()][0].vl}}
                      </font>
                    </div>

                    </form>                    
                  </div>


                  <div v-if="tx.TIMELINE === '3.Contrato' & this.tx.ACEP_VENDEDOR === '✅'" >
                    <form @submit.prevent="updatePago()" :class="signinn ? 'sign-in' : 'sign-inln'" action="#">
                      <h4>
                        <font color="grey">
                          <b> {{tit_table_tx_encurso_td.td_momentum[svl()][3].vl}}. {{tit_table_tx_encurso_td.td_rol[svl()][0].vl}} </b>
                        </font>
                      </h4>

                      <font color="red">{{Pago_Comprador.vars[svl()][0].vl}}:</font>
                      {{ this.oferta.GRUPOBANCO
                      }}<b>
                        <font color="red">{{ this.oferta.NOMBANCO }}</font>
                      </b>

                    <popper v-if="tx.CADENARED === '₿'"
                          trigger="clickToOpen"
                          :options= popoptionsb>
                          <div class="popper_tl" style="margin-left: 0px"> 
                            <span
                            v-html="Pago_Comprador.hlp[svl()][0].vl"></span>
                            {{this.oferta.GRUPOBANCO}}
                             <b>- <font color=yellow>
                            {{this.oferta.NOMBANCO}} </font></b>
                            <span
                            v-html="Pago_Comprador.hlp[svl()][1].vl"></span>                          
                          </div>                
                            <a  href="#" slot="reference" > <!-- class="btn btn btn-sm" -->
                                <font color="red">
                                  <font-awesome-icon :icon="['far', 'question-circle']" />
                                </font>
                            </a>
                    </popper>                      

                    <popper v-if="tx.CADENARED === '⚡'"
                          trigger="clickToOpen"
                          :options= popoptionsb>
                          <div class="popper_tl" style="margin-left: 0px"> 
                            <span
                            v-html="Pago_Comprador.hlp_LN[svl()][0].vl"></span>
                            <a href="#open-modal13"><font color=DodgerBlue>
                            {{this.tx.DIRMULTIFIRMA_FIANZALN}}</font></a>
                            <span id="open-modal13" class="modal-window" style="margin-right:0px;top:0px;">
                                  <div>
                                    <a href="#" :title="Cerrar.mtx[svl()][0].vl" class="modal-close">❌</a>
                                    <small><font color=Black>Qr-code {{tit_transac.enunsln[svl()][2].vl}} :</font></small>
                                    <qrcode-vue :value="this.tx.DIRMULTIFIRMA_FIANZALN" :size="200" level="H"></qrcode-vue>
                                  </div>                        
                            </span>
                            <span
                            v-html="Pago_Comprador.hlp_LN[svl()][1].vl"></span>
                            <a href="#open-modal14"><font color=DodgerBlue>
                            {{this.tx.DIRMULTIFIRMA_FIANZALN}}</font></a>
                            <span id="open-modal14" class="modal-window" style="margin-right:0px;top:0px;">
                                  <div>
                                    <a href="#" :title="Cerrar.mtx[svl()][0].vl" class="modal-close">❌</a>
                                    <small><font color=Black>Qr-code {{tit_transac.enunsln[svl()][1].vl}} :</font></small>
                                    <qrcode-vue :value="this.tx.DIRMULTIFIRMA_FIANZALN" :size="200" level="H"></qrcode-vue>
                                  </div>                        
                            </span>                           
                            <span
                            v-html="Pago_Comprador.hlp_LN[svl()][2].vl"></span>
                            <a href="#open-modal15"><font color=DodgerBlue>
                            {{this.lnpayreqliber_redu}}...</font></a>
                            <span id="open-modal15" class="modal-window" style="margin-right:0px;top:0px;">
                                  <div>
                                    <a href="#" :title="Cerrar.mtx[svl()][0].vl" class="modal-close">❌</a>
                                    <small><font color=Black>Qr-code {{tit_transac.enunsln[svl()][0].vl}} :</font></small>
                                    <qrcode-vue :value="this.tx.DIRMULTIFIRMA_FIANZALN" :size="200" level="H"></qrcode-vue>
                                  </div>                        
                            </span>
                            <span
                            v-html="Pago_Comprador.hlp_LN[svl()][3].vl"></span>                           
                            {{this.oferta.GRUPOBANCO}}
                             <b>- <font color=yellow>
                            {{this.oferta.NOMBANCO}} </font></b>
                            <span
                            v-html="Pago_Comprador.hlp[svl()][1].vl"></span>                          
                          </div>                
                            <a  href="#" slot="reference" > <!-- class="btn btn btn-sm" -->
                                <font color="red">
                                  <font-awesome-icon :icon="['far', 'question-circle']" />
                                </font>
                            </a>
                    </popper>

                      <b-form-checkbox v-model="tx.PAGO_COMPRADOR" value="✅" unchecked-value="⏳" required>{{Pago_Comprador.vars[svl()][1].vl}}</b-form-checkbox>

                      <div>
                        {{Estado_var.mtx[svl()][0].vl}}:
                        <strong>
                          <i>{{ this.tx.PAGO_COMPRADOR }}</i>
                        </strong>
                      </div>

                    <popper 
                          trigger="clickToOpen"
                          :options= popoptionsb>
                          <div class="popper" style="margin-left: 0px"> 
                            <span
                            v-html="Pago_Comprador.hlp_remitir[svl()][0].vl"></span>                         
                          </div>                
                            <a  href="#" slot="reference" >
                                {{Pago_Comprador.vars[svl()][2].vl}}
                            </a>
                    </popper> 
                      <br />
                      <b-button variant="outline-primary btn-success btn-block" type="submit">
                        <img align="bottom" src="https://www.contobit.com/imagens/carrito.png" width="25px"
                          height="17.4px" />
                        <img /> {{Pago_Comprador.vars[svl()][3].vl}}
                      </b-button>
                    </form>
                  </div>

                  <!--///////////////////////////// ratificacion pago //////////////////////////////// -->

                  <!-- ///////////////////////////// pago ratificacion COMPRADOR ////////////////BLOQUE COMPRADOR/////////////////////// -->

                  <div v-if="tx.TIMELINE === '4.Pago'">
                    <form :class="signinn ? 'sign-in' : 'sign-inln'" action="#">
                      <h4>
                        <font color="grey">
                          <b> {{tit_table_tx_encurso_td.td_momentum[svl()][3].vl}}. {{tit_table_tx_encurso_td.td_rol[svl()][0].vl}} </b>
                        </font>
                      </h4>
                      <br />
                      <div>
                        {{Cobro_Vendedor.vars[svl()][0].vl}}:
                        <strong>
                          <i>{{ this.tx.PAGO_COMPRADOR }}</i>
                        </strong>
                      </div>
                      <div>
                        {{pre_rati_cobro_selminers.vars[svl()][0].vl}}:
                        <strong>
                          <i>{{ this.tx.COBRO_VENDEDOR }}</i>
                        </strong>
                      </div>                     
                      <br />
                      <div v-if="this.tx.COBRO_VENDEDOR === '⏳'">
                        <b-button variant="outline-primary btn-success btn-block" disabled>
                          <img align="bottom" src="https://www.contobit.com/imagens/carrito.png" width="25px"
                            height="17.4px" />
                          <img /> {{pre_rati_cobro_selminers.vars[svl()][4].vl}}
                        </b-button>
                      </div>
                      <div v-if="this.tx.COBRO_VENDEDOR === '✅'">
                        <b-button variant="outline-primary btn-success btn-block" disabled>
                          <img align="bottom" src="https://www.contobit.com/imagens/carrito.png" width="25px"
                            height="17.4px" />
                          <img /> {{pre_rati_cobro_selminers.vars[svl()][4].vl}}
                        </b-button>
                      </div>
                    </form>
                  </div>

                  <!--///////////////////////////// listo para entrega arbitro a comprador//////////////////////////////// -->
                  <!--///////////////////////////// entrega de bitcoins //////////////////////////////// -->

                  <!-- ///////////////////////////// entrega bitcoins lado COMPRADOR //////////BLOQUE COMPRADOR/////////////////////// -->

                  <div v-if="(tx.TIMELINE === '5.Cobro') & (tx.CADENARED === '₿')">
                    <form @submit.prevent="updateEntrega()" :class="signinn ? 'sign-in' : 'sign-inln'" action="#">
                      <h4>
                        <font color="grey">
                          <b>{{tit_table_tx_encurso_td.td_momentum[svl()][5].vl}} {{Entrega_de_la_compra.vars[svl()][0].vl}}</b>
                        </font>
                      </h4>
                          
                      <div v-if="
                          (this.tx.IDTX_ENTREGA === '⏳') &
                          (this.tx.DESTINO !== '⏳')
                        ">
                        <h4> ⏳ </h4>
                        <span style="margin-top:-10px; margin-left:37.5px;font-size:12px;">{{Entrega_de_la_compra.destino_estipulada[svl()][0].vl}}:
                        <b><i>
                            <font color="green">{{ this.tx.DESTINO }}</font>
                          </i></b><br /><hr /></span>

                   <!--  <div style="margin:25px;width:360px;height:120px;border:1px solid #aaa;border-radius: 6px;">  -->                       
                       
                      </div>
                      
                    </form>
                  </div>


                  <!--///////////////////////////// ENTREGA COMPRADOR VIA LIGHNING//////////////////////////////// -->
                  <div v-if="(tx.TIMELINE === '5.Cobro') & (tx.CADENARED === '⚡')">
                    <form @submit.prevent="updateEntrega()" :class="signinn ? 'sign-in' : 'sign-inln'" action="#">
                      <h4>
                        <font color="grey">
                          <b>{{tit_table_tx_encurso_td.td_momentum[svl()][5].vl}} {{Entrega_de_la_compra.vars[svl()][0].vl}}</b>
                        </font>
                      </h4>
                      <div v-if="
                          (this.tx.LNPAYMENTREQ_ENTREGA === '⏳') &
                          (this.tx.LNPPAYMENTREQ_ENTREGA === '⏳')  &
                          (this.tx.LNPPAYMENTREQ_COMIS === '⏳') 
                        ">
                          <span v-html="Entrega_compra_LN.vars[svl()][4].vl"></span>
                      </div>
                      <div v-if="
                          (this.tx.LNPAYMENTREQ_ENTREGA === '⏳') &
                          (this.tx.LNPPAYMENTREQ_ENTREGA === '⏳')  &
                          (this.tx.LNPPAYMENTREQ_COMIS !== '⏳') 
                        ">
                          <popper v-if="verqrget === false"
                                trigger="clickToOpen"
                                :options= popoptionsb>
                                <div class="popper_tl" style="margin-left: 0px;">                         
                                    <span v-html="Entrega_compra_LN.hlp_entrg[svl()][0].vl"></span> 
                                </div>                
                                <a  href="#" slot="reference" >
                                  <font color="red">
                                  <font-awesome-icon :icon="['far', 'question-circle']" />
                                  </font>
                                </a>
                          </popper> 

                        <span v-if="verqrget === false"><br /></span>
                        <span v-if="
                            (Qttyentrega_Ln === null) & (verqrget === false)
                          ">{{ calcQttyentrega_Ln() }}</span>
                        <span v-if="
                            (Qttyentrega_Ln !== null) & (verqrget === false)
                          ">
                          {{Entrega_compra_LN.vars[svl()][0].vl}}:
                        </span><span v-if="verqrget === false"><br /></span>
                        <a v-if="(versato === false) & (verqrget === false)" style="color: green; font-size: 20px"
                          @click="calcQttyentrega_Ln()">{{ Qttyentrega_Ln }} BTC</a>
                        <a v-if="(versato === true) & (verqrget === false)" style="color: green; font-size: 20px"
                          @click="calcQttyentrega_Ln()">{{ Qttyentrega_Ln_ensato }} Satoshis</a>
                        <font color="DodgerBlue">
                        <popper v-if="verqrget === false"
                                :options= popoptionsb>
                                <div class="popper" style="margin-left: 0px;">                         
                                    <span v-html="Entrega_compra_LN.vars[svl()][1].vl"></span> 
                                </div>                
                                <a v-if="versato === false" class="btn btn-outline-primary" slot="reference"
                                  v-clipboard:copy="Qttyentrega_Ln" @click="alertacop()" style="padding:4px 5px 0px 5px;">
                                  <font-awesome-icon :icon="['far', 'copy']" />
                                </a>
                                <a v-if="versato === true" class="btn btn-outline-primary" slot="reference"
                                  v-clipboard:copy="Qttyentrega_Ln_ensato" @click="alertacop()" style="padding:4px 5px 0px 5px;">
                                  <font-awesome-icon :icon="['far', 'copy']" />
                                </a>
                        </popper>                          
                          <span v-if="verqrget === false"><br /><br /></span>
                        </font>

                        <span v-if="verqrget === false">
                          <font color="grey" size="4">
                            <font color="Darkorange">⚡</font> {{Entrega_compra_LN.vars[svl()][2].vl}}
                          </font>
                        </span>

                        <span v-if="verqrget === true">
                          <popper
                                trigger="clickToOpen"
                                :options= popoptionsb>
                                <div class="popper_tl" style="margin-left: 300px;min-width:350px;">                         
                                    <span v-html="Entrega_compra_LN.tlp_escan[svl()][0].vl"></span> 
                                </div>                
                                <a  href="#" slot="reference" >
                                  <font color="red">
                                  <font-awesome-icon :icon="['far', 'question-circle']" />
                                  </font>
                                </a>
                          </popper>                          
                          <font color="grey" size="2">
                            {{Entrega_compra_LN.vars[svl()][3].vl}}
                            <font color="Darkorange">⚡</font> {{Entrega_compra_LN.vars[svl()][2].vl}}
                          </font>
                        </span>
                          <popper
                              :options= popoptions>
                                  <div class="popper" >                         
                                    <span v-html="Entrega_compra_LN.tlp_activa_escan[svl()][0].vl"></span>
                                  </div>
                                  <a href="#" slot="reference" @click="verqrget = !verqrget" class="btn" style="padding:4px 0px 0px 0px;">                          
                                  <img
                                          src="https://www.contobit.com/img/scanqr.jpg"
                                          width="28px"
                                          height="26px"
                                  /></a>
                          </popper>                          
                        <span v-if="verqrget === true">
                          <qrcode-stream @decode="onDecode" style="width: 360px; height: 330px"></qrcode-stream>
                        </span>
                        <textarea v-if="verqrget === false" rows="4"
                          :placeholder="Entrega_compra_LN.area_solic_pago[svl()][0].vl"
                          v-model="payreqentrega_Ln" @paste="pastePr_entr(payreqentrega_Ln)"
                          @input="pastePr_entr(payreqentrega_Ln)"
                          style="max-width:350px;max-height:150px;"
                          required></textarea>
                      </div>

                      <div v-if="
                          (this.tx.LNPAYMENTREQ_ENTREGA !== '⏳') &
                          (this.tx.LNPPAYMENTREQ_ENTREGA === '⏳')
                        ">

                        <span v-if="Qttyentrega_Ln === null">{{
                          calcQttyentrega_Ln()
                        }}</span>
                        <a v-if="versato === false" style="color: green; font-size: 20px"
                          @click="calcQttyentrega_Ln()">{{ Qttyentrega_Ln }} BTC</a>
                        <a v-if="versato === true" style="color: green; font-size: 20px"
                          @click="calcQttyentrega_Ln()">{{ Qttyentrega_Ln_ensato }} Satoshis</a>
                        <font size="5"> </font><br /><br /><br />
                        <span>
                          <font color="grey" size="4">
                            <font color="Darkorange">⚡</font> {{Entregada_compra_LN.vars[svl()][2].vl}}:
                          </font>
                        </span>                        

                        <font color="DodgerBlue">
                          <div v-if="verqrget === false"></div>
                        </font>
                        ⏳

                          <br /><br /><br /><br />


                        <br /><br />
                      </div>

                     
                    </form>
                  </div>

                  <!--/////// ENTREGA COMPRADOR FINALIZADA CUENTA ATRAS ELIMINACION VIA LIGHNING//LADO COMPRADOR////////////////////////////// -->
                  <div v-if="
                      (tx.TIMELINE === '6.Entrega') & (tx.CADENARED === '⚡')
                    ">
                    <form @submit.prevent="updateEntrega()" :class="signinn ? 'sign-in' : 'sign-inln'" action="#">
                      <h4>
                        <font color="grey">
                          <b>{{tit_table_tx_encurso_td.td_momentum[svl()][5].vl}} {{Entrega_de_la_compra.vars[svl()][0].vl}}</b>
                        </font>
                      </h4>
                      <h4>
                        <font color="green">
                          <b>{{Entregada_compra_LN.vars[svl()][0].vl}}</b>
                        </font>
                      </h4>
                      <div v-if="
                          (this.tx.LNPAYMENTREQ_ENTREGA !== '⏳') &
                          (this.tx.LNPPAYMENTREQ_ENTREGA !== '⏳')
                        ">
                        <span> {{Entregada_compra_LN.vars[svl()][1].vl}}: </span><br />
                        <span v-if="Qttyentrega_Ln === null">{{
                          calcQttyentrega_Ln()
                        }}</span>
                        <a v-if="versato === false" style="color: green; font-size: 20px"
                          @click="calcQttyentrega_Ln()">{{ Qttyentrega_Ln }} BTC</a>
                        <a v-if="versato === true" style="color: green; font-size: 20px"
                          @click="calcQttyentrega_Ln()">{{ Qttyentrega_Ln_ensato }} Satoshis</a>
                        <font size="5"> ✔️</font><br /><br /><br />
                        <span>
                          <font color="grey" size="4">
                            <font color="Darkorange">⚡</font> {{Entregada_compra_LN.vars[svl()][2].vl}}:
                          </font>
                        </span>
                          <popper
                                trigger="clickToOpen"
                                :options= popoptionsb>
                                <div class="popper_tl" style="margin-left: -200px;">                         
                                    <span v-html="Entregada_compra_LN.tlp1[svl()][0].vl"></span> 
                                </div>                
                                <a  href="#" slot="reference" >
                                  <font color="red">
                                  <font-awesome-icon :icon="['far', 'question-circle']" />
                                  </font>
                                </a>
                          </popper>                        

                        <font color="DodgerBlue">
                          <div v-if="verqrget === false"></div>
                        </font>
                        <b>
                          <i>
                            <span
                                style="color: DodgerBlue">{{ this.lnpayreqentrega_redu }}...</span></i>✔️</b>

                          <popper
                                :options= popoptionsb>
                                <div class="popper" style="margin-left: 0px;">                         
                                    <span v-html="Entregada_compra_LN.tlp2[svl()][0].vl"></span> 
                                </div>                
                                <a class="btn btn-outline-primary"   style="padding:4px 5px 0px 5px;" v-clipboard:copy="tx.LNPAYMENTREQ_ENTREGA"
                                  @click="alertacop()" slot="reference">
                                  <font-awesome-icon :icon="['far', 'copy']" />
                                </a>
                          </popper> 

                          <br /><br /><br /><br />



                        <br /><br />
                      </div>
                    </form>
                  </div>
                  <!--/////// ENTREGA COMPRADOR FINALIZADA CUENTA ATRAS ELIMINACION VIA LIGHNING//LADO COMPRADOR/////////FINALIZADO//////////// -->

                  <div v-if="
                      (tx.TIMELINE === '6.Entrega') & (tx.CADENARED === '₿')
                    ">
                    <form @submit.prevent="updateEntrega()" :class="signinn ? 'sign-in' : 'sign-inln'" action="#">
                      <h4>
                        <font color="grey">
                          <b>{{tit_table_tx_encurso_td.td_momentum[svl()][5].vl}} {{Entrega_de_la_compra.vars[svl()][0].vl}}</b>
                        </font>
                      </h4>

                      <div v-if="this.tx.IDTX_ENTREGA !== '⏳'"><br><br>
                        <font color="grey" size="4">{{Entregada_la_compra.vars[svl()][0].vl}}:</font><br><br>
                        <strong>
                          <i>
                            <a v-bind:href="this.urltx + this.tx.IDTX_ENTREGA" target="_blank">
                              <h5><span id="tittransacs">{{
                                  this.tx.IDTX_ENTREGA | redutxid
                                }}...✅</span></h5>
                            </a>
                          </i>
                        </strong>
                        <br />
                        <font color="grey" size="4">
                          <br />
                          <br />
                          <popper
                                trigger="clickToOpen"
                                :options= popoptionsb>
                                <div class="popper_tl" style="margin-left: 0px;">                         
                                    <span v-html="Entregada_la_compra.hlp_enviada[svl()][0].vl"></span> 
                                </div>                
                                <a  href="#" slot="reference" >
                                  <font-awesome-icon :icon="['far', 'question-circle']" />
                                </a>
                          </popper>                          
                          <br />

                        </font>
    
                        <br />                         
                      </div>
                    </form>
                  </div>

                  <!--///////////////////////////// EN CASO DE INCIDENCIA //////////////////////////////// -->
                  <div v-if="
                      tx.TIMELINE === 'Arbitraje' ||
                      tx.TIMELINE === 'Impago' ||
                      tx.TIMELINE === 'Retorno'
                    ">
                    <form :class="signinn ? 'sign-in' : 'sign-inln'" action="#">
                      <h4>
                        <font color="grey" size="7">
                          <b>{{Tx_a_arbitraje.tit[svl()][0].vl}}</b>
                        </font>
                      </h4>
                        <popper                           
                              :options= popoptionsb>
                                  <div class="popper" >                         
                                      <span v-html="Tx_a_arbitraje.hlp[svl()][0].vl"></span> 
                                  </div>                
                                  <a href="#" slot="reference" >
                                      <font-awesome-icon :icon="['far', 'question-circle']" />
                                  </a>
                        </popper>                      
                      <br />
                      <br />
                    </form>
                  </div>

                  <!--///////////////////////////// listo fin entrega y tx//////////////////////////////// -->
                </div>
              </article>
            </div>
          </transition>
        </div>       
      </div>
      <!-- ********************************** FIN BLOQUE COMPRADOR ****************************************************-->
      <!-- ********************************** FIN BLOQUE COMPRADOR ****************************************************-->       

   </div>       
  </div>
  </div>
</template>

<script>
  import axios from "axios";
  import router from "../router";
  import {
    mapState,
    mapMutations,
    mapActions,
    mapGetters
  } from "vuex";
  // @ is an alias to /src
  //import TxVars from "@/components/TxVars.json";
  import Popper from 'vue-popperjs';
  import 'vue-popperjs/dist/vue-popper.css';  
  import CountDown from "@/components/CountDown.vue";
  import Swal from "sweetalert2";
  import "sweetalert2/src/sweetalert2.scss";
  import QrcodeVue from "qrcode.vue";
  import * as moment from "moment/moment";
  //import moment from "moment";
  import "moment/locale/es";
  moment.locale("es");

  export default {
      name: "Txc",
      components: {
        QrcodeVue,
        CountDown,
        'popper': Popper,
      },
    data() {
      return {
     // lj: TxVars,
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
        signinn: true,
        signupp: true,
        Qttyentrega_Ln: null,
        versato: false,
        Qttyentrega_Ln_ensato: null,
        payreqentrega_Ln: null,
        lnpayreqliber_redu: null,
        lnpayreqentrega_redu: null,
        destinovalid: "✅",
        destino: null,
        User: [],
        lag: [],
        fee: null,
        fee_min: null,
        fee_eco: null,
        fee_rec: null,                        
        fee_max: null,
        feei: null,
        fee_OK: false,
        verredeem: false,
        verzqrcode: false,
        verqrget: false,
        verqrent: false,        
        isPaste: false,
        contratoSIcomprador: "❌",
        url: "https://blockstream.info/testnet/address/",
        urltx: "https://blockstream.info/testnet/tx/",
        now: moment().locale("en"),
        today: moment().locale("en").fromNow(),      
        confirms_idl: -1,
        vermano: true,
        nota: {
          nombre: "",
          descripcion: ""
        },
        aCopiQttymasCom: null,
        comisTxacomprador: null,
        tx2firmas: null,
        idliberacion: null,
        lnPpidliberacion: "⏳",
        cdadmoncompra: null,
        cdadbtccompra: null,
        partes: [], //contiene datos del comprador y vendedor, addr,id, email
        oferta: [],
        txs: [],
        tx: [],
        mensaje: {
          color: "success",
          texto: ""
        },
        dismissSecs: 5,
        dismissCountDown: 0,
        alerts: [],
        todos: "",
        el: "#container",
        el: "#demo",
        el: "#demo1",
        el: "#demo2",
        signUp: false,
        show: false,        
        show1: true,

      // siguen variables para idiomas parte html
      Textos_qrcode: {
       vars: [
          [{ vl: ' Mostrar el código Qr a leer...'},{ vl: ' Escanear código Qr, '},{ vl: ' Activa / desactiva escanear el código Qr de '}],
          [{ vl: ' Show the Qr code to read...'},{ vl: ' Scan Qr code, '},{ vl: ' Activates / deactivates scanning the Qr code of '}],
          [{ vl: ' Mostra el codi Qr a llegir...'},{ vl: ' Escanejar codi Qr, '},{ vl: ' Activa / desactiva escanejar el codi Qr de l` '}],
          [{ vl: ' Mostrar o código Qr para ler...'},{ vl: ' Digitalize código Qr, '},{ vl: ' Ativa / desativa a digitalização do código Qr de '}],                                             
            ],
      },      
      get_fee: {
         mje1: [
          [{ vl: 'Donación mireros seleccionada y actualizada'}],
          [{ vl: 'Miners donation selected and updated'}],
          [{ vl: 'Donació mirers seleccionada i actualitzada'}],
          [{ vl: 'Doação de Mireros selecionada e atualizada'}],                                            
            ],
         swf_p1: [
          [{ vl: '¡ Donación mireros seleccionada supera importe de la compra !'}],
          [{ vl: 'Selected mireros donation exceeds purchase amount!'}],
          [{ vl: 'Donació mirers seleccionada supera import de la compra!'}],
          [{ vl: 'A doação de mireros selecionada excede o valor da compra!'}],                                            
            ],
         swf_p2: [
          [{ vl: 'Se asigna la opción mínima posible que garantize la inclusión en la cadena de bloques, aunque las 6 confirmaciones de la entrega pudieran demorar más de 60 minutos.'}],
          [{ vl: 'The minimum possible option is assigned that guarantees inclusion in the blockchain, although the 6 delivery confirmations could take more than 60 minutes.'}],
          [{ vl: 'S`assigna l`opció mínima possible que garanteix la inclusió en la cadena de blocs, tot i que les 6 confirmacions del lliurament poguessin demorar més de 60 minuts.!'}],
          [{ vl: 'A opção mínima possível é atribuída para garantir a inclusão no blockchain, embora as 6 confirmações de entrega possam levar mais de 60 minutos.'}],                                            
            ],            
         mje2: [
          [{ vl: '¡ ATENCIÓN ! Donación mireros seleccionada supera importe de la compra, se asigna la opción mínima posible.'}],
          [{ vl: ' ATTENTION ! Mireros donation selected exceeds the purchase amount, the minimum possible option is assigned.'}],
          [{ vl: 'ATENCIÓ! Donació mirers seleccionada supera import de la compra, s`assigna l`opció mínima possible.'}],
          [{ vl: ' ATENÇÃO ! A doação de Mireros selecionada excede o valor da compra, a opção mínima possível é atribuída.'}],                                                                     ],              
      },      
      fee_tipo: {
       mtx: [
          [{ vl: 'Seleccionar' }],
          [{ vl: 'Select' }],
          [{ vl: 'Seleccioni' }],
          [{ vl: 'Seleccione' }],                                               
            ]            
      },      
      don_min: {     
       text: [         
          [{ vl: [
          {
            value: 'Seleccionar',
            text: 'Seleccionar "Donación" mineros.'
          },            
          {
            value: 'Mínima',
            text: 'Donación mineros. Más económica. Mínima prioridad'
          },
          {
            value: 'Económica',
            text: 'Donación mineros. Económica. Baja prioridad'
          },
          {
            value: 'Recomendada',
            text: 'Donación mineros. Recomendada. 60 minutos(6 bloques)'
          },
          {
            value: 'Máxima',
            text: 'Donación mineros. Más costosa. Máxima prioridad'
          }
        ] }],
          [{ vl: [
          {
            value: 'Select',
            text: 'Select "Donation" miners.'
          },            
          {
            value: "Minimum",
            text: '"Mining donation "More economical. Minimum priority',
          },
          {
            value: "Economical",
            text: '"Economic "Mining Donation". Low priority',
          },
          {
            value: "Recommended",
            text: '"Donation miners" Recommended. 60 minutes (6 blocks)',
          },
          {
            value: "Maximum",
            text: '"More expensive "miners donation". Maximum priority',
          }
         ] }],
          [{ vl: [
          {
            value: 'Seleccioni',
            text: 'Seleccioni "Donació" miners.'
          },            
          {
           value: "Mínima",
            text: '"Donació miners" Més econòmica. mínima prioritat',
          },
          {
            value: "Econòmica",
            text: '"Donació miners" Econòmica. Baixa prioritat',
          },
          {
            value: "Recomanada",
            text: '"Donació miners" Recomanada. 60 minuts(6 blocs)',
          },
          {
            value: "Màxima",
            text: '"Donació miners" Més costosa. màxima prioritat',
          }
         ] }],
          [{ vl: [
          {
            value: 'Seleccione',
            text: 'Selecione "Doação" mineiros.'
          },            
          {
            value: "Mínima",
            text: '“Doação de mineração” Mais econômica.'
          },
          {
            value: "Econômica",
            text: '“Doação de mineração” econômica. Baixa prioridade'
          },
          {
            value: "Recomendada",
            text: '"Doação de mineração" recomendada. 60 minutos(6 bloques)'
          },
          {
            value: "Máxima",
            text: '"Doação de mineração" Mais caro. Prioridade máxima'
          }
         ] }],                                               
            ]
      },        
      tit_table_tx_encurso: {
       mat: [
          [{ vl: 'Incio' }, { vl: 'Via' }, { vl: 'Liberados' }, { vl: 'Bitcoins' }, { vl: 'Monedas' }, { vl: "Pago" }, { vl: 'Cobro' }, { vl: 'Rol' }, { vl: 'Momentum' }, { vl: 'Acción' }],
          [{ vl: 'Initiated' }, { vl: 'Via' }, { vl: 'Delivered' }, { vl: 'Bitcoins' }, { vl: 'Exchange' }, { vl: "Payment" }, { vl: 'Collection' }, { vl: 'Role' }, { vl: 'Momentum' }, { vl: 'Action' }],
          [{ vl: 'Inci' }, { vl: 'Via' }, { vl: 'Alliberats' }, { vl: 'Bitcoins' }, { vl: 'Monedes' }, { vl: "Pagament" }, { vl: 'Cobrament' }, { vl: 'Rol' }, { vl: 'Momentum' }, { vl: 'Acció' }],
          [{ vl: 'Começa' }, { vl: 'Via' }, { vl: 'Liberado' }, { vl: 'Bitcoins' }, { vl: 'Moedas' }, { vl: "Pagamento" }, { vl: 'Cobro' }, { vl: 'Função' }, { vl: 'Momentum' }, { vl: 'Açao' }],                                               
            ]
      }, 
      tit_table_tx_encurso_td: {
       td_rol: [
          [{ vl: 'Comprador' }, { vl: 'Vendedor' }],
          [{ vl: 'Buyer' }, { vl: 'Seller' }],
          [{ vl: 'Comprador' }, { vl: 'Venedor' }],
          [{ vl: 'Comprador' }, { vl: 'Vendedor' }],                                               
            ],
       td_momentum: [
          [{ vl: '🔴1.Oferta' }, { vl: '🟠2.Solicitud' }, { vl: '🟡3.Contrato' }, { vl: '🟢4.Pago' }, { vl: '🔵5.Cobro' }, { vl: "⚪6.Entrega" }, { vl: '⚫5-6.Arbitraje' }, { vl: '⚫5.Impago' }, { vl: '⚪6.Retorno' }],
          [{ vl: '🔴1.Offer' }, { vl: '🟠2.Request' }, { vl: '🟡3.Contract' }, { vl: '🟢4.Payment' }, { vl: '🔵5.Collection' }, { vl: "⚪6.Delivery" }, { vl: '⚫5-6.Arbitration' }, { vl: '⚫5.Non-payment' }, { vl: '⚪6.Return' }],
          [{ vl: '🔴1.Oferta' }, { vl: '🟠2.Sol.licitud' }, { vl: '🟡3.Contracte' }, { vl: '🟢4.Pagament' }, { vl: '🔵5.Cobrament' }, { vl: "⚪6.Lliurament" }, { vl: '⚫5-6.Arbitratge' }, { vl: '⚫5.Impagament' }, { vl: '⚪6.Retorn' }],
          [{ vl: '🔴1.Oferta' }, { vl: '🟠2.Solicitação' }, { vl: '🟡3.Contrato' }, { vl: '🟢4.Pagamento' }, { vl: '🔵5.Cobro' }, { vl: "⚪6.Entrega" }, { vl: '⚫5-6.Arbitragem' }, { vl: '⚫5.Falta de pagamento' }, { vl: '⚪6.Retorna' }],,                                               
            ],             
      },
      tit_transac: {
       mat: [
          [{ vl: 'Transacción compra-venta' }],
          [{ vl: 'Purchase-sale transaction' }],
          [{ vl: 'Transacció compravenda' }],
          [{ vl: 'Transação compra e venda' }],                                               
            ],
       bitcoin: [
          [{ vl: ' Cadena de bloques Bitcoin ' }],
          [{ vl: ' Bitcoin blockchain ' }],
          [{ vl: ' Cadena de blocs Bitcoin ' }],
          [{ vl: ' Corrente de bloco Bitcoin ' }],                                               
            ],
       lightning: [
          [{ vl: ' Red Lightning ' } ],
          [{ vl: ' Lightning Network ' }],
          [{ vl: ' Xarxa Lightning ' }],
          [{ vl: ' Rede Lightning ' }],                                               
            ],
       enunciats: [
          [{ vl: 'Medio de pago' },{ vl: 'Precio' },{ vl: 'Moneda de pago' },{ vl: 'Mínimo - Máximo' },{ vl: 'Compra' },{ vl: ' por importe de ' },{ vl: 'Prueba solvencia de compra aceptada' },{ vl: 'Multifirma' },{ vl: 'Arbitraje' },{ vl: 'Liberación Bitcoins vendedor, Identificador Tx' },{ vl: 'Red bitcoin, 6 confirmaciones, recibido' },{ vl: 'Notificación del comprador' },{ vl: 'Ratificación del vendedor' },{ vl: 'Destino Comprador' },{ vl: 'Entrega de Bitcoins, Identificador Tx' }, ],
          [{ vl: 'Payment method' },{ vl: 'Price' },{ vl: 'Payment currency' },{ vl: 'Min MAX' },{ vl: 'Purchase' },{ vl: 'for the amount of' },{ vl: 'Proof of purchase solvency accepted' },{ vl: 'Multisign' },{ vl: 'Arbitration' },{ vl: 'Bitcoins seller release, Tx Identifier' },{ vl: 'Bitcoin network, 6 confirmations, received' },{ vl: 'Buyer`s notification' },{ vl: 'Seller`s ratification' },{ vl: 'Buyer Destination' },{ vl: 'Bitcoins Delivery, Tx Identifier' },],
          [{ vl: 'Mitjà de pagament' },{ vl: 'Preu' },{ vl: 'Moneda de pagament' },{ vl: 'Mínim - Màxim' },{ vl: 'Compra' },{ vl: 'per import de' },{ vl: 'Prova solvència de compra acceptada' },{ vl: 'Multisignatura' },{ vl: 'Arbitratge' },{ vl: 'Alliberament Bitcoins venedor, Identificador Tx ' },{ vl: 'Xarxa bitcoin, 6 confirmacions, rebut' },{ vl: 'Notificació del comprador' },{ vl: 'Ratificació del venedor' },{ vl: 'Destí Comprador' },{ vl: 'Lliurament de Bitcoins, Identificador Tx' },],
          [{ vl: 'Meio de pagamento' },{ vl: 'Preço' },{ vl: 'Moeda de pagamento' },{ vl: 'Mínimo - Máximo' },{ vl: 'Compra' },{ vl: 'pela quantidade de' },{ vl: 'Comprovante de solvência de compra aceita' },{ vl: 'Multi-assinatura' },{ vl: 'Arbitragem' },{ vl: 'Liberação do vendedor de bitcoins, identificador de Tx' },{ vl: 'Rede Bitcoin, 6 confirmações recebidas' },{ vl: 'Notificação do comprador' },{ vl: 'Ratificação do vendedor' },{ vl: 'Destino do comprador' },{ vl: 'Entrega de Bitcoins, Identificador Tx' },],                                         
            ],                    
       enunsln: [
          [{ vl: 'Solicitud de Pago(liberación)' },{ vl: 'Factura ID (liberación)' },{ vl: 'Prueba de Pago (liberación)' },{ vl: 'Liberación en arbitraje, recibido' },{ vl: 'Solicitud de Pago(Entrega)' },{ vl: 'Factura ID(Entrega)' },{ vl: 'Prueba de Pago(Entrega)' },],

          [{ vl: 'Payment Request (release)' },{ vl: 'Invoice ID (liberation)' },{ vl: 'Proof of Payment (liberation)' },{ vl: 'Release in arbitration, received' },{ vl: 'Payment Request (Delivery)' },{ vl: 'Invoice ID (Delivery)' },{ vl: 'Proof of Payment (Delivery)' },],

          [{ vl: 'Sol.licitud de Pagament(alliberament)' },{ vl: 'Factura ID (alliberament)' },{ vl: 'Prova de Pagament (alliberament)' },{ vl: 'Alliberament en arbitraje, rebut' },{ vl: 'Sol.licitud de Pagament(Lliurament)' },{ vl: 'Factura ID(Lliurament)' },{ vl: 'Prova de Pagament(Lliurament)' },],

          [{ vl: 'Pedido de pagamento (liberação)' },{ vl: 'ID da fatura (liberação)' },{ vl: 'Comprovante de pagamento (liberação)' },{ vl: 'Liberação em arbitragem, recebida' },{ vl: 'Pedido de pagamento (Entrega)' },{ vl: 'ID da fatura (entrega)' },{ vl: 'Comprovante de pagamento (entrega)' },],,                                         
            ],           
      },           
      caps: {
       mtx: [
          [{ vl: '1.Oferta' }, { vl: '2.Solicitud' }, { vl: '3.Contrato' }, { vl: '4.Pago' }, { vl: '5.Cobro' }, { vl: "6.Entrega" }, { vl: '5-6.Arbitraje' }, { vl: '5.Impago' }, { vl: '6.Retorno' }],
          [{ vl: '1.Offer' }, { vl: '2.Request' }, { vl: '3.Contract' }, { vl: '4.Payment' }, { vl: '5.Collection' }, { vl: "6.Delivery" }, { vl: '5-6.Arbitration' }, { vl: '5.Non-payment' }, { vl: '6.Return' }],
          [{ vl: '1.Oferta' }, { vl: '2.Sol.licitud' }, { vl: '3.Contracte' }, { vl: '4.Pagament' }, { vl: '5.Cobrament' }, { vl: "6.Lliurament" }, { vl: '5-6.Arbitratge' }, { vl: '5.Impagament' }, { vl: '6.Retorn' }],
          [{ vl: '1.Oferta' }, { vl: '2.Solicitação' }, { vl: '3.Contrato' }, { vl: '4.Pagamento' }, { vl: '5.Cobro' }, { vl: "6.Entrega" }, { vl: '5-6.Arbitragem' }, { vl: '5.Falta de pagamento' }, { vl: '6.Retorna' }],                                 
            ],                    
      },    
      CONTRATO_destino: {
       mtx1: [
          [{ vl: 'CONTRATO'}],
          [{ vl: 'CONTRACT' }],
          [{ vl: 'CONTRACTE' }],
          [{ vl: 'CONTRATO' }],                                               
            ],
       mtx2: [
          [{ vl: 'destino'}],
          [{ vl: 'destination' }],
          [{ vl: 'destinació' }],
          [{ vl: 'destino' }],                                               
            ],                      
      },
      help_CONTRATO_BITCOIN_MULTIFIRMA: {
       pte1: [
          [{ vl: '<br><b>CONTRATO BITCOIN MULTIFIRMA PARA TX DE COMPRA-VENTA P2P:</b><br> A través de Internet, hoy. <br><b>REUNIDOS</b><br>Como parte compradora o <b>Comprador: </b>' }],

          [{ vl: '<br><b>MULTI-SIGNATURE BITCOIN CONTRACT FOR P2P PURCHASE-SALE TX: </b><br> Via Internet, today.<br><b>TOGETHER</b><br>As a purchasing party or <b>Buyer: </b>' }],

          [{ vl: '<br><b>CONTRACTE BITCOIN MULTISIGNATURA PER TX DE COMPRA-VENDA P2P:</b><br> A través d`Internet, avui.<br><b>REUNITS</b><br>Com a part compradora o <b>Comprador: </b>' }],

          [{ vl: '<br><b>CONTRATO DE BITCOIN MULTI-ASSINATURA PARA TX DE COMPRA-VENDA P2P:</b><br> A través da internet, hoje. +<br><b>JUNTOS</b><br>Como parte de compra ou <b>Comprador: </b>' }],                                 
            ],             
       pte2: [
          [{ vl: 'Como parte vendedora o <b>Vendedor:  ' }],

          [{ vl: 'As a selling party or <b>Seller:  ' }],

          [{ vl: 'Com a part venedora o <b>Venedor:  ' }],

          [{ vl: 'Como uma festa de vendas ou <b>Vendedor:  ' }],                                 
            ],           
       pte3: [
          [{ vl: 'Como parte intermediaria o <b>Arbitro:  ' }],

          [{ vl: 'As an intermediary party or <b>Referee:  ' }],

          [{ vl: 'Com a part intermediaria o <b>Àrbitre:  ' }],

          [{ vl: 'Como uma parte intermediária ou <b>Juiz:  ' }],                                 
            ],            
       pte4: [
          [{ vl: '<b>INTERVIENEN</b><br>Las tres partes integrantes intervienen en su propia representación y derecho.<br>Se reconocen con capacidad suficiente para otorgar el presente contrato y a tal fin,<br><b>EXPONEN</b><br>I.- Que EL Vendedor es propietario de <font color=red>' }],

          [{ vl: '<b>INTERVENE</b><br>The three constituent parts intervene in their own representation and right. <br> They recognize themselves as having sufficient capacity to grant this contract and to that end,<br><b>EXPOSE</b><br>I.- That THE Seller owns <font color=red>' }],

          [{ vl: '<b>INTERVENEN</b><br>Les tres parts integrants intervenen en la seva pròpia representació i dret.<br>Es reconeixen amb capacitat suficient per atorgar el present contracte i amb aquesta finalitat,<br><b>EXPOSEN</b><br>I.- Que EL Venedor és propietari de <font color=red>' }],

          [{ vl: '<b>INTERVIR</b><br>As três partes constituintes intervêm na sua própria representação e direito.<br>São reconhecidos com capacidade suficiente para outorgar este contrato e, para tanto,<br><b>EXPOR</b><br>I.- Que o vendedor possui <font color=red>' }],                                 
            ],
       pte5: [
          [{ vl: ' <font color=red>BITCOINS</font> objeto de este contrato, por acreditación comprobable de su dirección pública en la cadena de bloques de bitcoin.<br>II.- Que El Comprador tiene interés en adquirir los bitcoins descritos en el ordinal precedente, a cambio del pago de la cantidad de moneda <font color=mediumseagreen>' }],

          [{ vl: ' <font color=red>BITCOINS</font> object of this contract, by verifiable accreditation of your public address in the bitcoin blockchain.<br>II.- That the Buyer has an interest in acquiring the bitcoins described in the preceding ordinal, in exchange for the payment of the amount of currency <font color=mediumseagreen>' }],

          [{ vl: ' <font color=red>BITCOINS</font> objecte d`aquest contracte, per acreditació comprovable de la seva adreça pública en la cadena de blocs de bitcoin.<br>II.-Que El comprador té interès a adquirir els bitcoins descrits en l`ordinal precedent, a canvi el pagament de la quantitat de moneda <font color=mediumseagreen>' }],

          [{ vl: ' <font color=red>BITCOINS</font> objeto deste contrato, por credenciamento verificável de seu endereço público no blockchain bitcoin.<br>II.- Que o Comprador tem interesse em adquirir os bitcoins descritos no ordinal anterior, em troca do pagamento da quantia em moeda <font color=mediumseagreen>' }],                                 
            ],
       pte6_comprador: [
          [{ vl: '</font>.<br>III.- Que el Árbitro tiene la capacidad para intermediar, facilitar y juzgar, la transacción. Deduciendo máximo un 0.25 % del objeto del contrato a la parte compradora.<br> IV.- Que por ello las tres partes,<br><b>ACUERDAN</b><br>Llevar a efecto este contrato de COMPRAVENTA MERCANTIL, mediante los siguientes<br><b>TÉRMINOS A COMPRADOR</b><br> <b><font color=yellow>Primero.</font></b> El Comprador es consciente y acepta los términos generales del apartado NUESTRO GRANITO DE ARENA A LA REVOLUCIÓN BITCOIN: detallados en la página de inicio.<br><b><font color=red>Segundo.</font></b> El comprador procederá al pago inmediato en el medio de pago de la oferta, a materializar sin demora, tiempo inferior a 20 minutos, tan pronto disponga de prueba de Tx de Respaldo de Entrega de los bitcoins firmada por el Vendedor y el Arbitraje como garantía a su favor. <br><b><font color=red>Tercero.</font></b> En caso de incidencia o disputa el Comprador se compromete, y puede ser requerido como imprescindible por el Arbitraje en el Chat de esta plataforma, al aporte de pruebas de pago o detalle de movimientos de su cuenta, certificados por el medio de pago estipulado en la oferta. El Arbitraje se reserva el derecho de verificar las pruebas con la entidad del medio de pago.<br><b><font color=yellow>Cuarto.</font></b> La Tx de entrega final de los bitcoins, una vez ratificado el cobro por parte del vendedor, será emitida de inmediato por el Arbitraje. La cuota de mineria de la Tx de entrega en la red bitcoin es ajena al arbitraje, será la estipulada por el Comprador dentro de las recomendadas del momento por la red, y deducida de la parte del comprador. <br><b><font color=yellow>Quinto.</font></b> Las comunicaciones o cruces de información privados entre Comprador y Vendedor podrán ser aportados como pruebas en caso de incidencia o disputa a este Arbitraje en el Chat de la Transacción.<br> <br>' }],
          [{ vl: '</font>.<br>III.- That the Arbitrator has the ability to mediate, facilitate and judge the transaction. With a maximum deduction of 0.25% from the object of the contract to the buyer. <br> IV.- That is why the three parties, <br> <b> AGREE </b> <br> Carry out this MERCANTILE PURCHASE contract, through the following <br> <b> TERMS TO BUYER </b> <br> <b> First. </b> The Buyer is aware of and accepts the general terms of the section OUR GRANITE OF SAND TO THE BITCOIN REVOLUTION: detailed in the home page. <br> <b> <font color = red> Second. </font> </b> The buyer will proceed to the immediate payment in the means of payment of the offer, to materialize without delay, time less than 20 minutes, as soon as he has proof of Tx of Delivery Backup of the bitcoins signed by the Seller and the Arbitration as a guarantee to your favor. <br> <b> <font color = red> Third. </font> </b> In case of incident or dispute, the Buyer agrees, and may be required as essential by the Arbitration in the Chat of this platform, at Proof of payment or details of account movements, certified by the means of payment stipulated in the offer. The Arbitration reserves the right to verify the evidence with the entity of the means of payment. <br> <b> <font color = yellow> Fourth. </font> </b> The final delivery Tx of the bitcoins, a Once the collection has been ratified by the seller, it will be issued immediately by the Arbitration. The mining quota of the Tx of delivery in the bitcoin network is outside the arbitration, it will be that stipulated by the Buyer within those recommended at the time by the network, and deducted from the buyer`s part. <br> <b> <font color = yellow> Fifth. </font> </b> Private communications or information exchanges between Buyer and Seller may be provided as evidence in case of incidence or dispute to this Arbitration in the Chat of the Transaction.<br> <br>' }],
          [{ vl: '</font>.<br>III.- Que l`àrbitre té la capacitat per mitjançar, facilitar i jutjar, la transacció. Deduint  màxim un 0.25% de l`objecte del contracte a la part compradora.<br> IV.- Que per això les tres parts,<br><b>ACORDEN</b><br>Dur a efecte aquest contracte de COMPRAVENDA MERCANTIL, mitjançant els següents<br><b>TERMES A COMPRADOR</b><br> <b>Primer.</b> El comprador és conscient i accepta els termes generals de l`apartat NOSTRE GRANET DE SORRA A LA REVOLUCIÓ Bitcoin: detallats a la pàgina d`inici.<br><b><font color=red>Segon.</font></b>El comprador procedirà al pagament immediat al mitjà de pagament de l`oferta, a materialitzar sense demora, temps inferior a 20 minuts, tan aviat disposi de prova de Tx de Respatller de Lliurament dels bitcoins signada pel Venedor i l`Arbitratge com a garantia al seu favor. <br><b><font color=red>Tercer.</font></b> En cas d`incidència o disputa el Comprador es compromet, i pot ser requerit com a imprescindible per l`Arbitratge al Xat d`aquesta plataforma, l`aportació de proves de pagament o detall de moviments del vostre compte, certificats pel mitjà de pagament estipulat a l`oferta. L`arbitratge es reserva el dret de verificar les proves amb l`entitat del mitjà de pagament.<br><b><font color=yellow>Quart.</font></b> La Tx de lliurament final dels bitcoins, un cop ratificat el cobrament per part del venedor, serà emesa immediatament per l`arbitratge. La quota de mineria de la Tx de lliurament a la xarxa bitcoin és aliena a l`arbitratge, serà l`estipulada pel Comprador dins de les recomanades del moment per la xarxa i deduïda de la part del comprador. <br><b><font color=yellow>Cinquè.</font></b> Les comunicacions o creuaments d`informació privats entre Comprador i Venedor podran ser aportats com a proves en cas d`incidència o disputa a aquest Arbitratge al Xat de la Transacció.<br> <br>' }],
          [{ vl: '</font>.<br>III.- Que o Árbitro tem a capacidade de mediar, facilitar e julgar a transação. Deduzindo ao comprador no máximo 0,25% do objeto do contrato.<br> IV.- É por isso que as três partes,<br><b>ACEITA</b><br>Efetuar este contrato de COMPRA DE MERCANTIL, através das seguintes<br><b>TERMOS PARA COMPRADOR</b><br> <b>Primeiro.</b> O Comprador está ciente e aceita os termos gerais da seção NOSSO GRANITO DE AREIA PARA A REVOLUÇÃO DA BITCOIN: detalhadas na página inicial.<br><b><font color=red>Segundo.</font></b> O comprador procederá ao pagamento imediato no meio de pagamento da oferta, para concretizar-se sem demora, em tempo inferior a 20 minutos, assim que tiver comprovante de Tx de Backup de Entrega dos bitcoins firmado pelo Vendedor e a Arbitragem conforme uma garantia a seu favor. <br> <b> <font color = red> Terceiro. </font> </b> Em caso de incidente ou disputa, o Comprador concorda, e pode ser solicitado como imprescindível pela Arbitragem no Chat desta plataforma , em Comprovante de pagamento ou detalhamento de movimentação de conta, atestado pelo meio de pagamento estipulado na oferta. A Arbitragem reserva-se o direito de verificar a comprovação junto à entidade do meio de pagamento. <br> <b> <font color = yellow> Quarto. </font> </b> O Tx de entrega final dos bitcoins, uma Vez a cobrança tiver sido homologada pelo vendedor, será emitida imediatamente pela Arbitragem. A cota de mineração do Tx de entrega na rede bitcoin está fora da arbitragem, será aquela estipulada pelo Comprador dentro das recomendadas à época pela rede, e deduzida da parte do comprador. <br> <b> <font color = yellow> Quinto. </font> </b> Comunicações privadas ou trocas de informações entre o Comprador e o Vendedor podem ser fornecidas como evidência em caso de incidência ou disputa a esta Arbitragem no Chat da Transação .<br> <br>' }],                                 
            ],
      },

      CONTRATO_BITCOIN_MULTIFIRMA_LN: {
       hlp_pte1: [
          [{ vl: '<br><b>CONTRATO BITCOIN LIGHTNING PARA TX DE COMPRA-VENTA P2P:</b><br> A través de Internet, hoy. <br><b>REUNIDOS</b><br><b>Como parte compradora o <b>Comprador: </b>' }],
          [{ vl: '<br><b>BITCOIN LIGHTNING CONTRACT FOR P2P PURCHASE-SALE TX: </b><br> Via Internet, today.<br><b>TOGETHER</b><br><b>As a purchasing party or <b>Buyer: </b>' }],
          [{ vl: '<br><b>CONTRACTE BITCOIN LIGHTNING PER TX DE COMPRA-VENDA P2P:</b><br> A través d`Internet, avui.<br><b>REUNITS</b><br><b>Com a part compradora o <b>Comprador: </b>' }],
          [{ vl: '<br><b>CONTRATO DE BITCOIN LIGHTNING PARA TX DE COMPRA-VENDA P2P:</b><br> A través da internet, hoje. +<br><b>JUNTOS</b><br><b>Como parte de compra ou <b>Comprador: </b>' }],                                 
            ],
       pte6_comprador: [
          [{ vl: '</font>.<br>III.- Que el Árbitro tiene la capacidad para intermediar, facilitar y juzgar, la transacción. Deduciendo máximo un 0.25 % del objeto del contrato a la parte compradora.<br> IV.- Que por ello las tres partes,<br><b>ACUERDAN</b><br>Llevar a efecto este contrato de COMPRAVENTA MERCANTIL, mediante los siguientes<br><b>TÉRMINOS A COMPRADOR</b><br> <b><font color=yellow>Primero.</font></b> El Comprador es consciente y acepta los términos generales del apartado NUESTRO GRANITO DE ARENA A LA REVOLUCIÓN BITCOIN: detallados en la página de inicio.<br><b><font color=red>Segundo.</font></b> El comprador procederá al pago inmediato en el medio de pago de la oferta, a materializar sin demora, tiempo inferior a 20 minutos, tan pronto disponga de prueba de Tx de Respaldo de Entrega de los bitcoins firmada por el Vendedor y el Arbitraje como garantía a su favor. <br><b><font color=red>Tercero.</font></b> En caso de incidencia o disputa el Comprador se compromete, y puede ser requerido como imprescindible por el Arbitraje en el Chat de esta plataforma, al aporte de pruebas de pago o detalle de movimientos de su cuenta, certificados por el medio de pago estipulado en la oferta. El Arbitraje se reserva el derecho de verificar  las pruebas con la entidad del medio de pago.<br><b><font color=yellow>Cuarto.</font></b> La entrega final de los bitcoins via red lightning, una vez ratificado el cobro por parte del vendedor, será emitida de inmediato por el Vendedor tan pronto el Comprador emita y facilite la Factura Lighning correspondiente. La cuota de mineria de  entrega en la red es ajena al arbitraje, será la estipulada  dentro de las recomendadas del momento por la red, y deducida de la parte del comprador. <br><b><font color=yellow>Quinto.</font></b> Las comunicaciones o cruces de información privados entre Comprador y Vendedor podrán ser aportados como pruebas en caso de incidencia o disputa a este Arbitraje en el Chat de la Transacción.<br> <br>' }],
          [{ vl: '</font>.<br>III.- That the Arbitrator has the ability to mediate, facilitate and judge the transaction. With a maximum deduction of 0.25% from the object of the contract to the buyer. <br> IV.- That is why the three parties, <br> <b> AGREE </b> <br> Carry out this MERCANTILE PURCHASE contract, through the following <br> <b> TERMS TO BUYER </b> <br> <b> First. </b> The Buyer is aware of and accepts the general terms of the section OUR GRANITE OF SAND TO THE BITCOIN REVOLUTION: detailed in the home page. <br> <b> <font color = red> Second. </font> </b> The buyer will proceed to the immediate payment in the means of payment of the offer, to materialize without delay, time less than 20 minutes, as soon as he has proof of Tx of Delivery Backup of the bitcoins signed by the Seller and the Arbitration as a guarantee to your favor. <br> <b> <font color = red> Third. </font> </b> In case of incident or dispute, the Buyer agrees, and may be required as essential by the Arbitration in the Chat of this platform, at Proof of payment or details of account movements, certified by the means of payment stipulated in the offer. The Arbitration reserves the right to verify the evidence with the entity of the means of payment. <br> <b> <font color = yellow> Fourth. </font> </b> The final delivery of the bitcoins via lightning network, a Once the collection has been ratified by the seller, it will be issued immediately by the Seller as soon as the Buyer issues and provides the corresponding Lighning Invoice. The mining quota of delivery in the network is outside the arbitration, it will be that stipulated within those recommended at the time by the network, and deducted from the buyer`s part. <br> <b> <font color = yellow> Fifth. </font> </b> Private communications or information exchanges between Buyer and Seller may be provided as evidence in case of incidence or dispute to this Arbitration in the Chat of the Transaction.<br> <br>' }],
          [{ vl: '</font>.<br>III.- Que l`àrbitre té la capacitat per mitjançar, facilitar i jutjar, la transacció. Deduint  màxim un 0.25% de l`objecte del contracte a la part compradora.<br> IV.- Que per això les tres parts,<br><b>ACORDEN</b><br>Dur a efecte aquest contracte de COMPRAVENDA MERCANTIL, mitjançant els següents<br><b>TERMES A COMPRADOR</b><br> <b>Primer.</b> El comprador és conscient i accepta els termes generals de l`apartat NOSTRE GRANET DE SORRA A LA REVOLUCIÓ Bitcoin: detallats a la pàgina d`inici.<br><b><font color=red>Segon.</font></b>El comprador procedirà al pagament immediat al mitjà de pagament de l`oferta, a materialitzar sense demora, temps inferior a 20 minuts, tan aviat disposi de prova de Tx de Respatller de Lliurament dels bitcoins signada pel Venedor i l`Arbitratge com a garantia al seu favor. <br><b><font color=red>Tercer.</font></b> En cas d`incidència o disputa el Comprador es compromet, i pot ser requerit com a imprescindible per l`Arbitratge al Xat d`aquesta plataforma, l`aportació de proves de pagament o detall de moviments del vostre compte, certificats pel mitjà de pagament estipulat a l`oferta. L`arbitratge es reserva el dret de verificar les proves amb l`entitat del mitjà de pagament.<br><b><font color=yellow>Quart.</font></b> El lliurament final dels bitcoins, un cop ratificat el cobrament per part del venedor, serà emés immediatament pel Venedor tan aviat el Comprador emeti i faciliti la Factura Lightning corresponent. La quota de mineria de lliurament a la xarxa és aliena a l`arbitratge, serà l`estipulada  dins de les recomanades del moment per la xarxa i deduïda de la part del comprador. <br><b><font color=yellow>Cinquè.</font></b> Les comunicacions o creuaments d`informació privats entre Comprador i Venedor podran ser aportats com a proves en cas d`incidència o disputa a aquest Arbitratge al Xat de la Transacció.<br> <br>' }],
          [{ vl: '</font>.<br>III.- Que o Árbitro tem a capacidade de mediar, facilitar e julgar a transação. Deduzindo ao comprador no máximo 0,25% do objeto do contrato.<br> IV.- É por isso que as três partes,<br><b>ACEITA</b><br>Efetuar este contrato de COMPRA DE MERCANTIL, através das seguintes<br><b>TERMOS PARA COMPRADOR</b><br> <b>Primeiro.</b> O Comprador está ciente e aceita os termos gerais da seção NOSSO GRANITO DE AREIA PARA A REVOLUÇÃO DA BITCOIN: detalhadas na página inicial.<br><b><font color=red>Segundo.</font></b> O comprador procederá ao pagamento imediato no meio de pagamento da oferta, para concretizar-se sem demora, em tempo inferior a 20 minutos, assim que tiver comprovante de Tx de Backup de Entrega dos bitcoins firmado pelo Vendedor e a Arbitragem conforme uma garantia a seu favor. <br> <b> <font color = red> Terceiro. </font> </b> Em caso de incidente ou disputa, o Comprador concorda, e pode ser solicitado como imprescindível pela Arbitragem no Chat desta plataforma , em Comprovante de pagamento ou detalhamento de movimentação de conta, atestado pelo meio de pagamento estipulado na oferta. A Arbitragem reserva-se o direito de verificar a comprovação junto à entidade do meio de pagamento. <br> <b> <font color = yellow> Quarto. </font> </b> O entrega final dos bitcoins, uma Vez a cobrança tiver sido homologada pelo vendedor, será emitida imediatamente pelo vendedor assim que o Comprador emitir e fornecer a fatura Lighning correspondente. A cota de mineração de entrega na rede está fora da arbitragem, será aquela estipulada dentro das recomendadas à época pela rede, e deduzida da parte do comprador. <br> <b> <font color = yellow> Quinto. </font> </b> Comunicações privadas ou trocas de informações entre o Comprador e o Vendedor podem ser fornecidas como evidência em caso de incidência ou disputa a esta Arbitragem no Chat da Transação .<br> <br>' }],                                 
            ],
      },
      Cerrar: {
       mtx: [
          [{ vl: 'Cerrar'}],
          [{ vl: 'Close' }],
          [{ vl: 'Tancar' }],
          [{ vl: 'Fechar' }],                                               
            ],                                 
      },
      C_dad: {
       Cantidad: [
          [{ vl: 'Cantidad'}],
          [{ vl: 'Amount' }],
          [{ vl: 'Quantitat' }],
          [{ vl: 'Quantidade' }],                                               
            ],
       a_pagar: [
          [{ vl: 'a pagar'}],
          [{ vl: 'to pay' }],
          [{ vl: 'a pagar' }],
          [{ vl: 'desligar' }],                                               
            ],
       a_comprar: [
          [{ vl: 'a comprar'}],
          [{ vl: 'to buy' }],
          [{ vl: 'a comprar' }],
          [{ vl: 'a comprar' }],                                               
            ],                                  
      },
      hlp_cdad: {
       pt2: [
          [{ vl: '<b> a pagar):</b><br> Introduzca en esta casilla, la cantidad en moneda '}],
          [{ vl: '<b> to pay):</b><br> Enter in this box, the amount in currency ' }],
          [{ vl: '<b> a pagar):</b><br> Introduïu en aquesta caixa, la quantitat en moneda ' }],
          [{ vl: '<b> para pagar):</b><br> Insira nesta caixa, o valor em moeda ' }],                                               
            ],
       pt3: [
          [{ vl: ', que desee destinar a su compra de bitcoins.<br>  Las dos casillas de cantidad, una en función de la otra, guardan equivalencia matemática. Pudiendo determinar la cantidad a comprar en cualquiera de las dos casillas. Para el precio, se toma como válida, la cotización ₿ vigente del momento presente. Aplicada al precio ₿ de la oferta seleccionada. <br> <br>'}],
          [{ vl: ', that you want to allocate to your purchase of bitcoins. <br> The two quantity boxes, one based on the other, have a mathematical equivalence. Being able to determine the amount to buy in either of the two boxes. For the price, the current price ₿ is taken as valid. Applied to the price ₿ of the selected offer. <br> <br>' }],
          [{ vl: ', que desitgi destinar a la seva compra de bitcoins.<br> Les dues caselles de quantitat, una en funció de l`altra, guarden equivalència matemàtica. Podent determinar la quantitat a comprar a qualsevol de les dues caselles. Pel preu, es pren com a vàlida, la cotització ₿ vigent del moment present. Aplicada a al preu ₿ de l`oferta seleccionada. <br> <br>' }],
          [{ vl: ', que você deseja alocar para a compra de bitcoins.<br>  As duas caixas de quantidade, uma em função da outra, têm equivalência matemática. Ser capaz de determinar o valor a comprar em qualquer uma das duas caixas. Para o preço, o preço atual ₿ é considerado válido. Aplicado ao preço ₿ da oferta selecionada. <br> <br>' }],                                               
            ],                      
      },
      hlp_cdad_btc: {
       mtx: [
          [{ vl: '<br><b>2.Solicitud. Cantidad (BTC a comprar):</b><br> Introduzca en esta casilla la cantidad de bitcoins a comprar.<br> Las dos casillas de cantidad, una en función de la otra, guardan equivalencia matemática. Pudiendo determinar la cantidad en cualquiera de las dos.<br> Para el precio, se toma como válida, la cotización ₿ vigente del momento presente. Aplicada al precio ₿ de la oferta seleccionada. <br> <br>'}],
          [{ vl: '<br><b>2.Request. Amount (BTC to buy): </b> <br> Enter in this box the amount of bitcoins to buy. <br> The two amount boxes, one based on the other, have mathematical equivalence. Being able to determine the quantity in either of the two. <br> For the price, the quotation in force at the present time is taken as valid. Applied to the price ₿ of the selected offer. <br> <br>' }],
          [{ vl: '<br><b>2.Sol·licitud. Quantitat (BTC a comprar):</b><br> Introduïu en aquesta casella la quantitat de bitcoins a comprar.<br>Les dues caselles de quantitat, una en funció de l`altra, guarden equivalència matemàtica. Podent determinar la quantitat en qualsevol de les dues. <br> Pel preu, es pren com a vàlida, la cotització ₿ vigent del moment present. Aplicada a el preu ₿ de l`oferta seleccionada. <br> <br>' }],
          [{ vl: '<br><b>2.Solicitação. Quantidade (BTC para comprar):</b><br> Digite nesta caixa a quantidade de bitcoins a comprar.<br> As duas caixas de quantidade, uma em função da outra, têm equivalência matemática. Podendo determinar a quantidade em qualquer um dos dois. <br> Para o preço, considera-se válida a cotação ización em vigor no momento presente. Aplicado ao preço ₿ da oferta selecionada. <br> <br>' }],                                               
            ],                      
      },
      Acepto_terminos_del: {
       mtx: [
          [{ vl: 'Acepto términos del'}],
          [{ vl: 'I accept terms of the' }],
          [{ vl: 'Accepto termes del' }],
          [{ vl: 'Eu aceito os termos do' }],                                               
            ],           
      },
      Estado_var: {
       mtx: [
          [{ vl: 'Estado'}],
          [{ vl: 'State' }],
          [{ vl: 'Estat' }],
          [{ vl: 'Estado' }],                                               
            ],           
      },
      Facilitar_liberacion_de_solicitud: {
       mtx: [
          [{ vl: 'textolibre'},{ vl: 'Facilitar aceptación y garantía del Vendedor'}],
          [{ vl: 'textolibre' },{ vl: 'Facilitate acceptance and guarantee of the Seller'}],
          [{ vl: 'textolibre' },{ vl: 'Facilitar acceptació i garantia del Venedor'}],
          [{ vl: 'textolibre' },{ vl: 'Facilita a aceitação e garantia do Vendedor'}],                                               
            ],
       tlp_pt1_LN: [
          [{ vl: '<br><b>Facilitar aceptación y garantía del Vendedor:</b><br> '}],
          [{ vl: '<br><b>Facilitate acceptance and guarantee of the Seller:</b><br>' }],
          [{ vl: '<br><b><br><b>Facilitar acceptació i garantia del Venedor:</b><br> ' }],
          [{ vl: '<br><b><br><b>Facilita a aceitação e garantia do Vendedor:</b><br>' }],                                               
            ],            
       tlp_pt2: [
          [{ vl: '<br> Facilite al vendedor prueba de solvencia de compra (imagen nítida o pdf), saldo actual suficiente en el medio de pago, por los bitcoins a comprar. Considerado, en primera instancia, como mínima demostración de su capacidad de pago para la compra que solicita. Con el fín de que el vendedor acepte y le facilite detalles de su cuenta en  <b> <font color=yellow>'}],
          [{ vl: '<br> Provide the seller with proof of purchase solvency (clear image or pdf), sufficient current balance in the payment method, for the bitcoins to buy. Considered, in the first instance, as a minimum demonstration of your ability to pay for the purchase you request. In order for the seller to accept and provide details of their account in  <b> <font color=yellow>' }],
          [{ vl: '<br> Faciliti al venedor prova de solvència de compra (imatge nítida o pdf), saldo actual suficient al mitjà de pagament, pels bitcoins a comprar. Considerat, en primera instància, com a mínima demostració de la seva capacitat de pagament per a la compra que sol·licita. Amb la finalitat de que el venedor accepti i li faciliti detalls del seu compte en  <b> <font color=yellow>' }],
          [{ vl: '<br> Forneça ao vendedor um comprovante de solvência de compra (imagem clara ou pdf), saldo atual suficiente na forma de pagamento, para os bitcoins comprarem. Considerado, em primeira instância, como uma demonstração mínima de sua capacidade de pagamento pela compra que solicita. Para que o vendedor aceite e forneça detalhes de sua conta em  <b> <font color=yellow>' }],                                               
            ],
       tlp_pt3: [
          [{ vl: '</font>. La prueba de solvencia debiera ser procedente del medio de pago '}],
          [{ vl: '</font>. The solvency test should come from the means of payment ' }],
          [{ vl: '</font>. La prova de solvència hauria de ser procedent del mitjà de pagament ' }],
          [{ vl: '</font>. O teste de solvência deve vir do meio de pagamento ' }],                                               
            ],
       tlp_pt4: [
          [{ vl: '</font>,  mostrando fecha y hora presentes con su saldo actual disponible</b>. El vendedor pudiera requerir alguna prueba adicional a ésta con el mismo propósito.<br> <br> </b> Solicite al vendedor, via 💬 Chat Tx, o via privada, datos específicos del vendedor en '}],
          [{ vl: '</font>,  showing current date and time with your current available balance </b>. The seller may require some additional test to this one for the same purpose.<br> <br> </b> Ask the seller, via 💬 Chat Tx, or privately, specific details of the seller at ' }],
          [{ vl: '</font>,  mostrant data i hora presents amb el seu saldo actual disponible</b>. El venedor pogués requerir alguna prova addicional a aquesta amb el mateix propòsit.<br> <br> </b> Demani a venedor, via 💬 Xat Tx, o via privada, dades específiques del venedor en ' }],
          [{ vl: '</font>,  mostrando a data e hora atuais com seu saldo disponível atual </b>. O vendedor pode exigir algum teste adicional a este para o mesmo propósito.<br> <br> </b> Pergunte ao vendedor, via 💬 Chat Tx, ou em particular, detalhes específicos do vendedor em ' }],                                               
            ],
       tlp_pt7: [
          [{ vl: '</font><br><b><br><font color=yellow>En resguardo a su privacidad, aunque el 💬 Chat de la transacción abajo a la derecha es privado, cerrado y encriptado. Pudiendo remitir pruebas o documentos a través del mismo si lo desea. Cabe destacar que mejor, más privado incluso si prefiere, el cruze de documentos con el vendedor,  directamente de forma privada a través del medio personal que ustedes puedan acordar o requerir a través del 💬 Chat Tx (Ej. Email(cifrado), Whatsapp, Telegram ...).<br> El envio de pruebas o documentos a través del 💬 Chat Tx sólo sería requerido en caso inusual de incidencia o impago.</font> <br> <br>'}],
          [{ vl: '</font><br><b><br><font color=yellow>Safeguarding your privacy, although the transaction hat at the bottom right is private, closed and encrypted. Being able to send evidence or documents through it if you wish. It should be noted that better, more private even if you prefer, the crossing of documents with the seller directly in a private way through the personal means that you can agree or require through the 💬 Chat Tx (Eg. Email (encrypted), Whatsapp, Telegram ...).<br> The sending of evidence or documents through the 💬 Chat Tx would only be required in unusual case of incident or non-payment.</font> <br> <br>' }],
          [{ vl: '</font><br><b><br><font color=yellow>En resguard a la seva privacitat, encara que el 💬 Xat de la transacció baix a la dreta és privat, tancat i encriptat. Podent remetre proves o documents a través del mateix si ho desitja. Cal esmentar que millor, més privat fins i tot si ho preferiu, l`encreuament de documents amb el venedor, directament de forma privada a través del mitjà personal que vostès puguin acordar o requerir mitjançant el 💬 Xat Tx (Ex. Email (xifrat), WhatsApp, Telegram ...).<br> L`enviament de proves o documents a través del 💬 Xat Tx només seria requerit en cas inusual d`incidència o impagament.</font> <br> <br>' }],
          [{ vl: '</font><br><b><br><font color=yellow>Para salvaguardar a sua privacidade, embora o 💬 Chat da transação no canto inferior direito seja privado, fechado e criptografado. Poder enviar provas ou documentos através dele, se desejar. Ressalte-se que é melhor, mais particular mesmo que você prefira, o cruzamento de documentos com o vendedor, diretamente em particular através dos meios pessoais que você possa concordar ou solicitar através do 💬 Chat Tx (Ex. Email (criptografado), Whatsapp, Telegram ...).<br> O envio de testes ou documentos através do 💬 Chat Tx só seria necessário em casos incomuns de incidente ou falta de pagamento.</font> <br> <br>' }],                                               
            ],                                                            
      },
      Solicitar_var: {
       mtx: [
          [{ vl: 'Solicitar'}],
          [{ vl: 'Request' }],
          [{ vl: 'Sol.licitar' }],
          [{ vl: 'Candidatar' }],                                               
            ],
       ado: [
          [{ vl: 'Solicitado'}],
          [{ vl: 'Requested' }],
          [{ vl: 'Sol.licitat' }],
          [{ vl: 'Candidatado' }],                                               
            ],                       
      },
      TRANSACCION_en_transito: {
       mtx: [
          [{ vl: 'TRANSACCIÓN en tránsito, liberación a multifirma'}],
          [{ vl: 'TRANSACTION in transit, release to multi-signature' }],
          [{ vl: 'TRANSACCIÓ en trànsit, alliberament a multisignatura' }],
          [{ vl: 'TRANSAÇÃO em trânsito, liberação para múlti-assinaturas' }],                                               
            ],
       hlp: [
          [{ vl: '<br><b>3.Contrato Vendedor. Tx(ID), confirmaciones:</b><br> La transacción de liberación de los bitcoins a la dirección multifirma (2 de 3) ha sido verificada con éxito, en espera de las 6 confirmaciones mínimas habituales en la cadena de bloques de bitcoin (consideradas seguras e irreversibles). El número de confirmaciones, mostrado abajo, se actualiza automáticamente a los 10 minutos. Si lo prefiere, también cada vez que pulse el vinculo confirmaciones.<br> En la etiqueta Contrato (en la linea de tiempo), también dispone de un enlace a la Transacción donde puede analizarla en detalle. La Transacción es verificable en cuaquier explorador de bitcoin.<br> <br>'}],
          [{ vl: '<br><b>3.Selling Contract. Tx (ID), confirmations: </b> <br> The transaction to release the bitcoins to the multisig address (2 of 3) has been verified successfully, awaiting the 6 minimum confirmations usual in the blockchain of bitcoin (considered safe and irreversible). The number of confirmations, shown below, updates automatically after 10 minutes. If you prefer, also each time you click the confirmation link. <br> In the 3.Contract tab (on the timeline), you also have a link to the Transaction where you can analyze it in detail. The Transaction is verifiable in any bitcoin browser.<br> <br>' }],
          [{ vl: '<br><b>3.Contracte Venedor. Tx (ID), confirmacions:</b><br> La transacció d`alliberament dels bitcoins a l`adreça multisignatura (2 de 3) ha estat verificada amb èxit, tot esperant les 6 confirmacions mínimes habituals a la cadena de blocs de bitcoin (considerades segures i irreversibles). El nombre de confirmacions, mostrat a sota, s`actualitza automàticament cada 10 minuts. Si ho preferiu, també cada vegada que premeu el vincle confirmacions. <br> A l`etiqueta 3.Contracte (en la línia de temps), també disposeu d`un enllaç a la Transacció on podeu analitzar-la en detall. La Transacció és verificable en qualsevol explorador de bitcoin.<br> <br>' }],
          [{ vl: '<br><b>3.Contrato de venda. Tx (ID), confirmações:</b><br> A transação para liberar os bitcoins para o endereço de múltiplas assinaturas (2 de 3) foi verificada com sucesso, aguardando as 6 confirmações mínimas usuais no blockchain do bitcoin (considerado seguro e irreversível). O número de confirmações, mostrado abaixo, é atualizado automaticamente após 10 minutos. Se preferir, também sempre que clicar no link de confirmação. <br> Na guia 3.Contrato (na linha do tempo), você também tem um link para a Transação onde pode analisá-la detalhadamente. A transação pode ser verificada em qualquer navegador bitcoin.<br> <br>' }],                                               
            ],
       hlp_prev: [
          [{ vl: '<br><b>4.Previo pago Comprador:</b><br><br>  <font color=yellow>Sería muy aconsejable que aproveche este tiempo para registrar los datos de pago facilitados por el vendedor de forma privada o en el 💬 chat Tx. Teniendo todo a mano y preparado para materializar el pago al vendedor tan pronto se ratifique la garantía y Tx respaldo.</font><br> Si la 🔐Multigarantía Multifirma esta previamente establecida en la oferta de venta, y ésta dispone de saldo suficiente para firmar la Tx de Respaldo de entrega, el intercambio será practicamente inmediato. Caso contrario el tiempo de espera podria demorar hasta 60 minutos, 6 confirmaciones en la cadena de bloques de bitcoin. <br> <br>'}],
          [{ vl: '<br><b>Previous payment Buyer </b> <br><br>  <font color = yellow> It would be highly recommended that you take advantage of this time to register the payment details provided by the seller privately or in the 💬 Tx chat. Having everything at hand and prepared to materialize the payment to the seller as soon as are ratified waranty and Tx backup.</font><br>If the Multi-Signature 🔐Multi-guarantee is previously established in the sale offer, and this have enough balance to sign the Delivery Backup Tx, the exchange will be practically immediate. Otherwise the waiting time could take up to 60 minutes, 6 confirmations on the bitcoin blockchain. <br> <br>' }],
          [{ vl: '<br><b>Previ pagament comprador:</b><br><br> <font color=yellow> Seria molt aconsellable que aprofiti aquest temps per enregistrar les dades de pagament facilitades pel venedor de forma privada o al 💬 xat Tx. Tenint tot a mà i preparat per materialitzar el pagament al venedor tan aviat es ratifiquin la garantia y Tx Respatller. </font><br>Si la 🔐Multigarantia Multifirma està prèviament establerta a l`oferta de venda, i aquesta disposa de saldo suficient per signar la Tx de Respatller de lliurament, l`intercanvi serà pràcticament immediat. En cas contrari el temps d`espera podria demorar fins a 60 minuts, 6 confirmacions a la cadena de blocs de bitcoin. <br> <br>' }],
          [{ vl: '<br><b>4.Pagamento anterior do comprador:</b><br><br> <font color=yellow>É altamente recomendável que você aproveite esse tempo para registrar os detalhes de pagamento fornecidos pelo vendedor em particular ou no chat 💬 Tx. Com tudo em mãos e preparado para efetuar o pagamento ao vendedor assim que as garantia e Tx backup homologadas.</font><br>Se a Multi-Assinatura 🔐Multi-garantia estiver previamente estabelecida na oferta de venda e tiver saldo suficiente para assinar o Delivery Backup Tx, a troca será praticamente imediata. Caso contrário, o tempo de espera pode levar até 60 minutos, 6 confirmações no blockchain de bitcoin. <br> <br>' }],                                               
            ],            
       clock: [
          [{ vl: 'Bitcoins liberados con'}],
          [{ vl: 'Bitcoins released with' }],
          [{ vl: 'Bitcoins alliberats amb' }],
          [{ vl: 'Bitcoins lançados com' }],
            ],
       confirms: [
          [{ vl: 'confirmaciones'},{ vl: 'Verificando de nuevo en'},{ vl: 'Esperando 6 confirmaciones'},{ vl: 'Esperando confirmación liberación en Arbitraje'}],
          [{ vl: 'confirmations'},{ vl: 'Checking again at'},{ vl: 'Waiting for 6 confirmations'},{ vl: 'Waiting release confirmation in arbitration'}],
          [{ vl: 'confirmacions'},{ vl: 'Verificant de nou en'},{ vl: 'Esperant per 6 confirmacions'},{ vl: 'Esperant confirmació alliberament en Arbitraje'}],
          [{ vl: 'confirmações'},{ vl: 'Verificando novamente em'},{ vl: 'Esperando por 6 confirmações'},{ vl: 'Esperando liberação de confirmação na arbitragem'}],
            ],
       hlp_LN: [
          [{ vl: '<br><b>Previo pago Comprador:</b><br> En espera de la firma del vendedor en transacción de respaldo, como garantía de Entrega por los bitcoins requeridos a cobrar(previa liberación del vendedor a multifirma 2/2 en cadena bitcoin).<br> La verificación, mostrada abajo, se actualiza automáticamente cada 10 minutos. Si lo prefiere, también cada vez que pulse el vinculo verificar.<br> En la etiqueta 3.Contrato (en la linea de tiempo), también dispone de los detalles de la multifirma, tx de la garantía y tx de respaldo firmada en garantia de Entrega. El tiempo máximo establecido para la garantía y firma de Tx de respaldo por el vendedor es de 1 hora.<br>  <font color=yellow>Sería muy aconsejable que aproveche este tiempo para registrar los datos de pago facilitados por el vendedor de forma privada o en el 💬 chat Tx. Teniendo todo a mano y preparado para materializar el pago al vendedor tan pronto se verifique la garantía y firma del Vendedor, evitando así retrasos innecesarios. Cuando realize el pago, no olvide salvaguardar video sesión del proceso de pago según se estipula en el contrato a comprador, por si fuera necesaria en caso de incidencia o disputa.</font> <br> <br>'}],
          [{ vl: '<br><b>Previous payment Buyer: </b> <br> Waiting for the signature of the seller in the backup transaction, as a guarantee of Delivery for the bitcoins required to be collected (previous delivery of the seller to multi-signature 2/2 in bitcoin chain). <br> The verification, shown below, is automatically updated every 10 minutes. If you prefer, also each time you click the verify link. <br> In the label 3.Contract (in the timeline), you also have the details of the multi-signature, tx of the bond and tx of endorsement signed in guarantee of Delivery. The maximum time established for the guarantee and signature of the Tx of endorsement by the seller is 1 hour. <br> <font color = yellow> It would be highly advisable that you take advantage of this time to record the payment details provided by the seller privately or in the 💬 chat Tx. Having everything at hand and prepared to make the payment to the seller as soon as the guarantee and signature of the Seller is verified, thus avoiding unnecessary delays. When you make the payment, do not forget to save a video session of the payment process as stipulated in the buyer contract, in case it is necessary in case of incident or dispute.</font> <br> <br>' }],
          [{ vl: '<br><b>Previ pagament Comprador:</b><br> Tot esperant la signatura del venedor en transacció de suport, com a garantia de Lliurament pels bitcoins requerits a cobrar(prèvi alliberament del venedor a multisign 2/2 en cadena bitcoin).<br> La verificació, mostrada a baix, s`actualitza automàticament cada 10 minuts. Si ho prefereix, també cada vegada que premi el vincle verificar.<br> A l`etiqueta 3.Contracte (a la línia de temps), també disposa dels detalls de la multi signatura, tx de la garantia i tx de suport signada en garantia de Lliurament. El temps màxim establert per a la garantia i signatura de Tx de suport pel venedor és de 1 hora.<br> <font color=yellow>Seria molt aconsellable que aprofiti aquest temps per enregistrar les dades de pagament facilitades pel venedor de forma privada o al 💬 xat Tx. Tenint-ho tot a mà i preparat per materialitzar el pagament al venedor tan aviat es verifiqui la garantia i signatura del Venedor, evitant així retards innecessaris. Quan realitzeu el pagament, no oblideu salvaguardar vídeo sessió del procés de pagament segons s`estipula en el contracte a comprador, per si fos necessària en cas d`incidència o disputa.</font> <br> <br>' }],
          [{ vl: '<br><b>Pré-pagamento do comprador:</b><br> Aguardando assinatura do vendedor na operação de backup, como garantia de Entrega dos bitcoins a serem recolhidos (garantia prévia do vendedor para multi-assinatura 2/2 em cadeia de bitcoins).<br> A verificação, mostrada abaixo, é atualizada automaticamente a cada 10 minutos. Se preferir, também sempre que clicar no link, verifique.<br> Na etiqueta 3.Contrato (na linha do tempo), você também tem os detalhes da multi-assinatura, tx do depósito e tx do backup assinado em garantia de entrega. O tempo máximo estabelecido para a garantia e assinatura do Tx de endosso pelo vendedor é de 1 hora. <br> <font color = yellow> Seria altamente recomendável que você aproveite esse tempo para registrar os dados de pagamento fornecidos pelo vendedor em particular ou no 💬 chat Tx. Tendo tudo em mãos e preparado para efetuar o pagamento ao vendedor logo que se verifique a garantia e assinatura do vendedor, evitando assim atrasos desnecessários. No momento de efetuar o pagamento não se esqueça de guardar uma sessão de vídeo do processo de pagamento conforme estipulado no contrato de compra, caso seja necessário em caso de incidente ou litígio.</font> <br> <br>' }],
            ],            
      },
      Previo_var: {
       mtx: [
          [{ vl: 'Previo'}],
          [{ vl: 'Previous' }],
          [{ vl: 'Previ' }],
          [{ vl: 'Antes do' }],                                               
            ],                     
      },
      en_espera_de: {
        previo: [
          [{ vl: 'Tx Respaldo Entrega, peso y mineros determinado. ✅ '},{ vl: 'Tx Respaldo Entrega, a firmar Vendedor generada. ✅ '},{ vl: 'Tx Respaldo Entrega, firmada Vendedor y Arbitro. '},{ vl: 'Tx Respaldo Entrega, prueba final al Comprador. '}],
          [{ vl: 'Tx Support Delivery, weight and determined miners. ✅ ' },{ vl: 'Tx Support Delivery, to sign Vendor generated. ✅ '},{ vl: 'Tx Support Delivery, signed Seller and Arbitrator. '},{ vl: 'Tx Support Delivery, final test to the Buyer. '}],
          [{ vl: 'Tx Respatller Lliurament, pes i miners determinat. ✅ ' },{ vl: 'Tx Respatller Lliurament, a signar Venedor generada. ✅ '},{ vl: 'Tx Respatller Lliurament, signada Venedor i Àrbitre. '},{ vl: 'Tx Respatller Lliurament, prova final al Comprador. '}],
          [{ vl: 'Tx Suporte Entrega, peso e mineiros determinados. ✅ ' },{ vl: 'Tx Suporte Entrega, para assinar o Vendor gerado. ✅ '},{ vl: 'Tx Suporte Entrega, Vendedor e Árbitro assinados. '},{ vl: 'Tx Suporte Entrega, teste final ao Comprador. '}],                                               
            ],        
       tx1: [
          [{ vl: 'En espera de 🔐garantía multifirma y Tx de respaldo de entrega firmada por el Vendedor y el Arbitraje.'},{ vl: 'Estipule la donación a mineros, para la emisión y confirmación en la cadena de bloques de bitcoin de la Tx de Entrega Final de su compra.'},{ vl: ' Esperando aceptación de solvencia de compra.'},{ vl: ' Sólo en previsión para caso excepcional de disputa'}],

          [{ vl: 'Pending 🔐multi-signature and Tx guarantee delivery support signed by the Seller and the Arbitration.' },{ vl: 'Stipulate the  donation to miners, for the issuance and confirmation in the bitcoin blockchain of the Final Delivery Tx of your purchase.'},{ vl: ' Waiting for acceptance of purchase solvency.'},{ vl: ' Only in anticipation of exceptional case of dispute'}],

          [{ vl: 'Tot esperant  🔐garantia multisignatura i Tx de suport de lliurament signada pel Venedor i l`Arbitratge.' },{ vl: 'Estipuli la donació  a miners, per a l`emissió i la confirmació a la cadena de blocs de bitcoin de la Tx de Lliurament Final de la seva compra.'},{ vl: ' Esperant acceptació de solvència de compra.'},{ vl: ' Només en previsió per a cas excepcional de disputa'}],

          [{ vl: 'Pendente de 🔐multi-assinatura e Tx garantia de suporte de entrega assinado pelo Vendedor e a Arbitragem.' },{ vl: 'Estipular a doação aos mineiros, para a emissão e confirmação no blockchain de bitcoin do Tx de Entrega Final de sua compra.'},{ vl: ' Aguardando aceitação da solvência de compra.'},{ vl: ' Apenas em antecipação para caso excepcional de disputa'}],                                               
            ],
       tx2: [
          [{ vl: 'Asegúrese de tener registradas y verificadas las señas de pago facilitadas por el vendedor'}],
          [{ vl: 'Make sure you have registered and verified the payment details provided by the seller' }],
          [{ vl: 'Assegureu-vos de tenir registrades i verificades les senyes de pagament facilitades pel venedor' }],
          [{ vl: 'Certifique-se de ter registrado e verificado os detalhes de pagamento fornecidos pelo vendedor' }],                                               
            ],
       tx3: [
          [{ vl: 'Espere a contar con 6 confirmaciones para pagar'}],
          [{ vl: 'Please wait for 6 confirmations to pay' }],
          [{ vl: 'Espereu comptar amb 6 confirmacions per pagar' }],
          [{ vl: 'Aguarde 6 confirmações para pagar' }],                                               
            ],
        tx3_LN: [
          [{ vl: 'Espere la ⚡ garantía y firma del vendedor para pagar'},{ vl: 'Garantía en Contrato Multifirma'},{ vl: 'Firma Vendedor en Tx de Respaldo'},{ vl: 'Garantizado al Arbitraje'}],
          [{ vl: 'Wait for the ⚡ warranty and seller`s signature to pay' },{ vl: 'Warranty in Multi-Signature Contract'},{ vl: 'Seller Signature in Support Tx'},{ vl: 'Guaranteed to Arbitration'}],
          [{ vl: 'Espereu la ⚡ garantia i signatura del venedor per pagar' },{ vl: 'Garantia en Contracte Multirma'},{ vl: 'Firma Venedor a Tx de Respatller'},{ vl: 'Garantit a l`arbitratge'}],
          [{ vl: 'Aguarde a ⚡ garantia e a assinatura do vendedor para pagar' },{ vl: 'Garantia en contrato de multisig'},{ vl: 'Assinatura do Vendedor no Suporte Tx'},{ vl: 'Garantido à Arbitragem'}],                                               
            ],                                                    
      },
      Procesar_var: {
       mtx: [
          [{ vl: 'Procesar'},{ vl: 'verificar'}],
          [{ vl: 'Process' },{ vl: 'check'}],
          [{ vl: 'Processar'},{ vl: 'verificar' }],
          [{ vl: 'Processo' },{ vl: 'Verifica'}],                                               
            ],           
      },          
     Pago_Comprador: {
       hlp: [
          [{ vl: '<br><b>4.Pago Comprador:</b><br> La transacción de entrega sin restricción de emisión a fecha(locktime), firmada por el vendedor y el arbitraje, de los bitcoins a la dirección destino del comprador, ha sido verificada con éxito. Sólo falta emitirla a la cadena de bloques tan pronto el vendedor verifique el cobro (del pago a cambio por los bitcoins solicitados). <br> En la etiqueta 3.Contrato (en la linea de tiempo), dispone la Transacción de Respaldo Entrega(con emisión restringida a fecha, locktime) donde puede comprobarlo. La Transacción es verificable en cualquier cartera de bitcoin.<br><br> <font color=red>Ejecute el pago al vendedor a la mayor brevedad en '},{ vl: '</font></b>. No olvide salvar el justificante del pago(imagen nítida y legible o archivo pdf) y que la Donación a mineros se ha establecido a tiempo real. <br> Tan pronto haya ejecutado el pago con éxito, marque aquí la casilla de validación: Pago y justificante, y a continuación pulse el botón de NOTIFICAR PAGO. Quedando a la espera de la ratificación del cobro por parte del vendedor. Seguidamente podamos emitir de inmediato la transacción de entrega a la red bitcoin.</font> <br> <br>'}],

          [{ vl: '<br><b>4.Buyer Payment:</b><br> The delivery transaction without restriction of issuance to date (locktime), signed by the seller and the arbitration, of the bitcoins to the destination address of the buyer, has been verified successfully. All that remains is to issue it to the blockchain as soon as the seller verifies the collection (of the payment in exchange for the requested bitcoins). <br> On the 3.Contract label (on the timeline), you have the Delivery Backup Transaction (with issue restricted to date, locktime) where you can check it. The Transaction is verifiable in any bitcoin wallet. <br> <br> <font color = red> Execute the payment to the seller as soon as possible in ' },{ vl: '</font></b>. Do not forget to save the proof of payment (clear and legible image or pdf file) and that the Donation to miners has been established in real time. <br> As soon as you have executed the payment successfully, check the validation box here: Payment and receipt, and then press the NOTIFY PAYMENT button. Waiting for the confirmation of the payment by the seller. Then we can immediately issue the delivery transaction to the bitcoin network.</font> <br> <br>'}],

          [{ vl: '<br><b>4.Pagament Comprador:</b><br>La transacció de lliurament sense restricció d`emissió a data(locktime), signada pel venedor i l`arbitratge, dels bitcoins a l`adreça destí del comprador, ha estat verificada amb èxit. Només falta emetre-la a la cadena de blocs tan bon punt el venedor verifiqui el cobrament (del pagament a canvi pels bitcoins sol·licitats). <br> A l`etiqueta 3.Contracte (a la línia de temps), disposa la Transacció de Respatller Lliurament (amb emissió restringida a data, locktime) on pot comprovar-ho. La Transacció és verificable a qualsevol cartera de bitcoin.<br><br> <font color=red>Executeu el pagament al venedor com més aviat a '},{ vl: '</font></b>. No oblidi salvar el justificant de pagament (imatge nítida i llegible o arxiu pdf) i que la Donació a miners ha sigut establerta a temps real. <br> Tan aviat s`hagi executat el pagament amb èxit, marqui aquí la casella de validació: Pagament i justificant, i tot seguit premeu el botó de NOTIFICAR PAGAMENT. Quedant al aguait de la ratificació del cobrament per part del venedor. Seguidament puguem emetre immediatament la transacció de lliurament a la xarxa bitcoin.</font> <br> <br>'}],

          [{ vl: '<br><b>4.Pagamento do Comprador:</b><br> A transação de entrega sem restrição de emissão até a data (locktime), assinada pelo vendedor e a arbitragem, dos bitcoins para o endereço de destino do comprador, foi verificada com sucesso. Tudo que precisa fazer é enviá-lo para o blockchain assim que o vendedor verificar o pagamento (do pagamento em troca dos bitcoins solicitados). <br> Na aba 3.Contrato (na linha do tempo), você tem a Transação de Backup de Entrega (com problema restrito a data, tempo de bloqueio) onde você pode verificar. A Transação pode ser verificada em qualquer carteira bitcoin.<br><br> <font color=red>Execute o pagamento ao vendedor o mais rápido possível em ' },{ vl: '</font></b>. Não se esqueça de guardar o comprovativo de pagamento (imagem nítida e legível ou ficheiro pdf) e que a doação aos mineiros foi estabelecida em tempo real. <br> Assim que você tiver executado o pagamento com sucesso, marque a caixa de validação aqui: Pagamento e recebimento, e a seguir pressione o botão NOTIFICAR PAGAMENTO. Aguardando a confirmação do pagamento pelo vendedor. Então, podemos emitir imediatamente a transação de entrega para a rede bitcoin.</font> <br> <br>'}],                                               
            ],
       hlp_LN: [
          [{ vl: '<br><b>4.Pago Comprador:</b><br> La liberación al arbitraje(realizada por el vendedor) según <font color=Darkorange>⚡</font> Prueba de Pago: '},{ vl: '</font> de la <font color=Darkorange>⚡</font> Factura ID: '},{ vl: '</font> ha sido verificada con éxito. Ratificable en nodos de la <font color=Darkorange>⚡</font> Red de rayos, o desde cualquier cartera de la <font color=Darkorange>⚡</font> Red de rayos, sólo reintentando pagar la <font color=Darkorange>⚡</font> Solicitud de Pago(liberación): '},{ vl: ' YA PAGADA previamente por el vendedor en la liberación de los bitcoins solicitados.<br><br> <font color=red>Ejecute el pago al vendedor a la mayor brevedad en '},{ vl: '</font></b>. No olvide salvar el justificante del pago(imagen nítida y legible o archivo pdf). Recuerde también que debe salvaguardar en su poder video o sesión nitida del proceso de pago según CONTRATO(caso de incidencia pudiera ser requerido por este arbitraje como prueba). <br> Tan pronto haya ejecutado el pago con éxito, marque aquí la casilla de validación: Pago y justificante, y a continuación pulse el botón de NOTIFICAR PAGO. Quedando a la espera de la ratificación del cobro por parte del vendedor. Seguidamente podamos recibir su <font color=Darkorange>⚡</font> Solicitud de Pago(Entrega) en el Arbitraje, verificarla, y proceder inmediatamente al pago de la <font color=Darkorange>⚡</font> Factura ID(Entrega), finalizando así la compra-venta.</font> <br> <br>'}],
          [{ vl: '<br><b>4.Buyer Payment:</b><br> The release to arbitration (carried out by the seller) according to <font color=Darkorange>⚡</font> Proof of payment: ' },{ vl: '</font> de la <font color=Darkorange>⚡</font> Invoice ID: '},{ vl: '</font> has been verified successfully. Ratifiable in nodes of the <font color=Darkorange>⚡</font> Lightning network, or from any wallet in the <font color=Darkorange>⚡</font> Lightning network, just retrying to pay the <font color=Darkorange>⚡</font> Payment Request (release): '},{ vl: '</a> ALREADY PAID in advance by the seller in the release of the requested bitcoins.<br><br> <font color=red>Execute the payment to the seller as soon as possible in '},{ vl: '</font></b>. Do not forget to save the proof of payment (clear and legible image or pdf file). Remember also that you must safeguard in your possession a video or a clear session of the payment process according to CONTRACT (case of incidence could be required by this arbitration as proof). <br> As soon as you have executed the payment successfully, check the validation box here: Payment and receipt, and then press the NOTIFY PAYMENT button. Waiting for the confirmation of the payment by the seller. Then we can receive your <font color=Darkorange>⚡</font> Payment Request (Delivery) in the Arbitration, verify it, and proceed immediately to the payment of the <font color=Darkorange>⚡</font> Invoice ID (Delivery), finalizing the purchase-sale.</font> <br> <br>'}],
          [{ vl: '<br><b>4.Pagament Comprador:</b><br> L`alliberament a l`arbitratge (realitzada pel venedor) segons <font color=Darkorange>⚡</font> Prova de Pagament: '},{ vl: '</font> de la <font color=Darkorange>⚡</font> Factura ID: '},{ vl: '</font> ha estat verificada amb èxit. Ratificable en nodes de la <font color=Darkorange>⚡</font> Xarxa de llamps, o desde qualsevol  cartera de la <font color=Darkorange>⚡</font> Xarxa de llamps, només reintentant pagar la  <font color=Darkorange>⚡</font> Solicitud de Pagament(alliberament): '},{ vl: '</a> JA PAGADA previament pel vendedor en alliberament dels bitcoins sol.licitats.<br><br> <font color=red>Executeu el pagament al  venedor com més aviat a '},{ vl: '</font></b>. No oblidi salvar el justificant de pagament (imatge nítida i llegible o arxiu pdf). Recordeu també que heu de salvaguardar en el vostre poder vídeo o sessió nitida del procés de pagament segons CONTRACTE (cas d`incidència pogués ser requerit per aquest arbitratge com a prova). <br> Tan aviat s`hagi executat el pagament amb èxit, marqui aquí la casella de validació: Pagament i justificant, i tot seguit premeu el botó de NOTIFICAR PAGAMENT. Quedant al aguait de la ratificació del cobrament per part del venedor. Seguidament puguem rebre la vostre <font color=Darkorange>⚡</font> Sol.licitud de Pagament(Lliurament) en el Arbitratge, verificarla, y procedir inmediatament al pagament de la <font color=Darkorange>⚡</font> Factura ID(Lliurament), finalitzant així la compra-venta.</font> <br> <br>'}],
          [{ vl: '<br><b>4.Pagamento do Comprador:</b><br> A liberação para arbitragem (realizada pelo vendedor) de acordo com <font color=Darkorange>⚡</font> Prova de pagamento: ' },{ vl: '</font> de la <font color=Darkorange>⚡</font> ID da fatura: '},{ vl: '</font> foi verificado com sucesso. Ratificável em nós do <font color=Darkorange>⚡</font> Rede Ray, ou de qualquer portfólio no <font color=Darkorange>⚡</font> Rede relâmpago, apenas tentando pagar o<font color=Darkorange>⚡</font> Pedido de pagamento (liberação): '},{ vl: '</a> JÁ PAGOU antecipadamente pelo vendedor na liberação dos bitcoins solicitados.<br><br> <font color=red>Execute o pagamento ao vendedor o mais rápido possível em '},{ vl: '</font></b>. No olvide salvar el justificante del pago(imagen nítida y legible o archivo pdf). Recuerde también que debe salvaguardar en su poder video o sesión nitida del proceso de pago según CONTRATO(caso de incidencia pudiera ser requerido por este arbitraje como prueba). <br> Tan pronto haya ejecutado el pago con éxito, marque aquí la casilla de validación: Pago y justificante, y a continuación pulse el botón de NOTIFICAR PAGO. Quedando a la espera de la ratificación del cobro por parte del vendedor. Seguidamente podamos recibir su <font color=Darkorange>⚡</font> Solicitação de Pagamento (Entrega) na Arbitragem, verifique e proceda imediatamente ao pagamento do <font color=Darkorange>⚡</font> ID da fatura (entrega), finalizando assim a compra-venda.</font> <br> <br>'}],                                               
            ],                      
       vars: [
          [{ vl: 'Ejecute el pago al vendedor sin demora en'},{ vl: 'Pago y justificante'},{ vl: 'Remitir justificante del pago'},{ vl: 'Notificar pago'}],
          [{ vl: 'Execute the payment to the seller without delay' },{ vl: 'Payment and proof'},{ vl: 'Send proof of payment'},{ vl: 'Notify payment'}],
          [{ vl: 'Executeu el pagament al venedor sense retard a'},{ vl: 'Pagament i justificant' },{ vl: 'Remetre justificant del pagament'},{ vl: 'Justificar pagament'}],
          [{ vl: 'Execute o pagamento ao vendedor sem demora' },{ vl: 'Pagamento e recibo'},{ vl: 'Enviar comprovante de pagamento'},{ vl: 'Notificar o pagamento'}],                                               
            ],
        hlp_remitir: [
          [{ vl: '<br><b>Remitir justificante del pago:</b><br>Recuerde que debe remitir el justificante del pago(imagen nítida y legible o archivo pdf) por el medio de comunicación privado acordado con el vendedor o en el 💬 chat de la Tx. Facilitando la ratificación del cobro por parte del vendedor a la mayor brevedad. <br> <br>'}],
          [{ vl: '<br><b>Send proof of payment: </b> <br> Remember that you must send proof of payment (clear and legible image or pdf file) by the private means agreed with the seller or in the 💬 Tx chat. Facilitating the ratification of the collection by the seller as soon as possible. <br> <br>' }],
          [{ vl: '<br><b>Remetre justificant del pagament:</b><br>Recordi que ha de remetre el justificant del pagament (imatge nítida i llegible o arxiu pdf) pel medi privat acordat amb el venedor o al 💬 xat de la Tx. Facilitant la ratificació del cobrament per part del venedor com més aviat.  <br> <br>' }],
          [{ vl: '<br><b>Remitir comprovante de pagamento:</b><br>Lembre-se que deve enviar o comprovativo de pagamento (imagem nítida e legível ou arquivo pdf) através do meio de comunicação privado acordado com o vendedor ou no chat 💬 Tx. Facilitar a homologação da cobrança pelo vendedor o mais rápido possível. <br> <br>' }],                                               
            ],                        
      },      
      Cobro_Vendedor: {
        
       vars: [
          [{ vl: 'Notificación pago comprador'},{ vl: 'Cobro recibido y justificante'},{ vl: 'Remitir justificante del cobro'},{ vl: 'Ratificar Cobro'},{ vl: 'Impago Denegar Entrega'}],
          [{ vl: 'Buyer payment notification'},{ vl: 'Collection received and proof'},{ vl: 'Send proof of collection'},{ vl: 'Ratify Collection'},{ vl: 'Non-payment Deny Delivery'}],
          [{ vl: 'Notificació pagament comprador'},{ vl: 'Cobrament rebut i justificant'},{ vl: 'Remetre justificant del cobrament'},{ vl: 'Ratificar Cobrament'},{ vl: 'Impagament Denegar Lliurament'}],
          [{ vl: 'Notificação de pagamento do comprador'},{ vl: 'Coleção do vendedor recebido e comprovante'},{ vl: 'Remitir justificante del cobro'},{ vl: 'Ratificar coleção'},{ vl: 'Recusa de entrega por falta de pagamento'}],,                                               
            ],                     
      },
      pre_rati_cobro_selminers: {
       vars: [
          [{ vl: 'Ratificación cobro vendedor'},{ vl: 'Seleccionada donación '},{ vl: 'Comisión mineros en Bitcoins para Tx de Respaldo'},{ vl: 'Selección "donación mineros" de red bitcoin'},{ vl: 'Recibir Bitcoins'}],
          [{ vl: 'Seller payment ratification'},{ vl: 'Selected donation  '},{ vl: 'Miners commission in Bitcoins for Backup Tx'},{ vl: 'Selection "miners donation" of bitcoin network'},{ vl: 'Receive Bitcoins'}],
          [{ vl: 'Ratificació cobrament venedor'},{ vl: 'Seleccionada donació '},{ vl: 'Comissió miners Bitcoins  per Tx de Respatller'},{ vl: 'Selecció "donació miners" de xarxa bitcoin'},{ vl: 'Rebre Bitcoins'}],
          [{ vl: 'Ratificação de coleção do vendedor'},{ vl: 'Doação selecionada'},{ vl: 'Comissão de mineiros em Bitcoins da Tx Respaldo '},{ vl: 'Seleção "doação de mineiros" da rede bitcoin'},{ vl: 'Receber Bitcoins'}],                                               
            ],
       hlp_selminers: [
          [{ vl: '<br><b>Selección donación mineros de red bitcoin:</b><br><font color=yellow> Cabe destacar que la comsión de los mineros de bitcoin es completamente ajena al servicio de arbitraje.</font> De igual manera, siendo fundamental si pretendemos que cuaquier transacción (Tx) sea procesada en la red bitcoin.<br>  Estipulamos la comisión de mineros, previo análisis del estado de la red, necesaria para que la transacción sea procesada con garantia. Una comisión demasiado pequeña podría derivar en una transacción que nunca sería confimada.<br> Si lo prefiere(especialmente si el importe de su compra es pequeño), puede seleccionar en el desplegable de encima la opción más económica. Siendo consciente que reduce la comisión por mineros alargando a cambio el tiempo de confirmación. Si así lo decide selecciónelo. <br> La comisión de mineros varia dependiendo del grado de carga de la red bitcoin. </font> <br> <br>'}],
          [{ vl: '<br><b>Selection of bitcoin miners donation: </b> <br> <font color = yellow> It should be noted that the commission of bitcoin miners is completely unrelated to the arbitration service. </font> Similarly, being fundamental if we intend that any transaction (Tx) is processed in the bitcoin network. <br> We stipulate the miners commission, after analyzing the state of the network, necessary for the transaction to be processed with guarantee. Too small a commission could lead to a transaction that would never be confirmed. <br> If you prefer (especially if the amount of your purchase is small), you can select the cheaper option from the drop-down above. Being aware that it reduces the commission for miners by lengthening the confirmation time. If you decide to do so, select it. <br> The miners commission varies depending on the degree of load of the bitcoin network. </font> <br> <br>' }],
          [{ vl: '<br><b>Selecció donació miners de xarxa bitcoin:</b><br><font color=yellow> Cal destacar que la comissió dels miners de bitcoin és completament aliena al servei d`arbitratge.</font> De la mateixa manera, sent fonamental si pretenem que qualsevol transacció (Tx) sigui processada a la xarxa bitcoin.<br>  Estipulem la comissió de miners, prèvi anàlisi de l`estat de la xarxa, necessaria perquè la transacció sigui processada amb garantia. Una comissió massa petita podria derivar en una transacció que mai seria confimada.<br> Si ho prefereix (especialment quan l`import de la seva compra és petit), podeu seleccionar al desplegable de sobre la opció més econòmica. Sent conscient que redueix la comissió per miners allargant a canvi el temps de confirmació. Si així ho decideix seleccioneula. <br> La comissió de miners varia depenent del grau de càrrega de la xarxa bitcoin. </font> <br> <br>' }],
          [{ vl: '<br><b>Seleção de doação para mineiros da rede Bitcoin:</b><br><font color=yellow> Deve-se observar que a comissão dos mineradores de bitcoin não está totalmente relacionada ao serviço de arbitragem.</font> Da mesma forma, é essencial se quisermos que qualquer transação (Tx) seja processada na rede bitcoin.<br>  Estipulamos a comissão de mineiros, após análise do estado da rede, necessária para que a transação seja processada com garantia . Uma comissão muito pequena pode levar a uma transação que nunca será confirmada.<br> Se preferir (especialmente se o valor da sua compra for pequeno), você pode selecionar a opção mais barata no menu suspenso acima. Ciente de que isso reduz a comissão para os mineiros, alongando o tempo de confirmação. Se você decidir fazer isso, selecione-o. <br> A comissão dos mineiros varia dependendo do grau de carga da rede bitcoin. </font> <br> <br>' }],
            ],                                 
      },
      Entrega_de_la_compra: {
       vars: [
          [{ vl: 'de la compra'},{ vl: 'Dirección Bitcoin del Comprador'},{ vl: 'Copiar dirección bitcoin del comprador al portapapeles'},{ vl: 'Dirección Bitcoin de destino estipulada por el Comprador'},{ vl: 'Dirección Bitcoin destino final de la entrega'},{ vl: 'Activa / desactiva escanear el código Qr de 🔗 dirección bitcoin destino final entrega'},{ vl: 'Confirmar destino entrega'},{ vl: 'Dirección Bitcoin destino final de la entrega (caso de disputa)'}],
          [{ vl: 'of the purchase'},{ vl: 'Buyer`s Bitcoin Address'},{ vl: 'Copy buyer`s bitcoin address to clipboard'},{ vl: 'Destination Bitcoin address stipulated by the Buyer'},{ vl: 'Bitcoin address final destination of delivery'},{ vl: 'Activates / deactivates scanning the Qr code of 🔗 bitcoin address final destination delivery'},{ vl: 'Confirm delivery destination'},{ vl: 'Bitcoin address final destination of delivery (dispute case)'}],
          [{ vl: 'de la compra'},{ vl: 'Adreça Bitcoin del Comprador'},{ vl: 'Copiar l`acreça bitcoin del comprador al porta-retalls'},{ vl: 'Adreça Bitcoin de destí estipulada pel Comprador'},{ vl: 'Adreça Bitcoin destinació final del lliurament'},{ vl: 'Activa / desactiva escanejar el codi Qr d` 🔗 adreça bitcoin destinació final lliurament'},{ vl: 'Confirmar desti final del lliurament'},{ vl: 'Adreça Bitcoin destinació final del lliurament (cas de disputa)'}],
          [{ vl: 'da compra'},{ vl: 'Endereço Bitcoin do comprador'},{ vl: 'Copie o endereço bitcoin do comprador para a área de transferência'},{ vl: 'Endereço Bitcoin de destino estipulado pelo Comprador'},{ vl: 'Endereço Bitcoin, destino final de entrega'},{ vl: 'Ativa / desativa a digitalização do código Qr de 🔗 endereço bitcoin entrega no destino final'},{ vl: 'Confirme o destino da entrega'},{ vl: 'Endereço Bitcoin, destino final de entrega(caso de disputa)'}],                                              
            ],
        hlp: [
          [{ vl: '<br><b>Confirmar Dirección bitcoin destino de la entrega al comprador:</b><br><br>Pegue en la casilla <font color=crimson>[Dirección Bitcoin destino final de la entrega]</font>, la Dirección Bitcoin que desee estipular para el envio final como destino de la entrega de su compra, (se acepta cualquier tipo de dirección bitcoin: P2PKH, P2SH o Bech32).<br> Si desea recibir el envio en su dirección bitcoin original de comprador usada en esta plataforma, simplemente CONFIRMAR DESTINO ENTREGA. <br><font color=yellow> PRECAUCIÓN: Asegúrese doblemente que la dirección de destino sea la correcta, antes de confirmar, pues el proceso de envio de bitcoins es irreversible.</font> <br> <br>'}],
          [{ vl: '<br><b>Confirm bitcoin address destination of the delivery to the buyer: </b> <br> <br> Paste in the box <font color = crimson> [Bitcoin address final destination of the delivery] </font>, the Bitcoin address you wish to stipulate for the final shipment as the destination of the delivery of your purchase, (any type of bitcoin address is accepted: P2PKH, P2SH or Bech32). <br> If you wish to receive the shipment at your original buyer`s bitcoin address used in this platform, then we show it, simply CONFIRM DESTINATION DELIVERY. <br> <font color = yellow> CAUTION: Double-check that the destination address is correct, before confirming, as the process of sending bitcoins is irreversible.</font> <br> <br>' }],
          [{ vl: '<br><b>Estipular l`adreça bitcoin destí del lliurament al comprador:</b><br><br>Enganxeu a la casella <font color=crimson>[Adreça Bitcoin destinació final del lliurament]</font>, l`adreça Bitcoin que desitgi estipular pel lliurament final com a destí de lliurament de la seva compra, (s`accepta qualsevol tipus d`adreça bitcoin: P2PKH, P2SH o Bech32).<br> Si desitja rebre el lliurament a la seva adreça bitcoin original de comprador utilitzada en aquesta plataforma, seguidament la mostrem, simplement  CONFIRMAR DESTÍ DEL LLIURAMENT. <br><font color=yellow> PRECAUCIÓ: Asseguri doblement que l`adreça de destí sigui la correcte, abans de confirmar, ja que el procés de lliurament dels bitcoins és irreversible.</font> <br> <br>' }],
          [{ vl: '<br><b>Confirme o endereço do bitcoin de destino de entrega ao comprador:</b><br><br>Colar na caixa <font color=crimson>[Endereço Tether, destino final de entrega]</font>, O Endereço Bitcoin que deseja estipular para o envio final como destino de entrega da sua compra, (aceita-se qualquer tipo de endereço bitcoin: P2PKH, P2SH ou Bech32).<br> Se você deseja receber a remessa no endereço original de bitcoin do comprador utilizado nesta plataforma, simplesmente CONFIRME . <br><font color=yellow> CUIDADO: Verifique novamente se o endereço de destino está correto antes de confirmar, pois o processo de envio de bitcoins é irreversível.</font> <br> <br>' }],
            ],
       scan_var: [
          [{ vl: 'Escanear el código Qr de su 🔗 dirección destino'}],
          [{ vl: 'Scan the Qr code of your 🔗 destination address'}],
          [{ vl: 'Escanejar el codi Qr de la seva 🔗 direcció destí'}],
          [{ vl: 'Digitalize o código Qr do seu endereço de destino 🔗'}],                                              
            ],
       hlp_scan_var: [
          [{ vl: 'Activa / desactiva escanear el código Qr de <br />🔗 dirección bitcoin destino final entrega'}],
          [{ vl: 'Activates / deactivates scanning the Qr code of <br /> 🔗 bitcoin address final destination delivery'}],
          [{ vl: 'Activa / desactiva escanejar el codi Qr d` <br /> 🔗 adreça bitcoin destinació final lliurament'}],
          [{ vl: 'Ativa / desativa a digitalização do código Qr de <br /> 🔗 endereço bitcoin entrega no destino final'}],                                              
            ],
       destino_estipulada: [
          [{ vl: 'Dirección Bitcoin de destino estipulada por el comprador'}],
          [{ vl: 'Destination Bitcoin address stipulated by the buyer'}],
          [{ vl: 'Adreça Bitcoin de destí estipulada pel comprador'}],
          [{ vl: 'Endereço Bitcoin de destino estipulado pelo comprador'}],                                              
            ],                                   
      },
      Entregada_la_compra: {
       vars: [
          [{ vl: 'Enviada en Transacción Tx ID'},{ vl: 'Eliminando toda la compra-venta de esta plataforma en'},{ vl: 'ELIMINAR YA'}],

          [{ vl: 'Sent in Transaction Tx ID'},{ vl: 'Eliminating all the buying and selling of this platform in'},{ vl: 'Eliminate now'}],

          [{ vl: 'Lliurada en Transacció Tx ID'},{ vl: 'Eliminant tota la compravenda d`aquesta plataforma en'},{ vl: 'Eliminar ara'}],

          [{ vl: 'Enviado na transação Tx ID'},{ vl: 'Eliminando completamente a compra e venda desta plataforma em'},{ vl: 'Eliminar agora'}],                                             
            ],
       hlp_enviada: [
          [{ vl: '<br><b>Entrega enviada en Transacción (ID):</b><br> <b>¡ Damos por finalizada esta transacción de compra-venta con éxito !</b> Inmortalizada en la cadena de bloque de bitcoin sólo a través de las direcciones públicas. Pudiendo revisar la transacción de entrega directamente, bien través del vinculo de la transacción o explorando su dirección bitcoin pública asociada a ésta, desde cualquier explorador de la cadena de bloques de bitcoin.<br> Fieles al resguardo de la privacidad y no siendo ya necesario mantener registros vinculados a la transacción de compra-venta, procedemos a la eliminación de registros, ficheros y chat Tx (en Contobit) de este proceso de arbitraje concluido satisfactoriamente.<br> <br>'}],
          [{ vl: '<br><b>Delivery sent in Transaction (ID): </b> <br> <b> We conclude this sale and purchase transaction successfully! </b> Immortalized in the bitcoin blockchain only through public addresses . Being able to review the delivery transaction directly, either through the transaction link or by exploring its public bitcoin address associated with it, from any explorer of the bitcoin blockchain. <br> Faithful to the protection of privacy and no longer necessary maintain records linked to the sale and purchase transaction, we proceed to the elimination of records, files and Tx chat (in Contobit) of this arbitration process successfully.<br> <br>'}],
          [{ vl: '<br><b>Lliurament enviat a Transacció (ID):</b><br> <b> Donem per finalitzada aquesta transacció de compravenda amb èxit!</b> Immortalitzada a  la cadena de blocs de bitcoin només a través de les adreces públiques. Podent revisar la transacció de lliurament directament, bé mitjançant el vincle de la transacció o explorant la seva adreça bitcoin pública associada a aquesta, des de qualsevol explorador de la cadena de blocs de bitcoin. <br> Fidels al resguard de la privacitat i no sent ja necessari mantenir registres vinculats a la transacció de compravenda, procedim a l`eliminació de registres, fitxers i xat Tx (en Contobit) d`aquest procés d`arbitratge conclòs satisfactòriament.<br> <br>'}],
          [{ vl: '<br><b>Entrega enviada na transação (ID):</b><br> <b> Concluímos esta transação de venda e compra com sucesso!</b> Imortalizado no blockchain bitcoin apenas por meio de endereços públicos. Ser capaz de revisar a transação de entrega diretamente, seja por meio do link de transação ou explorando seu endereço bitcoin público associado a ela, a partir de qualquer explorador do blockchain de bitcoin.<br> Fiel à proteção da privacidade e não sendo mais necessário manter os registros relacionados à transação de compra e venda, procedemos à eliminação dos registros, arquivos e chat Tx (em Contobit) deste processo de arbitragem concluído com sucesso.<br> <br>'}],                                              
            ],
        tlp_eliminar: [
          [{ vl: 'FIELES AL RESGUARDO A LA PRIVACIDAD,<br /> AL PULSAR EL BOTÓN, PROCEDEMOS A LA,<br /> COMPLETA ELIMINACIÓN DE TODO REGISTRO<br /> ASOCIADO A ESTA TX DE COMPRA-VENTA<br /> EN ESTA PLATAFORMA.'}],
          [{ vl: 'FAITHFUL TO THE PROTECTION OF PRIVACY, <br /> BY PRESSING THE BUTTON, WE PROCEED TO THE, <br /> COMPLETE ELIMINATION OF ALL REGISTRATION <br /> ASSOCIATED WITH THIS PURCHASE-SALE TX <br /> ON THIS PLATFORM.'}],
          [{ vl: 'FIDELS AL RESGUARD A LA PRIVACITAT,<br /> EN PREMER EL BOTÓ, PROCEDIM A LA,<br /> COMPLERTA EL.LIMINACIÓ DE TOT REGISTRE<br /> LLIGAT AMB  AQUESTA TX DE COMPRA-VENDA<br /> EN AQUESTA PLATABANDA'}],
          [{ vl: 'FIEL COM A PROTEÇÃO DA PRIVACIDADE,<br /> PRESSIONANDO O BOTÃO, PROCEDEMOS À, <br /> ELIMINAÇÃO COMPLETA DE TODOS OS REGISTOS <br /> ASSOCIADOS A ESTE TX DE COMPRA-VENDA <br /> NESTA PLATAFORMA.'}],                                              
            ],           
      },                  

      Entrega_compra_LN: {
       vars: [
          [{ vl: 'Cantidad a entregar'},{ vl: 'Copiar cantidad a entregar al portapapeles'},{ vl: 'Solicitud de Pago:(Entrega)'},{ vl: 'Escanear código Qr de'},{ vl: '⏳ Esperando pago del Vendedor de la Factura Lighning por la comisión del Arbitraje.'}],
          [{ vl: 'Quantity to be delivered'},{ vl: 'Copy quantity to be delivered to clipboard'},{ vl: 'Payment Request:(Delivery)'},{ vl: 'Scan Qr code from'},{ vl: '⏳ Waiting for payment from the Seller of the Lightning Invoice for the commission of the Arbitration.'}],
          [{ vl: 'Quantitat a lliurar'},{ vl: 'Copiar quantitat a lliurar al portaretalls'},{ vl: 'Sol·licitud de Pagament: (Lliurament)'},{ vl: 'Escanejar codi Qr de'},{ vl: '⏳ Esperant pagament del Venedor de la Factura Lightning per la comissió de l`Arbitratge.'}],
          [{ vl: 'Quantidade a ser entregue'},{ vl: 'Copie a quantidade a ser entregue na área de transferência'},{ vl: 'Solicitação de Pagamento: (entrega)'},{ vl: 'Digitalize o código Qr de'},{ vl: '⏳ Aguardando pagamento do Vendedor da Fatura Lightning para a comissão da Arbitragem.'}],                                             
            ],
       hlp_entrg: [
          [{ vl: '<br><b>Entrega de la compra:</b><br> La cantidad de bitcoins o satoshis a entregar, según estipulado en el CONTRATO, es la cantidad solicitada por el comprador menos el 0.25% (como máximo) por costo del arbitraje. Genere desde su cartera de <font color=Darkorange>⚡</font> Red de rayos la <font color=Darkorange>⚡</font> Solicitud de Pago, por el importe detallado en cantidad a entregar, y péguela aquí en la casilla <font color=Darkorange>⚡</font> Solicitud de Pago. Para ser verificada y pagada inmediatamente por el Vendedor. <font color=red><br><b>¡IMPORTANTE! La <font color=Darkorange>⚡</font> Solicitud de Pago(Entrega) debe ser por la cantidad exacta que tiene deducido el costo del arbitraje.<br> Asegúrese de contar, con <font color=Darkorange>⚡</font> canales abiertos en su cartera, con capacidad de recepción suficiente para recibir el pago de su solicitud.<br> (*)Pulse sobre la cantidad a entregar si desea cambiar la equivalencia.</b></font> </b>  <br> <br>'}],
          [{ vl: '<br><b>Delivery of the purchase!:</b><br> The amount of bitcoins or satoshis to be delivered, as stipulated in the CONTRACT, is the amount requested by the buyer minus 0.25% (maximum) for the cost of arbitration. Generate from your wallet of <font color=Darkorange>⚡</font> Lightning Network the <font color=Darkorange>⚡</font> Payment Request, for the detailed amount in quantity to be delivered, and paste it here in the box <font color=Darkorange>⚡</font> Payment request. To be verified and paid immediately by the Seller. <font color=red><br><b>IMPORTANT! The <font color=Darkorange>⚡</font> Payment Request (Delivery) must be for the exact amount that has deducted the cost of arbitration. <br> Make sure you have <font color=Darkorange>⚡</font> open channels in your portfolio, with enough reception capacity to receive payment for your request. <br> (*) Click on the amount to be delivered if you wish to change the equivalence.</b></font> </b>  <br> <br>'}],
          [{ vl: '<br><b>Lliurament de la compra:</b><br> La quantitat de bitcoins o satoshis a lliurar, segons estipula el contracte, és la quantitat sol·licitada pel comprador menys el 0,25% (com a màxim) per cost de l`arbitratge . Generi des de la seva cartera de la <font color=Darkorange>⚡</font> Xarxa de llamps la <font color=Darkorange>⚡</font> Sol·licitud de Pagament, per l`import detallat en quantitat a lliurar, i enganxeu-la aquí a la casella <font color=Darkorange>⚡</font> Sol·licitud de Pagament. Per ser verificada i pagada immediatament pel Venedor. <font color=red><br><b>¡IMPORTANT! La <font color=Darkorange>⚡</font> Solicitud de Pagament(Lliurament) ha de ser per la quantitat exacta que té deduït el cost de l`arbitratge.<br> Verificar que  disposa, de <font color=Darkorange>⚡</font> canals oberts a la seva cartera, amb capacitat de recepció suficient per rebre el pagament de la seva sol·licitud.<br> (*)Premi sobre la quantitat a lliurar si voleu canviar l`equivalència.</b></font> </b>  <br> <br>'}],
          [{ vl: '<br><b>Entrega da compra:</b><br> A quantidade de bitcoins ou satoshis a serem entregues, conforme estipulado no CONTRATO, é o valor solicitado pelo comprador menos 0,25% (máximo) para o custo da arbitragem. Gere a partir do seu portfólio <font color=Darkorange>⚡</font> Ray network la <font color=Darkorange>⚡</font> Pedido de Pagamento, para o valor detalhado em quantidade a ser entregue, cole aqui na caixa <font color=Darkorange>⚡</font> Solicitação de pagamento. Para ser verificado e pago imediatamente pelo vendedor. <font color=red><br><b>IMPORTANTE! o <font color=Darkorange>⚡</font> A solicitação de pagamento (entrega) deve corresponder ao valor exato que deduziu o custo da arbitragem.<br> Assegure-se de ter, <font color=Darkorange>⚡</font> Canais abertos em seu portfólio, com capacidade de recepção suficiente para receber o pagamento de sua solicitação.<br> (*)Clique na quantidade a ser entregue se deseja alterar a equivalência.</b></font> </b>  <br> <br>'}],                                              
            ],
        tlp_escan: [
          [{ vl: '<br><b>Escanear el código Qr de la  <font color=Darkorange>⚡</font> Solicitud de Pago(Entrega):</b><br>  POSICIONE EL CÓDIGO QR DE SU <font color=Darkorange>⚡</font> SOLICITUD DE PAGO(ENTREGA), ESTÁTICO DENTRO DE ESTA VENTANA DE IMAGEN DE SU CÁMARA, HASTA QUE UN MARCO ROJO LO RECONOZCA. SEÑAL QUE HA SIDO ESCANEADO Y PEGADO EN LA CASILLA CORRESPONDIENTE.</b></font> </b>  <br> <br>'}],
          [{ vl: '<br><b>Scan the Qr code of the  <font color=Darkorange>⚡</font> Payment Request:(Delivery):</b><br>  POSITION YOUR QR CODE  <font color = Darkorange>⚡</font> PAYMENT REQUEST (DELIVERY), STATIC WITHIN THIS IMAGE WINDOW OF YOUR CAMERA, UNTIL A RED FRAME RECOGNIZES IT. SIGNAL THAT HAS BEEN SCANNED AND PASTE IN THE CORRESPONDING BOX.</b></font> </b>  <br> <br>'}],
          [{ vl: '<br><b>Escanejar el codi Qr de la  <font color=Darkorange>⚡</font> Sol·licitud de Pagament (Lliurament):</b><br>  POSICIONI  EL CODI QR DE LA SEVA <font color=Darkorange>⚡</font> SOL·LICITUD DE PAGAMENT (LLIURAMENT), ESTÀTICA DINS AQUESTA FINESTRA D`IMATGE DE LA SEVA CÀMERA, FINS QUE UN MARC VERMELL LA RECONEGUI. SENYAL QUE HA ESTAT ESCANEJADA I ENGANTXADA  A LA CASELLA CORRESPONENT.</b></font> </b>  <br> <br>'}],
          [{ vl: '<br><b>Digitalize o código Qr do  <font color=Darkorange>⚡</font> Pedido de pagamento (entrega):</b><br>  POSICIONE O CÓDIGO QR DO SEU <font color=Darkorange>⚡</font> PEDIDO DE PAGAMENTO (ENTREGA), ESTÁTICO NA JANELA DE IMAGEM DA SUA CÂMERA, ATÉ QUE UM QUADRO VERMELHO O RECONHEÇA. SINAL QUE FOI DIGITALIZADO E MASSA NA CAIXA CORRESPONDENTE.</b></font> </b>  <br> <br>'}],                                              
            ],
         tlp_activa_escan: [
          [{ vl: 'Activa/desactiva escanear código Qr de la <br />⚡ Solicitud de Pago(Entrega) desde su cámara'}],
          [{ vl: 'Enables / disables scanning Qr code of the <br />⚡ Payment Request:(Delivery) from your camera'}],
          [{ vl: 'Activa / desactiva escanejar codi Qr de la<br />⚡ Sol·licitud de Pagament (Lliurament) des de la seva càmera'}],
          [{ vl: 'Ativa / desativa a digitalização do código Qr do <br /> ⚡ Solicitação de pagamento (entrega) de sua câmera'}],                                              
            ],
         area_solic_pago: [
          [{ vl: 'Pegue aquí su ⚡ Solicitud de Pago (para Entrega), generada desde su cartera de la ⚡ Red de rayos, por la cantidad de Bitcoins o Satoshis a entregar(detallada encima). Si dispone de cámara en su equipo, y prefiere,  también puede escanear el código Qr equivalente.  '}],
          [{ vl: 'Paste here your ⚡ Payment Request (Delivery), generated from your ⚡ Lightning Network wallet, for the amount of Bitcoins or Satoshis to be delivered (detailed above). If you have a camera on your system, and you prefer you can also scan the equivalent Qr code.'}],
          [{ vl: 'Enganxeu aquí la vostre ⚡ Sol·licitud de Pagament (per Lliurament), generada des de la vostre cartera de la ⚡ Xarxa de llamps, per la quantitat de Bitcoins o Satoshis a lliurar (detallada a sobre). Si disposa de càmera en el seu equip, i prefereix,  també pot escanejar el codi Qr equivalent.  '}],
          [{ vl: 'Cole aqui sua ⚡ Solicitação de Pagamento (para Entrega), gerada a partir de sua carteira Ray Network, para a quantidade de Bitcoins ou Satoshis a serem entregues (detalhado acima). Se você tem uma câmera no computador e prefere, também pode escanear o código Qr equivalente.  '}],                                              
            ],                                    
      },
      Entregada_compra_LN: {
       vars: [
          [{ vl: '¡ FINALIZADA !'},{ vl: 'Cantidad entregada'},{ vl: 'Solicitud de Pago(Pagada)'},{ vl: 'Recibido'}],
          [{ vl: 'FINISHED!'},{ vl: 'Delivered quantity'},{ vl: 'Payment Request (Paid))'},{ vl: 'Received'}],
          [{ vl: 'FINALITZADA !'},{ vl: 'Quantitat Liurada'},{ vl: 'Sol·licitud de Pagament (Pagada)'},{ vl: 'Rebut'}],
          [{ vl: 'ACABADO!'},{ vl: 'Quantidade entregue'},{ vl: 'Solicitação de Pagamento (pago)'},{ vl: 'Recebido'}],                                            
            ],
         tlp1: [
          [{ vl: '<br><b><font color=Darkorange>⚡</font> Solicitud de Pago(Pagada):</b><br>  SI DESEA COMPROBAR SU <font color=Darkorange>⚡</font> SOLICITUD DE PAGO(PAGADA), BASTA CON COPIARLA Y TRATAR DE PAGARLA DESDE SU <font color=Darkorange>⚡</font> CARTERA DE RED DE RAYOS, DEBERÍA CONTESTARLE SOLICITUD YA PAGADA.</b></font> </b>  <br> <br>'}],
          [{ vl: '<br><b><font color=Darkorange>⚡</font> Payment Request (Paid):</b><br>  IF YOU WANT TO CHECK YOUR <font color=Darkorange>⚡</font> PAYMENT REQUEST (PAID), JUST COPY IT AND TRY TO PAY IT FROM YOUR <font color=Darkorange>⚡</font> LIGHTNING NETWORK WALLET, THAT SHOULD ANSWER THE REQUEST WAS  ALREADY PAID.</b></font> </b>  <br> <br>'}],
          [{ vl: '<br><b><font color=Darkorange>⚡</font> Sol·licitud de Pagament (Pagada):</b><br>  SI DESITJA COMPROVAR LA SEVA <font color=Darkorange>⚡</font> SOL·LICITUD DE PAGAMENT (PAGADA), N`HI HA PROU A COPIAR-LA I TRACTAR DE PAGAR-LA DES DE LA SEVA <font color=Darkorange>⚡</font> CARTERA DE XARXA DE LLAMPS, HAURIA DE CONTESTAR-LI SOL·LICITUD JA PAGADA.</b></font> </b>  <br> <br>'}],
          [{ vl: '<br><b><font color=Darkorange>⚡</font> Solicitação de Pagamento (pago):</b><br>  SE VOCÊ QUER VERIFICAR SEU <font color=Darkorange>⚡</font> PEDIDO DE PAGAMENTO (PAGO), APENAS COPIE-O E TENTE PAGAR COM SEU <font color=Darkorange>⚡</font> CARTEIRA DA RAY NETWORK, VOCÊ DEVE RESPONDER AO APLICATIVO JÁ PAGO.</b></font> </b>  <br> <br>'}],             
            ],
         tlp2: [
          [{ vl: 'Copiar ⚡ Solicitud de Pago al portapapeles'}],
          [{ vl: 'Copy ⚡ Payment Request to clipboard'}],
          [{ vl: 'Copia ⚡ Sol·licitud de Pagament al porta-retalls'}],
          [{ vl: 'Copiar ⚡ Solicitação de pagamento para a área de transferência'}],             
            ],
         tlp3: [
          [{ vl: 'FIELES AL RESGUARDO A LA PRIVACIDAD,<br /> AL PULSAR EL BOTÓN, PROCEDEMOS A LA,<br /> COMPLETA ELIMINACIÓN DE TODO REGISTRO<br /> ASOCIADO A ESTA TX DE COMPRA-VENTA<br /> EN ESTA PLATAFORMA'}],
          [{ vl: 'FAITHFUL TO THE PROTECTION OF PRIVACY, <br /> BY PRESSING THE BUTTON, WE PROCEED TO THE, <br /> COMPLETE ELIMINATION OF ALL REGISTRATION <br /> ASSOCIATED WITH THIS PURCHASE-SALE TX <br /> ON THIS PLATFORM.'}],
          [{ vl: 'FIDELS AL RESGUARD A LA PRIVACITAT,<br /> EN PREMER EL BOTÓ, PROCEDIM A LA,<br /> COMPLERTA EL.LIMINACIÓ DE TOT REGISTRE<br /> LLIGAT AMB  AQUESTA TX DE COMPRA-VENDA<br /> EN AQUESTA PLATABANDA.'}],
          [{ vl: 'FIEL COM A PROTEÇÃO DA PRIVACIDADE,<br /> PRESSIONANDO O BOTÃO, PROCEDEMOS À, <br /> ELIMINAÇÃO COMPLETA DE TODOS OS REGISTOS <br /> ASSOCIADOS A ESTE TX DE COMPRA-VENDA <br /> NESTA PLATAFORMA.'}],             
            ],                                                            
      },

      Tx_a_arbitraje: {
         tit: [
          [{ vl: '¡ Transacción (Tx) en ⚖️ 🔵5-6. Arbitraje por incidencia !'}],
          [{ vl: 'Transaction (Tx) in ⚖️ 🔵5-6. Arbitration by incidence !'}],
          [{ vl: 'Transacció (Tx) en ⚖️ 🔵5-6. Arbitratge per incidència !'}],
          [{ vl: 'Transação (Tx) em ⚖️ 🔵5-6. Arbitragem por incidência !'}],                                            
            ],
         hlp: [
          [{ vl: '<br><b>Transacción (Tx) en  ⚖️ Arbitraje:</b><br> ¡ Transacción traspasada a proceso de arbitraje ! Por incidencia, desacuerdo o impago en la ratificación del cobro, la Transacción, trás análisis de pruebas, será resuelta por por intervención del árbitro en un plazo máximo de 48 horas a contar desde el momento de la incidencia. Diríjase en breve a la opción Árbitro del menú principal para el aporte de pruebas y video estipulados en el contrato.<br> <br>'}],
          [{ vl: '<br><b>Transaction (Tx) in ⚖️ Arbitration: </b> <br> Transaction transferred to arbitration process! Due to incidence, disagreement or non-payment in the ratification of the collection, the Transaction, after analyzing the evidence, will be resolved by the intervention of the arbitrator within a maximum period of 48 hours from the moment of the incidence. Go shortly to the Referee option of the main menu for the contribution of evidence and video stipulated in the contract.<br> <br>'}],
          [{ vl: '<br><b>Transacció (Tx) en  ⚖️ Arbitratge:</b><br>  Transacció traspassada a procés d`arbitratge! Per incidència, desacord o impagament en la ratificació del cobrament, la Transacció, darrer anàlisi de proves, serà resolta per intervenció de l`àrbitre en un termini màxim de 48 hores a comptar des del moment de l`incidència. Aneu en breu a l`opció Àrbitre del menú principal per aportar les proves i vídeo estipulats en el contracte.<br> <br>'}],
          [{ vl: '<br><b>Transação (Tx) em ⚖️ Arbitragem:</b><br> Transação transferida para processo de arbitragem! Por incidência, desacordo ou falta de pagamento na homologação da cobrança, a Operação, após análise das provas, será resolvida com a intervenção do árbitro no prazo máximo de 48 horas a partir do momento da incidência. Vá em breve para a opção Árbitro do menu principal para a contribuição de provas e vídeo estipuladas no contrato.<br> <br>'}],             
            ],                                                          
      },
    // empiezan necesarias traducciones de las functions
      get_fee: {
         mje1: [
          [{ vl: 'Donación mireros seleccionada y actualizada'}],
          [{ vl: 'Miners donation selected and updated'}],
          [{ vl: 'Donació mirers seleccionada i actualitzada'}],
          [{ vl: 'Doação de Mireros selecionada e atualizada'}],                                            
            ],        
         swf_p1: [
          [{ vl: '¡ Donación mireros seleccionada supera importe de la compra !'}],
          [{ vl: 'Selected mireros donation exceeds purchase amount!'}],
          [{ vl: 'Donació mirers seleccionada supera import de la compra!'}],
          [{ vl: 'A doação de mireros selecionada excede o valor da compra!'}],                                            
            ],
         swf_p2: [
          [{ vl: 'Se asigna la opción mínima posible que garantize la inclusión en la cadena de bloques, aunque las 6 confirmaciones de la entrega pudieran demorar más de 60 minutos.'}],
          [{ vl: 'The minimum possible option is assigned that guarantees inclusion in the blockchain, although the 6 delivery confirmations could take more than 60 minutes.'}],
          [{ vl: 'S`assigna l`opció mínima possible que garanteix la inclusió en la cadena de blocs, tot i que les 6 confirmacions del lliurament poguessin demorar més de 60 minuts.!'}],
          [{ vl: 'A opção mínima possível é atribuída para garantir a inclusão no blockchain, embora as 6 confirmações de entrega possam levar mais de 60 minutos.'}],                                            
            ],            
         mje2: [
          [{ vl: '¡ ATENCIÓN ! Donación mireros seleccionada supera importe de la compra, se asigna la opción mínima posible.'}],
          [{ vl: ' ATTENTION ! Mireros donation selected exceeds the purchase amount, the minimum possible option is assigned.'}],
          [{ vl: 'ATENCIÓ! Donació mirers seleccionada supera import de la compra, s`assigna l`opció mínima possible.'}],
          [{ vl: ' ATENÇÃO ! A doação de Mireros selecionada excede o valor da compra, a opção mínima possível é atribuída.'}],                                                                     ],              
      },
      f_createnotrawTxArb_Ln: {
         txts: [
          [{ vl: 'Cobro recibido, ratificado por el árbitro tras incidencia, entrega autorizada'},{ vl: 'Alerta al comprador enviada con éxito'},{ vl: 'Error de sistema en proceso agregar alerta al comprador'}],
          [{ vl: 'Collection received, ratified by the arbitrator after incident, authorized delivery'},{ vl: 'Buyer alert sent successfully'},{ vl: 'System error in process add buyer alert'}],
          [{ vl: 'Cobrament rebut, ratificat per l`àrbitre després d`incidència, lliurament autoritzat'},{ vl: 'Alerta al comprador tramesa amb èxit'},{ vl: 'Error de sistema en procés afegir alerta al comprador'}],
          [{ vl: 'Cobrança recebida, homologada pelo árbitro, entrega autorizada'},{ vl: 'Alerta de comprador enviado com sucesso'},{ vl: 'Erro de sistema no processo de adição de alerta de comprador'}],                                            
            ],                       
      },
      creat_rawTx: {
         txts: [
          [{ vl: 'Transacción de entrega generada para multifirma, destino bitcoins estipulado por Comprador'}],
          [{ vl: 'Delivery transaction generated for multi-signature, bitcoin destination stipulated by Buyer '}],
          [{ vl: 'Transacció de lliurament generada per multisignatura, destí dels bitcoins estipulat pel comprador'}],
          [{ vl: 'Transação de entrega gerada para destino de bitcoin com várias assinaturas estipulado pelo comprador'}],                                            
            ],                       
      },
      f_EliminarTx: {
         txts: [
          [{ vl: 'Tx, archivos y 💬 Chat de la Tx eliminados con éxito'},{ vl: 'Registro, archivos y 💬 Chat de la Tx eliminados con éxito en esta plataforma.'},{ vl: 'Alerta al vendedor enviada con éxito'},{ vl: 'Tx, archivos y 💬 Chat de la Tx no eliminados. No disponible ID Tx de la entrega final. Servicio técnico analizando la incidencia para su resolución.'}],                                            
          [{ vl: 'Tx, files and Tx 💬 Chat deleted successfully.'},{ vl: 'Registry, files and 💬 Tx Chat successfully deleted on this platform.'},{ vl: 'Seller alert sent successfully'},{ vl: 'Tx, files and 💬 Chat de la Tx not deleted. Tx ID of final delivery not available. Technical service analyzing the incident for resolution.'}],                                            
          [{ vl: 'Tx, arxius i 💬 Xat de la Tx eliminats amb èxit'},{ vl: 'Registre, arxius i 💬 Xat de la Tx eliminats amb èxit en aquesta plataforma.'},{ vl: 'Alerta al venedor tramesa amb éxit'},{ vl: 'Tx, arxius i 💬 Xat de la Tx no eliminats. No disponible ID Tx del lliurament final. Servei tècnic analitzant la incidència per a la seva resolució.'}],                                            
          [{ vl: 'Tx, arquivos e 💬 Chat de la Tx excluídos com sucesso'},{ vl: 'Registro, arquivos e 💬 Tx Chat excluídos com sucesso nesta plataforma.'},{ vl: 'Alerta de vendedor enviado com sucesso'},{ vl: 'Tx, arquivos e 💬 Chat de la Tx não excluídos. ID de entrega final não disponível. Serviço técnico analisando o incidente para resolução.'}],                                            
            ],                                                             
      },

      f_rechazarSolicitud: {
         txts: [
          [{ vl: 'Proceso de eliminar la transacción y el 💬 chat vinculado'},{ vl: 'Solicitud de compra eliminada con éxito en Tx'},{ vl: 'Ha sido denegada por el vendedor su solicitud de compra, por falta de algún requisito, hemos procedido a la eliminación de la misma y de su 💬 Chat Tx asociado. Por favor asegurese de reunir los requisitos solicitados por el vendedor, antes de repetir una nueva solicitud para la misma oferta. '},{ vl: '💬 Chat de la Tx eliminado con éxito'},{ vl: 'Alerta al comprador agregada con éxito'}],                                            
          [{ vl: 'Process of deleting the transaction and 💬 linked chat'},{ vl: 'Purchase request successfully deleted in Tx'},{ vl: 'Your purchase request has been denied by the seller, for lack of any requirement, we have proceeded to eliminate it and its associated Tx Chat. Please make sure you meet the requirements requested by the seller, before repeating a new request for the same offer. '},{ vl: '💬 Tx chat removed successfully'},{ vl: 'Buyer alert added successfully'}],                                           
          [{ vl: 'Procés deliminar la transacció i 💬 xat vinculat'},{ vl: 'Sol·licitud de compra eliminada amb èxit a Tx'},{ vl: 'Ha estat denegada pel venedor la sol·licitud de compra, per falta d`algun requisit, hem procedit a l`eliminació de la mateixa i del 💬 Xat Tx associat. Si us plau assegureu-de reunir els requisits del venedor, abans d`una nova sol·licitud per a la mateixa oferta. '},{ vl: '💬 Xat de la Tx eliminat amb èxit'},{ vl: 'Alerta al comprador tramesa amb èxit'}],                                           
          [{ vl: 'Processo de exclusão da transação e 💬 chat vinculado'},{ vl: 'Solicitação de compra excluída com sucesso no Tx'},{ vl: 'O seu pedido de compra foi negado pelo vendedor, por falta de qualquer exigência, procedemos à sua eliminação e ao seu 💬 Tx Chat associado. Certifique-se de atender aos requisitos solicitados pelo vendedor, antes de repetir uma nova solicitação para a mesma oferta. '},{ vl: '💬 Tx chat removido com sucesso'},{ vl: 'Alerta de comprador adicionado com sucesso'}],
            ],          
         swf1: [
          [{ vl: '¿ Denegar y eliminar esta solicitud de compra ?'},{ vl: 'Catidad a comprar'},{ vl: 'Cantidad a pagar'},{ vl: 'Medio de pago'},{ vl: '✅ Aceptado contrato por comprador. <br><br> Agradecemos antes de eliminar, sino lo ha hecho ya, que notifique al potencial comprador en el 💬 chat de la Tx el motivo de la denegación. Evitando así indeseables reintentos de solicitud que no cumplan con sus requisitos para la venta.'},{ vl: '✅ ¡SI! Denegar y eliminar'},{ vl: '❌ Cancelar Denegación'}],
          [{ vl: 'Deny and delete this purchase request?'},{ vl: 'Quantity to buy'},{ vl: 'Amount to pay'},{ vl: 'Payment method'},{ vl: '✅ Accepted contract by buyer. <br> <br> We thank you before deleting, if you have not already done so, that you notify the potential buyer in the 💬 Tx chat of the reason for the denial. Thus avoiding undesirable request retries that do not meet your requirements for sale.'},{ vl: '✅ YES! Deny and delete'},{ vl: '❌ Cancel Denial'}],
          [{ vl: 'Denegar i eliminar aquesta sol·licitud de compra ?'},{ vl: 'Quantitat a comprar'},{ vl: 'Quantitat a pagar'},{ vl: 'Mitjà de pagament'},{ vl: '✅ Acceptat contracte per comprador. <br><br> Agraïm abans d`eliminar, sinó ho ha fet ja, que notifiqui al potencial comprador al 💬 xat de la Tx el motiu de la denegació. Evitant així indesitjables reintents de sol·licitud que no compleixin amb els seus requisits per a la venda.'},{ vl: '✅ SI ! Denegar i eliminar'},{ vl: '❌ Anul·lar Denegació'}],
          [{ vl: 'Negar e excluir esta solicitação de compra?'},{ vl: 'Quantidade de compra'},{ vl: 'Valor a pagar:'},{ vl: 'Meio de pagamento'},{ vl: '✅ Contrato aceito pelo comprador. <br><br> Agradecemos antes de excluir, caso ainda não o tenha feito, que comunique ao potencial comprador no chat do 💬 Tx o motivo da recusa. Evitando, assim, repetições de solicitação indesejáveis ​​que não atendem aos seus requisitos de venda.'},{ vl: '✅ SIM! Negar e excluir'},{ vl: '❌ Cancelar negação'}],                                                   
            ],
         swf2: [
          [{ vl: '¡ Transacción y 💬 Chat eliminados !'},{ vl: 'Notificamos la denegación y eliminación al potencial comprador.'}],
          [{ vl: 'Transaction and Chat removed!'},{ vl: 'We notify the potential buyer of the denial and removal.'}],
          [{ vl: ' Transacció i Xat eliminats !'},{ vl: 'Notifiquem la denegació i eliminació al potencial comprador'}],
          [{ vl: 'Transação e 💬 Chat removidos !'},{ vl: 'Notificamos o potencial comprador sobre a recusa e remoção.'}],,                                                    
            ],                                      
      },
      f_paste: {
         txts: [
          [{ vl: 'Analizando...'},{ vl: 'No es una cadena (66 HEX caracteres [0-9A-F]) válida '}],
          [{ vl: 'Analyzing...'},{ vl: 'Not a valid string (66 HEX characters [0-9A-F]) '}],
          [{ vl: 'Analitzant...'},{ vl: 'No és una cadena (66 HEX caràcters [0-9A-F]) vàlida '}],
          [{ vl: 'Analisando...'},{ vl: 'Não é uma string válida (66 caracteres HEX [0-9A-F]) '}],                                            
            ],                       
      },
      f_checkbitcoinvalid: {
         txts: [
          [{ vl: '¡Dirección Bitcoin válida!'},{ vl: '¡No es una Dirección Bitcoin válida!'}],
          [{ vl: 'Valid Bitcoin address!'},{ vl: 'This is not a valid Bitcoin Address!'}],
          [{ vl: 'Adreça Bitcoin vàlida!'},{ vl: 'No es una Adreça Bitcoin vàlida!'}],
          [{ vl: 'Endereço Bitcoin válido!'},{ vl: 'Não é um endereço Bitcoin válido!'}],                                            
            ],                       
      },
      f_guardarDESTINO: {
         txts: [
          [{ vl: 'Dirección bitcoin inválida para confirmar entrega, revise y reintente...'}],
          [{ vl: 'Invalid bitcoin address to confirm delivery, check and retry...'}],
          [{ vl: 'Adreça bitcoin invàlida per confirmar lliurament, revisi i torni a intentar...'}],
          [{ vl: 'Endereço de bitcoin inválido para confirmar a entrega, verificar e tentar novamente...'}],                                            
            ],                       
      },
     f_updatePago: {
         txts: [
          [{ vl: 'Notificación pago enviada a vendedor'},{ vl: 'Notificación de pago, confimada por el comprador, a la espera de ratificación cobro por el vendedor'},{ vl: 'Error de sistema en proceso agregar alerta al vendedor '},{ vl: 'Falta validar la casilla: Pago y justificante '}],
          [{ vl: 'Payment notification sent to seller'},{ vl: 'Notification of payment, confirmed by the buyer, awaiting confirmation and collection by the seller'},{ vl: 'System error in process add alert to seller '},{ vl: 'The box has yet to be validated: Payment and receipt'}],
          [{ vl: 'Notificació del pagament tramesa al venedor'},{ vl: 'Notificació de pagament, confimada pel comprador, a l`aguait de ratificació del cobrament del venedor'},{ vl: 'Error de sistema en procés afegir alerta al venedor '},{ vl: 'Manca validar la casella: Pagament i justificant '}],
          [{ vl: 'Notificação de pagamento enviada ao vendedor'},{ vl: 'Notificação de pagamento, confirmada pelo comprador, aguardando confirmação e cobrança pelo vendedor'},{ vl: 'Erro de sistema no processo de adição de alerta ao vendedor '},{ vl: 'A caixa ainda não foi validada: Pagamento e recebimento '}],                                          
            ],                       
      },
     f_alertac: {
         txts: [
          [{ vl: 'Cantidad de bitcoins a liberar copiado al portapapeles'},{ vl: '¡ Copiado a su portapapeles !'},{ vl: '¡ Copiada a su portapapeles dirección bitcoin del comprador !'}],
          [{ vl: 'Amount of bitcoins to free copied to clipboard'},{ vl: 'Copied to your clipboard!'},{ vl: 'Buyer`s bitcoin address copied to your clipboard!'}],
          [{ vl: 'Quantitat de bitcoins per alliberar copiat al porta-retalls'},{ vl: 'Copiat al seu porta-retalls !'},{ vl: '¡ Copiada al seu porta-retalls l`adreça bitcoin !'}],
          [{ vl: 'Quantidade de bitcoins a serem copiados para a área de transferência'},{ vl: 'Copiado para sua área de transferência!'},{ vl: 'Copiado para o endereço de bitcoin do comprador da área de transferência!'}],,                                          
            ],                       
      },
     f_checkPr_entr: {
         txts: [
          [{ vl: '¡ ⚡ Solicitud de Pago(entrega) recibida ! Verificando...  '},{ vl: 'Verificada con éxito ⚡ Solicitud de Pago(Entrega) por importe de  '},{ vl: '¡Solicitud verificada con éxito!'},{ vl: 'Ok <font color=Darkorange>⚡</font> Solicitud de Pago(Entrega) con <font color=Darkorange>⚡</font> Factura ID: <font color=DodgerBlue>'},{ vl: '</font> BTC.</br> ¡ Procesamos el pago de Entrega !'},{ vl: '¡ ⚡ Factura remitida al Vendedor!'},{ vl: 'A Pagar Factura (Entrega) <font color=DodgerBlue>'},{ vl: '</font> BTC.</br> ¡ Tx de Compra-Venta finalizada !  '},{ vl: 'Solicitud de Entrega final de bitcoins al comprador completada con éxito en Tx  via ⚡ red lightning.'},{ vl: 'Verificado sin éxito ⚡ Envio Pago(Entrega) por importe de  '},{ vl: ' BTC. Hay errores en la entrega...'},{ vl: 'Verificada sin éxito ⚡ Solicitud de Pago(Entrega) por importe de  '},{ vl: ' BTC. Por favor revise y reintente...'}],
          [{ vl: '⚡ Payment request (delivery) received! Verifying...   '},{ vl: 'Successfully verified ⚡ Payment Request (Delivery) for the amount of  '},{ vl: 'Application verified successfully!'},{ vl: 'Ok <font color=Darkorange>⚡</font>To pay with <font color=Darkorange>⚡</font> Invoice ID: <font color=DodgerBlue>'},{ vl: '</font> BTC.</br> We process the Delivery payment!'},{ vl: ' ⚡ Invoice sent to the Seller! '},{ vl: 'To pay Invoice (Delivery) :<font color=DodgerBlue>'},{ vl: '</font> BTC.</br> Buy-Sell Tx finished!'},{ vl: ' Request for final delivery of bitcoins to the buyer successfully completed in Tx via ⚡ lightning network.'},{ vl: 'Verified unsuccessfully ⚡ Shipping Payment (Delivery) for the amount of  '},{ vl: ' BTC. There are errors in the delivery...'},{ vl: 'Verified unsuccessfully ⚡ Payment Request (Delivery) for the amount of  '},{ vl: ' BTC. Please check and retry...'}],
          [{ vl: '⚡ Sol·licitud de Pagament (lliurament) rebuda! verificant...  '},{ vl: 'Verificada amb èxit ⚡ Sol·licitud de Pagament (Lliurament) per import de  '},{ vl: 'Sol·licitud verificada amb èxit!'},{ vl: 'Ok <font color=Darkorange>⚡</font> Sol·licitud de Pagament (Lliurament) amb <font color=Darkorange>⚡</font> Factura ID: <font color=DodgerBlue>'},{ vl: '</font> BTC.</br> Processem el pagament de Lliurament !'},{ vl: '⚡ Factura remesa al Venedor !'},{ vl: 'A pagar Factura (Lliurament) <font color=DodgerBlue>'},{ vl: '</font> BTC.</br>  Tx de Compra-Venda finalitzada !'},{ vl: 'Sol·licitud de  lliurament final de bitcoins al  comprador complert amb èxit a Tx via ⚡ xarxa lightning.'},{ vl: 'Verificat sense èxit ⚡ Enviament Pagament (Lliurament) per import de  '},{ vl: ' BTC. Hi ha errors en el lliurament...'},{ vl: 'Verificat sense èxit ⚡ Enviament Pagament (Lliurament) per import de '},{ vl: ' BTC. Siusplau comprovi i torni a intentar...'}],
          [{ vl: '¡ ⚡ Pedido de pagamento (entrega) recebido! Verificando...  '},{ vl: 'Verificado com sucesso ⚡ Solicitação de pagamento (entrega) no valor de  '},{ vl: 'Aplicativo verificado com sucesso!'},{ vl: 'Ok <font color=Darkorange>⚡</font> Pedido de pagamento (entrega) com <font color=Darkorange>⚡</font> ID da fatura: <font color=DodgerBlue>'},{ vl: '</font> BTC.</br> Processamos o pagamento da Entrega!'},{ vl: '¡ ⚡ Fatura enviada ao vendedor!'},{ vl: 'Para pagamento da fatura (entrega) <font color=DodgerBlue>'},{ vl: '</font> BTC.</br> Compra-Venda Tx concluída! '},{ vl: 'Solicitação entrega final do bitcoin ao comprador foi concluída com sucesso no Tx por meio da rede ⚡ lightning.'},{ vl: 'Verificado sem sucesso ⚡ Pagamento de envio (entrega) no valor de '},{ vl: ' BTC. Existem erros na entrega...'},{ vl: 'Verificado sem sucesso ⚡ Solicitação de pagamento (entrega) no valor de  '},{ vl: ' BTC. Verifique e tente novamente...'}],                                         
            ],                       
      },     
     f_updateSolicitud: {
         txts: [
          [{ vl: 'Asegúrese de facilitar solvencia de compra al vendedor'},{ vl: '¿ Validar solicitud compra ?'},{ vl: '✅ Aceptados términos a comprador del contrato bitcoin multifirma para esta transacción.'},{ vl: '✅ Validar'},{ vl: '❌ Cancelar'},{ vl: '¡Solicitud compra tramitada!'},{ vl: 'Notificamos su solicitud al vendedor. Por favor, asegúrese de adjuntar prueba de solvencia de compra en el 💬 chat de la transacción, o cualquier documento adicional que el vendedor pueda requerirle. Asegurando así la transacción, y garantias al vendedor, para que acepte su solicitud de compra, y pueda proceder a liberar los bitcoins solicitados sin demora.'},{ vl: 'Solicitud de compra actualizada con éxito en Tx'},{ vl: 'Tiene una nueva solicitud de compra, requiera prueba de solvencia al comprador en el Chat de la transacción o según acuerden en el mismo por medio cifrado y privado (emails, whatsapp, telegram, ...), esperando por su análisis y aceptación de Tx para una oferta publicada desde su dirección bitcoin'},{ vl: 'Por favor revise la casilla de la Clave pública'},{ vl: 'Por favor aségurese de leer y validar la casilla del contrato'}  ],
          [{ vl: 'Make sure you provide the seller with purchase solvency'},{ vl: 'Validate purchase request?'},{ vl: '✅ Accepted terms to buyer of the multi-signature bitcoin contract for this transaction.'},{ vl: '✅ Validate'},{ vl: '❌ Cancel'},{ vl: 'Purchase request processed!'},{ vl: 'We notify the seller of your request. Please be sure to attach proof of purchase solvency in the 💬 transaction chat, or any additional documents that the seller may require. Thus ensuring the transaction, and guarantees to the seller, so that he accepts your purchase request, and can proceed to release the requested bitcoins without delay.'},{ vl: 'Purchase request successfully updated in Tx'},{ vl: 'You have a new purchase request, require proof of solvency from the buyer in the transaction Chat or as agreed in it by encrypted and private means (emails, whatsapp, telegram, ...), waiting for your analysis and acceptance of Tx for an offer posted from your bitcoin address'},{ vl: 'Please check the Public Key box'},{ vl: 'Please be sure to read and validate the contract box'}  ],
          [{ vl: 'Assegureu-vos de facilitar solvència de compra al venedor'},{ vl: ' Validar sol·licitud de compra ?'},{ vl: '✅ Acceptats termes a comprador del contracte bitcoin multisignatura per aquesta transacció.'},{ vl: '✅ Validar'},{ vl: '❌ Cancelar'},{ vl: 'Sol·licitud compra tramesa!'},{ vl: 'Notifiquem la seva sol·licitud al venedor. Si us plau, recordi adjuntar prova de solvència de compra al 💬 al venedor be via el mitja acordat amb ell o al xat de la transacció, o qualsevol document addicional que el venedor pugui requerir. Assegurant així la transacció, i garanties al venedor, perquè accepti la seva sol·licitud de compra, i pugui procedir a alliberar els bitcoins sol·licitats sense retard.'},{ vl: 'Sol·licitud de compra actualitzada amb èxit per la Tx'},{ vl: 'Té una nova sol·licitud de compra, requereixi prova de solvència al comprador en el Xat de la transacció o segons acordin en el mateix per mitjà xifrat i privat (emails, whatsapp, Telegram, ...), esperant per la seva anàlisi i acceptació de Tx d`una oferta publicada des de la seva adreça bitcoin'},{ vl: 'Si us plau revisi la casella de la Clau pública'},{ vl: 'Si us plau assegureu-vos de llegir i validar la casella del contracte'}  ],
          [{ vl: 'Certifique-se de fornecer ao vendedor a solvência de compra'},{ vl: 'Validar pedido de compra?'},{ vl: '✅ Termos aceitos para o comprador do contrato de bitcoin com várias assinaturas para esta transação.'},{ vl: '✅ Validar'},{ vl: '❌ Cancelar'},{ vl: 'Solicitação de compra processada!'},{ vl: 'Notificamos o vendedor sobre sua solicitação. Certifique-se de anexar o comprovante de solvência de compra no 💬 chat da transação ou quaisquer documentos adicionais que o vendedor possa exigir. Assegurando assim a transação, e garante ao vendedor, para que aceite o seu pedido de compra, podendo proceder à liberação dos bitcoins solicitados sem demora."'},{ vl: 'Solicitação de compra atualizada com sucesso no Tx'},{ vl: 'Você tem um novo pedido de compra, exige prova de solvência do comprador no Chat da transação ou conforme acordado nele por meio criptografado e privado (e-mails, whatsapp, telegram, ...), aguardando sua análise e aceitação de Tx para uma oferta publicada de seu endereço de bitcoin'},{ vl: 'Por favor, marque a caixa de chave pública'},{ vl: 'Por favor, leia e valide a caixa do contrato'} ],                                          
            ],                       
      },
     f_cdadbtccompr: {
         txts: [
          [{ vl: 'Se ajustan las cantidades a mínimo suficiente para cubrir donación mineros'},{ vl: '¡ Importe de compra insuficiente para minería bitcoin !'},{ vl: 'El importe mínimo de compra viene determinado, en primer lugar, por los costes de minería mínimos necesarios para garantizar que una transacción nueva sea agregada a la cadena de bloques bitcoin en un tiempo razonable (aproximadamente 60 minutos). Las tarifas de mineria varian en cada momento, en función de la demanda o sobrecarga de la red bitcoin. Ajustamos la compra mínima de bitcoins al doble del cargo mínimo por mineria del momento actual.'},{ vl: 'Se ajustan las cantidades a mínimos requeridos en la oferta'},{ vl: 'Se ajustan las cantidades a máximos permitidos en la oferta'},{ vl: 'Supera saldo Vendedor menos costes de arbitraje y mineria. Se ajustan valores a máximo posible.'}],
          [{ vl: 'Amounts are adjusted to a minimum sufficient to cover donation miners'},{ vl: 'Insufficient purchase amount for bitcoin mining!'},{ vl: 'The minimum purchase amount is determined, first of all, by the minimum mining costs necessary to guarantee that a new transaction is added to the bitcoin blockchain in a reasonable time (approximately 60 minutes). Mining fees vary at all times, depending on the demand or overload of the bitcoin network. We adjust the minimum purchase of bitcoins to twice the minimum charge for mining at the moment.'},{ vl: 'The quantities are adjusted to the minimum required in the offer'},{ vl: 'The amounts are adjusted to the maximum allowed in the offer'},{ vl: 'Exceeds Seller balance minus arbitration and mining costs. Values are adjusted to the maximum possible.'}],
          [{ vl: 'S`ajusten les quantitats al mínim suficient per cobrir donació miners'},{ vl: 'Import de compra insuficient per mineria bitcoin!'},{ vl: 'L`import mínim de compra ve determinat, en primer lloc, pels costos de mineria mínims necessaris per garantir que una transacció nova sigui afegida a la cadena de blocs bitcoin en un temps raonable (aproximadament 60 minuts). Les tarifes de mineria varien en cada moment, en funció de la demanda o sobrecàrrega de la xarxa bitcoin. Ajustem la compra mínima de bitcoins al doble del càrrec mínim per mineria al moment actual.'},{ vl: 'S`ajusten les quantitats a mínims requerits a l`oferta'},{ vl: 'S`ajusten les quantitats a màxims permesos a l`oferta'},{ vl: 'Supera saldo Venedor menys costos d`arbitratge i mineria. S`ajusten valors al màxim possible.'}],
          [{ vl: 'Os valores são ajustados a um mínimo suficiente para cobrir os mineiros de doação'},{ vl: 'Quantidade de compra insuficiente para mineração de bitcoin!'},{ vl: 'O valor mínimo de compra é determinado, em primeiro lugar, pelos custos mínimos de mineração necessários para garantir que uma nova transação seja adicionada ao blockchain de bitcoin em um tempo razoável (aproximadamente 60 minutos). As taxas de mineração variam o tempo todo, dependendo da demanda ou sobrecarga da rede bitcoin. Ajustamos a compra mínima de bitcoins para o dobro do custo mínimo para mineração no momento.'},{ vl: 'As quantidades são ajustadas ao mínimo exigido na oferta'},{ vl: 'As quantidades são ajustadas ao mínimo exigido na oferta'},{ vl: 'Excede o saldo do vendedor menos os custos de arbitragem e mineração. Os valores são ajustados ao máximo possível.'}],,                                          
            ],                       
      },            
     f_leertxs: {
         txts: [
          [{ vl: 'Tiene transacciones, '},{ vl: ' en proceso.'},{ vl: 'No tiene transacciones en proceso.'},{ vl: 'Tx seleccionada en edición.'}],
          [{ vl: 'Has transactions, '},{ vl: ' in process.'},{ vl: 'You have no transactions in process.'},{ vl: 'Tx selected in edit.'}],
          [{ vl: 'Té transaccions, '},{ vl: ' en procés.'},{ vl: 'No té transaccions en procés.'},{ vl: 'Tx seleccionada en edició'}],
          [{ vl: 'Tem transações, '},{ vl: ' em processo.'},{ vl: 'Não tem transações em processo.'},{ vl: 'Tx selecionado na edição.'}],,                                          
            ],                       
      },      
      alert_chat: {
         mje1: [
          [{ vl: 'Por favor, preste atención al 💬 Chat de la transacción abajo a la derecha'}],
          [{ vl: 'Please, pay attention to the 💬 Transaction Chat at the bottom right'}],
          [{ vl: 'Si us plau, atent al 💬 Xat de la transacció abaix a la dreta'}],
          [{ vl: 'Por favor, preste atenção ao 💬 Chat de transação no canto inferior direito'}],                                            
            ],                                                        
      },     
         
     };         
    },
    filters: {
      currencydecimal(value) {
        return Number(value).toFixed(2);
      },
      currencydec8(value) {
        return Number(value).toFixed(8);
      },
      reduaddr(value) {
        return value.substr(0, 13);
      },
      reduaddr6(value) {
        return value.substr(0, 6);
      },      
      tomins(value) {
        value = value / 60;
        return value.toFixed(1);
      },
      redutxid(value) {
        return value.substr(0, 27);
      },      
      fecha_spa(value) {
        moment.locale("es");
        let fecha = moment(value).locale("es").fromNow();
        return fecha;
      },
      fecha_en(value) {
        moment.locale("en");
        let fecha = moment(value).locale("en").fromNow();
        return fecha;
      },      
      fecha_ca(value) {
        moment.locale("ca");
        let fecha = moment(value).locale("ca").fromNow();
        return fecha;
      },
      fecha_pt(value) {
        moment.locale("pt");
        let fecha = moment(value).locale("pt").fromNow();
        return fecha;
      },            
    },
    computed: {
      ...mapState(["token"]),
      ...mapGetters([
        "nomuser",
        "selectedlang",        
        "selectedbtc",
        "selectedbtcEUR",
        "selectedbtcVES",
        "selectedbtcCOP",
        "selectedbtcCLP",
        "selectedbtcBRL",
        "selectedbtcMXN",
        "selectedbtcARS",
        "selectedbtcPEN",
        "selectedbtcRUB",
        "selectedbtcINR",
        "selectedbtcTRY",
        "selectedbtcIRR",
        "selectedbtcCNY",
        "selectedselTX",
      ]),
    },
    methods: {
      ...mapMutations(["obtenerUsuario"]),
      ...mapActions([
        "syncUpdateValSelTx",
      ]),      
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
      getfee() {
        //console.log("comision mineros.."+this.fee_tipo.mtx[this.svl()][0].vl)
        axios
          .get("https://api.blockchain.info/mempool/fees")
          .then((response) => {
             console.log("m." + response.data.limits.min+" e." + response.data.regular+" R." + response.data.priority+" mx." + response.data.limits.max);
            this.fee_rec = response.data.priority;
            if (this.fee_rec < 2) { // cuando No consigue los valores de la api
              if (this.fee_tipo.mtx[this.svl()][0].vl === "Recomendada") {
                this.fee_rec = 100;
                this.fee_rec = this.fee_rec * this.tx.SIZERAW;           
                this.fee_rec = this.fee_rec / 100000000; // satos a btc
                if ((this.tx.FEE < 0.00000360) | (this.tx.FEE === undefined) | (this.tx.FEE === null) | this.tx.FEE === "") this.tx.FEE = this.fee_rec;
              } else {
                this.fee_rec = 50;
                this.fee_rec = this.fee_rec * this.tx.SIZERAW;           
                this.fee_rec = this.fee_rec / 100000000; // satos a btc
                if ((this.tx.FEE < 0.00000360) | (this.tx.FEE === undefined) | (this.tx.FEE === null) | this.tx.FEE === "") this.tx.FEE = this.fee_rec;                              
              }
            } else { // cuando Si consigue los valores de la api

                this.fee_rec = response.data.priority;
                this.fee_rec = this.fee_rec * this.tx.SIZERAW;           
                this.fee_rec = this.fee_rec / 100000000; // satos a btc
                if ((this.tx.FEE < 0.00000360) | (this.tx.FEE === undefined) | (this.tx.FEE === null) | this.tx.FEE === "") this.tx.FEE = this.fee_rec;                              

                this.fee_eco = response.data.regular;
                this.fee_eco = this.fee_eco * this.tx.SIZERAW;           
                this.fee_eco = this.fee_eco / 100000000; // satos a btc
                if ((this.tx.FEE < 0.00000360) | (this.tx.FEE === undefined) | (this.tx.FEE === null) | this.tx.FEE === "") this.tx.FEE = this.fee_eco;

                this.fee_min = response.data.limits.min;
                this.fee_min = this.fee_min * this.tx.SIZERAW;           
                this.fee_min = this.fee_min / 100000000; // satos a btc
                if ((this.tx.FEE < 0.00000360) | (this.tx.FEE === undefined) | (this.tx.FEE === null) | this.tx.FEE === "") this.tx.FEE = this.fee_min;                                                  

                this.fee_max = response.data.limits.max;
                this.fee_max = this.fee_max * this.tx.SIZERAW;           
                this.fee_max = this.fee_max / 100000000; // satos a btc
                if ((this.tx.FEE < 0.00000360) | (this.tx.FEE === undefined) | (this.tx.FEE === null) | this.tx.FEE === "") this.tx.FEE = this.fee_max;
              }

              this.tx.FEE = this.tx.FEE.toFixed(8); 
                //this.mensaje.color = "success";
                //this.mensaje.texto = this.get_fee.mje1[this.svl()][0].vl;
                //this.showAlert();            
                 //console.log("fee recogido rec..." + this.fee_rec);
                 //console.log("fee recogido eco..." + this.fee_eco);
                 //console.log("fee recogido min..." + this.fee_min);
                 //console.log("fee recogido max..." + this.fee_max);                                    
                 //console.log("this.tx.FEE..." + this.tx.FEE);
            //falta update transac later

            let config = {
              headers: {
                token: this.token,
              },
            };
            if ((this.tx.FEE < 0.00000360) | (this.tx.FEE === undefined) | (this.tx.FEE === null) | this.tx.FEE === "") {
            this.axios
              .put(`/upt-tx/${this.tx._id}`, this.tx, config)
              .then((res) => {
                //
              })
              .catch((e) => {
                console.log(e.response);            
              });
            }

          });
  
      },
/*     
      minPreviminer() {
        let preu = null;
        // unos if dependiendo de la moneda de la oferta
        if (this.oferta.MONEDAOFERTA === "USD") {
          preu = this.round2(this.selectedbtc);
        }
        if (this.oferta.MONEDAOFERTA === "EUR") {
          preu = this.round2(this.selectedbtcEUR);
        }
        if (this.oferta.MONEDAOFERTA === "VES") {
          preu = this.round2(this.selectedbtcVES);
        }
        if (this.oferta.MONEDAOFERTA === "COP") {
          preu = this.round2(this.selectedbtcCOP);
        }
        if (this.oferta.MONEDAOFERTA === "CLP") {
          preu = this.round2(this.selectedbtcCLP);
        }
        if (this.oferta.MONEDAOFERTA === "BRL") { 
          preu = this.round2(this.selectedbtcBRL);
        }
        if (this.oferta.MONEDAOFERTA === "MXN") {
          preu = this.round2(this.selectedbtcMXN);
        }
        if (this.oferta.MONEDAOFERTA === "ARS") {
          preu = this.round2(this.selectedbtcARS);
        }
        if (this.oferta.MONEDAOFERTA === "PEN") {
          preu = this.round2(this.selectedbtcPEN);
        }
        if (this.oferta.MONEDAOFERTA === "RUB") {
          preu = this.round2(this.selectedbtcRUB);
        }
        if (this.oferta.MONEDAOFERTA === "INR") {
          preu = this.round2(this.selectedbtcINR);
        }
        if (this.oferta.MONEDAOFERTA === "TRY") {
          preu = this.round2(this.selectedbtcTRY);
        }
        if (this.oferta.MONEDAOFERTA === "IRR") {
          preu = this.round2(this.selectedbtcIRR);
        }
        if (this.oferta.MONEDAOFERTA === "CNY") {
          preu = this.round2(this.selectedbtcCNY);
        }

        //   console.log('precio....'+preu)
        let minprevim = this.round2(0.00000999 * preu);
        return minprevim
      },
*/      
      onDecodedestiny(decodedString) {
        this.destino = decodedString;
        if (this.destino !== null) {
          this.verqrent = false;
          this.pasteDESTINO(this.destino);
        }
      },      
      onDecode(decodedString) {
        this.payreqentrega_Ln = decodedString;
        if (this.payreqentrega_Ln !== null) {
          this.verqrget = false;
          this.pastePr_entr(this.payreqentrega_Ln);
        }
      },     
      savefee() {
       this.fee_OK = true;
       this.putfee(); 
      },
      putfee() {
        if (this.tx.RAWTXUNSIGNED === '⏳') {
            this.getfee();
            if (this.selectedlang === 'ESP') {
              if (this.fee_tipo.mtx[this.svl()][0].vl === "Recomendada") {
                this.tx.FEE = this.fee_rec;                
              } else if (this.fee_tipo.mtx[this.svl()][0].vl === "Económica") {
                this.tx.FEE = this.fee_eco;                
              } else if (this.fee_tipo.mtx[this.svl()][0].vl === "Mínima") {
                this.tx.FEE = this.fee_min;                                   
              } else if (this.fee_tipo.mtx[this.svl()][0].vl === "Máxima") {
                this.tx.FEE = this.fee_max;                                   
              } 
            }
            if (this.selectedlang === 'ENG') {
              if (this.fee_tipo.mtx[this.svl()][0].vl === "Recommended") {
                this.tx.FEE = this.fee_rec;                
              } else if (this.fee_tipo.mtx[this.svl()][0].vl === "Economical") {
                this.tx.FEE = this.fee_eco;                 
              } else if (this.fee_tipo.mtx[this.svl()][0].vl === "Minimum") {
                this.tx.FEE = this.fee_min;                 
              } else if (this.fee_tipo.mtx[this.svl()][0].vl === "Maximum") {
                this.tx.FEE = this.fee_max;                
              } 
            }              
            if (this.selectedlang === 'CAT') {
              if (this.fee_tipo.mtx[this.svl()][0].vl === "Recomanada") {
                this.tx.FEE = this.fee_rec;               
              } else if (this.fee_tipo.mtx[this.svl()][0].vl === "Econòmica") {
                this.tx.FEE = this.fee_eco;                 
              } else if (this.fee_tipo.mtx[this.svl()][0].vl === "Mínima") {
                this.tx.FEE = this.fee_min;                 
              } else if (this.fee_tipo.mtx[this.svl()][0].vl === "Màxima") {
                this.tx.FEE = this.fee_max;                
              }              
            }
            if (this.selectedlang === 'PORT') {
              if (this.fee_tipo.mtx[this.svl()][0].vl === "Recomendada") {
                this.tx.FEE = this.fee_rec;                
              } else if (this.fee_tipo.mtx[this.svl()][0].vl === "Econômica") { 
                this.tx.FEE = this.fee_eco;                 
              } else if (this.fee_tipo.mtx[this.svl()][0].vl === "Mínima") {
                this.tx.FEE = this.fee_min;                 
              } else if (this.fee_tipo.mtx[this.svl()][0].vl === "Máxima") {
                this.tx.FEE = this.fee_max;                
              }           
            }
           //console.log("this.tx.FEE en put..." + this.tx.FEE);
            // *** analizamoos que fee no supere importe de la compra *********
            if (this.tx.FEE > this.tx.IMPORTECOMPRA / 1.0025) {
                if (this.tx.IMPORTECOMPRA > 0) { 
                 Swal.fire(
                  this.get_fee.swf_p1[this.svl()][0].vl,
                  this.get_fee.swf_p2[this.svl()][0].vl,
                  "error"
                );             
                this.mensaje.color = "danger";
                this.mensaje.texto = this.get_fee.mje2[this.svl()][0].vl;
                this.showAlert();
                }              
                this.tx.FEE = this.fee_min;    
            } 
           //console.log("this.tx.FEE..." + this.tx.FEE);
           if (this.tx.FEE < (this.tx.IMPORTECOMPRA / 1.0025) & this.fee_OK === true ) {
             let config = {
              headers: {
                token: this.token,
              },
             };
             this.axios
              .put(`/upt-tx/${this.tx._id}`, this.tx, config)
              .then((res) => {
                //router.push({ name: "About" });
                // mje a vendedor
                
                      this.nota.nombre = "tx-fee";
                        this.nota.descripcion = "Tx: " +this.tx.IMPORTEMONEDA + " " + this.oferta.MONEDAOFERTA + " 🔄 " + this.tx.CADENARED + this.tx.IMPORTECOMPRA + " BTC. " +
                        this.pre_rati_cobro_selminers.vars[this.svl()][1].vl
                        + " " +
                        this.pre_rati_cobro_selminers.vars[this.svl()][2].vl
                        ;

                      this.axios
                        .post(
                          `/nueva-a-otro/${this.tx.ID_VENDEDOR},${this.tx.EMAIL_VENDEDOR}`,
                          this.nota,
                          config
                        )
                        .then((res) => {
                          this.nota.nombre = "";
                          this.nota.descripcion = "";
                          this.mensaje.color = "success";
                          this.mensaje.texto = this.pre_rati_cobro_selminers.vars[this.svl()][1].vl
                        + " " +
                        this.pre_rati_cobro_selminers.vars[this.svl()][2].vl
                        ;
                          this.showAlert();
                          //router.push({ name: "About" });                 
                        })
                        .catch((e) => {
                          console.log(e.response);
                        });                

              })
              .catch((e) => {
                console.log(e.response);
              });
           } 
        }             
      },
      ahora() {
        // moment.locale("es");
        let fecha = Date.now();
        // encriptar valor fecha con bycript
        return fecha;
      },
      importaddress_sinrescan(address) {
        // sin usar de momento adaptar con un return si se usa sin axios anidados
        let addressB64 = Buffer.from(address).toString("base64");
        this.axios
          .get(`/rpc-udptaddressfalse/${addressB64}`)
          .then((res) => {})
          .catch((e) => {});
      },
      calcQttyentrega_Ln() {
        let btc_aarbitro_Ln = this.tx.IMPORTECOMPRA * 0.005;
        let btc_acomprador_Ln = this.tx.IMPORTECOMPRA - btc_aarbitro_Ln * 0.5; // serv.arbt/2 =  * 0.5
        btc_acomprador_Ln = this.round8(btc_acomprador_Ln);
        this.Qttyentrega_Ln = btc_acomprador_Ln;
        this.Qttyentrega_Ln_ensato = Math.round(this.Qttyentrega_Ln * 100000000);
        this.versato = !this.versato;
      },
      createnotrawTxArb_Ln() {
      if (this.tx.RAWTXUNSIGNED !== "" | this.tx.RAWTXUNSIGNED !== undefined | this.tx.RAWTXUNSIGNED !== null ) { 
                    // otroS 2 axios aqui dentro updatetx Y MJES 
                    this.tx.RAWTXUNSIGNED = "Ln"

                    let config = {
                      headers: {
                        token: this.token,
                      },
                    };

                    this.axios
                      .put(`/upt-tx/${this.tx._id}`, this.tx, config)
                      .then((res) => {
                        this.mensaje.color = "success";
                        this.mensaje.texto = this.f_createnotrawTxArb_Ln.txts[this.svl()][0].vl;
                        this.showAlert();

                        // alerta  al comprador cobro recibido ratificado vendedor***
                        this.nota.nombre = "tx-cobro";
                        this.nota.descripcion = "Tx: " +this.tx.IMPORTEMONEDA + " " + this.oferta.MONEDAOFERTA + " 🔄 " + this.tx.CADENARED + this.tx.IMPORTECOMPRA + " BTC. " +
                          this.f_createnotrawTxArb_Ln.txts[this.svl()][0].vl;

                        this.axios
                          .post(
                            `/nueva-a-otro/${this.tx.ID_COMPRADOR},${this.tx.EMAIL_COMPRADOR}`,
                            this.nota,
                            config
                          )
                          .then((res) => {
                            this.nota.nombre = "";
                            this.nota.descripcion = "";
                            this.mensaje.color = "success";
                            this.mensaje.texto = this.f_createnotrawTxArb_Ln.txts[this.svl()][1].vl;
                            this.showAlert();
                            //router.push({ name: "About" });                            
                          })
                          .catch((e) => {
                            console.log(e.response);
                            if (e.response.data.error.errors.nombre.message) {
                              this.mensaje.texto =
                                e.response.data.error.errors.nombre.message;
                            } else {
                              this.mensaje.texto =
                                this.f_createnotrawTxArb_Ln.txts[this.svl()][2].vl;
                            }
                            this.mensaje.color = "danger";
                            this.showAlert();
                          });
                      })

                      .catch((e) => {
                        console.log(e.response);
                      });
       }                
      },
      pasteDESTINO(valor) {
        this.isPaste = true;
        if (this.isPaste) {
          this.mensaje.color = "success";
          this.mensaje.texto = this.f_paste.txts[this.svl()][0].vl + valor;
          this.showAlert();
          this.isPaste = false;
          if (valor) {
            this.checkbitcoinvalid(valor);
          }
        }
      },
      checkbitcoinvalid(address) {
        let addressB64 = address;
        addressB64 = Buffer.from(addressB64).toString("base64");
        // comprobamos que sea una direccion bitcoin válida
        this.axios
          .get(`/rpc-checkaddrvalid/${addressB64}`)
          .then((res) => {
            // console.log(res.data);
            if (res.data === true) {
              // dirección bitcoin válida
              this.mensaje.texto = this.f_checkbitcoinvalid.txts[this.svl()][0].vl;
              this.mensaje.color = "success";
              this.showAlert();
              this.destinovalid = "✅";
            } else {
              this.mensaje.texto = this.f_checkbitcoinvalid.txts[this.svl()][1].vl;
              this.mensaje.color = "danger";
              this.showAlert();
              this.destinovalid = "❌";
            }
          })
          .catch((e) => {
            //console.log(e.response);
            this.mensaje.texto = this.f_checkbitcoinvalid.txts[this.svl()][1].vl;
            this.mensaje.color = "danger";
            this.showAlert();
            this.destinovalid = "❌";
          });
      },
      guardarDESTINO() {
        if ((this.destino !== "⏳") & (this.destinovalid === "✅")) {
          //this.tx.DESTINO = this.destino;
          //this.createrawTx(); // incluye upt tx
        } else {
          this.mensaje.color = "danger";
          this.mensaje.texto =
            this.f_guardarDESTINO.txts[this.svl()][0].vl;
          this.showAlert();
        }
      },
      pastePr_entr(valor) {
        this.isPaste = true;
        if (this.isPaste) {
          this.mensaje.color = "success";
          this.mensaje.texto = this.f_paste.txts[this.svl()][0].vl + valor;
          this.showAlert();
          this.isPaste = false;
          if (valor) {
            this.checkPr_entr(valor);
          }
        }
      },      
      updatePago() {
        // actualizar db, alertas, socket, notificaciones y timeline
        // actualizar tx db *****************************************
        if (this.tx.PAGO_COMPRADOR === "✅") {
          this.mensaje.color = "success";
          this.mensaje.texto = this.f_updatePago.txts[this.svl()][0].vl;
          this.showAlert();
          this.tx.TIMELINE = "4.Pago";
          let config = {
            headers: {
              token: this.token,
            },
          };
          this.axios
            .put(`/upt-tx/${this.tx._id}`, this.tx, config)
            .then((res) => {
              this.mensaje.color = "success";
              this.mensaje.texto =
                this.f_updatePago.txts[this.svl()][1].vl;
              this.showAlert();

              // alerta  al vendedor notificación de pago confirmada comprador***
              // implica email en cadena, estudiar envio tambien a comprador
              this.nota.nombre = "tx-pago";
              this.nota.descripcion = "Tx: " +this.tx.IMPORTEMONEDA + " " + this.oferta.MONEDAOFERTA + " 🔄 " + this.tx.CADENARED + this.tx.IMPORTECOMPRA + " BTC. " +
                this.f_updatePago.txts[this.svl()][1].vl;

              this.axios
                .post(
                  `/nueva-a-otro/${this.tx.ID_VENDEDOR},${this.tx.EMAIL_VENDEDOR}`,
                  this.nota,
                  config
                )
                .then((res) => {
                  this.nota.nombre = "";
                  this.nota.descripcion = "";
                  this.mensaje.color = "success";
                  this.mensaje.texto = this.f_EliminarTx.txts[this.svl()][2].vl;
                  this.showAlert();
                  router.push({ name: "About" });                 
                })
                .catch((e) => {
                  console.log(e.response);
                  if (e.response.data.error.errors.nombre.message) {
                    this.mensaje.texto =
                      e.response.data.error.errors.nombre.message;
                  } else {
                    this.mensaje.texto =
                      this.f_updatePago.txts[this.svl()][2].vl;
                  }
                  this.mensaje.color = "danger";
                  this.showAlert();
                });
            })

            .catch((e) => {
              console.log(e.response);
            });
        } else {
          // notificar que no se ha sseleccionado el checkbox como realizado
          this.mensaje.color = "danger";
          this.mensaje.texto =
            this.f_updatePago.txts[this.svl()][3].vl;
          this.showAlert();
        }
      }, 
      alertacop() {
        this.mensaje.color = "success";
        this.mensaje.texto = this.f_alertac.txts[this.svl()][1].vl;
        this.showAlert();
      },
      alertacoparb() {
        this.mensaje.color = "success";
        this.mensaje.texto = this.f_alertac.txts[this.svl()][1].vl;
        this.showAlert();
      },
      alertacopcpr() {
        this.mensaje.color = "success";
        this.mensaje.texto = this.f_alertac.txts[this.svl()][2].vl;
        this.showAlert();
      },
      updateAceptada() {
       // this.upd_conf();
      },
      checkPr_entr(Ln_paymreq_entreg) {
        this.mensaje.color = "success";
        this.mensaje.texto =
          this.f_checkPr_entr.txts[this.svl()][0].vl;
        this.showAlert();
        // verificar solicitud en back LND, si es correcta notificar y salvar en Tx los valores y pagar mucho
        // OJO FALTARA ANALIZAR CARGOS DE COMMISIONES DE LOS NODOS PARA QUE PAGUE EL COMPRADOR **********
        //*** *   ******     *****        ***** *** *      *******        *******   ********     ******    *******
        // NPRIMERO DECODIFICAMOS EL PAYMENT REQUEST RECIBIDO....lightning.decodePayReq
        //
        this.axios
          .get(`/ln-decodePayReq/${Ln_paymreq_entreg}`)
          .then((res) => {
            //  console.log(res.data);
            //  console.log("amt_paid_sat..."+res.data.num_satoshis); //importe a pagar en satoshis
            let importe_entrega = res.data.num_satoshis;
            let inv_ID_entrega = res.data.payment_hash; // id fra
            //  console.log(importe_entrega/100000000);
            //  console.log(this.Qttyentrega_Ln);
            if (importe_entrega / 100000000 === this.Qttyentrega_Ln) {
              this.mensaje.color = "success";
              this.mensaje.texto =
                this.f_checkPr_entr.txts[this.svl()][1].vl +
                this.Qttyentrega_Ln +
                " BTC";
              this.showAlert();
              Swal.fire(
                this.f_checkPr_entr.txts[this.svl()][2].vl,
                this.f_checkPr_entr.txts[this.svl()][3].vl +
                inv_ID_entrega +
                "</font> "+this.tit_transac.enunciats[this.svl()][5].vl+" <font color=mediumseagreen> " +
                this.Qttyentrega_Ln +
                this.f_checkPr_entr.txts[this.svl()][4].vl,
                "success"
              );
              //  actualizamos variables nuevas de la tx
              this.tx.LNPAYMENTREQ_ENTREGA = Ln_paymreq_entreg;
              this.lnpayreqentrega_redu = this.tx.LNPAYMENTREQ_ENTREGA.substr(
                0,
                33
              ); //llenamos la variable reducida*
              this.tx.LNINVOICEID_ENTREGA = inv_ID_entrega;


                    // emitimos notificaciiones
                    this.mensaje.color = "success";
                    this.mensaje.texto = this.f_checkPr_entr.txts[this.svl()][5].vl;
                    this.showAlert();
                    Swal.fire(
                      this.f_checkPr_entr.txts[this.svl()][5].vl,
                      this.f_checkPr_entr.txts[this.svl()][6].vl + 
                      "</font> "+this.tit_transac.enunciats[this.svl()][5].vl+" <font color=mediumseagreen> " +
                      this.Qttyentrega_Ln,
                      "success"
                    );

                    //  actulizar valores en db tx
                    //  cabecera token
                    let config = {
                      headers: {
                        token: this.token,
                      },
                    };
                    this.axios
                      .put(`/upt-tx/${this.tx._id}`, this.tx, config)
                      .then((res) => {
                        this.mensaje.color = "success";
                        this.mensaje.texto =
                          this.f_checkPr_entr.txts[this.svl()][8].vl;
                        this.showAlert();
                        // alerta al comprador fondos liberados a falta de 6 confirmaciones***
                        this.nota.nombre = "tx-entrega final";
                        this.nota.descripcion = "Tx: " +this.tx.IMPORTEMONEDA + " " + this.oferta.MONEDAOFERTA + " 🔄 " + this.tx.CADENARED + this.tx.IMPORTECOMPRA + " BTC. " +
                          this.f_checkPr_entr.txts[this.svl()][8].vl;
                        this.axios
                          .post(
                            `/nueva-a-otro/${this.tx.ID_VENDEDOR},${this.tx.EMAIL_VENDEDOR}`,
                            this.nota,
                            config
                          )
                          .then((res) => {
                            this.nota.nombre = "";
                            this.nota.descripcion = "";
                            router.push({ name: "About" });                            
                          })
                          .catch((e) => {
                            console.log(e.response);
                            if (e.response.data.error.errors.nombre.message) {
                              this.mensaje.texto =
                                e.response.data.error.errors.nombre.message;
                            } else {
                              this.mensaje.texto =
                                this.f_createnotrawTxArb_Ln.txts[this.svl()][2].vl;
                            }
                            this.mensaje.color = "danger";
                            this.showAlert();
                          });
                      })

                      .catch((e) => {
                        console.log(e.response);
                      });
                  } else {
                    this.mensaje.color = "danger";
                    this.mensaje.texto =
                      this.f_checkPr_entr.txts[this.svl()][9].vl +
                      this.Qttyentrega_Ln +
                      this.f_checkPr_entr.txts[this.svl()][10].vl +
                      mje_error_pago;
                    this.showAlert();
                  }

          })
          .catch((e) => {
            //   console.log(e.response);
          });
      },
      updateSolicitud() {
        if (this.tx.CADENARED === "⚡") {
          this.comisTxacomprador = this.cdadbtccompra * 0.0025;
          this.aCopiQttymasCom = this.round8(
            this.cdadbtccompra + this.comisTxacomprador
          );
          let aCopiQttymasCom_satos = this.round2(this.aCopiQttymasCom * 100000000);
          //console.log("this.aCopiQttymasCom..." + this.aCopiQttymasCom);
          //console.log("this.aCopiQttymasCom_satos..." + aCopiQttymasCom_satos);
          //this.pubcomprador = "⚡";
          // llenar valores invoice liberación de tx.
          // IR A BACKEND A GENERAR LOS VALORES QUE SIGUEN
          // get()
          this.axios
            .get(`/ln-addInvoice/${aCopiQttymasCom_satos},${this.ahora()}`)
            .then((res) => {
              //console.log("res.data..."+res.data);
              //console.log("res.data.r_hash.data..."+res.data.r_hash.data);
              //console.log("s el invoice ID (payment_hash)del axio..."+Array.prototype.map.call(new Uint8Array(res.data.r_hash.data), x => ('00' + x.toString(16)).slice(-2)).join('')); //es el invoice ID (payment_hash)del axios siguiente
              // console.log("payment_request...." + res.data.payment_request);
              let payment_request = res.data.payment_request;
        //this.tx.LNPAYMENTREQ_LIBER = payment_request;
              this.axios
                .get(`/ln-decodePayReq/${payment_request}`)
                .then((res) => {
                  //  console.log(res.data);
                  // console.log("payment_hash(invoice ID)..."+res.data.payment_hash); // invoice ID
        //this.tx.LNINVOICEID_LIBER = res.data.payment_hash;

                 // *************************************** actualizamos valores ln en TX
                                let config = {
                                  headers: {
                                    token: this.token,
                                  },
                                };
                                this.axios
                                  .put(`/upt-tx/${this.tx._id}`, this.tx, config)
                                  .then((res) => {
                                                  })
                                  .catch((e) => {
                                    //   console.log(e.response);
                                  });  

                })
                .catch((e) => {
                  //   console.log(e.response);
                });
            })
            .catch((e) => {
              //   console.log(e.response);
            });
        }

        if ((this.destinovalid === "✅") & (this.contratoSIcomprador === "✅")) {
          this.mensaje.color = "warning";
          this.mensaje.texto =
            this.f_updateSolicitud.txts[this.svl()][0].vl;
          this.showAlert();

          Swal.fire({
            title: this.f_updateSolicitud.txts[this.svl()][1].vl,
            html: "<div align='left'><b>"+this.f_rechazarSolicitud.swf1[this.svl()][1].vl+":</b><br></div>" +
              "<div style='color:seagreen'>" +
              this.cdadbtccompra +
              " BTC" +
              "</div>" +
              "<br>" +
              "<div align='left'><b>"+this.f_rechazarSolicitud.swf1[this.svl()][2].vl+":</b></div>" +
              "<div style='color:seagreen'>" +
              this.cdadmoncompra +
              " " +
              this.oferta.MONEDAOFERTA +
              "<br><br>" +
              "</div>" +
              "<div align='left'><b>"+this.f_rechazarSolicitud.swf1[this.svl()][3].vl+": </b></div>" +
              "<div style='color:seagreen'>" +
              this.oferta.GRUPOBANCO +
              " - " +
              this.oferta.NOMBANCO + "</div>" +
               "<br>" +             
              "<div align='left'><b>"+this.Entrega_de_la_compra.destino_estipulada[this.svl()][0].vl+": </b></div>" +
              "<div style='color:seagreen'>" +
              this.destino +              
              "<br>" +
              "</div>" +
              "<br>" +
              "<br>" +
              "<div align='left'><b>"+this.f_updateSolicitud.txts[this.svl()][2].vl+"</b></div>", 
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "seagreen",
            cancelButtonColor: "tomato",
            confirmButtonText: this.f_updateSolicitud.txts[this.svl()][3].vl,
            cancelButtonText: this.f_updateSolicitud.txts[this.svl()][4].vl,
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                this.f_updateSolicitud.txts[this.svl()][5].vl,
                this.f_updateSolicitud.txts[this.svl()][6].vl,
                "success"
              );

              // actualizar valores en variables del front
              this.tx.DESTINO = this.destino;
              this.tx.IMPORTECOMPRA = this.cdadbtccompra;
              this.tx.IMPORTEMONEDA = this.cdadmoncompra;
              this.tx.updatedat = Date.now;
              this.tx.TIMELINE = "2.Solicitud";
              this.tx.CONTRATOSICOMPRADOR = this.contratoSIcomprador;
              //  actulizar valores en db tx
              //  cabecera token
              let config = {
                headers: {
                  token: this.token,
                },
              };
              this.axios
                .put(`/upt-tx/${this.tx._id}`, this.tx, config)
                .then((res) => {

                  this.cdadbtccompra = null;
                  this.cdadmoncompra = null;
                  this.contratoSIcomprador = "❌";
                  this.destino = this.nomuser;
                  this.mensaje.color = "success";
                  this.mensaje.texto =
                    this.f_updateSolicitud.txts[this.svl()][7].vl;
                  this.showAlert();

                  // alerta al vendedor tx nueva en espera de aceptacion ** OJO AL ID VENDEDOR ***
                  this.nota.nombre = "tx-solicitud";
                  this.nota.descripcion = "Tx: " +this.tx.IMPORTEMONEDA + " " + this.oferta.MONEDAOFERTA + " 🔄 " + this.tx.CADENARED + this.tx.IMPORTECOMPRA + " BTC. " +
                    this.f_updateSolicitud.txts[this.svl()][8].vl;
                  this.axios
                    .post(
                      `/nueva-a-otro/${this.tx.ID_VENDEDOR},${this.tx.EMAIL_VENDEDOR}`,
                      this.nota,
                      config
                    )
                    .then((res) => {
                      this.nota.nombre = "";
                      this.nota.descripcion = "";
                      this.mensaje.color = "success";
                      this.mensaje.texto = this.f_EliminarTx.txts[this.svl()][2].vl;
                      this.showAlert();
                      router.push({ name: "About" });                     
                    })
                    .catch((e) => {
                     // console.log(e);
                      if (e.response.data.error.errors.nombre.message) {
                        this.mensaje.texto =
                          e.response.data.error.errors.nombre.message;
                      } else {
                        this.mensaje.texto =
                          this.f_createnotrawTxArb_Ln.txts[this.svl()][2].vl;
                      }
                      this.mensaje.color = "danger";
                      this.showAlert();
                    });

                })

                .catch((e) => {
                  console.log(e.response);
                });
            }
          });
        } else {
          // mjes algun input no cumple , contrato, cantidades
          if (this.destinovalid !== "✅") {
            this.mensaje.texto = this.f_checkTx2.txts[this.svl()][4].vl;
          } else if (this.contratoSIcomprador === "❌") {
            this.mensaje.texto =
              this.f_updateSolicitud.txts[this.svl()][10].vl;
          }
          this.mensaje.color = "danger";
          this.showAlert();
        }
      },
      round2(num) {
        if (num > 0) num = parseFloat(num).toFixed(20);       
        return +(Math.round(num + "e+2") + "e-2");
      },
      round8(num) {
        if (num > 0) num = parseFloat(num).toFixed(20);                  
        return +(Math.round(num + "e+8") + "e-8");
      },
      getsaldo(address) {
        let index_found = this.lag.findIndex((element) => element === address);
        // console.log('**found indice**->'+index_found+'**saldo**->'+this.lag[index_found+1]);
        return this.lag[index_found + 1];
      },
      cdadmoncompr() {
        let preu;
        if (this.oferta.MONEDAOFERTA === "USD") {
          let dto = (this.selectedbtc * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtc) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "EUR") {
          let dto = (this.selectedbtcEUR * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcEUR) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "VES") {
          let dto = (this.selectedbtcVES * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcVES) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "COP") {
          let dto = (this.selectedbtcCOP * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcCOP) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "CLP") {
          let dto = (this.selectedbtcCLP * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcCLP) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "BRL") {
          let dto = (this.selectedbtcBRL * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcBRL) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "MXN") {
          let dto = (this.selectedbtcMXN * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcMXN) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "ARS") {
          let dto = (this.selectedbtcARS * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcARS) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "PEN") {
          let dto = (this.selectedbtcPEN * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcPEN) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "RUB") {
          let dto = (this.selectedbtcRUB * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcRUB) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "INR") {
          let dto = (this.selectedbtcINR * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcINR) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "TRY") {
          let dto = (this.selectedbtcTRY * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcTRY) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "IRR") {
          let dto = (this.selectedbtcIRR * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcIRR) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "CNY") {
          let dto = (this.selectedbtcCNY * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcCNY) + dto;
        }
        //   console.log('precio....'+preu)
        this.cdadbtccompra = this.round8(this.cdadmoncompra / preu);
        this.cdadbtccompr(); // ejecutamos la contraparte con el valor establecido para que corra los filtros alli

      },
      cdadbtccompr() {
        //const labelInputRef = this.$refs.monInput;
        //labelInputRef.focus();

        let preu;
        if (this.oferta.MONEDAOFERTA === "USD") {
          let dto = (this.selectedbtc * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          //  console.log('dto en usd....'+dto);
          preu = this.round2(this.selectedbtc) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "EUR") {
          let dto = (this.selectedbtcEUR * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcEUR) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "VES") {
          let dto = (this.selectedbtcVES * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcVES) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "COP") {
          let dto = (this.selectedbtcCOP * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcCOP) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "CLP") {
          let dto = (this.selectedbtcCLP * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcCLP) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "BRL") {
          let dto = (this.selectedbtcBRL * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcBRL) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "MXN") {
          let dto = (this.selectedbtcMXN * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcMXN) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "ARS") {
          let dto = (this.selectedbtcARS * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcARS) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "PEN") {
          let dto = (this.selectedbtcPEN * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcPEN) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "RUB") {
          let dto = (this.selectedbtcRUB * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcRUB) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "INR") {
          let dto = (this.selectedbtcINR * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcINR) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "TRY") {
          let dto = (this.selectedbtcTRY * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcTRY) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "IRR") {
          let dto = (this.selectedbtcIRR * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcIRR) + dto;
        }
        if (this.oferta.MONEDAOFERTA === "CNY") {
          let dto = (this.selectedbtcCNY * this.oferta.PRECIOOFERTA) / 100;
          dto = this.round2(dto);
          preu = this.round2(this.selectedbtcCNY) + dto;
        }
        //console.log('precio....'+preu);
        this.cdadmoncompra = this.round2(this.cdadbtccompra * preu);

        // filtar limites min max oferta
        if ((this.cdadbtccompra * 0.5) < this.tx.FEE & this.tx.CADENARED === '₿') {
          this.mensaje.color = "warning";
          this.mensaje.texto =
            this.f_cdadbtccompr.txts[this.svl()][0].vl;
          this.showAlert();
          Swal.fire(
                  this.f_cdadbtccompr.txts[this.svl()][1].vl,
                  this.f_cdadbtccompr.txts[this.svl()][2].vl,
                  "error"
                );          
          this.cdadbtccompra = this.round8(this.tx.FEE * 2);
          this.cdadmoncompra = this.round2(this.cdadbtccompra * preu);
        }        
        if (this.cdadbtccompra < this.oferta.LIMITEABAJO) {
          this.mensaje.color = "warning";
          this.mensaje.texto =
            this.f_cdadbtccompr.txts[this.svl()][3].vl;
          this.showAlert();
          this.cdadbtccompra = this.round8(this.oferta.LIMITEABAJO);
          this.cdadmoncompra = this.round2(this.cdadbtccompra * preu);
        }
        if (this.cdadbtccompra > this.oferta.LIMITEARRIBA) {
          this.mensaje.color = "warning";
          this.mensaje.texto =
            this.f_cdadbtccompr.txts[this.svl()][4].vl;
          this.showAlert();
          this.cdadbtccompra = this.round8(this.oferta.LIMITEARRIBA);
          this.cdadmoncompra = this.round2(this.cdadbtccompra * preu);
        }
        // aqui otro filtro x si saldo del vendedor bajó -arbitro-mineros < cantidadcompra
        // ((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedbtc | currencydecimal
        // console.log(this.getsaldo(this.oferta.NOMBREUSUARIO));
        // console.log((this.getsaldo(this.oferta.NOMBREUSUARIO) * 0.0025) + this.feei);
        if (
          this.cdadbtccompra >
          this.getsaldo(this.oferta.NOMBREUSUARIO) -
          (this.getsaldo(this.oferta.NOMBREUSUARIO) * 0.0025 + this.feei)
        ) {
          this.mensaje.color = "warning";
          this.mensaje.texto =
            this.f_cdadbtccompr.txts[this.svl()][5].vl;
          this.showAlert();
          this.cdadbtccompra =
            this.getsaldo(this.oferta.NOMBREUSUARIO) -
            (this.getsaldo(this.oferta.NOMBREUSUARIO) * 0.0025 + this.feei);
          this.cdadbtccompra = this.round8(this.cdadbtccompra);    
          this.cdadmoncompra = this.round2(this.cdadbtccompra * preu);
        }

      this.cdadbtccompra = this.round8(this.cdadbtccompra);    
      this.cdadmoncompra = this.round2(this.cdadbtccompra * preu);


      },
      leertxs() {
        // todas las txs donde sea comprador o vendedor
        //  cabecera token
        let config = {
          headers: {
            token: this.token,
          },
        };
        //  console.log('tenemos el token ...'+this.token);
        this.axios
          .get("/leer-transac", config)
          .then((res) => {
            this.txs = res.data; // todas las tx este como comprador o vendedor, ojo orden antiguedad

              //primero filtramos solo las que sean btc o lightning
              let txss = this.txs;       
              for (var i = 0; i < txss.length; i++) {
                      if (
                        (txss[i].CADENARED === '₮')
                      ) {
                        txss.splice(i, 1);
                        i = i - 1;
                      } else {
                        //   console.log('no eliminar'+i)
                      }
                    }
                    this.txs = txss;

            if (this.txs.length === 1) {
              this.mensaje.color = "success";
              this.mensaje.texto =
                this.f_leertxs.txts[this.svl()][0].vl + this.txs.length + this.f_leertxs.txts[this.svl()][1].vl;
              this.showAlert();
              this.leertx2(this.txs[0]);
            } else if (this.txs.length > 1) {            
              this.mensaje.color = "success";
              this.mensaje.texto =
                this.f_leertxs.txts[this.svl()][0].vl + this.txs.length + this.f_leertxs.txts[this.svl()][1].vl;
              this.showAlert();
              this.leertx2(this.selectedselTX);              
            } else {
              this.mensaje.color = "info";
              this.mensaje.texto = this.f_leertxs.txts[this.svl()][2].vl;
              this.showAlert();
            }
          })
          .catch((e) => {
            console.log(e);
          });
      },
      leertx(selddo) { 
      this.syncUpdateValSelTx(selddo);
      router.push({ name: "About" });       
      },
      leertx2(selddo) {
       if (this.selectedselTX !== 'vacio') {
        // aki // partiendo de la tx_id del seldo, buscar esa tx_id dentro de this.txs y actualizar el seldo con los valores de la txs[x] que sea..
        //console.log('selddo_id...'+selddo._id);
            const index = this.txs.findIndex(
                  (item) => item._id === selddo._id
            );
        selddo = this.txs[index]; 
        //console.log('selddo...'+selddo);
       }         
      this.syncUpdateValSelTx(selddo);  
       if (this.selectedselTX !== 'vacio') { 
 
        //solo de la tx seleccionada
        this.signUp = false;        
        this.tx = selddo;
        this.listarUser();        
        if (this.tx.CADENARED === '₿') { 
          this.signinn = true;
          this.signupp = true;
        }
        if (this.tx.CADENARED === '⚡') {
          this.signinn = false;
          this.signupp = false; 
        }
      //  console.log(this.tx);      
        this.leeroferta(this.tx.ID_OFERTA);
        //this.lnpayreqliber_redu = this.tx.LNPAYMENTREQ_LIBER.substr(0, 33); //llenamos la variable reducida
        this.lnpayreqentrega_redu = this.tx.LNPAYMENTREQ_ENTREGA.substr(0, 33); //llenamos la variable reducida
        this.mensaje.color = "success";
        this.mensaje.texto = this.f_leertxs.txts[this.svl()][3].vl;
        this.showAlert();
        //console.log("this.tx.FEE.."+this.tx.FEE);

        //if (this.tx.FEE < 0.00000899 | this.tx.FEE === undefined | this.tx.FEE === null | this.tx.FEE === "") { 
        //  this.getfee();
        //}
        
        this.alerta();
        if (this.nomuser === this.tx.VENDEDOR) this.llenarAceptacion();                
        //this.joinServer();
       }              
      },      
      leeroferta(idoferta) {
        //  cabecera token
        let config = {
          headers: {
            token: this.token,
          },
        };
        //console.log('pide oferta...'+idoferta);
        this.axios
          .get(`/ofusban-vistaid/${idoferta}`, config)
          .then((res) => {
            //  console.log('recibe oferta...'+res.data);
            this.oferta = res.data;
            //  console.log('recibe oferta...'+this.oferta.FORMADEPAGO);

          })
          .catch((e) => {
            console.log(e);
          });
      }, 
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown;
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs;
      },
      alerta() {
        this.mensaje.color = "info";
        this.mensaje.texto = this.alert_chat.mje1[this.svl()][0].vl;
        this.showAlert();
      },
      calcmineros() {
        axios
          .get("https://api.blockchain.info/mempool/fees")
          .then((response) => {
            if (response.data.priority) {
              this.feei = response.data.priority;
            } else {
              this.feei = 110;
            }
            //console.log("fee mineros...antes de multiplicar" + this.fee);
            this.feei = this.feei * 1999;
            this.feei = this.feei / 100000000; // satos a btc
            //console.log("mineros en btc..." + this.fee);
            // listo para descontar
          })
          .catch((e) => {
            console.log(e.response);
          });
      },
      getlag() {
        // llenamos lag con listaddressgroupings
        this.axios
          .get(`/rpc-getlag/`)
          .then((res) => {
            this.lag = res.data;
            // console.log(this.lag);
          })
          .catch((e) => {
            //   console.log(e.response);
          });
      },
      listarUser() {
        // leer id, address, emails user on line
        //console.log("this.tx.VENDEDOR..."+this.tx.VENDEDOR)
        let adr = this.tx.VENDEDOR; 
        let addressB64;
        addressB64 = Buffer.from(adr).toString("base64");
        this.axios
          .get(`/seekUser/${addressB64}`)
          .then((res) => { // usuario
          this.User = res.data;
          })
          .catch((e) => {});
      },      
     
    },
    mounted() {
              this.tx=this.selectedselTX;             
              this.svl();
              this.leertxs();             
              this.getlag();
              this.calcmineros();
              this.destino = this.nomuser;
             // this.alerta();
    },
  };
</script>

<style lang="scss" scoped>

.modal-window {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; 
  z-index: 6;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  &:target {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }
  & > div {
    width: 280px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1em;
    background: white;
  }
  header {
    font-weight: bold;
  }
}
.modal-close {
  color: #aaa;
  line-height: 50px;
  font-size: 80%;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 35px;
  height: 15px;
  text-decoration: none;
  &:hover {
    color: black;
  }
}
.modal-window {
  & > div {
    border-radius: 1rem;
  }
}
.modal-window div:not(:last-of-type) {
  margin-bottom: 15px;
}

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
  body {
    font-family: "Nunito", "Avenir", Helvetica, Arial, sans-serif;
    color: #233535;
    margin: 0;
    padding: 0;
  }

  .container {
    position: relative;
    width: 100%;
    min-width: 360px;
    height: auto;
    min-height: 480px;    
    border-radius: 10px;
    /*background-image: url("https://www.contobit.com/imagens/live3.gif");*/
    /*overflow: hidden;*/
    padding: 0px;

    .overlay-container {
      position: absolute;
      top: 10;
      left: 50%;
      width: 50%;
      height: 99%;
      overflow: hidden;
      transition: transform 0.5s ease-in-out;
      z-index: 100;
      border-radius: 5px;
    }

    .overlay {
      position: relative;
      left: -100%;
      height: 135%;
      width: 200%;
      background: linear-gradient(to bottom right, grey, black);
      color: #deece5;
      transform: translateX(0);
      transition: transform 0.5s ease-in-out;
    }

    .overlayl {
      position: relative;
      left: -100%;
      height: 135%;
      width: 200%;
      background: linear-gradient(to bottom right, darkorchid, indigo);
      color: #deece5;
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
    margin: 5;
  }

  h3 {
    margin: 5;
  }

  p {
    margin: 20px -20px 10px;
  }

  button {
    border-radius: 20px;
    border: 1px solid #02dd68;
    background-color: #2b8656;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    padding: 7.5px 30px;
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
    //  color: #222;
    //  text-decoration: none;
    margin: 5px 0;
    font-size: 0.9rem;
    margin-left: 2px;
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
    padding: 25px 25px;
    width: calc(45% - 110px);
    height: calc(100% - 170px);
    text-align: center;
    background: linear-gradient(to bottom, rgb(230, 232, 231), #d4d8d6);     
    transition: all 0.5s ease-in-out;
    border-radius: 10px;

    div {
      font-size: 1rem;
    }

    input {
      background-color: #eee;
      border: none;
      padding: 17px 11px;
      margin: 3px -3px 0;
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
        font-size: 15px;
        color: #a2a2a2;
        position: absolute;
        pointer-events: none;
        top: 21px;
        left: 12px;
        transition: all 0.3s ease;
      }

      input:focus ~ .floating-label,
      input:not(:focus):valid ~ .floating-label {
        top: 5px;
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

    textarea {
      background-color: #eee;
      border: none;
      padding: 17px 11px;
      margin: 6px -6px 0;
      width: calc(105% - 1px);
      border-radius: 15px;
      border-bottom: 1px solid #ddd;
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff,
        0 1px 0 #fff;
      overflow: scroll;
      font-size: 12px;

      &:focus {
        outline: none;
        background-color: #fff;
      }
    }
  }

  .table-hover>tbody>tr:hover {
    background-color: rgb(231, 248, 231);
  }

  .sign-in {
    top: 1px;
    left: 0;
    margin-left: calc(50% - 25%);
    margin-right: calc(50% - 25%);   
    z-index: 2;
    width: 100%;
    max-width: 480px;    
    height: 99%;
    background: linear-gradient(to bottom right, #b6f5e9, #f5c487);
    transition: all 0.5s ease-in-out;     
  } 
/*#F7931A naranja bitcoin original  */
  .sign-inln {
    top: 1px;
    left: 0;
    margin-left: calc(50% - 25%);
    margin-right: calc(50% - 25%);      
    z-index: 2;
    width: 100%;
    max-width: 480px;      
    height: 99%;
    background: linear-gradient(to bottom right, #b6f5e9, #eabff7);
    transition: all 0.5s ease-in-out;     
  }  

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
  }

  .sign-up-active {
    .sign-in {
      transform: translateX(0%);
    }

    .sign-inln {
      transform: translateX(0%);
    }       

    .overlay-container {
      transform: translateX(-100%);
    }

    .overlay {
      transform: translateX(50%);
    }

    .overlayl {
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
      z-index: 11;
    }

    50% {
      opacity: 1;
      z-index: 10;
    }
  }

.shake {
  animation: shake-animation 9.72s ease infinite;
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
      background: rgb(206, 237, 206);
      color: rgb(0, 87, 0);
      font-size: 18px;
    }
  }

  #nookinput {
    input {
      background: rgb(250, 221, 221);
      color: rgb(138, 0, 0);
      font-size: 18px;
    }
  }


/* previo ajustes phone */
.img {
  max-width: 95%;
  height: auto;
}
#tittransacs {
  color:black;
}

#inp_prevcant {
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
   margin-top: 23px;
   margin-left: -28px; 
   font-size: 20px; 
   color: #c4c4c4;       
} 
#inp_solic {
    color:black;
    min-width: 310px;
    display: flex;
    margin-left: -16px;
    padding: 10.5px 10.5px 0.5px 30.5px;
    letter-spacing: 0.5px;
    min-height: 57.5px;
    font-size: 22px;        
}

#inp_destino {
    color:black;
    min-width: 380px;
    display: flex;     
    margin-left: -22.5px;
    margin-right: 0px;    
    padding: 0.5px 5.5px;
    padding-top: 1.5px;
    min-height: 57.5px;
    font-size: 16px;               
}
#inp_tx_firmada {
    color:black;
    min-width: 410px;    
    display: flex;
    margin-left: -12.5px;     
    margin-right: auto;
    padding: 10.5px 10.5px 0.5px 30.5px;
    padding-top: 1.5px;
    min-height: 57.5px;
    font-size: 16px;               
}
/* For Mobile 
@media screen and (max-width: 540px) {
    .view {
        width: 360px;
    }
} */

/* For Tablets 
@media screen and (min-width: 540px) and (max-width: 780px) {
    .view {
        width: 600px;
    }
}*/
$breakpoint: 680px;

@media (max-width: $breakpoint) {

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

.view {
width: 360px;
overflow: hidden;
}  

.container {
margin-top:-2px;
max-width: 360px;
overflow: hidden;
}
  p {
    margin: 20px -40px 10px;
  }
  .sign-in {
    max-width: 360px;
    margin-left: calc(50% - 50%);     
  }
  .sign-inln {
    max-width: 360px;  
    margin-left: calc(50% - 50%);          
  }  
  
h5 {font-size: 10px;};  
#tittransacs {
  height: auto;      
  font-size: 20px;   
};

 
      thead:first-of-type {
        display: none;
      }
      tr {
        border: 1px solid rgb(172, 172, 172);
        td {
          display: block;
          border: none;
          &:first-child {
            padding-top: 10px;
          }
          &:last-child {
            padding-bottom: 10px;
          }
          &:before {
            content: attr(data-th)":  ";
            font-weight: bold;
            display: inline-block;
            @media (min-width: $breakpoint) {
              display: none;
            }
          }
        }
      }

  /*falta comprobar los 3 pabajo*/

  #inp_tx_firmada {
    color:black;
    min-width: 350px;
    display: flex;     
    margin-left: -21.5px;
    margin-right: 1px;    
    padding: 0.5px 5.5px;
    padding-top: 1.5px;
    min-height: 57.5px;
    font-size: 16px;               
  }
  #inp_destino {
      min-width: 355px;   
      margin-left: -20.5px;
      margin-right: 2px;    
      padding: 0.5px 2.5px;
      padding-top: 1.5px;
      min-height: 57.5px;
      font-size: 14px;               
  }
     
}
</style>
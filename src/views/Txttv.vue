<template>
<div id="Txttv">
  <div class="container">
   <div class="view">         
      <!-- ********************************** INICIO BLOQUE VENDEDOR *************************************************-->
      <!-- ********************************** INICIO BLOQUE VENDEDOR *************************************************-->

      <div v-if="nomuser === tx.VENDEDOR">
        
    <b-alert :show="dismissCountDown" dismissible :variant="mensaje.color" @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged">{{ mensaje.texto }}</b-alert>
              
        <div id="demo1">
          <transition name="fade">
            <div v-if="show1">        
              <article>
                <div class="container" :class="{ 'sign-up-active': signUp }">

                  <div v-if="tx.TIMELINE === '1.Oferta'">
                    <form @submit.prevent="updateSolicitud()" :class="signinn ? 'sign-up' : 'sign-upln'" action="#">                    
                      <h4>
                        <font color="grey">
                          <b>{{tit_table_tx_encurso_td.td_momentum[svl()][1].vl}}. {{tit_table_tx_encurso_td.td_rol[svl()][0].vl}}</b>
                        </font>
                      </h4>
                      <p style="max-width:300px;color:DimGray;">
                        {{Potencial_comprador.mtx[svl()][0].vl}}
                      </p>              
                      <br><br>
                    </form>
                  </div>

                  <!--///////////////////////////// aceptación  VENDEDOR //////BLOQUE VENDEDOR///////////////////////////////// 
                    saldo {{saldo}} ...saldott {{saldott}} ...saldoresptxs {{saldoresptxs}} ...saldoresptxstt {{saldoresptxstt}} ...saldodisponible {{saldodisponible}} ...saldodisponiblett {{saldodisponiblett}} -->                   
                  <div v-if="(tx.TIMELINE === '2.Solicitud' & this.saldodisponible < (tx.FEE + 0.00000547)  & this.saldodisponiblett < this.aCopiQttymasCom)
                  | (tx.TIMELINE === '2.Solicitud')
                  " 
                  >                                   
                  
                 
                    <!--/////////idl entregado -->
                    <div v-if="this.tx.RAWTXSIGNEDARB === '⏳'">
                      <form @submit.prevent="updateAceptada()" :class="signupp ? 'sign-up' : 'sign-upln'" action="#">
                        <h4>
                          <font color="grey">
                            <b>{{tit_table_tx_encurso_td.td_momentum[svl()][2].vl}}</b>
                          </font>
                        </h4>
 
                     <span v-if="tx.DOCS_COMPRADOR === '⏳'">
                          <span v-if="User.DIRMULTIFIRMA_FIANZALN === '⏳'
                          | User.DIRMULTIFIRMA_FIANZALN === ''
                          | User.DIRMULTIFIRMA_FIANZALN === undefined
                          | User.DIRMULTIFIRMA_FIANZALN === null
                          | !User.DIRMULTIFIRMA_FIANZALN
                          " style="color:red;">
                            {{Direccion_bitcoin_multifirma_2_de_3.mtx[svl()][5].vl}} 
                          </span> 

                         <popper style="width:350px;"
                              trigger="clickToOpen"
                              :options= popoptionsb>
                              <div class="popper_tl" style="margin-left: 90px;margin-right: 5px;"> 
                                  <span v-if="tx.CADENARED === '₮'" v-html="help_CONTRATO_BITCOIN_MULTIFIRMA.pte1[svl()][0].vl"></span>                            
                                  <i><b><a :href= 
                                  "this.url+this.tx.COMPRADOR" target="_blank">
                                  <font color=mediumseagreen>{{this.tx.COMPRADOR}} </font></a></b></i><br>
                                  <i><span v-html="help_CONTRATO_BITCOIN_MULTIFIRMA.pte2[svl()][0].vl"></span><b> 
                                  <a :href="this.url + this.oferta.NOMBREUSUARIO" target="_blank"> <font color=RED>{{this.oferta.NOMBREUSUARIO}} </font></a></b></i><br>
                                  <i><span v-html="help_CONTRATO_BITCOIN_MULTIFIRMA.pte3[svl()][0].vl"></span><b> <a :href="this.url + this.User.ARBITRAJE" target="_blank">
                                  <font color=DodgerBlue>{{this.User.ARBITRAJE}} </font></a></b></i><br>
                                  <span v-html="help_CONTRATO_BITCOIN_MULTIFIRMA.pte4[svl()][0].vl"></span> <font color=red>{{this.tx.IMPORTECOMPRA}}</font> 
                                  <span v-html="help_CONTRATO_BITCOIN_MULTIFIRMA.pte5[svl()][0].vl"></span> 
                                  <font color=mediumseagreen>{{this.tx.IMPORTEMONEDA}} 
                                  {{this.oferta.MONEDAOFERTA}}</font> 
                                  <span v-if="tx.CADENARED === '₮'" v-html="help_CONTRATO_BITCOIN_MULTIFIRMA.pte6_vendedor[svl()][0].vl"></span>
                                                                    
                              </div>                
                              <a  href="#" slot="reference" > 
                                {{CONTRATO_destino.mtx1[svl()][0].vl}}
                              </a>
                         </popper><br /><br />

                              <popper
                                    trigger="clickToOpen"
                                    :options= popoptionsb>
                                    <div class="popper_tl" style="margin-left: 15px">                         
                                        <span v-html="Facilitar_detalles_medio_de_pago.pte1[svl()][0].vl"></span> {{oferta.GRUPOBANCO}} <b>- <font color=yellow>
                                        {{oferta.NOMBANCO}} </font></b>
                                      <span v-html="Facilitar_detalles_medio_de_pago_LN.pte2[svl()][0].vl"></span> 
                                    </div>                
                                    <a  href="#" slot="reference" >
                                      {{Facilitar_detalles_medio_de_pag.mtx[svl()][0].vl}}
                                    <font-awesome-icon :icon="['far', 'question-circle']" />
                                    </a>
                              </popper> 
                              <br /><br />                     
                      <font color="Gray" size="4">
                         {{tit_transac.enunciats[svl()][6].vl}}: {{ tx.DOCS_COMPRADOR }} <br /><br />
                      </font>
                      <b-button variant="outline-primary btn-success btn-block"
                       @click="upd_docscomp('si')">✅ {{RECHAZAR_SOLICITUD.mtx[svl()][1].vl}}
                      </b-button>                      
                   </span> 

                  <span v-if="tx.DOCS_COMPRADOR === '✅' ">

                              <span id="dirmulti">
                                <font size="2" color=dimgray>
                                  {{Direccion_bitcoin_multifirma_2_de_3.mtx[svl()][1].vl}}:
                                </font>
                                  <i><b><a :href= 
                                  "this.url+this.User.DIRMULTIFIRMA_FIANZALN" target="_blank">
                                  <font color=green>{{this.mgmfredu | reduaddr}}... </font></a></b></i>
                                 <popper :options= popoptions>
                                      <div class="popper">  
                                        {{Copiar_direccion_multifirma.mtx[svl()][0].vl}} 
                                      </div>                
                                      <span slot="reference" >
                                        <a class="btn btn-outline-primary" style="padding: 1px 5px 1px;" v-clipboard:copy="this.User.DIRMULTIFIRMA_FIANZALN"
                                        @click="alertacoparb()">
                                        <font-awesome-icon :icon="['far', 'copy']" /></a>
                                      </span>
                                 </popper>                                    
                              </span><br>

                         <span v-if="this.saldodisponible >= 0 ">                            
                              <span id="dirmulti">
                                <font size="2" color=dimgray>
                                  ⛏️ {{Direccion_bitcoin_multifirma_2_de_3.mtx[svl()][2].vl}}: ₿ 
                                </font>
                                  <b>
                                  <font size="3" color=green> {{this.saldodisponible.toFixed(8) }} </font></b> 
                              </span><br>
                              <span id="dirmulti">
                                <font size="2" color=dimgray>
                                  ⛏️{{Direccion_bitcoin_multifirma_2_de_3.mtx[svl()][3].vl}}: ₿ 
                                </font>
                                  <b>
                                  <font v-if="this.saldodisponible < (tx.FEE + 0.00000547)" size="3" color=red> {{(tx.FEE + 0.00000547).toFixed(8) }} </font>
                                  <font v-if="this.saldodisponible > (tx.FEE + 0.00000547)" size="3" color=green> {{(tx.FEE + 0.00000547).toFixed(8) }} </font>                                  
                                  </b> 
                              </span><br>
                           
                              <span id="dirmulti">
                                <font size="2" color=dimgray>
                                  {{Direccion_bitcoin_multifirma_2_de_3.mtx[svl()][2].vl}}: ₮ 
                                </font>
                                  <b>
                                  <font size="3" color=green> {{this.saldodisponiblett.toFixed(2) }} </font></b> 
                              </span><br>
                              <span id="dirmulti">
                                <font size="2" color=dimgray>
                                  {{Direccion_bitcoin_multifirma_2_de_3.mtx[svl()][3].vl}}: ₮ 
                                </font>
                                  <b>
                                  <font v-if="this.saldodisponiblett < this.aCopiQttymasCom" size="3" color=red> {{this.aCopiQttymasCom.toFixed(2) }} </font>
                                  <font v-if="this.saldodisponiblett > this.aCopiQttymasCom" size="3" color=green> {{this.aCopiQttymasCom.toFixed(2) }} </font>                                  
                                  </b> 
                              </span><br>


                              <b>
                              <font
                              v-if="((tx.FEE + 0.00000547) - this.saldodisponible) < 0 | (this.aCopiQttymasCom - this.saldodisponiblett) > 0" 
                              size="5" color=green>
                              ✅    
                              </font>                                
                              <font
                              v-if="((tx.FEE + 0.00000547) - this.saldodisponible) > 0 | (this.aCopiQttymasCom - this.saldodisponiblett) > 0" 
                              size="2" color=red>
                                  {{Direccion_bitcoin_multifirma_2_de_3.mtx[svl()][4].vl}}:  
                              </font>
                              </b><br> 
                              <span id="dirmulti" v-if="((tx.FEE + 0.00000547) - this.saldodisponible) > 0">
                              <b>                                
                                  <span style="color:red;font-size:20px;"> ₿ {{((tx.FEE + 0.00000547) - this.saldodisponible).toFixed(8) }} </span>                                  
                              </b>
                                <popper
                                :options= popoptions>
                                      <div class="popper">  
                                        {{Copiar_cantidad_USDT_a_liberar.mtx[svl()][0].vl}} 
                                      </div>                
                                      <span slot="reference" >
                                        <a class="btn btn-outline-primary" style="padding: 1px 5px 1px;" v-clipboard:copy="((tx.FEE + 0.00000547) - this.saldodisponible).toFixed(8)"
                                        @click="alertacop()">
                                        <font-awesome-icon :icon="['far', 'copy']" />
                                        </a>
                                      </span>
                                </popper><br>    
                              </span>
                              <span id="dirmulti" v-if="(this.aCopiQttymasCom - this.saldodisponiblett) > 0">
                              <b>                                
                                  <span style="color:red;font-size:20px;"> ₮ {{(this.aCopiQttymasCom - this.saldodisponiblett).toFixed(2) }} </span>                                  
                              </b>
                                <popper
                                :options= popoptions>
                                      <div class="popper">  
                                        {{Copiar_cantidad_USDT_a_liberar.mtx[svl()][0].vl}} 
                                      </div>                
                                      <span slot="reference" >
                                        <a class="btn btn-outline-primary" style="padding: 1px 5px 1px;" v-clipboard:copy="(this.aCopiQttymasCom - this.saldodisponiblett).toFixed(2)"
                                        @click="alertacop()">
                                        <font-awesome-icon :icon="['far', 'copy']" />
                                        </a>
                                      </span>
                                </popper><br>    
                              </span>

                                                            
                         </span>

                         <popper
                              trigger="clickToOpen"
                              :options= popoptionsb>
                              <div class="popper_tl" style="margin-left:-110px;width:350px;">                         
                                    <span v-html="TRANSACCION_en_transito.hlp[svl()][0].vl"></span>             
                              </div>                
                              <a  href="#" slot="reference" >
                                    <font-awesome-icon :icon="['far', 'question-circle']" />
                              </a>
                         </popper><br>                              

                          <font color="Gray" size="2">
                            {{TRANSACCION_en_transito.confirms[svl()][2].vl}} ⏳ {{this.timerCount}} 👀
                          </font>
                  </span>
                            <b-button variant="outline-primary btn-danger btn-block"
                              id="denegar" @click="rechazarSolicitud()">❌ {{RECHAZAR_SOLICITUD.mtx[svl()][0].vl}}</b-button>                        
                      </form>
                    </div>
                  </div>


                  <div v-if="tx.TIMELINE === '2.Solicitud' 
                  & this.saldodisponible >= (tx.FEE + 0.00000547) 
                  & this.saldodisponiblett >= this.aCopiQttymasCom
                    & tx.DOCS_COMPRADOR === '✅' ">
                   
                      <form @submit.prevent="updateAceptada()" :class="signupp ? 'sign-up' : 'sign-upln'" action="#">
                        <h4>
                          <font color="grey">
                            <b>{{tit_table_tx_encurso_td.td_momentum[svl()][2].vl}}</b>
                          </font>
                        </h4>                              
                              <span id="dirmulti">
                                <font size="1" color=dimgray>
                                  {{Direccion_bitcoin_multifirma_2_de_3.mtx[svl()][1].vl}}:
                                </font>
                                  <i><b><a :href= 
                                  "this.url+this.User.DIRMULTIFIRMA_FIANZALN" target="_blank">
                                  <font size="1" color=green>{{this.mgmfredu | reduaddr}}... </font></a></b></i>                                   
                              </span>
                              <span id="dirmulti" style="margin-top:-10px;">
                                <font size="1" color=dimgray>
                                 ⛏️ {{Direccion_bitcoin_multifirma_2_de_3.mtx[svl()][2].vl}}: ₿ 
                                </font>
                                  <b>
                                  <font size="1" color=green> {{this.saldodisponible.toFixed(8) }} </font></b> 
                              </span>
                              <span id="dirmulti" style="margin-top:-10px;">
                                <font size="1" color=dimgray>
                                ⛏️  {{Direccion_bitcoin_multifirma_2_de_3.mtx[svl()][3].vl}}: ₿ 
                                </font>
                                  <b>
                                  <font v-if="this.saldodisponible < this.tx.FEE + 0.00000547" size="1" color=red> {{((tx.FEE + 0.00000547)).toFixed(8) }} </font>
                                  <font v-if="this.saldodisponible > this.tx.FEE + 0.00000547" size="1" color=green> {{((tx.FEE + 0.00000547)).toFixed(8) }} </font>                                  
                                  </b> 
                              </span>
                              <span id="dirmulti" style="margin-top:-10px;">
                                <font size="1" color=dimgray>
                                  {{Direccion_bitcoin_multifirma_2_de_3.mtx[svl()][2].vl}}: ₮ 
                                </font>
                                  <b>
                                  <font size="1" color=green> {{this.saldodisponiblett.toFixed(2) }} </font></b> 
                              </span>
                              <span id="dirmulti" style="margin-top:-10px;" >
                                <font size="1" color=dimgray>
                                  {{Direccion_bitcoin_multifirma_2_de_3.mtx[svl()][3].vl}}: ₮ 
                                </font>
                                  <b>
                                  <font v-if="this.saldodisponiblett < this.aCopiQttymasCom" size="1" color=red> {{this.aCopiQttymasCom.toFixed(2) }} </font>
                                  <font v-if="this.saldodisponiblett > this.aCopiQttymasCom" size="1" color=green> {{this.aCopiQttymasCom.toFixed(2) }} </font>                                  
                                  </b> 
                              </span>                              


                     <!--/////////
                      RAWTXUNSIGNED RAWTXSIGNEDARB RAWTXSIGNEDVEND           ********************   SIN LOCKTIME  ****************                          
                     firma tx respaldo -->
                    <div v-if="this.tx.RAWTXSIGNEDARB === '⏳'">

                        <popper
                              trigger="clickToOpen"
                              :options= popoptionsb>
                              <div class="popper_tl" style="margin-left:-110px;width:350px;">                         
                                    <span v-if="tx.CADENARED === '₮'" v-html="Respaldo_Entrega.hlp[svl()][0].vl"></span>
                                                 
                              </div>                
                              <a  href="#" slot="reference" >
                                    <font-awesome-icon :icon="['far', 'question-circle']" />
                              </a>
                        </popper><br>
                           {{Respaldo_Entrega.mtx[svl()][0].vl}}: 
                          <popper v-if="(this.tx.SIZERAW === 0  & tx.RAWTXUNSIGNED === '⏳' & this.tx.FEE === 0) |
                                        (this.tx.FEE !== 0  & tx.RAWTXUNSIGNED === '⏳') "
                                  :options= popoptionsb>
                                  <div class="popper" > 
                                    <span
                                    v-html="Respaldo_Entrega.mtx[svl()][1].vl"></span>
                                    <span
                                    v-html="Respaldo_Entrega.mtx[svl()][0].vl"></span>                         
                                  </div>
                                    <a  v-if="this.tx.SIZERAW === 0  & tx.RAWTXUNSIGNED === '⏳' & this.tx.FEE === 0 "
                                        style="display:flex;margin-top:-25px;margin-left:350px;margin-right:50px;margin-bottom:5px;max-width:25px;max-height:25px;padding:0px 1px 0px 1px;"
                                        href="#"
                                        slot="reference"
                                        class="btn btn-outline-primary blink-bg"
                                        @click="check_noother_tx_withraw()"
                                        >
                                        ⚙️
                                    </a>                                                  
                                    <a  v-if="this.tx.FEE !== 0  & tx.RAWTXUNSIGNED === '⏳' "
                                        style="display:flex;margin-top:-25px;margin-left:350px;margin-right:50px;margin-bottom:5px;max-width:25px;max-height:25px;padding:0px 1px 0px 1px;"
                                        href="#"
                                        slot="reference"
                                        class="btn btn-outline-primary blink-bg"
                                        @click="createrawTxMf2Mn()"
                                        >
                                        ⚙️
                                    </a>
                          </popper>                          
                          <textarea class="form-control" rows="2" style="margin-left:auto; margin-right:auto; padding-right:5px; display:flex; max-width:270px;min-height:70px;max-height:120px;background:#ECFFDC;" 
                            :placeholder="Respaldo_Entrega.mtx[svl()][0].vl" v-model="this.tx.RAWTXUNSIGNED"
                            readonly></textarea>                                                        
                          <popper
                                  :options= popoptionsb>
                                  <div class="popper" >
                                    {{Respaldo_Entrega.mtx[svl()][3].vl}} 
                                    <span
                                    v-html="Respaldo_Entrega.mtx[svl()][0].vl"></span>                         
                                  </div>                
                                    <a  
                                        style="display:flex;margin-top:-60px;margin-left:350px;margin-right:50px;margin-bottom:5px;max-width:25px;max-height:25px;padding:3px 3px 3px 5px;"
                                        href="#"
                                        slot="reference"
                                        class="btn btn-outline-primary"
                                        v-clipboard:copy="this.tx.RAWTXUNSIGNED"
                                        @click="alertacoparb()"
                                        >
                                        <font-awesome-icon :icon="['far', 'copy']" />
                                    </a>
                          </popper>
                          <popper
                                          :options= popoptionsb>
                                          <div class="popper" style="margin-right: 0px; " > 
                                            <span
                                            v-html="Mostrar_qrcode.vars[svl()][0].vl"></span>
                                            <span
                                            v-html="Respaldo_Entrega.mtx[svl()][0].vl"></span>                       
                                          </div>                
                                            <a  href="#"
                                                slot="reference"
                                                >
                                                <a href="#open-modal16" class="btn btn-outline-primary" style="
                                                  display:flex;margin-top:-22px;margin-left:350px;margin-right:50px;margin-bottom:5px;max-width:25px;max-height:25px;padding:0px 4px 4px 4px;"><qrcode-vue :value="'qrcode'" :size="12"></qrcode-vue></a>
                                            </a>
                          </popper>
                                      <span id="open-modal16" class="modal-window" style="margin-right:0px;top:0px;">
                                          <div>
                                                Qr-code<a href="#" :title="Cerrar.mtx[svl()][0].vl" class="modal-close">❌</a><br>
                                                <small><font color=Black> {{Respaldo_Entrega.mtx[svl()][0].vl}} :<br></font></small>
                                                <popper
                                                        :options= popoptionsb>
                                                        <div class="popper_tl" style="margin-right: 0px; " > 
                                                        <span
                                                        v-html="this.tx.RAWTXUNSIGNED"></span>      
                                                        </div>                
                                                        <a  href="#"
                                                            slot="reference"
                                                        >
                                                          <qrcode-vue :value="this.tx.RAWTXUNSIGNED" :size="250" level="H"></qrcode-vue>
                                                        </a>
                                                  </popper>
                                            </div>                        
                                        </span>       
                        
                      <div v-if="this.tx.ACEP_VENDEDOR === '⏳'" id="nookinput" class="shake" >
                        <span class="floating-label-group">
                        <span id="inp_prevcant" style="margin-right: -30px;">
                          <popper
                                  trigger="clickToOpen"    
                                  :options= popoptionsl>
                                  <div class="popper_scanqr" style="margin-right: -340px;margin-top: -180px;">                         
                                      <qrcode-stream
                                        v-if="verqrget === true"
                                        @decode="onDecode_2signs" style="width: 298px; height: 298px"><span style="font-size:12px;">{{Direccion_bitcoin_multifirma_2_de_3.mtx[svl()][1].vl}}</span></qrcode-stream> 
                                  </div>                
                                  <a href="#" slot="reference" @click="verqrget = !verqrget">
                                    <popper
                                            :options= popoptions>
                                            <div class="popper" >                         
                                                <span v-html="Direccion_bitcoin_multifirma_2_de_3.mtx[svl()][1].vl"></span> {{Direccion_bitcoin_multifirma_2_de_3.mtx[svl()][1].vl}} 
                                            </div>        
                                              <img
                                                  slot="reference"
                                                  align="right"
                                                  style="margin-top: 0px;margin-left: 1px;"
                                                  src="https://www.contobit.com/img/scanqr.jpg"
                                                  width="24px"
                                                  height="22px"
                                              />                              
                                    </popper>                                                                        
                                  </a>
                          </popper>
                        </span>                           
                        <input id="inp_tx_firmada" type="text"
                        style="padding-left:30px;padding-right:30px;"  v-model="tx.RAWTXSIGNEDARB" autocomplete="off" autofocus
                          @input="pasteTx2(tx.RAWTXSIGNEDARB)" required />
				                    <label class="floating-label" style="margin-left: 20px;">{{Respaldo_Entrega.mtx[svl()][2].vl}}</label>

                          <popper
                                trigger="clickToOpen"
                                :options= popoptionsb>
                                <div class="popper_tl" style="margin-left: -300px">                         
                                    <span v-html="Respaldo_Entrega.hlp[svl()][1].vl"></span> 
                                </div>                
                                <a  href="#" slot="reference" > 
                                  <font-awesome-icon id="inp_in_hlp" :icon="['far', 'question-circle']" />
                                </a>
                          </popper>                             
			                  </span>

                      </div>

                            <b-button variant="outline-primary btn-danger btn-block"
                              id="denegar" @click="rechazarSolicitud()">❌ {{RECHAZAR_SOLICITUD.mtx[svl()][0].vl}}</b-button> 
                      </div>                              
                      </form>
                  </div>

                     <!--/////////
                      RAWTXUNSIGNED RAWTXSIGNEDARB RAWTXSIGNEDVEND           ********************   CON LOCK TIME ****************                          
                     firma tx respaldo -->
                    <div v-if="this.tx.RAWTXSIGNEDARB !== '⏳'">
                      <form @submit.prevent="updateAceptada()" :class="signupp ? 'sign-up' : 'sign-upln'" action="#">                                            

                        <h4>
                          <font color="grey">
                            <b>{{tit_table_tx_encurso_td.td_momentum[svl()][2].vl}}</b>
                          </font>
                        </h4>

                              <span id="dirmulti">
                                <font size="1" color=dimgray>
                                  {{Direccion_bitcoin_multifirma_2_de_3.mtx[svl()][1].vl}}:
                                </font>
                                  <i><b><a :href= 
                                  "this.url+this.User.DIRMULTIFIRMA_FIANZALN" target="_blank">
                                  <font size="1" color=green>{{this.mgmfredu | reduaddr}}... </font></a></b></i>                                   
                              </span>
                              <span id="dirmulti" style="margin-top:-10px;">
                                <font size="1" color=dimgray>
                                 ⛏️ {{Direccion_bitcoin_multifirma_2_de_3.mtx[svl()][2].vl}}: ₿ 
                                </font>
                                  <b>
                                  <font size="1" color=green> {{this.saldodisponible.toFixed(8) }} </font></b> 
                              </span>
                              <span id="dirmulti" style="margin-top:-10px;">
                                <font size="1" color=dimgray>
                                ⛏️  {{Direccion_bitcoin_multifirma_2_de_3.mtx[svl()][3].vl}}: ₿ 
                                </font>
                                  <b>
                                  <font v-if="this.saldodisponible < this.tx.FEE + 0.00000547" size="1" color=red> {{((tx.FEE + 0.00000547)).toFixed(8) }} </font>
                                  <font v-if="this.saldodisponible > this.tx.FEE + 0.00000547" size="1" color=green> {{((tx.FEE + 0.00000547)).toFixed(8) }} </font>                                  
                                  </b> 
                              </span>
                              <span id="dirmulti" style="margin-top:-10px;">
                                <font size="1" color=dimgray>
                                  {{Direccion_bitcoin_multifirma_2_de_3.mtx[svl()][2].vl}}: ₮ 
                                </font>
                                  <b>
                                  <font size="1" color=green> {{this.saldodisponiblett.toFixed(2) }} </font></b> 
                              </span>
                              <span id="dirmulti" style="margin-top:-10px;" >
                                <font size="1" color=dimgray>
                                  {{Direccion_bitcoin_multifirma_2_de_3.mtx[svl()][3].vl}}: ₮ 
                                </font>
                                  <b>
                                  <font v-if="this.saldodisponiblett < this.aCopiQttymasCom" size="1" color=red> {{this.aCopiQttymasCom.toFixed(2) }} </font>
                                  <font v-if="this.saldodisponiblett > this.aCopiQttymasCom" size="1" color=green> {{this.aCopiQttymasCom.toFixed(2) }} </font>                                  
                                  </b> 
                              </span> 

                        <popper
                              trigger="clickToOpen"
                              :options= popoptionsb>
                              <div class="popper_tl" style="margin-left:-110px;width:350px;">                         
                                    <span v-if="tx.CADENARED === '₮'" v-html="Respaldo_Entrega.hlp[svl()][0].vl"></span>
                                                
                              </div>                
                              <a  href="#" slot="reference" >
                                    <font-awesome-icon :icon="['far', 'question-circle']" />
                              </a>
                        </popper>
                           {{Respaldo_Entrega.mtx[svl()][0].vl}}: 
                          <popper
                                  :options= popoptionsb>
                                  <div class="popper" > 
                                    <span
                                    v-html="Respaldo_Entrega.mtx[svl()][1].vl"></span>
                                    <span
                                    v-html="Respaldo_Entrega.mtx[svl()][0].vl"></span>                         
                                  </div>                
                                    <a  
                                        style="display:flex;margin-top:-25px;margin-left:350px;margin-right:50px;margin-bottom:5px;max-width:25px;max-height:25px;padding:0px 1px 0px 1px;"
                                        href="#"
                                        slot="reference"
                                        class="btn btn-outline-primary"
                                        @click="createrawTxMf2Mn()"
                                        >
                                        ⚙️
                                    </a>
                          </popper>                          
                          <textarea class="form-control" rows="2" style="margin-left:auto; margin-right:auto; padding-right:5px; display:flex; max-width:270px;min-height:70px;max-height:120px;background:#ECFFDC;" 
                            :placeholder="Respaldo_Entrega.mtx[svl()][0].vl" v-model="varrawtxunsigned"
                            readonly></textarea>                                                        
                          <popper
                                  :options= popoptionsb>
                                  <div class="popper" >
                                    {{Respaldo_Entrega.mtx[svl()][3].vl}} 
                                    <span
                                    v-html="Respaldo_Entrega.mtx[svl()][0].vl"></span>                         
                                  </div>                
                                    <a  
                                        style="display:flex;margin-top:-60px;margin-left:350px;margin-right:50px;margin-bottom:5px;max-width:25px;max-height:25px;padding:3px 3px 3px 5px;"
                                        href="#"
                                        slot="reference"
                                        class="btn btn-outline-primary"
                                        v-clipboard:copy="varrawtxunsigned"
                                        @click="alertacoparb()"
                                        >
                                        <font-awesome-icon :icon="['far', 'copy']" />
                                    </a>
                          </popper>
                          <popper
                                          :options= popoptionsb>
                                          <div class="popper" style="margin-right: 0px; " > 
                                            <span
                                            v-html="Mostrar_qrcode.vars[svl()][0].vl"></span>
                                            <span
                                            v-html="Respaldo_Entrega.mtx[svl()][0].vl"></span>                       
                                          </div>                
                                            <a  href="#"
                                                slot="reference"
                                                >
                                                <a href="#open-modal17" class="btn btn-outline-primary" style="
                                                  display:flex;margin-top:-52px;margin-left:350px;margin-right:50px;margin-bottom:5px;max-width:25px;max-height:25px;padding:0px 4px 4px 4px;"><qrcode-vue :value="'qrcode'" :size="12"></qrcode-vue></a>
                                            </a>
                          </popper>
                                      <span id="open-modal17" class="modal-window" style="margin-right:0px;top:0px;">
                                          <div>
                                                Qr-code<a href="#" :title="Cerrar.mtx[svl()][0].vl" class="modal-close">❌</a><br>
                                                <small><font color=Black> {{Respaldo_Entrega.mtx[svl()][0].vl}} :<br></font></small>
                                                <popper
                                                        :options= popoptionsb>
                                                        <div class="popper_tl" style="margin-right: 0px; " > 
                                                        <span
                                                        v-html="varrawtxunsigned"></span>      
                                                        </div>                
                                                        <a  href="#"
                                                            slot="reference"
                                                        >
                                                          <qrcode-vue :value="varrawtxunsigned" :size="250" level="H"></qrcode-vue>
                                                        </a>
                                                  </popper>
                                            </div>                        
                                        </span>       
                         
                      <div v-if="this.tx.ACEP_VENDEDOR === '⏳'" id="nookinput" class="shake" >
                        <span class="floating-label-group">
                        <span id="inp_prevcant" style="margin-right: -30px;">
                          <popper
                                  trigger="clickToOpen"    
                                  :options= popoptionsl>
                                  <div class="popper_scanqr" style="margin-right: -340px;margin-top: -180px;">                         
                                      <qrcode-stream
                                        v-if="verqrget === true"
                                        @decode="onDecode_2signs" style="width: 298px; height: 298px"><span style="font-size:12px;">{{Direccion_bitcoin_multifirma_2_de_3.mtx[svl()][1].vl}}</span></qrcode-stream> 
                                  </div>                
                                  <a href="#" slot="reference" @click="verqrget = !verqrget">
                                    <popper
                                            :options= popoptions>
                                            <div class="popper" >                         
                                                <span v-html="Direccion_bitcoin_multifirma_2_de_3.mtx[svl()][1].vl"></span> {{Direccion_bitcoin_multifirma_2_de_3.mtx[svl()][1].vl}} 
                                            </div>        
                                              <img
                                                  slot="reference"
                                                  align="right"
                                                  style="margin-top: 0px;margin-left: 1px;"
                                                  src="https://www.contobit.com/img/scanqr.jpg"
                                                  width="24px"
                                                  height="22px"
                                              />                              
                                    </popper>                                                                        
                                  </a>
                          </popper>
                        </span>                           
                        <input id="inp_tx_firmada" type="text"
                        style="padding-left:30px;padding-right:30px;"  v-model="tx.RAWTXSIGNEDVEND" autocomplete="off" autofocus
                           @input="pasteTx2(tx.RAWTXSIGNEDVEND)" required />
				                    <label class="floating-label" style="margin-left: 20px;">{{Respaldo_Entrega.mtx[svl()][2].vl}}</label>

                          <popper
                                trigger="clickToOpen"
                                :options= popoptionsb>
                                <div class="popper_tl" style="margin-left: -300px">                         
                                    <span v-html="Respaldo_Entrega.hlp[svl()][1].vl"></span> 
                                </div>                
                                <a  href="#" slot="reference" > 
                                  <font-awesome-icon id="inp_in_hlp" :icon="['far', 'question-circle']" />
                                </a>
                          </popper>                             
			                  </span>
                      </div>
                              <span id="dirmulti" style="margin-top:-20px;">
                                <font size="3" color=blue>
                                  <span v-html="Direccion_bitcoin_multifirma_2_de_3.mtx[svl()][6].vl"></span>
                                </font> 
                              </span> <br>                    
                      
                      </form>
                  </div>

                  <!--///////////////////////////// cobro VENDEDOR ///////BLOQUE VENDEDOR//////////////////////////////// -->
                  <div v-if="tx.TIMELINE === '3.Contrato'">
                    <form @submit.prevent="updateCobro()" class="sign-up" action="#">
                      <h3>
                        <font color="grey">
                          <b> {{tit_table_tx_encurso_td.td_momentum[svl()][4].vl}}. {{tit_table_tx_encurso_td.td_rol[svl()][1].vl}} </b>
                        </font>
                      </h3>

                        <popper
                              trigger="clickToOpen"
                              :options= popoptionsb>
                              <div class="popper_tl" style="margin-left:-50px;width:350px;">                         
                                    <span v-html="Cobro_vendedor.hlp_pte1[svl()][0].vl"></span>
                                      {{this.oferta.GRUPOBANCO}} 
                                      <b>- <font color=yellow>
                                      {{this.oferta.NOMBANCO}}</font></b>                                   
                                    <span v-html="Cobro_vendedor.hlp_pte2[svl()][0].vl"></span>                                                  
                              </div>                
                              <a  href="#" slot="reference" >
                                      <font color="red">
                                        <font-awesome-icon :icon="['far', 'question-circle']" />
                                      </font>
                              </a>
                        </popper>

                      <div>
                        {{Cobro_vendedor.mtx[svl()][0].vl}}:
                        <strong>
                          <i>{{ this.tx.PAGO_COMPRADOR }}</i>
                        </strong>
                      </div>

                      <b-form-checkbox v-model="tx.COBRO_VENDEDOR" value="✅" unchecked-value="⏳" required>{{Cobro_vendedor.mtx[svl()][1].vl}}</b-form-checkbox>


                      <div>
                        {{Estado_var.mtx[svl()][0].vl}}:
                        <strong>
                          <i>{{ this.tx.COBRO_VENDEDOR }}</i>
                        </strong>
                      </div>

                        <popper
                              trigger="clickToOpen"
                              :options= popoptionsb>
                              <div class="popper_tl" style="margin-left:-50px;width:350px;">                         
                                    <span v-html="Remitir_justi_cobro.tlp[svl()][0].vl"></span>                                                
                              </div>                
                              <a  href="#" slot="reference" >
                                      {{Remitir_justi_cobro.vars[svl()][0].vl}}
                              </a>
                        </popper>
                      <br />

                      <b-button v-if="tx.PAGO_COMPRADOR === '✅'" variant="outline-primary btn-success btn-block"
                        type="submit">
                        <img align="bottom" src="https://www.contobit.com/imagens/manitatt.png" width="25px"
                          height="17.4px" />
                        <img /> {{Remitir_justi_cobro.vars[svl()][1].vl}}
                      </b-button>
                      <b-button v-if="tx.PAGO_COMPRADOR === '⏳'" variant="outline-primary btn-success btn-block"
                        disabled>
                        <img align="bottom" src="https://www.contobit.com/imagens/manitatt.png" width="25px"
                          height="17.4px" />
                        <img /> {{Remitir_justi_cobro.vars[svl()][1].vl}}
                      </b-button>
                      <b-button variant="outline-primary btn-danger btn-block" id="denegar" type="submit" disabled>❌
                        {{Remitir_justi_cobro.vars[svl()][2].vl}}</b-button>

                    </form>
                  </div>

                  <!--///////////////////////////// ratificacion pago/cobro //////////////////////////////// -->
                  <!--///////////////////////////// cobro ratificacion VENDEDOR ///////BLOQUE VENDEDOR//////////////////////////////// -->
                  <div v-if="tx.TIMELINE === '4.Pago'">
                    <form @submit.prevent="updateCobro()" class="sign-up" action="#">
                      <h3>
                        <font color="grey">
                          <b> {{tit_table_tx_encurso_td.td_momentum[svl()][4].vl}}. {{tit_table_tx_encurso_td.td_rol[svl()][1].vl}} </b>
                        </font>
                      </h3>
                        <popper
                              trigger="clickToOpen"
                              :options= popoptionsb>
                              <div class="popper_tl" style="margin-left:-50px;width:350px;">                         
                                    <span v-html="Cobro_Vendedor.hlp[svl()][0].vl"></span>
                                      {{this.oferta.GRUPOBANCO}} 
                                      <b>- <font color=yellow>
                                      {{this.oferta.NOMBANCO}}</font></b>                                   
                                    <span v-html="Cobro_Vendedor.hlp[svl()][1].vl"></span>                                                  
                              </div>                
                              <a  href="#" slot="reference" >
                                      <font color="red">
                                        <font-awesome-icon :icon="['far', 'question-circle']" />
                                      </font>
                              </a>
                        </popper> 
                      <div>
                        {{Cobro_Vendedor.vars[svl()][0].vl}}:
                        <strong>
                          <i>{{ this.tx.PAGO_COMPRADOR }}</i>
                        </strong>
                      </div>

                      <b-form-checkbox v-model="tx.COBRO_VENDEDOR" value="✅" unchecked-value="⏳" required>{{Cobro_Vendedor.vars[svl()][1].vl}}</b-form-checkbox>

                      <div>
                        {{Estado_var.mtx[svl()][0].vl}}:
                        <strong>
                          <i>{{ this.tx.COBRO_VENDEDOR }}</i>
                        </strong>
                      </div>

                        <popper
                              trigger="clickToOpen"
                              :options= popoptionsb>
                              <div class="popper_tl" style="margin-left:-40px;width:350px;">                         
                                    <span v-html="Cobro_Vendedor.hlp_remitir[svl()][0].vl"></span>                                                
                              </div>                
                              <a  href="#" slot="reference" >
                                    {{Cobro_Vendedor.vars[svl()][2].vl}}
                              </a>
                        </popper>
                      <br />

                      <b-button variant="outline-primary btn-success btn-block" type="submit">
                        <img align="bottom" src="https://www.contobit.com/imagens/manitatt.png" width="25px"
                          height="17.4px" />
                        <img /> {{Cobro_Vendedor.vars[svl()][3].vl}}
                      </b-button>

                      <b-button variant="outline-primary btn-danger btn-block" id="denegar" type="submit"
                        @click="Impago()">❌ {{Cobro_Vendedor.vars[svl()][4].vl}}</b-button>
                    </form>
                  </div>


                  <!--///////////////////////////// listo para entrega arbitro a comprador//////////////////////////////// -->
                  <!--///////////////////////////// entrega de Tethers //////////////////////////////// -->
                  <!--///////////////////////////// entrega de Tethers lado vendedor ///////BLOQUE VENDEDOR////////////////////timeline cobro//////////// -->
                  <div v-if="tx.TIMELINE === '5.Cobro'">
                    <form @submit.prevent="updateEntrega()" class="sign-up" action="#">
                      <h4>
                        <font color="grey">
                          <b> {{tit_table_tx_encurso_td.td_momentum[svl()][5].vl}} {{Entrega_de_la_venta.vars[svl()][0].vl}} </b>
                        </font>
                      </h4>
                      <div v-if="tx.CADENARED === '₮'">
                        {{Entrega_de_la_venta.vars[svl()][1].vl}}:
                        <strong>
                          <i>{{ this.tx.IDTX_ENTREGA | redutxid }}...</i>
                        </strong>
                      </div>

                      {{Entrega_de_la_venta.vars[svl()][4].vl}}
                      <br />

                    </form>
                  </div>

                  <!-- ///////////////////////////// entrega Tethers lado vendedor //////////BLOQUE vendedor//////////////////timeline entrega///// -->
                  <div v-if="tx.TIMELINE === '6.Entrega'">
                    <form @submit.prevent="updateEntrega()" class="sign-up" action="#">
                      <h4>
                        <font color="grey">
                          <b> {{tit_table_tx_encurso_td.td_momentum[svl()][5].vl}} {{Entrega_de_la_venta.vars[svl()][0].vl}} </b>
                        </font>
                      </h4>

                      <div v-if="
                          (this.tx.IDTX_ENTREGA !== '⏳') &
                          (tx.CADENARED === '₮')
                        "><br>
                        <font color="grey" size="4">{{Entrega_de_la_venta.vars[svl()][1].vl}}:</font> <br>
                        <strong>
                          <i>
                            <a v-bind:href="this.urltx + this.tx.IDTX_ENTREGA" target="_blank">
                              <h5><span id="tittransacs">₿ {{
                                  this.tx.IDTX_ENTREGA | redutxid
                                }}...✅</span></h5>
                            </a>
                          </i>
                          <i>
                           <a v-bind:href="this.urltxomni + this.tx.IDTX_ENTREGA" target="_blank">
                              <h5><span id="tittransacs">₮ {{
                                  this.tx.IDTX_ENTREGA | redutxid
                                }}...✅</span></h5>
                            </a>
                          </i>                          
                        </strong>
                        <br />

                          <popper
                                trigger="clickToOpen"
                                :options= popoptionsb>
                                <div class="popper_tl" style="margin-left: 0px;">                         
                                    <span v-html="Entregada_la_compra.hlp_enviada[svl()][0].vl"></span> 
                                </div>                
                                <a  href="#" slot="reference" style="color:red; font-size:22px;">
                                  <font-awesome-icon :icon="['far', 'question-circle']" />
                                </a>
                          </popper>                        
                        <br />
                        <div v-if="timerCountfin > 0">
                          <font color="Gray" size="2">
                            {{Entregada_la_compra.vars[svl()][1].vl}} ⏳ {{ this.timerCountfin }}
                            <CountDown :seconds="this.timerCountfin" />
                          </font>
                        </div>
                        <popper v-if="
                          (this.tx.IDTX_ENTREGA !== '⏳') &
                          (tx.CADENARED === '₮')
                        "
                                :options= popoptionsb>
                                <div class="popper" style="margin-left: 0px;">                         
                                    <span v-html="Entregada_la_compra.tlp_eliminar[svl()][0].vl"></span> 
                                </div>                
                                <b-button slot="reference" variant="outline-primary btn-success btn-block" @click="EliminarTx()">
                                  <font-awesome-icon icon="trash" /> {{Entregada_la_compra.vars[svl()][2].vl}} <br />( {{conf_idl}} Conf.)
                                </b-button>                   
                        </popper>                        
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
                    <form class="sign-up" action="#">
                      <h3>
                        <font color="grey" size="7">
                          <b>{{Tx_a_arbitraje.tit[svl()][0].vl}}</b>
                        </font>
                      </h3>
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

      <!-- ********************************** FIN BLOQUE VENDEDOR ***************************************************-->
      <!-- ********************************** FIN BLOQUE VENDEDOR ***************************************************
       -->
     

    </div>
   </div>      
  </div>
</template>

<script>
  import axios from "axios";
  import router from "../router";
  //import io from "socket.io-client";
  import {
    mapState,
    mapMutations,
    mapActions,
    mapGetters
  } from "vuex";
  // @ is an alias to /src
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
    name: "Txttv",
    components: {
      //ChatRoom,
      QrcodeVue,
      CountDown,
      'popper': Popper,      
    },
    data() {
      return {
        User: [],        
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
        varrawtxunsigned: "",
        saldo: 0,
        saldott: 0,        
        locktime: 0,               
        saldoresptxs: 0,
        saldoresptxstt: 0,        
        saldodisponible: 0,
        saldodisponiblett: 0,        
        mgmfredu: "⏳",
        entrega_lista: "NO",
        createdopenraw: "NO",                         
        isOpentt: false,      
        prepago_miners: null,
        okprepa_miners: null,
        versato: false,
        destinovalid: "❌",
        destino: null,
        lag: [],
        lagtt: [],
        fee: null,
        feei: null,
        ispkvendedorok: false,
        verredeem: false,
        verzqrcode: false,
        verqrget: false,
        isPaste: false,
        contratoSIvededor: "❌",
        pubvendedor: null,
        url: "https://blockexplorer.one/btc/testnet/address/",
        urltx: "https://blockexplorer.one/btc/testnet/tx/",
        urltxomni: "https://blockexplorer.one/omni-layer/testnet/tx/",
        vertxs: true,
        now: moment().locale("es"),
        today: moment().locale("es").fromNow(), // prueba 
        timerCount: 0,
        timerCountfin: 0,
        conf_idl: 0,        
        nota: {
          nombre: "",
          descripcion: ""
        },
        aCopiQttymasCom: null,
        comisTxacomprador: null,
        idliberacion: null,
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
        selectedFile: null,
        username: "Anónimo", //para el chat
        alerts: [],
        todos: "",
        el: "#container",
        el: "#demo",
        el: "#demo1",
        el: "#demo2",
        signUp: false,
        show: false,
        show1: true,
        show2: false,
      // siguen variables para idiomas parte html
      Textos_qrcode: {
       vars: [
          [{ vl: ' Mostrar el código Qr a leer...'},{ vl: ' Escanear código Qr, '},{ vl: ' Activa / desactiva escanear el código Qr de '}],
          [{ vl: ' Show the Qr code to read...'},{ vl: ' Scan Qr code, '},{ vl: ' Activates / deactivates scanning the Qr code of '}],
          [{ vl: ' Mostra el codi Qr a llegir...'},{ vl: ' Escanejar codi Qr, '},{ vl: ' Activa / desactiva escanejar el codi Qr de l` '}],
          [{ vl: ' Mostrar o código Qr para ler...'},{ vl: ' Digitalize código Qr, '},{ vl: ' Ativa / desativa a digitalização do código Qr de '}],                                             
            ],
      },
      Potencial_comprador: {
       mtx: [
          [{ vl: 'Potencial comprador emitiendo solicitud de compra para su oferta, por vavor permanezca atento al 💬 Chat de la transacción abajo a la derecha y espere..'}],
          [{ vl: 'Potential buyer issuing purchase request for your offer, please stay tuned to the 💬 Transaction Chat at the bottom right and wait ..' }],
          [{ vl: 'Potencial comprador emetent sol·licitud de compra per la seva oferta, per vavor estigui atent al 💬 Xat de la transacció baix a la dreta i esperi ..' }],
          [{ vl: 'Comprador potencial emitindo solicitação de compra para sua oferta, fique atento ao 💬 Chat de transação no canto inferior direito e aguarde.' }],                                               
            ],           
      },            
      tit_table_tx_encurso: {
       mat: [
          [{ vl: 'Incio' }, { vl: 'Via' }, { vl: 'Liberados' }, { vl: 'Tethers' }, { vl: 'Monedas' }, { vl: "Pago" }, { vl: 'Cobro' }, { vl: 'Rol' }, { vl: 'Momentum' }, { vl: 'Acción' }],
          [{ vl: 'Initiated' }, { vl: 'Via' }, { vl: 'Delivered' }, { vl: 'Tethers' }, { vl: 'Exchange' }, { vl: "Payment" }, { vl: 'Collection' }, { vl: 'Role' }, { vl: 'Momentum' }, { vl: 'Action' }],
          [{ vl: 'Inci' }, { vl: 'Via' }, { vl: 'Alliberats' }, { vl: 'Tethers' }, { vl: 'Monedes' }, { vl: "Pagament" }, { vl: 'Cobrament' }, { vl: 'Rol' }, { vl: 'Momentum' }, { vl: 'Acció' }],
          [{ vl: 'Começa' }, { vl: 'Via' }, { vl: 'Liberado' }, { vl: 'Tethers' }, { vl: 'Moedas' }, { vl: "Pagamento" }, { vl: 'Cobro' }, { vl: 'Função' }, { vl: 'Momentum' }, { vl: 'Açao' }],                                               
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
        
       enunciats: [
          [{ vl: 'Medio de pago' },{ vl: 'Precio' },{ vl: 'Moneda de pago' },{ vl: 'Mínimo - Máximo' },{ vl: 'Compra' },{ vl: ' por importe de ' },{ vl: 'Prueba solvencia de compra aceptada' },{ vl: 'Multifirma' },{ vl: 'Arbitraje' },{ vl: 'Liberación Tethers vendedor, Identificador Tx' },{ vl: 'Red Tether, 6 confirmaciones, recibido' },{ vl: 'Notificación del comprador' },{ vl: 'Ratificación del vendedor' },{ vl: 'Destino Comprador' },{ vl: 'Entrega de Tethers, Identificador Tx' }, ],
          [{ vl: 'Payment method' },{ vl: 'Price' },{ vl: 'Payment currency' },{ vl: 'Min MAX' },{ vl: 'Purchase' },{ vl: 'for the amount of' },{ vl: 'Proof of purchase solvency accepted' },{ vl: 'Multisign' },{ vl: 'Arbitration' },{ vl: 'Tethers seller release, Tx Identifier' },{ vl: 'Tether network, 6 confirmations, received' },{ vl: 'Buyer`s notification' },{ vl: 'Seller`s ratification' },{ vl: 'Buyer Destination' },{ vl: 'Tethers Delivery, Tx Identifier' },],
          [{ vl: 'Mitjà de pagament' },{ vl: 'Preu' },{ vl: 'Moneda de pagament' },{ vl: 'Mínim - Màxim' },{ vl: 'Compra' },{ vl: 'per import de' },{ vl: 'Prova solvència de compra acceptada' },{ vl: 'Multisignatura' },{ vl: 'Arbitratge' },{ vl: 'Alliberament Tethers venedor, Identificador Tx ' },{ vl: 'Xarxa Tether, 6 confirmacions, rebut' },{ vl: 'Notificació del comprador' },{ vl: 'Ratificació del venedor' },{ vl: 'Destí Comprador' },{ vl: 'Lliurament de Tethers, Identificador Tx' },],
          [{ vl: 'Meio de pagamento' },{ vl: 'Preço' },{ vl: 'Moeda de pagamento' },{ vl: 'Mínimo - Máximo' },{ vl: 'Compra' },{ vl: 'pela quantidade de' },{ vl: 'Comprovante de solvência de compra aceita' },{ vl: 'Multi-assinatura' },{ vl: 'Arbitragem' },{ vl: 'Liberação do vendedor de Tethers, identificador de Tx' },{ vl: 'Rede Tether, 6 confirmações recebidas' },{ vl: 'Notificação do comprador' },{ vl: 'Ratificação do vendedor' },{ vl: 'Destino do comprador' },{ vl: 'Entrega de Tethers, Identificador Tx' },],                                         
            ],                              
      },           

      caps: {
       mtx: [
          [{ vl: '1.Oferta' }, { vl: '2.Solicitud' }, { vl: '3.Contrato' }, { vl: '4.Pago' }, { vl: '5.Cobro' }, { vl: "6.Entrega" }, { vl: '5-6.Arbitraje' }, { vl: '5.Impago' }, { vl: '6.Retorno' }],
          [{ vl: '1.Offer' }, { vl: '2.Request' }, { vl: '3.Contract' }, { vl: '4.Payment' }, { vl: '5.Collection' }, { vl: "6.Delivery" }, { vl: '5-6.Arbitration' }, { vl: '5.Non-payment' }, { vl: '6.Return' }],
          [{ vl: '1.Oferta' }, { vl: '2.Sol.licitud' }, { vl: '3.Contracte' }, { vl: '4.Pagament' }, { vl: '5.Cobrament' }, { vl: "6.Lliurament" }, { vl: '5-6.Arbitratge' }, { vl: '5.Impagament' }, { vl: '6.Retorn' }],
          [{ vl: '1.Oferta' }, { vl: '2.Solicitação' }, { vl: '3.Contrato' }, { vl: '4.Pagamento' }, { vl: '5.Cobro' }, { vl: "6.Entrega" }, { vl: '5-6.Arbitragem' }, { vl: '5.Falta de pagamento' }, { vl: '6.Retorna' }],,                                 
            ],                    
      },

      Facilitar_detalles_medio_de_pago: {
       pte1: [
          [{ vl: '<br><b>Facilitar detalles medio de pago:</b><br> Caso de estar conforme con la prueba de solvencia de compra remitida por el potencial comprador.  Facilite, por vía privada (Ej. Email(cifrado), Whatsapp, Telegram ...) o en el 💬 Chat de la transacción abajo a la derecha, detalles específicos del medio de pago (imagen nítida o pdf) de su cuenta en ' }],

          [{ vl: '<br><b>Provide details of payment method:</b><br>If you agree with the proof of purchase solvency sent by the potential buyer. Provide, by private means (Eg. Email (encrypted), WhatsApp, Telegram ...) or in the 💬 Chat of the transaction at the bottom right, specific details of the means of payment (clear image or pdf) of your account in ' }],

          [{ vl: 'Facilitar dades del mitjà de pagament:</b><br> Cas de la vostra conformitat amb la prova de solvència remesa pel potencial comprador.  Faciliti, per via privada (Ex. Email (xifrat), WhatsApp, Telegram ...) o al 💬 Xat de la transacció abaix a la dreta, detalls específics del mitjà de pagament (imatge nítida o pdf) del seu compte a ' }],

          [{ vl: 'Forneça detalhes do método de pagamento:</b><br> Se concordar com o comprovativo de solvência de compra enviado pelo potencial comprador. Forneça, por meio privado (Ex. E-mail (criptografado), WhatsApp, Telegram ...) ou no 💬 Chat da transação no canto inferior direito, detalhes específicos do meio de pagamento (imagem nítida ou pdf) da sua conta em ' }],,                                 
            ],             
       pte2: [
          [{ vl: '</font></b>, con sus señas a donde el comprador debe dirigir el pago.  Con tal fín, el comprador pueda, primero anticipar prepago de colaboración por cargo de donación a mineros de la cadena de bloques, y posteriormente proceder al pago de los tethers requeridos a la mayor brevedad, tan pronto se produzca en la cadena de bloques de tether la sexta confirmación de la liberación de los tethers solicitados. El Comprador pudiera solicitar, por vía privada a través del 💬 Chat Tx, algún dato adicional a éste que pudiera serle requerido en su proceso de pago. <br> <br>' }],
          [{ vl: '</font></b>, with your details to where the buyer should direct the payment. To this end, the buyer can first anticipate collaboration prepayment for a donation fee to blockchain miners, and then proceed to pay the required tethers as soon as possible, as soon as it occurs in the tether blockchain, the sixth confirmation of the release of the requested tethers. The Buyer may request, privately through the 💬 Chat Tx, any additional information to this that may be required in their payment process. <br> <br>' }],
          [{ vl: '</font></b>, amb les  vostres dades a on el comprador ha de dirigir el pagament. Amb tal fi, el comprador pugui, primer anticipar el prepagament com a col.laboració pel càrrec de donació a miners a la carena de blocs y posteriorment procedir al  pagament dels tethers requerits a la major brevetat, així que es produeixi a la xarxa tether la sisena confirmació de l`alliberament dels tethers. El comprador pogués sol·licitar, per via privada o a través del 💬 Xat Tx, alguna dada addicional a aquesta que pogués ser-li requerida en el procés de pagament al mitja estipulat. <br> <br>' }],
          [{ vl: '</font></b>, com seus dados para onde o comprador deve direcionar o pagamento. Para este fim, o comprador pode primeiro antecipar o pré-pagamento de colaboração para uma taxa de doação para os mineiros de blockchain e, em seguida, continuar a pagar os tethers necessários o mais rápido possível, assim que ocorrer no blockchain de tether. A sexta confirmação da liberação do tethers solicitados. O Comprador pode solicitar, em particular através do 💬 Chat Tx, qualquer informação adicional a esta que possa ser necessária em seu processo de pagamento. <br> <br>' }],,                                 
            ],            
      },
      Facilitar_detalles_medio_de_pag: {
       mtx: [
          [{ vl: 'Facilitar detalles medio de pago'}],
          [{ vl: 'Provide details of payment method' }],
          [{ vl: 'Facilitar dades mitjà de pagament' }],
          [{ vl: 'Forneça detalhes método de pagamento' }],                                               
            ],           
      },
      Copiar_cantidad_USDT_a_liberar: {
       mtx: [
          [{ vl: 'Copiar cantidad al portapapeles'}],
          [{ vl: 'Copy amount to clipboard' }],
          [{ vl: 'Copiar quantitat al portaretalls' }],
          [{ vl: 'Copie o valor para a área de transferência' }],                                               
            ],           
      },       
      RECHAZAR_SOLICITUD: {
       mtx: [
          [{ vl: 'RECHAZAR SOLICITUD'},{ vl: 'ACEPTAR SOLVENCIA Y CONTRATO'},{ vl: 'SOLVENCIA DE COMPRA ACEPTADA POR EL VENDEDOR.'},{ vl: 'DETERMINADO EL PESO DE LA TRANSACCIÓN DE RESPALDO DE ENTREGA FINAL AL COMPRADOR, PARA ESTABLECER DONACIÓN MINEROS, BYTES: '},{ vl: 'GENERADA PARA FIRMA DEL VENDEDOR, LA TRANSACCIÓN DE RESPALDO DE ENTREGA FINAL AL COMPRADOR.'},{ vl: 'FIRMADA POR ARBITRAJE Y VENDEDOR LA TRANSACCIÓN DE RESPALDO DE ENTREGA FINAL AL COMPRADOR, CON FECHA DE EMISIÓN  SIN RESTRINGIR(ENCRIPTADA Y SALVADA).'}],
          [{ vl: 'DENY REQUEST' },{ vl: 'ACCEPT SOLVENCY AND CONTRACT'},{ vl: 'SOLVENCY OF PURCHASE ACCEPTED BY THE SELLER.'},{ vl: 'DETERMINED THE WEIGHT OF THE FINAL DELIVERY BACKUP TRANSACTION TO THE BUYER, TO ESTABLISH DONATION MINERS, BYTES: '},{ vl: 'GENERATED FOR SELLER`S SIGNATURE, THE FINAL BACKUP DELIVERY TRANSACTION TO THE BUYER.'},{ vl: 'SIGNED BY ARBITRATION AND SELLER THE FINAL DELIVERY BACKUP TRANSACTION TO THE BUYER, WITH UNRESTRICTED ISSUE DATE(ENCRIPTED AND SAVED).'}],
          [{ vl: 'REBUTJAR SOL·LICITUD' },{ vl: 'ACCEPTAR SOLVÈNCIA DEL COMPRADOR Y CONTRACTE'},{ vl: 'SOLVÈNCIA DE COMPRA ACCEPTADA PEL VENEDOR.'},{ vl: 'DETERMINAT EL PES DE RESPATLLER DE LA TRANSACCIÓ DE LLIURAMENT FINAL AL COMPRADOR, PER DETERMINAR DONACIÓ MINERS, BYTES: '},{ vl: 'GENERADA PER A SIGNATURA DEL VENEDOR, EL RESPATLLER DE LA TRANSACCIÓ DE LLIURAMENT FINAL AL COMPRADOR.'},{ vl: 'SIGNAT PER ARBITRATGE I VENEDOR EL RESPATLLER DE LA TRANSACCIÓ DE LLIURAMENT FINAL AL COMPRADOR, AMB DATA D`EMISSIÓ  SENSE RESTRINGIR(ENCIFRAT I DESAT).'}],
          [{ vl: 'REJEITAR APLICAÇÃO' },{ vl: 'ACEITAR SOLVÊNCIA E O CONTRATO'},{ vl: 'SOLVÊNCIA DE COMPRA ACEITADA PELO VENDEDOR.'},{ vl: 'DETERMINADO O PESO DA OPERAÇÃO DE ENTREGA FINAL AO COMPRADOR, PARA ESTABELECER A DOAÇÃO DO MINERADOR, BYTES: '},{ vl: 'GERADA PARA ASSINATURA DO VENDEDOR, OPERAÇÃO FINAL DE RESPALDO DA TX ENTREGA AO COMPRADOR.'},{ vl: 'ASSINADA POR ARBITRAGEM E VENDEDORA A OPERAÇÃO DE RESPALDO DA ENTREGA FINAL AO COMPRADOR, COM DATA DE EMISSÃO NÃO RESTRITO(ENCRIPTADO E SALVO).'}],                                               
            ],           
      },
      help_Direccion_Tether_CONTRATO_multifirma: {
       pte1: [
          [{ vl: '<br><b>Dirección Tether CONTRATO multifirma(2 de 3): <font color=green size=4>' }],

          [{ vl: '<br><b>Tether address multi-signature CONTRACT (2 of 3): <font color=green size=4>' }],

          [{ vl: '<br><b>Adreça Tether multisignatura (2 de 3): <font color=green size=4>' }],

          [{ vl: '<br><b>CONTRATO endereço Tether múlti-assinaturas (2 de 3):<font color=green size=4>' }],,                                 
            ],             
       pte2: [
          [{ vl: '</font></b><br> La Dirección Tether contrato multifirma(2 de 3) es la dirección, y destino temporal intermedio seguro, <b>a donde el vendedor debe enviar los USDT a liberar</b>, detallados encima. La dirección multifirma(2 de 3) se crea integrando las repéctivas claves públicas del comprador, vendedor y árbitro. La citada dirección ha sido generada de manera que no sea parte, ni siquiera, de la cartera del arbitraje.<b> Es imposible mover Tethers fuera de esta dirección sin la firma privada, como mínimo, de dos de las tres partes que la componen.</b><br> Si desea puede verificar y examinar, en detalle y formato legible, la composición técnica del <a href=https://academy.bit2me.com/que-es-p2sh/#:~:text=Una%20transacci%C3%B3n%20P2SH%20funciona%20gracias,del%20scriptSig%20de%20la%20transacci%C3%B3n. target=_blank><font color=cyan> script de canje  (redeem script)</font></a> <font color=yellow></font> resultante de la creación de la multifirma. Acceda pulsando el botón de chequear ✅ debajo de la dirección multifirma, para su tranquilidad, antes de proceder al envio de sus Tethers.<br> <br>' }],
          [{ vl: '</font></b><br> The Tether multi-signature contract address (2 of 3) is the address, and safe intermediate temporary destination, <b> where the seller must send the USDT to be released </b>, detailed above. The multi-signature address (2 of 3) is created by integrating the respective public keys of the buyer, seller and arbitrator. The aforementioned address has been generated so that it is not part, not even, of the arbitration portfolio. <b> It is impossible to move Tethers out of this address without the private signature, at least, of two of the three parties that compose it. . </b> <br> If you wish, you can verify and examine, in detail and legible format, the technical composition of the <a href=https://academy.bit2me.com/que-es-p2sh/#:~:text=Una%20transacci%C3%B3n%20P2SH%20funciona%20gracias,del%20scriptSig%20de%20la%20transacci%C3%B3n. target=_blank><font color=cyan> redeem script</font></a> <font color=yellow></font> resulting from the creation of the multi-signature. Access by pressing the check button ✅ below the multi-signature address, for your peace of mind, before proceeding to send your Tethers.<br> <br>' }],
          [{ vl: '</font></b><br> L`Adreça Tether multisignatura(2 de 3) contracte es l`adreça, i destí temporal intermedi segur, <b>a on el venedor ha d`enviar els USDT a alliberar</b>, detallats a sobre. L`adreça multisignatura (2 de 3) es crea integrant les repectivas claus públiques del comprador, venedor i àrbitre. L`esmentada adreça ha estat generada de manera que no sigui part, ni tan sols, de la cartera de l`arbitratge.<b> És impossible moure Tethers fora d`aquesta adreça sense la signatura privada, com a mínim, de dues de les tres parts que la componen.</b><br> Si desitja pot verificar i examinar, en detall i format llegible, la composició tècnica de l` <a href=https://academy.bit2me.com/que-es-p2sh/#:~:text=Una%20transacci%C3%B3n%20P2SH%20funciona%20gracias,del%20scriptSig%20de%20la%20transacci%C3%B3n. target=_blank><font color=cyan> script de bescanvi (redeem script)</font></a> <font color=yellow></font> resultant de la creació de la multisignatura. Entreu prement el botó de revisar ✅ sota de l`adreça multisignatura, per la vostra tranquil·litat, abans de procedir a l`alliberament dels vostres Tethers sol.licitats.<br> <br>' }],
          [{ vl: '</font></b><br> O endereço de Tether de contrato de várias assinaturas (2 de 3) é o endereço e o destino temporário intermediário seguro, <b>onde o vendedor deve enviar o USDT para ser liberado</b>, detalhado acima. O endereço de multi-assinatura (2 de 3) é criado integrando as respectivas chaves públicas do comprador, vendedor e árbitro. O referido endereço foi gerado de forma que não faça parte, nem mesmo, da carteira de arbitragem. <b> É impossível retirar Tethers deste endereço sem a assinatura privada, pelo menos, de duas das três partes que o compõem.</b><br> Se desejar, você pode verificar e examinar, em detalhe e formato legível, a composição técnica do <a href=https://academy.bit2me.com/que-es-p2sh/#:~:text=Una%20transacci%C3%B3n%20P2SH%20funciona%20gracias,del%20scriptSig%20de%20la%20transacci%C3%B3n. target=_blank><font color=cyan> redeem script</font></a> <font color=yellow></font> resultante da criação da multi-assinatura. Para sua tranquilidade, acesse pressionando o botão de verificação ✅ abaixo do endereço com várias assinaturas, antes de enviar seus Tethers.<br> <br>' }],,                                 
            ],            
      },
      Direccion_Tether_multifirma_2_de_3: {
       mtx: [
          [{ vl: 'Dirección Tether multifirma(2 de 3)'}],
          [{ vl: 'Multi-signature Tether address(2/3)' }],
          [{ vl: 'Adreça Tether multisignatura (2/3)' }],
          [{ vl: 'Endereço Tether multi-assinaturas (2 de 3)' }],                                               
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
          [{ vl: '<br><b>CONTRATO TETHER MULTIFIRMA (2/2) PARA TX DE COMPRA-VENTA P2P:</b><br> A través de Internet, hoy. <br><b>REUNIDOS</b><br>Como parte compradora o <b>Comprador: </b>' }],

          [{ vl: '<br><b>MULTI-SIGNATURE TETHER CONTRACT (2/2) FOR P2P PURCHASE-SALE TX: </b><br> Via Internet, today.<br><b>TOGETHER</b><br>As a purchasing party or <b>Buyer: </b>' }],

          [{ vl: '<br><b>CONTRACTE TETHER MULTISIGNATURA (2/2) PER TX DE COMPRA-VENDA P2P:</b><br> A través d`Internet, avui.<br><b>REUNITS</b><br>Com a part compradora o <b>Comprador: </b>' }],

          [{ vl: '<br><b>CONTRATO DE TETHER MULTI-ASSINATURA (2/2) PARA TX DE COMPRA-VENDA P2P:</b><br> A través da internet, hoje. +<br><b>JUNTOS</b><br>Como parte de compra ou <b>Comprador: </b>' }],                                 
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
          [{ vl: ' <font color=red>TETHERS</font> objeto de este contrato, por acreditación comprobable de su dirección pública en la Capa Omni Tether.<br>II.- Que El Comprador tiene interés en adquirir los Tethers descritos en el ordinal precedente, a cambio del pago de la cantidad de moneda <font color=mediumseagreen>' }],

          [{ vl: ' <font color=red>TETHERS</font> object of this contract, by verifiable accreditation of your public address in the Omni Tether layer.<br>II.- That the Buyer has an interest in acquiring the Tethers described in the preceding ordinal, in exchange for the payment of the amount of currency <font color=mediumseagreen>' }],

          [{ vl: ' <font color=red>TETHERS</font> objecte d`aquest contracte, per acreditació comprovable de la seva adreça pública en la capa Omni Tether.<br>II.-Que El comprador té interès a adquirir els Tethers descrits en l`ordinal precedent, a canvi el pagament de la quantitat de moneda <font color=mediumseagreen>' }],

          [{ vl: ' <font color=red>TETHERS</font> objeto deste contrato, por credenciamento verificável de seu endereço público no capa Omni Tether.<br>II.- Que o Comprador tem interesse em adquirir os Tethers descritos no ordinal anterior, em troca do pagamento da quantia em moeda <font color=mediumseagreen>' }],                                 
            ],
       pte6_vendedor: [
          [{ vl: '</font>.<br>III.- Que el Árbitro tiene la capacidad para intermediar, facilitar y juzgar, la transacción. Añadiendo máximo un 0.25 % del objeto del contrato a la parte vendedora.<br> IV.- Que por ello las tres partes,<br><b>ACUERDAN</b><br>Llevar a efecto este contrato de COMPRAVENTA MERCANTIL, mediante los siguientes<br><b>TÉRMINOS A VENDEDOR</b><br> <b><font color=yellow>Primero.</font></b> El VENDEDOR es consciente y acepta los términos generales del apartado NUESTRO GRANITO DE ARENA A LA REVOLUCIÓN BLOCKCHAIN: detallados en la página de inicio.<br><b><font color=red>Segundo.</font></b> El comprador procederá al pago inmediato en el medio de pago de la oferta, a materializar sin demora, tiempo inferior a 20 minutos, tan pronto disponga de prueba de Tx de Respaldo de Entrega de los tethers firmada por el VENDEDOR y el Arbitraje como garantía. <br><b><font color=red>Tercero.</font></b> En caso de incidencia o disputa el VENDEDOR se compromete, y puede ser requerido como imprescindible por el Arbitraje en el Chat de esta plataforma, al aporte de pruebas de impago o detalle de movimientos de su cuenta, certificados por el medio de pago estipulado en la oferta. El Arbitraje se reserva el derecho de verificar las pruebas con la entidad del medio de pago.<br><b><font color=yellow>Cuarto.</font></b> La Tx de entrega final de los tethers, una vez ratificado el cobro por parte del VENDEDOR, será emitida de inmediato por el Arbitraje. La cuota de mineria de la Tx de entrega en la red tether es ajena al arbitraje, y deducida de la parte del comprador. <br><b><font color=yellow>Quinto.</font></b> Las comunicaciones o cruces de información privados entre Comprador y VENDEDOR podrán ser aportados como pruebas en caso de incidencia o disputa a este Arbitraje en el Chat de la Transacción.<br> <br>' }],
          [{ vl: '</font>.<br>III.- That the Arbitrator has the ability to mediate, facilitate and judge the transaction. With a maximum adding of 0.25% from the object of the contract to the SELLER. <br> IV.- That is why the three parties, <br> <b> AGREE </b> <br> Carry out this MERCANTILE PURCHASE contract, through the following <br> <b> TERMS TO SELLER </b> <br> <b> First. </b> The SELLER is aware of and accepts the general terms of the section OUR GRANITE OF SAND TO THE BLOCKCHAIN REVOLUTION: detailed in the home page. <br> <b> <font color = red> Second. </font> </b> The buyer will proceed to the immediate payment in the means of payment of the offer, to materialize without delay, time less than 20 minutes, as soon as he has proof of Tx of Delivery Backup of the tethers signed by the SELLER and the Arbitration as a guarantee. <br> <b> <font color = red> Third. </font> </b> In case of incident or dispute, the SELLER agrees, and may be required as essential by the Arbitration in the Chat of this platform, at proof of default or details of account movements, certified by the means of payment stipulated in the offer. The Arbitration reserves the right to verify the evidence with the entity of the means of payment. <br> <b> <font color = yellow> Fourth. </font> </b> The final delivery Tx of the tethers, a Once the collection has been ratified by the seller, it will be issued immediately by the Arbitration. The mining quota of the Tx of delivery in the tether network is outside the arbitration, and deducted from the buyer`s part. <br> <b> <font color = yellow> Fifth. </font> </b> Private communications or information exchanges between Buyer and Seller may be provided as evidence in case of incidence or dispute to this Arbitration in the Chat of the Transaction.<br> <br>' }],
          [{ vl: '</font>.<br>III.- Que l`àrbitre té la capacitat per mitjançar, facilitar i jutjar, la transacció. Afegint màxim un 0.25% de l`objecte del contracte a la part venedora.<br> IV.- Que per això les tres parts,<br><b>ACORDEN</b><br>Dur a efecte aquest contracte de COMPRAVENDA MERCANTIL, mitjançant els següents<br><b>TERMES A VENEDOR</b><br> <b>Primer.</b> El VENEDOR és conscient i accepta els termes generals de l`apartat NOSTRE GRANET DE SORRA A LA REVOLUCIÓ BLOCKCHAIN: detallats a la pàgina d`inici.<br><b><font color=red>Segon.</font></b>El comprador procedirà al pagament immediat al mitjà de pagament de l`oferta, a materialitzar sense demora, temps inferior a 20 minuts, tan aviat disposi de prova de Tx de Respatller de Lliurament dels tethers signada pel VENEDOR i l`Arbitratge com a garantia. <br><b><font color=red>Tercer.</font></b> En cas d`incidència o disputa el VENEDOR es compromet, i pot ser requerit com a imprescindible per l`Arbitratge al Xat d`aquesta plataforma, l`aportació de proves d`ìmpagament o detall de moviments del vostre compte, certificats pel mitjà de pagament estipulat a l`oferta. L`arbitratge es reserva el dret de verificar les proves amb l`entitat del mitjà de pagament.<br><b><font color=yellow>Quart.</font></b> La Tx de lliurament final dels tethers, un cop ratificat el cobrament per part del venedor, serà emesa immediatament per l`arbitratge. La quota de mineria de la Tx de lliurament a la xarxa tether és aliena a l`arbitratge, i deduïda de la part del comprador. <br><b><font color=yellow>Cinquè.</font></b> Les comunicacions o creuaments d`informació privats entre Comprador i VENEDOR podran ser aportats com a proves en cas d`incidència o disputa a aquest Arbitratge al Xat de la Transacció.<br> <br>' }],
          [{ vl: '</font>.<br>III.- Que o Árbitro tem a capacidade de mediar, facilitar e julgar a transação. Adicionando ao comprador no máximo 0,25% do objeto do contrato.<br> IV.- É por isso que as três partes,<br><b>ACEITA</b><br>Efetuar este contrato de COMPRA DE MERCANTIL, através das seguintes<br><b>TERMOS PARA VENDEDOR</b><br> <b>Primeiro.</b> O VENDEDOR está ciente e aceita os termos gerais da seção NOSSO GRANITO DE AREIA PARA A REVOLUÇÃO DA BLOCKCHAIN: detalhadas na página inicial.<br><b><font color=red>Segundo.</font></b> O comprador procederá ao pagamento imediato no meio de pagamento da oferta, para concretizar-se sem demora, em tempo inferior a 20 minutos, assim que tiver comprovante de Tx de Backup de Entrega dos tethers firmado pelo VENDEDOR e a Arbitragem conforme uma garantia. <br> <b> <font color = red> Terceiro. </font> </b> Em caso de incidente ou disputa, o VENDEDOR concorda, e pode ser solicitado como imprescindível pela Arbitragem no Chat desta plataforma , em Comprovante de falta de pagamento ou detalhamento de movimentação de conta, atestado pelo meio de pagamento estipulado na oferta. A Arbitragem reserva-se o direito de verificar a comprovação junto à entidade do meio de pagamento. <br> <b> <font color = yellow> Quarto. </font> </b> O Tx de entrega final dos tethers, uma Vez a cobrança tiver sido homologada pelo VENDEDOR, será emitida imediatamente pela Arbitragem. A cota de mineração do Tx de entrega na rede tether está fora da arbitragem, e deduzida da parte do comprador. <br> <b> <font color = yellow> Quinto. </font> </b> Comunicações privadas ou trocas de informações entre o Comprador e o VENDEDOR podem ser fornecidas como evidência em caso de incidência ou disputa a esta Arbitragem no Chat da Transação .<br> <br>' }],                                 
            ],
      },
      Facilitar_detalles_medio_de_pago_LN: {             
       pte2: [
          [{ vl: '</font></b>, con sus señas a donde el comprador debe dirigir el pago.  Con tal fín, el comprador pueda proceder al pago de los tethers requeridos a la mayor brevedad, tan pronto se produzca la Firma del Vendedor en Tx de Respaldo al Árbitraje. El Comprador pudiera solicitar, por vía privada o a través del 💬 Chat Tx, algún dato adicional a éste que pudiera serle requerido en su proceso de pago.<br><br> ' }],
          [{ vl: '</font></b>, with your details to where the buyer should direct the payment. To this end, the buyer can proceed to pay the required tethers as soon as possible, as soon as the Signature of the Seller in Tx of Support to the Arbitration takes place. The Buyer may request, privately or through the 💬 Chat Tx, any additional information to this that may be required in their payment process. <br> <br> ' }],
          [{ vl: '</font></b>, amb les seves senyes on el comprador ha de dirigir el pagament. Amb aquesta finalitat, el comprador pugui procedir al pagament dels tethers requerits com més aviat millor, tan aviat es produeixi la Firma del Venedor a la Tx de Respatller a l`Arbitratge. El Comprador pogués sol·licitar, per via privada o a través del 💬 Chat Tx, alguna dada addicional a aquesta que pogués ser-li requerida en el seu procés de pagament.<br><br> ' }],
          [{ vl: '</font></b>, com seus dados para onde o comprador deve direcionar o pagamento. Para tanto, o comprador poderá proceder ao pagamento dos tethers necessários o mais rápido possível, assim que ocorrer a Assinatura do Vendedor no Tx para Apoiar a Arbitragem. O Comprador pode solicitar, em particular ou por meio do 💬 Chat Tx, quaisquer informações adicionais que possam ser exigidas no processo de pagamento. <br> <br> ' }],,                                 
            ],            
      },      
      Copiar_direccion_multifirma: {
       mtx: [
          [{ vl: 'Copiar dirección multifirma al portapapeles'}],
          [{ vl: 'Copy multi-signature address to clipboard' }],
          [{ vl: 'Copiar l`adreça multisignatura al porta-retalls' }],
          [{ vl: 'Copiar o endereço multi-assinaturas para a área de transferência' }],                                               
            ],           
      },
      Mostrar_qrcode: {
       vars: [
          [{ vl: ' Mostrar el código Qr a leer...'}],
          [{ vl: ' Show the Qr code to read...'}],
          [{ vl: ' Mostra el codi Qr a llegir...'}],
          [{ vl: ' Mostrar o código Qr para ler...'}],                                             
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
      Respaldo_Entrega: {
       mtx: [
          [{ vl: '🖋️Tx Respaldo de Entrega a Firmar'},{ vl: 'Generar '},{ vl: ' 🔏Tx Respaldo Entrega Firmada'},{ vl: 'Copiar al portapapeles '},{ vl: 'Faltan en  🔐garantia multifirma(min.6 conf.)'}],
          [{ vl: '🖋️Tx Delivery Support to Sign' },{ vl: 'Generate ' },{ vl: ' 🔏Tx Signed Delivery Support'},{ vl: 'Copy to clipboard '},{ vl: 'Missing to 🔐multi-signature guarantee(min.6 conf.)'}],
          [{ vl: '🖋️Tx Respatller de Lliurament a Signar' },{ vl: 'Generar ' },{ vl: ' 🔏Tx Respatller Lliurament Signat'},{ vl: 'Copiar al porta-retalls '},{ vl: 'Mancan a 🔐garantia multisignatura(min.6 conf.)'}],
          [{ vl: '🖋️Tx Suporte entrega para assinar' },{ vl: 'Gerar ' },{ vl: ' 🔏Tx Suporte entrega assinado'},{ vl: 'Copiar para área de transferência '},{ vl: ' Faltan para 🔐 garantia multisign(min.6 conf.)'}],                                               
            ],
       hlp: [
          [{ vl: '<br> La 🔐Garantía multifirma(2/2) es la dirección y destino, a donde el vendedor envia como mínimo la cantidad de BTC y USDT detallada, necesaria para la venta en curso. La dirección multifirma(2/2) se crea integrando las repéctivas claves públicas del vendedor y el arbitraje. Los fondos destinados a tal garantía son reembolsables al vendedor cuando los requiera, en el perfil de usuario, siempre y cuando no estén respaldando alguna venta en curso.<br> En base a tal garantía en multifirma, vendedor y arbitraje firmarán Tx de respado de Entrega que el Árbitraje salvaguardará hasta poder ser emitida (pago y cobro verificado a cambio de los bitcoins).<br>La citada dirección ha sido generada de manera que no sea parte, ni siquiera, de la cartera del arbitraje.<br><b> Es imposible mover bitcoins fuera de esta dirección sin la firma privada de las dos partes que la componen.</b><br><br> <br>' },{ vl: '<br><br><b>Transacción (Tx) A FIRMAR:</b><br><br>1. Copie la Transacción A FIRMAR a su portapapeles, sin cerrar esta pestaña de su navegador.<br>2. Verificación (Opcional). En su cartera, o utilidad de firma, en el menú de verificación, pegue la Tx a firmar y verifique la Tx(decodificada). <br>3. En su cartera, o <a href=https://coinb.in/#sign target=_blank><font color=cyan>utilidad</font></a> de firma, en el menú de firmar transacción, pegue la Tx a firmar y genere la firma.<br>  4. Desde su cartera, o utilidad de firma, copie la transacción FIRMADA al portapapeles.<br> 5. De nuevo aquí, en la casilla correspondiente, pegue la transacción FIRMADA, SUSTITUYENDO EL RELOJ DE ARENA.<br><br> Puede verificar y firmar esta Transaccion (Tx) desde su cartera bitcoin. Si sólo usa cartera de papel también puede verificarla y firmarla <a href=https://coinb.in/#sign target=_blank><font color=cyan>aquí</font></a> en la opción de firmar.<font color=yellow> Recuerde por su seguridad, descargar la utilidad previamente, ejcutar desconectado de internet</font> o incluso mejor aún en otro équipo que siempre esté fuera de linea.<br><br><font color=RED>¡ IMPORTANTE ! La Tx se le esta entregando firmada por este arbitraje. NO EJECUTE EL ENVIO DE LA TX. Sólo verifique, firme y devuelva la transacción firmada. Si usted, aunque pudiera hacerlo, ejecuta el envio y algo sale mal, CoinstoBitcoins no se responsabiliza en ese caso.</font><br> <br><br><br><br><br><br><br>' },{ vl: '<br> La 🔐Garantía multifirma(2/2) es la dirección,  donde el vendedor avala la venta Lightning unos minutos, hasta la conclusión final del intercambio, entrega al comprador y comisión arbitraje concluidas, via pago de facturas Lightning. Los fondos destinados a tal garantía son reembolsables al vendedor cuando los requiera, en el perfil de usuario, siempre y cuando no estén respaldando alguna venta en curso.<br> En base a tal garantía en multifirma, vendedor y arbitraje firmarán Tx de respaldo de Entrega, que el Árbitraje salvaguardará doblemente encryptada, SIN SER USADA NI EMITIDA (excepto en caso excepcional de disputa con resolución del Arbitraje favorable al Comprador). Toda la Tx, incluyendo Tx de Respaldo firmada, es eliminada de la plataforma al finalizar el intercambio, liberando así la garantía.<br>La citada dirección ha sido generada de manera que no sea parte, ni siquiera, de la cartera del arbitraje.<br><b> Es imposible mover bitcoins fuera de esta dirección sin la firma privada de las dos partes que la componen.</b><br><br> <br>' }],
          [{ vl: '<br> The 🔐Multi-Signature Guarantee (2/2) is the address and destination, where the seller sends at least the amount of detailed BTC and USDT, necessary for the sale in progress. The multi-signature address (2/2) is created by integrating the vendor`s replica public keys and arbitration. The funds earmarked for such a guarantee are reimbursable to the seller when required, in the user profile, as long as they are not supporting any sale in progress. <br> Based on such guarantee in multi-signature, seller and arbitration will sign Tx of restitution of Delivery that the Arbitration will safeguard until it can be issued (verified payment and collection in exchange for bitcoins). <br> The aforementioned address has been generated so that it is not part, not even, of the arbitration portfolio. <br> <b> It is impossible to move bitcoins out of this address without the private signature of the two parts that compose it. </b><br> <br>' },{ vl: '<br><br><b>Transaction (Tx) TO SIGN:</b><br><br>1. Copy the Transaction TO SIGN to your clipboard, without closing this tab of your browser.<br>2. Verification (Optional). In your wallet, or signature utility, in the verification menu, paste the Tx to be signed and verify the Tx (decoded). <br>3. In your wallet, or <a href=https://coinb.in/#sign target=_blank><font color=cyan>utility</font></a> of signature, in the menu to sign transaction, paste the Tx to sign and generate the signature.<br>  4.From your wallet, or signature utility, copy the SIGNED transaction to the clipboard.<br> 5. Again here, in the corresponding box, paste the SIGNED transaction, REPLACING THE HOURGLASS.<br><br> You can verify and sign this Transaction (Tx) from your bitcoin wallet. If you only use paper wallet you can also verify and sign it <a href=https://coinb.in/#sign target=_blank><font color=cyan>here</font></a> in the option to sign.<font color=yellow> Remember for your safety, download the utility previously, run disconnected from the internet</font> or even better yet in another team that is always offline.<br><br><font color=RED> IMPORTANT ! The Tx is being delivered to you signed by this arbitration. DO NOT EXECUTE THE TX SEND. Just verify, sign and return the signed transaction. If you, even if you could, execute the shipment and something goes wrong, CoinstoBitcoins is not responsible in that case.</font><br> <br><br><br><br><br><br><br>' },{ vl: '<br> The 🔐Multi-Signature Guarantee(2/2) is the address, where the seller guarantees the Lightning sale for a few minutes, until the final conclusion of the exchange, delivery to the buyer and arbitration commission concluded, via payment of Lightning invoices. The funds allocated to such guarantee are reimbursable to the seller when required, in the user profile, as long as they are not supporting any sale in progress.<br> Based on such guarantee in multisignature, seller and arbitration will sign Tx of support of Delivery, which the Arbitration will safeguard doubly encrypted, WITHOUT BEING USED OR ISSUED (except in exceptional cases of dispute with an Arbitration resolution favorable to the Buyer). All Tx, including signed Backup Tx, is removed from the platform at the end of the exchange, thus releasing collateral. <br> The aforementioned address has been generated so that it is not part, not even, of the arbitration portfolio. <br> <b> It is impossible to move bitcoins out of this address without the private signature of the two parts that compose it. </b><br> <br>' }],
          [{ vl: '<br>La 🔐Garantia multifirma(2/2) és l`adreça i la destinació, on el venedor envia com a mínim la quantitat de BTC i USDT detallada, necessària per a la venda en curs. L`adreça multifirma(2/2) es crea integrant les repectives claus públiques del venedor i l`arbitratge. Els fons destinats a aquesta garantia són reemborsables al venedor quan els requereixi, en el perfil d`usuari, sempre que no estiguin recolzant alguna venda en curs.<br> En origen a la garantia en multisignatura Venedor i Arbitratge signan Tx de Respatller de Lliurament que l`àrbitre salvaguardarà fins a poder ser emesa (pagament i cobrament verificat a canvi dels bitcoins).<br>La citada adreça multisignatura ha estat generada de manera que no sigui part, ni tan sols, de la cartera de l`arbitratge.<br><b> És impossible moure bitcoins fora daquesta adreça sense la signatura privada de les dues parts que la componen.</b><br> <br>' },{ vl: '<br><br><b>Transacció (Tx) A SIGNAR:</b><br><br>1. Copieu la Transacció A SIGNAR al vostre porta-retalls, sense tancar aquesta pestanya del navegador.<br>2. Verificació (opcional). En la vostra cartera, o utilitat de signatura, al menú de verificació, engantxi la Tx a signar i verifiqui la Tx (descodificada). <br>3. A la vostra cartera, o <a href=https://coinb.in/#sign target=_blank><font color=cyan>utilitat</font></a> de signatura, al menú de signar transacció, engantxi la Tx a signar i generi la signatura.<br>  4. Des de la seva cartera, o utilitat de signatura, copieu la transacció SIGNADA al porta-retalls.<br> 5. De nou aquí, a la casella corresponent, enganxi la transacció SIGNADA, SUBSTITUINT EL RELLOTGE DE SORRA.<br><br> Pot verificar i signar aquesta transacció (Tx) des de la seva cartera bitcoin. Si només fa servir cartera de paper també pot verificar-la i signar-la <a href=https://coinb.in/#sign target=_blank><font color=cyan>aqui</font></a> a l`opció de signar.<font color=yellow> Recordeu per la vostra seguretat, descarregar l`utilitat prèviament, executar desconnectat d`internet</font> o fins i tot millor encara en un altre équip que sempre estigui fora de línia.<br><br><font color=RED> IMPORTANT ! La Tx se li esta lliurant signada per aquest arbitratge. NO EXECUTI L`ENVIAMENT DE LA TX. Només verifiqui, signi i torni la transacció signada. Si vostè, encara que pogués fer-ho, executa l`enviament i alguna cosa surt malament, CoinstoBitcoins no es responsabilitza en aquest cas.</font><br> <br><br><br><br><br><br><br>' },{ vl: '<br>La 🔐Garantia multifirma(2/2) és la direcció, on el venedor avala la venda Lightning uns minuts, fins a la conclusió final de l`intercanvi, entrega al comprador i comissió arbitratge concloses, via pagament de factures Lightning. Els fons destinats a aquesta garantia són reemborsables al venedor en quansevol moment que els requereixi, en el perfil d`usuari, sempre que no estiguin recolzant alguna venda en curs.<br> En base a aquesta garantia en multifirma, venedor i arbitratge signaran Lliurament, que l`àrbitre salvaguardarà doblement encryptada, SENSE SER USADA NI EMESA (excepte en cas excepcional de disputa amb resolució de l`Arbitratge favorable al Comprador). Tota la Tx, incloent Tx de Respatller signada, és eliminada de la plataforma en finalitzar l`intercanvi, alliberant així la garantia.<br>La citada adreça multisignatura ha estat generada de manera que no sigui part, ni tan sols, de la cartera de l`arbitratge.<br><b> És impossible moure bitcoins fora daquesta adreça sense la signatura privada de les dues parts que la componen.</b><br> <br>' }],
          [{ vl: '<br> A 🔐Garantia Multi-Assinatura (2/2) é o endereço e destino, onde o vendedor envia no mínimo a quantidade de BTC e USDT detalhada, necessária para a venda em andamento. O endereço com várias assinaturas (2/2) é criado pela integração das chaves públicas de réplica do fornecedor e da arbitragem. Os fundos destinados a tal garantia são reembolsáveis ​​ao vendedor quando requerido, no perfil do usuário, desde que não suportem nenhuma venda em andamento. <br> Com base na referida garantia em multi-assinatura, vendedor e arbitragem firmarão Tx de restituição de Entrega que a Arbitragem salvaguardará até que possa ser emitida (pagamento verificado e cobrança em troca de bitcoins). <br> O referido endereço foi gerado de forma que não faça parte, nem mesmo, da carteira de arbitragem. <br> <b> É impossível tirar bitcoins deste endereço sem a assinatura privada das duas partes que o compõem. </b><br> <br>' },{ vl: '<br><br><b>Transação (Tx) PARA ASSINAR:</b><br><br>1. Copie a Transação PARA ASSINAR para a sua área de transferência, sem fechar esta aba do seu navegador.<br>2. Verificação (opcional). Em sua carteira, ou utilitário de assinatura, no menu de verificação, cole o Tx a ser assinado e verifique o Tx (decodificado). <br>3. Em sua carteira, ou <a href=https://coinb.in/#sign target=_blank><font color=cyan>Utilitário</font></a> de assinatura, no menu para assinar transação, cole o Tx para assinar e gerar a assinatura.<br>  4. De sua carteira ou utilitário de assinatura, copie a transação ASSINADA para a área de transferência.<br> 5. Aqui, novamente, na caixa apropriada, cole a transação ASSINADA, SUBSTITUINDO A AMPOLA.<br><br> Você pode verificar e assinar esta Transação (Tx) de sua carteira bitcoin. <a href=https://coinb.in/#sign target=_blank><font color=cyan>aqui</font></a> na opção de assinar.<font color=yellow> Lembre-se para sua segurança, baixe o utilitário previamente, execute-o desconectado da internet</font> ou melhor ainda em outro time que está sempre offline.<br><br><font color=RED> IMPORTANTE ! O Tx está sendo entregue a você assinado por esta arbitragem. NÃO EXECUTE O ENVIO DO TX. Basta verificar, assinar e devolver a transação assinada. Se você, mesmo que pudesse, executar a remessa e algo der errado, a CoinstoBitcoins não é responsável nesse caso.</font><br> <br> <br> <br><br><br><br><br>' },{ vl: '<br> A 🔐Garantia Multiassinatura(2/2) é o endereço, onde o vendedor garante a venda Lightning por alguns minutos, até a conclusão final da troca, entrega ao comprador e comissão de arbitragem concluída, mediante pagamento de faturas Lightning. Os recursos alocados para tal garantia são reembolsados ​​ao vendedor quando solicitado, no perfil do usuário, desde que não estejam suportando nenhuma venda em andamento.<br> Com base em tal garantia em multiassinatura, vendedor e arbitragem assinarão Tx de suporte de Entrega, que a Arbitragem salvaguardará duplamente encriptada, SEM SER UTILIZADA OU EMITIDA (salvo em casos excecionais de litígio com resolução Arbitral favorável ao Comprador). Todos os Tx, incluindo o Backup Tx assinado, são removidos da plataforma no final da troca, liberando assim a garantia. <br> O referido endereço foi gerado de forma que não faça parte, nem mesmo, da carteira de arbitragem. <br> <b> É impossível tirar bitcoins deste endereço sem a assinatura privada das duas partes que o compõem. </b><br> <br>' }],                                 
            ],                        
      },
      Direccion_bitcoin_multifirma_2_de_3: {
       mtx: [
          [{ vl: 'Dirección bitcoin multifirma(2 de 3)'},{ vl: '🔐Garantía multifirma(2/2) '},{ vl: 'Disponible para Tx Respaldo'},{ vl: ' Necesario para Tx Respaldo'},{ vl: 'Faltan en 🔐garantia multifirma(min.6 conf.)'},{ vl: 'Falta generar dirección 🔐garantia multifirma en Vender del menú principal'},{ vl: 'Tx con fecha de emisión restringida al año 2037.<br>(Prueba para el comprador)'}],

          [{ vl: 'Multi-signature bitcoin address(2/3)' },{ vl: '🔐Multi-signature warranty(2/2) ' },{ vl: 'Available for Tx Backup'},{ vl: ' Necessary for Tx Backup'},{ vl: 'Missing in 🔐multi-signature guarantee(min.6 conf.)'},{ vl: 'Missing to generate address 🔐multi-signature guarantee in Sell from the main menu'},{ vl: 'Tx with locktime for year 2037.<br>(Test for buyer)'}],

          [{ vl: 'Adreça bitcoin multisignatura (2/3)' },{ vl: '🔐Garantia multifirma(2/2) ' },{ vl: 'Disponible per a Tx Respatller'},{ vl: ' Necessari para Tx Respaldo'},{ vl: 'Mancan a 🔐garantia multisignatura(min.6 conf.)'},{ vl: 'Manca generar adreça 🔐garantia multifirma a Vendre del menú principal'},{ vl: 'Tx amb data d`emissió restringida a l`any 2037.<br>(Prova per al comprador)'}],

          [{ vl: 'Endereço bitcoin multi-assinaturas (2 de 3)' },{ vl: '🔐Garantia multi-assinatura(2/2) ' },{ vl: 'Disponível para Tx Backup'},{ vl: ' Necessário para Tx Respaldo'},{ vl: 'Falta para 🔐 garantia multisign(min.6 conf.)'},{ vl: 'Falta gerar endereço 🔐 garantia de múltiplas assinaturas em Vender do menu principal'},{ vl: 'Tx com data de emissão restrita ao ano 2037. <br> (Prova para o comprador)'}],                                               
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
      TRANSACCION_en_transito: {
       hlp: [
          [{ vl: '<br><b>3.Contrato Vendedor. 🔐Garantía multifirma disponible para firma de Tx de Respaldo de entrega, 6 confirmaciones:</b><br><br> Es necesario, para poder firmar la Tx de Respaldo, en resguardo del Arbitraje(sin emitir a la cadena de bloques hasta verificado el cobro a cambio), y como garantía de entrega final al comprador. Disponer de saldos suficientes, como mínimo, USDT el importe de la venta más 0.25 % del Arbitraje, BTC el importe de mineria estipulado y pagadero por el comprador, en la dirección 🔐Garantía multifirma. Por lo tanto, en caso de aceptar la solicitud de compra, debe enviar a la mayor brevedad a la dirección 🔐Garantía multifirma la cantidad indicada de bitcoins o tethers que faltan. <br> <br>'}],
          [{ vl: '<br><b>3. Selling Contract. 🔐Multi-signature guarantee available for signature of delivery Backup Tx, 6 confirmations: </b> <br> <br> It is necessary, to be able to sign the Backup Tx, in protection of the Arbitration (without issuing to the block chain until the payment in exchange is verified), and as a guarantee of final delivery to the buyer. Have sufficient balances, at a minimum, USDT the amount of the sale plus 0.25% of the Arbitration, BTC the mining amount stipulated and payable by the buyer, at the address 🔐 Multi-signature guarantee. Therefore, if you accept the purchase request, you must send the indicated amount of missing bitcoins or tethers to the address 🔐Multi-signature guarantee as soon as possible.<br> <br>' }],
          [{ vl: '<br><b>3.Contracte Venedor. 🔐Garantia multifirma disponible per a signatura de Tx de Respatller de lliurament, 6 confirmacions:</b><br><br> És necessari, per poder signar la Tx de Respatller, en resguard de l`Arbitratge (sense emetre a la cadena de blocs fins verificat el cobrament a canvi), i com a garantia de lliurament final al comprador. Disposar de saldos suficients, com a mínim, USDT limport de la venda més 0.25% de l`Arbitratge, BTC l`import de mineria estipulat i pagader pel comprador, en l` adreça 🔐Garantia multifirma. Per tant, en cas d`acceptar la sol·licitud de compra, heu d`enviar com més aviat millor a l`adreça 🔐Garantia multifirma la quantitat indicada de bitcoins o tethers que faltin.<br> <br>' }],
          [{ vl: '<br><b>3. Contrato de venda. 🔐Garantia multi-assinatura disponível para assinatura do Delivery Backup Tx, 6 confirmações: </b> <br> <br> É necessário, para poder assinar o Backup Tx, em proteção da Arbitragem (sem emissão para a cadeia de blocos até que o pagamento em troca seja verificado), e como garantia de entrega final ao comprador. Tenha saldos suficientes, no mínimo, USDT o valor da venda mais 0,25% da Arbitragem, BTC o valor mineiro estipulado e a pagar pelo comprador, no endereço 🔐 Garantia multiassinatura. Portanto, se você aceitar a solicitação de compra, deverá enviar a quantidade indicada de bitcoins ou tethers ausentes para o endereço 🔐Garantia de assinatura múltipla o mais rápido possível.<br> <br>' }],                                               
            ],            
       confirms: [
          [{ vl: 'confirmaciones'},{ vl: 'Verificando de nuevo en'},{ vl: 'Esperando 6 confirmaciones'},{ vl: 'Esperando confirmación liberación en Arbitraje'}],
          [{ vl: 'confirmations'},{ vl: 'Checking again at'},{ vl: 'Waiting for 6 confirmations'},{ vl: 'Waiting release confirmation in arbitration'}],
          [{ vl: 'confirmacions'},{ vl: 'Verificant de nou en'},{ vl: 'Esperant per 6 confirmacions'},{ vl: 'Esperant confirmació alliberament en Arbitraje'}],
          [{ vl: 'confirmações'},{ vl: 'Verificando novamente em'},{ vl: 'Esperando por 6 confirmações'},{ vl: 'Esperando liberação de confirmação na arbitragem'}],
            ],           
      },
      Cobro_vendedor: {
       hlp_pte1: [
          [{ vl: '<br><b>5.Cobro Vendedor:</b><br> Tan pronto aparezca ✅ en la Notificación pago comprador, verifique el cobro en la plataforma medio de pago '}],
          [{ vl: '<br><b>5.Seller Payment: </b> <br> As soon as ✅ appears in the Buyer Payment Notification, verify the payment in the payment method platform  ' }],
          [{ vl: '<br><b>5.Cobrament Venedor:</b><br> Tan aviat aparegui ✅ a la Notificació pagament comprador, verifiqui el cobrament a la plataforma mitjà de pagament  ' }],
          [{ vl: '<br><b>5.Vendedor de coleção!:</b><br> Assim que ✅ aparecer na Notificação de Pagamento do Comprador, verifique o pagamento no meio de pagamento da plataforma  ' }],                                               
            ],
       hlp_pte2: [
          [{ vl: '</font></b>,  estipulada en la oferta. No olvide salvar el justificante del cobro(imagen nítida y legible o archivo pdf). Recuerde también que debe salvaguardar en su poder video o sesión nitida del proceso de verificación del cobro tal y como se aceptó en el CONTRATO  (caso de incidencia pudiera ser requerido por este arbitraje como prueba). <br> Tan pronto haya verificado el cobro como recibido, marque aquí la casilla de validación: Cobro recibido y justificante, y a continuación pulse el botón de RATIFICAR COBRO. Finalizando así, con éxito, la transacción de compra-venta por su parte como vendedor. Tras su ratificación de cobro, comprador y arbitraje, podamos finalizar la Entrega de los Tethers al Comprador. Una vez Ratificado el Cobro por el Vendedor, tanto Vendedor como Comprador, quedan eximidos de salvaguardar pruebas asociadas a esta Tx de compra-venta. </font> <br> <br>'}],
          [{ vl: '</font></b>,  stipulated in the offer. Do not forget to save the receipt of the payment (clear and legible image or pdf file). Remember also that you must safeguard in your possession a video or a clear session of the payment verification process as accepted in the CONTRACT (case of incidence could be required by this arbitration as evidence). <br> As soon as you have verified the payment as received, check the validation box here: Payment received and proof, and then press the RATIFY COLLECTION button. Thus ending, successfully, the sale and purchase transaction on your part as the seller. After your confirmation of collection, buyer and arbitration, we can finalize the Delivery of the Tethers to the Buyer. Once the Collection has been ratified by the Seller, both the Seller and the Buyer are exempted from safeguarding evidence associated with this purchase-sale Tx. </font> <br> <br>' }],
          [{ vl: '</font></b>,  estipulada a l`oferta. No oblidi salvar el justificant del cobrament (imatge nítida i llegible o arxiu pdf). Recordeu també que heu de salvaguardar en el vostre poder vídeo o sessió nitida del procés de verificació del cobrament tal com es va acceptar en el CONTRACTE (cas d`incidència pogués ser requerit per aquest arbitratge com a prova). <br> Tan aviat s`hagi verificat el cobrament com rebut, marqui aquí la casella de validació: Cobrament rebut i justificant, i tot seguit premeu el botó de RATIFICAR COBRAMENT. Finalitzant així, amb èxit, la transacció de compravenda per part seva com venedor. Després de la seva ratificació de cobrament, comprador i arbitratge, puguem finalitzar el Lliurament dels Tethers al comprador. Un cop Ratificat el Cobrament pel Venedor, tant Venedor com comprador, queden eximits de salvaguardar proves associades a aquesta Tx de compravenda. </font> <br> <br>' }],
          [{ vl: '</font></b>,  estipulado na oferta. Não se esqueça de guardar o comprovativo do pagamento (imagem nítida e legível ou ficheiro pdf). Lembre-se também que você deve salvaguardar em sua posse um vídeo ou uma sessão clara do processo de verificação de pagamento conforme aceito no CONTRATO (caso de incidência pode ser exigido por esta arbitragem como prova). <br> Assim que tiver verificado o pagamento como recebido, marque a caixa de validação aqui: Pagamento recebido e comprovativo e, a seguir, clique no botão RATIFICAR COLETA. Terminando assim, com sucesso, a transação de compra e venda de sua parte como vendedor. Após sua confirmação de cobrança, comprador e arbitragem, poderemos finalizar a Entrega dos Tethers ao Comprador. Uma vez que a coleta tenha sido ratificada pelo vendedor, tanto o vendedor como o comprador estão isentos de evidências de salvaguarda associadas a este Tx de compra-venda. </font> <br> <br>' }],                                               
            ],
       mtx: [
          [{ vl: 'Notificación pago comprador'},{ vl: 'Cobro recibido y justificante'}],
          [{ vl: 'Buyer payment notification' },{ vl: 'Collection received and proof'}],
          [{ vl: 'Notificació pagament comprador'},{ vl: 'Cobrament rebut i justificant'}],
          [{ vl: 'Notificação de pagamento do comprador' },{ vl: 'Pagamento recebido e prova'}],                                               
            ],                                               
      },
      Remitir_justi_cobro: {
       tlp: [
          [{ vl: '<br><b>Remitir justificante del cobro:</b><br>Recuerde que debe remitir el justificante del cobro(imagen nítida y legible o archivo pdf) en el medio de comunicación privado acordado con el comprador o en el 💬 chat de la Tx.</font> <br> <br>'}],
          [{ vl: '<br><b>Send proof of collection: </b> <br> Remember that you must send proof of collection (clear and legible image or pdf file) in the private medium agreed with the buyer or in the 💬 Tx chat.</font> <br> <br>' }],
          [{ vl: '<br><b>Remetre justificant del  cobrament:</b><br>Recordi que ha de remetre el justificant del cobrament (imatge nítida i llegible o arxiu pdf) en el medi de comunicació privat acordat amb el comprador o al 💬 xat de la Tx.</font> <br> <br>'}],
          [{ vl: '<br><b>Enviar comprovante de pagamento:</b><br>Lembre-se que você deve enviar o comprovante do pagamento (imagem nítida e legível ou arquivo pdf) no meio de comunicação privado acordado com o comprador ou no chat 💬 Tx.</font> <br> <br>' }],                                               
            ],         
       vars: [
          [{ vl: 'Remitir justificante del cobro'},{ vl: 'Ratificar Cobro'},{ vl: 'Impago Denegar Entrega'}],
          [{ vl: 'Send proof of collection' },{ vl: 'Ratify Collection'},{ vl: 'Non-payment Deny Delivery'}],
          [{ vl: 'Remetre justificant del cobrament'},{ vl: 'Ratificar Cobrament' },{ vl: 'Impagament Denegar Lliurament'}],
          [{ vl: 'Enviar comprovante de pagamento' },{ vl: 'Ratificar coleção'},{ vl: 'Recusa de entrega por falta de pagamento'}],                                               
            ],           
      },
      Cobro_Vendedor: {
       hlp: [
          [{ vl: '<br><b>5.Cobro Vendedor:</b><br> Tan pronto aparezca ✅ en la Notificación pago comprador, verifique el cobro en la plataforma medio de pago'},{ vl: '</font></b>,  estipulada en la oferta. No olvide salvar el justificante del cobro(imagen nítida y legible o archivo pdf). Recuerde también que debe salvaguardar en su poder video o sesión nitida del proceso de verificación del cobro tal y como se aceptó en el CONTRATO  (caso de incidencia pudiera ser requerido por este arbitraje como prueba). <br> Tan pronto haya verificado el cobro como recibido, marque aquí la casilla de validación: Cobro recibido y justificante, y a continuación pulse el botón de RATIFICAR COBRO. Finalizando así, con éxito, la transacción de compra-venta por su parte como vendedor. Tras su ratificación de cobro, comprador y arbitraje, podamos finalizar la Entrega de los Tethers al Comprador. Una vez Ratificado el Cobro por el Vendedor, tanto Vendedor como Comprador, quedan eximidos de salvaguardar pruebas asociadas a esta Tx de compra-venta. </font> <br> <br>'}],

          [{ vl: '<br><b>5.Seller Payment: </b> <br> As soon as ✅ appears in the Buyer Payment Notification, verify the payment in the payment method platform  ' },{ vl: '</font></b>,  stipulated in the offer. Do not forget to save the receipt of the payment (clear and legible image or pdf file). Remember also that you must safeguard in your possession a video or a clear session of the payment verification process as accepted in the CONTRACT (case of incidence could be required by this arbitration as evidence). <br> As soon as you have verified the payment as received, check the validation box here: Payment received and proof, and then press the RATIFY COLLECTION button. Thus ending, successfully, the sale and purchase transaction on your part as the seller. After your confirmation of collection, buyer and arbitration, we can finalize the Delivery of the Tethers to the Buyer. Once the Collection has been ratified by the Seller, both the Seller and the Buyer are exempted from safeguarding evidence associated with this purchase-sale Tx. </font> <br> <br>'}],

          [{ vl: '<br><b>5.Cobrament Venedor:</b><br> Tan aviat aparegui ✅ a la Notificació pagament comprador, verifiqui el cobrament a la plataforma mitjà de pagament  '},{ vl: '</font></b>,  estipulada a l`oferta. No oblidi salvar el justificant del   cobrament (imatge nítida i llegible o arxiu pdf). Recordeu també que ha de salvaguardar en el seu poder vídeo o sessió nitida del procés de verificació del cobrament tal com es va acceptar en el CONTRACTE (cas d`incidència pogués ser requerit per aquest arbitratge com a prova). <br> Tan aviat s`hagi verificat el cobrament com rebut, marqui aquí la casella de validació: Cobrament rebut i justificant, i tot seguit premeu el botó de RATIFICAR COBRAMENT. Finalitzant així, amb èxit, la transacció de compravenda per part seva com venedor. Després de la seva ratificació de cobrament, comprador i arbitratge, puguem finalitzar el Lliurament dels Tethers al comprador. Un cop Ratificat el Cobrament pel Venedor, tant Venedor com comprador, queden eximits de salvaguardar proves associades a aquesta Tx de compravenda. </font> <br> <br>'}],
          
          [{ vl: '<br><b>5.Coleção do vendedor:</b><br> Assim que ✅ aparecer na Notificação de Pagamento do Comprador, verifique o pagamento no meio de pagamento da plataforma  ' },{ vl: '</font></b>,  estipulado na oferta. Não se esqueça de guardar o comprovativo de pagamento (imagem nítida e legível ou ficheiro pdf). Lembre-se também que você deve resguardar em seu poder um vídeo ou uma sessão clara do processo de verificação de pagamento conforme aceito no CONTRATO (caso de incidência poderá ser exigido por esta arbitragem como prova). <br> Assim que tiver verificado o pagamento como recebido, marque aqui a caixa de validação: Pagamento recebido e comprovativo e, a seguir, prima o botão RATIFICAR COLETA. Terminando assim, com sucesso, a transação de compra e venda de sua parte como vendedor. Após sua confirmação de cobrança, comprador e arbitragem, poderemos finalizar a Entrega dos Tethers ao Comprador. Uma vez que a coleta seja ratificada pelo vendedor, tanto o vendedor quanto o comprador estão isentos de evidências de salvaguarda associadas a este Tx de compra-venda. </font> <br> <br>'}],                                               
            ],         
       vars: [
          [{ vl: 'Notificación pago comprador'},{ vl: 'Cobro recibido y justificante'},{ vl: 'Remitir justificante del cobro'},{ vl: 'Ratificar Cobro'},{ vl: 'Impago Denegar Entrega'}],
          [{ vl: 'Buyer payment notification'},{ vl: 'Collection received and proof'},{ vl: 'Send proof of collection'},{ vl: 'Ratify Collection'},{ vl: 'Non-payment Deny Delivery'}],
          [{ vl: 'Notificació pagament comprador'},{ vl: 'Cobrament rebut i justificant'},{ vl: 'Remetre justificant del cobrament'},{ vl: 'Ratificar Cobrament'},{ vl: 'Impagament Denegar Lliurament'}],
          [{ vl: 'Notificação de pagamento do comprador'},{ vl: 'Coleção do vendedor recebido e comprovante'},{ vl: 'Remitir justificante del cobro'},{ vl: 'Ratificar coleção'},{ vl: 'Recusa de entrega por falta de pagamento'}],,                                               
            ],
        hlp_remitir: [
          [{ vl: '<br><b>Remitir justificante del cobro:</b><br>Recuerde que debe remitir el justificante del cobro(imagen nítida y legible o archivo pdf) por medio privado acordado con el comprador o en el 💬 chat de la Tx. <br> <br>'}],
          [{ vl: '<br><b>Send proof of collection: </b> <br> Remember that you must send proof of collection (clear and legible image or pdf file) by private means agreed with the buyer or in the 💬 Tx chat.  <br> <br>' }],
          [{ vl: '<br><b>Remetre justificant del cobrament:</b><br>Recordi que ha de remetre el justificant del cobrament (imatge nítida i llegible o arxiu pdf) pel mitjà privat acordat amb el comprador o al 💬 xat de la Tx.  <br> <br>' }],
          [{ vl: '<br><b>Enviar comprovante de pagamento: </b> <br> Lembre-se que você deve enviar comprovante de pagamento (imagem nítida e legível ou arquivo pdf) por meio privado acordado com o comprador ou no chat 💬 Tx. <br> <br>' }],                                               
            ],                       
      },
      Entrega_de_la_venta: {
       vars: [
          [{ vl: 'de la venta'},{ vl: 'Entrega realizada en Tx ID'},{ vl: 'Entrega realizada'},{ vl: 'Prueba de Pago'},{ vl: '¡ VENTA FINALIZADA ! ✅'}],
          [{ vl: 'of the Sale'},{ vl: 'Delivery made in Tx ID'},{ vl: 'Delivery made'},{ vl: 'Proof of payment'},{ vl: 'SALE FINISHED ! ✅'}],
          [{ vl: 'de la venda'},{ vl: 'Lliurament realitzat a Tx ID'},{ vl: 'Lliurament realitzat'},{ vl: 'Prova de Pagament'},{ vl: 'VENDA FINALITZADA ! ✅'}],
          [{ vl: 'da venda'},{ vl: 'Entrega feita em Tx ID'},{ vl: 'Entrega feita'},{ vl: 'Prova de pagamento'},{ vl: 'VENDA ACABADA ! ✅'}],                                              
            ],                               
      },
      Entrega_de_la_compra: {
       vars: [
          [{ vl: 'de la compra'},{ vl: 'Dirección Tether del Comprador'},{ vl: 'Copiar dirección bitcoin del comprador al portapapeles'},{ vl: 'Dirección Tether de destino estipulada por el Comprador'},{ vl: 'Dirección Tether destino final de la entrega'},{ vl: 'Activa / desactiva escanear el código Qr de <br />🔗 dirección bitcoin destino final entrega'},{ vl: 'Confirmar destino entrega'}],
          [{ vl: 'of the purchase'},{ vl: 'Buyer`s Tether Address'},{ vl: 'Copy buyer`s bitcoin address to clipboard'},{ vl: 'Destination Tether address stipulated by the Buyer'},{ vl: 'Tether address final destination of delivery'},{ vl: 'Activates / deactivates scanning the Qr code of <br /> 🔗 bitcoin address final destination delivery'},{ vl: 'Confirm delivery destination'}],
          [{ vl: 'de la compra'},{ vl: 'Adreça Tether del Comprador'},{ vl: 'Copiar l`acreça bitcoin del comprador al porta-retalls'},{ vl: 'Adreça Tether de destí estipulada pel Comprador'},{ vl: 'Adreça Tether destinació final del lliurament'},{ vl: 'Activa / desactiva escanejar el codi Qr d` <br /> 🔗 adreça bitcoin destinació final lliurament'},{ vl: 'Confirmar desti final del lliurament'}],
          [{ vl: 'da compra'},{ vl: 'Endereço Tether do comprador'},{ vl: 'Copie o endereço bitcoin do comprador para a área de transferência'},{ vl: 'Endereço Tether de destino estipulado pelo Comprador'},{ vl: 'Endereço Tether, destino final de entrega'},{ vl: 'Ativa / desativa a digitalização do código Qr de <br /> 🔗 endereço bitcoin entrega no destino final'},{ vl: 'Confirme o destino da entrega'}],                                              
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
          [{ vl: '<br><b>Entrega enviada en Transacción (ID):</b><br> <b>¡ Damos por finalizada esta transacción de compra-venta con éxito !</b> Inmortalizada en la cadena de bloque de bitcoin sólo a través de las direcciones públicas. Pudiendo revisar la transacción de entrega directamente, bien a través del vinculo de la transacción o explorando su dirección bitcoin pública asociada a ésta, desde cualquier explorador de la cadena de bloques de bitcoin.<br> Fieles al resguardo de la privacidad y no siendo ya necesario mantener registros vinculados a la transacción de compra-venta, procedemos a la eliminación de registros, ficheros y chat Tx (en contobit) de este proceso de arbitraje concluido satisfactoriamente y definitvo a partir de la sexta confirmación de la entrega en la cadena de bloques de bitcoin. Quedando así  libre de respaldo, la dirección 🔐Multigarantía Ventas, para cualquier otro intercambio(Tx).<br> <br>'}],
          [{ vl: '<br><b>Delivery sent in Transaction (ID): </b> <br> <b> We conclude this sale and purchase transaction successfully! </b> Immortalized in the bitcoin blockchain only through public addresses . Being able to review the delivery transaction directly, either through the transaction link or by exploring its public bitcoin address associated with it, from any explorer of the bitcoin blockchain. <br> Faithful to the protection of privacy and no longer necessary maintain records linked to the sale and purchase transaction, we proceed to the elimination of records, files and Tx chat (in contobit) of this arbitration process successfully concluded and definitive from the sixth confirmation of delivery to the bitcoin blockchain.Thus being free of endorsement, the address 🔐Sales Multiwarranty, for any other exchange (Tx). <br> <br>'}],
          [{ vl: '<br><b>Lliurament enviat a Transacció (ID):</b><br> <b> Donem per finalitzada aquesta transacció de compravenda amb èxit!</b> Immortalitzada a  la cadena de blocs de bitcoin només a través de les adreces públiques. Podent revisar la transacció de lliurament directament, bé mitjançant el vincle de la transacció o explorant la seva adreça bitcoin pública associada a aquesta, des de qualsevol explorador de la cadena de blocs de bitcoin. <br> Fidels al resguard de la privacitat i no sent ja necessari mantenir registres vinculats a la transacció de compravenda, procedim a l`eliminació de registres, fitxers i xat Tx (en contobit) d`aquest procés d`arbitratge conclòs satisfactòriament i definitiu a partir de la sexta confirmació de la entrega en la cadena de blocs de bitcoin. Quedant així lliure de suport, l`adreça 🔐Multigarantía Vendes, per a qualsevol altre intercanvi(Tx).<br> <br>'}],
          [{ vl: '<br><b>Entrega enviada na transação (ID):</b><br> <b> Concluímos esta transação de venda e compra com sucesso!</b> Imortalizado no blockchain bitcoin apenas por meio de endereços públicos. Ser capaz de revisar a transação de entrega diretamente, seja por meio do link de transação ou explorando seu endereço bitcoin público associado a ela, a partir de qualquer explorador do blockchain de bitcoin.<br> Fiel à proteção da privacidade e não sendo mais necessário manter os registros relacionados à transação de compra e venda, procedemos à eliminação dos registros, arquivos e chat Tx (em contobit) deste processo de arbitragem concluído com sucesso e definitivo a partir da sexta confirmación de la entrega en la cadena de bloques de bitcoin. Sendo assim livre de endosso, o endereço 🔐Multigarantía Ventas, para qualquer outra troca (Tx).<br> <br>'}],                                              
            ],
        tlp_eliminar: [
          [{ vl: 'FIELES AL RESGUARDO A LA PRIVACIDAD,<br /> AL PULSAR EL BOTÓN (CON MÍNIMO 6<br /> CONFIRMACIONES GARANTIZADAS),<br />  PROCEDEMOS A LA COMPLETA<br />  ELIMINACIÓN DE TODO REGISTRO<br /> ASOCIADO A ESTA TX DE COMPRA-VENTA<br /> EN ESTA PLATAFORMA.'},{ vl: 'FIELES AL RESGUARDO A LA PRIVACIDAD,<br /> AL PULSAR EL BOTÓN ,<br />  PROCEDEMOS A LA COMPLETA<br />  ELIMINACIÓN DE TODO REGISTRO<br /> ASOCIADO A ESTA TX DE COMPRA-VENTA<br /> EN ESTA PLATAFORMA.'}],
          [{ vl: 'FAITHFUL TO THE PROTECTION OF PRIVACY, <br /> BY PRESSING THE BUTTON (WITH MINIMUM 6<br /> GUARANTEED CONFIRMATIONS), WE PROCEED<br /> TO THE COMPLETE ELIMINATION OF ALL<br /> REGISTRATION  ASSOCIATED WITH THIS <br />PURCHASE-SALE TX  ON THIS PLATFORM.'},{ vl: 'FAITHFUL TO THE PROTECTION OF PRIVACY, <br /> BY PRESSING THE BUTTON , WE PROCEED<br /> TO THE COMPLETE ELIMINATION OF ALL<br /> REGISTRATION  ASSOCIATED WITH THIS <br />PURCHASE-SALE TX  ON THIS PLATFORM.'}],
          [{ vl: 'FIDELS AL RESGUARD A LA PRIVACITAT,<br /> EN PREMER EL BOTÓ (AMB MÍNIM 6<br /> CONFIRMACIONS GARANTIDES) PROCEDIM<br /> A LA COMPLERTA EL.LIMINACIÓ DE TOT<br /> REGISTRE LLIGAT AMB AQUESTA TX DE<br /> COMPRA-VENDA EN AQUESTA PLATABANDA<br />'},{ vl: 'FIDELS AL RESGUARD A LA PRIVACITAT,<br /> EN PREMER EL BOTÓ  PROCEDIM<br /> A LA COMPLERTA EL.LIMINACIÓ DE TOT<br /> REGISTRE LLIGAT AMB AQUESTA TX DE<br /> COMPRA-VENDA EN AQUESTA PLATABANDA<br />'}],
          [{ vl: 'FIEL COM A PROTEÇÃO DA PRIVACIDADE,<br /> PRESSIONANDO O BOTÃO (COM MÍNIMO 6 <br />CONFIRMAÇÕES GARANTIDAS) PROCEDEMOS<br /> À   ELIMINAÇÃO COMPLETA DE TODOS OS<br /> REGISTOS ASSOCIADOS A ESTE TX DE <br />COMPRA-VENDA  NESTA PLATAFORMA.'},{ vl: 'FIEL COM A PROTEÇÃO DA PRIVACIDADE,<br /> PRESSIONANDO O BOTÃO  PROCEDEMOS<br /> À   ELIMINAÇÃO COMPLETA DE TODOS OS<br /> REGISTOS ASSOCIADOS A ESTE TX DE <br />COMPRA-VENDA  NESTA PLATAFORMA.'}],                                              
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
          [{ vl: 'br><b>Transacció (Tx) en  ⚖️ Arbitratge:</b><br>  Transacció traspassada a procés d`arbitratge! Per incidència, desacord o impagament en la ratificació del cobrament, la Transacció, darrer anàlisi de proves, serà resolta per intervenció de l`àrbitre en un termini màxim de 48 hores a comptar des del moment de l`incidència. Aneu en breu a l`opció Àrbitre del menú principal per aportar les proves i vídeo estipulats en el contracte.<br> <br>'}],
          [{ vl: '<br><b>Transação (Tx) em ⚖️ Arbitragem:</b><br> Transação transferida para processo de arbitragem! Por incidência, desacordo ou falta de pagamento na homologação da cobrança, a Operação, após análise das provas, será resolvida com a intervenção do árbitro no prazo máximo de 48 horas a partir do momento da incidência. Vá em breve para a opção Árbitro do menu principal para a contribuição de provas e vídeo estipuladas no contrato.<br> <br>'}],             
            ],                                                          
      },
      Tx_entrg_finalizada: {
         mtx: [
          [{ vl: '⚪¡ Transacción entregada y finalizada !'}],
          [{ vl: '⚪Transaction delivered and completed !'}],
          [{ vl: '⚪Transacció lliurada i finalitzada !'}],
          [{ vl: '⚪Transação entregue e concluída !'}],                                            
            ],                                                        
      },      
    // empiezan necesarias traducciones de las functions
      f_createnotrawTxArb_Ln: {
         txts: [
          [{ vl: 'Cobro recibido, ratificado por el árbitro tras incidencia, entrega autorizada'},{ vl: 'Alerta al comprador enviada con éxito'},{ vl: 'Error de sistema en proceso agregar alerta al comprador'},{ vl: 'Multigarantía LIGHTNING insuficiente, necesario añadir envío mínimo de '}],
          [{ vl: 'Collection received, ratified by the arbitrator after incident, authorized delivery'},{ vl: 'Buyer alert sent successfully'},{ vl: 'System error in process add buyer alert'},{ vl: 'Insufficient LIGHTNING multi-warranty, need to add minimum shipping of '}],
          [{ vl: 'Cobrament rebut, ratificat per l`àrbitre després d`incidència, lliurament autoritzat'},{ vl: 'Alerta al comprador tramesa amb èxit'},{ vl: 'Error de sistema en procés afegir alerta al comprador'},{ vl: 'Multigarantia LIGHTNING insuficient, necessari afegir enviament mínim de '}],
          [{ vl: 'Cobrança recebida, homologada pelo árbitro, entrega autorizada'},{ vl: 'Alerta de comprador enviado com sucesso'},{ vl: 'Erro de sistema no processo de adição de alerta de comprador'},{ vl: 'Múltipla garantia LIGHTNING insuficiente, precisa adicionar frete mínimo de '}],                                            
            ],                       
      },    
      creat_rawTx: {
         txts: [
          [{ vl: 'FIRMADA POR ARBITRAJE Y VENDEDOR LA TRANSACCIÓN DE RESPALDO DE ENTREGA FINAL AL COMPRADOR, CON FECHA DE EMISIÓN RESTRINGIDA(PRUEBA PARA EL COMPRADOR) Y SIN RESTRINGIR(ENCRIPTADA Y SALVADA LIBRE DE EMISIÓN TRAS VERIFICACIÓN DE PAGO Y COBRO).'}],
          [{ vl: 'SIGNED BY ARBITRATION AND SELLER THE FINAL BACKUP DELIVERY TRANSACTION TO THE BUYER, WITH A RESTRICTED(TEST FOR BUYER) AND UNRESTRICTED ISSUE DATE(ENCRIPTED AND SAVED BACKUP FREE TO BROADCAST AFTER VERIFICATION OF PAYMENT AND COLLECTION).'}],
          [{ vl: 'SIGNADA PER ARBITRATGE I VENEDOR LA TRANSACCIÓ DE RESPATLLER DE LLIURAMENT FINAL AL COMPRADOR, AMB DATA D`EMISSIÓ RESTRINGIDA(PROVA PER AL COMPRADOR) I SENSE RESTRINGIR(ENCIFRAT I DESAT RESPATLLER LLIURE PER EMETRE DESPRÉS DE VERIFICACIÓ DEL PAGAMENT I EL COBRAMENT).'}],
          [{ vl: 'ASSINADA POR ARBITRAGEM E VENDEDORA A OPERAÇÃO DE RESPALDO DE ENTREGA FINAL AO COMPRADOR, COM DATA DE EMISSÃO RESTRITO(TESTE PARA COMPRADOR) E NÃO RESTRITO(ENCRIPTADO E SALVO RESPALDO LIBRE PARA EMITIR APÓS A VERIFICAÇÃO DO PAGAMENTO E DA COBRANÇA).'}],                                            
            ],                       
      },
      vtomf: {
       mtx: [
          [{ vl: 'Expirada validez de 🔐MultiGarantía Ventas ' },{ vl: 'El periodo de validez(en el sitio) de la dirección bitcoin de su 🔐 MultiGarantía 🔗Multifirma para Ventas expiró hace ' },{ vl: ' días. Puede, verificar su saldo o retirarlo, y generar una nueva dirección MultiGarantía en el Perfil de su dirección de usuario.' }],
          [{ vl: 'Expired validity of 🔐MultiGarantía Sales ' },{ vl: 'The validity period (on the site) of the bitcoin address of your 🔐 MultiGuarantee 🔗Multifirma for Sales expired ago ' },{ vl: 'days. You can check your balance or withdraw it, and generate a new MultiGuarantee address in the Profile of your user address. ' }],
          [{ vl: 'Expirada validesa de 🔐MultiGarantia Vendes ' },{ vl: 'El període de validesa(al lloc) de la direcció bitcoin de la seva 🔐 MultiGarantia 🔗Multifirma per a Vendes va expirar fa ' },{ vl: 'dies. Podeu verificar el vostre saldo o retirar-lo, i generar una nova adreça MultiGarantia al Perfil de la vostra adreça d`usuari. ' }],
          [{ vl: 'Validade expirada de 🔐MultiGarantía Vendas ' },{ vl: 'O período de validade (no site) do endereço bitcoin da sua 🔐 MultiGuarantee 🔗Multifirma for Sales expirou atrás ' },{ vl: 'dias. Pode consultar o seu saldo ou retirá-lo, e gerar um novo endereço MultiGuarantee no Perfil do seu endereço de utilizador.' }],                                             
            ]            
      },
      vtomf10d: {
       mtx: [
          [{ vl: 'Expiración validez de 🔐MultiGarantía Ventas ' },{ vl: 'El periodo de validez(en el sitio) de la dirección bitcoin de su 🔐 MultiGarantía 🔗Multifirma para Ventas expira en ' },{ vl: ' días. Puede previamente, verificar su saldo o retirarlo, y generar una nueva dirección MultiGarantía en el Perfil de su dirección de usuario.' }],
          [{ vl: 'Expiration validity of 🔐MultiGarantía Sales ' },{ vl: 'The validity period (on the site) of the bitcoin address of your 🔐 MultiGuarantee 🔗Multifirma for Sales expires in ' },{ vl: ' days. You can previously verify your balance or withdraw it, and generate a new MultiGuarantee address in the Profile of your user address. ' }],
          [{ vl: 'Expiració validesa de 🔐MultiGarantia Vendes ' },{ vl: 'El període de validesa (al lloc) de l`adreça bitcoin de la seva 🔐 MultiGarantia 🔗Multifirma per a Vendes expira en ' },{ vl: ' dies. Podeu prèviament verificar el vostre saldo o retirar-lo, i generar una nova adreça MultiGarantia al Perfil de la vostra adreça d`usuari. ' }],
          [{ vl: 'Validade de expiração de 🔐MultiGarantía Vendas ' },{ vl: 'O período de validade (no site) do endereço bitcoin da sua 🔐 MultiGuarantee 🔗Multifirma for Sales expira em ' },{ vl: ' dias. Você pode verificar previamente o seu saldo ou retirá-lo, e gerar um novo endereço MultiGuarantee no Perfil do seu endereço de usuário.' }],                                             
            ]            
      },             
      f_EliminarTx: {
         txts: [
          [{ vl: 'Tx, archivos y 💬 Chat de la Tx eliminados con éxito'},{ vl: 'Registro, archivos y 💬 Chat de la Tx eliminados con éxito en esta plataforma.'},{ vl: 'Alerta al vendedor enviada con éxito'},{ vl: 'Tx, archivos y 💬 Chat de la Tx no eliminados.  Necesario 6 confirmaciones en cadena de bloques.'}],                                            
          [{ vl: 'Tx, files and Tx 💬 Chat deleted successfully.'},{ vl: 'Registry, files and 💬 Tx Chat successfully deleted on this platform.'},{ vl: 'Seller alert sent successfully'},{ vl: 'Tx, files and 💬 Chat de la Tx not deleted. Requires 6 confirmations in blockchain.'}],                                            
          [{ vl: 'Tx, arxius i 💬 Xat de la Tx eliminats amb èxit'},{ vl: 'Registre, arxius i 💬 Xat de la Tx eliminats amb èxit en aquesta plataforma.'},{ vl: 'Alerta al venedor tramesa amb éxit'},{ vl: 'Tx, arxius i 💬 Xat de la Tx no eliminats. Cal 6 confirmacions a la cadena de blocs.'}],                                            
          [{ vl: 'Tx, arquivos e 💬 Chat de la Tx excluídos com sucesso'},{ vl: 'Registro, arquivos e 💬 Tx Chat excluídos com sucesso nesta plataforma.'},{ vl: 'Alerta de vendedor enviado com sucesso'},{ vl: 'Tx, arquivos e 💬 Chat de la Tx não excluídos. Requer 6 confirmações de blockchain.'}],                                            
            ],
         swal: [
          [{ vl: '¿ Regenerar 🔂Retiro de Seguridad ?'},{ vl: 'Dispone de una Tx de 🔂Retiro de Seguridad, los saldos de su 🔐 MultiGarantía 🔗Multifirma han variado después del intercambio, sería conveniente regenerarlo automaticamente, a no ser que desee regenerarlo manualmente en el perfil de usuario.'},{ vl: '✅ SI, AUTOMÁTICO'},{ vl: '❌ NO, MANUAL'}],                                            
          [{ vl: 'Regenerate 🔂 Security Retreat ?'},{ vl: 'You have a 🔂Security Withdrawal Tx, the balances of your 🔐 MultiGuarantee 🔗Multisig have changed after the exchange, it would be convenient to regenerate it automatically, unless you want to manually regenerate it in the user profile.'},{ vl: '✅ YES, AUTOMATIC'},{ vl: '❌ OFF, MANUAL'}],                                            
          [{ vl: 'Regenerar 🔂Retir de Seguretat ?'},{ vl: 'Disposa d`una Tx de 🔂Retir de Seguretat, els saldos de la seva 🔐 MultiGarantia 🔗Multifirma han variat després de l`intercanvi, seria convenient regenerar-lo automàticament, tret que vulgui regenerar manualment en el perfil d`usuari.'},{ vl: '✅ SI, AUTOMÀTIC'},{ vl: '❌ NO, MANUAL'}],                                             
          [{ vl: 'Regenerar 🔂 Retiro de Segurança ?'},{ vl: 'Você tem um 🔂Retiro de Segurança Tx, os saldos do seu 🔐 MultiGuarantee 🔗Multifirma mudaram após a troca, seria conveniente regenerá-lo automaticamente, a menos que você queira regenerá-lo manualmente no perfil do usuário.'},{ vl: '✅ SIM, AUTOMÁTICO'},{ vl: '❌ NO, MANUAL'}],                                           
            ],                                                                         
      },
      f_Impago: {
         txts: [
          [{ vl: 'Iniciamos proceso de arbitraje por impago o incidencia'},{ vl: 'Transacción Tx pasada a Arbitraje'},{ vl: 'Ha sido denegada la entrega de la Tx por el vendedor, por incidencia o impago sin resolver, hemos procedido a iniciar proceso de arbitraje por imposibilidad de ratificar el cobro de la Tx por parte del vendedor. Por favor asegúrese de contar con las pruebas de pago, estipuladas en las condiciones del contrato de compra-venta.'},{ vl: 'Alerta al comprador agregada con éxito'}],                                            
          [{ vl: 'We start arbitration process for non-payment or incidence.'},{ vl: 'Tx transaction passed to Arbitration'},{ vl: 'The seller has denied the delivery of the Tx, due to an incident or unresolved non-payment, we have proceeded to initiate an arbitration process due to the impossibility of ratifying the payment of the Tx by the seller. Please make sure you have the proofs of payment, stipulated in the conditions of the purchase-sale contract.'},{ vl: 'Buyer alert added successfully'}],                                            
          [{ vl: 'Iniciem procés d`arbitratge per impagament o incidència'},{ vl: 'Transacció Tx tramesa a l`Arbitratge'},{ vl: 'Ha estat denegat el lliurament de la Tx pel venedor, per incidència o impagament sense resoldre, hem procedit a iniciar procés d`arbitratge per impossibilitat de ratificar el cobrament de la Tx per part del venedor. Si us plau verifiqueu que disposeu de les proves de pagament, estipulats en les condicions del contracte de compravenda.'},{ vl: 'Alerta al comprador tramesa amb èxit'}],                                            
          [{ vl: 'Iniciamos processo de arbitragem por falta de pagamento ou incidência'},{ vl: 'Transação Tx passada para arbitragem'},{ vl: 'O vendedor negou a entrega do Tx, devido a um incidente ou falta de pagamento não resolvido, passamos a iniciar um processo de arbitragem devido à impossibilidade de ratificar o pagamento do Tx pelo vendedor. Certifique-se de que possui os comprovantes de pagamento, estipulados nas condições do contrato de compra e venda.'},{ vl: 'Alerta de comprador adicionado com sucesso'}],                                            
            ],
         swf1: [
          [{ vl: '¿ Denunciar impago o incidencia y denegar entrega ?'},{ vl: 'Cantidad del impago'},{ vl: 'Medio de pago'},{ vl: 'Asegúrese primero de que el tiempo límite, usual según el Medio de pago de la oferta, excede los plazos normales legales de tal medio. <br><br> Agradecemos también, sino lo ha hecho ya, se comunique con el comprador en el 💬 chat de la Tx. Cerciorándose que el Comprador no sufra algún contratiempo (retraso en la plataforma de pago, problemas de conexión...). Si esta completamente seguro, de que el impago se debe a causa o error imputable exclusivamente al comprador y sin solución posible por parte del mismo, proceda con la denegación de entrega'},{ vl: '✅ RATIFICAR IMPAGO DENEGAR ENTREGA'},{ vl: '❌ CANCELAR O POSPONER DENEGACIÓN'}],
          [{ vl: 'Report non-payment or incident and deny delivery?'},{ vl: 'Amount of default'},{ vl: 'Payment method'},{ vl: 'Make sure first that the time limit, usual according to the means of payment of the offer, exceeds the normal legal terms of such means. <br> <br> We are also grateful, if you have not already done so, contact the buyer in the 💬 Tx chat. Making sure that the Buyer does not suffer any setback (delay in the payment platform, connection problems ...). If you are completely sure that the non-payment is due to a cause or error attributable exclusively to the buyer and without a possible solution on the part of the buyer, proceed with the denial of delivery'},{ vl: '✅ RATIFY NON-PAYMENT DENY DELIVERY'},{ vl: '❌ CANCEL OR POSTPONE DENIAL'}],
          [{ vl: 'Denunciar impagament o incidència i denegar lliurament?'},{ vl: 'quantitat de l`impagament'},{ vl: 'Mitjà de pagament'},{ vl: 'Assegureu-vos primer que el temps límit, usual segons el Mitjà de pagament de l`oferta, excedeix els terminis normals legals de tal mitjà. <br><br> Agraïm també, sinó ho ha fet ja, es comuniqui amb el comprador en el 💬 xat de la Tx. Assegurar-se que el comprador no pateixi algun contratemps (retard en la plataforma de pagament, problemes de connexió ...). Si aquesta completament segur, que l`impagament es deu a causa o error imputable exclusivament al comprador i sense solució possible per part d`ell mateix, procedeixi amb la denegació del lliurament'},{ vl: '✅ RATIFICAR IMPAGAMENT DENEGAR LLIURAMENT'},{ vl: '❌ CANCEL·LAR O POSPOSAR DENEGACIÓ'}],
          [{ vl: 'Denunciar o não pagamento ou incidente e negar entrega ?'},{ vl: 'Quantidade de inadimplência'},{ vl: 'Meio de pagamento'},{ vl: 'Certifique-se primeiro de que o prazo, habitual segundo o meio de pagamento da oferta, ultrapassa os termos legais normais desse meio. <br><br> Agradecemos também, caso ainda não o tenha feito, entre em contato com o comprador pelo chat do 💬 Tx. Certificando-se de que o Comprador não sofra nenhum revés(atraso na plataforma de pagamento, problemas de conexão ...). Se tiver a certeza absoluta de que o não pagamento se deve a uma causa ou erro imputável exclusivamente ao comprador e sem solução possível por parte do comprador, proceda à recusa da entrega'},{ vl: '✅ RATIFICAR NÃO PAGAMENTO NEGAR ENTREGA'},{ vl: '❌ CANCELAR OU ADIAR A NEGAÇÃO'}],                                                    
            ],
         swf2: [
          [{ vl: '¡ Iniciamos proceso de arbitraje por impago o incidencia !'},{ vl: 'Notificamos la incidencia y denegación de entrega al comprador.'}],
          [{ vl: 'We start arbitration process for non-payment or incidence!'},{ vl: 'We notify the buyer of the incident and denial of delivery.'}],
          [{ vl: 'Iniciem procés d`arbitratge per impagament o incidència !'},{ vl: 'Notifiquem l`incidència i denegació del lliurament al comprador.'}],
          [{ vl: 'Iniciamos processo de arbitragem por falta de pagamento ou incidência!'},{ vl: 'Notificamos o comprador sobre o incidente e recusa de entrega.'}],                                                    
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
          swf3: [
          [{ vl: '¡ No es posible generar Tx de Respaldo de Entrega todavía !'},{ vl: 'Es necesario previamente, concluir por completo, finalizar otra transacción en curso que mantiene ocupadas entradas y salidas de la 🔐Garantía, <br><br> '},{ vl: '¡ RETIRO EN CURSO EN PERFIL DE USUARIO !'}],
          [{ vl: 'Unable to generate Delivery Backup Tx yet!'},{ vl: 'It is necessary previously, to completely conclude, to finalize another transaction in progress that keeps busy entries and exits of the 🔐Guarantee, <br> <br>'},{ vl: 'WITHDRAWAL IN PROGRESS IN USER PROFILE!'}],
          [{ vl: 'No és possible generar Tx de Respatller de Lliurament encara!'},{ vl: 'Cal prèviament, concloure per complet, finalitzar una altra transacció en curs que manté ocupades entrades i sortides de la 🔐Garantia, <br><br>'},{ vl: 'RETIRO EN CURS EN PERFIL D`USUARI!'}],
          [{ vl: 'Ainda não foi possível gerar o Delivery Backup Tx!'},{ vl: 'É necessário previamente, para concluir completamente, finalizar outra transação em andamento que mantenha movimentadas as entradas e saídas da 🔐Garantia, <br> <br>'},{ vl: 'RETIRADA EM ANDAMENTO NO PERFIL DO USUÁRIO!'}],,                                                    
            ],                                                  
      },
      f_createnotrawTxArb_Ln: {
         txts: [
          [{ vl: 'Cobro recibido, ratificado por el árbitro tras incidencia, entrega autorizada'},{ vl: 'Alerta al comprador enviada con éxito'},{ vl: 'Error de sistema en proceso agregar alerta al comprador'}],
          [{ vl: 'Collection received, ratified by the arbitrator after incident, authorized delivery'},{ vl: 'Buyer alert sent successfully'},{ vl: 'System error in process add buyer alert'}],
          [{ vl: 'Cobrament rebut, ratificat per l`àrbitre després d`incidència, lliurament autoritzat'},{ vl: 'Alerta al comprador tramesa amb èxit'},{ vl: 'Error de sistema en procés afegir alerta al comprador'}],
          [{ vl: 'Cobrança recebida, homologada pelo árbitro, entrega autorizada'},{ vl: 'Alerta de comprador enviado com sucesso'},{ vl: 'Erro de sistema no processo de adição de alerta de comprador'}],                                            
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
     f_updateCobro: {
         txts: [
          [{ vl: 'Ratificación de cobro, manual por el arbitraje, enviada a comprador'},{ vl: 'Ratificación cobro enviada a comprador'},{ vl: 'Cobro recibido, ratificado por el vendedor, entrega autorizada'},{ vl: 'Falta seleccionar casilla RECIBIDO '}],
          [{ vl: 'Collection ratification, manual by arbitration, sent to buyer'},{ vl: 'Receipt confirmation sent to buyer'},{ vl: 'Payment received, ratified by the seller, authorized delivery'},{ vl: 'It remains to select the RECEIVED box '}],
          [{ vl: 'Ratificació de cobrament, manual per l`arbitratge, tramesa al comprador'},{ vl: 'Ratificació de cobrament tramesa al comprador'},{ vl: 'Cobrament rebut, ratificat pel venedor, lliurament autoritzat'},{ vl: 'Falta seleccionar casella REBUT '}],
          [{ vl: 'Ratificação da cobrança, manual por arbitragem, enviada ao comprador'},{ vl: 'Confirmação de recebimento enviada ao comprador'},{ vl: 'Pagamento recebido, homologado pelo vendedor, entrega autorizada'},{ vl: 'Resta selecionar a caixa RECEBIDO '}],,                                          
            ],                       
      },
     f_upd_conf: {
         txts: [
          [{ vl: ' Actualizando confirmaciones en garantía (6 conf.)USDT: '},{ vl: ' Aceptación de compra verificada, tethers liberados por el vendedor, más de 6 confirmaciones en red tether confirmado.'},{ vl: ' Liberación de compra, 6 confirmaciones red tether, verificada con éxito en Tx'},{ vl: ' Aceptación de compra verificada, tethers liberados por el vendedor, más de 6 confirmaciones en red tether superadas. Enterado el comprador. '},{ vl: ' Aceptación de compra verificada, tethers liberados por el vendedor, más de 6 confirmaciones en red tether superadas. Enterado el vendedor. '}],
          [{ vl: ' Updating confirmations in warranty (6 conf.)USDT: '},{ vl: ' Verified purchase acceptance, tethers released by the seller, more than 6 confirmations in confirmed tether network.'},{ vl: ' Purchase release, 6 tether network confirmations, successfully verified in Tx'},{ vl: ' Verified purchase acceptance, tethers released by the seller, more than 6 confirmations  overcome in tether network. The buyer is aware. '},{ vl: ' Verified purchase acceptance, tethers released by the seller, more than 6 confirmations overcome in tether network. The seller is aware '}],
          [{ vl: ' Actualitzant confirmacions en garantia (6 conf.)USDT: '},{ vl: ' Acceptació de compra verificada, tethers alliberats pel venedor, més de 6 confirmacions en xarxa tether confirmat.'},{ vl: ' Alliberament de compra, amb 6 confirmacions a xarxa tether, verificat amb èxit de la Tx'},{ vl: ' Acceptació de compra verificada, tethers alliberats pel venedor, més de 6 confirmacions en xarxa tether superades. Assabentat el comprador.'},{ vl: '  Acceptació de compra verificada, tethers alliberats pel venedor, més de 6 confirmacions en xarxa tether superades. Assabentat el vendedor. '}],
          [{ vl: ' Atualizando confirmações garantia (6 conf.)USDT: '},{ vl: ' Aceitação de compra verificada, tethers liberados pelo vendedor, mais de 6 confirmações na rede tether confirmada.'},{ vl: ' Liberação de compra, 6 confirmações de rede tether, verificadas com sucesso no Tx'},{ vl: ' Aceitação de compra verificada, tethers liberados pelo vendedor, mais de 6 confirmações na rede tether superadas. Consciente el comprador'},{ vl: ' Aceitação de compra verificada, tethers liberados pelo vendedor, mais de 6 confirmações na rede tether superadas. Consciente el vendedor.'}],,                                          
            ],                       
      },
     f_alertac: {
         txts: [
          [{ vl: 'Cantidad de tethers a liberar copiado al portapapeles'},{ vl: '¡ Copiado a su portapapeles !'},{ vl: '¡ Copiada a su portapapeles dirección tether del comprador !'}],
          [{ vl: 'Amount of tethers to free copied to clipboard'},{ vl: 'Copied to your clipboard!'},{ vl: 'Buyer`s tether address copied to your clipboard!'}],
          [{ vl: 'Quantitat de tethers per alliberar copiat al porta-retalls'},{ vl: 'Copiat al seu porta-retalls !'},{ vl: '¡ Copiada al seu porta-retalls l`adreça tether !'}],
          [{ vl: 'Quantidade de tethers a serem copiados gratuitamente para a área de transferência'},{ vl: 'Copiado para sua área de transferência!'},{ vl: 'Copiado para o endereço de tether do comprador da área de transferência!'}],,                                          
            ],                       
      },
     f_checkIDliberacion: {
         txts: [
          [{ vl: 'Solicitud de compra aceptada con éxito en Tx'},{ vl: '¡ Tx ID, entrega de fondos solicitados, no publicada en cadena todavía !'},{ vl: 'La transacción de entrega, sólo empezará a contar como válida a partir de la primera confirmación en la cadena de bloques de bitcoin, debiera aparecer aproximadamente a los 10 minutos del envio.'}],
          [{ vl: 'Purchase request accepted successfully in Tx'},{ vl: 'Tx ID, Funds Release Requested, Not Released On Chain Yet!'},{ vl: 'The release transaction will only start to count as valid from the first confirmation in the bitcoin blockchain, it should appear approximately 10 minutes after sending.'}],
          [{ vl: 'Sol·licitud de compra acceptada amb èxit per la Tx'},{ vl: 'Tx ID, lliurament de fons sol·licitats, no publicada en cadena encara!'},{ vl: 'La transacció de lliurament, només començarà a comptar com a vàlida a partir de la primera confirmació a la cadena de blocs de bitcoin, hauria d`aparèixer aproximadament als 10 minuts de l`enviament. '}],
          [{ vl: 'Solicitação de compra aceita com sucesso em Tx'},{ vl: 'Tx ID, solicitação de entrega de fundos, ainda não liberada na cadeia!'},{ vl: 'A transação de entrega só começará a contar como válida a partir da primeira confirmação no blockchain do bitcoin, ela deve aparecer aproximadamente 10 minutos após o envio. '}],                                         
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
      f_guardauser: {
       mtx: [
                [{ vl: '¡ Guardado perfil de dirección bitcoin !' }],
                [{ vl: 'Saved bitcoin address profile!' }],
                [{ vl: 'Guardat perfil d`adreça bitcoin' }],
                [{ vl: 'Perfil de endereço bitcoin salvo!' }],                                              
               ],                                                         
      },      
      f_createopenraw: {
         txts: [
          [{ vl: 'Creada NUEVA Tx 🔂Retiro de Seguridad'},{ vl: 'Generada y guardada la Tx emisible a la fecha estipulada. <br> Además de copiarla y guardarla en su poder, no olvide copiar y guardar también los Scripts de canje y clave pública de la dirección multifirma.'}],
          [{ vl: 'Created NEW Tx 🔂Security Retreat'},{ vl: 'Generated and saved the emissible Tx on the stipulated date. <br> In addition to copying and keeping it in your possession, do not forget to also copy and save the Redemption Scripts and public key of the multisig address. '}],
          [{ vl: 'Creada NOVA Tx 🔂Retir de Seguretat'},{ vl: 'Generada i guardada la Tx emissible a la data estipulada. <br> A més de copiar-la i guardar-la en el seu poder, no oblideu copiar i guardar també els Scripts de canvi i clau pública de l`adreça multifirma.'}],
          [{ vl: 'Criado NOVO Tx 🔂Retiro de Segurança'},{ vl: 'Gerou e salvou o Tx emissível na data estipulada. <br> Além de copiá-lo e mantê-lo em seu poder, não se esqueça de também copiar e salvar os Scripts de Resgate e a chave pública do endereço multisig. '}],                                            
            ],                       
      },

      };
    },
    watch: {
      timerCount: {
        handler(value) {
          // console.log('value..'+value);₮
          if ((value > 0 & this.tx.DOCS_COMPRADOR === '✅' & this.tx.ACEP_VENDEDOR === '⏳' & this.tx.RAWTXUNSIGNED === '⏳' ) 
           ) {
             setTimeout(() => {
              this.timerCount--;
            }, 1000);
                        
                  if (
                    (this.tx.TIMELINE === "2.Solicitud") &
                    (this.tx.CADENARED === "₮")
                  ) {
                    if (this.tx.ACEP_VENDEDOR === "⏳") {
                      //console.log('value..'+value); 
                      if (value === 119) {
                        if (this.saldodisponible < ((this.tx.FEE + 0.00000547)).toFixed(8) | this.saldodisponiblett < this.aCopiQttymasCom) this.upd_conf();
                      }
                      if (value === 1) {
                        router.push({ name: "About" }); 
                      }
                    } 
                  }
          }

        },
        immediate: true, // This ensures the watcher is triggered upon creation
      },
      timerCountfin: {
        handler(value) {
          if ((value > 0) & (this.tx.IDTX_ENTREGA !== "⏳")) {
            setTimeout(() => {
              this.timerCountfin--;
            }, 1000);
          }
          if (this.tx.TIMELINE === "6.Entrega") {
            if (this.tx.IDTX_ENTREGA !== "⏳") {
              if (value === 0) {
                this.EliminarTx(); 
              }
            } else {
              this.timerCountfin = 600;
            }
          }
        },
        immediate: true, // This ensures the watcher is triggered upon creation
      },
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
        "selectedselTXtt",
        "selectedbtc",                                     
      ]),
    },
    methods: {
      ...mapMutations(["obtenerUsuario"]),
      ...mapActions([
        "syncUpdateValSelTx",
        "syncUpdateValSelTxtt"
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
      onDecode(decodedString) {
        this.idliberacion = decodedString;
        if (this.idliberacion !== null) {
          this.verqrget = false;
          this.pasteIDl(this.idliberacion);
        }
      },    
      importaddress_sinrescan(address) {
        // sin usar de momento adaptar con un return si se usa sin axios anidados
        let addressB64 = Buffer.from(address).toString("base64");
        this.axios
          .get(`/rpc-udptaddressfalse/${addressB64}`)
          .then((res) => {})
          .catch((e) => {});
      },
      createrawTxMf2Mn() {
       //console.log("llega"+this.tx.RAWTXSIGNEDVEND+this.tx.RAWTXUNSIGNED)

       //console.log("entra")
        let origenutxsB64 = Buffer.from(this.User.DIRMULTIFIRMA_FIANZALN).toString("base64");
        let dirdestinoB64 = Buffer.from(this.tx.DESTINO).toString("base64");
        let dirarbitrajeB64 = Buffer.from(this.User.ARBITRAJE).toString("base64");

        let usdt_aarbitrolongdec = this.tx.IMPORTECOMPRA * 0.005;
        let usdt_aarbitro = this.round2(usdt_aarbitrolongdec);
        let usdt_aarbitro_num = usdt_aarbitro;
        usdt_aarbitro = parseFloat(usdt_aarbitro).toFixed(2);     

        let usdt_acomprador = this.tx.IMPORTECOMPRA - (usdt_aarbitro * 0.5);
        //console.log("this.tx.FEE:..."+this.tx.FEE);
        if ((this.tx.FEE < 0.00000398) | (this.tx.FEE === undefined) | (this.tx.FEE === null) | (this.tx.FEE === "")) {
          this.tx.FEE = 0; //comis min con 3 uxtos 2 outs a }
          // DEJAR ACTIVO Y COMPROBADO CUANDO EL FEE ESTE ESTIPULADO POR EL COMPRADOR, siempre debe llegar estipulado, nunca deberia entrar en este if sólo la primera vez para calc SIZE
        } else { // si hay tx y mayor de 360 sats
          //segurar que sea mínimo el tamaño del size
          if (this.tx.FEE < (this.tx.SIZE/100000000)) {
            this.tx.FEE = this.tx.SIZE/100000000;
          }
        }
        //console.log("selectedbtc.." + this.selectedbtc)
        let feetousdt = this.tx.FEE * this.selectedbtc;
          //console.log("feetousdt.." + feetousdt)
        let minsendtt = 0.00000546 * this.selectedbtc;
          //console.log("minsendtt.." + minsendtt)
        usdt_acomprador = usdt_acomprador - (feetousdt  + minsendtt);
        usdt_acomprador = this.round2(usdt_acomprador);
        usdt_acomprador = parseFloat(usdt_acomprador).toFixed(2); 
          //console.log("usdt_acomprador.." + usdt_acomprador)
        let btc_aarbitro = usdt_aarbitro_num / this.selectedbtc;
        btc_aarbitro = this.round8(btc_aarbitro);
        let btc_aarbitro_num = btc_aarbitro;
        btc_aarbitro = parseFloat(btc_aarbitro).toFixed(8);
          //console.log("btc_aarbitro.." + btc_aarbitro)           
        let suma = this.tx.FEE + 0.00000546 + btc_aarbitro_num;
          //console.log(this.saldo+">="+suma); //COMPROBACION CON SALDO DE GARANTIA EN MULTIFIRMA
        let mfscriptPkB64 = Buffer.from(this.User.MF_SCRIPTPUBKEY_FIANZALN).toString("base64");
        let redeemB64 = Buffer.from(this.User.REDEEMSCRIPT_FIANZALN).toString("base64");
        let feeminers =  this.tx.FEE;


       if (this.tx.RAWTXSIGNEDARB === "⏳" ) { // crear raw sin locktime
            if (this.saldo >= suma  & this.tx.IMPORTECOMPRA > 0 ) {
           // console.log(this.saldo+">= dentro del if crear raw sin locktime"+suma)
            this.axios
              .get(
                `/rpc-createrawtxMf2MnTT/${origenutxsB64},${dirdestinoB64},${usdt_acomprador},${dirarbitrajeB64},${btc_aarbitro},${mfscriptPkB64},${redeemB64},${feeminers}`
              )
              .then((res) => {
                let rawTxHexa = res.data;

                if (this.tx.SIZERAW === 0) { //solo para grabar SIZERAW
                // creamos rawtx para averiguar y grabar SIZERAW
                //console.log("leido rawTxHexa : " + rawTxHexa);
                    let config = {
                      headers: {
                        token: this.token,
                      },
                    };                  
                  this.axios
                        .get(
                            `/rpc-decoderawtx/${rawTxHexa}`,
                            config
                                      )
                        .then((res) => {
                        //console.log("size: " + res.data.size );     
                          this.tx.SIZERAW =  parseInt(res.data.size * 1.37); //AJUSTANDO TAMAÑO DEL SIGNED 2
                             if (this.tx.SIZERAW > 360 ) {                            
                                // console.log("this.tx.SIZERAW : " + this.tx.SIZERAW);
                              // grabar Tx y notificar al comprador
                               this.upd_docscomp('SIZERAW');
                              }
                            })
                            .catch((e) => console.log(e));                  
                } else { // SI YA TENEMOS SIZERAW GRABADO
                this.tx.RAWTXUNSIGNED = rawTxHexa;
                  // console.log("leido rawTxHexa : " + this.tx.RAWTXUNSIGNED);
                  // grabar Tx y notificar al comprador
                  this.upd_docscomp('RAWTXUNSIGNED');
                }
              })
              .catch((e) => console.log(e));
            } else {
              if (this.tx.SIZERAW > 1) {
              // mensaje minimo necesario en multigarantia insuficiente... suma
              this.mensaje.texto = this.f_createnotrawTxArb_Ln.txts[this.svl()][3].vl + (suma-this.saldo) + " BTC "// + suma + "=" + this.aCopiQttymasCom;
              this.mensaje.color = "danger";
              this.showAlert();
              }                     
            }
        } else { // otro rpc crear raw 
            if (this.saldo >= suma ) { // crear raw con locktime
             // console.log(this.saldo+">= dentro del if crear raw con locktime"+suma)
            this.axios
              .get(
                `/rpc-createrawtxMf2MnTT-LOCKTIME/${origenutxsB64},${dirdestinoB64},${usdt_acomprador},${dirarbitrajeB64},${btc_aarbitro},${mfscriptPkB64},${redeemB64},${feeminers}`
              )
              .then((res) => {
                let rawTxHexa = res.data;
                this.varrawtxunsigned = rawTxHexa;
                 // console.log("leido rawTxHexa : " + this.varrawtxunsigned);

              })
              .catch((e) => console.log(e));
            } else {
              // mensaje minimo necesario en multigarantia insuficiente... suma
              this.mensaje.texto = this.f_createnotrawTxArb_Ln.txts[this.svl()][3].vl + (suma-this.saldo) + " BTC "// + suma + "=" + this.aCopiQttymasCom;
              this.mensaje.color = "danger";
              this.showAlert();                      
            }
        }  
      },
      sign_check_save_arb_TxMf2Mn(rawtxsignedvend) {
        // console.log("rawtxsignedvend "+rawtxsignedvend);
        let rawtxsignedvendB64 = Buffer.from(rawtxsignedvend).toString("base64");
        let dirarbitrajeB64 = Buffer.from(this.User.ARBITRAJE).toString("base64");
        // comprobar que es firma completa con un resign del arbitro rpc- y si es ok todo actualizar aki la tx con valores y el tx aceptado
                let config = {
                  headers: {
                    token: this.token,
                  },
                };         

        this.axios
              .get(
                  `/rpc-decoderawtx/${rawtxsignedvend}`,
                  config
                            )
              .then((res) => {
                  //console.log( "locktime: " + res.data.locktime );
                  this.locktime = res.data.locktime;    

        this.axios
          .get(
            `/rpc-signedtocheckcomplete/${rawtxsignedvendB64},${dirarbitrajeB64}`,config
          )
          .then((res) => {
            let rawTxHexa_endsignedarb_complete = res.data.complete;
            //console.log("rawTxHexa_endsignedarb_complete "+rawTxHexa_endsignedarb_complete); // = true comprobado con las 2


              if (rawTxHexa_endsignedarb_complete === true & this.locktime !== 2130000000) {
              this.tx.RAWTXSIGNEDARB = res.data.hex;
              //this.tx.DOCS_COMPRADOR = "✅";
              this.tx.updatedat = Date.now;

                    // grabar Tx y notificar al comprador
                    this.upd_docscomp('RAWTXSIGNEDARB');

               } else { // caso locktime = 2037

                 //console.log("entra en...else con locktime = 2130000000");
                       
                 if (rawTxHexa_endsignedarb_complete === true & this.locktime === 2130000000) { // caso locktime = 2037 y 2 firmas ok
                 //console.log("2 firmas ok locktime =  junio de 2037");
                 // aki tocaria actulizar tx en backend para que actualice el RAWTXSIGNEDVEND y notifique
                    // otroS 2 axios aqui dentro updatetx Y MJES
                    this.tx.RAWTXSIGNEDVEND = res.data.hex;
                    this.tx.ACEP_VENDEDOR = '✅'; // demuestra que vendedor firmo tambien con locktime para muestra al comprador
                    this.tx.TIMELINE = "3.Contrato";

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
                          this.creat_rawTx.txts[this.svl()][0].vl;
                        this.showAlert();

                        // alerta  al comprador entrega tx respadaldada y garantizada sin emitir***
                        this.nota.nombre = "tx-cobro";
                        this.nota.descripcion = "Tx: " +this.tx.IMPORTEMONEDA + " " + this.oferta.MONEDAOFERTA + " 🔄 " + this.tx.CADENARED + this.tx.IMPORTECOMPRA + " USDT. " +
                          this.creat_rawTx.txts[this.svl()][0].vl;

                        this.axios
                          .post(
                            `/nueva-a-otro/${this.tx.ID_COMPRADOR},${this.tx.EMAIL_COMPRADOR}`,
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
                 }

               } 
               
                      })
                      .catch((e) => {
                        console.log(e.response);
                      });               

          })
          .catch((e) => {
            // mensaje en pantalla de no firma FALTA *****FALTA no es uns tx  correcta
              console.log(e.response.data.mensaje);
              this.tx.RAWTXSIGNEDARB = "⏳";
          });                          
      },
    createopenraw() {
       // RETRAWTXSIGNEDARB RETRAWTXSIGNEDVEND 

        let origenutxsB64 = Buffer.from(this.User.DIRMULTIFIRMA_FIANZALN).toString("base64");
        let dirdestinoB64 = Buffer.from(this.User.NOMBREUSUARIO).toString("base64");    
        let dirarbitrajeB64 = Buffer.from(this.User.ARBITRAJE).toString("base64");
        let mfscriptPkB64 = Buffer.from(this.User.MF_SCRIPTPUBKEY_FIANZALN).toString("base64");
        let redeemB64 = Buffer.from(this.User.REDEEMSCRIPT_FIANZALN).toString("base64");
        let feeminers =  this.User.FEEFORRETRAW;
        let locktimeopen = this.User.LOCKTIME_RAWTXOPEN;

        //console.log("this.saldo.."+this.saldo);
       if ( this.saldo > 0) { 

                Swal.fire(
                  this.f_createopenraw.txts[this.svl()][0].vl,
                  this.f_createopenraw.txts[this.svl()][1].vl,
                  "success"
                );

            this.axios
              .get( 
                `/rpc-createopenraw/${origenutxsB64},${dirdestinoB64},${dirarbitrajeB64},${mfscriptPkB64},${redeemB64},${feeminers},${locktimeopen}`
              )
              .then((res) => {
                let rawTxHexa = res.data;
                  //console.log("leido rawTxHexa : " + rawTxHexa);                
                  this.User.RETRAWTXOPEN_LOCKTIME = rawTxHexa;
                 // console.log("leido rawTxHexa : " + this.User.RETRAWTXOPEN_LOCKTIME);
                  // grabar
                  this.guardarUser();
                
              })
              .catch((e) => console.log(e));                   
       } else {
                this.mensaje.color = "danger";
                this.mensaje.texto = "₿ " + this.saldo + ". " + this.f_EliminarTx.txts[this.svl()][3].vl;
                this.showAlert();         
       }

    },
    getsaldolag(address) {
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
            })
            .catch((e) => {});
    },          
    EliminarTx() { //this.tx.TIMELINE = "6.Entrega";
      
        this.entrega_lista = 'NO';
        if ( this.tx.IDTX_ENTREGA !== '⏳' & this.tx.IDTX_ENTREGA !== null &  this.tx.TIMELINE === '6.Entrega' ) { // emitida TX ID
        let idl = this.tx.IDTX_ENTREGA;
        let idlibB64 = Buffer.from(idl).toString("base64");
        this.axios
          .get(`/rpc-getTransaction/${idlibB64}`)
          .then((res) => {
           // console.log(res.data.mensaje);
            if (res.data.mensaje === 'respuesta nula') {
                Swal.fire(
                  this.f_checkIDliberacion.txts[this.svl()][1].vl,
                  this.f_checkIDliberacion.txts[this.svl()][2].vl,
                  "warning"
                );              
            }             
            let idrespu = res.data;                      
             //console.log("confirmaciones idl..." + idrespu.confirmations);
            //  console.log(idrespu);
            this.conf_idl = idrespu.confirmations;
            
            if (this.conf_idl === 0) {
                Swal.fire(
                  this.f_checkIDliberacion.txts[this.svl()][1].vl,
                  this.f_checkIDliberacion.txts[this.svl()][2].vl,
                  "warning"
                );              
            }
            if  ( this.conf_idl > 0) {
                this.getsaldolag(this.User.DIRMULTIFIRMA_FIANZALN);
            }            
            if  ( this.conf_idl > 5) { // 6 confirmaciones listas
                this.entrega_lista = 'SI';

        if (this.User.RETRAWTXOPEN_LOCKTIME !== "⏳"  & this.User.LOCKTIME_RAWTXOPEN !== 2130000000 & this.createdopenraw === "NO") { // exite tx retiro de seguridad               
                
            Swal.fire({
              title: this.f_EliminarTx.swal[this.svl()][0].vl,
              html: this.f_EliminarTx.swal[this.svl()][1].vl,
              icon: "question",
              showCancelButton: true,
              confirmButtonColor: "seagreen",
              cancelButtonColor: "tomato",
              confirmButtonText: this.f_EliminarTx.swal[this.svl()][2].vl,
              cancelButtonText: this.f_EliminarTx.swal[this.svl()][3].vl,
            }).then((result) => {
              if (result.value) {  //si regenera automatico              


                //  console.log("this.User.RETRAWTXOPEN_LOCKTIME ... this.saldo ... this.User.LOCKTIME_RAWTXOPEN ..." + this.User.RETRAWTXOPEN_LOCKTIME + " .. " + " .. " + this.saldo + " .. " + this.User.LOCKTIME_RAWTXOPEN );

                if (this.User.RETRAWTXOPEN_LOCKTIME !== "⏳" & this.saldo > 0  & this.User.LOCKTIME_RAWTXOPEN !== 2130000000 & this.createdopenraw === "NO") {
                    //  console.log("entro en if con ..." + this.User.RETRAWTXOPEN_LOCKTIME + " .. " + " .. " + this.saldo + " .. " + this.User.LOCKTIME_RAWTXOPEN);

                  this.createopenraw(); // crea y pone created en SI

                } 


            } else { // prefiere regenerar manual

              this.createdopenraw = "SI";

            }
            
          })
          .catch((e) => {console.log(e.response);});
                 
        } else { // no hay Retiro de Seguridad que regenerar elim TX

                if ( this.entrega_lista === 'SI' ) {
                let config = {
                  headers: {
                    token: this.token,
                  },
                };
                this.axios
                  .delete(`/eliminar-tx/${this.tx._id}`, config)
                  .then((res) => {
                    
                    this.axios
                      .delete(`/eliminarchat-tx/${this.tx._id}`, config)
                      .then((res) => {           

                        this.mensaje.color = "success";
                        this.mensaje.texto =  this.f_EliminarTx.txts[this.svl()][0].vl;
                        this.showAlert();
                        this.syncUpdateValSelTx('vacio');            

                          let config = {
                            headers: {
                              token: this.token,
                            },
                          };

                              this.nota.nombre = "tx-entrega";
                                this.nota.descripcion = "Tx: " +this.tx.IMPORTEMONEDA + " " + this.oferta.MONEDAOFERTA + " 🔄 " + this.tx.CADENARED + this.tx.IMPORTECOMPRA + " USDT. " +
                                this.f_EliminarTx.txts[this.svl()][1].vl;

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
                                  this.mensaje.texto = this.f_EliminarTx.txts[this.svl()][2].vl;
                                  this.showAlert();
                                  this.tx.length = 0; // borramos la tx de memoria 
                                  router.push({ name: "About" });                 
                                })
                                .catch((e) => {
                                  console.log(e.response);
                                });

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

        } else { // confirmaciones menor que 5

                this.mensaje.color = "danger";
                this.mensaje.texto = this.conf_idl + " Conf.," + this.f_EliminarTx.txts[this.svl()][3].vl;
                this.showAlert(); 
                this.entrega_lista = 'NO';
                this.timerCountfin = 600; 
        }

        }); // cierrre axios del get TX

        } // emitida Tx ID

    },
    Impago() {
        // requerir confirmación y advertir
        // eliminar en transac y en chats de tx
        if (this.tx.PAGO_COMPRADOR === "✅") {
          if (this.tx.COBRO_VENDEDOR === "⏳") {
            this.mensaje.color = "warning";
            this.mensaje.texto =
              this.f_Impago.txts[this.svl()][0].vl;
            this.showAlert();

            Swal.fire({
              title: this.f_Impago.swf1[this.svl()][0].vl,
              html: "<div align='left'><b>"+this.f_Impago.swf1[this.svl()][1].vl+":</b></div>" +
                "<div style='color:seagreen'>" +
                this.tx.IMPORTEMONEDA +
                " " +
                this.oferta.MONEDAOFERTA +
                "<br><br>" +
                "</div>" +
                "<div align='left'><b>"+this.f_Impago.swf1[this.svl()][2].vl+": </b></div>" +
                "<div style='color:seagreen'>" +
                this.oferta.GRUPOBANCO +
                " - " +
                this.oferta.NOMBANCO +
                "<br>" +
                "</div>" +
                "<br>" +
                "<div align='left'><b> "+this.f_Impago.swf1[this.svl()][3].vl+".</b></div>",
              icon: "question",
              showCancelButton: true,
              confirmButtonColor: "seagreen",
              cancelButtonColor: "tomato",
              confirmButtonText: this.f_Impago.swf1[this.svl()][4].vl,
              cancelButtonText: this.f_Impago.swf1[this.svl()][5].vl,
            }).then((result) => {
              if (result.value) {
                Swal.fire(
                  this.f_Impago.swf2[this.svl()][0].vl,
                  this.f_Impago.swf2[this.svl()][1].vl,
                  "success"
                );

                //  grabar momentum a arbitraje en db tx
                //  cabecera token
                let config = {
                  headers: {
                    token: this.token,
                  },
                };
                this.tx.TIMELINE = "Arbitraje";
                this.tx.DIRARBITRAJE = this.User.ARBITRAJE;                
                this.axios
                  .put(`/upt-tx/${this.tx._id}`, this.tx, config)
                  .then((res) => {
                    this.mensaje.color = "success";
                    this.mensaje.texto = this.f_Impago.txts[this.svl()][1].vl;
                    this.showAlert();

                    // alerta al comprador tx  ** OJO AL ID comprador partes 6 y 7 ***
                    this.nota.nombre = "tx-incidencia";
                    this.nota.descripcion = "Tx: " +this.tx.IMPORTEMONEDA + " " + this.oferta.MONEDAOFERTA + " 🔄 " + this.tx.CADENARED + this.tx.IMPORTECOMPRA + " USDT. " +
                      this.f_Impago.txts[this.svl()][2].vl;

                    this.axios
                      .post(
                        `/nueva-a-otro/${this.tx.ID_COMPRADOR},${this.tx.EMAIL_COMPRADOR}`,
                        this.nota,
                        config
                      )
                      .then((res) => {
                        /*                         
                          // vaciar la tx en memoria en este front vendedor ent txs y luego en tx
                          const index = this.txs.findIndex(
                            (item) => item._id === this.tx._id
                          );
                          this.txs.splice(index, 1);
*/
                        this.nota.nombre = "";
                        this.nota.descripcion = "";
                        this.mensaje.color = "success";
                        this.mensaje.texto = this.f_Impago.txts[this.svl()][3].vl;
                        this.showAlert();

                        router.push({
                          name: "About"
                        }).catch((err) => {}); // mejor mandar a nueva ruta Arbitro
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
              router.push({ name: "About" }).catch((err) => {});   
              }
            });
          }
        }
      },
      rechazarSolicitud() {
        // requerir confirmación y advertir
        // eliminar en transac y en chats de tx
        if (this.tx.RAWTXSIGNEDVEND === "⏳") {
          if (
            (this.tx.CONTRATOSICOMPRADOR === "✅")
          ) {
            this.mensaje.color = "warning";
            this.mensaje.texto =
              this.f_rechazarSolicitud.txts[this.svl()][0].vl;
            this.showAlert();

            Swal.fire({
              title: this.f_rechazarSolicitud.swf1[this.svl()][0].vl,
              html: "<div align='left'><b>"+this.f_rechazarSolicitud.swf1[this.svl()][1].vl+":</b><br></div>" +
                "<div style='color:seagreen'>" +
                this.tx.IMPORTECOMPRA +
                " USDT" +
                "</div>" +
                "<br>" +
                "<div align='left'><b>"+this.f_rechazarSolicitud.swf1[this.svl()][2].vl+":</b></div>" +
                "<div style='color:seagreen'>" +
                this.tx.IMPORTEMONEDA +
                " " +
                this.oferta.MONEDAOFERTA +
                "<br><br>" +
                "</div>" +
                "<div align='left'><b>"+this.f_rechazarSolicitud.swf1[this.svl()][3].vl+": </b></div>" +
                "<div style='color:seagreen'>" +
                this.oferta.GRUPOBANCO +
                " - " +
                this.oferta.NOMBANCO +
                "<br>" +
                "</div>" +
                "<br>" +
                "<div align='left'><b>"+this.f_rechazarSolicitud.swf1[this.svl()][4].vl+"</b></div>", // falta añadir checkbox de aceptacion de contrato de compra-venta y mostrarlo
              icon: "question",
              showCancelButton: true,
              confirmButtonColor: "seagreen",
              cancelButtonColor: "tomato",
              confirmButtonText: this.f_rechazarSolicitud.swf1[this.svl()][5].vl,
              cancelButtonText: this.f_rechazarSolicitud.swf1[this.svl()][6].vl,
            }).then((result) => {
              if (result.value) {
                Swal.fire(
                  this.f_rechazarSolicitud.swf2[this.svl()][0].vl,
                  this.f_rechazarSolicitud.swf2[this.svl()][1].vl,
                  "success"
                );
                //  eliminar en db tx
                //  cabecera token
                let config = {
                  headers: {
                    token: this.token,
                  },
                };
                this.axios
                  .delete(`/eliminar-tx/${this.tx._id}`, config)
                  .then((res) => {
                    this.mensaje.color = "success";
                    this.mensaje.texto =
                      this.f_rechazarSolicitud.txts[this.svl()][1].vl;
                    this.showAlert();

                    // alerta al comprador tx y chat eliminados ** OJO AL ID comprador partes 6 y 7 ***
                    this.nota.nombre = "tx-solicitud";
                    this.nota.descripcion = "Tx: " +this.tx.IMPORTEMONEDA + " " + this.oferta.MONEDAOFERTA + " 🔄 " + this.tx.CADENARED + this.tx.IMPORTECOMPRA + " USDT. " +
                      this.f_rechazarSolicitud.txts[this.svl()][2].vl;

                    this.axios
                      .delete(`/eliminarchat-tx/${this.tx._id}`, config) // tambien elimina files backend
                      .then((res) => {
                        /*
                        console.log(
                          "eliminacion chat number of matched documents:.." +
                            res.data.n
                        );
                        console.log(
                          "eliminacion chat ok – 1 if the operation was successful:.." +
                            res.data.ok
                        );
                        */
                        //    console.log(
                        //      "eliminacion chat number of deleted documents:.." +
                        //        res.data.deletedCount
                        //    );

                        this.mensaje.color = "success";
                        this.mensaje.texto = this.f_rechazarSolicitud.txts[this.svl()][3].vl;
                        this.showAlert();

                        this.axios
                          .post(
                            `/nueva-a-otro/${this.tx.ID_COMPRADOR},${this.tx.EMAIL_COMPRADOR}`,
                            this.nota,
                            config
                          )
                          .then((res) => {
                            // vaciar la tx en memoria en este front vendedor ent txs y luego en tx
                            const index = this.txs.findIndex(
                              (item) => item._id === this.tx._id
                            );
                            this.txs.splice(index, 1);
                            // anallizar txs si queda una mas de una o ninguna y actuar en consecuencia txs.length
                            // estudiar la posibilidad de iniciar Tx desde el inicio
                            // podria ser el ayuda al about en blanco y volver a tx desde el inicio
                            this.nota.nombre = "";
                            this.nota.descripcion = "";
                            this.mensaje.color = "success";
                            this.mensaje.texto = this.f_rechazarSolicitud.txts[this.svl()][4].vl;
                            this.showAlert();

                            router.push({
                              name: "About"
                            }).catch((err) => {});
                          })
                          .catch((e) => {
                            console.log(e.response);
                            if (e.response.data.error.errors.nombre.message) {
                              this.mensaje.texto =
                                e.response.data.error.errors.nombre.message;
                            } else {
                              this.mensaje.texto =
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

                    // this.show1 = false; // puede ser activar lado vendedor desactivar comprador
                  })

                  .catch((e) => {
                    console.log(e.response);
                  });
              }
            });
          }
        }
      },
      pasteTx2(valor) {
        if ( valor.substr(0, 1) === '⏳' ) {
          //console.log(valor);
          //console.log(valor.length);          
          let largo = valor.length;
          //console.log(valor.substr(1, largo));
          valor = valor.substr(1, largo);
        }
        this.isPaste = true;        
        if (this.isPaste) {
          this.mensaje.color = "success";
          this.mensaje.texto = this.f_paste.txts[this.svl()][0].vl + valor;
          this.showAlert();
          this.isPaste = false;
          if (valor) {
            this.sign_check_save_arb_TxMf2Mn(valor);
          }
        }
      },     
    leeUser() {
      // leer id, address, emails user on line
      let adr = this.nomuser; 
      let addressB64;
      addressB64 = Buffer.from(adr).toString("base64");
      this.axios
        .get(`/seekUser/${addressB64}`)
        .then((res) => { // usuario
         this.User = res.data;
         this.mgmfredu = this.User.DIRMULTIFIRMA_FIANZALN;         
         this.getsaldo(this.User.DIRMULTIFIRMA_FIANZALN);
         this.getsaldott(this.User.DIRMULTIFIRMA_FIANZALN);                 
        })
        .catch((e) => {});
    },
    async guardarUser() {     
          let config = {
            headers: {
                  token: this.token,
            },
          };
        //  console.log("datos User a guardar...->"+this.User.NOMBREUSUARIO);
        //  console.log("datos User a guardar...->"+this.User.REDEEMSCRIPT_FIANZALN);
        //  console.log("datos User a guardar...->"+this.User.DIRMULTIFIRMA_FIANZALN);
        //  console.log("datos User a guardar...->"+this.User.MF_SCRIPTPUBKEY_FIANZALN);                                     
        await this.axios
            .put(`/usuario/${this.User._id}`, this.User, config)
            .then((res) => {
              this.createdopenraw = "SI";
            //  console.log("guardado User y this.createdopenraw Si updated");             
              this.mensaje.color = "success";
              this.mensaje.texto = this.f_guardauser.mtx[this.svl()][0].vl;       
              this.showAlert();
            })
            .catch((e) => {
            //  console.log(e.response);                     
              this.mensaje.texto = "Error";           
              this.mensaje.color = "danger";
              this.showAlert();
            });
      },
      manualCobro() {
        // actualizar db, alertas, socket, notificaciones y timeline
        //   console.log('llego a la funcion manual cobro ' + this.tx.RAWTXUNSIGNED);
        if (
          (this.tx.COBRO_VENDEDOR === "⚖️✅") &
          (this.tx.TIMELINE === "5.Cobro")
        ) {
          //    console.log('llego a la funcion manual cobro y entro en el if');
          this.mensaje.color = "success";
          this.mensaje.texto =
            this.f_updateCobro.txts[this.svl()][0].vl;
          this.showAlert();
          //tambien un importaddress "this.tx.DIRMULTIFIRMA" "" false actualize relof en nodo
          //this.importaddress_sinrescan(this.tx.DIRMULTIFIRMA);
          if (this.tx.CADENARED === '₮') this.sendtx();                   
        }
      },
      updateCobro() {
        // actualizar db, alertas, socket, notificaciones y timeline
        this.mensaje.color = "success";
        this.mensaje.texto = this.f_updateCobro.txts[this.svl()][1].vl;
        this.showAlert();
        this.tx.TIMELINE = "5.Cobro";
        // actualizar tx db *****************************************
        if (this.tx.COBRO_VENDEDOR === "✅") {
          //tambien un importaddress "this.tx.DIRMULTIFIRMA" "" false actualize relof en nodo

          // otroS 2 axios aqui dentro updatetx Y MJES
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
                this.f_updateCobro.txts[this.svl()][2].vl;
              this.showAlert();

              // alerta  al comprador cobro recibido ratificado vendedor***
              this.nota.nombre = "tx-cobro";
              this.nota.descripcion = "Tx: " +this.tx.IMPORTEMONEDA + " " + this.oferta.MONEDAOFERTA + " 🔄 " + this.tx.CADENARED + this.tx.IMPORTECOMPRA + " USDT. " +
                this.f_updateCobro.txts[this.svl()][2].vl;

              this.axios
                .post(
                  `/nueva-a-otro/${this.tx.ID_COMPRADOR},${this.tx.EMAIL_COMPRADOR}`,
                  this.nota,
                  config
                )
                .then((res) => {
                  // ejecutar funcion decryt Tx y send Tx
                  if ( this.tx.CADENARED === '₮' ) { this.sendtx(); }                  
                  this.nota.nombre = "";
                  this.nota.descripcion = "";
                  this.mensaje.color = "success";
                  this.mensaje.texto = this.f_createnotrawTxArb_Ln.txts[this.svl()][1].vl;
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
          // notificar que no se ha seleccionado el checkbox como recibido
          this.mensaje.color = "danger";
          this.mensaje.texto = this.f_updateCobro.txts[this.svl()][3].vl;
          this.showAlert();
        }
      },
      sendtx() {
        //desencryptar, enviar Tx y grabar Tx ID
        let entrega_ok = 'NO';
        if ( this.tx.IDTX_ENTREGA !== '⏳' & this.tx.IDTX_ENTREGA !== null ) entrega_ok = 'SI';
        //        if ( this.tx.LNPPAYMENTREQ_ENTREGA !== '⏳' & this.tx.LNPPAYMENTREQ_ENTREGA !== null ) entrega_ok = 'SI';       
        if ( entrega_ok === 'NO' ) {
            let config = {
              headers: {
                token: this.token,
              },
            };
        this.axios
          .get(`/get-tx/${this.tx._id}`, config)
          .then((res) => {           
            //console.log("leido en result  : " +res.data.RAWTXSIGNEDARB);  
            let decryptedRAWTXSIGNEDARB = res.data.RAWTXSIGNEDARB; 
              this.axios
                .get(`/rpc-sendrawtransaction/${decryptedRAWTXSIGNEDARB}`, config)
                .then((res) => {
                  let resp = res.data;
                  //console.log("resultado del sendrawtransaction..." + resp);
                  this.tx.IDTX_ENTREGA = resp;
                  this.tx.TIMELINE = "6.Entrega";
                  this.tx.updatedat = Date.now; // fecha fin tx para correr eliminación max 48h
                  this.timerCountfin = 600;
                  // axios put tx en db
                  let config = {
                    headers: {
                      token: this.token,
                    },
                  };
                  this.axios
                    .put(`/upt-tx/${this.tx._id}`, this.tx, config)
                    .then((res) => {
                      this.upd_docscomp('SENT')
                      // router.push({ name: "About" });                      
                    })
                    .catch((e) => {});
                })
                .catch((e) => {});

              })
              .catch((e) => {
                console.log(e.response);
              });
        } else {
                this.mensaje.color = "danger";
                this.mensaje.texto = this.f_EliminarTx.txts[this.svl()][3].vl;
                this.showAlert();          
        }          

      },      
      check_noother_tx_withraw() {
       // console.log(this.User.RETRAWTXSIGNEDARB);
      if (this.User.RETRAWTXSIGNEDARB === '⏳') {

        // check_none_retirorawrx *********falta falta falta ******
        let txsss = [];
        // todas las txs donde sea comprador o vendedor
        let config = {
          headers: {
            token: this.token,
          },
        };

        this.axios
          .get("/leer-transac", config)
          .then((res) => {
            txsss = res.data; // todas las tx este como comprador o vendedor, ojo orden antiguedad       
              //primero filtramos solo las que sean btc o lightning
                 //console.log(txsss);    
              for (var i = 0; i < txsss.length; i++) {
                     // console.log("dentro del for...."+txsss[i].DOCS_COMPRADOR);
                      if (
                        ( txsss[i].VENDEDOR !== this.nomuser | txsss[i].SIZERAW === 0 | txsss[i].DOCS_COMPRADOR === '⏳')
                      ) {
                        txsss.splice(i, 1);
                        i = i - 1;
                      } else { // si garantia ocupada
                        // console.log('no eliminar'+i)
                        //console.log(txsss[i]);
                        if (txsss[i].RAWTXUNSIGNED !== '⏳' | txsss[i].SIZERAW !== 0) {
                          // mje ventana no podemos generar tx respaldo hasta fin otra ts en curso
                          Swal.fire(
                            this.f_rechazarSolicitud.swf3[this.svl()][0].vl,
                            this.f_rechazarSolicitud.swf3[this.svl()][1].vl + "Tx: " +txsss[i].IMPORTEMONEDA + " " + txsss[i].MONEDAOFERTA + " 🔄 " + txsss[i].CADENARED + txsss[i].IMPORTECOMPRA + " . ",
                            "warning"
                          );                          
                            return 'nofree'
                        } else {                        
                            return 'free'
                        }
                      }
                      //console.log(txsss.length); 
                      if (txsss.length === 0) { // garantia no ocupada
                            if ( this.tx.SIZERAW === 0 ) { 
                            this.createrawTxMf2Mn();
                            }                         
                      }                      
              }
              return 'free'
          })
          .catch((e) => {
            console.log(e);
          });
          
      } else { // hay retiro del vendedor en curso
              Swal.fire(
                  this.f_rechazarSolicitud.swf3[this.svl()][0].vl,
                  this.f_rechazarSolicitud.swf3[this.svl()][1].vl + this.f_rechazarSolicitud.swf3[this.svl()][2].vl,
                      "warning"
              );                          
              return 'nofree'
      }    
      },      
      toTstamp(strDate){
        let datum = Date.parse(strDate);
        return datum/1000;
      },       
      upd_docscomp(actsino) {

           if (this.User.LOCKTIME_RAWTXOPEN !== 2130000000) { //implica hay retiro seguridad y vto de mfmg a chequear
            //console.log(this.User.LOCKTIME_RAWTXOPEN);
            let vtomfmg = this.User.LOCKTIME_RAWTXOPEN;
            //console.log(parseInt(this.toTstamp(this.tx.FECHA_INIC).toFixed()));
            let fechatx = parseInt(this.toTstamp(this.tx.FECHA_INIC).toFixed());
            //  fechatx =  1650726346;
            //  fechatx = 1651071946; //dia 27/4
            //  fechatx = 1650726346; //dia 23/4           
            var diastovto = (vtomfmg - fechatx) / 86400;
            //console.log(diastovto);                     
           } else {
            var diastovto = 365*15; 
           }

        let msjtosend = "";
         if (actsino === "si") {
                     
            if ( diastovto > 6) {

            this.tx.DOCS_COMPRADOR = "✅";
               // creamos rawtx para averiguar y grabar SIZERAW PERO SOLO SI NO HAY TX OTRA TX DEL VENDEDOR EN CURSO          
              if ( this.tx.SIZERAW === 0 & this.check_noother_tx_withraw() === 'free' ) {
               this.createrawTxMf2Mn();
              }            
            msjtosend = this.RECHAZAR_SOLICITUD.mtx[this.svl()][2].vl;

            } else {

              //console.log(" no puede aceptar, debe generar nueva multigarantia" + diastovto + this.vtomf.mtx[this.svl()][0].vl);

                    if (diastovto < 0) { // vencido

                    diastovto = diastovto * -1;

                          Swal.fire(
                            this.vtomf.mtx[this.svl()][0].vl,
                            this.vtomf.mtx[this.svl()][1].vl
                            + diastovto.toFixed() + this.vtomf.mtx[this.svl()][2].vl
                            ,
                            "warning"
                          );
                          router.push({name: 'Perfil'}); 

                    } else { // sin vencer, faltan menos de 6 dias                 

                          Swal.fire(
                            this.vtomf10d.mtx[this.svl()][0].vl,
                            this.vtomf10d.mtx[this.svl()][1].vl
                            + diastovto.toFixed() + this.vtomf.mtx[this.svl()][2].vl
                            ,
                            "warning"
                          ); 
                          router.push({name: 'Perfil'}); 

                    }               


            }

         } else {
           if (actsino === "SIZERAW") msjtosend = this.RECHAZAR_SOLICITUD.mtx[this.svl()][3].vl + this.tx.SIZERAW;
           if (actsino === "RAWTXUNSIGNED") msjtosend = this.RECHAZAR_SOLICITUD.mtx[this.svl()][4].vl;
           if (actsino === "RAWTXSIGNEDARB") msjtosend = this.RECHAZAR_SOLICITUD.mtx[this.svl()][5].vl;
           if (actsino === "SENT") msjtosend = this.Entregada_la_compra.vars[this.svl()][0].vl;           
         }
       
         if ( diastovto > 5) {          
                // actualizar tx db ************************
                let config = {
                  headers: {
                    token: this.token,
                  },
                };
                this.axios
                  .put(`/upt-tx/${this.tx._id}`, this.tx, config)
                  .then((res) => {
                    this.mensaje.color = "success";
                    this.mensaje.texto = msjtosend;
                    this.showAlert();
                    // alerta  al vendedor docs_comprador  aceptado***
                    this.nota.nombre = "tx-accept";
                     this.nota.descripcion = "Tx: " +this.tx.IMPORTEMONEDA + " " + this.oferta.MONEDAOFERTA + " 🔄 " + this.tx.CADENARED + this.tx.IMPORTECOMPRA + " USDT. " + msjtosend;                                       

                    this.axios
                      .post(
                        `/nueva-a-otro/${this.tx.ID_VENDEDOR},${this.tx.EMAIL_VENDEDOR}`,
                        this.nota,
                        config
                      )
                      .then((res) => {

                        this.axios
                          .post(
                            `/nueva-a-otro/${this.tx.ID_COMPRADOR},${this.tx.EMAIL_COMPRADOR}`,
                            this.nota,
                            config
                          )
                          .then((res) => {

                            //router.push({ name: "About" });

                          })
                          .catch((e) => {
                            console.log(e.response);
                          });

                      })
                      .catch((e) => {
                        console.log(e.response);
                      });

                  })
                  .catch((e) => {
                    console.log(e.response);
                  });
          }                 
      },      
      upd_conf() {
        //console.log('saldodisponible..'+this.saldodisponible);
        //console.log('aCopiQttymasCom..'+this.aCopiQttymasCom);        
        if (this.saldodisponible < ((this.tx.FEE  + 0.00000547)).toFixed(8) | this.saldodisponiblett < this.aCopiQttymasCom) {
          this.mensaje.color = "danger";
          this.mensaje.texto =
            this.f_upd_conf.txts[this.svl()][0].vl + this.saldodisponiblett
            + " BTC " + this.saldodisponible;
          this.showAlert();
        }

        if (
                (this.saldodisponible > ((this.tx.FEE + 0.00000547)).toFixed(8)) &
                (this.saldodisponiblett > this.aCopiQttymasCom) & 
                (this.tx.ACEP_VENDEDOR === "⏳")
        ) {

                this.nota.nombre = "tx-liberación";
                this.nota.descripcion = "Tx: " +this.tx.IMPORTEMONEDA + " " + this.oferta.MONEDAOFERTA + " 🔄 " + this.tx.CADENARED + this.tx.IMPORTECOMPRA + " USDT. " +
                  this.f_upd_conf.txts[this.svl()][1].vl;

                // actualizar tx db *****************************************

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
                      this.f_upd_conf.txts[this.svl()][2].vl;
                    this.showAlert();

                    // alerta  al vendedor fondos liberados 6 confirmaciones verificado***
                    // implica email en cadena, estudiar envio tambien a comprador
                    //this.nota.nombre = "tx-liberación";
                    this.nota.nombre = "tx-liberación"; 
                    if ( this.nomuser === this.tx.COMPRADOR ) this.nota.descripcion = "Tx: " + this.tx.IMPORTEMONEDA + " " + this.oferta.MONEDAOFERTA + " 🔄 " + this.tx.CADENARED + this.tx.IMPORTECOMPRA + this.f_upd_conf.txts[this.svl()][3].vl;
                    if ( this.nomuser === this.tx.VENDEDOR ) this.nota.descripcion = "Tx: " + this.tx.IMPORTEMONEDA + " " + this.oferta.MONEDAOFERTA + " 🔄 " + this.tx.CADENARED + this.tx.IMPORTECOMPRA + this.f_upd_conf.txts[this.svl()][4].vl;                    

                    this.axios
                      .post(
                        `/nueva-a-otro/${this.tx.ID_VENDEDOR},${this.tx.EMAIL_VENDEDOR}`,
                        this.nota,
                        config
                      )
                      .then((res) => {
                        this.mensaje.color = "success";
                        this.mensaje.texto = this.f_EliminarTx.txts[this.svl()][2].vl;;
                        this.showAlert();

                        this.axios
                          .post(
                            `/nueva-a-otro/${this.tx.ID_COMPRADOR},${this.tx.EMAIL_COMPRADOR}`,
                            this.nota,
                            config
                          )
                          .then((res) => {
                            this.mensaje.color = "success";
                            this.mensaje.texto = this.f_createnotrawTxArb_Ln.txts[this.svl()][1].vl;
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
                                this.f_createnotrawTxArb_Ln.txts[this.svl()][2].vl;;
                            }
                            this.mensaje.color = "danger";
                            this.showAlert();
                          });
                      })
                      .catch((e) => {
                        console.log(e.response);
                        if (e.response.data.error.errors.nombre.message) {
                          this.mensaje.texto =
                            e.response.data.error.errors.nombre.message;
                        } else {
                          this.mensaje.texto =
                            this.f_createnotrawTxArb_Ln.txts[this.svl()][2].vl;;
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
      alertacop() {
        this.mensaje.color = "success";
        this.mensaje.texto = this.f_alertac.txts[this.svl()][0].vl;
        this.showAlert();
      },
      alertacoparb() {
        this.mensaje.color = "success";
        this.mensaje.texto = this.f_alertac.txts[this.svl()][1].vl;
        this.showAlert();
      },
      llenarAceptacion() {
        this.signUp = !this.signUp;
        this.comisTxacomprador = this.tx.IMPORTECOMPRA * 0.0025;
        // console.log("this.comisTxacomprador..." + this.comisTxacomprador);
        this.aCopiQttymasCom = this.round2(
          parseFloat(this.tx.IMPORTECOMPRA) + this.comisTxacomprador
        );
       // console.log("this.aCopiQttymasCom..." + this.aCopiQttymasCom);
      },
      updateAceptada() {
        this.upd_conf();
      },
      round2(num) {
        if (num > 0) num = parseFloat(num).toFixed(20);       
        return +(Math.round(num + "e+2") + "e-2");
      },
      round8(num) {
        if (num > 0) num = parseFloat(num).toFixed(20);                  
        return +(Math.round(num + "e+8") + "e-8");
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

            //primero filtramos solo las que sean usdt             
          let txss = this.txs;
           for (var i = 0; i < txss.length; i++) {
               if (
                (txss[i].CADENARED === '₿' | txss[i].CADENARED === '⚡')
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
                this.f_leertxs.txts[this.svl()][0].vl + this.txs.length + this.f_leertxs.txts[this.svl()][1].vl;
              this.showAlert();
              this.leertx2(this.txs[0]);
            } else if (this.txs.length > 1) {
              this.mensaje.color = "success";
              this.mensaje.texto =
                this.f_leertxs.txts[this.svl()][0].vl + this.txs.length + this.f_leertxs.txts[this.svl()][1].vl;
              this.showAlert();
              this.leertx2(this.selectedselTXtt);               
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
      this.syncUpdateValSelTxtt(selddo);
      router.push({ name: "About" });       
      },
      leertx2(selddo) {
       if (this.selectedselTXtt !== 'vacio') {
        // aki // partiendo de la tx_id del seldo, buscar esa tx_id dentro de this.txs y actualizar el seldo con los valores de la txs[x] que sea..
        //console.log('selddo_id...'+selddo._id);
            const index = this.txs.findIndex(
                  (item) => item._id === selddo._id
            );
        selddo = this.txs[index]; 
        //console.log('selddo...'+selddo);
       }         
      this.syncUpdateValSelTxtt(selddo);  
       if (this.selectedselTXtt !== 'vacio') { 

        //solo de la tx seleccionada
        this.signUp = false;
        this.tx = selddo;
        this.leeUser(this.nomuser);
          if ( this.tx.IDTX_ENTREGA !== '⏳' & this.tx.IDTX_ENTREGA !== null ) { 
            this.timerCountfin = 600;
            this.EliminarTx(); 
            }               
        this.leeroferta(this.tx.ID_OFERTA);
        this.mensaje.color = "success";
        this.mensaje.texto = this.f_leertxs.txts[this.svl()][3].vl;
        this.showAlert();
        this.alerta();
        if (this.nomuser === this.tx.VENDEDOR) this.llenarAceptacion();                
       // this.joinServer();        
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
            this.manualCobro(); // comprobamos si cobro determinado por arbitro
          })
          .catch((e) => {
            console.log(e.response);
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
      async getsaldott(address) {
          let adr = address;
          let addressB64;
          addressB64 = Buffer.from(adr).toString("base64");
       try {          
          let response = await this.axios
            .get(`/rpc-getsaldott/${addressB64}`)
              this.saldott = response.data.balance;
              this.saldott = parseFloat(this.saldott);
              if (isNaN(this.saldott)) {
                this.saldott = 0;
              }
            //  console.log('**saldott**->'+this.saldott);
              this.getsaldoresptxstt();

            } catch (error) {console.log(); }
      },
      getsaldoresptxstt() {
        // get saldo total txs en curso
          // todas las txs donde sea comprador o vendedor
        let txs= [];
        let config = {  //  cabecera token
          headers: {
            token: this.token,
          },
        };
        //  console.log('tenemos el token ...'+this.token);
        this.axios
          .get("/leer-transac", config)
          .then((res) => {
            txs = res.data; // todas las tx este como comprador o vendedor, ojo orden antiguedad
            //console.log(txs.length);
            if (txs.length < 1) { // no hay tx en curso del user

              this.saldoresptxstt = 0;

            } else { // si hay tx en curso del user las sumamos mas el 0.25 del arbitraje% 
              this.saldoresptxstt = 0;
            //console.log(txs[0].IMPORTECOMPRA);
              for (var i = 0; i < txs.length; i++) {
                if (txs[i].VENDEDOR === this.nomuser & txs[i].RAWTXSIGNEDVEND !== "⏳" & txs[i].CADENARED !== "₮") { // solo las tx que este como vendedor
                    this.saldoresptxstt = this.saldoresptxstt + (txs[i].IMPORTECOMPRA * 1.0025);
                    this.saldoresptxstt = this.round8(this.saldoresptxstt);
                }
              }
            
            }
            //console.log(this.saldo);
            this.saldodisponiblett = this.round8(this.saldott-this.saldoresptxstt);
            //console.log(this.saldodisponible);
            if (this.saldodisponiblett < this.aCopiQttymasCom & this.tx.RAWTXSIGNEDVEND === "⏳" ) { 
              this.timerCount = 120;
            } else { // SI hay saldo disponible para crear Rawtx
        
            }
        })        
          .catch((e) => {console.log(e.response);});    

      },            
      async getsaldo(address) {
          let adr = address;
          let addressB64;
          addressB64 = Buffer.from(adr).toString("base64");
       try {          
          let response = await this.axios
            .get(`/rpc-getsaldo-lu/${addressB64}`)
              this.saldo = response.data;
              this.saldo = parseFloat(this.saldo);
              if (isNaN(this.saldo)) {
                this.saldo = 0;
              }
              console.log('**saldo**->'+this.saldo);
              this.getsaldoresptxs();

            } catch (error) {console.log(); }
      },      
      getsaldoresptxs() {
        // get saldo total txs en curso
          // todas las txs donde sea comprador o vendedor
        let txs= [];
        let config = {  //  cabecera token
          headers: {
            token: this.token,
          },
        };
        //  console.log('tenemos el token ...'+this.token);
        this.axios
          .get("/leer-transac", config)
          .then((res) => {
            txs = res.data; // todas las tx este como comprador o vendedor, ojo orden antiguedad
            //console.log(txs.length);
            if (txs.length < 1) { // no hay tx en curso del user

              this.saldoresptxs = 0;

            } else { // si hay tx en curso del user las sumamos mas el 0.25 del arbitraje% 
              this.saldoresptxs = 0;
            //console.log(txs[0].IMPORTECOMPRA);
              for (var i = 0; i < txs.length; i++) {
                if (txs[i].VENDEDOR === this.nomuser & txs[i].RAWTXSIGNEDVEND !== "⏳" & txs[i].CADENARED !== "₮") { // solo las tx que este como vendedor
                    this.saldoresptxs = this.saldoresptxs + (txs[i].IMPORTECOMPRA * 1.0025);
                    this.saldoresptxs = this.round8(this.saldoresptxs);
                }
              }
            
            }
            //console.log(this.saldo);
            this.saldodisponible = this.round8(this.saldo-this.saldoresptxs);
            //console.log(this.saldodisponible);
            if (this.saldodisponible < this.aCopiQttymasCom & this.tx.RAWTXSIGNEDVEND === "⏳" ) { 
              this.timerCount = 120;
            } else { // SI hay saldo disponible para crear Rawtx
        
            }
        })        
          .catch((e) => {console.log(e.response);});    

      },      

    },
    mounted() {
              this.tx=this.selectedselTXtt;      
              this.svl();      
              this.leertxs();
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
      background: linear-gradient(to bottom right, rgb(180, 214, 189), black);
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
    margin: 20;
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
    background: linear-gradient(to bottom, #d1e4da, #deece5);
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
      margin-top: 15px;
      margin-bottom: 25px;
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
      display: inline-flex;      

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
      overflow: auto;
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

  .sign-up {
    top: 1px;
    left: 0;
    margin-left: calc(50% - 25%);
    margin-right: calc(50% - 25%); 
    z-index: 2;
    opacity: 0;
    width: 100%;
    max-width: 480px;
    height: 99%;
    background: linear-gradient(to bottom right, rgb(255, 189, 189), rgb(133, 187, 101));
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

    .sign-up {
      transform: translateX(0%);
      opacity: 1;
      z-index: 3;
      animation: show 0.5s;
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
  
  #btcl {
    width: 35px;
    height: 25px;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 1px;      
    padding-bottom: 20px;        
    margin-left: -70px;
    margin-top: 70px;         
    color: rgb(138, 0, 0);
    background-color: black;
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

  #sube {
    margin-top: -65px;
    margin-left: 320px;
    color: grey;
    width: 25px;
    height: 40px;   

    a {
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 10px;
      padding-bottom: 10px;
      height: auto;
    }
  }

  #subehpk {  
    display: flex;
    margin-top: -50px;
    margin-left: 408px;
    color: grey;
    width: 25px;
    height: 40px;

    a {
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 10px;
      padding-bottom: 10px;
      height: auto;
    }
  }

  #subescan {
    display: flex;
    padding-bottom: 10px;
    margin-bottom: 15px;
    margin-top: -76px;
    margin-left: 363px;
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

  #suberight {
    display: flex;
    padding-bottom: 10px;
    margin-top: -33px;
    margin-left: -360px;
    color: grey;
    width: 22px;
    height: 30px;
    background: transparent;
  }

  #subeleft {
    display: flex;
    align-content: right;
    margin-top: -33px;
    margin-left: 370px;
    color: grey;
    width: 22px;
    height: 25px;
    background: transparent;
  }

  #bt_libera {
    img {
    margin-top: 18px;
    } 
    display: flex;
    margin-left: -16px;
    margin-top: 5px;
    width: auto;
    min-width: 430px;
    height: 80px;
    background: #2b8656;
    padding-bottom: 5px;
    padding-left: 5px;
    border-radius: 60px;
    font-size: 1rem;
    font-weight: bold;
    padding: 2.5px 2.5px;
    letter-spacing: 1px;
    text-transform: unset;

    .floating-label-group {
      margin-top: 5px;
      margin-bottom: 7.33px;
      min-width: 340px;
    }       
  }

  #bt_libera_ln {
    display: flex;    
    margin-left: -16px;
    margin-top: 5px;
    width: auto;
    min-width: 430px;     
    height: 50px;
    background: #2b8656;
    padding-bottom: 1px;
    padding-left: 5px;
    border-radius: 60px;
  }

  .blink-bg{
		color: #fff;
		animation: blinkingBackground 10s infinite;
	}
	@keyframes blinkingBackground{   
		0%		{ background-color: #e0ffe1;}
		20%		{ background-color: #b7d4ff;}
		40%		{ background-color: #ffc3c7;}
		60%		{ background-color: #97c2ff;}
		80% 	{ background-color: #80dfff;}
    100%	{ background-color: white;} 
	}
  #denegar {
    background: rgb(238, 114, 92);
  }

  #denegarl {
    background: rgb(238, 114, 92);
  } 

/* ajustes phone */
.img {
  max-width: 95%;
  height: auto;
}
#tittransacs {
  color:black;
}

#dirmulti {
  color:green;
  font-size: 20px;
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
    padding: 0.5px 15.5px;
    letter-spacing: 0.5px;
    min-height: 57.5px;
    font-size: 22px;        
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
  .sign-up {
    max-width: 360px; 
    margin-left: calc(50% - 50%);     
  }
  
h5 {font-size: 10px;};
#tittransacs {
  height: auto;      
  font-size: 20px;   
};

  #bt_libera {
    margin-left: -26px;
    min-width: 335px;
    max-width: 345px;
    .floating-label-group {
      margin-top: 5px;
      margin-bottom: 7.33px;
      min-width: 265px;
    }           
  }

  #bt_libera_ln {
    min-width: 340px;
    max-width: 350px;          
  }  

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
  #sube {
    margin-left: 312px;
  }
  #subehpk {
    margin-left: 285px;
  }
  /*falta comprobar los 3 pabajo*/
  #subescan {
    padding-bottom: 10px;
    margin-bottom: -15px;
    margin-top: -20px;
    margin-left: 150px;
  }
  #suberight {
    margin-left: -350px;
  }
  #subeleft {
    margin-left: 320px;
  }
  #dirmulti {
  font-size: 16px;
  }
  #inp_tx_firmada {
    color:black;
    min-width: 350px;
    display: flex;     
    margin-left: -7.5px;
    margin-right: 0px;    
    padding: 0.5px 5.5px;
    padding-top: 1.5px;
    min-height: 57.5px;
    font-size: 16px;               
}
  #btcl {     
    margin-left: -63px;
    margin-top: 67px;         
  }   
 
}  
</style>
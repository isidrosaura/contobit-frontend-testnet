<template>
  <div class="container">
    
      <h4 style='color:rgb(80, 80, 80)'><font-awesome-icon :icon="['fa', 'edit']" />{{titul.matrix[svl()][0].vl}}</h4>          
        <i><b> 
        <a :href="this.url + nomuser " target="_blank" style="color: green; font-size: 16px;">
        {{ nomuser }} </a>
        </b></i><br>
                <popper
                    :options= popoptionsb>
                    <div class="popper" style="margin-left: auto">                         
                        <span v-html="titul.matrix[svl()][1].vl"></span> 
                    </div>                
                    <b-button slot="reference" @click="listarUser()" class="btn-info m-1">
                        <font-awesome-icon :icon="['far', 'eye-slash']" />
                    </b-button>
                </popper>
                <popper
                    :options= popoptionsb>
                    <div class="popper" style="margin-left: auto">                         
                        <span v-html="titul.matrix[svl()][2].vl"></span> 
                    </div>                
                        <b-button slot="reference" @click="editarperfil()" class="btn m-1">
                          <font-awesome-icon :icon="['far', 'bell']" />
                          <span style="position:relative;top:-7px;margin-left:-10px;font-size:12px;">📧</span>
                        </b-button>
                </popper>                            
                <popper
                    :options= popoptionsb>
                    <div class="popper" style="margin-left: auto">                         
                        <span v-html="titul.matrix[svl()][3].vl"></span> 
                    </div>                
                    <b-button slot="reference" @click="editarSeguridad()" class="btn-warning m-1">
                      <font-awesome-icon icon="lock" />
                    </b-button>
                </popper>
                <popper
                    :options= popoptionsb>
                    <div class="popper" style="margin-left: auto">                         
                        <span v-html="titul.matrix[svl()][6].vl"></span> 
                    </div>                
                    <b-button slot="reference" @click="editarGarantias()" class="btn-warning m-1">
                      🔐
                    </b-button>
                </popper>                                      
                <popper
                    :options= popoptionsb>
                    <div class="popper" style="margin-left: auto">                         
                        <span v-html="titul.matrix[svl()][4].vl"></span> 
                    </div>                
                    <b-button slot="reference" @click="editarPreferencias()" class="btn-outline-primary m-1">
                      <font-awesome-icon icon="language" />
                    </b-button>
                </popper>
                <popper
                    :options= popoptionsb>
                    <div class="popper" style="margin-left: auto">                         
                        <span v-html="titul.matrix[svl()][4].vl"></span> 
                    </div>                
                    <b-button slot="reference" @click="editarBlockchain()" class="btn-outline-primary m-1">
                      <img
                      align="bottom"
                      style="margin-right:-5px;margin-left:-3px;"
                      src="https://www.contobit.com/imagens/cadena.png"
                      width="25px"
                      height="17.4px"
                    />
                    </b-button>
                </popper>                  
                <popper
                    :options= popoptionsb>
                    <div class="popper" style="margin-left: auto">                         
                        <span v-html="titul.matrix[svl()][5].vl"></span> 
                    </div>                
                    <b-button slot="reference" @click="eliminarUser()" class="btn-danger m-1">
                      <font-awesome-icon icon="trash" />
                    </b-button>
                </popper>                      
    <br>
   
     <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="mensaje.color"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
     >{{mensaje.texto}}</b-alert> 

        <!--/////////////////////////////////  VISUALIZAR PERFIL DE DIRECCION /////////////////////////-->
      <div v-if="verperfil">
        <div class="container ver-perfil" >
          
          <div class="col-12"><span v-html="vta_perfil.mtx[svl()][0].vl"></span><i><b> {{this.User.EMAILUSUARIO}}</b></i>
                <popper
                    trigger="clickToOpen"
                    :options= popoptionsb>
                    <div class="popper" style="margin-left: -160px">                         
                        <span v-html="vta_perfil.mtx[svl()][1].vl"></span> 
                    </div>                
                    <a slot="reference" class="btn">
                      <font-awesome-icon style="color:grey;font-size:18px;" :icon="['far', 'question-circle']" />
                    </a>
                </popper>           
          </div>                          
          <div class="col-12"><font-awesome-icon :icon="['far', 'bell']" /> <span v-html="vta_perfil.mtx[svl()][2].vl"></span> 
             <span v-if="User.ALERTEMAIL"><i><b><span v-html="vta_perfil.mtx[svl()][3].vl"></span></b></i></span>
             <span v-if="!User.ALERTEMAIL"><i><b><span v-html="vta_perfil.mtx[svl()][4].vl"></span></b></i></span>
          </div>                            
          <hr>
          
          <div class="col-12">{{vta_perfil.sec[svl()][0].vl}} 
             <span v-if="User.IPSHABITUALES"><i><b>{{vta_perfil.sec[svl()][1].vl}}</b></i></span>
             <span v-if="!User.IPSHABITUALES"><i><b>{{vta_perfil.sec[svl()][2].vl}}</b></i></span>
          </div>                              

          <div class="col-12">{{vta_perfil.secs[svl()][0].vl}}📌<i><b> {{this.User.IP1}}</b></i></div>
                           
          <div class="col-12">{{vta_perfil.secs[svl()][1].vl}}📌<i><b> {{this.User.IP2}}</b></i></div>
                                        
          <div class="col-12">{{vta_perfil.secs[svl()][2].vl}} 🟢<i><b> {{this.ip_conexion}}</b></i></div>
         <hr>
         <div class="col-12">{{vta_perfil.gart[svl()][0].vl}}</div>
         <i><b> <span style="font-size:14px;color:dodgerblue;">
           <a :href="this.url + User.DIRMULTIFIRMA_FIANZALN" target="_blank" style="font-size:14px;color:dodgerblue;">
           {{this.User.DIRMULTIFIRMA_FIANZALN}} </a>
           </span></b></i>
         <hr>
        <div>                                        
          <font-awesome-icon icon="language" />{{vta_perfil.pref[svl()][0].vl}}<br> <i>
             <b>
          <span v-if="User.PREFCADENA === true"><i><b> <span v-html="vta_perfil.pref[svl()][1].vl"></span></b></i></span>
          <span v-if="User.PREFCADENA === false"><i><b>{{vta_perfil.pref[svl()][2].vl}}  </b></i></span>                    
                    </b></i> 
          <br>
          {{vta_perfil.pref[svl()][3].vl}} 
          <span v-if="User.PREFIDIOMA === 1"><i><b>{{vta_perfil.pref[svl()][4].vl}}</b></i></span>
          <span v-if="User.PREFIDIOMA === 2"><i><b>{{vta_perfil.pref[svl()][5].vl}}</b></i></span>
          <span v-if="User.PREFIDIOMA === 3"><i><b><img
                      align="bottom"
                      src="https://www.contobit.com/imagens/senyera.jpeg"
                      width="20px"
                      height="17.4px"
                    /> {{vta_perfil.pref[svl()][6].vl}}</b></i></span> 
          <span v-if="User.PREFIDIOMA === 4"><i><b>{{vta_perfil.pref[svl()][7].vl}}</b></i></span>                             
          <br>
            {{vta_perfil.pref[svl()][8].vl}} <i><b>{{this.User.PREFDIVISA}}</b></i><br>                                         
          <br>
          <div class="col-12">{{vta_perfil.pref[svl()][9].vl}}
             <span v-if="selectedlang === 'ESP'">{{this.User.createdat | fecha_spa}}</span>
             <span v-if="selectedlang === 'ENG'">{{this.User.createdat | fecha_eng}}</span>
             <span v-if="selectedlang === 'CAT'">{{this.User.createdat | fecha_cat}}</span>
             <span v-if="selectedlang === 'PORT'">{{this.User.createdat | fecha_port}}</span>                                       
             </div>
        </div>        

       </div>   
      </div>
        <!--/////////////////////////////////  VISUALIZAR PERFIL DE DIRECCION /////////////////////////-->

    <!--///////////////////////////////////  EDITAR Alertas /////////////////////////////////////// -->   
        <div v-if="vereditarperfil">
          <form @submit.prevent="guardarUser()" class="container edit-perfil" action="#">

           <div> 
            <h3> <font-awesome-icon :icon="['far', 'bell']" /> {{edit_alert.mtx[svl()][0].vl}} </h3><br>

                      <b-form-checkbox
                        v-model="User.ALERTEMAIL"
                        value=true
                        unchecked-value=false
                        style="max-width: 340px;margin:auto;"
                      >{{edit_alert.mtx[svl()][1].vl}} </b-form-checkbox> <br>

               <div v-if="emailok === true" id="siokinput">                      
                      <span class="floating-label-group">
                      <span id="inp_prev">                
                        📧   
                      </span>                        
                      <input id="inp_solic" type="email" v-model="User.EMAILUSUARIO"
                        autocomplete="off" autofocus
                        @paste="Validateemail(User.EMAILUSUARIO)" @input="Validateemail(User.EMAILUSUARIO)" required />
				                <label class="floating-label">{{edit_alert.mtx[svl()][2].vl}}</label>
                        <popper
                            trigger="clickToOpen"
                            :options= popoptionsb>
                            <div class="popper_tl" style="margin-left: -180px">                         
                                <span v-html="edit_alert.mtx[svl()][3].vl"></span> 
                            </div>                
                            <a href="#" slot="reference">
                              <font-awesome-icon id="inp_in_hlp" :icon="['far', 'question-circle']" />
                            </a>
                        </popper>                          
			                </span>
                 </div>

                <div v-if="emailok === false" id="nookinput" class="shake">
                      <span class="floating-label-group">
                      <span id="inp_prev">                
                        📧   
                      </span>                        
                      <input id="inp_solic" type="email" v-model="User.EMAILUSUARIO"
                        autocomplete="off" autofocus
                        @paste="Validateemail(User.EMAILUSUARIO)" @input="Validateemail(User.EMAILUSUARIO)" required />
				                <label class="floating-label">{{edit_alert.mtx[svl()][2].vl}}</label>
                        <popper
                            trigger="clickToOpen"
                            :options= popoptionsb>
                            <div class="popper_tl" style="margin-left: -180px">                         
                                <span v-html="edit_alert.mtx[svl()][3].vl"></span> 
                            </div>                
                            <a href="#" slot="reference">
                              <font-awesome-icon id="inp_in_hlp" :icon="['far', 'question-circle']" />
                            </a>
                        </popper>                          
			                </span>
                 </div>
                                  
            <button class="outline-primary btn-success btn-block" type="submit">
                    <img
                      align="bottom"
                      src="https://www.contobit.com/imagens/userbtc.png"
                      width="25px"
                      height="17.4px"
                    />
                    <font color="black"></font>
                    <img /> {{edit_alert.mtx[svl()][4].vl}}
            </button>
           </div>          

          </form>
        </div>  
    <!--///////////////////////////////////FIN EDITAR PERFIL/////////////////////////////////////// -->        

    <!--///////////////////////////////////  EDITAR SEGURIDAD/////////////////////////////////////// -->   
        <div v-if="verseguridad">
          <form @submit.prevent="guardarSeguridad()" class="container edit-secur" action="#">

          <div> 
            <h3>{{edit_segur.mtx[svl()][0].vl}}</h3><br>

                      <b-form-checkbox
                        style="max-width: 340px;margin:auto;"                      
                        v-model="User.IPSHABITUALES"
                        value=true
                        unchecked-value=false
                        required
                      >
                      {{edit_segur.mtx[svl()][1].vl}}
                      <span v-if="User.IPSHABITUALES === 'true'"> 🔒</span>
                      <span v-if="User.IPSHABITUALES !== 'true'"> 🔓</span>
                      </b-form-checkbox><br>

            <div v-if="User.IPSHABITUALES">
                      <span class="floating-label-group">
                      <span id="inp_prev">                
                        IP   
                      </span>                        
                      <input id="inp_solic" type="text" v-model="User.IP1"
                        autocomplete="off" autofocus
                        @paste="ValidateIPaddress(User.IP1)" @input="ValidateIPaddress(User.IP1)" />
				                <label class="floating-label">{{edit_segur.mtx[svl()][2].vl}}</label>
                        <popper
                            trigger="clickToOpen"
                            :options= popoptionsb>
                            <div class="popper_tl" style="margin-left: -350px">                         
                                <span v-html="edit_segur.mtx[svl()][5].vl"></span> 
                            </div>                
                            <a href="#" slot="reference">
                              <font-awesome-icon id="inp_in_hlp" :icon="['far', 'question-circle']" />
                            </a>
                        </popper>                          
			                </span>                       
                      <span class="floating-label-group">
                      <span id="inp_prev">                
                        IP   
                      </span>                        
                      <input id="inp_solic" type="text" v-model="User.IP2"
                        autocomplete="off" autofocus
                        @paste="ValidateIPaddress(User.IP2)" @input="ValidateIPaddress(User.IP2)" />
				                <label class="floating-label">{{edit_segur.mtx[svl()][3].vl}}</label>
                        <popper
                            trigger="clickToOpen"
                            :options= popoptionsb>
                            <div class="popper_tl" style="margin-left: -350px">                         
                                <span v-html="edit_segur.mtx[svl()][5].vl"></span> 
                            </div>                
                            <a href="#" slot="reference">
                              <font-awesome-icon id="inp_in_hlp" :icon="['far', 'question-circle']" />
                            </a>
                        </popper>                          
			                </span>

            </div>                                    
            <button class="outline-primary btn-success btn-block" type="submit">
                    <img
                      align="bottom"
                      src="https://www.contobit.com/imagens/userbtc.png"
                      width="25px"
                      height="17.4px"
                    />
                    <font color="black"></font>
                    <img /> {{edit_segur.mtx[svl()][4].vl}}
            </button>
          </div>

          </form>
        </div>  
    <!--///////////////////////////////////FIN EDITAR SEGURIDAD/////////////////////////////////////// -->


    <!--///////////////////////////////////  EDITAR GARANTIAS/////////////////////////////////////// -->   
        <div v-if="vergarantias">
          <form @submit.prevent="guardarUser()" class="container edit-gart" action="#">

            <h3>{{edit_garant.mtx[svl()][0].vl}}</h3>
           
         <div class="col-12" style="font-size:14px;color:black;">{{vta_perfil.gart[svl()][0].vl}} :  
                <popper v-if="( this.saldo === 0 & this.saldo_tt === 0 & this.User.RETRAWTXSIGNEDARB === '⏳' & this.User.RETRAWTXSIGNEDVEND === '⏳' & this.User.IDTX_RETIRO === '⏳') "
                                  :options= popoptions>
                                  <div class="popper" style="margin-left:-75px;margin-bottom:-1px;"> 
                                    {{retir_gar.mtx[svl()][8].vl}} / Re{{retir_gar.mtx[svl()][8].vl}} {{vta_perfil.gart[svl()][0].vl}}!!                         
                                  </div>
                                    <span  slot="reference">           
                                    <a  
                                        style="display:flex;margin-top:-23px;margin-left:auto;margin-right:10px;margin-bottom:5px;max-width:25px;max-height:25px;padding:0px 1px 0px 1px;"
                                        href="#"
                                        class="btn btn-outline-primary"
                                        @click="gen_new_mgmf()"
                                        >
                                        ⚙️
                                    </a>
                                   </span>                                   
                  </popper> <br>            
             ₿·⚡ <span style="font-size:15px;color:dodgerblue;">{{saldo.toFixed(8)}}</span>  · 
             ₮ <span style="font-size:15px;color:dodgerblue;">{{saldo_tt.toFixed(2)}}</span>  </div>
         <i><b> <span style="font-size:14px;color:dodgerblue;"><a :href="this.url + User.DIRMULTIFIRMA_FIANZALN" target="_blank" style="font-size:14px;color:dodgerblue;">
           {{this.User.DIRMULTIFIRMA_FIANZALN}} </a></span></b></i>
                <div> 
                <popper
                    :options= popoptionsb>
                    <div class="popper" style="margin-left: auto">                         
                        <span v-html="titul_gar.matrix[svl()][0].vl"></span> 
                    </div>                
                    <b-button slot="reference" @click="editarRetiros()" class="btn-warning m-1">
                      ↪️
                    </b-button>
                </popper>
                <popper
                    :options= popoptionsb>
                    <div class="popper" style="margin-left: auto">                         
                        <span v-html="titul_gar.matrix[svl()][1].vl"></span> 
                    </div>                
                    <b-button slot="reference" @click="editarRetirodeSeguridad()" class="btn-warning m-1">
                      🔂
                    </b-button>
                </popper><br>
                </div>
            <div v-if="!verretiro &  !verretirodeseguridad">
            <span style="font-size:12px;color:dimgray;"> {{titul_gar.matrix[svl()][2].vl}}: </span>
            <textarea class="form-control" rows="1" style="margin-left:auto; margin-right:auto; padding-right:5px; display:flex; max-width:270px;min-height:45px;max-height:45px;background:#ECFFDC;" :placeholder="titul_gar.matrix[svl()][2].vl"
              v-model="this.User.REDEEMSCRIPT_FIANZALN" readonly></textarea>
                                 <popper :options= popoptions>
                                      <div class="popper" style="margin-left:-150px;">  
                                        {{titul_gar.matrix[svl()][3].vl}} 
                                      </div>                
                                      <span slot="reference" >
                                        <a  
                                        class="btn btn-outline-primary" style="display:flex;margin-top:-45px;margin-left:350px;margin-right:50px;margin-bottom:5px;max-width:25px;max-height:25px;padding: 3px 3px 3px 5px;" v-clipboard:copy="this.User.REDEEMSCRIPT_FIANZALN"
                                        @click="alertashow( titul_gar.matrix[svl()][4].vl )">
                                        <font-awesome-icon :icon="['far', 'copy']" /></a>
                                      </span>
                                 </popper>
                                 <popper :options= popoptions>
                                      <div class="popper" style="margin-left:-150px;">  
                                        {{titul_gar.matrix[svl()][5].vl}} 
                                      </div>                
                                      <span slot="reference" >
                                        <a 
                                        :href="'https://coinb.in/#verify'" 
                                        class="btn btn-outline-primary" style="display:flex;margin-top:-3px;margin-left:350px;margin-right:50px;margin-bottom:5px;max-width:25px;max-height:25px;padding: 0px 0px 0px 1px;" target="_blank">
                                        ☑️</a>
                                      </span>
                                 </popper>                                                
              <br>
            <span style="font-size:12px;color:dimgray;"> {{titul_gar.matrix[svl()][6].vl}}: </span>              
             <textarea class="form-control" rows="1" style="margin-left:auto; margin-right:auto; padding-right:5px; display:flex; max-width:270px;min-height:35px;max-height:35px;background:#ECFFDC;" placeholder="Script pub key"
              v-model="this.User.MF_SCRIPTPUBKEY_FIANZALN" readonly></textarea>
                                 <popper :options= popoptions>
                                      <div class="popper" style="margin-left:-150px;">  
                                        {{titul_gar.matrix[svl()][3].vl}} 
                                      </div>                
                                      <span slot="reference" >
                                        <a  
                                        class="btn btn-outline-primary" style="display:flex;margin-top:-20px;margin-left:350px;margin-right:50px;margin-bottom:5px;max-width:25px;max-height:25px;padding: 3px 3px 3px 5px;" v-clipboard:copy="this.User.MF_SCRIPTPUBKEY_FIANZALN"
                                        @click="alertashow(titul_gar.matrix[svl()][4].vl)">
                                        <font-awesome-icon :icon="['far', 'copy']" /></a>
                                      </span>
                                 </popper>                            
            <span style="font-size:13px;color:red;"> {{titul_gar.matrix[svl()][7].vl}}: </span> <br>
             <span v-if="selectedlang === 'ESP'">{{Tstamptomoment(this.User.LOCKTIME_RAWTXOPEN) | fecha_spa}}</span>
             <span v-if="selectedlang === 'ENG'">{{Tstamptomoment(this.User.LOCKTIME_RAWTXOPEN) | fecha_eng}}</span>
             <span v-if="selectedlang === 'CAT'">{{Tstamptomoment(this.User.LOCKTIME_RAWTXOPEN) | fecha_cat}}</span>
             <span v-if="selectedlang === 'PORT'">{{Tstamptomoment(this.User.LOCKTIME_RAWTXOPEN) | fecha_port}}</span> 
          </div>

          <div v-if="verretiro">
                     <!--///////// 
                       RETRAWTXSIGNEDARB RETRAWTXSIGNEDVEND           ********************  --> 
            <h5>↪️{{retir_gar.mtx[svl()][0].vl}}:  

                         <!--boton para alternar bitcoin o tether-------₮---₮-----₮------₮------------------>
                          <popper v-if="this.User.RETRAWTXSIGNEDARB === '⏳'"
                              :options= popoptions>
                              <div class="popper">                         
                                  {{sl_cadena.mt[svl()][2].vl}}                     
                              </div>               
                              <span slot="reference">
                                  <a
                                    class="btn-sm btn"
                                    @click="updateRetir()"
                                  >
                                    <span v-if="selectedretir"><img
                                      style="margin-right: 3px;margin-left: 1px;margin-bottom: 2px;"
                                      align="center"                  
                                      src="https://www.contobit.com/imagens/btccoin.png"
                                      width="28.8px"
                                      height="20.26px"
                                    ></span>
                                    <span v-if="!selectedretir">

                                      <img
                                      style="margin-right: 3px;margin-left: 1px;margin-bottom: 2px;"                              
                                      align="center"                  
                                      src="https://www.contobit.com/imagens/ttcoin.png"
                                      width="28.8px"
                                      height="20.26px"
                                    >
                                      <img
                                        style="margin-right: 3px;margin-left: 1px;margin-bottom: 2px;"
                                        align="center"                  
                                        src="https://www.contobit.com/imagens/btccoin.png"
                                        width="28.8px"
                                        height="20.26px"
                                      > 
                                    </span>                                                        
                                    <span style="color:grey;"><font-awesome-icon icon="caret-down" /> </span>
                                  </a>
                              </span>
                          </popper> 

            </h5>

                  <div v-if="this.User.RETRAWTXSIGNEDARB === '⏳' & this.User.RETRAWTXSIGNEDVEND === '⏳' & selectedretir">


                      <small><b-form-select id="bformselect1"  v-model="fee_tipo.mtx[svl()][0].vl" :options="don_min.text[svl()][0].vl" size="sm"
                        class="mt-3" @input="setfee()" style="width: 337px;" required>
                      </b-form-select></small><br />
                      <span style="font-size:17px;color:red;">{{this.User.FEEFORRETRAW}} Satoshis / byte</span>

                    <br>
                      <span class="floating-label-group">
                      <span id="inp_prevcant">₿</span>                         
                      <input id="inp_solic" type="text" v-model="cdadbtcretiro" autocomplete="off" autofocus @blur="cdadbtcretir()" @keyup.enter="cdadbtcretir()"
                        required />
				                <label class="floating-label" >{{C_dad.Cantidad[svl()][0].vl}} BTC {{C_dad.a_retirar[svl()][0].vl}}</label>
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

                    <button 
                    v-if="cdadbtcretiro > 0 & cdadbtcretiro > ((((this.User.FEEFORRETRAW * 650)+1)/100000000 ) * 2)
                    & this.saldo > cdadbtcretiro"
                    class="outline-primary btn-success btn-block"
                     style="margin-top:-10px;"                    
                     autocomplete="off" type="button" @click="check_none_tx_oncurse('₿')">
                            ⚙️ {{retir_gar.mtx[svl()][8].vl}} Tx
                    </button>

                  </div>

                  <div v-if="this.User.RETRAWTXSIGNEDARB === '⏳' & this.User.RETRAWTXSIGNEDVEND === '⏳' & !selectedretir">

                      <small><b-form-select id="bformselect1"  v-model="fee_tipo.mtx[svl()][0].vl" :options="don_min.text[svl()][0].vl" size="sm"
                        class="mt-3" @input="setfee()" style="width: 337px;" required>
                      </b-form-select></small><br />
                      <span style="font-size:17px;color:red;">{{this.User.FEEFORRETRAW}} Satoshis / byte</span>

                    <br>                   
                      <span class="floating-label-group"
                        style="margin-top:-10px;">
                      <span id="inp_prevcant">₮</span>                         
                      <input id="inp_solic" type="text" v-model="cdadusdtretiro" autocomplete="off" autofocus @blur="cdadusdtretir()" @keyup.enter="cdadusdtretir()"
                        required />
				                <label class="floating-label" >{{C_dad.Cantidad[svl()][0].vl}} USDT {{C_dad.a_retirar[svl()][0].vl}}</label>
                        <popper
                              trigger="clickToOpen"
                              :options= popoptionsb>
                              <div class="popper_tl" style="margin-left: -300px">                         
                                  <span v-html="hlp_cdad_usdt.mtx[svl()][0].vl"></span> 
                              </div>                
                              <a  href="#" slot="reference" >
                                <font-awesome-icon  id="inp_in_hlp" :icon="['far', 'question-circle']" />
                              </a>
                        </popper>                         
			                </span>

                      <span class="floating-label-group"
                        style="margin-top:-25px;">
                      <span id="inp_prevcant">₿</span>                         
                      <input id="inp_solic" type="text" v-model="cdadbtcretiro" autocomplete="off" autofocus @blur="cdadbtcretir()" @keyup.enter="cdadbtcretir()"
                        required />
				                <label class="floating-label" >{{C_dad.Cantidad[svl()][0].vl}} BTC {{C_dad.a_retirar[svl()][0].vl}}</label>
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

                    <button class="outline-primary btn-success btn-block"
                    v-if="cdadusdtretiro > 0 & this.saldo > (0.00000546 + (this.User.FEEFORRETRAW * 650)/100000000) & this.saldo_tt > 0 "                    
                     style="margin-top:-10px;"
                     autocomplete="off" type="button" @click="check_none_tx_oncurse('₮')">
                            ⚙️ {{retir_gar.mtx[svl()][8].vl}} Tx
                    </button>

                  </div>


                  <div v-if="(this.User.RETRAWTXSIGNEDARB !== '⏳' | this.User.RETRAWTXSIGNEDVEND !== '⏳') 
                  & this.User.IDTX_RETIRO === '⏳'
                  ">

                           {{Retiro_Entrega.mtx[svl()][0].vl}}:

                          <textarea class="form-control" rows="2" style="margin-left:auto; margin-right:auto; padding-right:5px; display:flex; max-width:270px;min-height:70px;max-height:120px;background:#ECFFDC;" 
                            :placeholder="Retiro_Entrega.mtx[svl()][0].vl" v-model="this.User.RETRAWTXSIGNEDARB"
                            readonly></textarea>
                          <popper
                                  :options= popoptionsb>
                                  <div class="popper" style="margin-left:-150px;">
                                    {{Retiro_Entrega.mtx[svl()][3].vl}} 
                                    <span
                                    v-html="Retiro_Entrega.mtx[svl()][0].vl"></span>                         
                                  </div>                
                                    <a  
                                        style="display:flex;margin-top:-60px;margin-left:350px;margin-right:50px;margin-bottom:5px;max-width:25px;max-height:25px;padding:3px 3px 3px 5px;"
                                        href="#"
                                        slot="reference"
                                        class="btn btn-outline-primary"
                                        v-clipboard:copy="this.User.RETRAWTXSIGNEDARB"
                                        @click="alertashow(titul_gar.matrix[svl()][4].vl)"
                                        >
                                        <font-awesome-icon :icon="['far', 'copy']" />
                                    </a>
                          </popper>
                          <popper
                                          :options= popoptionsb>
                                          <div class="popper" style="margin-left:-250px;" > 
                                            <span
                                            v-html="Mostrar_qrcode.vars[svl()][0].vl"></span>
                                            <span
                                            v-html="Retiro_Entrega.mtx[svl()][0].vl"></span>                       
                                          </div>                
                                            <a  href="#"
                                                slot="reference"
                                                >
                                                <a href="#open-modal16" class="btn btn-outline-primary" style="
                                                  display:flex;margin-top:-5px;margin-left:350px;margin-right:50px;margin-bottom:5px;max-width:25px;max-height:25px;padding:0px 4px 4px 4px;"><qrcode-vue :value="'qrcode'" :size="12"></qrcode-vue></a>
                                            </a>
                          </popper>
                                      <span id="open-modal16" class="modal-window" style="margin-right:0px;top:0px;">
                                          <div>
                                                Qr-code<a href="#" :title="Cerrar.mtx[svl()][0].vl" class="modal-close">❌</a><br>
                                                <small><font color=Black> {{Retiro_Entrega.mtx[svl()][0].vl}} :<br></font></small>
                                                <popper
                                                        :options= popoptionsb>
                                                        <div class="popper_tl" style="margin-right: 0px; " > 
                                                        <span
                                                        v-html="this.User.RETRAWTXSIGNEDARB"></span>      
                                                        </div>                
                                                        <a  href="#"
                                                            slot="reference"
                                                        >
                                                          <qrcode-vue :value="this.User.RETRAWTXSIGNEDARB" :size="250" level="H"></qrcode-vue>
                                                        </a>
                                                  </popper>
                                            </div>                        
                                        </span><br>

                      <div id="nookinput" class="shake" >
                        <span class="floating-label-group">
                        <span id="inp_prevcant" style="margin-right: -34px;margin-top: 32px;">
                          <popper
                                  trigger="clickToOpen"    
                                  :options= popoptionsl>
                                  <div class="popper_scanqr" style="margin-right: -340px;margin-top: -180px;">                         
                                      <qrcode-stream
                                        v-if="verqrget === true"
                                        @decode="onDecode_2signs" style="width: 298px; height: 298px"><span style="font-size:12px;">{{Retiro_Entrega.mtx[svl()][2].vl}}</span></qrcode-stream> 
                                  </div>                
                                  <a href="#" slot="reference" @click="verqrget = !verqrget">
                                    <popper
                                            :options= popoptions>
                                            <div class="popper" >                         
                                                <span v-html="Retiro_Entrega.mtx[svl()][5].vl"></span> {{Retiro_Entrega.mtx[svl()][2].vl}} 
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
                        style="padding-left:30px;padding-right:30px;"  v-model="User.RETRAWTXSIGNEDVEND" autocomplete="off" autofocus
                          @input="pasteTx2(User.RETRAWTXSIGNEDVEND)" required />
				                    <label class="floating-label" style="margin-left: 20px;">{{Retiro_Entrega.mtx[svl()][2].vl}}</label>

                          <popper
                                trigger="clickToOpen"
                                :options= popoptionsb>
                                <div class="popper_tl" style="margin-left: -300px">                         
                                    <span v-html="Retiro_Entrega.mtx[svl()][4].vl"></span> 
                                </div>                
                                <a  href="#" slot="reference" > 
                                  <font-awesome-icon id="inp_in_hlp" :icon="['far', 'question-circle']" />
                                </a>
                          </popper>                             
			                  </span>

                      </div>

                      <br>

                  </div>


                  <div v-if="(this.User.RETRAWTXSIGNEDARB !== '⏳' | this.User.RETRAWTXSIGNEDVEND !== '⏳') 
                  & this.User.IDTX_RETIRO !== '⏳'
                  ">

                        <font color="grey" size="4">{{Entregado__retiro.vars[svl()][0].vl}}:</font>
                        <strong>
                          <i>
                            <a v-bind:href="this.urltx + this.User.IDTX_RETIRO" target="_blank">
                              <h5><span id="tittransacs">{{
                                  this.User.IDTX_RETIRO | redutxid
                                }}...✅</span></h5>
                            </a>
                          </i>
                        </strong>

                          <popper
                                trigger="clickToOpen"
                                :options= popoptionsb>
                                <div class="popper_tl" style="margin-left: 0px;">                         
                                    <span v-html="Entregado__retiro.hlp_enviada[svl()][0].vl"></span> 
                                </div>                
                                <a  href="#" slot="reference" style="color:red; font-size:22px;">
                                  <font-awesome-icon :icon="['far', 'question-circle']" />
                                </a>
                          </popper>                         
                        <br />
                        <div v-if="timerCountfin > 0">
                          <font color="Gray" size="2">
                            {{Entregado__retiro.vars[svl()][1].vl}} ⏳ {{ this.timerCountfin }}
                            <CountDown :seconds="this.timerCountfin" />
                          </font>
                        </div>
                
                                <b-button
                                slot="reference" variant="outline-primary btn-success btn-block" @click="clean_retiro()">
                                  <font-awesome-icon icon="trash" /> {{Entregado__retiro.vars[svl()][2].vl}} ( {{conf_idl}} Conf.)
                                </b-button>                               

                        <br /> 

                  </div>


          </div>


          <div v-if="verretirodeseguridad">
                     <!--///////// 
                       RETRAWTXOPEN_LOCKTIME LOCKTIME_RAWTXOPEN           ********************  --> 
            <h5>🔂{{retir_gar.mtx[svl()][1].vl}}:</h5> 
                          <br> 
                          <popper v-if="(this.User.RETRAWTXOPEN_LOCKTIME !== '⏳' &  this.saldo > 0 & this.User.LOCKTIME_RAWTXOPEN !== 2130000000) "
                                  :options= popoptions>
                                  <div class="popper" style="margin-left:-250px;margin-bottom:-40px;"> 
                                    Re{{retir_gar.mtx[svl()][8].vl}}                         
                                  </div>
                                    <span  slot="reference">                        
                                    <a  v-if=" this.User.RETRAWTXOPEN_LOCKTIME !== '⏳' "
                                        style="display:flex;margin-top:-8px;margin-left:200px;margin-right:50px;margin-bottom:5px;max-width:25px;max-height:25px;padding:0px 1px 0px 1px;"
                                        href="#"

                                        class="btn btn-outline-primary"
                                        @click="re_createopenraw()"
                                        >
                                        ⚙️
                                    </a>
                                   </span>                                   
                          </popper><br>             

                  <div v-if="this.User.RETRAWTXOPEN_LOCKTIME !== '⏳' ">

                    <textarea class="form-control" rows="1" style="margin-left:auto; margin-right:auto; padding-right:5px; display:flex; max-width:270px;min-height:45px;max-height:45px;background:#ECFFDC;" :placeholder="titul_gar.matrix[svl()][2].vl"
                      v-model="this.User.RETRAWTXOPEN_LOCKTIME" readonly></textarea>
                                 <popper :options= popoptions>
                                      <div class="popper" style="margin-left:-150px;">  
                                        {{titul_gar.matrix[svl()][3].vl}} 
                                      </div>                
                                      <span slot="reference" >
                                        <a  
                                        class="btn btn-outline-primary" style="display:flex;margin-top:-45px;margin-left:350px;margin-right:50px;margin-bottom:5px;max-width:25px;max-height:25px;padding: 3px 3px 3px 5px;" v-clipboard:copy="this.User.RETRAWTXOPEN_LOCKTIME"
                                        @click="alertashow( titul_gar.matrix[svl()][4].vl )">
                                        <font-awesome-icon :icon="['far', 'copy']" /></a>
                                      </span>
                                 </popper>
                                 <popper :options= popoptions>
                                      <div class="popper" style="margin-left:-150px;">  
                                        {{titul_gar.matrix[svl()][5].vl}} 
                                      </div>                
                                      <span slot="reference" >
                                        <a 
                                        :href="'https://coinb.in/#verify'" 
                                        class="btn btn-outline-primary" style="display:flex;margin-top:-3px;margin-left:350px;margin-right:50px;margin-bottom:5px;max-width:25px;max-height:25px;padding: 0px 0px 0px 1px;" target="_blank">
                                        ☑️</a>
                                      </span>
                                 </popper>                                                
                    <br>                    

                    <span style="font-size:13px;color:black;"> {{titul_gar.matrix[svl()][8].vl}}:  <br>
                    <span v-if="selectedlang === 'ESP'">{{Tstamptomoment(this.User.LOCKTIME_RAWTXOPEN) | fecha_spa}}</span>
                    <span v-if="selectedlang === 'ENG'">{{Tstamptomoment(this.User.LOCKTIME_RAWTXOPEN) | fecha_eng}}</span>
                    <span v-if="selectedlang === 'CAT'">{{Tstamptomoment(this.User.LOCKTIME_RAWTXOPEN) | fecha_cat}}</span>
                    <span v-if="selectedlang === 'PORT'">{{Tstamptomoment(this.User.LOCKTIME_RAWTXOPEN) | fecha_port}}</span>
                    </span>                     

                  </div>

                  <div v-if="this.User.RETRAWTXOPEN_LOCKTIME === '⏳' & this.User.LOCKTIME_RAWTXOPEN === 2130000000">


                      
                        <input id="inp_tx_firmada" type="date" name="vto" 
                        style="padding-left:30px;padding-right:30px;"  v-model="vtoafecha" autocomplete="off" autofocus
                        @blur="savetofecha()"
                        @keyup.enter="savetofecha()"
                           required />    

                    <br>

                    <button class="outline-primary btn-success btn-block" autocomplete="off" type="button" @click="savetofecha()">
                            ⚙️ {{retir_gar.mtx[svl()][8].vl}} Tx
                    </button>

                  </div>

          </div>

          </form>
        </div>  
    <!--///////////////////////////////////FIN EDITAR GARANTIAS/////////////////////////////////////// -->


    <!--///////////////////////////////////  EDITAR PREFERENCIAS/////////////////////////////////////// -->   
        <div v-if="verpreferencias">
          <form @submit.prevent="guardarPref()" class="container edit-pref" action="#">

          <div> 
            <h3>¡ Editar preferencias !</h3>

                <img
                      align="bottom"
                      style="margin-right:-5px;margin-left:5px;"
                      src="https://www.contobit.com/imagens/cadena.png"
                      width="25px"
                      height="17.4px"
                    />
                <popper
                      :options= popoptions>
                      <div class="popper" style="margin-left: 0px">                         
                          <span v-html="edit_prefs.mtx[svl()][1].vl"></span> 
                      </div>                
                      <b-form-select slot="reference"
                       id="bformselect1"
                       v-model="User.PREFCADENA"
                       :options="optionscadena"
                       size="sl" class="col-12 m-2"
                       :select-size="1"                       
                       >
                      </b-form-select>
                </popper><br>

                <font-awesome-icon icon="language" /> 
                <popper
                      :options= popoptions>
                      <div class="popper" style="margin-left: 0px">                         
                          <span v-html="edit_prefs.mtx[svl()][2].vl"></span> 
                      </div>                
                      <b-form-select slot="reference"
                     id="bformselect2"
                     v-model="User.PREFIDIOMA"
                      :options="optionslang"
                       size="sl" class="col-12 m-2"
                       :select-size="1"                      
                       >
                    </b-form-select>
                </popper><br>        

                🪙  <popper
                      :options= popoptionsb>
                      <div class="popper" style="margin-left: 0px">                         
                          <span v-html="edit_prefs.mtx[svl()][3].vl"></span> 
                      </div>                
                      <b-form-select slot="reference"
                     id="bformselect3"
                     v-model="User.PREFDIVISA"
                      :options="optionsmon"
                       size="sl" class="col-12 m-2"
                       :select-size="1"                      
                       >
                    </b-form-select>
                </popper>
                                               
            <button class="outline-primary btn-success btn-block" type="submit">
                    <img
                      align="bottom"
                      src="https://www.contobit.com/imagens/userbtc.png"
                      width="25px"
                      height="17.4px"
                    />
                    <font color="black"></font>
                    <img /> Guardar
            </button>
          </div>

          </form>
        </div>  
    <!--///////////////////////////////////FIN EDITAR PREFERENCIAS/////////////////////////////////////// -->

    <!--///////////////////////////////////  EDITAR BLOCKCHAIN/////////////////////////////////////// -->   
        <div v-if="verblockchain">
          <form @submit.prevent="guardarPref()" class="container edit-blockc" action="#">

          <div> 
            <h3>¡ Editar blockchain contobit !</h3>

                <img
                      align="bottom"
                      style="margin-right:-5px;margin-left:5px;"
                      src="https://www.contobit.com/imagens/cadena.png"
                      width="25px"
                      height="17.4px"
                    />
                <popper
                      :options= popoptions>
                      <div class="popper" style="margin-left: 0px">                         
                          <span v-html="edit_prefs.mtx[svl()][1].vl"></span> 
                      </div>                
                      <b-form-select slot="reference"
                       id="bformselect1"
                       v-model="User.PREFCADENA"
                       :options="optionscadena"
                       size="sl" class="col-12 m-2"
                       :select-size="1"                       
                       >
                      </b-form-select>
                </popper><br>

                <p class="category">{{ timestamp }}</p>
                                               
            <button class="outline-primary btn-success btn-block" type="submit">
                    <img
                      align="bottom"
                      src="https://www.contobit.com/imagens/userbtc.png"
                      width="25px"
                      height="17.4px"
                    />
                    <font color="black"></font>
                    <img /> Guardar
            </button>
          </div>

          </form>
        </div>  
    <!--///////////////////////////////////FIN EDITAR BLOCKCHIAN/////////////////////////////////////// -->    
  </div>  
</template>
<script>
import axios from "axios";
import router from "../router";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import QrcodeVue from "qrcode.vue";
import CountDown from "@/components/CountDown.vue";
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
export default {
    name: "Perfil",
    components: {
      'popper': Popper,
       QrcodeVue,
       CountDown,
    },
  data() {
    return {
      timestamp: 0,
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
      optionslang: [
        {
          value: 1,
          text: "ESP",
        },
        {
          value: 2,
          text: "ENG",
        },
        {
          value: 3,
          text: "CAT",
        },
        {
          value: 4,
          text: "PORT",
        },
      ],
      optionsmon: [
        {
          value: "united-states-dollar",
          text: "USD",
        },
        {
          value: "euro",
          text: "EUR",
        },
        {
          value: "venezuelan-bolívar-soberano",
          text: "VES",
        },
        {
          value: "colombian-peso",
          text: "COP",
        },
        {
          value: "chilean-peso",
          text: "CLP",
        },
        {
          value: "brazilian-real",
          text: "BRL",
        },
        {
          value: "mexican-peso",
          text: "MXN",
        },
        {
          value: "argentine-peso",
          text: "ARS",
        },
        {
          value: "peruvian-nuevo-sol",
          text: "PEN",
        },
        {
          value: "russian-ruble",
          text: "RUB",
        },
        {
          value: "indian-rupee",
          text: "INR",
        },
        {
          value: "turkish-lira",
          text: "TRY",
        },
         {
          value: "iranian-rial",
          text: "IRR",
        },
         {
          value: "chinese-yuan-renminbi",
          text: "CNY",
        },                          
      ],
      selectedmoneda: 'united-states-dollar',
      placement: "down",    
      selectedcadena: 'Bitcoin',      
      optionscadena: [
        { value: true , text: 'Bitcoin' },
        { value: false , text: 'USDT' }              
      ],
      emailok: true,                 
      ip_conexion: "",
      haytxs: false,      
      verperfil: false,
      verseguridad: false,
      vergarantias: false,
      vereditarperfil: false,
      verpreferencias: false,
      verblockchain: false,
      verretiro: false,
      verretirodeseguridad: false,      
      fee_min: null,
      fee_eco: null,
      fee_rec: null,                        
      fee_max: null,
      cdadbtcretiro: null,
      cdadusdtretiro: null,      
      saldo: 0,
      saldolu: 0,
      saldolag: 0,
      saldo_tt: 0,                 
      tx2firmas: null,      
      verqrget: false,
      isPaste: false,
      vtoafecha: this.to1month(),
      timerCountfin: 0,
      conf_idl: 0,
      entrega_lista: "NO",                                                          
      User: [],
      selectedretir: true,
      url: "https://blockstream.info/testnet/address/",
      urltx: "https://blockstream.info/testnet/tx/",      
      notas: [],
      mensaje: {color: 'warning', texto: ''},
      dismissSecs: 5,
      dismissCountDown: 0,
      // siguen variables para idiomas parte html 
      C_dad: {
       Cantidad: [
          [{ vl: 'Cantidad'}],
          [{ vl: 'Amount' }],
          [{ vl: 'Quantitat' }],
          [{ vl: 'Quantidade' }],                                               
            ],
       a_retirar: [
          [{ vl: 'a retirar'}],
          [{ vl: 'to withdraw' }],
          [{ vl: 'a retirar' }],
          [{ vl: 'a retirar' }],                                               
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
      Fecha: {
       mtx: [
          [{ vl: ' Fecha '}],
          [{ vl: ' Date ' }],
          [{ vl: ' Data ' }],
          [{ vl: ' Encontro ' }],                                               
            ],                                 
      },                  
      hlp_cdad_btc: {
       mtx: [
          [{ vl: '<br><b> Cantidad (BTC a retirar):</b><br> Introduzca en esta casilla la cantidad de bitcoins a retirar. <br> <br>'}],
          [{ vl: '<br><b> Amount (BTC to withdraw): </b> <br> Enter in this box the amount of bitcoins to withdraw. <br> <br>' }],
          [{ vl: '<br><b> Quantitat (BTC a retirar):</b><br> Introduïu en aquesta casella la quantitat de bitcoins a retirar. <br> <br>' }],
          [{ vl: '<br><b> Quantidade (BTC para retirar):</b><br> Digite nesta caixa a quantidade de bitcoins a retirar. <br> <br>' }],                                               
            ],                      
      },
      hlp_cdad_usdt: {
       mtx: [
          [{ vl: '<br><b> Cantidad (USDT a retirar):</b><br> Introduzca en esta casilla la cantidad de Tethers a retirar.<br> (Omni Tx => Min. 0.00000546 BTC)<br> <br>'}],
          [{ vl: '<br><b> Amount (USDT to withdraw): </b> <br> Enter in this box the amount of Tethers to withdraw. <br> (Omni Tx => Min. 0.00000546 BTC)<br> <br>' }],
          [{ vl: '<br><b> Quantitat (USDT a retirar):</b><br> Introduïu en aquesta casella la quantitat de Tethers a retirar. <br> (Omni Tx => Min. 0.00000546 BTC)<br> <br>' }],
          [{ vl: '<br><b> Quantidade (USDT para retirar):</b><br> Digite nesta caixa a quantidade de Tethers a retirar. <br> (Omni Tx => Min. 0.00000546 BTC)<br> <br>' }],                                               
            ],                      
      },               
      titul: {
       matrix: [
                [{ vl: ' Perfil de dirección bitcoin:' }, { vl: 'Mostrar / Ocultar' },{ vl: 'Editar Alertas' }, { vl: 'Editar Seguridad' }, { vl: 'Editar Preferencias' }, { vl: 'Eliminar Perfil' },{ vl: 'Editar Garantías' }],
                [{ vl: ' Bitcoin address profile:' }, { vl: 'Show / hide' }, { vl: 'Edit Alerts' },{ vl: 'Edit Security' }, { vl: 'Edit Preferences' }, { vl: 'Delete Profile' },{ vl: 'Edit Warranties' }],
                [{ vl: ' Perfil d`adreça bitcoin:' }, { vl: 'Mostra / Oculta' }, { vl: 'Edita Alertes' },{ vl: 'Edita Seguretat' }, { vl: 'Edita Preferències' }, { vl: 'Eliminar Perfil' },{ vl: 'Editar Garanties' }],
                [{ vl: ' Perfil de endereço Bitcoin:' }, { vl: 'Aparecer / Esconder' }, { vl: 'Editar Alertas' },{ vl: 'Editar Segurança' }, { vl: 'Edite Preferencias' }, { vl: 'Apagar Perfil' },{ vl: 'Editar garantias' }],                                               
               ],              
      },
      titul_gar: {
       matrix: [
                [{ vl: ' Retiros de Garantía' }, { vl: 'Retiro de Seguridad Abierto a fecha' },{ vl: 'Script de canje' }, { vl: 'Copiar al portapapeles' }, { vl: 'Copiado al portapapeles' }, { vl: 'Verificar' },{ vl: 'Script Clave Pública' },{ vl: ' La validez de esta 🔐 MultiGarantía 🔗Multifirma expira' },{ vl: 'Tx firmada, modificable y válida para emisión en la red ' }],
                [{ vl: ' Warranty Withdrawals' }, { vl: 'Security Retreat Open to Date' }, { vl: 'Redeem Script' },{ vl: 'Copy to clipboard' }, { vl: 'Copied to clipboard' }, { vl: 'Check' },{ vl: 'Script Public key' },{ vl: 'Expiration and date of 🔂Open Security Withdrawal' },{ vl: 'Tx signed, modifiable and valid for emission in the network ' }],
                [{ vl: ' Retirs de garantia' }, { vl: 'Retir de seguretat Obert a data' }, { vl: 'Script de canvi' },{ vl: 'Copiar al porta-retalls' }, { vl: 'Copiat al porta-retalls' }, { vl: 'Verificar' },{ vl: 'Script Clau Pública' },{ vl: 'Venciment i data de 🔂Retir de Seguretat Obert' },{ vl: 'Tx signada, modificable i vàlida per emissió a la xarxa ' }],
                [{ vl: ' Retiradas de garantia' }, { vl: 'Retiro de segurança aberto até o momento' }, { vl: 'Script resgate' },{ vl: 'Copiar para área de transferência' }, { vl: 'Copiado para a área de transferência' }, { vl: 'Verifica' },{ vl: 'Script de chave pública' },{ vl: 'Expiração e data de 🔂Retirada de Segurança Aberta' },{ vl: 'Tx assinado, modificável e válido para emissão na rede ' }],                                               
               ],              
      },
      retir_gar: {
       mtx: [
                [{ vl: ' Retiro de Garantia' }, { vl: 'Retiro de Seguridad Abierto a fecha' },{ vl: 'Script de canje' }, { vl: 'Copiar al portapapeles' }, { vl: 'Copiado al portapapeles' }, { vl: 'Verificar' },{ vl: 'Script Clave Pública' },{ vl: 'Vencimiento y fecha de 🔂Retiro de Seguridad Abierto' },{ vl: 'Generar '}],
                [{ vl: ' Warranty Withdrawal' }, { vl: 'Security Retreat Open to Date' }, { vl: 'Redeem Script' },{ vl: 'Copy to clipboard' }, { vl: 'Copied to clipboard' }, { vl: 'Check' },{ vl: 'Script Public key' },{ vl: 'Expiration and date of 🔂Open Security Withdrawal' },{ vl: 'Generate ' }],
                [{ vl: ' Retir de garantia' }, { vl: 'Retir de seguretat Obert a data' }, { vl: 'Script de canvi' },{ vl: 'Copiar al porta-retalls' }, { vl: 'Copiat al porta-retalls' }, { vl: 'Verificar' },{ vl: 'Script Clau Pública' },{ vl: 'Venciment i data de 🔂Retir de Seguretat Obert' },{ vl: 'Generar ' }],
                [{ vl: ' Retirada de garantia' }, { vl: 'Retiro de segurança aberto até o momento' }, { vl: 'Script resgate' },{ vl: 'Copiar para área de transferência' }, { vl: 'Copiado para a área de transferência' }, { vl: 'Verifica' },{ vl: 'Script de chave pública' },{ vl: 'Expiração e data de 🔂Retirada de Segurança Aberta' },{ vl: 'Gerar ' }],                                               
               ],              
      },
       Retiro_Entrega: {
       mtx: [
          [{ vl: '🖋️Tx Retiro a Firmar'},{ vl: 'Generar '},{ vl: ' 🔏Tx Retiro Firmada'},{ vl: 'Copiar al portapapeles '},{ vl: '🔏Tx Retiro Firmada: <br><br>Escanee o pegue en esta casilla la Tx Retiro facilitada encima, una vez firmada con la clave privada(SIN EXPONERLA) de su dirección bitcoin de usuario, inmediatamente será verificada y emitida a la cadena de bloques de bitcoin. <br> IMPORTANTE, NO EMITA LA TX A LA RED, sólo firme la Tx y devuélvala firmada , es fundamental para verificar la emisión y dejar liberada la Garantía Multifirma en la plataforma.<br><br> '},{ vl: 'Escanear '}],
          [{ vl: '🖋️Tx Withdrawal to Sign' },{ vl: 'Generate ' },{ vl: ' 🔏Tx Signed Withdrawal'},{ vl: 'Copy to clipboard '},{ vl: '🔏Signed Withdrawal Tx: <br><br>Scan or paste in this box the Withdrawal Tx provided above, once signed with the private key (WITHOUT EXPOSING IT) of your user bitcoin address, it will be immediately verified and issued to the chain of bitcoin blocks. <br> IMPORTANT, DO NOT ISSUE THE TX TO THE NETWORK, just sign the TX and return it signed, it is essential to verify the issue and release the Multi-signature Guarantee on the platform.<br><br>'},{ vl: 'Escanear '}],
          [{ vl: '🖋️Tx Retir a Signar' },{ vl: 'Generar ' },{ vl: ' 🔏Tx Retir Signat'},{ vl: 'Copiar al porta-retalls '},{ vl: '🔏Tx Retir Signada: <br><br>Escanegeu o enganxeu en aquesta casella la Tx Retir facilitada a sobre, una vegada signada amb la clau privada(SENSE EXPOSAR-LA) de la seva adreça bitcoin d`usuari, immediatament serà verificada i emesa a la cadena de blocs de bitcoin. <br> IMPORTANT, NO EMETEU LA TX A LA XARXA, només signeu la Tx i torneu-la signada, és fonamental per verificar l`emissió i deixar alliberada la Garantia Multifirma a la plataforma. <br><br>'},{ vl: 'Escanear '}],
          [{ vl: '🖋️Tx Retirada para assinar' },{ vl: 'Gerar ' },{ vl: ' 🔏Tx Retirada assinado'},{ vl: 'Copiar para área de transferência '},{ vl: '🔏Tx de Retirada Assinado: <br><br>Digitalize ou cole nesta caixa o Tx de Retirada fornecido acima, uma vez assinado com a chave privada (SEM EXPOR) do seu endereço bitcoin do usuário, ele será imediatamente verificado e emitido para a cadeia de blocos de bitcoin. <br> IMPORTANTE, NÃO EMISSE O TX PARA A REDE, apenas assine o TX e devolva-o assinado, é imprescindível verificar a emissão e liberar a Garantia Multiassinatura na plataforma.<br><br>'},{ vl: 'Escanear '}],                                               
            ],
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
      Entregado__retiro: {
       vars: [
          [{ vl: 'Enviado en Transacción Tx ID'},{ vl: 'Comprobando confirmaciones en'},{ vl: ' FIRMAS Y DEJAR LIBRE 🔐 MultiGarantía 🔗Multifirma Ventas'}],

          [{ vl: 'Sent in Transaction Tx ID'},{ vl: 'Checking confirmations in'},{ vl: ' SIGNATURES AND RELEASE 🔐 MultiGuarantee 🔗Multisig Sales '}],

          [{ vl: 'Lliurat en Transacció Tx ID'},{ vl: 'Conprovant confirmacions en'},{ vl: ' SIGNATURES I DEIXAR LLIURE 🔐 MultiGarantia 🔗Multifirma Vendes '}],

          [{ vl: 'Enviado na transação Tx ID'},{ vl: 'Verificando as confirmações de'},{ vl: ' ASSINATURAS E LANÇAMENTO 🔐 MultiGarantia 🔗Vendas Multisig'}],                                             
            ],
       hlp_enviada: [
          [{ vl: '<br><b>Retiro enviado en Transacción (ID):</b><br> <b>¡ Damos por finalizada esta transacción de Retiro con éxito !</b> Inmortalizada en la cadena de bloques de bitcoin sólo a través de las direcciones públicas. Pudiendo revisar la transacción de Retiro directamente, bien a través del vinculo de la transacción o explorando su dirección bitcoin pública asociada a ésta, desde cualquier explorador de la cadena de bloques de bitcoin.<br> Concluido satisfactoriamente y definitvo a partir de la sexta confirmación en la cadena de bloques de bitcoin. Quedando así libre  la dirección 🔐Multigarantía Ventas, para cualquier intercambio(Tx).<br> <br>'}],
          [{ vl: '<br><b>Withdrawal sent in Transaction (ID): </b> <br> <b> We conclude this transaction successfully! </b> Immortalized in the bitcoin blockchain only through public addresses . Being able to review the Withdrawal transaction directly, either through the transaction link or by exploring its public bitcoin address associated with it, from any explorer of the bitcoin blockchain. <br> Concluded and definitive from the sixth confirmation on the bitcoin blockchain.Thus being free, the address 🔐Sales Multiwarranty, for any exchange (Tx). <br> <br>'}],
          [{ vl: '<br><b>Retir enviat a Transacció (ID):</b><br> <b> Donem per finalitzada aquesta transacció amb èxit!</b> Immortalitzada a  la cadena de blocs de bitcoin només a través de les adreces públiques. Podent revisar la transacció de Retir directament, bé mitjançant el vincle de la transacció o explorant la seva adreça bitcoin pública associada a aquesta, des de qualsevol explorador de la cadena de blocs de bitcoin. <br> Conclòs satisfactòriament i definitiu a partir de la sisena confirmació en la cadena de blocs de bitcoin. Quedant així lliure, l`adreça 🔐Multigarantía Vendes, per a qualsevol  intercanvi(Tx).<br> <br>'}],
          [{ vl: '<br><b>Retirada enviada na transação (ID):</b><br> <b> Concluímos esta transação com sucesso!</b> Imortalizado no blockchain bitcoin apenas por meio de endereços públicos. Ser capaz de revisar a transação de Retirada diretamente, seja por meio do link de transação ou explorando seu endereço bitcoin público associado a ela, a partir de qualquer explorador do blockchain de bitcoin.<br> Concluído com sucesso e definitivo a partir da sexta confirmación en la cadena de bloques de bitcoin. Sendo assim livre, o endereço 🔐Multigarantía Ventas, para qualquer troca (Tx).<br> <br>'}],                                              
            ],
        tlp_eliminar: [
          [{ vl: 'FIELES AL RESGUARDO A LA PRIVACIDAD,<br /> AL PULSAR EL BOTÓN (CON MÍNIMO 6<br /> CONFIRMACIONES GARANTIZADAS),<br />  PROCEDEMOS A LA COMPLETA<br />  ELIMINACIÓN DE TODO REGISTRO<br /> ASOCIADO A ESTA TX DE COMPRA-VENTA<br /> EN ESTA PLATAFORMA.'},{ vl: 'FIELES AL RESGUARDO A LA PRIVACIDAD,<br /> AL PULSAR EL BOTÓN ,<br />  PROCEDEMOS A LA COMPLETA<br />  ELIMINACIÓN DE TODO REGISTRO<br /> ASOCIADO A ESTA TX DE COMPRA-VENTA<br /> EN ESTA PLATAFORMA.'}],
          [{ vl: 'FAITHFUL TO THE PROTECTION OF PRIVACY, <br /> BY PRESSING THE BUTTON (WITH MINIMUM 6<br /> GUARANTEED CONFIRMATIONS), WE PROCEED<br /> TO THE COMPLETE ELIMINATION OF ALL<br /> REGISTRATION  ASSOCIATED WITH THIS <br />PURCHASE-SALE TX  ON THIS PLATFORM.'},{ vl: 'FAITHFUL TO THE PROTECTION OF PRIVACY, <br /> BY PRESSING THE BUTTON , WE PROCEED<br /> TO THE COMPLETE ELIMINATION OF ALL<br /> REGISTRATION  ASSOCIATED WITH THIS <br />PURCHASE-SALE TX  ON THIS PLATFORM.'}],
          [{ vl: 'FIDELS AL RESGUARD A LA PRIVACITAT,<br /> EN PREMER EL BOTÓ (AMB MÍNIM 6<br /> CONFIRMACIONS GARANTIDES) PROCEDIM<br /> A LA COMPLERTA EL.LIMINACIÓ DE TOT<br /> REGISTRE LLIGAT AMB AQUESTA TX DE<br /> COMPRA-VENDA EN AQUESTA PLATABANDA<br />'},{ vl: 'FIDELS AL RESGUARD A LA PRIVACITAT,<br /> EN PREMER EL BOTÓ  PROCEDIM<br /> A LA COMPLERTA EL.LIMINACIÓ DE TOT<br /> REGISTRE LLIGAT AMB AQUESTA TX DE<br /> COMPRA-VENDA EN AQUESTA PLATABANDA<br />'}],
          [{ vl: 'FIEL COM A PROTEÇÃO DA PRIVACIDADE,<br /> PRESSIONANDO O BOTÃO (COM MÍNIMO 6 <br />CONFIRMAÇÕES GARANTIDAS) PROCEDEMOS<br /> À   ELIMINAÇÃO COMPLETA DE TODOS OS<br /> REGISTOS ASSOCIADOS A ESTE TX DE <br />COMPRA-VENDA  NESTA PLATAFORMA.'},{ vl: 'FIEL COM A PROTEÇÃO DA PRIVACIDADE,<br /> PRESSIONANDO O BOTÃO  PROCEDEMOS<br /> À   ELIMINAÇÃO COMPLETA DE TODOS OS<br /> REGISTOS ASSOCIADOS A ESTE TX DE <br />COMPRA-VENDA  NESTA PLATAFORMA.'}],                                              
            ],           
      },              
      vta_perfil: {
       mtx: [
                [{ vl: '📧 E-Mail (para alertas):' }, { vl: '<br><b>📧 E-Mail:</b><br>Un correo electrónico a vincular con su dirección.<br> En respeto a la privacidad. Consideramos este dato<br> opcional. Aunque recomendable, si desea comprar o<br> vender, para recibir alertas y notificaciones de (Tx)<br> transacciones en proceso caso de no encontrarse<br> en linea, o también para alertas durante arbitrajes<br> si sufriera desconexiones de internet, pero no es<br> imprescindible. De cualquier manera, emulando<br> el estilo Satoshi, preferible usar un email anónimo<br> de los muchos que existen en internet, p. ej. <a href=https://protonmail.com/es/ target=_blank><font color=cyan>aquí</font></a>.<br> <br>' },{ vl: ' Alertas y notificaciones por correo electrónico:' }, { vl: '✅ SÍ' }, { vl: '❌ NO' }],

                [{ vl: '📧 E-Mail (for  alerts):' }, { vl: '<br><b>📧 E-Mail:</b><br>To link with your address. In respect of privacy. We consider this data optional. Although recommended, if you want to buy or sell, to receive alerts and notifications of (Tx) transactions in process if you are not online, or also for alerts during arbitrations  if you suffer internet disconnections, but it is not essential. Either way, emulating the Satoshi style, it is preferable to use an anonymous email, one of the many that exist on the internet, p. ex. <a href=https://protonmail.com/es/ target=_blank><font color=cyan>here</font></a>.<br> <br>' }, { vl: ' Email alerts and notifications:' },{ vl: '✅ YES' }, { vl: '❌ NO' }],

                [{ vl: '📧 E-Mail (per  alertes):' }, { vl: '<br><b>📧 E-Mail:</b><br>Un correu electrònic a vincular amb la seva adreça. En respecte a la privacitat. Considerem aquesta dada opcional. Encara que recomanable, si desitja comprar o vendre, per rebre alertes i notificacions de (Tx) transaccions en procés cas de no trobar-se en línia, o també per alertes durant arbitratges si patís desconnexions d`internet, però no és imprescindible. De qualsevol manera, emulant l`estil Satoshi, preferible utilitzar un correu electrònic anònim dels molts que hi ha a l`internet, ex. <a href=https://protonmail.com/es/ target=_blank><font color=cyan>aquí</font></a>.<br> <br>' }, { vl: 'Alertes i notificacions per correu electrònic:' },{ vl: '✅ SÍ' }, { vl: '❌ NO' }],

                [{ vl: '📧 E-Mail (para  alertas):' }, { vl: '<br><b>📧 E-Mail:</b><br>Para um link com seu endereço. No que diz respeito à privacidade. Consideramos esses dados opcionais. Embora recomendado, se você deseja comprar ou vender, receber alertas e notificações de transações (Tx) em andamento se você não estiver online, ou também para alertas durante arbitragens se sofrer desconexões de internet, mas não é essencial. De qualquer forma, emulando o estilo Satoshi, é preferível usar um e-mail anônimo dos muitos que existem na internet, p. ex. <a href=https://protonmail.com/es/ target=_blank><font color=cyan>aqui</font></a>.<br> <br>' }, { vl: 'Alertas e notificações por email:' },{ vl: '✅ SÍM' }, { vl: '❌ NÃO' }],                                               
               ],
       sec: [
                [{ vl: 'Restringir acceso a mis ubicaciones(IP) estáticas:' }, { vl: '🔒 SÍ' }, { vl: '🔓 NO' }],

                [{ vl: 'Restrict access to my static IP locations:' },{ vl: '🔒 YES' }, { vl: '🔓 NO' }],

                [{ vl: 'Restringir accés a les meves ubicacions(IP) estàtiques:' },{ vl: '🔒 SÍ' }, { vl: '🔓 NO' }],

                [{ vl: 'Restringir o acesso aos meus locais de IP estático:' },{ vl: '🔒 SÍM' }, { vl: '🔓 NÃO' }],                                               
               ],
       secs: [
                [{ vl: 'Ubicación estática primaria(IP):' }, { vl: 'Ubicación estática secundaria(IP):' }, { vl: 'Ubicación de conexión en línea (IP):' }],

                [{ vl: 'Primary static Location(IP):' },{ vl: 'Secondary static Location(IP):' }, { vl: 'Online connection location (IP):' }],

                [{ vl: 'Ubicació estàtica primària(IP):' },{ vl: 'Ubicació estàtica secundària(IP):' }, { vl: 'Ubicació de conexió en línia (IP):' }],

                [{ vl: 'Localização estática primária(IP):' },{ vl: 'Localização estática Secundário(IP):' }, { vl: 'Local de conexão online (IP):' }],                                               
               ],
       gart: [
                [{ vl: '🔐 MultiGarantía 🔗Multifirma Ventas ' }],

                [{ vl: '🔗MultiSign 🔐MultiWarranty Sales ' }],

                [{ vl: '🔐 MultiGarantia 🔗Multifirma Vendes ' }],

                [{ vl: '🔐 Vendas de Multigarantia 🔗Multisig ' }],                                               
               ],                              
       pref: [
                [{ vl: ' Preferencias:' },{ vl: ' 🔗 Cadena de bloques Bitcoin · <font color="Darkorange"><b> ⚡</b></font> Lightning Network' }, { vl: '⛓️ Capa Omni ₮ USDt' }, { vl: 'Idioma:' }, { vl: '🇪🇸 Español' }, { vl: '🇺🇸 Inglés' }, { vl: 'Catalán' }, { vl: '🇧🇷 Portugués' }, { vl: 'Divisa: 🪙 ' }, { vl: 'Creado: ' }],

                [{ vl: ' Preferences:' },{ vl: ' 🔗 Bitcoin Blockchain · <font color="Darkorange"><b> ⚡</b></font> Lightning Network' }, { vl: '⛓️ Omni Layer ₮ USDt' }, { vl: 'Language:' }, { vl: '🇪🇸 Spanish' }, { vl: '🇺🇸 English' }, { vl: 'Catalan' }, { vl: '🇧🇷 Portuguese' }, { vl: 'Badge: 🪙 ' }, { vl: 'Created: ' }],

                [{ vl: ' Preferèncias:' },{ vl: ' 🔗 Cadena de blocs Bitcoin · <font color="Darkorange"><b> ⚡</b></font> Lightning Network' }, { vl: '⛓️ Capa Omni ₮ USDt' }, { vl: 'Llengua:' }, { vl: '🇪🇸 Espanyol' }, { vl: '🇺🇸 Anglès' }, { vl: 'Català' }, { vl: '🇧🇷 Portuguès' }, { vl: 'Divisa: 🪙 ' }, { vl: 'Creat: ' }],

                [{ vl: ' Preferências:' },{ vl: ' 🔗 Corrente de bloco Bitcoin · <font color="Darkorange"><b> ⚡</b></font> Lightning Network' }, { vl: '⛓️ Capa Omni ₮ USDt' }, { vl: 'Língua:' }, { vl: '🇪🇸 Espanhol' }, { vl: '🇺🇸 Inglês' }, { vl: 'Catalão' }, { vl: '🇧🇷 Português' }, { vl: 'Distintivo: 🪙 ' }, { vl: 'Criado: ' }],,                                               
               ],                                                           
      },
      sl_cadena: {
       mt: [
          [{ vl: 'Envio mínimo. ' },{ vl: 'Donación mineros. ' },{ vl: 'Retirar Bitcoin o USDT ' }],
          [{ vl: 'Minimum shipping. ' },{ vl: 'Donation miners. ' },{ vl: 'Withdraw bitcoin or USDT ' }],
          [{ vl: 'Enviament mínim. ' },{ vl: 'Donació miners. ' },{ vl: 'Retir bitcoin o USDT ' }],
          [{ vl: 'Envio mínimo. ' },{ vl: 'Doação de mineração. ' },{ vl: 'Retirada bitcoin o USDT' }],                                             
            ]            
      },      
      edit_alert: {
       mtx: [
                [{ vl: 'Editar Alertas' },{ vl: ' Enviar alertas o notificaciones, relacionadas a mi Dirección Bitcoin, al 📧 E-Mail:' },{ vl: 'E-Mail/Correo electrónico (opcional): ej. Satoshin@gmx.com ' }, { vl: '<br><b> 📧 Correo electrónico o Email:</b><br> Introduzca o pegue, en la casilla, un Email <br>o correo electrónico para alertas de su dirección btc.<br> En respeto a la privacidad. Consideramos este dato<br> opcional. Aunque recomendable, si desea comprar o<br> vender, para recibir alertas y notificaciones de<br> transacciones en proceso caso de no encontrarse<br> en linea, o por si sufriera problemas de conexión<br> durante algún arbitraje, no siendo de igual forma<br> imprescindible. De cualquier manera, es recomendable<br> como Satoshi por ej., <b>usar un email anónimo y cifrado</b><br> de los muchos que existen en internet, p. ej. <a href=https://protonmail.com/es/ target=_blank><font color=cyan>aquí</font></a>.<br> <br>' },{ vl: ' Guardar' }],

                [{ vl: 'Edit Alerts' },{ vl: ' Send alerts or notifications, related to my Bitcoin Address, to the 📧 E-Mail:' },{ vl: 'E-Mail (optional): ex. Satoshin@gmx.com ' },{ vl: ' <br><b> 📧 E-Mail:</b><br> Enter or paste, on the box, an Email <br>for alerts of your btc address.<br> In respect of privacy. We consider this data<br> optional. Although recommended, if you want <br>to buy or sell, to receive alerts and notifications <br>from transactions in process if not found<br> online, or in case you suffer connection problems<br> during some arbitration, not being in the same way<br> essential. Either way, it is recommended<br> like Satoshi for ex., <b>use anonymous and encrypted <br>email</b> of the many that exist on the internet, ex. <a href=https://protonmail.com/es/ target=_blank><font color=cyan>here</font></a>.<br> <br>' },{ vl: ' Save' }],

                [{ vl: 'Editar Alertes' },{ vl: ' Enviar alertes o notificacions, relacionades a la meva Adreça Bitcoin, al 📧 E-Mail:' },{ vl: 'E-mail o Correu electrònic (opcional): ex. Satoshin@gmx.com ' }, { vl: '<br><b>📧 Correu electrònic o E-Mail:</b><br> Introduïu o enganxeu, una email <br>o correu electrònic per les alertes de la vostra adreça btc.<br> En respecte a la privacitat. Considerem aquesta dada<br> opcional. Encara que recomanable, si desitja comprar o<br> vendre, per rebre alertes i notificacions de transaccions<br> en procés cas de no trobar-se en línia, o per si un cas<br> patís problemes de connexió durant algun arbitratge,<br> no sent en qualsevol cas imprescindible. Tot i que per<br> Tx, es recomendable com en Satoshi per ex.,<br> <b>utilitzar un email anònim i xifrat</b> dels molts que hi ha<br> a internet, per ex. <a href=https://protonmail.com/es/ target=_blank><font color=cyan>aquí</font></a>.<br> <br>' },{ vl: ' Desar' }],

                [{ vl: 'Editar Alertas' },{ vl: ' Enviar alertas ou notificações, relacionados ao meu endereço Bitcoin, para o 📧 E-Mail:' },{ vl: 'E-Mail (opcionais): ex. Satoshin@gmx.com ' }, { vl: '<br><b>📧 E-Mail:</b><br> Digite ou cole, na caixa, um e-mail  para<br> alertas de seu endereço BTC.<br> No que diz respeito à privacidade. Nós consideramos <br>esses dados opcional. Embora recomendado, se você<br> deseja comprar ou vender, para receber alertas e <br>notificações de transações em processo se não<br> forem encontradas online, ou no caso de você ter<br> problemas de conexão durante alguma arbitragem,<br> não sendo da mesma forma e essencial. De qualquer<br> forma, é recomendado como Satoshi por ex.,<br> <b>usar e-mail anônimo e criptografado</b><br> das muitas que existem na internet, p. ex. <a href=https://protonmail.com/es/ target=_blank><font color=cyan>aquí</font></a>.<br> <br>' },{ vl: ' Salve' }],                                              
               ],                                                         
      },
      edit_segur: {
       mtx: [
                [{ vl: '¡ Editar seguridad !' },{ vl: 'Sólo permitir acceso a mis (IP) estáticas detalladas' },{ vl: '📌Ubicación estática primaria (IP)' }, { vl: '📌Ubicación estática secundaria (IP)' },{ vl: ' Guardar' },{ vl: ' <br><b> 📌Ubicación estática  (IP):</b><br> Introduzca o pegue, en la casilla, su IP pública (fija, estática ej. 91.194.90.189) que use habitualmente de modo preferente, a la cual quedará restringido el ingreso a la plataforma.<br> Asegúrese doblemente que sea la correcta y no dinámica.<br> <br>' }],

                [{ vl: 'Edit security !' },{ vl: 'Only allow access to my detailed static (IP)' },{ vl: '📌Primary static Location (IP)' },{ vl: '📌Secondary static Location (IP)' },{ vl: ' Save' },{ vl: ' <br> <b> 📌 Static location (IP): </b> <br> Enter or paste, in the box, your public IP (fixed, static eg 91.194.90.189) that you usually use preferentially, to which will be restricted from entering the platform. <br> Double-check that it is correct and not dynamic. <br> <br>' }],

                [{ vl: 'Edita seguretat !' },{ vl: 'Només permetre accés a les meves (IP) estàtiques detallades' },{ vl: '📌Ubicació estàtica primària(IP)' }, { vl: '📌Ubicació estàtica secundària (IP)' },{ vl: ' Desar' },{ vl: ' <br><b> 📌Ubicació estàtica  (IP):</b><br> Introduïu o enganxeu, a la casella, la vostra IP pública (fixa, estàtica ex. 91.194.90.189) que utilitzeu habitualment de manera preferent, a la qual quedarà restringit l`ingrés a la plataforma.<br> Assegureu-vos que sigui la correcta i no dinàmica.<br> <br>' }],

                [{ vl: 'Editar segurança !' },{ vl: 'Permitir apenas o acesso ao meu estático detalhado (IP)' },{ vl: '📌Localização estático primária (IP)' }, { vl: '📌Localização estático Secundária (IP)' },{ vl: ' Salve' },{ vl: ' <br> <b> 📌Localização estática (IP): </b> <br> Insira ou cole, na caixa, seu IP público (fixo, estático, por exemplo, 91.194.90.189) que você costuma usar preferencialmente, para o qual irá ser impedido de entrar na plataforma. <br> Verifique se está correto e se não é dinâmico. <br> <br>' }],                                              
               ],                                                         
      },
      edit_garant: {
       mtx: [
                [{ vl: '¡ Editar Garantías !' },{ vl: 'Sólo permitir acceso a mis (IP) estáticas detalladas' },{ vl: '📌Ubicación estática primaria (IP)' }, { vl: '📌Ubicación estática secundaria (IP)' },{ vl: ' Guardar' },{ vl: ' <br><b> 📌Ubicación estática  (IP):</b><br> Introduzca o pegue, en la casilla, su IP pública (fija, estática ej. 91.194.90.189) que use habitualmente de modo preferente, a la cual quedará restringido el ingreso a la plataforma.<br> Asegúrese doblemente que sea la correcta y no dinámica.<br> <br>' }],

                [{ vl: 'Edit Warranties !' },{ vl: 'Only allow access to my detailed static (IP)' },{ vl: '📌Primary static Location (IP)' },{ vl: '📌Secondary static Location (IP)' },{ vl: ' Save' },{ vl: ' <br> <b> 📌 Static location (IP): </b> <br> Enter or paste, in the box, your public IP (fixed, static eg 91.194.90.189) that you usually use preferentially, to which will be restricted from entering the platform. <br> Double-check that it is correct and not dynamic. <br> <br>' }],

                [{ vl: 'Editar Garanties !' },{ vl: 'Només permetre accés a les meves (IP) estàtiques detallades' },{ vl: '📌Ubicació estàtica primària(IP)' }, { vl: '📌Ubicació estàtica secundària (IP)' },{ vl: ' Desar' },{ vl: ' <br><b> 📌Ubicació estàtica  (IP):</b><br> Introduïu o enganxeu, a la casella, la vostra IP pública (fixa, estàtica ex. 91.194.90.189) que utilitzeu habitualment de manera preferent, a la qual quedarà restringit l`ingrés a la plataforma.<br> Assegureu-vos que sigui la correcta i no dinàmica.<br> <br>' }],

                [{ vl: 'Editar Garantias !' },{ vl: 'Permitir apenas o acesso ao meu estático detalhado (IP)' },{ vl: '📌Localização estático primária (IP)' }, { vl: '📌Localização estático Secundária (IP)' },{ vl: ' Salve' },{ vl: ' <br> <b> 📌Localização estática (IP): </b> <br> Insira ou cole, na caixa, seu IP público (fixo, estático, por exemplo, 91.194.90.189) que você costuma usar preferencialmente, para o qual irá ser impedido de entrar na plataforma. <br> Verifique se está correto e se não é dinâmico. <br> <br>' }],                                              
               ],                                                         
      },      
      edit_prefs: {
       mtx: [
                [{ vl: '¡ Editar preferencias !' },{ vl: 'Operar en bitcoin o USDT al inicio de sesión' },{ vl: 'Escoger idioma para el inicio de sesión' }, { vl: 'Escoger divisa para el inicio de sesión' },{ vl: ' Guardar' }],

                [{ vl: 'Edit preferences at login !' },{ vl: 'Trade in bitcoin or USDT' },{ vl: 'Choose language for login' },{ vl: 'Choose currency for login' },{ vl: ' Save' }],

                [{ vl: 'Edita preferències !' },{ vl: 'Traginar en bitcoin o en USDT a l`inici de sessió' },{ vl: 'Escollir idioma per a l`inici de sessió' }, { vl: 'Escollir divisa per a l`inici de sessió' },{ vl: ' Desar' }],

                [{ vl: 'Edita preferències !' },{ vl: 'Operar bitcoin o USDT no login' },{ vl: 'Escolha o seu idioma para login' }, { vl: 'Escolha a moeda para login' },{ vl: ' Salve' }],                                              
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
      f_createopenraw: {
         txts: [
          [{ vl: 'Creada NUEVA Tx 🔂Retiro de Seguridad'},{ vl: 'Generada y guardada la Tx emisible a la fecha estipulada. <br> Además de copiarla y guardarla en su poder, no olvide copiar y guardar también los Scripts de canje y clave pública de la dirección multifirma.'}],
          [{ vl: 'Created NEW Tx 🔂Security Retreat'},{ vl: 'Generated and saved the emissible Tx on the stipulated date. <br> In addition to copying and keeping it in your possession, do not forget to also copy and save the Redemption Scripts and public key of the multisig address. '}],
          [{ vl: 'Creada NOVA Tx 🔂Retir de Seguretat'},{ vl: 'Generada i guardada la Tx emissible a la data estipulada. <br> A més de copiar-la i guardar-la en el seu poder, no oblideu copiar i guardar també els Scripts de canvi i clau pública de l`adreça multifirma.'}],
          [{ vl: 'Criado NOVO Tx 🔂Retiro de Segurança'},{ vl: 'Gerou e salvou o Tx emissível na data estipulada. <br> Além de copiá-lo e mantê-lo em seu poder, não se esqueça de também copiar e salvar os Scripts de Resgate e a chave pública do endereço multisig. '}],                                            
            ],                       
      },      
      f_EliminarTx: {
         txts: [
          [{ vl: 'Tx, archivos y 💬 Chat de la Tx eliminados con éxito'},{ vl: 'Registro, archivos y 💬 Chat de la Tx eliminados con éxito en esta plataforma.'},{ vl: 'Alerta al vendedor enviada con éxito'},{ vl: ' Necesario 6 confirmaciones en cadena de bloques.'}],                                            
          [{ vl: 'Tx, files and Tx 💬 Chat deleted successfully.'},{ vl: 'Registry, files and 💬 Tx Chat successfully deleted on this platform.'},{ vl: 'Seller alert sent successfully'},{ vl: ' Requires 6 confirmations in blockchain.'}],                                            
          [{ vl: 'Tx, arxius i 💬 Xat de la Tx eliminats amb èxit'},{ vl: 'Registre, arxius i 💬 Xat de la Tx eliminats amb èxit en aquesta plataforma.'},{ vl: 'Alerta al venedor tramesa amb éxit'},{ vl: ' Cal 6 confirmacions a la cadena de blocs.'}],                                            
          [{ vl: 'Tx, arquivos e 💬 Chat de la Tx excluídos com sucesso'},{ vl: 'Registro, arquivos e 💬 Tx Chat excluídos com sucesso nesta plataforma.'},{ vl: 'Alerta de vendedor enviado com sucesso'},{ vl: ' Requer 6 confirmações de blockchain.'}],                                            
            ],                                                             
      },
     f_checkIDliberacion: {
         txts: [
          [{ vl: ' aceptada con éxito en Tx'},{ vl: '¡ 🔐Tx ID, retiro de fondos, no publicada en cadena todavía !'},{ vl: 'La transacción de retiro, sólo empezará a contar como válida a partir de la primera confirmación en la cadena de bloques de bitcoin, debiera aparecer aproximadamente a los 10 minutos del envio.'}],
          [{ vl: ' accepted successfully in Tx'},{ vl: '🔐Tx ID, Funds withdrawal, Not Released On Chain Yet!'},{ vl: 'The withdrawal transaction will only start to count as valid from the first confirmation in the bitcoin blockchain, it should appear approximately 10 minutes after sending.'}],
          [{ vl: ' acceptada amb èxit per la Tx'},{ vl: '🔐Tx ID, retir de fons sol·licitats, no publicada en cadena encara!'},{ vl: 'La transacció de retir, només començarà a comptar com a vàlida a partir de la primera confirmació a la cadena de blocs de bitcoin, hauria d`aparèixer aproximadament als 10 minuts de l`enviament. '}],
          [{ vl: ' aceita com sucesso em Tx'},{ vl: '🔐Tx ID, retirada de fundos, ainda não liberada na cadeia!'},{ vl: 'A transação de retirada só começará a contar como válida a partir da primeira confirmação no blockchain do bitcoin, ela deve aparecer aproximadamente 10 minutos após o envio. '}],                                         
            ],                       
      },                  
      f_valiemail: {
       mtx: [
                [{ vl: '¡ Sí es una dirección E-Mail válida !' },{ vl: '¡ No es una dirección E-Mail válida !' }],

                [{ vl: 'Yes it is a valid E-Mail address!' },{ vl: 'Not a valid E-Mail address!' }],

                [{ vl: 'Sí que és una adreça E-Mail vàlida!' },{ vl: 'No és una adreça E-Mail vàlida!' }],

                [{ vl: 'Sim, é um endereço E-Mail válido!' },{ vl: 'Não, é um endereço E-Mail válido' }],                                              
               ],                                                         
      },
      f_valiIP: {
       mtx: [
                [{ vl: '¡ Sí es una dirección IP válida !' },{ vl: '¡ No es una dirección IP válida !' }],

                [{ vl: 'Yes it is a valid IP address!' },{ vl: 'Not a valid IP address!' }],

                [{ vl: 'Sí que és una adreça IP vàlida!' },{ vl: 'No és una adreça IP vàlida!' }],

                [{ vl: 'Sim, é um endereço IP válido!' },{ vl: 'Não, é um endereço IP válido' }],                                              
               ],                                                         
      },
      f_guardaseg: {
       mtx: [
                [{ vl: '(IP1) ínvalida, se asigna IP de la conexión actual al valor' },{ vl: '(IP2) ínvalida, se asigna IP de la conexión actual al valor' },{ vl: 'Control de acceso por (IP) activado. Falta dirección (IP1) por completar' },{ vl: 'Control de acceso por (IP) activado. Falta dirección (IP2) por completar' }],

                [{ vl: '(IP1) invalid, the IP of the current connection is assigned to the value' },{ vl: '(IP2) invalid, the IP of the current connection is assigned to the value' },{ vl: 'Access control by (IP) activated. Missing address (IP1) to complete' },{ vl: 'Access control by (IP) activated. Missing address (IP2) to complete' }],

                [{ vl: '(IP1) invàlida, s`assigna IP de la connexió actual al valor' },{ vl: '(IP2) invàlida, s`assigna IP de la connexió actual a la valor' },{ vl: 'Control d`accés per (IP) activat. Falta direcció (IP1) per completar' },{ vl: 'Control d`accés per (IP) activat. Falta direcció (IP2) per completar' }],

                [{ vl: '(IP1) inválido, o IP da conexão atual é atribuído ao valor' },{ vl: '(IP2) inválido, o IP da conexão atual é atribuído ao valor' },{ vl: 'Controle de acesso por (IP) ativado. Endereço ausente (IP1) para completar' },{ vl: 'Controle de acesso por (IP) ativado. Endereço ausente (IP2) para completar' }],,                                              
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
      f_new_mgmf: {
       mtx: [
                [{ vl: '¿ Confirmar creación de nueva  🔐 MultiGarantía 🔗Multifirma ?' },{ vl: 'CONSIDERACIONES: <br><br> En caso de regeneracíon. Aunque el saldo de la Multifirma sea 0 y no debiera necesitarlos a menos que haga un nuevo envio a la Multifirma vigente por error. No esta de más, si no lo ha hecho ya. Que copie y guarde en lugar seguro el script de canje, clave pública y retiro de seguridad regenerado de la Multifirma vigente antes de generar la nueva con todos sus valores vinculados inicializados.<br> ' },{ vl: '✅ OK' },{ vl: '❌ CANCELAR' }],
                [{ vl: 'Confirm creation of new 🔐 MultiGuarantee 🔗Multisignature ?' },{ vl: 'CONSIDERATIONS: <br><br> In case of regeneration. Although the balance of the Multisignature is 0 and you should not need them unless you make a new shipment to the current Multisignature by mistake. It doesn`t hurt, if you haven`t already. That you copy and save in a safe place the redemption script, public key and security withdrawal regenerated from the current Multisignature before generating the new one with all its linked values initialized.<br>' },{ vl: '✅ OK' },{ vl: '❌ CANCEL' }],
                [{ vl: 'Confirmar creació de nova 🔐 MultiGarantia 🔗Multifirma ?' },{ vl: 'CONSIDERACIONS: <br><br> En cas de regeneració. Encara que el saldo de la Multifirma sigui 0 i no els hauria de necessitar a no ser que faci un nou enviament a la Multifirma vigent per error. No està de més, si no ho ha fet. Que copiï i guardi en lloc segur el script de canvi, clau pública i retir de seguretat regenerat de la Multifirma vigent abans de generar la nova amb tots els seus valors vinculats inicialitzats.<br>' },{ vl: '✅ OK' },{ vl: '❌ CANCEL·LAR' }],
                [{ vl: 'Confirme a criação de uma nova 🔐 MultiGuarantee 🔗Multisignature ?' },{ vl: 'CONSIDERAÇÕES: <br><br> Em caso de regeneração. Embora o saldo da Multisignature seja 0 e você não precise delas, a menos que faça uma nova remessa para a Multisignature atual por engano. Não dói, se você ainda não o fez. Que você copie e salve em um local seguro o script de resgate, chave pública e retirada de segurança regenerada da Multiassinatura atual antes de gerar a nova com todos os seus valores vinculados inicializados.<br>' },{ vl: '✅ OK' },{ vl: '❌ CANCELAR' }],                                             
               ],                                                         
      },      
      f_rechazarSolicitud: {
         txts: [
          [{ vl: 'Proceso de eliminar la transacción y el 💬 chat vinculado'},{ vl: 'Solicitud de compra eliminada con éxito en Tx'},{ vl: 'Ha sido denegada por el vendedor su solicitud de compra, por falta de algún requisito, hemos procedido a la eliminación de la misma y de su 💬 Chat Tx asociado. Por favor asegurese de reunir los requisitos solicitados por el vendedor, antes de repetir una nueva solicitud para la misma oferta. '},{ vl: '💬 Chat de la Tx eliminado con éxito'},{ vl: 'Alerta al comprador agregada con éxito'}],                                            
          [{ vl: 'Process of deleting the transaction and 💬 linked chat'},{ vl: 'Purchase request successfully deleted in Tx'},{ vl: 'Your purchase request has been denied by the seller, for lack of any requirement, we have proceeded to eliminate it and its associated Tx Chat. Please make sure you meet the requirements requested by the seller, before repeating a new request for the same offer. '},{ vl: '💬 Tx chat removed successfully'},{ vl: 'Buyer alert added successfully'}],                                           
          [{ vl: 'Procés deliminar la transacció i 💬 xat vinculat'},{ vl: 'Sol·licitud de compra eliminada amb èxit a Tx'},{ vl: 'Ha estat denegada pel venedor la sol·licitud de compra, per falta d`algun requisit, hem procedit a l`eliminació de la mateixa i del 💬 Xat Tx associat. Si us plau assegureu-de reunir els requisits del venedor, abans d`una nova sol·licitud per a la mateixa oferta. '},{ vl: '💬 Xat de la Tx eliminat amb èxit'},{ vl: 'Alerta al comprador tramesa amb èxit'}],                                           
          [{ vl: 'Processo de exclusão da transação e 💬 chat vinculado'},{ vl: 'Solicitação de compra excluída com sucesso no Tx'},{ vl: 'O seu pedido de compra foi negado pelo vendedor, por falta de qualquer exigência, procedemos à sua eliminação e ao seu 💬 Tx Chat associado. Certifique-se de atender aos requisitos solicitados pelo vendedor, antes de repetir uma nova solicitação para a mesma oferta. '},{ vl: '💬 Tx chat removido com sucesso'},{ vl: 'Alerta de comprador adicionado com sucesso'}],
            ],          
          swf3: [
          [{ vl: '¡ No es posible generar Tx de Retiro todavía !'},{ vl: 'Es necesario previamente, concluir por completo, finalizar otra transacción en curso que mantiene ocupadas entradas y salidas de la 🔐Garantía, <br><br> '},{ vl: '¡ No es posible generar 🔐 MultiGarantía 🔗Multifirma Ventas todavía !'}],
          [{ vl: 'Unable to generate Withdrawal Tx yet!'},{ vl: 'It is necessary previously, to completely conclude, to finalize another transaction in progress that keeps busy entries and exits of the 🔐Guarantee, <br> <br>'},{ vl: 'Unable to generate 🔗MultiSign 🔐MultiWarranty Sales yet!'}],
          [{ vl: 'No és possible generar Tx de Retir encara!'},{ vl: 'Cal prèviament, concloure per complet, finalitzar una altra transacció en curs que manté ocupades entrades i sortides de la 🔐Garantia, <br><br>'},{ vl: 'No és possible generar 🔐 MultiGarantia 🔗Multifirma Vendes encara!'}],
          [{ vl: 'Ainda não foi possível gerar o Retirada Tx!'},{ vl: 'É necessário previamente, para concluir completamente, finalizar outra transação em andamento que mantenha movimentadas as entradas e saídas da 🔐Garantia, <br> <br>'},{ vl: 'Ainda não foi possível gerar o Vendas de Multigarantia 🔗Multisig!'}],,                                                    
            ],                                                 
      },      
      f_eliminarUser: {
       mtx: [
                [{ vl: '¡ No hay transacciones en curso. Procesada eliminación del perfil en la plataforma. !' },{ vl: '¿ Eliminar perfil completo de la dirección bitcoin ?' },{ vl: 'Dirección bitcoin:' },{ vl: '✅ Confirmar' },{ vl: '❌ Cancelar' },{ vl: '¡ Perfil de Dirección bitcoin eliminado de la plataforma !' },{ vl: 'Agradecidos por su permanencia. Si en cualquier momento lo requiere, quedamos a su disposición, puede acceder con cualquier dirección bitcoin de su propiedad.' },{ vl: 'Perfil de dirección bitcoin eliminado con éxito' },{ vl: '¡ Por favor aségurese de concluir sus transacciones en curso antes de eliminar el perfil !' }],

                [{ vl: 'There are no transactions in progress. Processed removal of the profile on the platform.!' },{ vl: 'Delete full profile of bitcoin address ?' },{ vl: 'Bitcoin address:' },{ vl: '✅ Confirm' },{ vl: '❌ Cancel' },{ vl: 'Bitcoin Address Profile removed from the platform !' },{ vl: 'Grateful for your permanence. If at any time you require it, we remain at your disposal, you can access with any bitcoin address of your property.' },{ vl: 'Bitcoin address profile successfully removed' },{ vl: 'Please be sure to complete your ongoing transactions before deleting the profile!' }],

                [{ vl: 'No hi ha transaccions en curs. Processada eliminació del perfil a la plataforma.' },{ vl: 'Eliminar perfil complet de l`adreça bitcoin?' },{ vl: 'Adreça bitcoin:' },{ vl: '✅ Confirma' },{ vl: '❌ Cancel.la' },{ vl: 'Perfil d`Adreça bitcoin eliminat de la plataforma !' },{ vl: 'Agraïts per la seva permanència. Si en qualsevol moment ho requereix, quedem a la seva disposició, pot accedir amb qualsevol direcció bitcoin de la seva propietat.' },{ vl: 'Perfil d`adreça bitcoin eliminat amb èxit' },{ vl: 'Si us plau assegureu-vos de concloure les transaccions en curs abans d`eliminar el perfil' }],

                [{ vl: 'Não há transações em andamento. Remoção processada do perfil na plataforma.!' },{ vl: 'Excluir perfil completo do endereço bitcoin?' },{ vl: 'Endereço Bitcoin:' },{ vl: '✅ Confirme' },{ vl: '❌ Cancelar' },{ vl: 'Perfil de endereço Bitcoin removido da plataforma!' },{ vl: 'Grato pela sua permanência. Se a qualquer momento você solicitar, ficaremos à sua disposição, você pode acessar com qualquer endereço bitcoin de sua propriedade.' },{ vl: 'Perfil de endereço Bitcoin removido com sucesso' },{ vl: 'Certifique-se de concluir suas transações em andamento antes de excluir o perfil!' }],                                              
               ],                                                         
      },
      f_savetofecha: {
       swal: [
                [{ vl: '¿ Confirmar creación de Tx 🔂Retiro de Seguridad ?' },{ vl: 'CONSIDERACIONES: <br><br> <article align=left style=font-size:14px><ol> <li> Esta Tx de Retiro de Seguridad, garantiza el reintegro COMPLETO DE TODOS SUS FONDOS, caso extremo que el sitio quedara inaccesible en el tiempo.<br></li> <li>Para cualquier retiro parcial o total, en condiciones normales, utilize los ↪️ Retiros de Garantía.<br> </li><li>La emisión de esta Tx a la red sólo será posible a partir de la fecha determinada, FECHA (LOCKTIME) NO EDITABLE UNA VEZ FIJADA. La Tx 🔂Retiro de Seguridad es regenerable y editable, sin alterar la fecha estipulada.<br></li><li> La fecha designada implica el vencimiento de la dirección 🔐 Multigarantía Multifirma en el sitio. Pudiendo regenerar una nueva y vacia en tal vencimiento.<br></li><li> La Tx 🔂Retiro de Seguridad una vez creada, se regenera automaticamente después de cualquier intercambio o retiro, se entrega firmada y abierta para añadir  entradas; o añadir, modificar y eliminar salidas. Modificada o no, caso de necesitarla, sólo requiere firmarla y emitirla a partir de la fecha designada.<br> Si realiza cualquier nuevo aporte a la dirección 🔐 Multigarantía Multifirma, dispone de un botón para regenerar la Tx 🔂Retiro de Seguridad caso de no producirse algún retiro o intercambio nuevo. <br></li><li>Una fecha/vencimiento más lejano implica menos gastos de minería bitcoin evitando nuevos envios a una nueva dirección de garantia. Los aportes a la garantia por importes amplios implican menos cantidad de envios y por tanto menos donaciones a mineros bitcoin.</li> <li>Logicamente habilitamos esta funcionalidad, como medida vital de seguridad, para que ningún fondo en garantia pueda perderse por ningún motivo. Por lo tanto recomendamos su habilitación, asi no se use, y aunque sea a un vencimiento amplio(por Ej. entre 1 a 12 meses).</li></ol></article>' },{ vl: '✅ OK GENERAR' },{ vl: '❌ CANCELAR' }],

                [{ vl: 'Confirm creation of Tx 🔂Security Withdrawal?' },{ vl: 'CONSIDERATIONS: <br><br> <article align=left style=font-size:14px><ol> <li> This Security Withdrawal Tx guarantees the FULL refund of ALL YOUR FUNDS, in the extreme case that the site will be inaccessible over time.<br></li> <li>For any partial or total withdrawal, under normal conditions, use the ↪️ Guarantee Withdrawals.<br> </li><li>The issuance of this Tx to the network it will only be possible from the determined date, DATE (LOCKTIME) NOT EDITABLE ONCE FIXED. The Tx 🔂Security Withdrawal is regenerable and editable, without altering the stipulated date.<br></li><li> The designated date implies the expiration of the 🔐 Multiguarantee Multisignature address on the site. Being able to regenerate a new and empty one on such expiration.<br></li><li> The Tx 🔂Security Withdrawal once created, is automatically regenerated after any exchange or withdrawal, it is delivered signed and opened to add entries; or add, modify and delete outputs. Modified or not, if you need it, you only need to sign it and issue it as of the designated date.<br> If you make any new contribution to the address 🔐 Multi-guarantee Multi-signature, you have a button to regenerate the Tx 🔂 Security Withdrawal in case of no take place any new withdrawal or exchange. <br></li><li>A later date/expiration implies less bitcoin mining expenses avoiding new shipments to a new collateral address. Contributions to the guarantee for large amounts imply fewer shipments and therefore fewer donations to bitcoin miners.</li> <li>Logically, we enable this functionality, as a vital security measure, so that no guarantee fund can be lost for any reason. Therefore, we recommend its authorization, even if it is not used, and even if it is at a long maturity (for example, between 1 to 12 months).</li></ol></article>' },{ vl: '✅ OK GENERAR' },{ vl: '❌ CANCELAR' }],

                [{ vl: 'Confirma a criação do Tx 🔂Security Withdrawal?' },{ vl: 'CONSIDERACIONS: <br><br> <article align=left style=font-size:14px><ol> <li> Aquesta Tx de Retir de Seguretat garanteix el reintegrament COMPLET DE TOTS ELS SEUS FONS, cas extrem que el lloc quedés inaccessible en el temps.<br></li> <li>Per qualsevol retir parcial o total, en condicions normals, utilitzeu els ↪️ Retirs de Garantia.<br> </li><li>L`emissió d`aquesta Tx a la xarxa només serà possible a partir de la data determinada, DATA (LOCKTIME) NO EDITABLE UNA VEGADA FIXADA. La Tx 🔂Retir de Seguretat és regenerable i editable, sense alterar la data estipulada.<br></li><li> La data designada implica el venciment de la direcció 🔐 Multigarantia Multifirma al lloc. Podent regenerar una nova i buida en aquest venciment.<br></li><li> La Tx 🔂Retir de Seguretat una vegada creada, es regenera automàticament després de qualsevol intercanvi o retir, es lliura signada i oberta per afegir entrades; o afegir, modificar i eliminar sortides. Modificada o no, en cas de necessitar-la, només requereix signar-la i emetre-la a partir de la data designada.<br> Si realitza qualsevol nova aportació a l`adreça 🔐 Multigarantia Multifirma, disposa d`un botó per regenerar la Tx cas de no produir-se algun retir o intercanvi nou. <br></li><li>Una data/venciment més llunyà implica menys despeses de mineria bitcoin evitant nous enviaments a una nova adreça de garantia. Les aportacions a la garantia per imports amplis impliquen menys quantitat d`enviaments i, per tant, menys donacions a miners bitcoin. </li> <li>Logicament habilitem aquesta funcionalitat, com a mesura vital de seguretat, perquè cap fons en garantia es pugui perdre per cap motiu. Per tant recomanem la seva habilitació, així no es faci servir, i encara que sigui a un venciment ampli(per Ex. entre 1 a 12 mesos).</li></ol></article>' },{ vl: '✅ OK GENERAR' },{ vl: '❌ CANCELAR' }],

                [{ vl: '¿ Confirmar creación de Tx 🔂Retiro de Seguridad ?' },{ vl: 'CONSIDERAÇÕES: <br><br> <article align=left style=font-size:14px><ol> <li> Este Security Withdrawal Tx garante o reembolso TOTAL de TODOS OS SEUS FUNDOS, no caso extremo de o site ficar inacessível ao longo do tempo.<br></li> <li>Para qualquer retirada parcial ou total, em condições normais, utilize a ↪️ Garantia de Retiradas.<br> </li><li>A emissão deste Tx para a rede será só será possível a partir da data determinada, DATE (LOCKTIME) NÃO EDITÁVEL UMA VEZ FIXADO. O Tx 🔂Security Retirada é regenerável e editável, sem alterar a data estipulada.<br></li><li> A data designada implica a expiração do endereço de 🔐 Multigarantia Multiassinatura no site. Podendo regenerar um novo e vazio em tal vencimento.<br></li><li> O Tx 🔂Segurança Retirada uma vez criado, é regenerado automaticamente após qualquer troca ou retirada, é entregue assinado e aberto para adicionar entradas; ou adicionar, modificar e excluir saídas. Modificado ou não, se você precisar, basta assiná-lo e emiti-lo a partir da data designada.<br> Se você fizer alguma nova contribuição para o endereço 🔐 Multi-garantia Multi-assinatura, você tem um botão para regenerar o Tx 🔂 Retirada de Segurança em caso de não ocorrer nova retirada ou troca. <br></li><li>Uma data/expiração posterior implica menos despesas de mineração de bitcoin, evitando novas remessas para um novo endereço de garantia. Contribuições para a garantia de grandes quantias implicam em menos remessas e, portanto, menos doações para mineradores de bitcoin.</li> <li>Logicamente, habilitamos essa funcionalidade, como uma medida de segurança vital, para que nenhum fundo de garantia possa ser perdido por qualquer motivo. Por isso, recomendamos a sua autorização, mesmo que não seja utilizada, e mesmo que seja de longo prazo (por exemplo, entre 1 a 12 meses).</li></ol></article>' },{ vl: '✅ OK GENERAR' },{ vl: '❌ CANCELAR' }],                                             
               ],                                                         
      },

    };
  },
  watch: {
      timerCountfin: {
        handler(value) {
          //console.log(this.User.IDTX_RETIRO)
          if (value > 0 & this.User.IDTX_RETIRO !== "⏳") {
            setTimeout(() => {
              this.timerCountfin--;
            }, 1000);
          }

            if (this.User.IDTX_RETIRO !== "⏳") {
              if (value === 0) {
                this.clean_retiro(); // falta probar
              }
            } else {
              this.timerCountfin = 600;
            }        
        },
        immediate: false, // This ensures the watcher is triggered upon creation
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
    redutxid(value) {
      return value.substr(0, 27);
    },                
    reduaddr(value) {
      return value.substr(0, 8);
    },    
  },  
  computed: {
    ...mapState(["token"]),
    ...mapGetters([
      "estaActivo",
      "nomuser",
      "iduser",
      "selectedNumAlerts",
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
      "selectedlang"
    ]),
  },
  created() {
    this.listarUser();
  },
  methods: {
    ...mapMutations(["obtenerUsuario"]),
    ...mapActions([
      "leerToken",
      "cerrarSesion",      
      "syncUpdateNumAlerts",
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
      "syncUpdateMoneda",              
      "syncUpdateLang"
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
          //this.pasteIDl(this.idliberacion);
        }
    },
    onDecode_2signs(decodedString) {
        this.tx2firmas = decodedString;
        if (this.tx2firmas !== null) {
          this.verqrget = false;
          this.pasteTx2(this.tx2firmas);
        }
    },        
    alertashow(textoshow) {
      //console.log('****->'+textoshow);
        this.mensaje.color = "success";
        this.mensaje.texto = textoshow;
        this.showAlert();
    },
    updateRetir() {    
      this.selectedretir = !this.selectedretir;
    },    
    round8(num) {
        if (num > 0) num = parseFloat(num).toFixed(20);                  
        return +(Math.round(num + "e+8") + "e-8");
    },
    async getsaldo_tt(address) {
          let adr = address;
          let addressB64;
          addressB64 = Buffer.from(adr).toString("base64");
       try {          
          let response = await this.axios
            .get(`/rpc-getsaldott/${addressB64}`)
              this.saldo_tt = response.data.balance;
              //this.saldolu = this.saldo;
              if (this.saldo_tt === null) {
                this.saldo_tt = 0;
               // this.saldolu = this.saldo;                
              }              
              this.saldo_tt = this.round8(this.saldo_tt);

              if (isNaN(this.saldo)) {
                this.saldo_tt = 0;
                //this.saldolu = this.saldo;
              }
              //console.log('**saldo lu**->'+this.saldo);
              return this.saldo_tt;

            } catch (error) {console.log(); }
    },        
    async getsaldo(address) {
          let adr = address;
          let addressB64;
          addressB64 = Buffer.from(adr).toString("base64");
       try {          
          let response = await this.axios
            .get(`/rpc-getsaldo-lu/${addressB64}`)
              this.saldo = response.data;
              this.saldolu = this.saldo;
              if (this.saldo === null) {
                this.saldo = 0;
                this.saldolu = this.saldo;                
              }              
              this.saldo = this.round8(this.saldo);

              if (isNaN(this.saldo)) {
                this.saldo = 0;
                this.saldolu = this.saldo;
              }
              //console.log('**saldo lu**->'+this.saldo);
              return this.saldo;

            } catch (error) {console.log(); }
    },
    getsaldolag(address) {
        let adr = address;
        let addressB64;
        addressB64 = Buffer.from(adr).toString("base64");
        this.axios
          .get(`/rpc-getsaldo/${addressB64}`)
          .then((res) => {            
            this.saldo = res.data;
            this.saldolag = this.saldo;
            //console.log('**saldo lag**->'+this.saldo);
            if (this.saldo === null) {
              this.saldo = 0;
              this.saldolag = this.saldo;
            }            
            this.saldo = parseFloat(this.saldo);
            if (isNaN(this.saldo) | this.saldo === null) {
              this.saldo = 0;
              this.saldolag = this.saldo;
            }
            //return this.saldo;
          })
          .catch((e) => {});
    },        
    cdadbtcretir() {
     // console.log('**saldoooo**->'+this.saldo);
     if (this.cdadbtcretiro > this.saldo) this.cdadbtcretiro = this.saldo;
     if ( this.selectedretir ) {
      let minsbtc = (((this.User.FEEFORRETRAW * 650)+1)/100000000 ) * 2;
     // console.log('**minsbtc**->'+minsbtc);
      let minoutposible = minsbtc;                 
      if (this.cdadbtcretiro < minoutposible)  this.cdadbtcretiro = this.round8(minoutposible);      
     // console.log('**cdadbtcretiro**->'+this.cdadbtcretiro);
      if (this.cdadbtcretiro <= 0 )  this.cdadbtcretiro = 0;
     }
     if ( !this.selectedretir ) {     
      if (this.cdadbtcretiro <= 0 )  this.cdadbtcretiro = 0.00000546;
     }                       
    },
    cdadusdtretir() {
      //console.log('**saldoooo**->'+this.saldo);
      if (this.cdadusdtretiro < 1.00) this.cdadusdtretiro = 1.00;
      if (this.cdadusdtretiro > this.saldo_tt) this.cdadusdtretiro = this.saldo_tt;
      if (this.cdadusdtretiro > 0 & (this.cdadbtcretiro === null | this.cdadbtcretiro < 0.00000546)) this.cdadbtcretiro = 0.00000546;      
      
    },       
    setfee() {
      // recoger primero ratios fee segun pool

        axios
          .get("https://api.blockchain.info/mempool/fees")
          .then((response) => {
             //  console.log("m." + response.data.limits.min+" e." + response.data.regular+" R." + response.data.priority+" mx." + response.data.limits.max);
            this.fee_rec = response.data.priority;
            
            if (this.fee_rec < 2) { // cuando No consigue los valores de la api
              if (this.fee_tipo.mtx[this.svl()][0].vl === "Recomendada") {

                this.fee_rec = 3;

              } else {

                this.fee_rec = 2;
                             
              }
              this.User.FEEFORRETRAW = fee_rec;

            } else { // cuando Si consigue los valores de la api

                this.fee_rec = response.data.priority;
                         
                this.fee_eco = response.data.regular;

                this.fee_min = response.data.limits.min;
                                                 
                this.fee_max = response.data.limits.max;
  
            }
           
                 //console.log("fee recogido rec..." + this.fee_rec);
                 //console.log("fee recogido eco..." + this.fee_eco);
                 //console.log("fee recogido min..." + this.fee_min);
                 //console.log("fee recogido max..." + this.fee_max);                                    


        if (this.User.RETRAWTXSIGNEDARB === '⏳') {

            if (this.selectedlang === 'ESP') {
              if (this.fee_tipo.mtx[this.svl()][0].vl === "Recomendada") {
                this.User.FEEFORRETRAW = this.fee_rec;                
              } else if (this.fee_tipo.mtx[this.svl()][0].vl === "Económica") {
                this.User.FEEFORRETRAW = this.fee_eco;                
              } else if (this.fee_tipo.mtx[this.svl()][0].vl === "Mínima") {
                this.User.FEEFORRETRAW = this.fee_min;                                   
              } else if (this.fee_tipo.mtx[this.svl()][0].vl === "Máxima") {
                this.User.FEEFORRETRAW = this.fee_max;                                   
              } 
            }
            if (this.selectedlang === 'ENG') {
              if (this.fee_tipo.mtx[this.svl()][0].vl === "Recommended") {
                this.User.FEEFORRETRAW = this.fee_rec;                
              } else if (this.fee_tipo.mtx[this.svl()][0].vl === "Economical") {
                this.User.FEEFORRETRAW = this.fee_eco;                 
              } else if (this.fee_tipo.mtx[this.svl()][0].vl === "Minimum") {
                this.User.FEEFORRETRAW = this.fee_min;                 
              } else if (this.fee_tipo.mtx[this.svl()][0].vl === "Maximum") {
                this.User.FEEFORRETRAW = this.fee_max;                
              } 
            }              
            if (this.selectedlang === 'CAT') {
              if (this.fee_tipo.mtx[this.svl()][0].vl === "Recomanada") {
                this.User.FEEFORRETRAW = this.fee_rec;               
              } else if (this.fee_tipo.mtx[this.svl()][0].vl === "Econòmica") {
                this.User.FEEFORRETRAW = this.fee_eco;                 
              } else if (this.fee_tipo.mtx[this.svl()][0].vl === "Mínima") {
                this.User.FEEFORRETRAW = this.fee_min;                 
              } else if (this.fee_tipo.mtx[this.svl()][0].vl === "Màxima") {
                this.User.FEEFORRETRAW = this.fee_max;                
              }              
            }
            if (this.selectedlang === 'PORT') {
              if (this.fee_tipo.mtx[this.svl()][0].vl === "Recomendada") {
                this.User.FEEFORRETRAW = this.fee_rec;                
              } else if (this.fee_tipo.mtx[this.svl()][0].vl === "Econômica") { 
                this.User.FEEFORRETRAW = this.fee_eco;                 
              } else if (this.fee_tipo.mtx[this.svl()][0].vl === "Mínima") {
                this.User.FEEFORRETRAWE = this.fee_min;                 
              } else if (this.fee_tipo.mtx[this.svl()][0].vl === "Máxima") {
                this.User.FEEFORRETRAW = this.fee_max;                
              }           
            }
           //console.log("this.User.FEEFORRETRAW en put..." + this.User.FEEFORRETRAW);
            // *** analizamoos que fee no supere importe del retiro *********
        /*    if (this.tx.FEE > this.tx.IMPORTECOMPRA / 1.0025) {
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
            } */
           //console.log("this.tx.FEE..." + this.tx.FEE);
         //  if (this.tx.FEE < (this.tx.IMPORTECOMPRA / 1.0025) & this.fee_OK === true ) {
        this.guardarUser();
           //} 
        } 

          });
          
    },
    pasteTx2(valor) {
        if ( valor.substr(0, 1) === '⏳' ) {
          //  console.log(valor);
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
            this.sign_check_save_arb_Retiro(valor);
          }
        }
    },
    new_mgmf() {
      this.getsaldolag(this.User.DIRMULTIFIRMA_FIANZALN);
      this.getsaldo(this.User.DIRMULTIFIRMA_FIANZALN);
     // console.log("entra en new_mgmf saldolag..." + this.saldolag + "saldolu..." + this.saldolu);
            Swal.fire({
              title: this.f_new_mgmf.mtx[this.svl()][0].vl,
              html: this.f_new_mgmf.mtx[this.svl()][1].vl,
              showCancelButton: true,
              confirmButtonColor: "seagreen",
              cancelButtonColor: "tomato",
              confirmButtonText: this.f_new_mgmf.mtx[this.svl()][2].vl,
              cancelButtonText: this.f_new_mgmf.mtx[this.svl()][3].vl,
            }).then((result) => {
              if (result.value) {  // generar o regener
                    
              //  console.log("entra en new_mgmf saldolag..." + this.saldolag + "saldolu..." + this.saldolu);
                if (this.saldolag.toFixed(8) === this.saldolu.toFixed(8) & this.saldolu === 0) { //saldo confirmado
                 // inicilizar valores mgmf 
                this.User.DIRMULTIFIRMA_FIANZALN = '⏳';
                this.User.MF_SCRIPTPUBKEY_FIANZALN = '⏳';
                this.User.REDEEMSCRIPT_FIANZALN = '⏳';
                this.User.RETRAWTXSIGNEDARB = '⏳';
                this.User.RETRAWTXSIGNEDVEND = '⏳';
                this.User.IDTX_RETIRO = '⏳';
                this.User.FEEFORRETRAW = 1;
                this.User.RETRAWTXOPEN_LOCKTIME = '⏳';
                this.User.LOCKTIME_RAWTXOPEN = 2130000000;                
                this.User.ARBITRAJE = '⏳';
                this.guardarUser();

                router.push({name: 'Vender'}); 

                } else {
                  // faltan confirmaciones de saldo en blockchan
                        this.mensaje.color = "danger";
                        this.mensaje.texto = "⏳ Conf.🔐, " + this.f_EliminarTx.txts[this.svl()][3].vl;
                        this.showAlert();
                }

              }
            })
    },
    async gen_new_mgmf() {
        // check_none_retirorawrx *********falta falta falta ******
        let txsss = [];
        // todas las txs donde sea comprador o vendedor
        let config = {
          headers: {
            token: this.token,
          },
        };
       try {        
        let response = await this.axios
          .get("/leer-transac", config)

            txsss = response.data; // todas las tx este como vendedor, ojo orden antiguedad       
            //console.log("txsss.length... " + txsss.length);  
            if (txsss.length > 0) { // hay tx             
              for (var i = 0; i < txsss.length; i++) {
                
                      if (
                        ( txsss[i].VENDEDOR !== this.nomuser | txsss[i].DOCS_COMPRADOR === '⏳')
                      ) { // solo dejamos las en curso ACEPTADAS VENDEDOR
                        txsss.splice(i, 1);
                        i = i - 1;
                        //console.log("entra en splice");
                      } else if ( txsss[i].VENDEDOR === this.nomuser | txsss[i].DOCS_COMPRADOR !== '⏳') { // si hay tx en curso 
                          // console.log("entra en return nofree"); 

                          Swal.fire(
                            this.f_rechazarSolicitud.swf3[this.svl()][2].vl,
                            this.f_rechazarSolicitud.swf3[this.svl()][1].vl + "Tx: " +txsss[i].IMPORTEMONEDA + " " + txsss[i].MONEDAOFERTA + " 🔄 " + txsss[i].CADENARED + txsss[i].IMPORTECOMPRA + " BTC. ",
                            "warning"
                          );                           
                                           
                      }
                      //console.log(txsss.length); 
                      if (txsss.length === 0) { // garantia no ocupada
                           console.log("entra en return free1"); 
       
                          this.new_mgmf();                          
                      }                      
              }
            }
            if (txsss.length === 0) { // no hay tx
                          // console.log("entra en return free2");  
                          this.new_mgmf();                       
            }

       } catch (error) {console.log(); }                  
    },       
    check_none_tx_oncurse(cadena) {
      if (cadena === '₿') this.cdadbtcretir();
      if (cadena === '₮') { this.cdadbtcretir(); this.cdadusdtretir();}
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
                     
              for (var i = 0; i < txsss.length; i++) {
                
                      if (
                        ( txsss[i].VENDEDOR !== this.nomuser | txsss[i].DOCS_COMPRADOR === '⏳' )
                      ) { // solo dejamos las en curso ACEPTADAS VENDEDOR
                        txsss.splice(i, 1);
                        i = i - 1;
                      } else { // si hay tx en curso
                        // console.log('no eliminar'+i)
                        //console.log(txsss[i]);                      
                          // no podemos generar tx retiro hasta fin tx en curso
                          Swal.fire(
                            this.f_rechazarSolicitud.swf3[this.svl()][0].vl,
                            this.f_rechazarSolicitud.swf3[this.svl()][1].vl + "Tx: " +txsss[i].IMPORTEMONEDA + " " + txsss[i].MONEDAOFERTA + " 🔄 " + txsss[i].CADENARED + txsss[i].IMPORTECOMPRA + ". ",
                            "warning"
                          );                          
                            return 'nofree'                   
                      }
                      //console.log(txsss.length); 
                      if (txsss.length === 0) { // garantia no ocupada
                        this.createRawTxRetiro(cadena);                       
                      }                      
              }
            if (txsss.length === 0) { // garantia no ocupada
                        this.createRawTxRetiro(cadena);                       
            }
          })
          .catch((e) => {
            console.log(e);
          });        
    },    
    to1month() {
      return moment().add(30, 'd').format("yyyy-MM-DD"); 
    },
    savetofecha() {
      //console.log(moment().add(180, 'd').format("yyyy-MM-DD"));
      //this.vtoafecha = moment().add(180, 'd').format("yyyy-MM-DD");
      //console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
      //console.log(this.vtoafecha);
      //console.log(moment().add(90, 'd').format("yyyy-MM-DD"));
      // https://programmerclick.com/article/68711567151/
      // https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/ 

       
      Swal.fire({
          title: this.f_savetofecha.swal[this.svl()][0].vl,
          html: this.f_savetofecha.swal[this.svl()][1].vl,
              showCancelButton: true,
              confirmButtonColor: "seagreen",
              cancelButtonColor: "tomato",
              confirmButtonText: this.f_savetofecha.swal[this.svl()][2].vl,
              cancelButtonText: this.f_savetofecha.swal[this.svl()][3].vl,
      }).then((result) => {
        if (result.value) {
      
        
        if (this.vtoafecha < moment().add(30, 'd').format("yyyy-MM-DD")) this.vtoafecha = moment().add(30, 'd').format("yyyy-MM-DD");     
        if (this.vtoafecha > moment().add(10, 'Y').format("yyyy-MM-DD")) this.vtoafecha = moment().add(10, 'Y').format("yyyy-MM-DD");
        this.User.LOCKTIME_RAWTXOPEN = this.toTstamp(this.vtoafecha);
        //console.log(this.User.LOCKTIME_RAWTXOPEN);
        //console.log(moment.unix(this.User.LOCKTIME_RAWTXOPEN).format("yyyy-MM-DD"));
        this.createopenraw();

        }
      });       

    },
    toTstamp(strDate){
        let datum = Date.parse(strDate);
        return datum/1000;
    },
    Tstamptomoment(Tstamp){
      //console.log(Tstamp)
     // console.log(moment.unix(Tstamp).format("yyyy-MM-DD"));
        let datum = moment.unix(Tstamp)
        return datum;
    },
    re_createopenraw() {    
            this.User.RETRAWTXOPEN_LOCKTIME = "⏳"; 
            this.createopenraw();
    },
    createopenraw() {
       // RETRAWTXSIGNEDARB RETRAWTXSIGNEDVEND 
       //console.log("entra")

        let origenutxsB64 = Buffer.from(this.User.DIRMULTIFIRMA_FIANZALN).toString("base64");
        let dirdestinoB64 = Buffer.from(this.User.NOMBREUSUARIO).toString("base64");    
        let dirarbitrajeB64 = Buffer.from(this.User.ARBITRAJE).toString("base64");
        let mfscriptPkB64 = Buffer.from(this.User.MF_SCRIPTPUBKEY_FIANZALN).toString("base64");
        let redeemB64 = Buffer.from(this.User.REDEEMSCRIPT_FIANZALN).toString("base64");
        let feeminers =  this.User.FEEFORRETRAW;
        let locktimeopen = this.User.LOCKTIME_RAWTXOPEN;

       if (this.User.RETRAWTXOPEN_LOCKTIME === "⏳" & this.User.RETRAWTXSIGNEDARB === "⏳" &  this.saldo > 0) { 

                Swal.fire(
                  this.f_createopenraw.txts[this.svl()][0].vl,
                  this.f_createopenraw.txts[this.svl()][1].vl,
                  "success"
                );

            if (this.saldo > 0 | this.saldo_tt > 0 ) {
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
            }           
              
              
       } else {
                this.mensaje.color = "danger";
                this.mensaje.texto = "₿ " + this.saldo + ". " + this.f_EliminarTx.txts[this.svl()][3].vl;
                this.showAlert();         
       }

    },      
    createRawTxRetiro(cadena) {
       // RETRAWTXSIGNEDARB RETRAWTXSIGNEDVEND 
       //console.log("entra")
        let origenutxsB64 = Buffer.from(this.User.DIRMULTIFIRMA_FIANZALN).toString("base64");
        let dirdestinoB64 = Buffer.from(this.User.NOMBREUSUARIO).toString("base64");    
        let dirarbitrajeB64 = Buffer.from(this.User.ARBITRAJE).toString("base64");
        let btc_avendedor = this.cdadbtcretiro;
        let mfscriptPkB64 = Buffer.from(this.User.MF_SCRIPTPUBKEY_FIANZALN).toString("base64");
        let redeemB64 = Buffer.from(this.User.REDEEMSCRIPT_FIANZALN).toString("base64");
        let feeminers =  this.User.FEEFORRETRAW;
        let minret = 0.00000546 + ((this.User.FEEFORRETRAW * 650)/100000000);

       if (this.User.RETRAWTXSIGNEDARB === "⏳" &  this.saldo > minret & cadena === '₿' ) { // crear raw sin locktime
            this.axios
              .get(
                `/rpc-createrawtxRetiro/${origenutxsB64},${dirdestinoB64},${btc_avendedor},${dirarbitrajeB64},${mfscriptPkB64},${redeemB64},${feeminers}`
              )
              .then((res) => {
                let rawTxHexa = res.data;
                  //console.log("leido rawTxHexa : " + rawTxHexa);                
                  this.User.RETRAWTXSIGNEDARB = rawTxHexa;
                  //console.log("leido rawTxHexa : " + this.User.RETRAWTXSIGNEDARB);
                  // grabar
                  this.guardarUser();
                
              })
              .catch((e) => console.log(e));                   
       } else {
                if (cadena === '₿') {
                this.mensaje.color = "danger";
                this.mensaje.texto = "₿ " + this.saldo + ". " + this.f_EliminarTx.txts[this.svl()][3].vl;
                this.showAlert();
                }        
       }


       let usdt_avendedor = this.cdadusdtretiro;
       if (this.User.RETRAWTXSIGNEDARB === "⏳" &  this.saldo > minret &  this.saldo_tt > 0 & cadena === '₮' ) { // crear raw sin locktime
            this.axios
              .get(
                `/rpc-createrawtxRetiroTT/${origenutxsB64},${dirdestinoB64},${usdt_avendedor},${btc_avendedor},${dirarbitrajeB64},${mfscriptPkB64},${redeemB64},${feeminers}`
              )
              .then((res) => {
                let rawTxHexa = res.data;
                 //console.log("leido rawTxHexa : " + rawTxHexa);                
                 this.User.RETRAWTXSIGNEDARB = rawTxHexa;
                  //console.log("leido rawTxHexa : " + this.User.RETRAWTXSIGNEDARB);
                  // grabar
                 this.guardarUser();
                
              })
              .catch((e) => console.log(e));                   
       } else {
                if (cadena === '₮') {
                this.mensaje.color = "danger";
                this.mensaje.texto = "₿ " + this.saldo + ". " + " ₮ " + this.saldo_tt + ". " +  this.f_EliminarTx.txts[this.svl()][3].vl;
                this.showAlert();
                }        
       }

    },   
    sign_check_save_arb_Retiro(rawtxsignedvend) {
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
            `/rpc-signedtocheckcomplete/${rawtxsignedvendB64},${dirarbitrajeB64}`,config
          )
          .then((res) => {
            let rawTxHexa_endsignedarb_complete = res.data.complete;
            //  console.log("rawTxHexa_endsignedarb_complete "+rawTxHexa_endsignedarb_complete); // = true comprobado con las 2

              if (rawTxHexa_endsignedarb_complete === true ) {
                this.User.RETRAWTXSIGNEDVEND = res.data.hex;
                this.guardarUser();
                this.sendtx();
               }              

          })
          .catch((e) => {
            // mensaje en pantalla de no firma FALTA *****FALTA no es uns tx  correcta
              console.log(e.response.data.mensaje);
              this.User.RETRAWTXSIGNEDVEND = "⏳";
          });                          
    },
    sendtx() {
        //desencryptar, enviar Tx y grabar Tx ID
        let entrega_ok = 'NO';
        if ( this.User.IDTX_RETIRO !== '⏳' & this.User.IDTX_RETIRO !== null ) entrega_ok = 'SI';      
        if ( entrega_ok === 'NO' ) {
            let config = {
              headers: {
                token: this.token,
              },
            };

              this.axios
                .get(`/rpc-sendrawtransaction/${this.User.RETRAWTXSIGNEDVEND}`, config)
                .then((res) => {
                  let resp = res.data;
                  //  console.log("resultado del sendrawtransaction..." + resp);
                  this.User.IDTX_RETIRO = resp;
                  this.timerCountfin = 600;
                  this.guardarUser();

                })
                .catch((e) => {});

        } else {
                this.mensaje.color = "danger";
                this.mensaje.texto = this.f_EliminarTx.txts[this.svl()][3].vl;
                this.showAlert();          
        }          

    },
    clean_retiro() {   
     // limpiar firmas y IDTX
        this.entrega_lista = 'NO';
        if ( this.User.IDTX_RETIRO !== '⏳' & this.User.IDTX_RETIRO !== null ) {
        let idl = this.User.IDTX_RETIRO;
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
            if  ( this.conf_idl > 5) {

                this.entrega_lista = 'SI';

                if ( this.entrega_lista === 'SI' ) {
                  // limpiar firmas y IDTX
                  //console.log("confirmaciones idl..." + idrespu.confirmations);
                 // console.log("this.User.RETRAWTXOPEN_LOCKTIME ... this.saldo ... this.User.LOCKTIME_RAWTXOPEN ..." + this.User.RETRAWTXOPEN_LOCKTIME + " .. " + " .. " + this.saldo + " .. " + this.User.LOCKTIME_RAWTXOPEN );
                  this.User.RETRAWTXSIGNEDARB = '⏳'; 
                  this.User.RETRAWTXSIGNEDVEND = '⏳';
                  this.User.IDTX_RETIRO = '⏳';
                  this.User.FEEFORRETRAW = 2;
                  this.guardarUser();

                  if (this.saldo > 0 & this.User.LOCKTIME_RAWTXOPEN !== 2130000000) {
 
                    this.re_createopenraw();

                  }

                } 

            } else {
                        this.mensaje.color = "danger";
                        this.mensaje.texto = this.conf_idl + " Conf.🔐," + this.f_EliminarTx.txts[this.svl()][3].vl;
                        this.showAlert(); 
                this.entrega_lista = 'NO';
                this.timerCountfin = 600; 
            }
            
          })
          .catch((e) => {console.log(e.response);});            
        }     

    },         
    Validateemail(email) {
      let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
      if (regexp.test(email)) { 
        this.mensaje.color = 'success';
      this.mensaje.texto = this.f_valiemail.mtx[this.svl()][0].vl;          
        this.dismissSecs = 1;
        this.showAlert();
        this.dismissSecs = 5;
        this.emailok = true;         
        return (true)  
      }  
      this.mensaje.color = 'danger';
      this.mensaje.texto = this.f_valiemail.mtx[this.svl()][1].vl; 
      this.dismissSecs = 1;
      this.showAlert();
      this.dismissSecs = 5;
      this.emailok = false;                     
      return (false)     
    },
    ValidateIPaddress(ipaddress) { 
      if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) { 
        this.mensaje.color = 'success';
      this.mensaje.texto = this.f_valiIP.mtx[this.svl()][0].vl;          
        this.dismissSecs = 1;
        this.showAlert();
        this.dismissSecs = 5;         
        return (true)  
      }  
      this.mensaje.color = 'danger';
      this.mensaje.texto = this.f_valiIP.mtx[this.svl()][1].vl;  
      this.dismissSecs = 1;
      this.showAlert();
      this.dismissSecs = 5;              
      return (false)
    },     
    listarUser() {
        axios
        .get("https://api.ipify.org?format=json")
        .then((response) => {
          //console.log("IP del usuario..." + response.data.ip);
          this.ip_conexion = response.data.ip;
          })
        .catch((e) => {});  
      this.verperfil = !this.verperfil;
      this.verseguridad = false;
      this.vergarantias = false;      
      this.vereditarperfil = false;
      this.verpreferencias = false;
      this.verblockchain = false;
      // leer id, address, emails user on line
      let adr = this.nomuser;
      let addressB64;
      addressB64 = Buffer.from(adr).toString("base64");
      this.axios
        .get(`/seekUser/${addressB64}`)
        .then((res) => { // usuario
         this.User = res.data;
         this.getsaldo(this.User.DIRMULTIFIRMA_FIANZALN);
         this.getsaldo_tt(this.User.DIRMULTIFIRMA_FIANZALN);         
          if ( this.User.IDTX_RETIRO !== '⏳' & this.User.IDTX_RETIRO !== null ) { 
            this.timerCountfin = 600;
            this.clean_retiro(); 
            }         
        })
        .catch((e) => {});
    },
    editarSeguridad() {
      this.verperfil = false;
      this.verseguridad = !this.verseguridad;
      this.vergarantias = false;      
      this.vereditarperfil = false;
      this.verpreferencias = false;
      this.verblockchain = false;      
    },
    editarGarantias() {
      this.verperfil = false;
      this.verseguridad = false;      
      this.vergarantias = !this.vergarantias;
      this.vereditarperfil = false;
      this.verpreferencias = false;
      this.verblockchain = false;
    },
    editarRetiros() {
      this.verretirodeseguridad = false;
      this.verretiro = !this.verretiro;
      //this.verseguridad = false;      
      //this.vergarantias = !this.vergarantias;
      //this.vereditarperfil = false;
      //this.verpreferencias = false;
    },
    editarRetirodeSeguridad() {
      this.verretiro = false;
      this.verretirodeseguridad = !this.verretirodeseguridad;      
      //this.verseguridad = false;      
      //this.vergarantias = !this.vergarantias;
      //this.vereditarperfil = false;
      //this.verpreferencias = false;
    },            
    editarperfil() {
      this.verperfil = false;
      this.verseguridad = false;
      this.vergarantias = false;      
      this.vereditarperfil = !this.vereditarperfil;
      this.verpreferencias = false;
      this.verblockchain = false;  
    },
    editarPreferencias() {
      this.verperfil = false;
      this.verseguridad = false;
      this.vergarantias = false;      
      this.vereditarperfil = false;
      this.verpreferencias = !this.verpreferencias;
      this.verblockchain = false; 
    },
    editarBlockchain() {
      this.verperfil = false;
      this.verseguridad = false;
      this.vergarantias = false;      
      this.vereditarperfil = false;
      this.verpreferencias = false;
      this.verblockchain = !this.verblockchain;
    },    
    guardarPref() {   
    this.guardarUser();
    },            
    guardarSeguridad() {
     // console.log(this.User.IP1);console.log(this.User.IP2);console.log(this.User.IPSHABITUALES);
     if (!this.ValidateIPaddress(this.User.IP1)) {       
      this.mensaje.texto = this.f_guardaseg.mtx[this.svl()][0].vl;                         
            this.mensaje.color = "danger";
            this.showAlert();       
       this.User.IP1 = this.ip_conexion;
       }
     if (!this.ValidateIPaddress(this.User.IP2)) {
      this.mensaje.texto = this.f_guardaseg.mtx[this.svl()][1].vl;              
            this.mensaje.color = "danger";
            this.showAlert();       
       this.User.IP2 = this.ip_conexion;
       }       
     if ((this.User.IPSHABITUALES === 'true' & this.User.IP1 === '') || (this.User.IPSHABITUALES === 'true' & this.User.IP1 === null) || (this.User.IPSHABITUALES === 'true' & this.User.IP1 === undefined)) {
      this.mensaje.texto = this.f_guardaseg.mtx[this.svl()][2].vl;                           
            this.mensaje.color = "danger";
            this.showAlert();          
     return
     } 
     if ((this.User.IPSHABITUALES === 'true' & this.User.IP2 === '') || (this.User.IPSHABITUALES === 'true' & this.User.IP2 === null) || (this.User.IPSHABITUALES === 'true' & this.User.IP2 === undefined)) {
      this.mensaje.texto = this.f_guardaseg.mtx[this.svl()][3].vl;         
            this.mensaje.color = "danger";
            this.showAlert();       
     return
     }          
    this.guardarUser();
    },
    guardarUser(){
      this.getsaldo(this.User.DIRMULTIFIRMA_FIANZALN);    
        let config = {
          headers: {
                token: this.token,
          },
        };             
        this.axios
          .put(`/usuario/${this.User._id}`, this.User, config)
          .then((res) => {
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
    eliminarUser(){
     // console.log(this.saldo + "...-..." +  this.saldo_tt);
      // todas las txs donde sea comprador o vendedor
      //  cabecera token
      let txs= [];
      let config = {
        headers: {
          token: this.token,
        },
      };
      //  console.log('tenemos el token ...'+this.token);
      this.axios
        .get("/leer-transac", config)
        .then((res) => {
          txs = res.data; // todas las tx este como comprador o vendedor, ojo orden antiguedad
         // console.log(txs.length);
      if (txs.length < 1) {
        this.mensaje.color = "success";
      this.mensaje.texto = this.f_eliminarUser.mtx[this.svl()][0].vl;           
        this.showAlert();

        Swal.fire({
          title: this.f_eliminarUser.mtx[this.svl()][1].vl,
          html:
            "<div align='left'><b>"+this.f_eliminarUser.mtx[this.svl()][2].vl+"</b><br></div>" +
            "<div style='color:seagreen'>" +
            this.nomuser +
            "</div>" +
            "<br>" +
            "<div align='left'><b>"+this.vta_perfil.gart[this.svl()][0].vl+": </b><br></div>" + 
            "<div style='color:dodgerblue'>" +
            this.User.DIRMULTIFIRMA_FIANZALN +
            "</div>" +
            " ₿·⚡ <span style=font-size:15px;color:red;>" + this.saldo.toFixed(8) + "</span>  · ₮ <span style=font-size:15px;color:red;>"+ this.saldo_tt.toFixed(2) + "</span> " +            
            "<br>"                       
            , 
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "seagreen",
          cancelButtonColor: "tomato",
          confirmButtonText: this.f_eliminarUser.mtx[this.svl()][3].vl,
          cancelButtonText: this.f_eliminarUser.mtx[this.svl()][4].vl,
        }).then((result) => {
          if (result.value) {
            Swal.fire(
              this.f_eliminarUser.mtx[this.svl()][5].vl,
              this.f_eliminarUser.mtx[this.svl()][6].vl,
              "success"
            );

        this.axios
         .delete(`/deleteusuario/${this.User._id}`,  config)
          .then((res) => {
          //   console.log(res.data);
            this.mensaje.color = 'success';
            this.mensaje.texto = this.f_eliminarUser.mtx[this.svl()][7].vl;
            this.showAlert();
           this.desconectaryCerrar();
          })
          .catch(e => {
          console.log(e.response);
          }) 
          }
        });     
            
           
      } else { 

        this.mensaje.texto = this.f_eliminarUser.mtx[this.svl()][8].vl            
        this.mensaje.color = "danger";
        this.showAlert();
      }

      })        
        .catch((e) => {
        console.log(e.response);
      });
       
    },
    desconectaryCerrar() {
      this.cerrarSesion();
    },    
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },    
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  },
 
}
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
    min-width: auto;    
    max-width: 340px;
    max-inline-size: 340px;
    writing-mode: horizontal-tb;    
    max-height: auto;
    text-align: left;
}
.popper_tl {
    z-index: 5;
    color: white;
    background-color: black;
    border-radius: 6px;
    padding: 5px 10px 1px;
    max-width: 340px;
    max-inline-size: 340px;
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
.container {
  margin-top: 10px;
  position: relative;
  width: 500px;
  height: auto;
  min-height: 380px;
  border-radius: 10px;
  // overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to bottom, rgb(246, 251, 255), rgb(233, 245, 255));
  padding: 1px;
}

button {
  margin-top: 30px;
  border-radius: 15px;
  border: 1px solid #02dd68;
  background-color: #2b8656;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 5px 10px;
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

.ver-perfil {
  position: relative;
  border-radius: 20px;
  background: rgb(221, 239, 243);
  top: auto;
  z-index: 1;
  width: auto;
  height: auto;
  padding: 10px 10px 10px 10px;
}
.edit-perfil {
  border-radius: 20px;
  background: rgb(223, 223, 223);
  top: auto;
  z-index: 1;
  width: auto;
  height: auto;
  padding: 15px 15px 15px ; 
}
.edit-secur {
  border-radius: 20px;
  background: rgb(248, 239, 201);
  top: auto;
  z-index: 1;
  width: auto;
  height: auto;
  padding: 10px 10px 10px 10px;  
}
.edit-gart {
  border-radius: 20px;
  background: rgb(255, 255, 255);
  top: auto;
  z-index: 1;
  width: auto;
  height: auto;
  padding: 10px 10px 10px 10px;  
}
.edit-pref {
  border-radius: 20px;
  background: rgb(204, 222, 226);
  top: auto;
  z-index: 1;
  width: auto;
  height: auto;
  padding: 10px 10px 10px 10px;  
}
.edit-blockc {
  border-radius: 20px;
  background: rgb(175, 218, 252);
  top: auto;
  z-index: 1;
  width: auto;
  height: auto;
  padding: 10px 10px 10px 10px;  
}
h1 {
  margin: 0;
}
h2 {
  margin: 15;
}
h3 {
  margin: 15;
}
p {
  margin: 15px 0 10px;
}


a {
  //  color: #222;
  //  text-decoration: none;
  margin: 5px 0;
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
  padding: 5px 5px;
  width: calc(50% - 600px);
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
    padding: 15px 11px;
    margin: 15px 0;
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
        font-size: 18px;
        color: #a2a2a2;
        position: absolute;
        pointer-events: none;
        top: 20px;
        left: 1px;
        max-width: 320px;
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
      max-height: 100px;

      &:focus {
        outline: none;
        background-color: #fff;
      }
    }    

}
#bformselect1 {
    background-color: #eee;
    border: none;
    padding: 5px 13px;
    margin:auto;
    width:  170px;
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
#bformselect2 {
    background-color: #eee;
    border: none;
    padding: 5px 13px;
    margin:auto;
    width:  170px;
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
#bformselect3 {
    background-color: #eee;
    border: none;
    padding: 5px 13px;
    margin:auto;
    width:  170px;
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
      background: rgb(208, 240, 228);
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
   margin-top: 32px;
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
    min-width: 337px;
    display: flex;
    margin-left: -17px;
    padding: 10.5px 30px 7.5px 40px;
    letter-spacing: 0.5px;
    min-height: 50.5px;
    max-height: 70.5px;    
    font-size: 22px;        
}

#inp_prevcant {
   z-index: 1;
   margin-top: 26.5px;
   margin-left: -30px;
   margin-right: -20px;   
   font-size: 19px;
   font-weight: 100; 
   color: #c4c4c4;
   width: 40px;
   background-color: transparent;        
}


@media screen and (max-width: 480px) {
.container {
  max-width: 360px;
  min-height: 400px;
    }              
}
</style>
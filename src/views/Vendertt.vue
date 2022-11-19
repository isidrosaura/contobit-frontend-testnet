<template>
  <div class="container">   
    <h2 style='color:rgb(80, 80, 80)'><img
                align="bottom"
                src="https://www.contobit.com/imagens/manitatt.png"
                width="43px"
                height="30.8px"
              />{{titul.matrix[svl()][0].value}}</h2>

    <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="mensaje.color"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >{{mensaje.texto}}</b-alert>

    <popper
              trigger="clickToOpen" 
              :options= popoptionsb>
              <div class="popper_tl" style="margin-left:170px;margin-right:-250px;">
                <span v-html="T_mfmg.mtx[svl()][1].vl"></span>                         
              </div>                
              <a slot="reference" class="btn btn" >
                <font-awesome-icon style="font-size:20px;color:red;"  :icon="['far', 'question-circle']" />
              </a>
    </popper>
                          <popper v-if="this.User.DIRMULTIFIRMA_FIANZALN === '⏳'" 
                                  :options= popoptionsb>
                                  <div class="popper" style="margin-left:0px;"> 
                                    <span v-html="T_mfmg.mtx[svl()][2].vl"></span>                         
                                  </div>                
                                    <a  
                                        style="padding:3px 3px 0px 3px;"
                                        href="#"
                                        slot="reference"
                                        class="btn btn-outline-primary blink-bg"
                                        @click="crea_mgmf()"
                                        >
                                        ⚙️
                                    </a>
                          </popper>     
   🔐{{T_mfmg.mtx[svl()][0].vl}}: <!--Multigarantía Ventas--> 
            <a 
              v-bind:href="url+User.DIRMULTIFIRMA_FIANZALN"
              target="_blank"
            >&nbsp;<strong> {{mgmfredu | reduaddr}}...🔗</strong></a> 
            {{T_mfmg.mtx[svl()][3].vl}}: ₮ <span style="color:DodgerBlue;">{{saldomfmg.toFixed(2)}}</span> 
            {{T_mfmg.mtx[svl()][4].vl}}: ₮ <span style="color:Red;">{{saldoresptxs.toFixed(2)}}</span> 
            {{T_mfmg.mtx[svl()][5].vl}}: ₮ <span style="color:Green;">{{round8(saldomfmg-saldoresptxs).toFixed(2)}}</span>

  <div v-if="crearmgmf" class="container_editar"
  >
  <br>
  <h5> {{T_mfmg.mtx[svl()][2].vl}} </h5>
                    <span class="floating-label-group" style="justify-content: center;align-items: center;">
                      <span id="inp_prevcant">
                               <popper
                                  trigger="clickToOpen"     
                                  :options= popoptionsl>
                                  <div class="popper_scanqr" style="margin-left:360px;margin-top:-240px;">                         
                                      <qrcode-stream
                                        v-if="verqrget === true"
                                        @decode="onDecode_Pk" style="width: 298px; height: 298px;"><span style="font-size:12px;">{{Textos_qrcode.vars[svl()][1].vl}}{{Clave_publica_de_su_Direccion_bitcoin.mtx[svl()][0].vl}}</span></qrcode-stream> 
                                  </div>                
                                  <a href="#" slot="reference" @click="verqrget = !verqrget">
                                    <popper
                                            :options= popoptions>
                                            <div class="popper" >                         
                                                <span v-html="Textos_qrcode.vars[svl()][2].vl"></span> {{Clave_publica_de_su_Direccion_bitcoin.mtx[svl()][0].vl}} 
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
                      <input id="inp_solic" type="text"
                      style="padding:15px;width:330px;"  v-model="pubvendedor"
                        autocomplete="off" autofocus
                        @paste="pastepubv(pubvendedor)" @input="pastepubv(pubvendedor)" required />
				                <label class="floating-label">{{Clave_publica_de_su_Direccion_bitcoin.mtx[svl()][0].vl}}</label>
                        <popper
                              trigger="clickToOpen"
                              :options= popoptionsb>
                              <div class="popper_tl" style="margin-left: -300px">                         
                                  <span v-html="Clave_publica_de_su_Direccion.pte1[svl()][0].vl"></span> 
                              </div>                
                              <a  href="#" slot="reference" > <!-- class="btn btn btn-sm" -->
                                <font-awesome-icon id="inp_in_hlp" :icon="['far', 'question-circle']" />
                              </a>
                        </popper>                         
			              </span>
  <br><br>                      
  </div>

  <div class="container_agregar">
    <h5 v-if="!editar"> {{titul.matrix[svl()][2].value}}
        <popper
              trigger="clickToOpen" 
              :options= popoptionsb>
              <div class="popper_tl" style="margin-left:-250px;">
                <span v-html="titul.matrix[svl()][1].value"></span>                         
              </div>                
              <a slot="reference" class="btn btn" >
                <font-awesome-icon style="font-size:20px;color:grey;"  :icon="['far', 'question-circle']" />
              </a>
        </popper>        
    </h5>                            

    <form id="formato" @submit.prevent="agregarVenta()" v-if="!editar">
        <popper
              :options= popoptionsb>
              <div class="popper" style="margin-left:0px;">
                <span v-html="selch.matrix[svl()][0].value"></span>                         
              </div>                
              <a  slot="reference"
                      id="selchain"
                      class="btn col-0 my-2"                                  
                      @click="fillcadenared()"
              >
              <b v-if="compra.CADENARED === '₮'"><i><font color="Black">⛓️</font></i></b>
              </a>               
        </popper>      
        <popper
              :options= popoptionsb>
              <div class="popper" style="margin-left:0px;">
                <span v-html="etiq.mtr[svl()][0].value"></span>                         
              </div>                
              <span class="floating-label-group" slot="reference">                         
                  <textarea maxlength="65" v-model="compra.FORMADEPAGO" autocomplete="off" autofocus style="margin:10px 4px 5px 4px;min-width:165px;max-width:auto;"
                    required ></textarea>
                  <label class="floating-label">{{detalls.mtr[svl()][0].value}}</label>                         
              </span> 
        </popper>
      
      <input
        type="hidden"
        placeholder="Grupo cobro"
        class="col-1 mx-2 my-2"
        v-model="compra.GRUPOBANCO"
      />
        <popper
              :options= popoptionsb>
              <div class="popper" style="margin-left:0px;">
                <span v-html="etiq.mtr[svl()][1].value"></span>                         
              </div>                                       
              <treeselect slot="reference"
                    v-model="value"      
                    :multiple="false"
                    :options="options"
                    :placeholder="detalls.mtr[svl()][1].value"
                    @input="uptmedcobro"
                    :disable-branch-nodes="true"                    
                    required
              />                        
        </popper>    
      <input
        type="hidden"
        class="form-control my-2"
        placeholder="Dirección Bitcoin/USDT"
        v-model="compra.NOMBREUSUARIO"
      />
      <input
        type="hidden"
        placeholder="Medio de cobro"
        class="col-2 mx-2 my-2"
        v-model="compra.NOMBANCO"
      />
        <popper
              :options= popoptionsb>
              <div class="popper" style="margin-left:0px;">
                <span v-html="etiq.mtr[svl()][2].value"></span>                         
              </div>                
              <span class="floating-label-group" slot="reference">                         
                  <input style="
                  padding: 7px 10px 1px;
                  margin: 10px 3px 5px;
                  width: 120px;
                  min-height: 38px;
                  "  @input="checkpreuadd(compra.PRECIOOFERTA)"
                  v-model="compra.PRECIOOFERTA" autocomplete="off" autofocus  
                  required />
                  <label class="floating-label">{{detalls.mtr[svl()][2].value}}</label>                         
              </span> 
        </popper>         
      <input
        type="hidden"
        placeholder="Tipo moneda"
        class="col-1 mx-2 my-2"
        v-model="compra.MONEDATIPO"
      />
      <input
        type="hidden"
        placeholder="Moneda de cobro"
        class="col-md-2 mx-2 my-2"
        v-model="compra.MONEDAOFERTA"
      />
        <popper
              :options= popoptionsb>
              <div class="popper" style="margin-left:0px;">
                <span v-html="etiq.mtr[svl()][3].value"></span>                         
              </div>                                       
              <v-select slot="reference" 
                style="
                top: 1px;       
                padding: 5px 1px 1px;
                margin: 9px 2px 7px;
                width: 53px;
                min-width: 53px;
                height: 37px;
                font-size: 14px;
                border-radius: 5px;
                border-bottom: 1px solid #ddd;
                box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff, 0 1px 0 #fff;
                background-color: white;
                color: #fff;             
                "
                onchange="updatemon"
                v-model="selectedmon"
                :option="optionsmon"
                :placement="placement"
                @input="updatemon"
                required
              ></v-select>                       
        </popper>
        <popper
              :options= popoptionsb>
              <div class="popper" style="margin-left:0px;">
                <span v-html="etiq.mtr[svl()][4].value"></span>                         
              </div>                
              <span class="floating-label-group" slot="reference">                         
                  <input style="
                  padding: 7px 10px 1px;
                  margin: 10px 3px 5px;
                  width: 120px;
                  min-height: 38px;
                  "
                  @blur="checkminadd(compra.LIMITEABAJO)"
                  @keyup.enter="checkminadd(compra.LIMITEABAJO)"
                  v-model="compra.LIMITEABAJO" autocomplete="off" autofocus  
                  required />
                  <label class="floating-label">{{detalls.mtr[svl()][3].value}}</label>                         
              </span>
        </popper>
      
        <popper
              :options= popoptionsb>
              <div class="popper" style="margin-left:0px;">
                <span v-html="etiq.mtr[svl()][5].value"></span>                         
              </div>                
              <span class="floating-label-group"
              slot="reference">                         
                  <input style="
                  padding: 7px 10px 1px;
                  margin: 10px 3px 5px;
                  width: 120px;
                  min-height: 38px;
                  "
                  @blur="checkmaxadd(compra.LIMITEARRIBA)"
                  @keyup.enter="checkmaxadd(compra.LIMITEARRIBA)"    
                  v-model="compra.LIMITEARRIBA" autocomplete="off" autofocus  
                  required />
                  <label class="floating-label">{{detalls.mtr[svl()][4].value}}</label>                         
              </span>
        </popper>
 
      <input
        type="hidden"
        placeholder="Fecha de creación"
        class="form-control my-2"
        v-model="ofertaEditar.createdat"
      />
        <b-button class="btn-warning smy-1 smx-1" style="margin-bottom:15px;margin-top:5px;" type="submit">
          <img
            align="bottom"
            src="https://www.contobit.com/imagens/manitatt.png"
            width="25px"
            height="17.4px"
          />
        </b-button>
    </form>
  </div>

  <div class="container_editar">
    <h5 v-if="editar"> <font-awesome-icon icon="edit" />{{titul.matrix[svl()][3].value}}
        <popper
              trigger="clickToOpen" 
              :options= popoptionsb>
              <div class="popper_tl" style="margin-left:-250px;">
                <span v-html="titul.matrix[svl()][1].value"></span>                         
              </div>                
              <a slot="reference" class="btn btn" >
                <font-awesome-icon style="font-size:20px;color:grey;"  :icon="['far', 'question-circle']" />
              </a>
        </popper>        
    </h5>
    <form id="formato" @submit.prevent="editarVenta(ofertaEditar)" v-if="editar">
      
      <input
        type="hidden"
        class="form-control my-2"
        placeholder="Dirección Bitcoin/USDT"
        v-model="ofertaEditar.NOMBREUSUARIO"
      />
      <input
        type="hidden"
        class="form-control my-2"
        placeholder="Cadena USDT o Red lightning"
        v-model="ofertaEditar.CADENARED"
      />
        <popper
              :options= popoptionsb>
              <div class="popper" style="margin-left:0px;">
                <span v-html="selch.matrix[svl()][0].value"></span>                         
              </div>                
              <a  slot="reference"
                      id="selchain"
                      class="btn col-0 my-2"                                  
                      @click="fillcadenared_edit()"
              >
              <b v-if="compra.CADENARED === '₮'"><i><font color="Black">⛓️</font></i></b>
              </a>               
        </popper>            
      
        <popper
              :options= popoptionsb>
              <div class="popper" style="margin-left:0px;">
                <span v-html="etiq.mtr[svl()][0].value"></span>                         
              </div>                
              <span class="floating-label-group" slot="reference">                         
                  <textarea maxlength="65" v-model="ofertaEditar.FORMADEPAGO" autocomplete="off" autofocus style="margin:10px 4px 5px 4px;min-width:165px;max-width:auto;"
                    required ></textarea>
                  <label class="floating-label">{{detalls.mtr[svl()][0].value}}</label>                         
              </span> 
        </popper>
            

      <input
        type="hidden"
        placeholder="Medio de cobro"
        class="form-control my-2"
        v-model="ofertaEditar.NOMBANCO"
      />
        <popper
              :options= popoptionsb>
              <div class="popper" style="margin-left:0px;">
                <span v-html="etiq.mtr[svl()][1].value"></span>                         
              </div>                                       
              <treeselect slot="reference"
                    v-model="value"      
                    :multiple="false"
                    :options="options"
                    :placeholder="detalls.mtr[svl()][1].value"
                    @input="uptmedcobroedit"
                    required
              />                        
        </popper>              
        <popper
              :options= popoptionsb>
              <div class="popper" style="margin-left:0px;">
                <span v-html="etiq.mtr[svl()][2].value"></span>                         
              </div>                
              <span class="floating-label-group" slot="reference">                         
                  <input style="
                  padding: 7px 10px 1px;
                  margin: 10px 3px 5px;
                  width: 120px;
                  min-height: 38px;
                  "  @input="checkpreuedit(ofertaEditar.PRECIOOFERTA)"
                  v-model="ofertaEditar.PRECIOOFERTA" autocomplete="off" autofocus  
                  required />
                  <label class="floating-label">{{detalls.mtr[svl()][2].value}}</label>                         
              </span> 
        </popper>                  
      <input
        type="hidden"
        placeholder="Moneda de cobro"
        class="col-1 my-2 mx-2"
        v-model="ofertaEditar.MONEDAOFERTA"
      />
        <popper
              :options= popoptionsb>
              <div class="popper" style="margin-left:0px;">
                <span v-html="etiq.mtr[svl()][3].value"></span>                         
              </div>                                       
              <v-select slot="reference" 
                style="
                top: 1px;       
                padding: 5px 1px 1px;
                margin: 9px 2px 7px;
                width: 53px;
                min-width: 53px;
                height: 37px;
                font-size: 14px;
                border-radius: 5px;
                border-bottom: 1px solid #ddd;
                box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff, 0 1px 0 #fff;
                background-color: white;
                color: #fff;             
                "
                onchange="updatemon"
                v-model="selectedmon"
                :option="optionsmon"
                :placement="placement"
                @input="updatemonedit"
                required
              ></v-select>                       
        </popper>
        <popper
              :options= popoptionsb>
              <div class="popper" style="margin-left:0px;">
                <span v-html="etiq.mtr[svl()][4].value"></span>                         
              </div>                
              <span class="floating-label-group" slot="reference">                         
                  <input style="
                  padding: 7px 10px 1px;
                  margin: 10px 3px 5px;
                  width: 120px;
                  min-height: 38px;
                  "
                  @blur="checkminedit(ofertaEditar.LIMITEABAJO)"
                  @keyup.enter="checkminedit(ofertaEditar.LIMITEABAJO)"
                  v-model="ofertaEditar.LIMITEABAJO" autocomplete="off" autofocus  
                  required />
                  <label class="floating-label">{{detalls.mtr[svl()][3].value}}</label>                         
              </span>
        </popper>               
        <popper
              :options= popoptionsb>
              <div class="popper" style="margin-left:0px;">
                <span v-html="etiq.mtr[svl()][5].value"></span>                         
              </div>                
              <span class="floating-label-group"
              slot="reference">                         
                  <input style="
                  padding: 7px 10px 1px;
                  margin: 10px 3px 5px;
                  width: 120px;
                  min-height: 38px;
                  "
                  @blur="checkmaxedit(ofertaEditar.LIMITEARRIBA)"
                  @keyup.enter="checkmaxedit(ofertaEditar.LIMITEARRIBA)"
                  v-model="ofertaEditar.LIMITEARRIBA" autocomplete="off" autofocus  
                  required />
                  <label class="floating-label">{{detalls.mtr[svl()][4].value}}</label>                         
              </span>
        </popper>                
      <input
        type="hidden"
        placeholder="Fecha de actualización"
        class="form-control my-2"
        v-model="ofertaEditar.updatedat"
      />
      <b-button         
         style="
          position: relative;
          padding: auto;
          top: -5px;
          width: 45px;
          "
          class="btn-warning my-2" type="submit">✔️</b-button>
      <b-button
         style="
          position: relative;
          padding: auto;
          top: -5px;
          width: 45px;
          "     
       class="btn m-2" type="submit" @click="editar = false">❌</b-button>
    </form>
  </div>

    <br><br>
    <h5> {{list_ofers.mtr[svl()][0].value}} </h5>
    <div class="table-responsive">    
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col"><b><i>🔗</i></b></th>          
          <th scope="col">{{list_ofers.mtr[svl()][1].value}}</th>
          <th scope="col">{{list_ofers.mtr[svl()][2].value}}</th>
          <th scope="col"><span v-html="list_ofers.mtr[svl()][3].value"></span></th>
          <th scope="col">{{list_ofers.mtr[svl()][4].value}}</th>
          <th scope="col">{{list_ofers.mtr[svl()][5].value}}</th>
          <th scope="col">{{list_ofers.mtr[svl()][6].value}}</th>
          <th scope="col">{{list_ofers.mtr[svl()][7].value}}</th>
        </tr>                     
      </thead>
      <tbody>
        <tr v-for="(item, index) in comprar" :key="index">
          <td :data-th="tituls.matrix[svl()][2].value">
            <span v-if="item.CADENARED === '₮'"><font size=5>&nbsp;<i> ⛓️</i></font></span>
            <span v-else><font size=5>&nbsp;<i> ⛓️</i></font></span>            
          </td>
          <td><font size="2" color="Grey">{{item.FORMADEPAGO}}</font></td>
          <td :data-th="list_ofers.mtr[svl()][2].value">
            {{item.GRUPOBANCO}}
            <br />
            {{item.NOMBANCO}}
          </td>
          <td v-if="item.MONEDAOFERTA === 'USD'" :data-th="tituls.matrix[svl()][5].value">
            <font
              color="darkGreen"
            >{{(selectedusdt-(selectedusdt*item.PRECIOOFERTA)/-100) | currencydecimal}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA > 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'VES'" :data-th="tituls.matrix[svl()][5].value">
            <font
              color="darkGreen"
            >{{(selectedusdtVES-(selectedusdtVES*item.PRECIOOFERTA)/-100) | currencydecimal}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA > 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'EUR'" :data-th="tituls.matrix[svl()][5].value">
            <font
              color="darkGreen"
            >{{(selectedusdtEUR-(selectedusdtEUR*item.PRECIOOFERTA)/-100) | currencydecimal}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA > 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'COP'" :data-th="tituls.matrix[svl()][5].value">
            <font
              color="darkGreen"
            >{{(selectedusdtCOP-(selectedusdtCOP*item.PRECIOOFERTA)/-100) | currencydecimal}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA > 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'CLP'" :data-th="tituls.matrix[svl()][5].value">
            <font
              color="darkGreen"
            >{{(selectedusdtCLP-(selectedusdtCLP*item.PRECIOOFERTA)/-100) | currencydecimal}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA > 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'BRL'" :data-th="tituls.matrix[svl()][5].value">
            <font
              color="darkGreen"
            >{{(selectedusdtBRL-(selectedusdtBRL*item.PRECIOOFERTA)/-100) | currencydecimal}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA > 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'MXN'" :data-th="tituls.matrix[svl()][5].value">
            <font
              color="darkGreen"
            >{{(selectedusdtMXN-(selectedusdtMXN*item.PRECIOOFERTA)/-100) | currencydecimal}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA > 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'ARS'" :data-th="tituls.matrix[svl()][5].value">
            <font
              color="darkGreen"
            >{{(selectedusdtARS-(selectedusdtARS*item.PRECIOOFERTA)/-100) | currencydecimal}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA > 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'PEN'" :data-th="tituls.matrix[svl()][5].value">
            <font
              color="darkGreen"
            >{{(selectedusdtPEN-(selectedusdtPEN*item.PRECIOOFERTA)/-100) | currencydecimal}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA > 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'RUB'" :data-th="tituls.matrix[svl()][5].value">
            <font
              color="darkGreen"
            >{{(selectedusdtRUB-(selectedusdtRUB*item.PRECIOOFERTA)/-100) | currencydecimal}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA > 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'INR'" :data-th="tituls.matrix[svl()][5].value">
            <font
              color="darkGreen"
            >{{(selectedusdtINR-(selectedusdtINR*item.PRECIOOFERTA)/-100) | currencydecimal}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA > 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'TRY'" :data-th="tituls.matrix[svl()][5].value">
            <font
              color="darkGreen"
            >{{(selectedusdtTRY-(selectedusdtTRY*item.PRECIOOFERTA)/-100) | currencydecimal}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA > 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'CNY'" :data-th="tituls.matrix[svl()][5].value">
            <font
              color="darkGreen"
            >{{(selectedusdtCNY-(selectedusdtCNY*item.PRECIOOFERTA)/-100) | currencydecimal}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA > 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} %</font>
          </td>
          <td :data-th="list_ofers.mtr[svl()][4].value">
            <font color="darkGreen">{{item.MONEDAOFERTA}}</font>
          </td>
          <td v-if="item.MONEDAOFERTA === 'USD'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][5].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEABAJO*selectedusdt | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEABAJO | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'VES'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][5].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEABAJO*selectedusdtVES| currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEABAJO | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'EUR'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][5].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEABAJO*selectedusdtEUR | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEABAJO | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'COP'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][5].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEABAJO*selectedusdtCOP | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEABAJO | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'CLP'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][5].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEABAJO*selectedusdtCLP | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEABAJO | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'BRL'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][5].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEABAJO*selectedusdtBRL | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEABAJO | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'MXN'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][5].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEABAJO*selectedusdtMXN | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEABAJO | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'ARS'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][5].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEABAJO*selectedusdtARS | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEABAJO | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'PEN'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][5].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEABAJO*selectedusdtPEN | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEABAJO | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'RUB'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][5].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEABAJO*selectedusdtRUB | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEABAJO | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'INR'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][5].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEABAJO*selectedusdtINR | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEABAJO | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'TRY'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][5].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEABAJO*selectedusdtTRY | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEABAJO | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'IRR'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][5].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEABAJO*selectedusdtIRR | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEABAJO | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'CNY'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][5].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEABAJO*selectedusdtCNY | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEABAJO | currencydecimal}}</div>
            </font>
          </td>
          <td v-if="item.MONEDAOFERTA === 'USD'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][6].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEARRIBA*selectedusdt | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEARRIBA | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'VES'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][6].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEARRIBA*selectedusdtVES| currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEARRIBA | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'EUR'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][6].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEARRIBA*selectedusdtEUR | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEARRIBA | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'COP'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][6].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEARRIBA*selectedusdtCOP | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEARRIBA | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'CLP'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][6].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEARRIBA*selectedusdtCLP | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEARRIBA | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'BRL'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][6].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEARRIBA*selectedusdtBRL | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEARRIBA | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'MXN'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][6].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEARRIBA*selectedusdtMXN | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEARRIBA | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'ARS'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][6].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEARRIBA*selectedusdtARS | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEARRIBA | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'PEN'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][6].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEARRIBA*selectedusdtPEN | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEARRIBA | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'RUB'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][6].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEARRIBA*selectedusdtRUB | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEARRIBA | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'INR'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][6].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEARRIBA*selectedusdtINR | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEARRIBA | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'TRY'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][6].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEARRIBA*selectedusdtTRY | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEARRIBA | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'IRR'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][6].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEARRIBA*selectedusdtIRR | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEARRIBA | currencydecimal}}</div>
            </font>
          </td>
          <td v-else-if="item.MONEDAOFERTA === 'CNY'" class="sm-col-2" :data-th="list_ofers.mtr[svl()][6].value">
            <font size="2" color="MediumSeaGreen">
              {{item.MONEDAOFERTA}} {{item.LIMITEARRIBA*selectedusdtCNY | currencydecimal}}
              <br />
              <div
                class="sm-col-2"
              >₮ {{item.LIMITEARRIBA | currencydecimal}}</div>
            </font>
          </td>
          <td>
            <b-button @click="activarEdicion(item._id)" class="btn-warning m-2">
              <font-awesome-icon icon="edit" />
            </b-button>
            <b-button @click="eliminarVenta(item._id)" class="btn-danger">
              <font-awesome-icon icon="trash" />
            </b-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>    
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import router from "../router";
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';
import ioptions from "@/components/options.json";
import axios from "axios";
// import the component
import Treeselect from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
import vSelect from "vselect-component";
export default {
  components: {
    'popper': Popper,    
    vSelect,
    Treeselect,
  },
  data() {
    return {
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
      fee: null,
      contador: 0,
      numregs: 1,
      saldo: 0,
      saldomfmg: 0,      
      url: "https://blockexplorer.one/btc/testnet/address/",
      value: null,
      options: ioptions,
      comprar: [],
      mensaje: { color: "success", texto: "" },
      dismissSecs: 7,
      dismissCountDown: 0,
      compra: {
        CADENARED: "₮",
        NOMBREUSUARIO: "",
        FORMADEPAGO: "",
        GRUPOBANCO: "",
        NOMBANCO: "",
        PRECIOOFERTA: "",
        MONEDATIPO: "",
        MONEDAOFERTA: "",
        LIMITEABAJO: "",
        LIMITEARRIBA: "",
        createdat: Date.now,
      },
      crearmgmf: false,
      verqrget: false,
      isPaste: false,
      mgmfredu: "⏳",      
      pubvendedor: null,
      ispkvendedorok: false,
      pkarbitraje: null,
      User: [],
      saldoresptxs: 0,      
      editar: false,
      ofertaEditar: {},
      optionsmon: [
        {
          value: "USD",
          label: "USD",
        },
        {
          value: "EUR",
          label: "EUR",
        },
        {
          value: "VES",
          label: "VES",
        },
        {
          value: "COP",
          label: "COP",
        },
        {
          value: "CLP",
          label: "CLP",
        },
        {
          value: "BRL",
          label: "BRL",
        },
        {
          value: "MXN",
          label: "MXN",
        },
        {
          value: "ARS",
          label: "ARS",
        },
        {
          value: "PEN",
          label: "PEN",
        },
        {
          value: "RUB",
          label: "RUB",
        },
        {
          value: "INR",
          label: "INR",
        },
        {
          value: "TRY",
          label: "TRY",
        },
         {
          value: "IRR",
          label: "IRR",
        },
         {
          value: "CNY",
          label: "CNY",
        },         
      ],
      selectedmon: {
        value: null,
        label: " 🪙",
      },
      placement: "down",
      T_mfmg: {
       mtx: [
          [{ vl: 'Multigarantía Ventas'},{ vl: '<br>🔐Multigarantía Ventas:<br><br> Dirección Bitcoin/Tether Contrato Multifirma 2/2 (Vendedor/Arbitraje), base de garantía para cualquier venta de tethers en la plataforma, ya sea en 🔗cadena principal Bitcoin o en ⛓️capa Omni Tether, armando al Arbitraje con firmas de Transacciones(Tx) en Respaldo para los intercambios que se cursen.<br> Una vez creada la multifirma, a más tardar, necesaria tan pronto apareca una solicitud de compra en firme, y que usted como  Vendedor acepte. Deberá enviar a la Dirección Multifirma Multigarantía, COMO MÍNIMO, la Cantidad de Tethers de la Venta aceptada, mas el 0.25 % por Arbitraje.<br>** LA CANTIDAD DE TETHERS QUE ENVIE O MANTENGA EN LA DIRECCIÓN TETHER MULTIFIRMA MULTIGARANTÍA ES REEMBOLSABLE EN  CUALQUIER MOMENTO  QUE USTED DECIDA (EN EL PERFIL DE USUARIO DE SU DIRECCIÓN BITCOIN), <strong>SIEMPRE Y CUANDO NO ESTE RESPALDANDO VENTA(s) EN CURSO</strong>. ADEMÁS, COMO SALVAGUARDA DE LIBERACIÓN DE SU GARANTÍA, TAMBIÉN, DISPONE EN EL PERFIL DE USUARIO DE UNA TX DE RETORNO ABIERTA Y FIRMADA POR EL ARBITRAJE, ASEGURANDO EL RETORNO DE LOS BITCOINS/TETHERS EN GARANTÍA AL VENCIMIENTO QUE DETERMINE ** <br>><font color=red><strong>RECOMENDACIONES Y CONSIDERACIONES. Si esta en sus posibilidades y desea agilizar al máximo, evitando a los compradores los tiempos de espera de 1 hora(6 confimaciones) para sus ventas(intercambios), y disponer de anuncios y Ventas de tipo INMEDIATAS a tiempo real</strong>, o bien si usted fuera vendedor habitual de Tethers en la plataforma:</font><br> 1.-* Hacer la mínima cantidad posible de envios a la Dirección Multifirma Multigarantía para evitar gastos de Minería Bitcoin. <br> 2.-* Mantener, como mínimo, un saldo en la Dirección Multifirma Multigarantía acorde a los límites máximos de Tethers publicados en sus Oferatas de Venta. Más aún si desea realizar ventas simultáneas en tiempo real, multiplicado por la cantidad de de ventas simultáneas que  pueda garantizar y atender al mismo tiempo.<br>  3.-* Las Ventas en ⛓️capa Omni Tether usarán la Tx de Respaldo para la Entrega de tethers al Comprador.<br><br>'},{ vl: ' Crear Multifirma de 🔐Multigarantía Ventas'},{ vl: 'Saldo'},{ vl: 'Respaldos'},{ vl: 'Disponible'}],

          [{ vl: 'Multi-warranty Sales'},{ vl: '<br> 🔐Multi-guarantee Sales: <br> <br> Bitcoin/Tether Address Multisignature Contract 2/2 (Seller / Arbitrage), guarantee basis for any sale of tethers on the platform, either in 🔗Bitcoin main chain or in ⛓️ Tether Omni Layer , arming the Arbitration with signatures of Transactions (Tx) in Support for the exchanges that are carried out. <br> Once the multi-signature is created, at the latest, necessary as soon as a firm purchase request appears, and that you as the Seller accept . You must send to the Multi-Guarantee Multi-Signature Address, AT A MINIMUM, the Amount of Tethers from the accepted Sale, plus 0.25% per Arbitration. <br> ** THE AMOUNT OF TETHERS THAT YOU SEND OR KEEP IN THE MULTI-SIGN MULTI-GUARANTEE TETHER ADDRESS IS REFUNDABLE IN ANY WHEN YOU DECIDE (IN THE USER PROFILE OF YOUR BITCOIN ADDRESS), <strong> ALWAYS AND WHEN YOU ARE NOT SUPPORTING CURRENT SALE (s) </strong>. IN ADDITION, AS A SAFEGUARD FOR RELEASE OF ITS WARRANTY, IT ALSO HAS IN THE USER PROFILE AN OPEN RETURN TX SIGNED BY THE ARBITRATION, ENSURING THE RETURN OF THE BITCOINS/TETHERS IN GUARANTEE AT THE EXPIRATION DETERMINATION ** <br>> <font color = red> <strong> RECOMMENDATIONS AND CONSIDERATIONS. If you are within your means and you want to streamline as much as possible, avoiding buyers waiting times of 1 hour (6 confirmations) for their sales (exchanges), and have IMMEDIATE ads and sales in real time </strong>, Or if you were a regular seller of Tethers on the platform: </font> <br> 1 .- * Make the minimum possible amount of shipments to the Multi-Signature Multi-Guarantee Address to avoid Bitcoin Mining expenses. <br> 2 .- * Maintain, as a minimum, a balance in the Multi-signature Multi-Guarantee Address according to the maximum limits of Tethers published in their Sales Offerings. Even more so if you want to make simultaneous sales in real time, multiplied by the number of simultaneous sales that you can guarantee and attend to at the same time. <br>  3.- * Sales in the ⛓️ Tether Omni Layer will use the Backup Tx for the Delivery of tethers to the Buyer. <br> <br>'},{ vl: ' Create Multi-signature of 🔐Multi-warranty Sales'},{ vl: 'Balance'},{ vl: 'Endorsements'},{ vl: 'Available'}],

          [{ vl: 'Multigarantia Vendes'},{ vl: '<br>🔐Multigarantia Vendes: <br><br> Adreça Bitcoin/Tether Contracte Multisignatura 2/2 (Venedor/Arbitratge), base de garantia per a qualsevol venda de tethers a la plataforma, ja sigui a 🔗cadena principal Bitcoin o a la ⛓️capa Omni Tether , armant a l`Arbitratge amb firmes de Transaccions (Tx) a Respatller per als intercanvis que es cursin.<br> Un cop creada la multisignatura, com a molt tard, necessària tan aviat apareix una sol·licitud de compra en ferm, i que vostè com a Venedor accepti. Haurà d`enviar a la Direcció Multifirma Multigarantía, COM A MÍNIM, la Quantitat de Tethers de la Venda acceptada, més el 0.25 % per Arbitratge.<br>** LA QUANTITAT DE TETHERS QUE ENVIEU O MANTIGUEU A L`ADREÇA TETHER MULTIFIRMA MULTIGARANTIA ÉS REEMBORSABLE EN QUALSEVOL MOMENT QUE VOSTÈ DECIDEIXI (EN EL PERFIL D`USUARI DE LA SEVA DIRECCIÓ BITCOIN), <strong>SEMPRE I QUAN NO ESTIGUIN RESPALDANT VENDA(s) EN CURS</strong>. A MÉS, COM SALVAGUARDA D`ALLIBERAMENT DE LA SEVA GARANTIA, TAMBÉ, DISPOSA EN EL PERFIL D`USUARI D`UNA TX DE RETORN OBERTA I SIGNADA PER L`ARBITRATGE, ASSEGURANT EL RETORN DELS BITCOINS/TETHERS EN GARANTIA AL VENCIMIENT QUE ESTABLEIXI ** <br>><font color=red><strong>RECOMANACIONS I CONSIDERACIONS. Si està en les seves possibilitats i desitja agilitzar al màxim, evitant als compradors els temps d`espera d`una hora (6 confimacions) per a les vendes (intercanvis), i disposar d`anuncis i vendes de tipus IMMEDIATES a temps real</strong>, o bé si fos venedor habitual de Tethers a la plataforma:</font><br> 1.-* Fer la mínima quantitat possible d`enviaments a la Direcció Multifirma Multigarantía per evitar despeses de Mineria Bitcoin. <br> 2.-* Mantenir, com a mínim, un saldo a la Direcció Multifirma Multigarantia acord als límits màxims de Tethers publicats a les seves Oferates de Venda. Més encara si desitja realitzar vendes simultànies en temps real, multiplicat per la quantitat de vendes simultànies que pugui garantir i atendre al mateix temps.<br>  3.-* Les Vendes a ⛓️capa Omni Tether faran servir la Tx de Respatller per a la Lliurament de tethers al Comprador.<br><br>'},{ vl: ' Crear Multifirma de 🔐Multigarantia Vendes'},{ vl: 'Saldo'},{ vl: 'Respatllers'},{ vl: 'Disponible'}],

          [{ vl: 'Vendas Multi-garantia'},{ vl: '<br> 🔐Venda Multi-garantia: <br> <br> Bitcoin/Tether Endereço Multi-assinatura Contrato 2/2 (Vendedor / Arbitragem), base de garantia para qualquer venda de tethers na plataforma, seja na 🔗Cadeia principal Bitcoin ou em ⛓️ Tether Omni Layer, armando a Arbitragem com Assinaturas de Transações (Tx) em Apoio às trocas que se realizam. <br> Uma vez criada a multi-assinatura, o mais tardar, necessária assim que apareça um pedido firme de compra, e que você como o vendedor aceita. Você deve enviar para o Endereço de Multi-Garantia de Multi-Assinatura, NO MÍNIMO, a Quantidade de Tethers da Venda aceita, mais 0,25% por Arbitragem. <br> ** A QUANTIA DE TETHERS QUE VOCÊ ENVIE OU MANTENHA NO ENDEREÇO ​​MULTI -GARANTIA TETHER MULTI-GARANTIA É REEMBOLSÁVEL EM QUALQUER QUANDO VOCÊ DECIDIR (NO PERFIL DE USUÁRIO DO SEU ENDEREÇO ​​BITCOIN), <strong> SEMPRE E QUANDO VOCÊ NÃO ESTIVER APOIANDO VENDA (s) ATUAL (s) </strong>. ALÉM DISSO, COMO SALVAGUARDA PARA LIBERAÇÃO DE SUA GARANTIA, TAMBÉM TEM NO PERFIL DO USUÁRIO UM TX DE RETORNO ABERTO ASSINADO PELA ARBITRAGEM, GARANTIDO O RETORNO DAS BITCOINS/TETHERS GARANTIDAS NA DETERMINAÇÃO DE VENCIMENTO ** <br>> <font color = vermelho> <strong> RECOMENDAÇÕES E CONSIDERAÇÕES. Se você estiver ao seu alcance e quiser agilizar ao máximo, evitando que os compradores esperem de 1 hora (6 confirmações) para suas vendas (trocas), e tenham IMEDIATOS anúncios e vendas em tempo real </strong>, Ou se você era um vendedor regular de Tethers na plataforma: </font> <br> 1 .- * Faça a quantidade mínima possível de remessas para o Endereço de Multi-Garantia de Multi-Assinatura para evitar despesas de Mineração de Bitcoin. <br> 2 .- * Manter, no mínimo, um saldo no Endereço Multi-Assinatura Multi-Garantias de acordo com os limites máximos de Tethers publicados em suas Ofertas de Venda. Ainda mais se você quiser fazer vendas simultâneas em tempo real, multiplicado pelo número de vendas simultâneas que você pode garantir e atender ao mesmo tempo. <br>  3 .- * As vendas na ⛓️capa Omni Tether usarão o Backup Tx para a entrega de tethers ao comprador. <br> <br>'},{ vl: ' Criar Multi-assinatura de 🔐 Vendas Multi-garantia '},{ vl: 'Equilíbrio'},{ vl: 'Endossos'},{ vl: 'Disponível'}],                                             
            ],
      },
      Textos_qrcode: {
       vars: [
          [{ vl: ' Mostrar el código Qr a leer...'},{ vl: ' Escanear código Qr, '},{ vl: ' Activa / desactiva escanear el código Qr de '}],
          [{ vl: ' Show the Qr code to read...'},{ vl: ' Scan Qr code, '},{ vl: ' Activates / deactivates scanning the Qr code of '}],
          [{ vl: ' Mostra el codi Qr a llegir...'},{ vl: ' Escanejar codi Qr, '},{ vl: ' Activa / desactiva escanejar el codi Qr de l` '}],
          [{ vl: ' Mostrar o código Qr para ler...'},{ vl: ' Digitalize código Qr, '},{ vl: ' Ativa / desativa a digitalização do código Qr de '}],                                             
            ],
      },
      Clave_publica_de_su_Direccion_bitcoin: {
       mtx: [
          [{ vl: 'Clave pública de su Dirección bitcoin(comprimida)'}],
          [{ vl: 'Public key of your bitcoin Address (compressed)' }],
          [{ vl: 'Clau pública de la seva Adreça bitcoin (comprimida)' }],
          [{ vl: 'Chave pública do seu endereço bitcoin (compactado)' }],                                               
            ],           
      },
      Clave_publica_de_su_Direccion : {
       pte1: [
          [{ vl: '<br><b>Clave pública de su Dirección bitcoin(comprimida):</b><a href=https://www.contobit.com/videohelp/publickeycompress.webm target=_blank> 📽️ </a><br><br> <br>' }],
          [{ vl: '<br><b>Public key of your bitcoin Address (compressed):</b><a href=https://www.contobit.com/videohelp/publickeycompress.webm target=_blank> 📽️ </a><br> <br> <br>' }],
          [{ vl: '<br><b>Clau pública de la seva Adreça bitcoin (comprimida):</b><a href=https://www.contobit.com/videohelp/publickeycompress.webm target=_blank> 📽️ </a><br> <br> <br>' }],
          [{ vl: '<br><b>Chave pública do seu endereço bitcoin (compactado):</b><a href=https://www.contobit.com/videohelp/publickeycompress.webm target=_blank> 📽️ </a><br> <br> <br>' }],                                 
            ],
       pte1_LN: [
          [{ vl: '<br><b>Clave pública de su Dirección bitcoin(comprimida):</b><a href=https://www.contobit.com/videohelp/publickeycompress.webm target=_blank> 📽️ </a><br> Pegue en esta casilla la Clave pública de su dirección bitcoin (comprimida, 66 caracteres). De tal manera ser incluido, como una de las dos partes integrantes(Vendedor y Árbitraje), en contrato bitcoin multifirma(2 de 2), quedando establecida tal dirección multifirma como destino de la garantía genérica y necesaria, válida como garantía para todas las transacciones de compra-venta a través de la Red Lightning en esta plataforma. La clave pública puede encontrarla en su cartera bitcoin. Si sólo usa cartera de papel (y no guardó, o imprimió, los detalles de la cartera asociados a su dirección bitcoin) puede conseguirlos <a href=https://www.bitaddress.org target=_blank><font color=cyan>aquí</font></a> en la opción Detalles de la cartera. Recuerde por su seguridad,  descargar la utilidad previamente, ejcutar desconectado de internet o incluso mejor aún en otro équipo que siempre esté fuera de linea.<br> <br>' }],
          [{ vl: '<br><b>Public key of your bitcoin Address (compressed):</b><a href=https://www.contobit.com/videohelp/publickeycompress.webm target=_blank> 📽️ </a><br> Paste in this box the Public key of your bitcoin address (compressed, 66 characters). In such a way to be included, as one of the two integral parts (Seller and Arbitration), in a multi-signature bitcoin contract (2 of 2), being established such multi-signature address as the destination of the generic and necessary guarantee, valid as a guarantee for all transactions of buying and selling through the Lightning Network on this platform. The public key can be found in your bitcoin wallet. If you only use paper wallet (and you did not save, or print, the wallet details associated with your bitcoin address) you can get them <a href=https://www.bitaddress.org target=_blank><font color=cyan>here</font></a> in the Portfolio Details option. Remember for your safety, download the utility beforehand, run disconnected from the internet or even better yet on another computer that is always offline.<br> <br>' }],
          [{ vl: '<br><b>Clau pública de la seva Adreça bitcoin (comprimida):</b><a href=https://www.contobit.com/videohelp/publickeycompress.webm target=_blank> 📽️ </a><br> Enganxeu en aquesta casella la Clau pública de la seva adreça bitcoin (comprimida, 66 caràcters). De tal manera ser inclòs, com una de les dues parts integrants (Venedor i Àrbitratge), en contracte bitcoin multifirma (2 de 2), quedant establerta aquesta direcció multifirma com a destinació de la garantia genèrica i necessària, vàlida com a garantia per a totes les transaccions de compravenda a través de la Xarxa Lightning en aquesta plataforma. La clau pública la podeu trobar a la cartera bitcoin. Si només fa servir cartera de paper (i no va guardar, o imprimir, els detalls de la cartera associats a la seva adreça bitcoin) pot aconseguir-los <a href=https://www.bitaddress.org target=_blank><font color=cyan>aquí</font></a> en l`opció Detalls de la cartera. Recordeu per la vostre  seguretat, descarregar l`utilitat prèviament, executar desconnectat d`internet o fins i tot millor encara en un altre équip que sempre estigui fora de línia.<br> <br>' }],
          [{ vl: '<br><b>Chave pública do seu endereço bitcoin (compactado):</b><a href=https://www.contobit.com/videohelp/publickeycompress.webm target=_blank> 📽️ </a><br> Cole nesta caixa a chave pública do seu endereço bitcoin (compactado, 66 caracteres). De forma a ser incluída, como uma das duas partes integrantes (Vendedor e Arbitragem), em um contrato bitcoin multi-assinaturas (2 de 2), sendo estabelecido esse endereço multi-assinaturas como destino da garantia genérica e necessária , válido como garantia para todas as transações de compra e venda através da Lightning Network nesta plataforma. A chave pública pode ser encontrada em sua carteira bitcoin. Se você usar apenas a carteira de papel (e você não salvou ou imprimiu os detalhes da carteira associados ao seu endereço bitcoin), você pode obtê-los <a href=https://www.bitaddress.org target=_blank><font color=cyan>aquí</font></a> na opção Detalhes do portfólio. Lembre-se para sua segurança, baixe o utilitário com antecedência, execute-o desconectado da internet ou melhor ainda em outro computador que esteja sempre offline.<br> <br>' }],,                                 
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
      titul: {
       matrix: [
                [{ value: 'Vender ₮ Tethers' }, { value: '<br><b>Vender  ₮ Tethers:</b><br> Para agregar una oferta de venta nueva, debe rellenar o seleccionar en TODAS las casillas de la linea que sigue y luego pulsar el botón de la manita vender al final de la misma.<br><br><b><i>🔗</i></b> :<br> Ofertar en <b><i>⛓️</i></b> Cadena de bloques bitcoin Capa Omni Tether. A través de la cual realizar el proceso Tx de compra-venta.<br><br>Detallles de la oferta:<br> Introduzca texto o emojis a conveniencia hasta máximo 65 caracteres. Ej. Conectado en las mañanas de lunes a viernes <br><br>Medio de cobro:<br> Seleccione en el menú desplegable de la casilla, dentro del grupo escogido(explore pulsando ▶ a la izquiera de cada opción para visualizar submenús que contiene cada una), el medio de cobro aceptado para la oferta. <br><br>Precio % ₮:<br> Introduzca porcentaje negativo o positivo dependiendo si desea vender por debajo  o por encima del precio de mercado. Ej. -2.13 <br><br>Moneda de cobro:<br>Pulse  dentro de la casilla sobre las siglas de moneda para abrir el selector y SELECCIONE la moneda de cobro aceptada. Ej. EUR  <br><br>Venta Mínima ₮:<br>Introcuzca en la casilla el valor mínimo aceptado para una venta expresado en tethers. Ej. 11.12  <br><br>Venta Máxima ₮:<br>Introcuzca en la casilla el valor máximo aceptado para una venta expresado en tethers. Ej. 132.13  <br><br>Posteriormente puede modificar o eliminar cualquier oferta con los botones destinados. Al terminar revise también su publicación en Comprar del menú principal.<br><br>' }, { value: ' ➕ Agregar nueva Oferta' }, { value: ' Editar Mi Oferta de Venta' }],
                [{ value: 'Sell ₮ Tethers' }, { value: '<br><b>Sell  ₮ Tethers:</b><br> To add a new sale offer, you must fill in or select in ALL the boxes of the line that follows and then press the button of the hand sell at the end of it. <br><br><b><i>🔗</i></b> :<br> To bid on <b><i>⛓️</i></b> Tether omni Layer bitcoin blockchain. Through which to carry out the Tx purchase-sale process.<br><br> Details of the offer: <br> Enter Text or emojis at your convenience up to a maximum of 65 characters. Eg Connected in the mornings from Monday to Friday <br> <br> Payment method: <br> Select from the drop-down menu of the box, within the chosen group (explore by pressing ▶ ️ to the left of each option to display submenus that contains each one), the means of payment accepted for the offer. <br> <br> Price% ₮: <br> Enter a negative or positive percentage depending on whether you want to sell below or above the market price. Ex. -2.13 <br> <br> Collection currency: <br> Click inside the box on the currency initials to open the selector and SELECT the accepted collection currency. Eg EUR <br> <br> Minimum Sale ₮: <br> Enter in the box the minimum value accepted for a sale expressed in tethers. Ex. 11.12 <br> <br> Maximum Sale ₮: <br> Enter in the box the maximum value accepted for a sale expressed in tethers. Ex. 132.13 <br> <br> You can later modify or delete any offer with the buttons provided. When finished, also check your publication in Buy from the main menu.<br><br>' }, { value: ' ➕ Add new Offer' }, { value: ' Edit My Sale Offer' }],
                [{ value: 'Vendre ₮ Tethers' }, { value: '<br><b>Vendre  ₮ Tethers:</b><br> Per afegir una oferta de venda nova, ha d`omplir o seleccionar a TOTES les caselles de la línia que segueix i després prémer el botó de la maneta vendre a la fi de la mateixa.<br><br><b><i>🔗</i></b> :<br> Oferir en <b><i>⛓️</i></b> Cadena de blocs bitcoin capa Omni Tether. A través de la qual realitzar el procés Tx de compravenda.<br><br> Detalls de l`oferta:<br> Introdueixi texte o emojis a conveniència fins màxim 65 caràcters. Ex. Conectat als matins de dilluns a divendres. <br><br> Mitjà de cobrament: <br> Seleccioneu al menú desplegable de la casella, dins el grup escollit (explori prement ▶ ️ a l` esquerra de cada opció per a visualitzar els submenús que conté cadascuna), el mitjà de cobrament acceptat per l` oferta. <br><br> Preu% ₮: <br> Introdueixi percentatge negatiu o positiu depenent si desitja vendre per sota o per sobre del preu de mercat. Ex. -2.13 <br><br> Moneda de cobrament: <br> Premi dins de la casella sobre les sigles de moneda per obrir el selector i SELECCIONI la divisa de cobrament acceptada. Ex. EUR <br><br> Venda Mínima ₮: <br> Introdueixi a la casella el valor mínim acceptat per a una venda expressat en tethers. Ex. 11.12 <br><br> Venda Màxima ₮: <br><br> Introdueixi a la casella el valor màxim acceptat per a una venda expressat en tethers. Ex. 132.13 <br><br> Posteriorment pot modificar o eliminar qualsevol oferta amb els botons destinats. Al finalitzar revisi també la publicació dins Comprar del menú principal.<br><br>' }, { value: ' ➕ Afegeix una nova oferta' }, { value: ' Editar La meva Oferta de Venda' }],
                [{ value: 'Vender ₮ Tethers' }, { value: '<br><b>Vender ₮ Tethers:</b><br> Para adicionar uma nova oferta de venda, deve preencher ou seleccionar TODOS os quadrados da linha que se segue e premir o botão da mão vender no final da mesma. <br><br><b><i>🔗</i></b> :<br> Licitar <b><i>⛓️</i></b> Corrente de bloco bitcoin capa omni Tether. Através do qual realizar o processo de compra-venda de Tx.<br><br> Detalhes da oferta: <br> Entrar Texto ou emojis de acordo com sua conveniência com até 65 caracteres. Ex: conectado de manhã de segunda a sexta-feira <br> <br> Método de pagamento: <br> Selecione no menu suspenso da caixa, dentro do grupo escolhido (explore pressionando ▶ ️ à esquerda de cada opção para exibir os submenus que contém cada um), o meio de pagamento aceito para a oferta. <br> <br> Preço% ₮: <br> Insira uma porcentagem negativa ou positiva, dependendo se deseja vender abaixo ou acima do preço de mercado. Ex. -2,13 <br> <br> Moeda de cobrança: <br> Clique dentro da caixa nas iniciais da moeda para abrir o seletor e SELECIONE a moeda de cobrança aceita. Ex: EUR <br> <br> Venda Mínima ₮: <br> Insira na caixa o valor mínimo aceito para uma venda expresso em tethers. Ex. 11.12 <br> <br> Venda Máxima ₮: <br> Insira na caixa o valor máximo aceito para uma venda expresso em tethers. Ex. 132.13 <br> <br> Posteriormente, você pode modificar ou excluir qualquer oferta com os botões fornecidos. Quando terminar, verifique também a sua publicação em Comprar no menu principal.<br><br>' }, { value: ' ➕ Adicionar nova oferta' }, { value: ' Editar Minha Oferta de Venda' }],   
               ],            
      }, 
      selch: {
       matrix: [
                [{ value: 'Click selecciona capa omni tether' }],
                [{ value: 'Click select tether omni layer' }],
                [{ value: 'Click selecciona capa omni tether' }],
                [{ value: 'Clique em selecionar capa omni tether' }],   
               ]
      },
      detalls: {
       mtr: [
                [{ value: 'Detalles Oferta' },{ value: '_🔎 Medio de cobro' },{ value: 'Precio (+/-)%₮' },{ value: 'Vta.Mínima USDT' },{ value: 'Vta.Máxima USDT' }],
                [{ value: 'Offer details' },{ value: '_🔎 Payment method' },{ value: 'Price (+/-)%₮' },{ value: 'Min.Sale USDT' },{ value: 'Max.Sale USDT' }],
                [{ value: 'Detalls de l`oferta' },{ value: '_🔎 Mitjà de cobrament' },{ value: 'Preu (+/-)%₮' },{ value: 'Vda.Mínima USDT' },{ value: 'Vda.Màxima USDT' }],
                [{ value: 'Detalhes da oferta' },{ value: '_🔎 Forma de pagamento' },{ value: 'Preço (+/-)%₮' },{ value: 'Vda.Mínima USDT' },{ value: 'Vda.máxima USDT' }],   
               ]
      },
      etiq: {
       mtr: [
                [{ value: 'Editar detalles a publicar en la oferta' },{ value: 'Seleccione Medio de cobro para la oferta' },{ value: 'Editar Precio de la oferta (+/-)% sobre la cotización de tether' },{ value: 'Seleccione Moneda de cobro para la  oferta' },{ value: 'Editar Cantidad Mínima de tethers para una venta' },{ value: 'Editar Cantidad Máxima de tethers para una venta' }],
                [{ value: 'Edit details to publish in the offer' },{ value: 'Select Payment method for the offer' },{ value: 'Edit Offer Price (+/-)% on tether price' },{ value: 'Select Charge Currency for the offer' },{ value: 'Edit Minimum amount of tethers for a sale' },{ value: 'Edit Maximum amount of tethers for a sale' }],
                [{ value: 'Editar detalls a publicar a l`oferta' },{ value: 'Seleccioni Mitjà de cobrament per la oferta' },{ value: 'Edita Preu de l`oferta (+/-)% sobre la cotització de tether' },{ value: 'Seleccioneu Moneda de cobrament per a l`oferta' },{ value: 'Editar Quantitat Mínima de tethers per a una venda' },{ value: 'Editar Quantitat Màxima de tethers per a una venda' }],
                [{ value: 'Edite os detalhes para publicar na oferta' },{ value: 'Selecione Forma de pagamento da oferta' },{ value: 'Editar preço da oferta (+/-)% sobre o preço do tether' },{ value: 'Selecione a moeda de cobrança para a oferta' },{ value: 'Editar Quantidade mínima de tethers para uma venda' },{ value: 'Editar Quantidade Máxima de tethers para uma venda' }],   
               ]
      },
      list_ofers: {
       mtr: [
                [{ value: ' Mis Ofertas de Venta ' },{ value: 'Detallles de la oferta' },{ value: 'Medio de cobro' },{ value: 'Precio<br /> (+/-) % ₮' },{ value: 'Moneda de cobro' },{ value: 'Venta Mínima' },{ value: 'Venta Máxima' },{ value: 'Acción' }],
                [{ value: ' My Sales Offers ' },{ value: 'Offer details' },{ value: 'Payment method' },{ value: 'Price<br /> (+/-) % ₮' },{ value: 'Collection currency' },{ value: 'Minimum Sale' },{ value: 'Maximum Sale' },{ value: 'Action' }],
                [{ value: ' Les meves ofertes de venda ' },{ value: 'Detalls de l`oferta' },{ value: 'Mitjà de cobrament' },{ value: 'Preu<br /> (+/-) % ₮' },{ value: 'Moneda de cobrament' },{ value: 'Venda Mínima' },{ value: 'Venda Màxima' },{ value: 'Acció' }],
                [{ value: ' Minhas ofertas de vendas ' },{ value: 'Detalhes da oferta' },{ value: 'Forma de pagamento' },{ value: 'Preço<br /> (+/-) % ₮' },{ value: 'Moeda de coleta' },{ value: 'Venda Mínima' },{ value: 'Venda Máxima' },{ value: 'Açao' }],   
               ]
      },
      tituls: {
       matrix: [
                [{ value: 'Vendedor' }, { value: '🔌' }, { value: '🔗' }, { value: 'Detallles' }, { value: 'Medio de pago' }, { value: "Precio ₮" }, { value: 'Límites' }, { value: 'Proceso' }],
                [{ value: 'Seller' }, { value: '🔌' }, { value: '🔗' }, { value: 'Details' }, { value: 'Payment method' }, { value: "Price ₮" }, { value: 'Limits' }, { value: 'Process' }],
                [{ value: 'Venedor' }, { value: '🔌' }, { value: '🔗' }, { value: 'Detalls' }, { value: 'Mitjà de pagament' }, { value: "Preu ₮" }, { value: 'Límits' }, { value: 'Procés' }],
                [{ value: 'Vendedor' },{ value: '🔌' }, { value: '🔗' },{ value: 'Detalhes' }, { value: 'Meio de pagamento' }, { value: "Preço ₮" },{ value: 'Limites' }, { value: 'Processo' }],                                               
               ]
      },
      f_fillcaden: {
       mtx: [
                [ { vl: 'Oferta para venta en ⛓️ Capa Omni Tether 🔗 de cadena de bloques bitcoin, asegurese de disponer de algún saldo en su dirección tether para mantener la publicación' }],

                [ { vl: 'Offer for sale on ⛓️ Omni Tether Layer 🔗 Bitcoin  blockchain, make sure you have some balance in your tether address to maintain the publication' }],

                [ { vl: 'Oferta per a venda a la ⛓️ Capa Omni Tether de la  🔗 cadena de blocs Bitcoin, assegureu-vos disposar d`algun saldo a l`adreça tether per mantenir la publicació' }],

                [{ vl: 'Oferta à venda no ⛓️ Capa Omni Tether 🔗 blockchain de bitcoin, certifique-se de ter algum saldo em seu endereço de bitcoin para manter a publicação' }],                                               
               ]
      },
      f_checkpreu: {
       mtx: [
                [{ vl: 'Porcentaje para precio excede máximo razonable. Reintente con una cantidad entre -25 y 25 o por defecto ajustamos a % 25.' }, { vl: 'Porcentaje para precio excede mínimo razonable. Reintente con una cantidad entre -25 y 25 o por defecto ajustamos a % 25.' }],

                [{ vl: 'Percentage for price exceeds reasonable maximum. Retry with an amount between -25 and 25 or by default we adjust to % 25.' }, { vl: 'Percentage for price exceeds reasonable minimum. Retry with an amount between -25 and 25 or by default we adjust to % 25.' }],

                [{ vl: 'Percentatge per preu excedeix màxim raonable. Torni a intentar amb una quantitat entre -25 i 25 o per defecte ajustem a % 25.' }, { vl: 'Percentatge per preu excedeix mínim raonable. Torni a intentar amb una quantitat entre -25 i 25 o per defecte ajustem a % 25.' }],

                [{ vl: 'A porcentagem do preço excede o máximo razoável. Tente novamente com um valor entre -25 e 25 ou, por padrão, ajustamos para % 25.' },{ vl: 'A porcentagem do preço excede o mínimo razoável. Tente novamente com um valor entre -25 e 25 ou, por padrão, ajustamos para % 25.' }],                                               
               ]
      },
      f_checkmax: {
       mtx: [
                [{ vl: 'Máximo excede su saldo menos el costo de arbitraje y mineros. Reintente con cantidad inferior o  ajustamos al máximo posible automático por defecto.' }, { vl: 'Máximo demasiado pequeño menor al costo de arbitraje y mineros. Reintente con cantidad superior o para ajuste automático al máximo mínimo posible.' }, { vl: 'Menor a 0 se ajusta valor al máximo mínimo posible.' }],

                [{ vl: 'Maximum exceeds your balance minus the cost of arbitration and miners. Retry with a lower amount or we adjust to the maximum possible automatic by default.' }, { vl: 'Too small maximum less than the cost of arbitrage and miners. Retry with higher amount or for automatic adjustment to the maximum minimum possible.' }, { vl: 'Less than 0 the value is set to the maximum minimum possible.' }],

                [{ vl: 'Màxim excedeix el seu saldo menys el cost d`arbitratge i miners. Torni a intentar amb quantitat inferior o ajustem al màxim possible automàtic per defecte .' }, { vl: 'Màxim massa petit menor a el cost d`arbitratge i miners. Torni a intentar amb quantitat superior o per ajust automàtic al màxim mínim possible.' }, { vl: 'Menor a 0 s`ajusta valor al màxim mínim possible.' }],

                [{ vl: 'O máximo excede seu saldo menos o custo de arbitragem e mineradores. Tente novamente com um valor menor ou ajustamos para o máximo possível automático por padrão.' },{ vl: 'Máximo muito pequeno, menor que o custo de arbitragem e mineradores. Tente novamente com uma quantidade maior ou para ajuste automático ao mínimo máximo possível.' }, { vl: 'Menor que 0, o valor é definido para o mínimo máximo possível.' }],                                               
               ]
      },
      f_checkmin: {
       mtx: [
                [{ vl: 'Mínimo excede su saldo menos el costo de arbitraje y mineros. Reintente con cantidad inferior o  ajustamos al mínimo máximo posible automático por defecto.' }, { vl: 'Mínimo demasiado pequeño menor al costo de arbitraje y mineros. Reintente con cantidad superior o para ajuste automático al mínimo mínimo posible.' }, { vl: 'Mínimo menor a 0 se ajusta valor al mínimo mínimo posible.' }],

                [{ vl: 'Minimum exceeds your balance minus the cost of arbitration and miners. Retry with a lower amount or we adjust to the minimum maximum possible automatic by default.' }, { vl: 'Minimum too small, less than the cost of arbitrage and miners. Retry with the same or higher amount to automatically adjust to the minimum  minimum possible.' }, { vl: 'Minimum less than 0 is set to the minimum possible minimum value.' }],

                [{ vl: 'Mínim excedeix el seu saldo menys el cost d`arbitratge i miners. Torni a intentar amb quantitat inferior o ajustem al mínim màxim possible automàtic per defecte .' }, { vl: 'Mínim massa petit, menor al cost d`arbitratge i miners. Torni a intentar amb quantitat superior o la mateixa per ajust automàtic al mínim mínim possible.' }, { vl: 'Mínim menor a 0 s`ajusta valor al mínim mínim possible.' }],

                [{ vl: 'O mínimo excede seu saldo menos o custo de arbitragem e mineradores. Tente novamente com um valor menor ou ajustamos para o mínimo máximo possível automático por padrão.' },{ vl: 'Mínimo muito pequeno, menor que o custo de arbitragem e mineradores. Tente novamente com o mesmo valor ou superior para ajustar automaticamente ao mínimo mínimo possível.' }, { vl: 'Mínimo menor que 0 é definido como o valor mínimo mínimo possível.' }],                                               
               ]
      },
      f_updatemon: {
       mtx: [
                [{ vl: 'Falta seleccionar moneda de cobro' }],
                [{ vl: 'It is necessary to select the collection currency' }],
                [{ vl: 'Manca seleccionar moneda de cobrament' }],
                [{ vl: 'É necessário selecionar a moeda de cobrança' }],,                                               
               ]
      },
      f_alerta: {
       mtx: [
                [{ vl: 'Seleccione la oferta a editar' }],
                [{ vl: 'Select the offer to edit' }],
                [{ vl: 'Seleccioneu l`oferta a editar' }],
                [{ vl: 'Selecione a oferta para editar' }],,                                               
               ]
      },
      f_agregarVenta: {
       mtx: [
                [{ vl: 'Nueva oferta de venta agregada con éxito. Visualícela en Comprar del menú principal' }, { vl: 'Falta seleccionar medio de cobro' }],
                [{ vl: 'New sale offer added successfully. View it in Buy from the main menu' }, { vl: 'It is necessary to select means of payment' }],
                [{ vl: 'Nova oferta de venda agregada amb èxit. Visualitzeula a Comprar del menú principal' }, { vl: 'Manca seleccionar mitjà de cobrament' }],
                [{ vl: 'Nova oferta de venda adicionada com sucesso. Visualize-o em Comprar no menu principal' }, { vl: 'É necessário selecionar meios de pagamento' }],,                                               
               ]
      },
      f_eliminarVenta: {
       mtx: [
                [{ vl: 'Oferta de venta eliminada con éxito' },{ vl: '¡ Por favor aségurese de concluir sus transacciones en curso antes de eliminar ofertas !' }],
                [{ vl: 'Offer to sell successfully removed' },{ vl: 'Please be sure to complete your ongoing transactions before deleting  offers!' }],
                [{ vl: 'Oferta de venda eliminada amb èxit' },{ vl: 'Si us plau assegureu-vos de concloure les transaccions en curs abans d`eliminar ofertes' }],
                [{ vl: 'Oferta de venda removida com sucesso' },{ vl: 'Certifique-se de concluir suas transações em andamento antes de excluir ofertas!' }],,                                               
               ]
      },
      f_activarEdicion: {
       mtx: [
                [{ vl: 'Editando oferta de venta' },{ vl: '¡ Por favor aségurese de concluir sus transacciones en curso antes de editar ofertas !' }],
                [{ vl: 'Editing sale offer' },{ vl: 'Please be sure to complete your ongoing transactions before editing offers!' }],
                [{ vl: 'S`està editant oferta de venda' },{ vl: 'Si us plau assegureu-vos de concloure les transaccions en curs abans d`editar ofertes' }],
                [{ vl: 'Editando oferta de venda' },{ vl: 'Certifique-se de concluir suas transações em andamento antes de editar  ofertas!' }],                                               
               ]
      },
      f_editarVenta: {
       mtx: [
                [{ vl: 'Oferta de venta actualizada con éxito. Visualícela en Comprar del menú principal' }],
                [{ vl: 'Sale offer updated successfully. View it in Buy from the main menu' }],
                [{ vl: 'Oferta de venda actualitzada amb èxit. Visualitzeu a Comprar al menú principal' }],
                [{ vl: 'Oferta de venda atualizada com sucesso. Visualize-o em Comprar no menu principal' }],                                               
               ]
      },
       f_checkpubvendedor: {
         txts: [
          [{ vl: 'Decodificada dirección multifirma del redeemscrip:'},{ vl: '¡ Verificada con éxito Dirección Bitcoin multifirma ! :'},{ vl: 'Clave pública vendedor, dirección multifirma actualizadas con éxito '},{ vl: '¡Falló verificacion, NO creada multifirma de Dirección Bitcoin!'},{ vl: 'La clave pública no corresponde a su dirección, NO se pudo importar '},{ vl: 'No es una clave pública válida de su dirección, NO se pudo importar'}],
          [{ vl: 'Decoded multi-signature address of the redeemscript:'},{ vl: 'Successfully verified multi-signature Bitcoin address! : '},{ vl: 'Seller public key, multi-signature address successfully updated'},{ vl: 'Verification failed, NO multi-signature of Bitcoin Address created!'},{ vl: 'The public key does not correspond to your address, it could NOT be imported '},{ vl: 'It is not a valid public key of your address, it could NOT be imported'}],
          [{ vl: 'Descodificada adreça multisignatura del redeemscrip:'},{ vl: 'Verificada amb èxit Adreça Bitcoin multisignatura !'},{ vl: 'Clau pública venedor, adreça multisignatura actualitzada amb èxit '},{ vl: 'Va fallar verificació, NO creada multisignatura d`Adreça Bitcoin!'},{ vl: 'La clau pública no correspon a la seva adreça, NO es va poder importar '},{ vl: 'No és una clau pública vàlida de la seva adreça, NO es va poder importar'}],
          [{ vl: 'Endereço de assinaturas múltiplas decodificado do resgatado:'},{ vl: 'Endereço Bitcoin de múltiplas assinaturas verificado com sucesso! : '},{ vl: 'Chave pública do vendedor, endereço multi-assinaturas atualizado com sucesso '},{ vl: 'A verificação falhou, NENHUMA multi-assinatura de endereço Bitcoin foi criada!'},{ vl: 'A chave pública não corresponde ao seu endereço, ela NÃO pôde ser importada '},{ vl: 'Não é uma chave pública válida do seu endereço, NÃO pode ser importada'}],                                           
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
      return value.substr(0, 8);
    },
  },
  mounted() {
    //console.log('hola mundo desde mounted')
  },
  created() {
    this.listarUser();    
    this.listarOfertas();
    this.compra.NOMBREUSUARIO = this.nomuser;
    this.calcmineros();
    this.getsaldoresptxs();    
  },
  computed: {
    ...mapState(["token"]),
    ...mapGetters([
      "getLastClickTime",
      "selectedlang",
      "selectedusdt",
      "selectedusdtEUR",
      "selectedusdtVES",
      "selectedusdtCOP",
      "selectedusdtCLP",
      "selectedusdtBRL",
      "selectedusdtMXN",
      "selectedusdtARS",
      "selectedusdtPEN",
      "selectedusdtRUB",
      "selectedusdtINR",
      "selectedusdtTRY",
      "selectedusdtIRR",
      "selectedusdtCNY",      
      "estaActivo",
      "nomuser",
    ]),
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
      "syncUpdateValMgMf",            
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
    crea_mgmf() {
     this.crearmgmf = true;

    },
    fillcadenared_edit() { 
      if (this.ofertaEditar.CADENARED === '₮') {
       this.ofertaEditar.CADENARED = '₮';
       this.mensaje.texto = this.f_fillcaden.mtx[this.svl()][0].vl;        
       this.showAlert(); 
      } else {
       this.ofertaEditar.CADENARED = '₮';
       this.mensaje.texto = this.f_fillcaden.mtx[this.svl()][0].vl;    
       this.showAlert();        
      } 
    },
    fillcadenared() { 
      if (this.compra.CADENARED === '₮') {
       this.compra.CADENARED = '₮';
       this.mensaje.texto = this.f_fillcaden.mtx[this.svl()][0].vl;        
       this.showAlert(); 
      } else {
       this.compra.CADENARED = '₮';
       this.mensaje.texto = this.f_fillcaden.mtx[this.svl()][0].vl;    
       this.showAlert();        
      } 
    },    
    calcmineros() {
      axios
        .get("https://api.blockchain.info/mempool/fees")
        .then((response) => {
          if (response.data.priority) {
            this.fee = response.data.priority;
          } else {
            this.fee = 120;
          }
          //console.log("fee mineros...antes de multiplicar" + this.fee);
          this.fee = this.fee * 374;
          this.fee = this.fee / 100000000; // satos a usdt
          //console.log("mineros en usdt..." + this.fee);
          // listo para descontar
          })
          .catch((e) => {
             //  console.log(e.response);
          });          
    },    
    getsaldorefresh(address) {
      // primero chequear si esta en nodo en view
      this.contador = 0;
      if (this.contador < this.numregs) {
        // regula el contador segun num elementos del listado s
        let adr = address;
        let addressB64;
        addressB64 = Buffer.from(adr).toString("base64");
        this.axios
          .get(`/rpc-getsaldott/${addressB64}`)
          .then((res) => {
            this.saldo = res.data.balance;
            this.saldo = parseFloat(this.saldo);
            if (isNaN(this.saldo)) {
              this.saldo = 0;
            }
            // console.log("saldo.." + this.saldo);
          })
          .catch((e) => {});
        this.contador = this.contador + 1;
      }

      return this.saldo;
    },
    getsaldomfmg(address) {
      // primero chequear si esta en nodo en view
      this.contador = 0;
      if (this.contador < this.numregs) {
        // regula el contador segun num elementos del listado  s
        let adr = address;
        let addressB64;
        addressB64 = Buffer.from(adr).toString("base64");
        this.axios
          .get(`/rpc-getsaldott/${addressB64}`)
          .then((res) => {
            this.saldomfmg = res.data.balance;
            this.saldomfmg = parseFloat(this.saldomfmg);
            if (isNaN(this.saldo)) {
              this.saldomfmg = 0;
            }
            // console.log("saldomfmg.." + this.saldomfmg);  
          })
          .catch((e) => {});
        this.contador = this.contador + 1;
      }

      return this.saldomfmg;
    },
    onDecode_Pk(decodedString) {
        this.pubvendedor = decodedString;
        if (this.pubvendedor !== null) {
          this.verqrget = false;
          this.pastepubv(this.pubvendedor);
        }
    },
    pastepubv(valor) {
        this.isPaste = true;
        if (this.isPaste) {
          this.mensaje.color = "success";
          this.mensaje.texto = valor;
          this.showAlert();
          this.isPaste = false;

          let regexp = /^[0-9a-fA-F]+$/;
          if (valor) {
            if (valor.length === 66) {
              if (regexp.test(valor)) {
                this.checkpubvendedor(valor);              
              } else {
                this.mensaje.color = "danger";
                this.mensaje.texto =
                  valor + this.f_paste.txts[this.svl()][1].vl + valor;
                this.showAlert();
                this.pubvendedor = null;
                return false;
              }
            } else {
              this.mensaje.color = "danger";
              this.mensaje.texto =
                valor + this.f_paste.txts[this.svl()][1].vl + valor;
              this.showAlert();
              this.pubvendedor = null;
              return false;
            }
          }
        }
    },
    listarUser() {
      // leer id, address, emails user on line
      let adr = this.nomuser; 
      let addressB64;
      addressB64 = Buffer.from(adr).toString("base64");
      this.axios
        .get(`/seekUser/${addressB64}`)
        .then((res) => { // usuario
         this.User = res.data;
         this.mgmfredu = this.User.DIRMULTIFIRMA_FIANZALN;
        })
        .catch((e) => {});
    },    
    guardarUser(){     
        let config = {
          headers: {
                token: this.token,
          },
        };             
        this.axios
          .put(`/usuario/${this.User._id}`, this.User, config)
          .then((res) => {

          })
          .catch((e) => {
          //  console.log(e.response);                     
            this.mensaje.texto = "Error";           
            this.mensaje.color = "danger";
            this.showAlert();
          });
    },
    checkpubvendedor(publickey) {

        // chequear  que sea correcta y corresponda a su address
        // formato valido importpubkey y chequear getaddressinfo
        let pubkeyB64 = Buffer.from(publickey).toString("base64");
        this.axios
          .get(`/rpc-importpubkey/${pubkeyB64}`)
          .then((res) => {
            //  console.log("pubkey importada al nodo:.." + res.data);
            if (res.data === null) {
              // entonces getaddressinfo y chequear pk del input con pk en address nodo
              let addressB64 = Buffer.from(this.nomuser).toString("base64");
              this.axios
                .get(`/rpc-getaddressinfo/${addressB64}`)
                .then((res) => {
                  let pknodo = res.data.pubkey;
                  if (
                    pknodo.trim().toUpperCase() ===
                    this.pubvendedor.trim().toUpperCase()
                  ) {
                    this.ispkvendedorok = true;
                    this.pubvendedor = pknodo.trim().toUpperCase();
                    //  PUBVENDEDOR DIRARBITRAJE
                    // crear dirmultifirma

                    let vendedorB64 = Buffer.from(this.pubvendedor).toString(
                      "base64"
                    );

                    // generar y recoger una address de arbitraje getnewaddress("","bech32");
                    this.axios
                      .get("/rpc-getnewaddress/")
                      .then((res) => {
                        //console.log('nueva direc.arbitraje del rpc.... '+res.data);
                        this.User.ARBITRAJE = res.data;

                        // leer pubkey del arbitro 
                        let addressB64 = Buffer.from(this.User.ARBITRAJE).toString(
                          "base64"
                        );
                        this.axios
                          .get(`/rpc-getaddressinfo/${addressB64}`)
                          .then((res) => {
                            //   console.log('publica arbitro...'+res.data.pubkey);
                            this.pkarbitraje = res.data.pubkey;
                            let arbitroB64 = Buffer.from(this.pkarbitraje).toString(
                              "base64"
                            );     
                         //console.log('publica vendedorB64...'+vendedorB64);   
                         //console.log('publica arbitroB64...'+arbitroB64); 
                    // Creamos la multifirma multig vendedor/arbitro
                    this.axios
                      .get(
                        `/rpc-createmultisigLN/${vendedorB64},${arbitroB64}`
                      )
                      .then((res) => {
                        //  console.log("dir multifirma: " + res.data.address);
                        //  console.log("dir redeemScript: " + res.data.redeemScript);
                        //console.log("dir descriptor: " + res.data.descriptor);

                        if (res.data.redeemScript) {
                          this.User.REDEEMSCRIPT_FIANZALN = res.data.redeemScript;

                          let config = {
                            headers: {
                              token: this.token,
                            },
                          };
                          this.axios
                            .get(
                              `/rpc-decodescript/${this.User.REDEEMSCRIPT_FIANZALN}`,
                              config
                            )
                            .then((res) => {
                              this.mensaje.color = "success";
                              this.mensaje.texto =
                                this.f_checkpubvendedor.txts[this.svl()][0].vl +
                                res.data.p2sh;
                              this.showAlert();
                              /*
                              console.log(
                                "Decodificada dirección multifirma del redeemscrip: " +
                                  res.data.p2sh
                              );
                              */
                              this.User.DIRMULTIFIRMA_FIANZALN = res.data.p2sh; //leer ms address

                              //console.log(this.User.DIRMULTIFIRMA_FIANZALN)      
                              // llamar una getaddressinfo this.tx.DIRMULTIFIRMA de funcion que recoja el scriptPubKey
                              let addressB64 = Buffer.from(
                                this.User.DIRMULTIFIRMA_FIANZALN
                              ).toString("base64");
                              this.axios
                                .get(`/rpc-getaddressinfo/${addressB64}`)
                                .then((res) => {
                                  /*
                                  console.log(
                                    "leido y guardado en result MF_scriptPubKey : " +
                                      res.data.scriptPubKey
                                  );
                         ********************    */ 
                         //////// todo al user 3 valores
                                  this.User.MF_SCRIPTPUBKEY_FIANZALN = res.data.scriptPubKey;                            
                                  /*console.log(
                                    "leido y guardado en  MF_scriptPubKey : " +
                                      this.User.MF_SCRIPTPUBKEY_FIANZALN
                                  );*/
                                  this.importaddress_sinrescan(this.User.DIRMULTIFIRMA_FIANZALN);
                                  this.guardarUser();
                                  router.push({ name: "About" }); // recargar ruta

                                })
                                .catch((e) => {console.log(e.response);});
                            })
                            .catch((e) => {console.log(e.response);});
                            
                        }

                            })
                            .catch((e) => {console.log(e.response);});
                           })
                          .catch((e) => {console.log(e.response);});
                      })
                      .catch((e) => {console.log(e.response);});

                  } else {
                    // no es valida
                    this.mensaje.color = "danger";
                    this.mensaje.texto =
                      this.f_checkpubvendedor.txts[this.svl()][4].vl;
                    this.showAlert();
                    this.pubvendedor = null;
                  }

                })
                .catch((e) => {console.log(e.response);});
                
            } else {
              // no es valida
              this.mensaje.color = "danger";
              this.mensaje.texto =
                this.f_checkpubvendedor.txts[this.svl()][5].vl;
              this.showAlert();
              this.pubvendedor = null;
            }

          })
          .catch((e) => {console.log(e.response);});
    },
    importaddress_sinrescan(address) {
        // sin usar de momento adaptar con un return si se usa sin axios anidados
        let addressB64 = Buffer.from(address).toString("base64");
        this.axios
          .get(`/rpc-udptaddressfalse/${addressB64}`)
          .then((res) => {})
          .catch((e) => {});
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

           //console.log(txs[0].IMPORTECOMPRA);
            for (var i = 0; i < txs.length; i++) {
              if (txs[i].VENDEDOR === this.nomuser & txs[i].RAWTXSIGNEDVEND !== "⏳") { // solo las tx que este como vendedor
                  this.saldoresptxs = this.saldoresptxs + (txs[i].IMPORTECOMPRA * 1.0025);
                  this.saldoresptxs = this.round8(this.saldoresptxs);
              }
            }           

          }

      })        
        .catch((e) => {console.log(e.response);});    

    },                            
    checkpreuedit(precio) {
      if (precio > 25) {
        this.ofertaEditar.PRECIOOFERTA = 25;
        this.mensaje.color = "warning";
       this.mensaje.texto = this.f_checkpreu.mtx[this.svl()][0].vl;          
        this.showAlert();
      } else if (precio < -25) {
        this.ofertaEditar.PRECIOOFERTA = -25;
        this.mensaje.color = "warning";
      this.mensaje.texto = this.f_checkpreu.mtx[this.svl()][1].vl; 
        this.showAlert();
      }
    },
    checkpreuadd(precio) {
      if (precio > 25) {
        this.compra.PRECIOOFERTA = 25;
        this.mensaje.color = "warning";
        this.mensaje.texto = this.f_checkpreu.mtx[this.svl()][0].vl; 
        this.showAlert();
      } else if (precio < -25) {
        this.compra.PRECIOOFERTA = -25;
        this.mensaje.color = "warning";
        this.mensaje.texto = this.f_checkpreu.mtx[this.svl()][1].vl;

        this.showAlert();
      }
    },
    round8(num) {
      return +(Math.round(num + "e+8") + "e-8");
    },
    checkmaxedit(limite) {
      let limitmax = this.getsaldorefresh(this.nomuser);
      let comisTxavended = limitmax * 0.0025;
      limitmax = this.round8((parseFloat(limitmax) - comisTxavended) - this.fee);
      limite = this.round8(parseFloat(limite));
      //console.log("saldo del user menos costo arbitraje..."+limitmax);
      if (limite > 0.00000001) {
        if (limite > limitmax) {
          this.ofertaEditar.LIMITEARRIBA = limitmax;
          this.mensaje.color = "warning";
       this.mensaje.texto = this.f_checkmax.mtx[this.svl()][0].vl;            
          this.showAlert();
        } else if (limite < comisTxavended) {
          this.ofertaEditar.LIMITEARRIBA = this.round8(comisTxavended);
          this.mensaje.color = "warning";
        this.mensaje.texto = this.f_checkmax.mtx[this.svl()][1].vl;           
          this.showAlert();
        }
      } else if (limite < -0.00000001) {
        this.ofertaEditar.LIMITEARRIBA = this.round8(comisTxavended);
        this.mensaje.color = "warning";
        this.mensaje.texto = this.f_checkmax.mtx[this.svl()][2].vl; 
      }
    },
    checkminedit(limite) {
      let limitmax = this.getsaldorefresh(this.nomuser);
      let comisTxavended = limitmax * 0.0025;
      limitmax = this.round8((parseFloat(limitmax) - comisTxavended) - this.fee);
      limite = this.round8(parseFloat(limite));
      //console.log("saldo del user menos costo arbitraje..."+limitmax);
      if (limite > 0.00000001) {
        if (limite > limitmax) {
          this.ofertaEditar.LIMITEABAJO = limitmax;
          this.mensaje.color = "warning";
       this.mensaje.texto = this.f_checkmin.mtx[this.svl()][0].vl;
           
          this.showAlert();
        } else if (limite < comisTxavended) {
          if (this.ofertaEditar.CADENARED === '₮') {
          this.ofertaEditar.LIMITEABAJO = this.round8(comisTxavended);
          this.mensaje.color = "warning";
        this.mensaje.texto = this.f_checkmin.mtx[this.svl()][1].vl;          
          this.showAlert();
          }

        }
      } else if (limite < -0.00000001) {
        this.ofertaEditar.LIMITEABAJO = this.round8(comisTxavended);
        this.mensaje.color = "warning";
        this.mensaje.texto = this.f_checkmin.mtx[this.svl()][1].vl;
        this.showAlert();
      }
    },
    checkminadd(limite) {
      let limitmax = this.getsaldorefresh(this.nomuser);
      let comisTxavended = limitmax * 0.0025;
      limitmax = this.round8((parseFloat(limitmax) - comisTxavended) - this.fee );
      limite = this.round8(parseFloat(limite));
      //console.log("saldo del user menos costo arbitraje..."+limitmax);
      if (limite > 0.00000001) {
        if (limite > limitmax) {
          this.compra.LIMITEABAJO = limitmax;
          this.mensaje.color = "warning";
        this.mensaje.texto = this.f_checkmin.mtx[this.svl()][0].vl;

          this.showAlert();
        } else if (limite < comisTxavended) {
          if (this.compra.CADENARED === '₮') {
          this.compra.LIMITEABAJO = this.round8(comisTxavended);
          this.mensaje.color = "warning";
        this.mensaje.texto = this.f_checkmin.mtx[this.svl()][1].vl;          
          this.showAlert();
        }
        }
      } else if (limite < -0.00000001) {
        this.compra.LIMITEABAJO = this.round8(comisTxavended);
        this.mensaje.color = "warning";
        this.mensaje.texto = this.f_checkmin.mtx[this.svl()][2].vl;          
        this.showAlert();
      }
    },
    checkmaxadd(limite) {
      let limitmax = this.getsaldorefresh(this.nomuser);
      let comisTxavended = limitmax * 0.0025;
      limitmax = this.round8((parseFloat(limitmax) - comisTxavended) - this.fee);
      limite = this.round8(parseFloat(limite));
      //console.log("saldo del user menos costo arbitraje..."+limitmax);
      if (limite > 0.00000001) {
        if (limite > limitmax) {
          this.compra.LIMITEARRIBA = limitmax;
          this.mensaje.color = "warning"; 
        this.mensaje.texto = this.f_checkmax.mtx[this.svl()][0].vl;             
          this.showAlert();
        } else if (limite < comisTxavended) {
          this.compra.LIMITEARRIBA = this.round8(comisTxavended);
          this.mensaje.color = "warning";  
       this.mensaje.texto = this.f_checkmax.mtx[this.svl()][1].vl;          
          this.showAlert();
        }
      } else if (limite < -0.00000001) {
        this.compra.LIMITEARRIBA = this.round8(comisTxavended);
        this.mensaje.color = "warning";
        this.mensaje.texto = this.f_checkmax.mtx[this.svl()][2].vl;
        this.showAlert();
      }
    },
    uptmedcobro() {
      this.compra.NOMBANCO = this.value;
      let la = this.options;
      let found = { id: "vacio", children: "vacio" };
      found = la.find((x) => x.id === this.value);
      if (typeof found === "undefined") {
        found = { id: "vacio", children: "vacio" };
      }
      if (found.id !== "vacio") {
        this.compra.GRUPOBANCO = found.id;
      } else {
        for (var i = 0, len = la.length; i < 8; i++) {
          found = la.find((x) => x.children[i].id === this.value);
          if (typeof found === "undefined") {
            found = { id: "vacio" + i };
          } else {
            this.compra.GRUPOBANCO = found.id;
          }
        }
      }
    },
    uptmedcobroedit() {
      this.ofertaEditar.NOMBANCO = this.value;
      let la = this.options;
      let found = { id: "vacio", children: "vacio" };
      found = la.find((x) => x.id === this.value);
      if (typeof found === "undefined") {
        found = { id: "vacio", children: "vacio" };
      }
      if (found.id !== "vacio") {
        this.ofertaEditar.GRUPOBANCO = found.id;
      } else {
        for (var i = 0, len = la.length; i < 8; i++) {
          found = la.find((x) => x.children[i].id === this.value);
          if (typeof found === "undefined") {
            found = { id: "vacio" + i };
          } else {
            this.ofertaEditar.GRUPOBANCO = found.id;
          }
        }
      }
    },
    updatemon() {
      if (this.selectedmon.value !== null) {
      this.compra.MONEDAOFERTA = this.selectedmon.value;
      this.compra.MONEDATIPO = "Fiat";
      } else {
       this.mensaje.texto = this.f_updatemon.mtx[this.svl()][0].vl;
       this.mensaje.color = "danger";
       this.showAlert();            
      }
    },
    updatemonedit() {
      if (this.selectedmon.value !== null) {      
      this.ofertaEditar.MONEDAOFERTA = this.selectedmon.value;
      this.ofertaEditar.MONEDATIPO = "Fiat";
      } else {
       this.mensaje.texto = this.f_updatemon.mtx[this.svl()][0].vl;
       this.mensaje.color = "danger";
       this.showAlert();            
      }      
    },
    alerta() {
      this.mensaje.color = "success";
      this.mensaje.texto = this.f_alerta.mtx[this.svl()][0].vl;      
      this.showAlert();
    },
    listarOfertas() {
      //  cabecera token
      let config = {
        headers: {
          token: this.token,
        },
      };
      this.axios
        .get("/ofusban-vista", config)
        .then((res) => {
          // console.log(res.data);
          this.comprar = res.data;

            // filtramos el array solo con los que son ₮
            let comprars = this.comprar;            
            for (var i = 0; i < comprars.length; i++) {
              if (comprars[i].CADENARED  === '₮') {
                //   console.log('NO eliminar...'+comprars[i].NOMBREUSUARIO+'..saldo...'+this.getsaldo(comprars[i].NOMBREUSUARIO))
              } else {
                //   console.log('SI eliminar...'+comprars[i].NOMBREUSUARIO+'..saldo...'+this.getsaldo(comprars[i].NOMBREUSUARIO))
                comprars.splice(i, 1);
                i = i - 1;
              }
            }
            this.comprar = comprars;
            this.getsaldomfmg(this.User.DIRMULTIFIRMA_FIANZALN);
        })
        .catch((e) => {
          // console.log(e.response);
        });
    },
    agregarVenta() {
      /// comprobar con cabecera token aunque sea un post
      //  cabecera token
      let config = {
        headers: {
          token: this.token,
        },
      };
      // console.log(this.compra);
      this.compra.NOMBREUSUARIO = this.nomuser;
      this.compra.LIMITEABAJO = this.round8(this.compra.LIMITEABAJO);
      this.compra.LIMITEARRIBA = this.round8(this.compra.LIMITEARRIBA);

      this.axios
        .post("/nueva-ofusban-vista", this.compra, config)
        .then((res) => {
          this.comprar.push(res.data);
          this.compra.NOMBREUSUARIO = "";
          this.compra.FORMADEPAGO = "";
          this.compra.NOMBANCO = "";
          this.compra.PRECIOOFERTA = "";
          this.compra.MONEDAOFERTA = "";
          this.compra.LIMITEABAJO = "";
          this.compra.LIMITEARRIBA = "";
          this.value = null;          
          this.mensaje.color = "success";
         this.mensaje.texto = this.f_agregarVenta.mtx[this.svl()][0].vl;             
          this.showAlert();
        })
        .catch((e) => {
          //  console.log(e.response);
          if (e.response.data.error.errors.NOMBANCO.message) {
            this.mensaje.texto = e.response.data.error.errors.NOMBANCO.message;
        this.mensaje.texto = this.f_agregarVenta.mtx[this.svl()][1].vl; 
            
          }
          this.mensaje.color = "danger";
          this.showAlert();
          // console.log(e.response);
          if (e.response.data.error.errors.MONEDAOFERTA.message) {
            this.mensaje.texto =
              e.response.data.error.errors.MONEDAOFERTA.message;
        this.mensaje.texto = this.f_agregarVenta.mtx[this.svl()][1].vl;                     
          }
          this.mensaje.color = "danger";
          this.showAlert();
          //   console.log(e.response);
          if (e.response.data.error.errors.PRECIOOFERTA.message) {
            this.mensaje.texto =
              e.response.data.error.errors.PRECIOOFERTA.message;
          }
          this.mensaje.color = "danger";
          this.showAlert();
          //    console.log(e.response);
          if (e.response.data.error.errors.LIMITEABAJO.message) {
            this.mensaje.texto =
              e.response.data.error.errors.LIMITEABAJO.message;
          }
          this.mensaje.color = "danger";
          this.showAlert();           
        });
    },
    eliminarVenta(id) {
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
          txs = res.data; // todas las tx este como comprador o vendedor
         // console.log(txs.length);
      if (txs.length < 1) { // no hay tx en curso

          // eliminamos la oferta
              this.axios
                .delete(`/ofusban-vista/${id}`, config)
                .then((res) => {
                  const index = this.comprar.findIndex(
                    (item) => item._id === res.data._id
                  );
                  this.comprar.splice(index, 1);
                  this.mensaje.color = "success";
              this.mensaje.texto = this.f_eliminarVenta.mtx[this.svl()][0].vl;         
                  this.showAlert();
                })
                .catch((e) => {
                  // console.log(e.response);
                });
                                 
      } else { // hay tx en curso ... no eliminamos la oferta

      this.mensaje.texto = this.f_eliminarVenta.mtx[this.svl()][1].vl;             
        this.mensaje.color = "danger";
        this.showAlert();
      }

      })        
        .catch((e) => {
        //console.log(e.response);
      });

    },
    activarEdicion(id) {
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
          txs = res.data; // todas las tx este como comprador o vendedor
         // console.log(txs.length);
      if (txs.length < 1) { // no hay tx en curso

          // editamos la oferta
              this.editar = true;
              //  console.log(id);
              this.axios
                .get(`/ofusban-vistaid/${id}`, config)
                .then((res) => {
                  this.ofertaEditar = res.data;
                  this.selectedmon.label = this.ofertaEditar.MONEDAOFERTA;
                  this.value = this.ofertaEditar.NOMBANCO;
                  this.mensaje.color = "warning";
                this.mensaje.texto = this.f_activarEdicion.mtx[this.svl()][0].vl;          
                  this.showAlert();
                })
                .catch((e) => {
                  //  console.log(e.response);
                });
                                 
      } else { // hay tx en curso ... no editamos la oferta

      this.mensaje.texto = this.f_activarEdicion.mtx[this.svl()][1].vl;             
        this.mensaje.color = "danger";
        this.showAlert();
      }

      })        
        .catch((e) => {
        //console.log(e.response);
      });

    },
    editarVenta(item) {
      // ojo falta cabecera token
      //  cabecera token
      let config = {
        headers: {
          token: this.token,
        },
      };

      item.LIMITEABAJO = this.round8(item.LIMITEABAJO);
      item.LIMITEARRIBA = this.round8(item.LIMITEARRIBA);
      this.axios
        .put(`/ofusban-vista/${item._id}`, item, config)
        .then((res) => {
          const index = this.comprar.findIndex((n) => n._id === res.data._id);
          this.comprar[index].NOMBREUSUARIO = res.data.NOMBREUSUARIO;
          this.comprar[index].CADENARED = res.data.CADENARED;                   
          this.comprar[index].FORMADEPAGO = res.data.FORMADEPAGO;
          this.comprar[index].NOMBANCO = res.data.NOMBANCO;
          this.comprar[index].PRECIOOFERTA = res.data.PRECIOOFERTA;
          this.comprar[index].MONEDAOFERTA = res.data.MONEDAOFERTA;
          this.comprar[index].LIMITEABAJO = res.data.LIMITEABAJO;
          this.comprar[index].LIMITEARRIBA = res.data.LIMITEARRIBA;
          //falta el put del updatedat
          this.comprar[index].updatedat = Date.now;
          this.mensaje.color = "success";
        this.mensaje.texto = this.f_editarVenta.mtx[this.svl()][0].vl;
          this.showAlert();
          this.editar = false;
          this.listarOfertas()
        })
        .catch((e) => {
          // console.log(e.response);
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
  .container_agregar {
    margin-top: auto;
    position: relative;
    width: 100%;
    min-width: 360px;
    height: auto;   
    border-radius: 10px;
    background: linear-gradient(to bottom right, rgb(255, 255, 255), rgb(237, 28, 21));
    padding: 0px;
  }
  .container_editar {
    margin-top: auto;
    position: relative;
    width: 100%;
    min-width: 360px;
    height: auto;   
    border-radius: 10px;
    background: linear-gradient(to bottom right, rgb(255, 255, 255), rgba(250, 221, 4, 0.974));
    padding: 0px;
  }
.popper {
    z-index: 5;
    color: white;
    background-color: black;
    border-radius: 6px;
    padding: 5px 10px 1px;
    min-width: auto;    
    max-width: 540px;
    max-inline-size: 540px;
    writing-mode: horizontal-tb;        
    max-height: 400px;
    text-align: left;        
}

.popper_tl {  
    font-size: 90%;
    z-index:11;
    color: white;
    background-color: black;
    border-radius: 6px;
    padding: 5px 10px 1px;
    max-width: 540px;
    max-inline-size: 540px;
    writing-mode: horizontal-tb;
    min-height: 250px;    
    max-height: 400px;
    -moz-box-shadow: rgb(148, 148, 148) 0 0 6px 0;
    -webkit-box-shadow: rgb(148, 148, 148) 0 0 6px 0;
    box-shadow: rgb(148, 148, 148) 0 0 6px 0;    
    text-align: left;
    resize: both;
    overflow-x: auto; //esconde el arrow  
    overflow-y: scroll; //esconde el arrow
}


#table {
  margin-top: 30px;
} 
$breakpoint: 680px;

.vue-treeselect {
        position: inline;
        top: 10px;
        padding: 0px;
        margin-right: 2px;
        margin-left: 2px;
        margin-bottom: 30px;
        background-color: transparent;
        font-size: 15px;
        width: auto;  
        min-width: 200px;  
        color: #5a5a5a;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff, 0 1px 0 #fff;          
  &:focus {
    outline: none;
    background-color: rgb(243, 255, 236);
  }    

}

form {
  justify-content: flex-end;
  display: flex;

  .floating-label-group {
        position: relative;
        margin-top: 0px;
        margin-bottom: 15px;
        margin-left: 2px;
        display: inline-flex;

        .floating-label {
          font-size: 14px;
          color: #a2a2a2;
          position: absolute;
          pointer-events: none;
          top: 19px;
          left: 5px;
          transition: all 0.3s ease;
        }

        textarea:focus ~ .floating-label,
        textarea:not(:focus):valid ~ .floating-label {
          top: 7px;
          bottom: 0px;
          left: 5px;
          font-size: 11px;
          opacity: 1;
          color: #404040;
          background-color: transparent;
        }
        
        input:focus ~ .floating-label,
        input:not(:focus):valid ~ .floating-label {
          top: 8px;
          bottom: 0px;
          left: 5px;
          font-size: 11px;
          opacity: 1;
          color: #404040;
          background-color: transparent;
        }         
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
input {
  top: 1px;
  background-color: white;
  border: none;
  padding: 1px 1px 1px;
  margin: 3px 0;
  width: calc(105% - 1px);
  height: auto;
  border-radius: 5px;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff, 0 1px 0 #fff;
  overflow: hidden;

  &:focus {
    outline: none;
    background-color: rgb(243, 255, 236);
  }
}

textarea {
  margin-top: 10px;
  background-color: white;
  border: none;
  padding: 7px 1px 1px 15px;
  width: calc(105% - 1px);
  height: 36px;
  max-height: 52px;  
  border-radius: 5px;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff, 0 1px 0 #fff;
  overflow: hidden;
}

button {
  border-radius: 10px;
  border: 1px solid #00ff77;
  background-color: #b1d0c0;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 3px 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.1s ease-in;
  margin-left: 5px;

  &:active {
    transform: scale(0.9);
  }

  &:focus {
    outline: none;
  }
}
button.invert {
  background-color: transparent;
  border-color: #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
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
.table-hover > tbody > tr:hover {
  background-color: rgb(231, 248, 231);
}

#selchain {
         position: relative;
         top: 2px;
         background: white;
         border: none;
         padding: 7px 1px 1px;
         margin: 3px 0;
         width: 36px;
         height: 36px;
         border-radius: 5px;
         border-bottom: 1px solid #ddd;
         box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff, 0 1px 0 #fff;
         overflow: hidden;
}

#formato {
   margin-top: -15px;
   padding-right:auto;   
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

@media (max-width: $breakpoint) {

  .container_agregar {
    margin-left: -15px;
  }
  .container_editar {
    margin-left: -15px;
  }    

.popper {
  max-width: 300px;
  max-inline-size: 300px;
  overflow-y: scroll; //esconde el arrow   
}  

.popper_tl {
  min-height: 260px;
  max-width: 340px;
  max-inline-size: 340px;
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
            content: attr(data-th)"▫️  ";
            font-weight: bold;
            display: inline-block;
            @media (min-width: $breakpoint) {
              display: none;
            }
          }
        }
      }

      form {
        border: 1px solid rgb(172, 172, 172);
        input {
          display: block;
          border: none;
          margin-left: 100px;
          content: attr(data-th)"▫️  ";
          font-weight: bold;
          display: inline-block;
          min-width: 140px;
          @media (min-width: $breakpoint) {
          display: none;
          }
        }
      }
      
      .vue-treeselect {
        position: inline;
        top: 8px;
        margin-right: 2px;
        margin-left: 15px;
        background-color: transparent;
        font-size: 14px;
        min-width: 330px;
        margin-bottom: 20px;  
        color: rgb(97, 97, 97);
      }      
            
      #formato {
        display: inline-block;
        margin-left:0px;
        padding-right:10px;
      }
      #selchain {
         top: -14px;
      }

  }
</style>
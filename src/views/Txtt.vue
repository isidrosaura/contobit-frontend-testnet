<template>
<div id="Txtt">
  <div class="container">
   <div class="view">
    <span v-if="txs.length < 1"> 
      <b-alert :show="dismissCountDown" dismissible :variant="mensaje.color" @dismissed="dismissCountDown = 0"
        @dismiss-count-down="countDownChanged" syle="background:yellow;">{{ mensaje.texto }}</b-alert>
    </span>        
    <div v-if="txs.length > 1">
      <h2>
        <img src="https://www.contobit.com/imagens/txtt.png" width="43.2px" height="30.4px">       
        <span id="tittransacs">{{tit_transacs.mat[svl()][0].vl}}
        <popper
              :options= popoptionsb>
              <div class="popper">                         
                {{tit_transacs.tlpc[svl()][0].vl}}
              </div>                
              <a slot="reference" class="btn btn-outline-primary" @click="vertxs = !vertxs" >
                <font-awesome-icon :icon="['far', 'eye-slash']" />
              </a>
        </popper>          
        </span>
      </h2>

      <div v-if="vertxs">
        <span v-if="selectedlang === 'ESP'">{{ todayes }}</span>
        <span v-if="selectedlang === 'ENG'">{{ today }}</span>
        <span v-if="selectedlang === 'CAT'">{{ todayca }}</span>
        <span v-if="selectedlang === 'PORT'">{{ todaypt }}</span> 
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">{{tit_table_tx_encurso.mat[svl()][0].vl}}</th>
              <th scope="col">{{tit_table_tx_encurso.mat[svl()][1].vl}}</th>
              <th scope="col">{{tit_table_tx_encurso.mat[svl()][2].vl}}</th>
              <th scope="col">{{tit_table_tx_encurso.mat[svl()][3].vl}}</th>
              <th scope="col">{{tit_table_tx_encurso.mat[svl()][4].vl}}</th>
              <th scope="col">{{tit_table_tx_encurso.mat[svl()][5].vl}}</th>
              <th scope="col">{{tit_table_tx_encurso.mat[svl()][6].vl}}</th>
              <th scope="col">{{tit_table_tx_encurso.mat[svl()][7].vl}}</th>
              <th scope="col">{{tit_table_tx_encurso.mat[svl()][8].vl}}</th>
              <th scope="col">{{tit_table_tx_encurso.mat[svl()][9].vl}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in txs" :key="index">
              <td  :data-th="tit_table_tx_encurso.mat[svl()][0].vl">
                <span v-if="selectedlang === 'ESP'">{{ item.FECHA_INIC | fecha_spa }}</span>
                <span v-if="selectedlang === 'ENG'">{{ item.FECHA_INIC | fecha_en }}</span>
                <span v-if="selectedlang === 'CAT'">{{ item.FECHA_INIC | fecha_ca }}</span>
                <span v-if="selectedlang === 'PORT'">{{ item.FECHA_INIC | fecha_pt }}</span>                 
              </td>
              <td :data-th="tit_table_tx_encurso.mat[svl()][1].vl" v-if="item.CADENARED === '₮'">
                <font color="black"><b><i>⛓️</i></b></font>
              </td>
              <td :data-th="tit_table_tx_encurso.mat[svl()][1].vl" v-if="item.CADENARED === '⚡'">
                <font color="Darkorange">⚡</font>
              </td>
              <td :data-th="tit_table_tx_encurso.mat[svl()][2].vl" v-if="item.ACEP_VENDEDOR === '⏳'">
                <font color="tomato">⏳</font>
              </td>
              <td :data-th="tit_table_tx_encurso.mat[svl()][2].vl" v-if="item.ACEP_VENDEDOR === '✅'">
                <font color="tomato">✅</font>
              </td>
              <td :data-th="tit_table_tx_encurso.mat[svl()][3].vl" >{{ item.IMPORTECOMPRA }}</td>
              <td :data-th="tit_table_tx_encurso.mat[svl()][4].vl">{{ item.IMPORTEMONEDA }} {{ item.MONEDAOFERTA }}</td>
              <td :data-th="tit_table_tx_encurso.mat[svl()][5].vl" v-if="item.PAGO_COMPRADOR === '⏳'">
                <font color="mediumseagreen">⏳</font>
              </td>
              <td :data-th="tit_table_tx_encurso.mat[svl()][5].vl" v-if="item.PAGO_COMPRADOR === '✅'">
                <font color="mediumseagreen">✅</font>
              </td>
              <td :data-th="tit_table_tx_encurso.mat[svl()][6].vl" v-if="item.COBRO_VENDEDOR === '⏳'">
                <font color="tomato">⏳</font>
              </td>
              <td :data-th="tit_table_tx_encurso.mat[svl()][6].vl" v-if="item.COBRO_VENDEDOR === '✅'">
                <font color="tomato">✅</font>
              </td>
              <td :data-th="tit_table_tx_encurso.mat[svl()][6].vl" v-if="item.COBRO_VENDEDOR === '❌'">
                <font color="tomato">❌</font>
              </td>
              <td :data-th="tit_table_tx_encurso.mat[svl()][6].vl" v-if="item.COBRO_VENDEDOR === '⚖️✅'">
                <font color="tomato">⚖️✅</font>
              </td>              
              <td :data-th="tit_table_tx_encurso.mat[svl()][7].vl" v-if="nomuser === item.COMPRADOR">
                <font color="mediumseagreen">
                  <img align="bottom" src="https://www.contobit.com/imagens/carritott.png" width="25px"
                    height="17.4px" />
                  {{tit_table_tx_encurso_td.td_rol[svl()][0].vl}}
                </font>
              </td>
              <td :data-th="tit_table_tx_encurso.mat[svl()][7].vl" v-if="nomuser === item.VENDEDOR">
                <font color="tomato">
                  <img align="bottom" src="https://www.contobit.com/imagens/manitatt.png" width="25px" height="17.4px" />
                  {{tit_table_tx_encurso_td.td_rol[svl()][1].vl}}
                </font>
              <td  :data-th="tit_table_tx_encurso.mat[svl()][8].vl" v-if="item.TIMELINE === '1.Oferta'"> {{tit_table_tx_encurso_td.td_momentum[svl()][0].vl}}</td>
              <td  :data-th="tit_table_tx_encurso.mat[svl()][8].vl" v-if="item.TIMELINE === '2.Solicitud'"> {{tit_table_tx_encurso_td.td_momentum[svl()][1].vl}}</td>
              <td  :data-th="tit_table_tx_encurso.mat[svl()][8].vl" v-if="item.TIMELINE === '3.Contrato'"> {{tit_table_tx_encurso_td.td_momentum[svl()][2].vl}}</td>
              <td  :data-th="tit_table_tx_encurso.mat[svl()][8].vl" v-if="item.TIMELINE === '4.Pago'"> {{tit_table_tx_encurso_td.td_momentum[svl()][3].vl}}</td>
              <td  :data-th="tit_table_tx_encurso.mat[svl()][8].vl" v-if="item.TIMELINE === '5.Cobro'"> {{tit_table_tx_encurso_td.td_momentum[svl()][4].vl}}</td>
              <td  :data-th="tit_table_tx_encurso.mat[svl()][8].vl" v-if="item.TIMELINE === '6.Entrega'"> {{tit_table_tx_encurso_td.td_momentum[svl()][5].vl}}</td>
              <td  :data-th="tit_table_tx_encurso.mat[svl()][8].vl" v-if="item.TIMELINE === 'Arbitraje'"> {{tit_table_tx_encurso_td.td_momentum[svl()][6].vl}}</td>
              <td  :data-th="tit_table_tx_encurso.mat[svl()][8].vl" v-if="item.TIMELINE === 'Impago'"> {{tit_table_tx_encurso_td.td_momentum[svl()][7].vl}}</td>
              <td  :data-th="tit_table_tx_encurso.mat[svl()][8].vl" v-if="item.TIMELINE === 'Retorno'"> {{tit_table_tx_encurso_td.td_momentum[svl()][8].vl}}</td>

              <td  :data-th="tit_table_tx_encurso.mat[svl()][9].vl">
                <b-button @click="leertx(item)" class="outline-primary btn-warning m-2">
                  <font-awesome-icon icon="edit" />
                </b-button>
                <!--     <a  @click="leertx(item)"
       class="btn btn-outline-primary btn-success m-2"><font-awesome-icon icon="edit"/>
                </a>-->
              </td>
            </tr>
          </tbody>
        </table><hr>
        <!-- <span> selectedselTXtt... {{ this.selectedselTXtt }} </span> -->
      </div>
    </div>
    <!--  {{txs}} -->

    <!--  otro if hasta el final solo con la tx seleccionada  -->
    <div v-if="txs.length === 1">
          <!-- **** sigue etiqueta del título  para T Cadena de bloques Bitcoin -->           
        <h2><img src="https://www.contobit.com/imagens/txtt.png" width="43.2px" height="30.4px">
          <span v-if="tx.CADENARED === '₮'" id="tittransacs">{{tit_transac.mat[svl()][1].vl}}</span>
          </h2>
    </div> 

    <!-- listad/seleccion de transacciones en curso -->    
    <div class="container" v-if="tx.VENDEDOR !== undefined">
      <div v-if="txs.length > 0">

                <small>
                <span v-if="svl() === 0" style="position:relative;top:-13px;">{{ tx.FECHA_INIC | fecha_spa }}</span>
                <span v-if="svl() === 1" style="position:relative;top:-13px;">{{ tx.FECHA_INIC | fecha_en }}</span>
                <span v-if="svl() === 2" style="position:relative;top:-13px;">{{ tx.FECHA_INIC | fecha_ca }}</span>
                <span v-if="svl() === 3" style="position:relative;top:-13px;">{{ tx.FECHA_INIC | fecha_pt }}</span></small>
          <popper
                trigger="clickToOpen"
                :options= popoptionsb>
                <div class="popper">                         
                  <span v-html="help_tline.mtx[svl()][0].vl"></span>
                </div>                
                <a href="#" slot="reference" class="btn btn" style="position:relative;top:-13px;">
                  <font-awesome-icon :icon="['far', 'question-circle']" />
                </a>
          </popper> 

        <div class="row">
          <div id="cap1">
            <div class="rotar1 col-2 my-1 mx-2">
              <popper v-if="tx.CADENARED === '₮'"
                   trigger="clickToOpen"
                  :options= popoptionsb>
                  <div class="popper" style="margin-top:20px;margin-left:-15px;">                         
                    <br /><h4><b>{{tit_table_tx_encurso_td.td_momentum[svl()][0].vl}}</b> :</h4>
                    <b>{{tit_table_tx_encurso_td.td_rol[svl()][1].vl}}: <i> 
                    <a :href="this.url +this.oferta.NOMBREUSUARIO" target="_blank">
                    <font color=red>{{this.oferta.NOMBREUSUARIO}} </font></a></i></b><br>
                    <b>{{tit_table_tx_encurso.mat[svl()][1].vl}}: <font color=White><i>⛓️</i></font></b>
                     {{tit_transac.theter[svl()][0].vl}} <br>
                    <b>{{cap1.mtx[svl()][0].vl}}: </b>{{this.oferta.FORMADEPAGO}} <br>
                    <b>{{tit_transac.enunciats[svl()][0].vl}}: </b>
                    {{this.oferta.GRUPOBANCO}} -<b><font color=yellow> {{this.oferta.NOMBANCO}} </font></b> <br> 
                    <b>{{tit_transac.enunciats[svl()][1].vl}} ₮ :</b> <b><font color=yellow>
                    {{this.oferta.PRECIOOFERTA}} %</font></b> , 
                    <b>{{tit_transac.enunciats[svl()][2].vl}}:</b> <b><font color=yellow>
                    {{this.oferta.MONEDAOFERTA}} </font></b><br>
                    <b>{{tit_transac.enunciats[svl()][3].vl}}:</b> {{this.oferta.LIMITEABAJO}}  USDT - 
                    {{this.oferta.LIMITEARRIBA}} USDT<br><br>                      
                  </div>               
                  <a href="#" slot="reference" class="btn btn" >
                      <h6><small>{{caps.mtx[svl()][0].vl}}</small></h6>
                  </a>
              </popper>                              

          </div>
        </div>

          <div id="cap2">
            <div class="rotar1 col-5 my-1 mx-2">
              <popper v-if="tx.CADENARED === '₮'"
                   trigger="clickToOpen"
                  :options= popoptionsb>
                  <div class="popper" style="margin-top:25px;" >                         
                    <br /><h4><b>{{tit_table_tx_encurso_td.td_momentum[svl()][1].vl}}</b> :</h4>
                    <b>{{tit_table_tx_encurso_td.td_rol[svl()][0].vl}}:<i> 
                    <a :href="this.url +this.tx.COMPRADOR" target="_blank">
                    <font color=mediumseagreen> {{this.tx.COMPRADOR}}</font></a></i></b><br>
                    <b>{{tit_transac.enunciats[svl()][4].vl}}:<i><font color=yellow>
                    {{this.tx.IMPORTECOMPRA}}  USDT </font></i></b><br>
                    <b>{{tit_transac.enunciats[svl()][5].vl}} <i><font color=yellow> 
                    {{this.tx.IMPORTEMONEDA}} {{this.oferta.MONEDAOFERTA}} </font></i></b><br>
                    <b>{{tit_transac.enunciats[svl()][6].vl}}:<i><font color=yellow> 
                    {{this.tx.DOCS_COMPRADOR}} </font></i></b><br><br>                      
                  </div>               
                  <a href="#" slot="reference" class="btn btn">
                      <h6><small>{{caps.mtx[svl()][1].vl}}</small></h6>
                  </a>
              </popper> 

            </div>
          </div>
          <div id="cap3">
            <div class="rotar1 col-8 my-1 mx-4">
              <popper v-if="tx.CADENARED === '₮'"
                   trigger="clickToOpen"
                  :options= popoptionsb>
                  <div class="popper" style="margin-top:25px;">                         
                    <br /><h4><b>{{tit_table_tx_encurso_td.td_momentum[svl()][2].vl}}</b> :</h4>{{this.ahora()}} 
                    <br><b>{{tit_transac.enunciats[svl()][7].vl}}(2/2): <i>
                    <a :href="this.url +this.User.DIRMULTIFIRMA_FIANZALN" target="_blank">
                    <font color=DodgerBlue>{{this.User.DIRMULTIFIRMA_FIANZALN}} </font></a></i></b><br>
                    <b>{{tit_transac.enunciats[svl()][10].vl}}:<i><font color=yellow> 
                    {{this.tx.ACEP_VENDEDOR}} </font></i></b><br>                     
                    <b>{{tit_transac.enunciats[svl()][8].vl}}: <i> 
                    <a :href="this.url +this.User.ARBITRAJE" target="_blank">
                    <font color=DodgerBlue>{{this.User.ARBITRAJE}} </font></a></i></b><br>
                    <b>{{tit_transac.enunciats[svl()][9].vl}} : <i>                                                            
                    <font color=orange>{{this.tx.RAWTXSIGNEDVEND | redutxid }}... </font></i></b>
                    <a class="btn btn-outline-primary" style="color:orange; padding: 1px 5px 1px;" v-clipboard:copy="this.tx.RAWTXSIGNEDVEND">
                    <font-awesome-icon :icon="['far', 'copy']" /></a>
                    <a :href="'https://coinb.in/#verify'" class="btn btn-outline-primary" style="color:orange; padding: 1px 5px 1px;" target="_blank">☑️</a>
                    <br>
                    <br>                     
                  </div>               
                  <a href="#" slot="reference" class="btn btn">
                      <h6><small>{{caps.mtx[svl()][2].vl}}</small></h6>
                  </a>
              </popper>              
            </div>
          </div>
          <div id="cap4">
            <div class="rotar1 col-11 my-1 mx-4">
              <popper
                   trigger="clickToOpen"
                  :options= popoptionsb>
                  <div class="popper">                         
                    <br /><h4><b>{{tit_table_tx_encurso_td.td_momentum[svl()][3].vl}}</b>:</h4>
                    <br><b>{{cap4.importe[svl()][0].vl}}: <i><font color=yellow>
                    {{this.tx.IMPORTEMONEDA}} {{this.oferta.MONEDAOFERTA}} </font></i></b><br> 
                    <br><b>{{cap4.medio[svl()][0].vl}}:</b> {{this.oferta.GRUPOBANCO}} 
                    <b>- <i><font color=yellow>{{this.oferta.NOMBANCO}} </font></i></b><br> 
                    <br><b>{{tit_transac.enunciats[svl()][11].vl}}:<i><font color=yellow> 
                    {{this.tx.PAGO_COMPRADOR}} </font></i></b><br><br> 
                  </div>               
                  <a href="#" slot="reference" class="btn btn">
                      <h6><small>{{caps.mtx[svl()][3].vl}}</small></h6>
                  </a>
              </popper>                
            </div>
          </div>
          <div id="cap5">
            <div class="rotar1 col-13 my-1 mx-2">
              <popper
                   trigger="clickToOpen"
                  :options= popoptionsb>
                  <div class="popper" style="margin-left:-90px;">                         
                    <br /><h4><b>{{tit_table_tx_encurso_td.td_momentum[svl()][4].vl}}</b>:</h4>
                    <br><b>{{cap4.importe[svl()][0].vl}}: <i><font color=yellow>
                    {{this.tx.IMPORTEMONEDA}} {{this.oferta.MONEDAOFERTA}} </font></i></b><br> 
                    <br><b>{{cap4.medio[svl()][0].vl}}:</b> {{this.oferta.GRUPOBANCO}} 
                     <b>- <i><font color=yellow> {{this.oferta.NOMBANCO}}</font></i></b><br> 
                    <br><b>{{tit_transac.enunciats[svl()][12].vl}}:<i><font color=yellow> 
                    {{this.tx.COBRO_VENDEDOR}} 
                    </font></i></b><br><br> 
                  </div>
                  <a href="#" slot="reference" class="btn btn">
                      <h6><small>{{caps.mtx[svl()][4].vl}}</small></h6>
                  </a>                                 
              </popper>               
            </div>
          </div>
          <div id="cap6">
            <div class="rotar1 col-15 my-1 mx-5">
               <popper v-if="tx.CADENARED === '₮'"
                   trigger="clickToOpen"
                  :options= popoptionsl>
                  <div class="popper" style="margin-top:40px;">                         
                    <br /><h4><b>{{tit_table_tx_encurso_td.td_momentum[svl()][5].vl}}</b>:</h4>
                    <b>{{tit_transac.enunciats[svl()][13].vl}}: <i><font color=yellow> 
                    <a :href="this.url +this.tx.DESTINO" target="_blank">
                    <font color=mediumseagreen>{{this.tx.DESTINO}} </font></a></font></i></b><br>
                    <b>{{tit_transac.enunciats[svl()][14].vl}} (ID): </b><i><b><font color=yellow>
                    <a :href="this.urltx +this.tx.IDTX_ENTREGA" target="_blank">
                    <font color=orange>{{this.tx.IDTX_ENTREGA}} </font></a></font></b></i><br><br>
                  </div>               
                  <a href="#" slot="reference" class="btn btn">
                      <h6><small>{{caps.mtx[svl()][5].vl}}</small></h6>
                  </a>
              </popper>               
            </div>
          </div>
        <!-- timeline inicio -->
        <div class="cajatl">

           <popper v-if="tx.CADENARED === '₮'"
              :visible-arrow= false
              trigger="clickToOpen"
              :options= popoptionsb>
            <div class="popper_tl"><!-- contenido del popper tip aqui -->                                      
              <br /><h4><b>{{tit_table_tx_encurso_td.td_momentum[svl()][0].vl}}</b> :</h4>
              <b>{{tit_table_tx_encurso_td.td_rol[svl()][1].vl}}: <i> 
              <a :href="this.url + this.oferta.NOMBREUSUARIO" target="_blank"> 
              <font color=RED>
              {{this.oferta.NOMBREUSUARIO}} </font></a>
              </i></b><br>
              <b>{{tit_table_tx_encurso.mat[svl()][1].vl}}: <font color=White><i>⛓️</i></font></b> {{tit_transac.theter[svl()][0].vl}} <br>
              <b>{{tit_transac.enunciats[svl()][0].vl}}:<br></b>
              {{this.oferta.GRUPOBANCO}} 
               - <i><b><font color=yellow> 
              {{this.oferta.NOMBANCO}} 
              </font></b></i> <br> 
              <b>{{tit_transac.enunciats[svl()][1].vl}} ₮ :</b> <i><b><font color=yellow>
              {{this.oferta.PRECIOOFERTA}} 
              %</font></b></i> , 
              <b>{{tit_transac.enunciats[svl()][2].vl}}:</b> <i><b><font color=yellow>
              {{this.oferta.MONEDAOFERTA}} 
              </font></b></i><br> 
              <b>{{tit_transac.enunciats[svl()][3].vl}}:</b>  
              {{this.oferta.LIMITEABAJO}} 
               USDT -  
              {{this.oferta.LIMITEARRIBA}} 
               USDT<br><br> 
              <h4><b>{{tit_table_tx_encurso_td.td_momentum[svl()][1].vl}}</b> :</h4> 
              <b>{{tit_table_tx_encurso_td.td_rol[svl()][0].vl}}:<i>  
              <a :href= "this.url+this.tx.COMPRADOR" target="_blank"> 
              <font color=mediumseagreen>
              {{this.tx.COMPRADOR}} 
              </font>
              </a>
              </i></b><br>
              <b>{{tit_transac.enunciats[svl()][4].vl}}:<i><font color=yellow>  
              {{this.tx.IMPORTECOMPRA}} 
               USDT</font></i></b>,  
              <b>{{tit_transac.enunciats[svl()][5].vl}} <i><font color=yellow> 
              {{this.tx.IMPORTEMONEDA}} {{this.oferta.MONEDAOFERTA}} 
              </font></i></b><br> 
              <b>{{tit_transac.enunciats[svl()][6].vl}}:<i><font color=yellow>  
              {{this.tx.DOCS_COMPRADOR}} 
              </font></i></b><br><br> 
              <h4><b>{{tit_table_tx_encurso_td.td_momentum[svl()][2].vl}}</b> :</h4> 
              <b>{{tit_transac.enunciats[svl()][7].vl}}(2/2): <i>  
              <a :href="this.url+this.User.DIRMULTIFIRMA_FIANZALN" target="_blank>"> 
              <font color=DodgerBlue>
              {{this.User.DIRMULTIFIRMA_FIANZALN}} 
              </font>
              </a> 
              </i></b><br>
              <b>{{tit_transac.enunciats[svl()][10].vl}}:<i><font color=yellow>  
              {{this.tx.ACEP_VENDEDOR}} 
              </font></i></b><br>              
              <b>{{tit_transac.enunciats[svl()][8].vl}}: <i>  
              <a :href="this.url + this.User.ARBITRAJE" target=_blank>
              <font color=DodgerBlue> 
              {{this.User.ARBITRAJE}} 
              </font> 
              </a> 
              </i></b><br>
              <b>{{tit_transac.enunciats[svl()][9].vl}}:<br> <i>  
                    <font color=orange>{{this.tx.RAWTXSIGNEDVEND | redutxid }}... </font></i></b>
                    <a class="btn btn-outline-primary" style="color:orange; padding: 1px 5px 1px;" v-clipboard:copy="this.tx.RAWTXSIGNEDVEND">
                    <font-awesome-icon :icon="['far', 'copy']" /></a>
                    <a :href="'https://coinb.in/#verify'" class="btn btn-outline-primary" style="color:orange; padding: 1px 5px 1px;" target="_blank">☑️</a>                    
                     <br><br>   
              <h4><b>{{tit_table_tx_encurso_td.td_momentum[svl()][3].vl}}</b> :</h4> 
              <b>{{tit_transac.enunciats[svl()][11].vl}}:<i><font color=yellow> 
              {{this.tx.PAGO_COMPRADOR}} 
              </font></i></b><br><br>
              <h4><b>{{tit_table_tx_encurso_td.td_momentum[svl()][4].vl}}</b> :</h4>
              <b>{{tit_transac.enunciats[svl()][12].vl}}:<i><font color=yellow> 
              {{this.tx.COBRO_VENDEDOR}} 
              </font></i></b><br><br>
              <h4><b>{{tit_table_tx_encurso_td.td_momentum[svl()][5].vl}}</b> :</h4>
              <b>{{tit_transac.enunciats[svl()][13].vl}} </b>
              <a :href="this.url + this.tx.DESTINO" target=_blank>
              <font color=mediumseagreen>
              {{this.tx.DESTINO}} 
              </font> 
              </a><br>
              <b>{{tit_transac.enunciats[svl()][14].vl}} (ID): </b><i><font color=yellow>
              <a :href="this.urltx + this.tx.IDTX_ENTREGA" target="_blank">
              <font color=orange>
              {{this.tx.IDTX_ENTREGA}} 
              </font>
              </a></font></i> <br><br>

            </div>               
              <a href="#" slot="reference" v-if="tx.CADENARED === '₮'" class="btn btn">

                      <img
                      class="img" style="margin-left:-25px;"
                      src="https://www.contobit.com/imagens/timeline.png" />
                      <div class="row">
                        <div v-if="tx.TIMELINE === '1.Oferta'" id="car1">
                          <img align="bottom" src="https://www.contobit.com/imagens/manitatt.png" width="30px" height="21px" />
                        </div>
                        <div v-if="tx.TIMELINE === ''" id="car1">
                          <img align="bottom" src="https://www.contobit.com/imagens/carritott.png" width="30px" height="21px" />
                        </div>
                        <div v-if="tx.TIMELINE === '2.Solicitud'" id="car2">
                          <img align="bottom" src="https://www.contobit.com/imagens/carritott.png" width="30px" height="21px" />
                        </div>
                        <div v-if="tx.TIMELINE === '3.Contrato'" id="car3">
                          <img align="bottom" src="https://www.contobit.com/imagens/carritott.png" width="30px" height="21px" />
                        </div>
                        <div v-if="tx.TIMELINE === '4.Pago'" id="car4">
                          <img align="bottom" src="https://www.contobit.com/imagens/carritott.png" width="30px" height="21px" />
                        </div>
                        <div v-if="tx.TIMELINE === '5.Cobro'" id="car5">
                          <img align="bottom" src="https://www.contobit.com/imagens/carritott.png" width="30px" height="21px" />
                        </div>
                        <div v-if="tx.TIMELINE === '6.Entrega'" id="car6">
                          <img align="bottom" src="https://www.contobit.com/imagens/manitatt.png" width="30px" height="21px" />
                        </div>
                        <div v-if="tx.TIMELINE === 'Arbitraje'" id="car4">
                          <h5><img src="https://www.contobit.com/imagens/balance_tt.png" width="25px" height="17.4px"></h5>
                        </div>
                        <div v-if="tx.TIMELINE === 'Impago'" id="car5">
                          <h5><img src="https://www.contobit.com/imagens/balance_tt.png" width="25px" height="17.4px"></h5>
                        </div>
                        <div v-if="tx.TIMELINE === 'Retorno'" id="car6">
                          <h5><img src="https://www.contobit.com/imagens/balance_tt.png" width="25px" height="17.4px"></h5>
                        </div>
                      </div>
                      <!-- timeline fin-->
              </a>
          </popper>

        </div>
        </div>
      </div>          

      <!--   🤔 INICIO TITULO VALORES DEL INTERCAMBIO   -->
      <span id="interc2">                   
        {{ this.tx.IMPORTEMONEDA }} {{ this.oferta.MONEDAOFERTA }}
      </span>
      <popper v-if="tx.CADENARED === '₮'"
          :options= popoptions>
          <div class="popper">                         
            {{verlado.mtx[svl()][0].vl}}
          </div>                
          <span slot="reference" id="intercc" class="blink-bg">
            <font-awesome-icon icon="sync" />
          </span>
      </popper>             
      <span id="interc3">        
        <span v-if="tx.CADENARED === '₮'">
         <small><i> ⛓️</i></small>
        </span>
          {{this.tx.IMPORTECOMPRA }} USDT
        </span>      

      <!--   🤔 FINAL TITULO VALORES DEL INTERCAMBIO SI SELEC DE COMPRADOR O VENDEDOR   -->                                 

      <b-alert :show="dismissCountDown" dismissible :variant="mensaje.color" @dismissed="dismissCountDown = 0"
        @dismiss-count-down="countDownChanged">{{ mensaje.texto }}</b-alert>

      <!-- ********************************** INICIO BLOQUE ARBITRO **********************************************-->
      <div v-if="nomuser === User.ARBITRAJE">

        <div id="demo1" v-if="tx.TIMELINE === 'Arbitraje' | tx.TIMELINE === '5.Cobro' | tx.TIMELINE === '6.Entrega'">
          <transition name="fade">
            <div v-if="show1">
              <article>
                <div class="container" :class="{'sign-up-active' : signUp}">
                  <!-- /////////////////////////////resolucion arbitro //////////BLOQUE ARBITRAJE//////////////////timeline Arbitraje///// -->
                  <div v-if="tx.TIMELINE === 'Arbitraje'">
                    <form @submit.prevent="updateCobro()" class="sign-in" action="#">
                      <h3>
                        <font color="grey">
                          <b> <img src="https://www.contobit.com/imagens/balance_tt.png" width="25px" height="17.4px"> {{Aportes.mtx[svl()][1].vl}}</b>
                        </font>
                      </h3>
                      <br />
                      <b-form-checkbox v-model="tx.COBRO_VENDEDOR" value="⚖️✅" unchecked-value="⚖️❌" required>{{Res_arbitro.mtx[svl()][0].vl}}</b-form-checkbox>
                      <div>
                        {{Res_arbitro.mtx[svl()][1].vl}}:
                        <strong>
                          <i>{{ this.tx.COBRO_VENDEDOR }}</i>
                        </strong>
                      </div><br />
                      <!--   this.nota.nombre = "tx-cobro"; -->
                      <textarea class="form-control" rows="6"
                        :placeholder="Res_arbitro.mtx[svl()][2].vl" v-model="descri"
                        required></textarea><br />
                      <font color="Gray" size="2">
                        {{Res_arbitro.mtx[svl()][3].vl}} {{ this.timerCountfin }}
                        <CountDown :seconds="this.timerCountfin" />
                      </font>
                      <b-button variant="outline-primary btn-success btn-block" id="signUp" type="submit">
                        <font color="black"></font>
                        <img /> <img src="https://www.contobit.com/imagens/balance_tt.png" width="25px" height="17.4px"> {{Res_arbitro.mtx[svl()][4].vl}}
                      </b-button>
                    </form>
                  </div>
                  <div v-if="(tx.COBRO_VENDEDOR === '⚖️✅' ) & (tx.TIMELINE === '5.Cobro' | tx.TIMELINE === '6.Entrega')">
                    <form @submit.prevent="pagar_byarbitraje()" class="sign-in" action="#">
                      <h3>
                        <font color="grey">
                          <b> <img src="https://www.contobit.com/imagens/balance_tt.png" width="25px" height="17.4px"> {{Aportes.mtx[svl()][1].vl}}</b>
                        </font>
                      </h3>
                      <br />
                      <div>
                        {{Res_arbitro.mtx[svl()][1].vl}}:
                        <strong>
                          <i>{{ this.tx.COBRO_VENDEDOR }}</i>
                        </strong>
                      </div>
                      🔐 BITCOIN-OMNI TT ON CHAIN TX ID ⚖️✅... 
                      <textarea class="form-control" rows="1"
                        v-model="tx.IDTX_ENTREGA"
                        readonly></textarea><br />                       
                      <br />

                      *** Antes de pulsar esperar y verificar si el Vendedor vuelve a Tx y se ejecuta el pago o no ***  

                      <b-button variant="outline-primary btn-success btn-block" id="signUp" type="submit">
                        <font color="black"></font>
                        <img /> <img src="https://www.contobit.com/imagens/balance_tt.png" width="25px" height="17.4px"> {{Res_arbitro.mtx[svl()][4].vl}}
                      </b-button>
                    </form>
                  </div>                  
                  
                </div>
              </article>
            </div>
          </transition>
        </div>

      </div>
      <!-- ********************************** FIN BLOQUE ARBITRO ****************************************************-->                                    
      <!-- ********************************** INICIO BLOQUE COMPRADOR **********************************************-->
      <div v-if="nomuser === tx.COMPRADOR">

        <div id="demo1" v-if="tx.TIMELINE === 'Arbitraje'">
          <transition name="fade">
            <div v-if="show1">
              <article>
                <div class="container" :class="{'sign-up-active' : signUp}">


                  <!--///////////////////////////// listo para retorno arbitro a comprador//////////////////////////////// -->
                  <!--///////////////////////////// retorno de bitcoins //////////////////////////////// -->
                  <!--///////////////////////////// retorno de bitcoins ambos lados ///////BLOQUE COMPRADOR//////////////////////////////// -->
                  <div v-if="tx.TIMELINE === 'Impago' || tx.TIMELINE === 'Retorno'">

                    <form class="sign-in" action="#">
                      <h3>
                        <font color="grey">
                          <b>{{Retorno.mtx[svl()][0].vl}}</b>
                        </font>
                      </h3>
                      <div>
                        {{Retorno.mtx[svl()][1].vl}}
                      </div>
                      {{Retorno.mtx[svl()][2].vl}}
                      <br />
                    </form>
                  </div>

                  <!-- /////////////////////////////aporte de pruebas lado comprador //////////BLOQUE comprador//////////////////timeline Arbitraje///// -->
                  <div v-if="tx.TIMELINE === 'Arbitraje'">
                    <form class="sign-in" action="#">
                      <h3>
                        <font color="grey">
                          <b> <img src="https://www.contobit.com/imagens/balance_tt.png" width="25px" height="17.4px"> {{Aportes.mtx[svl()][1].vl}}</b>
                        </font>
                      </h3>
                      <h5>{{Aportes.mtx[svl()][2].vl}} <font color="green">{{Aportes.mtx[svl()][3].vl}}</font>:</h5>
                      <span v-html="Aportes.mtx[svl()][5].vl"></span>                      
                      <br />
                      <font color="Gray" size="2">
                        {{Aportes.mtx[svl()][7].vl}} {{ this.timerCountfin }}
                        <CountDown :seconds="this.timerCountfin" />
                      </font>
                      <br />
                      <div>
                        {{Aportes.mtx[svl()][8].vl}}
                        <strong>
                          <font color="Orange" size="3"><i>{{ this.tx.COBRO_VENDEDOR }}</i></font>
                        </strong>
                      </div>
                    </form>
                  </div>

                  <!--///////////////////////////// listo fin entrega y tx//////////////////////////////// -->
                </div>              
              </article>
            </div>
          </transition>
        </div>

        <div v-if="tx.TIMELINE !== 'Arbitraje'">
        <!--  <router-link to="/Tx/Txc"><span style="margin-left:-200px;">Editar via link...</span></router-link>
          <a href="#" class="btn btn" @click="rchild()" >Editar via funcion</a>-->
           {{ rchild() }}          
          <router-view></router-view>
        </div>

      </div>
      <!-- ********************************** FIN BLOQUE COMPRADOR ****************************************************-->

      <!-- ********************************** INICIO BLOQUE VENDEDOR *************************************************-->
      <div v-if="nomuser === tx.VENDEDOR">

        <div id="demo1" v-if="tx.TIMELINE === 'Arbitraje'">
          <transition name="fade">
            <div v-if="show1">
              <article>
                <div class="container" :class="{'sign-up-active' : signUp}">

                  <!-- /////////////////////////////aporte de pruebas lado vendedor //////////BLOQUE vendedor//////////////////timeline Arbitraje///// -->
                  <div v-if="tx.TIMELINE === 'Arbitraje'">
                    <form class="sign-in" action="#">
                      <h3>
                        <font color="grey">
                          <b> <img src="https://www.contobit.com/imagens/balance_tt.png" width="25px" height="17.4px"> {{Aportes.mtx[svl()][1].vl}}</b>
                        </font>
                      </h3>
                      <h5>{{Aportes.mtx[svl()][2].vl}} <font color="red">{{Aportes.mtx[svl()][4].vl}}</font>:</h5>
                      <span v-html="Aportes.mtx[svl()][5].vl"></span>                       
                      <br />
                      <font color="Gray" size="2">
                        {{Aportes.mtx[svl()][7].vl}} {{ this.timerCountfin }}
                        <CountDown :seconds="this.timerCountfin" />
                      </font>
                      <br />
                      <div>
                        {{Aportes.mtx[svl()][8].vl}}
                        <strong>
                          <font color="Orange" size="3"><i>{{ this.tx.COBRO_VENDEDOR }}</i></font>
                        </strong>
                      </div>
                    </form>
                  </div>

                  <!--///////////////////////////// listo fin entrega y tx//////////////////////////////// -->
                </div>              
              </article>
            </div>
          </transition>
        </div>                  

        <div v-if="tx.TIMELINE !== 'Arbitraje'">
        <!-- ********************************** ENVIAMOS A RUTA TXV ****************************************************-->
         <!-- <router-link to="/Tx/Txv"><span style="margin-left:-200px;">Editar...</span></router-link>
          <a href="#" class="btn btn" @click="rchild()" >Editar via funcion</a>--> 
           {{ rchild() }} 
          <router-view></router-view>
        </div>

      </div>
      <!-- ********************************** FIN BLOQUE VENDEDOR *************************************************** -->
     
      <beautiful-chat :participants="participants" :titleImageUrl="titleImageUrl" :onMessageWasSent="onMessageWasSent"
        :messageList="messageList" :newMessagesCount="newMessagesCount" :isOpen="isChatOpen" :close="closeChat"
        :icons="icons" :open="openChat" :showEmoji="true" :showFile="true" :showEdition="true" :showDeletion="true"
        :showTypingIndicator="showTypingIndicator" :showLauncher="true" :showCloseButton="true" :colors="colors"
        :alwaysScrollToBottom="alwaysScrollToBottom" :messageStyling="messageStyling" @onType="handleOnType"
        @edit="editMessage" />

    </div>
    
   </div>
  </div>  
</div>  
</template>

<script>
  import axios from "axios";
  import router from "../router";
  import io from "socket.io-client";
  import {
    mapState,
    mapMutations,
    mapActions,
    mapGetters
  } from "vuex";
  // @ is an alias to /src
  import Popper from 'vue-popperjs';
  import 'vue-popperjs/dist/vue-popper.css';
  import QrcodeVue from "qrcode.vue";
  import CountDown from "@/components/CountDown.vue";     
  import CloseIcon from "vue-beautiful-chat/src/assets/close-icon.png";
  //import OpenIcon from "vue-beautiful-chat/src/assets/logo-no-bg.svg";
  import FileIcon from "vue-beautiful-chat/src/assets/file.svg";
  import CloseIconSvg from "vue-beautiful-chat/src/assets/close.svg";
  //import CloseIcon from "../assets/close.svg";
  //import OpenIcon from "../assets/logo-no-bg.svg";
  //import FileIcon from "../assets/file.svg";
  //import CloseIconSvg from "../assets/close.svg";
  //import image from "../assets/logo.png";
  import * as moment from "moment/moment";
  //import moment from "moment";
  import "moment/locale/es";
  moment.locale("es");

  export default {
    name: "Txtt",
    components: {
      //ChatRoom,
     'popper': Popper,      
      QrcodeVue,
      CountDown,       
    },
    data() {
      return {
        User: [],       
        verchild : false,
        popoptions: {
                      placement: 'top',
                      modifiers: { offset: { offset: '0,4px' } }
                    },
        popoptionsb: {
                      placement: 'bottom',
                      modifiers: { offset: { offset: '0,3px' } }
                    },
        popoptionsl: {
                      placement: 'left',
                      modifiers: { offset: { offset: '0,3px' } }
                    },                                        
        signinn: true,
        signupp: true,           
        lag: [],
        lagtt: [],
        url: "https://blockexplorer.one/btc/testnet/address/",
        urltx: "https://blockexplorer.one/btc/testnet/tx/",
        vertxs: true,
        now: moment().locale("en"),
        today: moment().locale("en").fromNow(),
        nowes: moment().locale("es"),
        todayes: moment().locale("es").fromNow(),        
        nowca: moment().locale("ca"),
        todayca: moment().locale("ca").fromNow(),
        nowpt: moment().locale("pt"),
        todaypt: moment().locale("pt").fromNow(),
        timerCount: 0,        
        timerCountfin: 0,           
        nota: {
          nombre: "",
          descripcion: ""
        },
        aCopiQttymasCom: null,
        comisTxacomprador: null,
        idliberacion: null,        
        oferta: [],
        txs: [],
        tx: [],
        mensaje: {
          color: "success",
          texto: ""
        },
        dismissSecs: 5,
        dismissCountDown: 0,
        username: "Anónimo", //para el chat
        //socket: io("http://localhost:3000"), // chat en modo desarrollo*****************************************
        socket: io(window.location.origin), // chat server alemania***************************************
        messages: [], // chat
        alerts: [],
        users: [], //chat
        el: "#container",
        el: "#demo",
        el: "#demo1",
        el: "#demo2",
        signUp: false,
        show: false,
        show1: true,
        descri: null,         
        icons: {
          open: {
            //  img: OpenIcon,
            img: "https://www.contobit.com/imagens/chat.png",
            name: "default",
          },
          close: {
            img: CloseIcon,
            name: "default",
          },
          file: {
            img: FileIcon,
            name: "default",
          },
          closeSvg: {
            img: CloseIconSvg,
            name: "default",
          },
        },
        participants: [], 
        titleImageUrl: "https://www.contobit.com/imagens/bitcoin.png",
        messageList: [],
        newMessagesCount: 0,
        isChatOpen: false, // to determine whether the chat window should be open or closed 
        showTypingIndicator: "", // when set to a value matching the participant.id it shows the typing indicator for the specific user
        colors: {
          header: {
            bg: "#4e8cff",
            text: "#ffffff",
          },
          launcher: {
            bg: "#4e8cff",
          },
          messageList: {
            bg: "#ffffff",
          },
          sentMessage: {
            bg: "#4e8cff",
            text: "#ffffff",
          },
          receivedMessage: {
            bg: "#eaeaea",
            text: "#222222",
          },
          userInput: {
            bg: "#f4f7f9",
            text: "#565867",
          },
        }, // specifies the color scheme for the component
        alwaysScrollToBottom: true, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
        messageStyling: true, // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)

      // siguen variables para idiomas parte html
      Cerrar: {
       mtx: [
          [{ vl: 'Cerrar'}],
          [{ vl: 'Close' }],
          [{ vl: 'Tancar' }],
          [{ vl: 'Fechar' }],                                               
            ],                                 
      },           
      tit_transacs: {
       mat: [
          [{ vl: 'Transacciones compra-venta' }],
          [{ vl: 'Purchase-sale transactions' }],
          [{ vl: 'Transaccions compravenda' }],
          [{ vl: 'Transações compra e venda' }],                                               
            ],
       tlpc: [
          [{ vl: 'Mostrar/ocultar transacciones en curso' }],
          [{ vl: 'Show / hide transactions in progress' }],
          [{ vl: 'Mostra / oculta transaccions en curs' }],
          [{ vl: 'Mostrar/ocultar transações em andamento' }],                                               
            ],            
      },      
      tit_table_tx_encurso: {
       mat: [
          [{ vl: 'Incio' }, { vl: 'Via' }, { vl: 'Liberados' }, { vl: 'Theters' }, { vl: 'Monedas' }, { vl: "Pago" }, { vl: 'Cobro' }, { vl: 'Rol' }, { vl: 'Momentum' }, { vl: 'Acción' }],
          [{ vl: 'Initiated' }, { vl: 'Via' }, { vl: 'Delivered' }, { vl: 'Theters' }, { vl: 'Exchange' }, { vl: "Payment" }, { vl: 'Collection' }, { vl: 'Role' }, { vl: 'Momentum' }, { vl: 'Action' }],
          [{ vl: 'Inci' }, { vl: 'Via' }, { vl: 'Alliberats' }, { vl: 'Theters' }, { vl: 'Monedes' }, { vl: "Pagament" }, { vl: 'Cobrament' }, { vl: 'Rol' }, { vl: 'Momentum' }, { vl: 'Acció' }],
          [{ vl: 'Começa' }, { vl: 'Via' }, { vl: 'Liberado' }, { vl: 'Theters' }, { vl: 'Moedas' }, { vl: "Pagamento" }, { vl: 'Cobro' }, { vl: 'Função' }, { vl: 'Momentum' }, { vl: 'Açao' }],                                               
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
          [{ vl: 'Arbitraje compra-venta' },{ vl: 'Transacción compra-venta ⛓️' }],
          [{ vl: 'Purchase-sale Arbitration' },{ vl: 'Purchase-sale transaction ⛓️' }],
          [{ vl: 'Arbitratge compravenda' },{ vl: 'Transacció compravenda ⛓️' }],
          [{ vl: 'Arbitragem compra e venda' },{ vl: 'Transação compra e venda ⛓️' }],                                               
            ],
       theter: [
          [{ vl: ' Cadena de bloques Theter ' }],
          [{ vl: ' Theter blockchain ' }],
          [{ vl: ' Cadena de blocs Theter ' }],
          [{ vl: ' Corrente de bloco Theter ' }],                                               
            ],
       lightning: [
          [{ vl: ' Red Lightning ' } ],
          [{ vl: ' Lightning Network ' }],
          [{ vl: ' Xarxa Lightning ' }],
          [{ vl: ' Rede Lightning ' }],                                               
            ],
       enunciats: [
          [{ vl: 'Medio de pago' },{ vl: 'Precio' },{ vl: 'Moneda de pago' },{ vl: 'Mínimo - Máximo' },{ vl: 'Compra' },{ vl: ' por importe de ' },{ vl: 'Prueba solvencia de compra aceptada' },{ vl: '🔐 Multigarantía Multifirma' },{ vl: 'Arbitraje' },{ vl: 'Respaldo Entrega Firmada(2/2), Tx' },{ vl: 'Cadena de bloques Theter, 6 confirmaciones, garantia' },{ vl: 'Notificación del comprador' },{ vl: 'Ratificación del vendedor' },{ vl: 'Destino Comprador' },{ vl: 'Entrega de Theters, Identificador Tx' }, ],
          [{ vl: 'Payment method' },{ vl: 'Price' },{ vl: 'Payment currency' },{ vl: 'Min MAX' },{ vl: 'Purchase' },{ vl: 'for the amount of' },{ vl: 'Proof of purchase solvency accepted' },{ vl: '🔐 Multi-signature Multi-guarantee' },{ vl: 'Arbitration' },{ vl: 'Support Delivery Signed(2/2), Tx' },{ vl: 'Theter Blockchain, 6 confirmations, guarantee' },{ vl: 'Buyer`s notification' },{ vl: 'Seller`s ratification' },{ vl: 'Buyer Destination' },{ vl: 'Theters Delivery, Tx Identifier' },],
          [{ vl: 'Mitjà de pagament' },{ vl: 'Preu' },{ vl: 'Moneda de pagament' },{ vl: 'Mínim - Màxim' },{ vl: 'Compra' },{ vl: 'per import de' },{ vl: 'Prova solvència de compra acceptada' },{ vl: '🔐 Multigarantia Multisignatura' },{ vl: 'Arbitratge' },{ vl: 'Respatller Lliurament Signat(2/2), Tx' },{ vl: 'Cadena de blocs  bitcoin, 6 confirmacions, garantia' },{ vl: 'Notificació del comprador' },{ vl: 'Ratificació del venedor' },{ vl: 'Destí Comprador' },{ vl: 'Lliurament de Theters, Identificador Tx' },],
          [{ vl: 'Meio de pagamento' },{ vl: 'Preço' },{ vl: 'Moeda de pagamento' },{ vl: 'Mínimo - Máximo' },{ vl: 'Compra' },{ vl: 'pela quantidade de' },{ vl: 'Comprovante de solvência de compra aceita' },{ vl: '🔐 Multi-assinatura Multi-garantia' },{ vl: 'Arbitragem' },{ vl: 'Entrega de suporte assinada(2/2), Tx' },{ vl: 'Theter blockchain, 6 confirmações, garantia' },{ vl: 'Notificação do comprador' },{ vl: 'Ratificação do vendedor' },{ vl: 'Destino do comprador' },{ vl: 'Entrega de Theters, Identificador Tx' },],                                         
            ],                    
          
      },           
      help_tline: {
       mtx: [
          [{ vl: '<br><b>Linea de tiempo de la transacción:</b><br> Acceda facilmente con un click del ratón a cualquier etiqueta de la linea de tiempo de la transacción(Tx) en edición. Visualizando en ellas detalles precisos y enlaces de cada Momentum. <br> <br>' }],
          [{ vl: '<br><b>Transaction timeline: </b> <br> Access easily with a mouse click any label of the transaction timeline (Tx) being edited. Visualizing in them precise details and links of each Momentum. <br> <br>' }],
          [{ vl: '<br><b>Línia de temps de la transacció:</b><br> Entreu fàcilment amb un clic de ratolí a qualsevol etiqueta de la línia de temps de la transacció (Tx) en edició. Visualitzant en elles detalls precisos i enllaços de cada Momentum. <br> <br>' }],
          [{ vl: '<br><b>Cronograma da transação:</b><br> Acesse facilmente com um clique do mouse qualquer rótulo da linha do tempo da transação (Tx) que está sendo editada. Visualizando neles detalhes precisos e links de cada Momentum. <br> <br>' }],                                        
            ],           
      },
      cap1: {
       mtx: [
          [{ vl: 'Detalles' }],
          [{ vl: 'Details' }],
          [{ vl: 'Detalls' }],
          [{ vl: 'Detalhes' }],                                 
            ],           
      },
      cap4: {
       importe: [
          [{ vl: 'Importe' }],
          [{ vl: 'Amount' }],
          [{ vl: 'Import' }],
          [{ vl: 'Montante' }],                                 
            ],
       medio: [
          [{ vl: 'Medio' }],
          [{ vl: 'Medium' }],
          [{ vl: 'Mitjà' }],
          [{ vl: 'Médio' }],                                 
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
      verlado: {
       mtx: [
          [{ vl: 'Transacción en proceso y editando' }],
          [{ vl: 'Transaction in process and editing' }],
          [{ vl: 'Transacció en procés i editant' }],
          [{ vl: 'Transação em processo e edição ' }],                                 
            ],                    
      },
      Aportes: {
       mtx: [
          [{ vl: '¡ Transacción (Tx) en ' },{ vl: 'Arbitraje por incidencia !' },{ vl: 'Requerimiento de pruebas al ' },{ vl: 'Comprador' },{ vl: 'Vendedor' },{ vl: '(Adjuntar en el 💬 Chat de este Arbitraje)<br /><br /><font color=tomato>1º.-</font> Extracto detallado de movimientos, con fecha, hora y saldos, emitido por el medio de pago. <font color=red>Incluyendo mínimo, un movimiento previo al inicio del intercambio y un movimiento posterior al inicio de la incidencia.</font><br /><br /><font color=tomato>2º.-</font> Justificante nítido del pago del comprador (imagen o documento pdf)<br />' },{ vl: 'según Términos 2º y 3º del CONTRATO aceptados' },{ vl: 'Tiempo para aporte de pruebas finaliza en ⏳ ' },{ vl: 'Resolución cobro por Arbitraje :' }],
          [{ vl: 'Transaction (Tx) in ' },{ vl: 'Arbitration by incidence !' },{ vl: 'Requirement of evidence from ' },{ vl: 'Buyer' },{ vl: 'Seller' },{ vl: '(Attach in the 💬 Chat of this Arbitration)<br /><br /><font color=tomato>1st.-</font> Session or clear digital video WITHOUT CUTS, of the payment process<br /><br /><font color=tomato>2nd.-</font> Clear proof (image or pdf document) of payment by the means stipulated in the offer<br />' },{ vl: 'according to Terms 2 and 3 of the CONTRACT accepted ' },{ vl: 'Time for contribution of evidence ends in ⏳ ' },{ vl: 'Arbitration charge resolution : ' }],
          [{ vl: 'Transacció (Tx) en ' },{ vl: 'Arbitratge per incidència !' },{ vl: 'Requeriment de proves al ' },{ vl: 'Comprador' },{ vl: 'Venedor' },{ vl: '(Adjuntar al 💬 Xat d`aquest Arbitratge)<br /><br /><font color=tomato>1er.-</font> Sessió o vídeo digital nítid SENSE TALLS, del procés de pagament<br /><br /><font color=tomato>2on.-</font> Justificant nítid (imatge o document pdf) del pagament pel medi estipulat a l`oferta<br />' },{ vl: 'segons Termes 2n i 3r del CONTRACTE acceptats ' },{ vl: 'Temps per aportar proves finalitza en ⏳ ' },{ vl: 'Resolució cobrament per Arbitratge : ' }],
          [{ vl: 'Transação (Tx) em ' },{ vl: 'Arbitragem por incidência !' },{ vl: 'Requisito de teste para o ' },{ vl: 'Comprador' },{ vl: 'Vendedor' },{ vl: '(Anexar no 💬 Chat desta Arbitragem)<br /><br /><font color=tomato>1º.-</font> Sessão ou vídeo digital claro SEM CORTES, do processo de pagamento<br /><br /><font color=tomato>2º.-</font> Prova inequívoca (imagem ou documento pdf) do pagamento pelos meios estipulados na oferta<br />' },{ vl: 'de acordo com os Termos 2 e 3 do CONTRATO aceitos ' },{ vl: 'O tempo para contribuição de evidências termina em ⏳' },{ vl: 'Resolução de acusação de arbitragem: ' }],                               
            ],                    
      },
      Res_arbitro: {
       mtx: [
          [{ vl: 'Cobro ✅ recibido o ❌ Impago' },{ vl: 'Estado' },{ vl: 'Texto de la resolución del Árbitro respecto al cobro' },{ vl: 'Tiempo para aporte de pruebas finaliza en ⏳ ' },{ vl: 'Resolver Arbitraje' }],
          [{ vl: '✅ Collection received or ❌ non-payment' },{ vl: 'State' },{ vl: 'Text of the Arbitrator`s resolution regarding collection' },{ vl: 'Time for contribution of evidence ends in ⏳ ' },{ vl: 'Resolve Arbitration' }],
          [{ vl: 'Cobrament ✅ rebut o ❌ Impagament' },{ vl: 'Estat' },{ vl: 'Texte de la resolució de l`àrbitre respecte al cobrament' },{ vl: 'Temps per aport de proves finalitza en ⏳ ' },{ vl: 'Resoldre Arbitratge' }],
          [{ vl: '✅ Cobrança recebida ou ❌ falta de pagamento' },{ vl: 'Estado' },{ vl: 'Texto da resolução do Árbitro em relação à cobrança' },{ vl: 'O tempo para contribuição de evidências termina em ⏳ ' },{ vl: 'Resolver Arbitragem' }],                                 
            ],                    
      },            
    // empiezan necesarias traducciones de las functions

      f_updateCobro: {
         txts: [
          [{ vl: 'Ratificación cobro resuelta por el Arbitraje'},{ vl: 'Incidencia resuelta manualmente por el arbitraje en favor del comprador. Se asigna el cobro como recibido por el vendedor y la Transacción continua su curso en la opción Tx del menú. Resolución: '},{ vl: 'Incidencia resuelta manualmente por el arbitraje en favor del vendedor. Se determina el cobro como impago del comprador, se elimina toda la Tx y Respaldos, no procede emitir la entrega, Garantía del Vendedor queda libre y disponible. Resolución: '}],                                            
          [{ vl: 'Collection ratification resolved by the Arbitration'},{ vl: 'Incident manually resolved by arbitration in favor of the buyer. The payment is assigned as received by the seller and the Transaction continues its course in the Tx option of the menu. Resolution: '},{ vl: 'Incidence manually resolved by arbitration in favor of the seller. The collection is determined as unpaid by the buyer, all the Tx and Backups are eliminated, it is not broadcast the delivery, the Seller`s Guarantee is free and available. Resolution: '}],                                               
          [{ vl: 'Ratificació cobrament resolta per l`Arbitratge'},{ vl: 'Incidència resolta manualment per l`arbitratge en favor del comprador. S`assigna el cobrament com rebut pel venedor i la Transacció continua el seu curs en l`opció Tx del menú. Resolució: '},{ vl: 'Incidència resolta manualment per l`arbitratge a favor del venedor. Es determina el cobrament com a impagament del comprador, s`elimina tota la Tx i Respatllers, no és procedent emetre el lliurament, Garantia del Venedor queda lliure i disponible. Resolució: '}],                                              
          [{ vl: 'Ratificação da cobrança resolvida pela Arbitragem'},{ vl: 'Incidência resolvida manualmente por arbitragem em favor do comprador. O pagamento é atribuído conforme recebido pelo vendedor e a Transação continua seu curso na opção Tx do menu. Resolução: '},{ vl: 'Incidência resolvida manualmente por arbitragem em favor do vendedor. A cobrança é determinada como não paga pelo comprador, todos os Tx e Backups são eliminados, não é necessário emitir a entrega, a Garantia do Vendedor é gratuita e disponível. Resolução: '}],                                              
            ],                                                             
      },
      f_EliminarTx: {
         txts: [
          [{ vl: 'Tx, archivos y 💬 Chat de la Tx eliminados con éxito'},{ vl: 'Registro, archivos y 💬 Chat de la Tx eliminados con éxito en esta plataforma.'},{ vl: 'Alerta al vendedor enviada con éxito'},{ vl: 'Tx, archivos y 💬 Chat de la Tx no eliminados.  Necesario 6 confirmaciones en cadena de bloques.'}],                                            
          [{ vl: 'Tx, files and Tx 💬 Chat deleted successfully.'},{ vl: 'Registry, files and 💬 Tx Chat successfully deleted on this platform.'},{ vl: 'Seller alert sent successfully'},{ vl: 'Tx, files and 💬 Chat de la Tx not deleted. Requires 6 confirmations in blockchain.'}],                                            
          [{ vl: 'Tx, arxius i 💬 Xat de la Tx eliminats amb èxit'},{ vl: 'Registre, arxius i 💬 Xat de la Tx eliminats amb èxit en aquesta plataforma.'},{ vl: 'Alerta al venedor tramesa amb éxit'},{ vl: 'Tx, arxius i 💬 Xat de la Tx no eliminats. Cal 6 confirmacions a la cadena de blocs.'}],                                            
          [{ vl: 'Tx, arquivos e 💬 Chat de la Tx excluídos com sucesso'},{ vl: 'Registro, arquivos e 💬 Tx Chat excluídos com sucesso nesta plataforma.'},{ vl: 'Alerta de vendedor enviado com sucesso'},{ vl: 'Tx, arquivos e 💬 Chat de la Tx não excluídos. Requer 6 confirmações de blockchain.'}],                                            
            ],                                                             
      },
     f_checkPp_lib_Ln: {
         txts: [
          [{ vl: ' Entrega por el Arbitraje.'},{ vl: 'Verificada sin éxito ⚡ Prueba de Pago(liberación) por importe de  '},{ vl: ' USDT, por favor revise...'},{ vl: 'Por favor previamente introduzca o pegue en la casilla, la ⚡ Prueba de Pago(preimage).'}],
          [{ vl: 'Delivery by the Arbitration.'},{ vl: 'Verified unsuccessfully ⚡ Proof of Payment (release) for the amount of   '},{ vl: ' USDT, please review...'},{ vl: 'Please previously enter or paste in the box, the ⚡ Proof of Payment (preimage).'}],
          [{ vl: 'Entrega per l`Arbitratge.'},{ vl: 'Verificada sin éxito ⚡ Prueba de Pago(liberación) por importe de  '},{ vl: ' USDT, por favor revise...'},{ vl: 'Siusplau prèviament introdueixi o engantxi a la casella, la ⚡ Prova de Pagament(preimage).'}],
          [{ vl: 'Entrega pelo Arbitraje.'},{ vl: 'Verificada sin éxito ⚡ Prueba de Pago(liberación) por importe de  '},{ vl: ' USDT, siusplau revisi-ho...'},{ vl: 'Por favor introduza previamente ou pegue na casilla, la ⚡ Prueba de Pago(preimage).'}],                                         
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
     f_onMessageWasSent: {
         txts: [
          [{ vl: ' Archivo adjunto '},{ vl: 'Espere, cargando archivo en el 💬 Chat Tx, '},{ vl: ' kB totales.'}],
          [{ vl: ' Attached file '},{ vl: 'Wait, loading file, in the 💬 Chat Tx, '},{ vl: ' Total kB.'}],
          [{ vl: ' Arxiu adjunt '},{ vl: 'Esperi, arregant arxiu al 💬 Chat Tx, '},{ vl: ' kB totals.'}],
          [{ vl: ' Arquivo anexo '},{ vl: 'Aguarde, enviando arquivo para 💬 Chat Tx, '},{ vl: ' kB no total.'}],,                                          
            ],                       
      },
    f_joinServer: {
         txts: [
          [{ vl: 'Soporte'},{ vl: 'Soporte y V.A.R.'},{ vl: 'Bienvenidos al 💬 Chat Tx, pueden usarlo para cruzar información relativa a la Transacción en curso. Si prefiren extremar el resguardo a su privacidad, pueden comunicarse por cualquier otro medio privado y externo de mutuo acuerdo (email cifrado, whatsapp, telegram ...). Sólo en caso inusual de incidencia o impago serán imprescindibles las pruebas al árbitro por este medio '},{ vl: 'Arbitraje de esta Tx a disposición en chat'},{ vl: ' 📎➡️➡️  ABRIR EN ESTE ENLACE...🔗 ❗❗ '},{ vl: 'Tiene nuevos mensajes en el 💬 Chat Tx'}],
          [{ vl: 'Support'},{ vl: 'Support & V.A.R.'},{ vl: 'Welcome to Chat Tx, you can use it to cross information related to the Transaction in progress. If you prefer to maximize the protection of your privacy, you can communicate by any other private and external means by mutual agreement (encrypted email, whatsapp, telegram ...). Only in the case of an unusual incident or non-payment, will the tests be essential to the referee by this means '},{ vl: 'Arbitration available on chat for this Tx'},{ vl: ' 📎➡️➡️ OPEN IN THIS LINK...🔗 ❗❗ '},{ vl: 'You have new messages in the 💬 Chat Tx'}],
          [{ vl: 'Suport'},{ vl: 'Suport i V.A.R.'},{ vl: `Benvinguts al 💬 Xat Tx, poden utilitzar-lo per creuar informació relativa a la Transacció en curs. Si prefereixen extremar el resguard a la seva privacitat, poden comunicar-se per qualsevol altre mitjà privat i extern de mutu acord (email xifrat, WhatsApp, Telegram ...). Només en cas inusual d'incidència o impagament seran imprescindibles les proves a l'àrbitre per aquest mitjà `},{ vl: `Arbitratge d'aquesta Tx a disposició al xat`},{ vl: ' 📎➡️➡️ OBRIR EN AQUEST ENLLAÇ...🔗 ❗❗ '},{ vl: 'Té missatges nous al 💬 Xat Tx'}],
          [{ vl: 'Apoio'},{ vl: 'Apoio e V.A.R.'},{ vl: 'Bem-vindo ao 💬 Chat Tx, você pode usá-lo para cruzar informações relacionadas à Transação em andamento. Se preferir proteger sua privacidade, você pode se comunicar por qualquer outro meio privado e externo de comum acordo (e-mail criptografado, Whatsapp, telegram ...). Somente no caso de um incidente incomum ou falta de pagamento, os testes serão essenciais para o árbitro por este meio. '},{ vl: 'Arbitragem deste Tx disponível no chat'},{ vl: ' 📎➡️➡️ ABRIR NESTE LINK...🔗 ❗❗ '},{ vl: 'Você tem novas mensagens no 💬 Chat Tx'}],                                          
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
    watch: {
      timerCountfin: {
        handler(value) {
          if (value > 0) {
            setTimeout(() => {
              this.timerCountfin--;
            }, 1000);
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
        "estaActivo",
        "nomuser",
        "iduser",
        "selectedlang",        
        "selectedNumAlerts",
        "selectedbtc",
        "selectedusdt",
        "selectedselTXtt",        
      ]),
    },
    methods: {
      ...mapActions([
        "syncUpdateValSelTxtt",        
      ]),
      rchild(){
        if (this.verchild === false) {
          //console.log(router)
          //console.log(this.$route.fullPath)          
        if (this.nomuser === this.tx.COMPRADOR & this.$route.fullPath !== '/Txtt/Txttc') router.push({ path: '/Txtt/Txttc' });
        if (this.nomuser === this.tx.VENDEDOR & this.$route.fullPath !== '/Txtt/Txttv') router.push({ path: '/Txtt/Txttv' });
        this.verchild = true;
        }
      },      
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
      ahora() {
        //moment.locale("es");
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
      pagar_byarbitraje() {
        // pagamos al Comprador su Req de pago Lightning
        if (this.tx.IDTX_ENTREGA === "⏳") { //aseguramos la emision del respaldo si no se ha hecho
        // recurrimos a la Tx de Respaldo
                //  cabecera token
                let config = {
                  headers: {
                    token: this.token,
                  },
                };
                this.axios
                  .get(`/get-tx/${this.tx._id}`, config)
                  .then((res) => {           
                   // console.log("leido en result  : " +res.data.RAWTXSIGNEDARB);  
                    let decryptedRAWTXSIGNEDARB = res.data.RAWTXSIGNEDARB; 
                      this.axios
                        .get(`/rpc-sendrawtransaction/${decryptedRAWTXSIGNEDARB}`, config)
                        .then((res) => {
                          let resp = res.data;
                          //console.log("resultado del sendrawtransaction en Paga_el_Arbitraje..." + resp);
                          if (resp) {
                          this.tx.IDTX_ENTREGA = resp;
                          if (this.tx.CADENARED === "₮") {
                            this.tx.TIMELINE = "6.Entrega";
                          } 
                          this.tx.updatedat = Date.now;
                                              
                          this.axios
                            .put(`/upt-tx/${this.tx._id}`, this.tx, config)
                            .then((res) => {

                            this.nota.nombre = "tx-aceptación";
                            this.nota.descripcion = "Tx: " +this.tx.IMPORTEMONEDA + " " + this.oferta.MONEDAOFERTA + " 🔄 " + this.tx.CADENARED + this.tx.IMPORTECOMPRA + " USDT. " +
                              this.f_checkPp_lib_Ln.txts[this.svl()][0].vl;
                            this.axios
                              .post(
                                `/nueva-a-otro/${this.tx.ID_COMPRADOR},${this.tx.EMAIL_COMPRADOR}`,
                                this.nota,
                                config
                              )
                              .then((res) => {

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
                              });                      

                            })
                            .catch((e) => {
                              console.log(e.response);
                            });

                          })
                            .catch((e) => {});

                          }

                        })
                        .catch((e) => {});

                  })
                  .catch((e) => {
                      console.log(e.response);
                  });        
        } else { // respaldo al arbitraje realizado
          this.mensaje.color = "success";
          this.mensaje.texto = "🔐 ID TX ⚖️✅..." + this.tx.IDTX_ENTREGA;
          this.showAlert();          
        }         

      },      
      updateCobro() {
        // actualizar db, alertas, socket, notificaciones y timeline
        this.mensaje.color = "success";
        this.mensaje.texto = this.f_updateCobro.txts[this.svl()][0].vl;
        this.showAlert();
        
        // actualizar tx db *****************************************
        if (this.tx.COBRO_VENDEDOR === "⚖️✅") {
          this.tx.TIMELINE = "5.Cobro";
          //this.tx.CADENARED = "₿";
          // ACTUALIZAMOS TX Y NOTIFICAMOS DECISION Y COMO SIGUE A LAS PARTES        
          this.nota.nombre = "tx-incidencia";
          this.nota.descripcion = "Tx: " +this.tx.IMPORTEMONEDA + " " + this.oferta.MONEDAOFERTA + " 🔄 " + this.tx.CADENARED + this.tx.IMPORTECOMPRA + " USDT. " +
            this.f_updateCobro.txts[this.svl()][1].vl +
            this.descri;
          // actualizar tx db *****************************************
          let config = {
            headers: {
              token: this.token,
            },
          };
          this.axios
            .put(`/upt-tx/${this.tx._id}`, this.tx, config)
            .then((res) => {
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
                      router.push({ name: "About" })                      
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

        } else if (this.tx.COBRO_VENDEDOR === "⚖️❌") {
          // notificar que no se ha seleccionado el checkbox como IMPAGO
          //this.tx.CADENARED = "₿";
          // ACTUALIZAMOS TX Y NOTIFICAMOS DECISION Y COMO SIGUE A LAS PARTES        
          this.nota.nombre = "tx-incidencia";
          this.nota.descripcion = "Tx: " +this.tx.IMPORTEMONEDA + " " + this.oferta.MONEDAOFERTA + " 🔄 " + this.tx.CADENARED + this.tx.IMPORTECOMPRA + " USDT. " +
            this.f_updateCobro.txts[this.svl()][2].vl +
            this.descri;
          // actualizar tx db *****************************************
          let config = {
            headers: {
              token: this.token,
            },
          };
          this.axios
            .put(`/upt-tx/${this.tx._id}`, this.tx, config)
            .then((res) => {
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
                      //router.push({ name: "About" })
                                           
               //eliminar tx y notificar a las partes
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
                        /*  console.log(
                        "eliminacion chat number of matched documents:.." + res.data.n
                      );
                      console.log(
                        "eliminacion chat ok – 1 if the operation was successful:.." +
                          res.data.ok
                      );
                      console.log(
                        "eliminacion chat number of deleted documents:.." +
                          res.data.deletedCount
                      );
                    */
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
                                this.nota.descripcion = "Tx: " +this.tx.IMPORTEMONEDA + " " + this.oferta.MONEDAOFERTA + " 🔄 " + this.tx.CADENARED + this.tx.IMPORTECOMPRA + " BTC. " +
                                this.f_EliminarTx.txts[this.svl()][1].vl;

                              this.axios
                                .post(
                                  `/nueva-a-otro/${this.tx.ID_COMPRADOR},${this.tx.EMAIL_COMPRADOR}`,
                                  this.nota,
                                  config
                                )
                                .then((res) => {

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
            })
            .catch((e) => {
              console.log(e.response);
            });          

        }
      },      
      llenarAceptacion() {
        //this.signUp = !this.signUp;
        this.comisTxacomprador = this.tx.IMPORTECOMPRA * 0.0025;
        // console.log("this.comisTxacomprador..." + this.comisTxacomprador);
        this.aCopiQttymasCom = this.round8(
          this.tx.IMPORTECOMPRA + this.comisTxacomprador
        );
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
            //  console.log('tenemos el this.txs ...'+this.txs.length);              
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
        //console.log('selddo siempre...'+selddo);
        //solo de la tx seleccionada
        this.signUp = false;
        this.tx = selddo;
       // console.log(this.tx); 
        this.listarUser();
        // inicilaización del timer cuenta atras documentos    
        if (this.tx.COBRO_VENDEDOR === "⏳" & this.tx.TIMELINE === "Arbitraje") {
          this.timerCountfin = 3599;
        }
        //  console.log(this.tx);                 
        this.leeroferta(this.tx.ID_OFERTA);
        this.mensaje.color = "success";
        this.mensaje.texto = this.f_leertxs.txts[this.svl()][3].vl;
        this.showAlert();
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
            console.log(e.response);
          });
      },
      onMessageWasSent(message) {
       if (message !== null) { 
        if (message.type === "text") {
          this.socket.emit("msg", {
            txid: this.tx._id, // viene el tx
            username: this.nomuser, // antes username
            msg: message.data.text,
            filename: "",
          });
        } // manda mje btychat a socket

        if (message.type === "file") {
          var file = message.data.file;
          // leemos el file y lo metemos en slices
          var fileReader = new FileReader(),
            slice = file.slice(0, 10000);
          fileReader.readAsArrayBuffer(slice);
          fileReader.onload = (evt) => {
            var arrayBuffer = fileReader.result;
            this.socket.emit("slice upload", {
              name: this.tx._id + "_" + this.nomuser + "_" + file.name,
              type: file.type,
              size: file.size,
              data: arrayBuffer,
            });
            // console.log(arrayBuffer.byteLength);
            if (message !== null) {  
             if (message.data.text === null | message.data.text === "" | message.data.text === undefined) message.data.text = this.f_onMessageWasSent.txts[this.svl()][0].vl
            if ((arrayBuffer.byteLength < 10000)) {
              this.socket.emit("msg", {
                txid: this.tx._id, // viene el tx
                username: this.nomuser, // en tx futura aqui nomuser address
                msg: message.data.text,
                filename: this.tx._id + "_" + this.nomuser + "_" + message.data.file.name,
              });
              // console.log("último slice de la carga");
              var place = null;
              message.length = 0;
              message = null;
              return message;             
            }            
            if ((message.data.file.size < 10000)) {
             // console.log(message.data.file.size); 
              this.socket.emit("msg", {
                txid: this.tx._id, // viene el tx
                username: this.nomuser, // en tx futura aqui nomuser address
                msg: message.data.text,
                filename: this.tx._id + "_" + this.nomuser + "_" + message.data.file.name,
              });
            }
            }
          };

          this.socket.on("request slice upload", (data) => {
             // console.log(data);
            var place = data.currentSlice * 10000,
              slice = file.slice(
                place,
                place + Math.min(10000, file.size - place)
              );
            fileReader.readAsArrayBuffer(slice);
              //notificamos cargando parte de archivo en el server
              this.mensaje.color = "danger";
              this.mensaje.texto = this.f_onMessageWasSent.txts[this.svl()][1].vl + parseInt(place/1024) + " / " + parseInt(file.size/1024) + this.f_onMessageWasSent.txts[this.svl()][2].vl;
              this.showAlert();             
          });

          this.socket.on("end upload", () => {
            // console.log("fin de slice o de la descarga"); var place = null; message = null; return message;
          });
          if (message.data.file.size === 10000) { // caso extraordinario
            this.socket.emit("msg", {
              txid: this.tx._id, // viene el tx
              username: this.nomuser, // en tx nomuser address
              msg: message.data.text,
              filename: this.tx._id + "_" + this.nomuser + "_" + message.data.file.name,
            });
          }
        } // manda mje btychat al socket

        if (message.type === "emoji") {
          this.socket.emit("msg", {
            txid: this.tx._id, // viene el tx
            username: this.nomuser, // en tx nomuser address
            msg: message.data.emoji,
            filename: "",
          });
        } // manda mje btychat al socket
       }
      },
      openChat() {
        // called when the user clicks on the fab button to open the chat
        this.isChatOpen = true;
        this.newMessagesCount = 0;
      },
      closeChat() {
        // called when the user clicks on the botton to close the chat
        this.isChatOpen = false;
      },
      handleScrollToTop() {
        // called when the user scrolls message list to top
        // leverage pagination for loading another page of messages
      },
      handleOnType() {
        // console.log("Emit typing event");
      },
      editMessage(message) {
        const m = this.mesageList.find((m) => m.id === message.id);
        m.isEdited = true;
        m.data.text = message.data.text;
      },
      joinServer() {
      this.socket.emit("desconectar", this.nomuser);          
        // ************************ el proceso leer actualizaciones en transacs***********
      // console.log("entra en joinserver...this.nomuser..." + this.nomuser);
      // reinicializamos variables de chat
        this.messages = []; // chat
        this.messages.length = 0;        
        this.users = []; //chat
        this.users.length = 0;
        this.participants.length = 0;               
        this.participants = [
          {
            id: this.f_joinServer.txts[this.svl()][0].vl ,
            name: this.f_joinServer.txts[this.svl()][1].vl,
            imageUrl: "https://www.contobit.com/img/favicon.png",
          },
          {
            id: this.User.ARBITRAJE,
            name: this.User.ARBITRAJE,
            imageUrl: "https://www.contobit.com/imagens/balance_tt.png",
          },
          {
            id: this.tx.VENDEDOR,
            name: this.tx.VENDEDOR,
            imageUrl: "https://www.contobit.com/imagens/manitatt.png",
          },
          {
            id: this.tx.COMPRADOR,
            name: this.tx.COMPRADOR,
            imageUrl: "https://www.contobit.com/imagens/carritott.png",
          }                     
        ]; // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.        
        this.messageList = [];
        this.messageList.length = 0;         
       this.socket.emit("newuser", this.nomuser); //******************colocado aki arriba en prueba y funcionas

        this.socket.on("addedInTransacs", (data) => {
            let txs = data.transacs; //  actualizr las transacciones
            // primero filtrar data.transacs solo las transacs de este nomuser
            for (var i = 0; i < txs.length; i++) {
              if (
                (txs[i].COMPRADOR !== this.nomuser) &
                (txs[i].VENDEDOR !== this.nomuser) ||
                (txs[i].COMPRADOR === undefined) & (txs[i].VENDEDOR === undefined)
              ) {
                //  console.log('elimina ELEMENTO del aray, comprador o vendedor no coinciden con nomuser o llegan undefined  ..'+i)
                txs.splice(i, 1);
                i = i - 1;
              } else {
                //   console.log('no eliminar, nomuser existe en la transac en comprador o vendedor ...'+i)
                //  console.log('nomuser en posicion COMPRADOR O VENDEDOR..'+txs[i].COMPRADOR+txs[i].VENDEDOR);           
              }
            }
          }),
          this.socket.on("loggedIn", (data) => {
            // console.log('visualizar users del loggedin..' + data.users);
            // primero filtrar data.messages solo los mjes de esta tx
            // console.log('filtrados solo de la tx..'+data.messages[7].txid)
            for (var i = 0; i < data.messages.length; i++) {
              if (!data.messages[i].txid || data.messages[i].txid === undefined) {
                //   console.log('elimina simplemente llega sin campo txid..'+i)
                data.messages.splice(i, 1);
                i = i - 1;
              } else {
                if (data.messages[i].txid === this.tx._id) {
                  //  console.log('no eliminar, tx activa del mje ...'+i)
                } else {
                  //  console.log('si elimina, no cumple txid === activa.. '+i)
                  data.messages.splice(i, 1);
                  i = i - 1;
                }
              }
            }

            this.messages = data.messages; //  actualizr los messages del ukchat
            // actualizar el historial en el beautychat

            // para  inicializamos valores del beautychat           
            this.messageList = [{
                type: "text",
                author: this.f_joinServer.txts[this.svl()][0].vl,
                data: {
                  text: this.f_joinServer.txts[this.svl()][2].vl,
                },
              },
              {
                type: "text",
                author: this.User.ARBITRAJE,
                data: {
                  text: this.f_joinServer.txts[this.svl()][3].vl
                },
              },
            ];
            this.newMessagesCount = 2;

            for (var i = 0; i < data.messages.length; i++) {
              if (data.messages[i]._id) {
                var message = data.messages[i];

                if (message.filename === "") {
                  var message2 = {
                    type: "text",
                    author: message.username,
                    data: {
                      text: message.msg
                    },
                  };
                  if (message2.author === this.nomuser) message2.author = 'me';
                } else {

                    message.msg =
                     message.msg + this.f_joinServer.txts[this.svl()][4].vl;

                      var message2 = {
                      type: "file",
                      author: message.username,
                      data: {
                        file: {
                          name: message.msg,
                          url: `https://www.contobit.com/filesrecibidosfrontchats/` +  // ****** server alemania***********
                          //url: `http://localhost:3000/filesrecibidosfrontchats/` + // ****** modo desarrollo ************                          
                          message.filename,
                        },
                      },
                     };
                     if (message2.author === this.nomuser) message2.author = 'me';        
                                     
                }
                this.messageList = [...this.messageList, message2];
                // console.log('this.messageList ...'+this.messageList)                
                this.newMessagesCount = this.isChatOpen ?
                  this.newMessagesCount :
                  this.newMessagesCount + 1;
              }
            }

            this.users = data.users;

          });
        this.listen();
      },
      listen: function () {
        this.socket.on("userOnline", (user) => {
          this.users.push(user); // solo uk chat
        });
        this.socket.on("userLeft", (user) => {
          this.users.splice(this.users.indexOf(user), 1);
        });

        this.socket.on("msg", (message) => {
          // añadir condicion al message que para que no duplique
          // console.log(message);
          if (message.txid === this.tx._id) {

            let index = this.messages.findIndex(
              (item) => item._id === message._id
            );
            // console.log(index);
            
            if (index < 0) {            
            this.messages.push(message); // chat uk
            if (message.filename === "") {
              var message2 = {
                type: "text",
                author: message.username,
                data: {
                  text: message.msg
                },
              };
              if (message2.author === this.nomuser) message2.author = 'me';
            } else {

              message.msg =
                message.msg + this.f_joinServer.txts[this.svl()][4].vl;
             
              var message2 = {
                type: "file",
                author: message.username,
                data: {
                  file: {
                    name: message.msg,
                    url: `https://www.contobit.com/filesrecibidosfrontchats/` +  // ****** server alemania***********
                    //url: `http://localhost:3000/filesrecibidosfrontchats/` + // ****** modo desarrollo ************
                    message.filename,
                  },
                },
                };
                if (message2.author === this.nomuser) message2.author = 'me';

            }
            this.messageList = [...this.messageList, message2];
            this.newMessagesCount = this.isChatOpen ?
              this.newMessagesCount :
              this.newMessagesCount + 1;
              if (this.newMessagesCount > 0) {
              this.mensaje.color = "warning";
              this.mensaje.texto = this.f_joinServer.txts[this.svl()][5].vl;
              this.showAlert();
              } 
          }
         }

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
    async  listarUser() {
        // leer id, address, emails user on line
        //console.log("this.tx.VENDEDOR..."+this.tx.VENDEDOR)
        let adr = this.tx.VENDEDOR; 
        let addressB64;
        addressB64 = Buffer.from(adr).toString("base64");
        await this.axios
          .get(`/seekUser/${addressB64}`)
          .then((res) => { // usuario
          this.User = res.data;
          this.joinServer();
          })
          .catch((e) => {});
      },      
      
    },   
    mounted() {
              this.svl();      
              this.leertxs();
    },    
  };
</script>

<style lang="scss" scoped>
.modal-window {
  position: relative;
  background-color: rgba(0, 0, 0, 0.25);
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  margin-bottom: -100px;
  margin-left: -400px;
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
    width: 230px;
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
    z-index: 5;
    color: white;
    background-color: black;
    border-radius: 6px;
    padding: 5px 10px 1px;
    min-width: 250px;    
    max-width: 540px;
    max-inline-size: 540px;
    writing-mode: horizontal-tb;        
    max-height: 400px;
    text-align: left;        
}

.popper_caps {  
    font-size: 40%;
    z-index:11;
    color: white;
    background-color: black;
    border-radius: 6px;
    padding: 5px 10px 1px;
    min-width: 250px;
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


  body {
    font-family: "Nunito", "Avenir", Helvetica, Arial, sans-serif;
    color: #233535;
    margin: 0;
    padding: 0;
  }

  .container {
    margin-top: 1px;     
    position: relative;
    width: auto;
    min-width: 360px;
    max-width: 980px;     
    height: auto;
    min-height: 480px;     
    border-radius: 10px;
    // overflow: hidden;
    background-color: rgb(246, 251, 255);
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
      background: linear-gradient(to bottom right, #56A997, #30496E);
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

  .table-hover>tbody>tr:hover {
    background-color: rgb(231, 248, 231);
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
    background: linear-gradient(to bottom, #d1dee4, #dee6ec);
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
        padding-right: 15px;
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
      margin-left: 30px;      
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

  .sign-in {
    top: 1px;
    left: 0;
    margin-left: calc(50% - 25%);
    margin-right: calc(50% - 25%);        
    z-index: 2;
    width: 100%;
    max-width: 480px;    
    height: 99%;
    background: linear-gradient(to bottom right, #edf9ff, #c7e8ff);
    transition: all 0.5s ease-in-out;     
  }

  .sign-up {
    margin-left:300px;
    top: 1px;
    left: 0;
    margin-left: calc(50% - 25%);
    margin-right: calc(50% - 25%);
    z-index: 1;
    opacity: 0;
    width: 100%;
    max-width: 480px;
    height: 99%;
    background: linear-gradient(to bottom right, #edf9ff, #c5e8ff);
    transition: all 0.5s ease-in-out;       
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

    .overlay-left {
      transform: translateX(0);
    }

    .overlay-right {
      transform: translateX(20%);
    }
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

  #car1 {
    margin-top: -45px;
    display: flex;
    margin-left: 225px;
    width: 45px;
    height: 25px;
    background: transparent;
  }

  #car2 {
    margin-top: -45px;
    margin-left: 350px;
    display: flex;
    width: 45px;
    height: 25px;
    background: transparent;
  }

  #car3 {
    margin-top: -45px;
    margin-left: 495px;
    display: flex;
    width: 45px;
    height: 25px;
    background: transparent;
  }

  #car4 {
    margin-top: -45px;
    margin-left: 630px;
    display: flex;
    width: 45px;
    height: 25px;
    background: transparent;
  }

  #car5 {
    margin-top: -45px;
    margin-left: 640px;
    display: flex;
    width: 45px;
    height: 25px;
    background: transparent;
  }

  #car6 {
    margin-top: -45px;
    margin-left: 685px;
    display: flex;
    width: 45px;
    height: 25px;
    background: transparent;
  }

  #cap1 {
    z-index: 10; 
    display: flex;
    margin-left: 100px;
    margin-top: -30px;
    width: 125px;
    background: transparent;
    a {
      color: DodgerBlue;
    }
  }

  #cap2 {
    z-index: 10;      
    display: flex;
    margin-top: -30px;
    width: 115px;
    background: transparent;
    a {
      color: DodgerBlue;
    }
  }

  #cap3 { 
    z-index: 10;        
    display: flex;
    margin-top: -30px;
    width: 115px;
    background: transparent;
    a {
      color: DodgerBlue;
    }
  }

  #cap4 {
    z-index: 10;         
    display: flex;
    margin-top: -30px;
    width: 150px;
    background: transparent;
    a {
      color: DodgerBlue;
    }
  }

  #cap5 {
    z-index: 10;         
    display: flex;
    margin-top: -30px;
    width: 110px;
    background: transparent;
    a {
      color: DodgerBlue;
    }
  }

  #cap6 {
    z-index: 10;    
    display: flex;
    margin-top: -30px;
    width: 120px;
    background: transparent;
    a {
      color: DodgerBlue;
    }
  }

  #interc2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;     
    display: inline;   
    margin-top: -20px;
    margin-left: -5px;
    margin-right: 30px;       
    width: auto;
    height: auto;        
    color: DodgerBlue;
    justify-content: space-around; 
  }
  #intercc {
    font-family: 'Montserrat', sans-serif;
    font-size: 25px;     
    display: inline-flex;   
    margin-top: -1px;       
    width: auto;
    height: auto;       
    color: grey;
    padding: 7px;     
  }
  #interc3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;     
    display: inline;   
    margin-top: -20px;
    margin-left: 25px;            
    width: auto;
    height: auto;        
    color: DodgerBlue;
    justify-content: space-around;  
  }
  .blink-bg{
		color: #fff;
		animation: blinkingBackground 10s infinite;
	}
	@keyframes blinkingBackground{   
		0%		{ background-color: #e0ffe1;}
		20%		{ background-color: #77b39e;}
		40%		{ background-color: #a1e2c1;}
		60%		{ background-color: #a5d5b2;}
		80% 	{ background-color: #a5dfbd;}
    100%	{ background-color: white;} 
	}   
  .rotar1 {
    -webkit-transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    -ms-transform: rotate(-10deg);
    -o-transform: rotate(-10deg);
    transform: rotate(-10deg);

    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
    transform-origin: 50% 50%;

    font-size: 40px;
    height: 30px;
    width: 120px;
    position: relative;
    top: 5px;
    background: transparent;
  }

/* ajustes phone */
.cajatl {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  background: transparent;
}
.img {
  max-width: 95%;
  height: auto;
}

#tittransacs {
  display: inline-flex;
  align-items: center;
  margin-top: 10px;  
  color:black;
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

.cajatl {
  margin-left: 5px;
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

.view {
width: 360px;
overflow: hidden;
}  

.container {
max-width: 360px;
overflow: hidden;
}
  p {
    margin: 20px -40px 10px;
  }
  
h5 {font-size: 10px;};
h6 {font-size: 10px;};  
#tittransacs {
  display: inline-flex;
  align-items: center;
  margin-top: 1px;
  height: 50px;      
  font-size: 20px;
  background: transparent;
};

#interc2 {font-size: 16px;};
#intercc {font-size: 15px;};
#interc3 {font-size: 16px;};

  #car1 {
    margin-top: -39px;
    margin-left: 70px;
  }
  #car2 {
    margin-top: -39px;
    margin-left: 120px;
  }

  #car3 {
    margin-top: -39px;
    margin-left: 180px;
  }

  #car4 {
    margin-top: -39px;
    margin-left: 230px;
  }

  #car5 {
    margin-top: -39px;
    margin-left: 280px;
  }

  #car6 {
    margin-top: -39px;
    margin-left: 330px;
  }

  #cap1 {
    margin-left: -25px;
    width: 90px;
  }
  #cap2 {
    margin-left: -30px;       
    width: 50px;
  }
  #cap3 {
    width: 60px;
  }
  #cap4 {
    margin-left: 10px;    
    width: 60px;
  }
  #cap5 { 
    margin-left: 30px;     
    width: 60px;
  }
  #cap6 {
    margin-left: -40px;      
    width: 60px;
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

 
}  
</style>
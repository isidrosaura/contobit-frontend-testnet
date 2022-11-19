<template>
  <div id="table" class="container">   
    <h2 style='color:rgb(80, 80, 80)'><img
                align="bottom"
                src="https://www.contobit.com/imagens/carritott.png"
                width="45px"
                height="30.8px"
              />
              <img />{{titul.matrix[svl()][0].value}}
            <a v-if="(comprar.length > 0)"
            class="btn btn-outline-light" @click="vermas = !vermas">         
             <span style="color:grey;pading-left:0px;"><font-awesome-icon v-if="(vermas === true)" icon="caret-up" /><font-awesome-icon v-if="(vermas === false)" icon="caret-down" /></span>
            </a>                            
              </h2>
    <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="mensaje.color"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >{{mensaje.texto}}</b-alert>
    <div>
      <h5>
        <div id="treeselid">        
        <treeselect
          v-model="value"
          :multiple="true"
          :options="options"
          :placeholder="titul.matrix[svl()][1].value"
          @input="listarOfertas"
          :closeOnSelect="true"         
          :disable-branch-nodes="true"
          :autoFocus="true"
          :open-on-focus="true"          
          :maxHeight="250"
        />
        </div>        
      </h5>                      
    </div>
    <div v-if="numpags > 0">
    <div>   
    <table class="table table-hover">
      <thead class="thead">
        <tr class="bg-default" v-if="cabsi">
          <th v-if="(vermas === true)" scope="col">{{tituls.matrix[svl()][0].value}} </th>
          <th scope="col">{{tituls.matrix[svl()][1].value}}</th>        
          <th >{{tituls.matrix[svl()][2].value}}</th>
          <th scope="col">
                  <popper  
                      :options= popoptionsb>
                      <div class="popper" style="margin-left:0px;">
                        <span v-html="tituls.matrix[svl()][9].value"></span>
                      </div>
                      <a href="#" slot="reference" >
                        🔐
                      </a>          
                  </popper>          
          </th>          
          <th v-if="(vermas === true)" scope="col">{{tituls.matrix[svl()][3].value}}</th>
          <th scope="col">{{tituls.matrix[svl()][4].value}}</th>
          <th scope="col">{{tituls.matrix[svl()][5].value}}</th>
          <th v-if="(vermas === true)" scope="col">{{tituls.matrix[svl()][6].value}}</th>      
          <!-- valores min max saldo en btc 
          <th scope="col">Mín.₿<br />Máx.₿<br />Saldo ₿</th> -->
          <th v-if="(vermas === false)">👁️</th>
          <th v-if="(vermas === true)"> </th>
          <th scope="col">{{tituls.matrix[svl()][7].value}}</th>        
        </tr>
      </thead>            

      <tbody>

        <tr v-for="(item, index) in comprarpag" :key="index">


          <td v-if="(vermas === true)"         
          :data-th="tituls.matrix[svl()][0].value"          
          >
            <a
              style="display: inline-block;"            
              v-bind:href="url+item.NOMBREUSUARIO"
              target="_blank"
            >&nbsp;<small> {{item.NOMBREUSUARIO | reduaddr}}...⛓️ </small></a>
            <br>
            <a
              style="clear: both;display: inline-block;overflow: hidden;white-space: nowrap;"  
              v-if="(seekmfmg(item.NOMBREUSUARIO) !== '⏳')"
              v-bind:href="url+seekmfmg(item.NOMBREUSUARIO)"
              target="_blank"
            ><small>{{seekmfmg(item.NOMBREUSUARIO) | reduaddr}}...🔐</small></a>
          </td>
          <td          
          :data-th="tituls.matrix[svl()][1].value"          
          >
            <span v-if="checkonline(item.NOMBREUSUARIO)" style='font-size:8px'>{{estaonline}}</span>
            <span v-else></span>

            <span v-if="veruno === item._id &  vermas === false">
            <br><br> 
             <small><b>{{tituls.matrix[svl()][0].value}}:</b><br></small> 
             <a 
              v-bind:href="url+item.NOMBREUSUARIO"
              target="_blank"
            >&nbsp;<small> {{item.NOMBREUSUARIO | reduaddr}}...⛓️</small></a><br>
            <a v-if="(seekmfmg(item.NOMBREUSUARIO) !== '⏳')"
              v-bind:href="url+seekmfmg(item.NOMBREUSUARIO)"
              target="_blank"
            >&nbsp;<small> {{seekmfmg(item.NOMBREUSUARIO) | reduaddr}}...🔐</small></a>            
            </span>

          </td>
          <td          
          :data-th="tituls.matrix[svl()][2].value"          
          >
            <span v-if="item.CADENARED === '₮'"><font size=4>&nbsp;<b><i>⛓️</i></b></font></span>
            <span v-else><font color="Darkorange"><b> ⚡</b></font></span>
          </td>
          <td          
          :data-th="tituls.matrix[svl()][8].value"          
          >           
              <popper  
                    :options= popoptionsb>
                    <div class="popper" style="margin-left:0px;">
                    <span v-html="tituls.matrix[svl()][8].value"></span>
                    ₮: {{seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO))}}
                    </div>
                    <a href="#" slot="reference" >
                        <span v-if="seekmfmg(item.NOMBREUSUARIO) !== '⏳'">
                            <font size=4>&nbsp;🟢</font></span>
                        <span v-else><font size=4>&nbsp;⏳</font></span>
                    </a>          
              </popper>

            <span v-if="veruno === item._id &  vermas === false">
              <br><br>
              <small><b><span v-html="tituls.matrix[svl()][11].value"></span>:</b><br></small>
              <div
                v-if="item.MONEDAOFERTA === 'USD' & getsaldo(item.NOMBREUSUARIO) > 0"
                class="sm-col-2"
              >
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)*selectedusdt) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>                                          
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>  
              <br>
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{(seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO))*selectedusdt) | currencydecimal }}<span v-html="tituls.matrix[svl()][8].value"></span>{{item.MONEDAOFERTA}}
              </a> 
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO)) | currencydecimal}}<span v-html="tituls.matrix[svl()][8].value"></span>USDT
              </a>
              </div>
              <div
                v-else-if="item.MONEDAOFERTA === 'VES' & getsaldo(item.NOMBREUSUARIO) > 0"
                class="sm-col-2"
              >
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtVES) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>                                          
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>  
              <br>
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{(seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO))*selectedusdtVES) | currencydecimal }}<span v-html="tituls.matrix[svl()][8].value"></span>{{item.MONEDAOFERTA}}
              </a> 
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO)) | currencydecimal}}<span v-html="tituls.matrix[svl()][8].value"></span>USDT
              </a>
              </div>
              <div
                v-else-if="item.MONEDAOFERTA === 'EUR' & getsaldo(item.NOMBREUSUARIO) > 0"
                class="sm-col-2"
              >
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtEUR) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>                                          
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>  
              <br>
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{(seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO))*selectedusdtEUR) | currencydecimal }}<span v-html="tituls.matrix[svl()][8].value"></span>{{item.MONEDAOFERTA}}
              </a> 
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO)) | currencydecimal}}<span v-html="tituls.matrix[svl()][8].value"></span>USDT
              </a>
              </div>
              <div
                v-else-if="item.MONEDAOFERTA === 'COP' & getsaldo(item.NOMBREUSUARIO) > 0"
                class="sm-col-2"
              >
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtCOP) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>                                          
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>  
              <br>
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{(seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO))*selectedusdtCOP) | currencydecimal }}<span v-html="tituls.matrix[svl()][8].value"></span>{{item.MONEDAOFERTA}}
              </a> 
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO)) | currencydecimal}}<span v-html="tituls.matrix[svl()][8].value"></span>USDT
              </a>
              </div>
              <div
                v-else-if="item.MONEDAOFERTA === 'CLP' & getsaldo(item.NOMBREUSUARIO) > 0"
                class="sm-col-2"
              >
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtCLP) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>                                          
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>  
              <br>
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{(seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO))*selectedusdtCLP) | currencydecimal }}<span v-html="tituls.matrix[svl()][8].value"></span>{{item.MONEDAOFERTA}}
              </a> 
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO)) | currencydecimal}}<span v-html="tituls.matrix[svl()][8].value"></span>USDT
              </a>
              </div>
              <div
                v-else-if="item.MONEDAOFERTA === 'BRL' & getsaldo(item.NOMBREUSUARIO) > 0"
                class="sm-col-2"
              >
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtBRL) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>                                          
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>  
              <br>
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{(seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO))*selectedusdtBRL) | currencydecimal }}<span v-html="tituls.matrix[svl()][8].value"></span>{{item.MONEDAOFERTA}}
              </a> 
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO)) | currencydecimal}}<span v-html="tituls.matrix[svl()][8].value"></span>USDT
              </a>
              </div>
              <div
                v-else-if="item.MONEDAOFERTA === 'MXN' & getsaldo(item.NOMBREUSUARIO) > 0"
                class="sm-col-2"
              >
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtMXN) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>                                          
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>  
              <br>
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{(seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO))*selectedusdtMXN) | currencydecimal }}<span v-html="tituls.matrix[svl()][8].value"></span>{{item.MONEDAOFERTA}}
              </a> 
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO)) | currencydecimal}}<span v-html="tituls.matrix[svl()][8].value"></span>USDT
              </a>
              </div>
              <div
                v-else-if="item.MONEDAOFERTA === 'ARS' & getsaldo(item.NOMBREUSUARIO) > 0"
                class="sm-col-2"
              >
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtARS) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>                                          
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>  
              <br>
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{(seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO))*selectedusdtARS) | currencydecimal }}<span v-html="tituls.matrix[svl()][8].value"></span>{{item.MONEDAOFERTA}}
              </a> 
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO)) | currencydecimal}}<span v-html="tituls.matrix[svl()][8].value"></span>USDT
              </a>
              </div>
              <div
                v-else-if="item.MONEDAOFERTA === 'PEN' & getsaldo(item.NOMBREUSUARIO) > 0"
                class="sm-col-2"
              >
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtPEN) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>                                          
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>  
              <br>
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{(seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO))*selectedusdtPEN) | currencydecimal }}<span v-html="tituls.matrix[svl()][8].value"></span>{{item.MONEDAOFERTA}}
              </a> 
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO)) | currencydecimal}}<span v-html="tituls.matrix[svl()][8].value"></span>USDT
              </a>
              </div>
              <div
                v-else-if="item.MONEDAOFERTA === 'RUB' & getsaldo(item.NOMBREUSUARIO) > 0"
                class="sm-col-2"
              >
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtRUB) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>                                          
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>  
              <br>
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{(seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO))*selectedusdtRUB) | currencydecimal }}<span v-html="tituls.matrix[svl()][8].value"></span>{{item.MONEDAOFERTA}}
              </a> 
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO)) | currencydecimal}}<span v-html="tituls.matrix[svl()][8].value"></span>USDT
              </a>
              </div>
              <div
                v-else-if="item.MONEDAOFERTA === 'INR' & getsaldo(item.NOMBREUSUARIO) > 0"
                class="sm-col-2"
              >
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtINR) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>                                          
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>  
              <br>
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{(seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO))*selectedusdtINR) | currencydecimal }}<span v-html="tituls.matrix[svl()][8].value"></span>{{item.MONEDAOFERTA}}
              </a> 
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO)) | currencydecimal}}<span v-html="tituls.matrix[svl()][8].value"></span>USDT
              </a>
              </div>
              <div
                v-else-if="item.MONEDAOFERTA === 'TRY' & getsaldo(item.NOMBREUSUARIO) > 0"
                class="sm-col-2"
              >
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtTRY) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>                                          
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>  
              <br>
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{(seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO))*selectedusdtTRY) | currencydecimal }}<span v-html="tituls.matrix[svl()][8].value"></span>{{item.MONEDAOFERTA}}
              </a> 
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO)) | currencydecimal}}<span v-html="tituls.matrix[svl()][8].value"></span>USDT
              </a>
              </div>
              <div
                v-else-if="item.MONEDAOFERTA === 'IRR' & getsaldo(item.NOMBREUSUARIO) > 0"
                class="sm-col-2"
              >
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtIRR) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>                                          
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>  
              <br>
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{(seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO))*selectedusdtIRR) | currencydecimal }}<span v-html="tituls.matrix[svl()][8].value"></span>{{item.MONEDAOFERTA}}
              </a> 
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO)) | currencydecimal}}<span v-html="tituls.matrix[svl()][8].value"></span>USDT
              </a>
              </div>              
              <div
                v-else-if="item.MONEDAOFERTA === 'CNY' & getsaldo(item.NOMBREUSUARIO) > 0"
                class="sm-col-2"
              >
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtCNY) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>                                          
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>  
              <br>
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{(seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO))*selectedusdtCNY) | currencydecimal }}<span v-html="tituls.matrix[svl()][8].value"></span>{{item.MONEDAOFERTA}}
              </a> 
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                     {{seekmfmgsaldo(seekmfmg(item.NOMBREUSUARIO)) | currencydecimal}}<span v-html="tituls.matrix[svl()][8].value"></span>USDT
              </a>
              </div> 
            </span> 

          </td>
          <td v-if="(vermas === true)"         
          :data-th="tituls.matrix[svl()][3].value"          
          >&nbsp;<font size="2" color="Grey">{{item.FORMADEPAGO}}</font>
          </td>
          <td          
          :data-th="tituls.matrix[svl()][4].value"          
          >&nbsp;
            {{item.GRUPOBANCO}}
            <br />
            {{item.NOMBANCO}}
            <span v-if="veruno === item._id &  vermas === false">            
            <br>
             <small><b><span v-html="tituls.matrix[svl()][3].value"></span>:</b><br></small>
              <small>{{item.FORMADEPAGO}} </small>          
            </span>            
          </td>
          <td 
           :data-th="tituls.matrix[svl()][5].value"           
          v-if="item.MONEDAOFERTA === 'USD'">
            <font
              color="darkGreen"
            >{{(selectedusdt-(selectedusdt*item.PRECIOOFERTA)/-100) | currencydecimal}} {{item.MONEDAOFERTA}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA >= 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <span v-if="veruno === item._id &  vermas === false">
            <br>
             <small><b><span v-html="tituls.matrix[svl()][6].value"></span>:</b><br></small>
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdt | currencydecimal}} 
              -
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdt | currencydecimal}} {{item.MONEDAOFERTA}}</span>
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdt | currencydecimal}} {{item.MONEDAOFERTA}}</span>
            </font>        
            </span>            
          </td>
          <td 
           :data-th="tituls.matrix[svl()][5].value"          
          v-else-if="item.MONEDAOFERTA === 'VES'">
            <font
              color="darkGreen"
            >{{(selectedusdtVES-(selectedusdtVES*item.PRECIOOFERTA)/-100) | currencydecimal}} {{item.MONEDAOFERTA}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA >= 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <span v-if="veruno === item._id &  vermas === false">
            <br>
             <small><b><span v-html="tituls.matrix[svl()][6].value"></span>:</b><br></small>
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtVES| currencydecimal}} 
              -
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtVES | currencydecimal}} {{item.MONEDAOFERTA}}</span>
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtVES | currencydecimal}} {{item.MONEDAOFERTA}}</span>
            </font>        
            </span>            
          </td>
          <td
           :data-th="tituls.matrix[svl()][5].value"           
           v-else-if="item.MONEDAOFERTA === 'EUR'">
            <font
              color="darkGreen"
            >{{(selectedusdtEUR-(selectedusdtEUR*item.PRECIOOFERTA)/-100) | currencydecimal}} {{item.MONEDAOFERTA}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA >= 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <span v-if="veruno === item._id &  vermas === false">
            <br>
             <small><b><span v-html="tituls.matrix[svl()][6].value"></span>:</b><br></small>
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtEUR | currencydecimal}} 
              -
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtEUR | currencydecimal}} {{item.MONEDAOFERTA}}</span>
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtEUR | currencydecimal}} {{item.MONEDAOFERTA}}</span>
            </font>        
            </span>            
          </td>
          <td
           :data-th="tituls.matrix[svl()][5].value"          
           v-else-if="item.MONEDAOFERTA === 'COP'">
            <font
              color="darkGreen"
            >{{(selectedusdtCOP-(selectedusdtCOP*item.PRECIOOFERTA)/-100) | currencydecimal}} {{item.MONEDAOFERTA}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA >= 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <span v-if="veruno === item._id &  vermas === false">
            <br>
             <small><b><span v-html="tituls.matrix[svl()][6].value"></span>:</b><br></small>
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtCOP | currencydecimal}} 
              -
              <small
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtCOP | currencydecimal}} {{item.MONEDAOFERTA}}</small>
              <small
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtCOP | currencydecimal}} {{item.MONEDAOFERTA}}</small>
            </font>        
            </span>             
          </td>

          <td 
           :data-th="tituls.matrix[svl()][5].value"           
          v-else-if="item.MONEDAOFERTA === 'CLP'">
            <font
              color="darkGreen"
            >{{(selectedusdtCLP-(selectedusdtCLP*item.PRECIOOFERTA)/-100) | currencydecimal}} {{item.MONEDAOFERTA}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA >= 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <span v-if="veruno === item._id &  vermas === false">
            <br>
             <small><b><span v-html="tituls.matrix[svl()][6].value"></span>:</b><br></small>
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtCLP | currencydecimal}} 
              -
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtCLP | currencydecimal}} {{item.MONEDAOFERTA}}</span>
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtCLP | currencydecimal}} {{item.MONEDAOFERTA}}</span>
            </font>        
            </span>             
          </td>

          <td
           :data-th="tituls.matrix[svl()][5].value"           
           v-else-if="item.MONEDAOFERTA === 'BRL'">
            <font
              color="darkGreen"
            >{{(selectedusdtBRL-(selectedusdtBRL*item.PRECIOOFERTA)/-100) | currencydecimal}} {{item.MONEDAOFERTA}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA >= 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <span v-if="veruno === item._id &  vermas === false">
            <br>
             <small><b><span v-html="tituls.matrix[svl()][6].value"></span>:</b><br></small>
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtBRL | currencydecimal}} 
              -
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtBRL | currencydecimal}} {{item.MONEDAOFERTA}}</span>
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtBRL | currencydecimal}} {{item.MONEDAOFERTA}}</span>
            </font>       
            </span>            
          </td>
          <td 
            :data-th="tituls.matrix[svl()][5].value"          
          v-else-if="item.MONEDAOFERTA === 'MXN'">
            <font
              color="darkGreen"
            >{{(selectedusdtMXN-(selectedusdtMXN*item.PRECIOOFERTA)/-100) | currencydecimal}} {{item.MONEDAOFERTA}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA >= 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <span v-if="veruno === item._id &  vermas === false">
            <br>
             <small><b><span v-html="tituls.matrix[svl()][6].value"></span>:</b><br></small>
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtMXN | currencydecimal}} 
              -
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtMXN | currencydecimal}} {{item.MONEDAOFERTA}}</span>
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtMXN | currencydecimal}} {{item.MONEDAOFERTA}}</span>
            </font>      
            </span>             
          </td>
          <td 
           :data-th="tituls.matrix[svl()][5].value"           
          v-else-if="item.MONEDAOFERTA === 'ARS'">
            <font
              color="darkGreen"
            >{{(selectedusdtARS-(selectedusdtARS*item.PRECIOOFERTA)/-100) | currencydecimal}} {{item.MONEDAOFERTA}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA >= 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <span v-if="veruno === item._id &  vermas === false">
            <br>
             <small><b><span v-html="tituls.matrix[svl()][6].value"></span>:</b><br></small>
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtARS | currencydecimal}} 
              -
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtARS | currencydecimal}} {{item.MONEDAOFERTA}}</span>
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtARS | currencydecimal}} {{item.MONEDAOFERTA}}</span>
            </font>     
            </span>            
          </td>
          <td 
          :data-th="tituls.matrix[svl()][5].value"          
          v-else-if="item.MONEDAOFERTA === 'PEN'">
            <font
              color="darkGreen"
            >{{(selectedusdtPEN-(selectedusdtPEN*item.PRECIOOFERTA)/-100) | currencydecimal}} {{item.MONEDAOFERTA}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA >= 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <span v-if="veruno === item._id &  vermas === false">
            <br>
             <small><b><span v-html="tituls.matrix[svl()][6].value"></span>:</b><br></small>
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtPEN | currencydecimal}} 
              -
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtPEN | currencydecimal}} {{item.MONEDAOFERTA}}</span>
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtPEN | currencydecimal}} {{item.MONEDAOFERTA}}</span>
            </font>     
            </span>            
          </td>
          <td 
           :data-th="tituls.matrix[svl()][5].value"           
          v-else-if="item.MONEDAOFERTA === 'RUB'">
            <font
              color="darkGreen"
            >{{(selectedusdtRUB-(selectedusdtRUB*item.PRECIOOFERTA)/-100) | currencydecimal}} {{item.MONEDAOFERTA}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA >= 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <span v-if="veruno === item._id &  vermas === false">
            <br>
             <small><b><span v-html="tituls.matrix[svl()][6].value"></span>:</b><br></small>
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtRUB | currencydecimal}} 
              -
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtRUB | currencydecimal}} {{item.MONEDAOFERTA}}</span>
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtRUB | currencydecimal}} {{item.MONEDAOFERTA}}</span>>
            </font>    
            </span>            
          </td>
          <td 
           :data-th="tituls.matrix[svl()][5].value"           
          v-else-if="item.MONEDAOFERTA === 'INR'">
            <font
              color="darkGreen"
            >{{(selectedusdtINR-(selectedusdtINR*item.PRECIOOFERTA)/-100) | currencydecimal}} {{item.MONEDAOFERTA}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA >= 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <span v-if="veruno === item._id &  vermas === false">
            <br>
             <small><b><span v-html="tituls.matrix[svl()][6].value"></span>:</b><br></small>
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtINR | currencydecimal}} 
              -
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtINR | currencydecimal}} {{item.MONEDAOFERTA}}</span>
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtINR | currencydecimal}} {{item.MONEDAOFERTA}}</span>
            </font>    
            </span>             
          </td>
          <td
           :data-th="tituls.matrix[svl()][5].value"           
           v-else-if="item.MONEDAOFERTA === 'TRY'">
            <font
              color="darkGreen"
            >{{(selectedusdtTRY-(selectedusdtTRY*item.PRECIOOFERTA)/-100) | currencydecimal}} {{item.MONEDAOFERTA}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA >= 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <span v-if="veruno === item._id &  vermas === false">
            <br>
             <small><b><span v-html="tituls.matrix[svl()][6].value"></span>:</b><br></small>
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtTRY | currencydecimal}} 
              -
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtTRY | currencydecimal}} {{item.MONEDAOFERTA}}</span>
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtTRY | currencydecimal}} {{item.MONEDAOFERTA}}</span>
            </font>    
            </span>            
          </td>
          <td
           :data-th="tituls.matrix[svl()][5].value"           
           v-else-if="item.MONEDAOFERTA === 'IRR'">
            <font
              color="darkGreen"
            >{{(selectedusdtIRR-(selectedusdtIRR*item.PRECIOOFERTA)/-100) | currencydecimal}} {{item.MONEDAOFERTA}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA >= 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <span v-if="veruno === item._id &  vermas === false">
            <br>
             <small><b><span v-html="tituls.matrix[svl()][6].value"></span>:</b><br></small>
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtIRR | currencydecimal}} 
              -
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtIRR | currencydecimal}} {{item.MONEDAOFERTA}}</span>
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtIRR | currencydecimal}} {{item.MONEDAOFERTA}}</span>
            </font>   
            </span>            
          </td>
          <td
          :data-th="tituls.matrix[svl()][5].value"          
           v-else-if="item.MONEDAOFERTA === 'CNY'">
            <font
              color="darkGreen"
            >{{(selectedusdtCNY-(selectedusdtCNY*item.PRECIOOFERTA)/-100) | currencydecimal}} {{item.MONEDAOFERTA}}</font>
            <br />
            <font
              v-if="item.PRECIOOFERTA >= 0"
              color="darkGreen"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <font
              v-else-if="item.PRECIOOFERTA < 0"
              color="red"
            >{{item.PRECIOOFERTA | currencydecimal}} % USDT</font>
            <span v-if="veruno === item._id &  vermas === false">
            <br>
             <small><b><span v-html="tituls.matrix[svl()][6].value"></span>:</b><br></small>
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtCNY | currencydecimal}} 
              -
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtCNY | currencydecimal}} {{item.MONEDAOFERTA}}</span>
              <span
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtCNY | currencydecimal}} {{item.MONEDAOFERTA}}</span>
            </font>   
            </span>             
          </td>
          <td 
           :data-th="tituls.matrix[svl()][6].value"            
          v-if="item.MONEDAOFERTA === 'USD' & (vermas === true)" 
          class="sm-col-2">
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdt | currencydecimal}} {{item.MONEDAOFERTA}}
              <br />
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdt | currencydecimal}}{{item.MONEDAOFERTA}}</div>
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdt | currencydecimal}} {{item.MONEDAOFERTA}}</div>
              <div
                v-if="getsaldo(item.NOMBREUSUARIO)"
                class="sm-col-2"
              >
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)*selectedusdt) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>                                          
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a> 
              </div>
            </font>
          <td        
           :data-th="tituls.matrix[svl()][6].value"           
           v-else-if="item.MONEDAOFERTA === 'VES' & (vermas === true)" class="sm-col-2">
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtVES| currencydecimal}} {{item.MONEDAOFERTA}}
              <br />
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtVES | currencydecimal}} {{item.MONEDAOFERTA}}</div>
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtVES | currencydecimal}} {{item.MONEDAOFERTA}}</div>
              <div
                v-if="getsaldo(item.NOMBREUSUARIO)"
                class="sm-col-2"
              >
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtVES) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>              
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>               
              </div>
            </font>
          </td>
          <td 
           :data-th="tituls.matrix[svl()][6].value"           
          v-else-if="item.MONEDAOFERTA === 'EUR' & (vermas === true)" class="sm-col-2">
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtEUR | currencydecimal}}
              <br />
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtEUR | currencydecimal}}</div>
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtEUR | currencydecimal}}</div>
              <div
                class="sm-col-2"
              >
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
              {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtEUR) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>              
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>
              </div>
            </font>
          </td>
          <td
           :data-th="tituls.matrix[svl()][6].value"           
           v-else-if="item.MONEDAOFERTA === 'COP' & (vermas === true)" class="sm-col-2">
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtCOP | currencydecimal}}
              <br />
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtCOP | currencydecimal}}</div>
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtCOP | currencydecimal}}</div>
              <div
                class="sm-col-2"
              >             
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
              {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtCOP) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>              
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>               
              </div>
            </font>
          </td>
          <td
           :data-th="tituls.matrix[svl()][6].value"           
           v-else-if="item.MONEDAOFERTA === 'CLP' & (vermas === true)" class="sm-col-2">
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtCLP | currencydecimal}}
              <br />
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtCLP | currencydecimal}}</div>
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtCLP | currencydecimal}}</div>
              <div
                class="sm-col-2"
              >             
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
              {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtCLP) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>              
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>               
              </div>
            </font>
          </td>
          <td
           :data-th="tituls.matrix[svl()][6].value"           
           v-else-if="item.MONEDAOFERTA === 'BRL' & (vermas === true)" class="sm-col-2">
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtBRL | currencydecimal}}
              <br />
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtBRL | currencydecimal}}</div>
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtBRL | currencydecimal}}</div>
              <div
                class="sm-col-2"
              >           
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
              {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtBRL) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>              
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>               
              </div>
            </font>
          </td>
          <td
           :data-th="tituls.matrix[svl()][6].value"           
           v-else-if="item.MONEDAOFERTA === 'MXN' & (vermas === true)" class="sm-col-2">
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtMXN | currencydecimal}}
              <br />
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtMXN | currencydecimal}}</div>
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtMXN | currencydecimal}}</div>
              <div
                class="sm-col-2"
              >             
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
              {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtMXN) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>              
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a> 
              </div>
            </font>
          </td>
          <td
           :data-th="tituls.matrix[svl()][6].value"           
           v-else-if="item.MONEDAOFERTA === 'ARS' & (vermas === true)" class="sm-col-2">
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtARS | currencydecimal}}
              <br />
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtARS | currencydecimal}}</div>
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtARS | currencydecimal}}</div>
              <div
                class="sm-col-2"
              >             
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
              {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtARS) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>              
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>               
              </div>
            </font>
          </td>
          <td
           :data-th="tituls.matrix[svl()][6].value"           
           v-else-if="item.MONEDAOFERTA === 'PEN' & (vermas === true)" class="sm-col-2">
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtPEN | currencydecimal}}
              <br />
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtPEN | currencydecimal}}</div>
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtPEN | currencydecimal}}</div>
              <div
                class="sm-col-2"
              >              
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
              {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtPEN) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>              
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>              
              </div>
            </font>
          </td>
          <td
           :data-th="tituls.matrix[svl()][6].value"           
           v-else-if="item.MONEDAOFERTA === 'RUB' & (vermas === true)" class="sm-col-2">
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtRUB | currencydecimal}}
              <br />
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtRUB | currencydecimal}}</div>
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtRUB | currencydecimal}}</div>
              <div
                class="sm-col-2"
              >         
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
              {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtRUB) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>              
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>               
              </div>
            </font>
          </td>
          <td
           :data-th="tituls.matrix[svl()][6].value"           
           v-else-if="item.MONEDAOFERTA === 'INR' & (vermas === true)" class="sm-col-2">
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtINR | currencydecimal}}
              <br />
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtINR | currencydecimal}}</div>
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtINR | currencydecimal}}</div>
              <div
                class="sm-col-2"
              >             
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
              {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtINR) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>              
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>               
              </div>
            </font>
          </td>
          <td
           :data-th="tituls.matrix[svl()][6].value"           
           v-else-if="item.MONEDAOFERTA === 'TRY' & (vermas === true)" class="sm-col-2">
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtTRY | currencydecimal}}
              <br />
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtTRY | currencydecimal}}</div>
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtTRY | currencydecimal}}</div>
              <div
                class="sm-col-2"
              >          
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
              {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtTRY) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>              
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>               
              </div>
            </font>
          </td>
          <td
           :data-th="tituls.matrix[svl()][6].value"           
           v-else-if="item.MONEDAOFERTA === 'IRR' & (vermas === true)" class="sm-col-2">
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtIRR | currencydecimal}}
              <br />
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtIRR | currencydecimal}}</div>
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtIRR | currencydecimal}}</div>
              <div
                class="sm-col-2"
              >            
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
              {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtIRR) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>              
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>               
              </div>
            </font>
          </td>
          <td
           :data-th="tituls.matrix[svl()][6].value"           
           v-else-if="item.MONEDAOFERTA === 'CNY' & (vermas === true)" class="sm-col-2">
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO*selectedusdtCNY | currencydecimal}}
              <br />
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025))-fee)*selectedusdtCNY | currencydecimal}}</div>
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA*selectedusdtCNY | currencydecimal}}</div>
              <div
                class="sm-col-2"
              >            
              <a v-if="(versaldo === false)" style="color: green; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
              {{(getsaldo(item.NOMBREUSUARIO)*selectedusdtCNY) | currencydecimal}}⛓️{{item.MONEDAOFERTA}}
              </a>              
              <a v-if="(versaldo === true)" style="color: DodgerBlue; font-size: 13px" href="#"
                @click="versaldo = !versaldo">
                {{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}⛓️USDT
              </a>               
              </div>
            </font>
          </td>
          <!-- valores min max saldo en btc          
          <td class="sm-col-2">
            <font size="2" color="MediumSeaGreen">
              {{item.LIMITEABAJO | currencydecimal}}
              <br />
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) < item.LIMITEARRIBA"
                class="sm-col-2"
              >{{((getsaldo(item.NOMBREUSUARIO))-(getsaldo(item.NOMBREUSUARIO))*0.0025)-fee | currencydecimal}}</div>
              <div
                v-if="getsaldo(item.NOMBREUSUARIO) > item.LIMITEARRIBA"
                class="sm-col-2"
              >{{item.LIMITEARRIBA | currencydecimal}}</div>
              <div class="sm-col-2">{{(getsaldo(item.NOMBREUSUARIO)) | currencydecimal}}</div>
            </font>
          </td>
          -->          
        <td>
          <a href="#" slot="reference" style="font-size:22px;"
          v-if="(vermas === false) & (veruno === item._id)"
          @click="veruno = 0">
             <span style="color:grey;pading-left:0px;">
               <font-awesome-icon v-if="(veruno === item._id)" icon="caret-up" />
               <font-awesome-icon v-if="(veruno !== item._id)" icon="caret-down" /></span>
          </a>
          <a href="#" slot="reference" style="font-size:22px;"
          v-if="(vermas === false) & (veruno !== item._id)"
          @click="veruno = item._id">
             <span style="color:grey;pading-left:0px;">
               <font-awesome-icon v-if="(veruno === item._id)" icon="caret-up" />
               <font-awesome-icon v-if="(veruno !== item._id)" icon="caret-down" /></span>
          </a>                  
        </td>

          <td>
            <b-button variant="outline-primary" @click="alerta(item)">
              <img
                align="bottom"
                src="https://www.contobit.com/imagens/carritott.png"
                width="23px"
                height="15.4px"
              />
              <img />
              <span style="font-size:12px;">{{titul.matrix[svl()][2].value}}</span>
            </b-button>
          </td>

        </tr>

      </tbody>
    </table>
    <hr>    
    </div>
    <div v-if="numpags > 1">    
    <popper 
        :options= popoptions>
        <div class="popper">
          {{pags.mtx[svl()][0].vl}}                         
        </div>                
        <a slot="reference" class="btn btn-outline-secondary" @click="pagini()">
           <font size="3" color="grey">⏮</font>
        </a>
    </popper>          
    <popper 
        :options= popoptions>
        <div class="popper">
          {{pags.mtx[svl()][1].vl}}                         
        </div>                
        <a slot="reference" class="btn btn-outline-secondary" @click="pagmenos()">
          <font size="3" color="grey">⏪</font>
        </a>
    </popper>
    <popper 
        :options= popoptions>
        <div class="popper">
          {{pags.mtx[svl()][2].vl}}                         
        </div>                
        <a slot="reference" class="btn btn-outline-secondary" @click="pagmas()">
          <font size="3" color="grey">⏩</font>
        </a>
    </popper>
    <popper 
        :options= popoptions>
        <div class="popper">
          {{pags.mtx[svl()][3].vl}}                         
        </div>                
        <a slot="reference" class="btn btn-outline-secondary" @click="pagfinal()">
          <font size="3" color="grey">⏭</font>
        </a>
    </popper>
    <br />
    <font size="2" color="grey">p. {{pagina}} / {{numpags}}</font>
    </div>
  </div>    
  </div>
</template>
<script>
// ** todo mejorar los ciclos de busqueda contadores y bucles sin fin o repetidos**************
import router from "../router";
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';
import { mapState, mapActions, mapGetters } from "vuex";
import ioptions from "@/components/options.json";
import axios from "axios";
// import the component
import Treeselect from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

export default {
  components: {
    'popper': Popper, 
    Treeselect },
  data() {
    return {
        popoptions: {
                      placement: 'bottom',
                      modifiers: { offset: { offset: '50px' } }
                    },
        popoptionsl: {
                      placement: 'left',
                      modifiers: { offset: { offset: '0,9px' } }
                    },
        popoptionsb: {
                      placement: 'bottom',
                      modifiers: { offset: { offset: '0,9px' } }
                    }, 
      vermas: false,     
      versaldo: true,
      veruno: 0,                                 
      fee: null,
      url: "https://blockexplorer.one/btc/testnet/address/",
      comprar: [],
      arr_mfmg: [],
      arr_mfmgsaldo: [],      
      comprarpag: [],
      newtx: {
        ID_OFERTA: "",
        COMPRADOR: "",
        VENDEDOR: "",
        FECHA_INIC: Date.now,
      },
      cabsi: false,
      mensaje: { color: "success", texto: "" },
      dismissSecs: 5,
      dismissCountDown: 0,
      // siguen variables para el treeselect
      estaonline: "🟢",
      online: false,
      lag: [],
      lagtt: [],      
      activos: [],
      contador: 0,
      contadorol: 0,
      limite: 5,
      pagina: 0,
      numregs: 1, // se asigna por lenght luego en cada llamada a listarofertas
      numpags: 0,
      value: ["$ USD-Dollar USA"],
      //options: [],
      options: ioptions,      
      titul: {
       matrix: [
                [{ value: 'Comprar ₮ USDT' }, { value: '_🔎  Seleccione o teclee aquí para filtrar según su preferencia de pago...' }, { value: 'COMPRAR' }],
                [{ value: 'Buy ₮ USDT' }, { value: '_🔎  Select or write here to filter according to your payment preference...' }, { value: 'BUY' }],
                [{ value: 'Comprar ₮ USDT' }, { value: '_🔎  Seleccioneu o escriviu aquí per filtrar segons la vostra preferència de pagament ...' }, { value: 'COMPRAR' }],
                [{ value: 'Compre ₮ USDT' }, { value: '_🔎  Selecione ou digite aqui para filtrar de acordo com sua preferência de pagamento ...' }, { value: 'COMPRE' }],                                               
               ]
      },
      tituls: {
       matrix: [
                [{ value: 'Vendedor ' }, { value: '🔌' }, { value: '🔗' }, { value: 'Detallles' }, { value: 'Medio de pago' }, { value: "Precio ₮ USDT" }, { value: 'Límites' }, { value: 'Proceso' }, { value: '🔐' }, { value: 'Multigarantia Multifirma:<br> 🟢 ESTABLECIDA, INTERCAMBIOS INMEDIATOS (5 minutos) <br> ⏳ A ESTABLECER (65 minutos, garantía 60 minutos 6 confirmaciones)' },{ value: 'Garantía ' },{ value: 'Disponibles' }],
                [{ value: 'Seller' }, { value: '🔌' }, { value: '🔗' }, { value: 'Details' }, { value: 'Payment method' }, { value: "Price ₮ USDT" }, { value: 'Limits' }, { value: 'Process' }, { value: '🔐' }, { value: 'Multifirma Multiguarantee:<br> 🟢 ESTABLISHED, IMMEDIATE EXCHANGES (5 minutes) <br> ⏳ A ESTABLECER (65 minutes, 60 minutes guarantee 6 confirmations)' },{ value: 'Guarantee ' },{ value: 'Available' }],
                [{ value: 'Venedor' }, { value: '🔌' }, { value: '🔗' }, { value: 'Detalls' }, { value: 'Mitjà de pagament' }, { value: "Preu ₮ USDT" }, { value: 'Límits' }, { value: 'Procés' }, { value: '🔐' }, { value: 'Multigarantia Multifirma:<br> 🟢 ESTABLERTA, INTERCANVIS IMMEDIATS (5 minuts) <br> ⏳ A ESTABLIR (65 minuts, garantia 60 minuts 6 confirmacions)' },{ value: 'Garantia ' },{ value: 'Disponibles' }],
                [{ value: 'Vendedor' },{ value: '🔌' }, { value: '🔗' },{ value: 'Detalhes' }, { value: 'Meio de pagamento' }, { value: "Preço ₮ USDT" },{ value: 'Limites' }, { value: 'Processo' }, { value: '🔐' }, { value: 'Multi-assinatura Multi-garantia: <br> 🟢 ESTABELECIDO, TROCAS IMEDIATAS (5 minutos) <br> ⏳ A SER ESTABELECIDO (65 minutos, garantia 60 minutos 6 confirmações)' },{ value: 'Garantia ' },{ value: 'Disponível' }],                                               
               ]
      },
      pags: {
       mtx: [
                [{ vl: 'Ir a la primera página' }, { vl: 'Retroceder una página' }, { vl: 'Avanzar una página' }, { vl: 'Ir a la última página' }],
                [{ vl: 'Go to the first page' }, { vl: 'Go back one page' }, { vl: 'Move forward one page' }, { vl: 'Go to the last page' }],
                [{ vl: 'Anar a la primera pàgina' }, { vl: 'Retrocedir una pàgina' }, { vl: 'Avançar una pàgina' }, { vl: 'Anar a la darrera pàgina' }],
                [{ vl: 'Vá para a primeira página' }, { vl: 'Voltar uma página' }, { vl: 'Avançar uma página' }, { vl: 'Vá para a última página' }],,                                               
               ]
      },
      f_txt: {
       mtx: [
                [{ vl: 'Nueva Tx de compra agregada con éxito' }, { vl: 'Seleccionada oferta para la compra' }],
                [{ vl: 'New purchase Tx added successfully' }, { vl: 'Selected offer for purchase' }],
                [{ vl: 'Nova Tx de compra agregada amb èxit' }, { vl: 'Seleccionada oferta per a la compra' }],
                [{ vl: 'Novo Tx de compra adicionado com sucesso' },{ vl: 'Oferta selecionada para compra' }],                                               
               ]
      },
      f_al: {
       mtx: [
                [{ vl: '¿ Seleccionar esta oferta ?' }, { vl: 'A tramitar en:' }, { vl: ' Capa Omni ₮ USDT' }, { vl: 'Dirección Tether del Vendedor: ' }, { vl: 'Detallles de la oferta: ' }, { vl: 'Medio de pago: ' }, { vl: "Precio (% del valor mercado de ₮) : " }, { vl: 'Moneda de pago : ' }, { vl: 'Cantidad USDT (Mínimo-Máximo): ' }, { vl: '✅ Seleccionar' }, { vl: '❌ Cancelar' }, { vl: '¡ Seleccionado !' }, { vl: 'Pasamos su petición a<img src="https://www.contobit.com/imagens/txtt.png" width="21.6px" height="15.2px">Tx, transacción de compra-venta.' }, { vl: 'Para procesar su petición a<img src="https://www.contobit.com/imagens/txtt.png" width="21.6px" height="15.2px">Tx (transacción de compra-venta), <a href="/Entrar">necesita Entrar primero</a>.' }, { vl: 'Cancelada selección de oferta para la compra' }, { vl: ' Red Lightning' }],

                [{ vl: 'Select this offer?' }, { vl: 'To be processed at:' }, { vl: ' Omni Layer ₮ USDT' }, { vl: 'Seller`s Tether Address: ' }, { vl: 'Offer details: ' }, { vl: 'Payment method: ' }, { vl: "Price (% of market value of ₮): " }, { vl: 'Payment currency : ' }, { vl: 'USDT Amount (Minimum-Maximum): ' }, { vl: '✅ Select' }, { vl: '❌ Cancel' }, { vl: 'Selected!' }, { vl: 'We pass your request to<img src="https://www.contobit.com/imagens/txtt.png" width="21.6px" height="15.2px">Tx, purchase-sale transaction.' }, { vl: 'To process your request to<img src="https://www.contobit.com/imagens/txtt.png" width="21.6px" height="15.2px">Tx (purchase-sale transaction), <a href="/Entrar">need to Enter first</a>.' }, { vl: 'Offer selection for purchase canceled' }, { vl: ' Lightning Network' }],

                [{ vl: 'Seleccionar aquesta oferta?' }, { vl: 'A tramitar a:' }, { vl: ' Capa Omni ₮ USDT' }, { vl: 'Adreça Tether del Venedor:' }, { vl: 'Detalls de l`oferta:' }, { vl: 'Mitjà de pagament: ' }, { vl: "Preu (% del valor del mercat ₮) : " }, { vl: 'Moneda de pagament : ' }, { vl: 'Quantitat USDT (Mínim-Màxim): ' }, { vl: '✅ Seleccionar' }, { vl: '❌ Cancel·lar' }, { vl: 'Seleccionat!' }, { vl: 'Passem la seva petició a<img src="https://www.contobit.com/imagens/txtt.png" width="21.6px" height="15.2px">Tx, transacció de compra-venda.' }, { vl: 'Per processar la seva petició a<img src="https://www.contobit.com/imagens/txtt.png" width="21.6px" height="15.2px">Tx (transacció de compravenda), <a href="/Entrar">necessita Entrada primer</a>.' }, { vl: 'Cancel·lada selecció d`oferta per a la compra' }, { vl: ' Xarxa Lightning' }],

                [{ vl: 'Selecione esta oferta?' }, { vl: 'Para ser processado em:' }, { vl: ' Capa Omni ₮ USDT' }, { vl: 'Endereço Tether do Vendedor:' }, { vl: 'Detalhes da oferta: ' }, { vl: 'Meio de pagamento: ' }, { vl: "Preço (% do valor de mercado de ₮) : " }, { vl: 'Moeda de pagamento: ' }, { vl: 'Quantidade USDT (mínimo-máximo): ' }, { vl: '✅ Selecionar' }, { vl: '❌ Cancelar' }, { vl: 'Selecionado!' }, { vl: 'Passamos sua solicitação para o<img src="https://www.contobit.com/imagens/txtt.png" width="21.6px" height="15.2px">Tx, transação de compra-venda.' }, { vl: 'Para processar sua solicitação de<img src="https://www.contobit.com/imagens/txtt.png" width="21.6px" height="15.2px">Tx (transação de compra-venda), <a href="/Entrar">precisa de Entrar primeiro</a>.' }, { vl: 'Seleção de oferta para compra cancelada' }, { vl: ' Rede Lightning' }],,                                             
               ]
      },
      f_listOff: {
       mtx: [
                [{ vl: 'Se muestran ofertas disponibles para la selección ' }, { vl: 'Actualmente no hay ofertas con saldo suficiente para la selección ' }],
                [{ vl: 'Offers available for selection are displayed ' }, { vl: 'There are currently no offers with sufficient balance for the selection ' }],
                [{ vl: 'Es mostren ofertes disponibles per a la selecció ' }, { vl: 'Actualment no hi ha ofertes amb saldo suficient per a la selecció ' }],
                [{ vl: 'As ofertas disponíveis para seleção são exibidas ' },{ vl: 'Atualmente não há ofertas com saldo suficiente para a seleção ' }],                                               
               ]
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
      return value.substr(0, 7);
    },
    redu30(value) {
      return value.substr(0, 30);
    },    
  },
  computed: {
    ...mapState(["token"]),
    ...mapGetters([
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
  mounted() {
    //console.log('hola mundo desde mounted')
    this.listarOfertas();  
  },
  created() {
    this.leerToken();
    this.listarOfertas();
    this.calcmineros();
  },

  methods: {
    ...mapActions([
      "leerToken",     
      "syncUpdateValUsdt",      
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
               console.log(e.response);
          });                
    },  
    agregarTx(item) {
      // console.log('en alta tx...'+item.NOMBREUSUARIO);

      // comprobar con cabecera token
      //  cabecera token
      let config = {
        headers: {
          token: this.token,
        },
      };
      this.newtx.ID_OFERTA = item._id;
      this.newtx.COMPRADOR = this.nomuser;
      this.newtx.CADENARED = item.CADENARED;
      this.newtx.VENDEDOR = item.NOMBREUSUARIO;
      this.newtx.FECHA_INIC = Date.now;
      this.newtx.MONEDAOFERTA = item.MONEDAOFERTA;

              this.axios
                .post("/nueva-transac", this.newtx, config)
                .then((res) => {
                  //  console.log(res.data);
                  this.mensaje.color = "success";
                  this.mensaje.texto = this.f_txt.mtx[this.svl()][0].vl;                   
                  this.showAlert();
                  router.push({ name: "Txtt" });                                                 
                })
                .catch((e) => {
                  console.log(e.response);
                });

    },
    round8(num) {
      return +(Math.round(num + "e+8") + "e-8");
    },
    alerta(item) {
      this.mensaje.color = "success";
      this.mensaje.texto = this.f_txt.mtx[this.svl()][1].vl;      
      this.showAlert();

      // leer id, address, emails de comprador y vendedor
      let adr = item.NOMBREUSUARIO; //vendedor de la oferta escogida
      let addressB64;
      addressB64 = Buffer.from(adr).toString("base64");
      let adr2 = this.nomuser;
      let address2B64;
      address2B64 = Buffer.from(adr2).toString("base64");

    this.axios
        .get(`/seekUser/${addressB64}`)
        .then((res) => { //    VENDEDOR
          this.newtx.ID_VENDEDOR = res.data._id;
          this.newtx.EMAIL_VENDEDOR = res.data.EMAILUSUARIO;
          
    this.axios
        .get(`/seekUser/${address2B64}`)
        .then((res) => { //     COMPRADOR
          this.newtx.ID_COMPRADOR = res.data._id;
          this.newtx.EMAIL_COMPRADOR = res.data.EMAILUSUARIO;

           
      // filtro del limite arriba si saldo menor
      if ( ((this.getsaldo(item.NOMBREUSUARIO))-this.round8((this.getsaldo(item.NOMBREUSUARIO))*0.0025)-this.fee) < item.LIMITEARRIBA ) {
      item.LIMITEARRIBA = this.round8(((this.getsaldo(item.NOMBREUSUARIO))-(this.getsaldo(item.NOMBREUSUARIO))*0.0025)-this.fee);
      //console.log('aqui es menor y debe mostrar menos en limite arriba..'+item.LIMITEARRIBA)
      }
      if (item.CADENARED === '₮') { // alerts para on chain

      Swal.fire({
        title: this.f_al.mtx[this.svl()][0].vl,
        html:
          "<div><img align='bottom' src='https://www.contobit.com/imagens/carritott.png' width='50px' height='30.8px'/><img /><br></div>" +        
          "<div align='left' style='font-size:14'><b>"+this.f_al.mtx[this.svl()][1].vl+"</b><br></div>" +
          "<div style='color:Black'><b><i>" +
          "⛓️" +
          "</b></i><font color=seagreen> "+this.f_al.mtx[this.svl()][2].vl+" </font></div>" +
          "<br>" +        
          "<div align='left' style='font-size:14'><b>"+this.f_al.mtx[this.svl()][3].vl+"</b><br></div>" +
          "<div style='color:seagreen'>" +
          item.NOMBREUSUARIO +
          "</div>" +
          "<br>" +
          "<div align='left' style='font-size:14'><b>"+this.f_al.mtx[this.svl()][4].vl+"</b><br></div>" +
          "<div style='color:seagreen'>" +
          item.FORMADEPAGO +
          "</div>" +
          "<br>" +
          "<div align='left' style='font-size:14'><b>"+this.f_al.mtx[this.svl()][5].vl+" </b></div>" +
          "<div style='color:seagreen'>" +
          item.NOMBANCO +
          "</div>" +
          "<br>" +
          "<div align='left' style='font-size:14'><b>"+this.f_al.mtx[this.svl()][6].vl+" </b></div>" +
          "<div style='color:seagreen'>" +
          item.PRECIOOFERTA +
          " % " +
          "</div>" +
          "<br>" +
          "<div align='left' style='font-size:14'><b>"+this.f_al.mtx[this.svl()][7].vl+" </b></div>" +
          "<div style='color:seagreen'>" +
          item.MONEDAOFERTA +
          "</div>" +
          "<br>" +
          "<div align='left' style='font-size:14'><b>"+this.f_al.mtx[this.svl()][8].vl+" </b></div>" +
          "<div style='color:seagreen'>" +
          item.LIMITEABAJO +
          " USDT - " +
          item.LIMITEARRIBA +
          " USDT" +
          "</div>",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "seagreen",
        cancelButtonColor: "tomato",
        confirmButtonText: this.f_al.mtx[this.svl()][9].vl,
        cancelButtonText: this.f_al.mtx[this.svl()][10].vl,
      }).then((result) => {
        if (result.value) {
          if (this.estaActivo) {
            Swal.fire(
              this.f_al.mtx[this.svl()][11].vl,
              this.f_al.mtx[this.svl()][12].vl,
              "success"
            );
            // sigue grabar la tx nueva
            this.agregarTx(item);
          } else {
            Swal.fire(
              this.f_al.mtx[this.svl()][11].vl,
              this.f_al.mtx[this.svl()][13].vl,
              "warning"
            );
               this.newtx.ID_VENDEDOR = "";
               this.newtx.EMAIL_VENDEDOR = "";
               this.newtx.ID_COMPRADOR = "";
               this.newtx.EMAIL_COMPRADOR = "";             
          }
             
        } else {
               this.mensaje.color = "danger";
               this.mensaje.texto = this.f_al.mtx[this.svl()][14].vl;             
               this.showAlert();
               this.newtx.ID_VENDEDOR = "";
               this.newtx.EMAIL_VENDEDOR = "";
               this.newtx.ID_COMPRADOR = "";
               this.newtx.EMAIL_COMPRADOR = "";                 
        }
      });
      }

    })
    .catch((e) => {});          

    })
    .catch((e) => {});      

    },
    async getsalgar(address) {
      //console.log("address para salgar..." + address);
      if (address !== null & address !== '⏳') {
          let adr = address;
          let addressB64;
          addressB64 = Buffer.from(adr).toString("base64");
       try {          
          let response = await this.axios
            .get(`/rpc-getsaldott/${addressB64}`)
              let salgar = response.data.balance;
              //console.log("salgar..." + salgar);
              salgar = parseFloat(salgar);             
              if (isNaN(salgar) | salgar === null) {
                salgar = 0;
              }
               //console.log('**saldo**->'+address+salgar);              
                  this.arr_mfmgsaldo.push(address);
                  this.arr_mfmgsaldo.push(salgar); 
               // console.log('**array saldos**->'+this.arr_mfmgsaldo);      
            } catch (error) {console.log(error); }
      }     
    },     
    async getmfmg(vendedor) {

                  let adr = vendedor; 
                  let addressB64;
                  addressB64 = Buffer.from(adr).toString("base64");     
          try {   
                  let response = await this.axios
                  .get(`/seekUser/${addressB64}`)
                  let dirmulti = response.data.DIRMULTIFIRMA_FIANZALN;
                  this.arr_mfmg.push(vendedor);                     
                  this.arr_mfmg.push(dirmulti);
                  this.getsalgar(dirmulti);              
                  
              } catch (error) {console.log("error"); }           
    },   
    seekmfmg (vendedor) {    
      let index_found = this.arr_mfmg.findIndex((element) => element === vendedor);
      return this.arr_mfmg[index_found + 1];           
    },
    seekmfmgsaldo (vendedor) { 
      // console.log('**array saldos**->'+this.arr_mfmgsaldo);  
      let index_found = this.arr_mfmgsaldo.findIndex((element) => element === vendedor);
      // console.log(index_found);
      if (index_found < 0 ) return 0
      return this.arr_mfmgsaldo[index_found + 1];           
    },     
    listarOfertas() {

      if (this.value.length > 0) {
       // this.getlag(); //se carga tarde pero reasignamos para proxima consulta
        this.cabsi = true;
        this.contador = 0;
        this.contadorol = 0;

        this.activos = [];
        this.activos.length = 0;
        this.numpags = 0;
        // console.log('valor de this.value...'+this.value);
        let filtros = this.value;
        this.axios
          .get(`/ofusban-vista/${filtros}`)
          .then((res) => {
            //  console.log(res.data);
            this.comprar = res.data;         
            // hay que quitar del array los que no tienen saldo > 0.00000001
            let comprars = this.comprar;
            // console.log(comprars.length);

            // filtramos el array solo con los que son tt ₮ no ₿ o rayos
            for (var i = 0; i < comprars.length; i++) {
              if ( comprars[i].CADENARED  === '₮' & this.getsaldo(comprars[i].NOMBREUSUARIO) > comprars[i].LIMITEABAJO ) {
                // console.log('NO eliminar...'+comprars[i].NOMBREUSUARIO+'..saldo...'+this.getsaldo(comprars[i].NOMBREUSUARIO))
                // console.log('NO eliminar...'+comprars[i].NOMBREUSUARIO+'..LIMITEABAJO...'+comprars[i].LIMITEABAJO);
              } else {
                //   console.log('SI eliminar...'+comprars[i].NOMBREUSUARIO+'..saldo...'+this.getsaldo(comprars[i].NOMBREUSUARIO))
                comprars.splice(i, 1);
                i = i - 1;
              }
            }
            this.comprar = comprars;

            for (var i = 0; i < comprars.length; i++) {                    
                if (this.getsaldo(comprars[i].NOMBREUSUARIO) > 0.00000001) {
                    //   console.log('NO eliminar...'+comprars[i].NOMBREUSUARIO+'..saldo...'+this.getsaldo(comprars[i].NOMBREUSUARIO))
                  } else {
                    //   console.log('SI eliminar...'+comprars[i].NOMBREUSUARIO+'..saldo...'+this.getsaldo(comprars[i].NOMBREUSUARIO))
                    comprars.splice(i, 1);
                    i = i - 1;
                  }                   
            } // cierre del for
            this.comprar = comprars;

            //console.log(this.comprar.length);
            this.numregs = this.comprar.length;

            // llenamos arrays de las address de garantia ***********
            for (var i = 0; i < this.numregs; i++) {
            this.getmfmg(this.comprar[i].NOMBREUSUARIO)
            }             

            // montamos las paginas de 10 x pag
            let npInt = parseInt(this.numregs / 10);
            let npFlt = parseFloat(this.numregs / 10);
            if (npFlt > npInt) {
              this.numpags = npInt + 1;
            } else {
              this.numpags = npInt;
            }
            // ahora segun la pagina en pagina filtrar el this.comprar llenamos 10 regs por pag
            if (this.numpags > 0) {
              this.mensaje.color = "success";
              this.mensaje.texto = this.f_listOff.mtx[this.svl()][0].vl+this.value;                    
              this.showAlert();
              this.pagina = 1; // hay paginas llenamos la primar con 10 regs
              let comprars = [];
              for (var i = 0; i < 10; i++) {
               if (this.comprar[i] !== undefined) comprars.push(this.comprar[i]);
                //console.log(comprars)
              }
              this.comprarpag = comprars;
            } else {              
              this.pagina = 0;
              this.mensaje.color = "danger";
              this.mensaje.texto = this.f_listOff.mtx[this.svl()][1].vl+this.value;               
              this.showAlert();
              this.value = [];
              this.value.length = 0;         
            }

            this.contador = this.contador + 1;
            
          })
          .catch((e) => {
            //  console.log(e.response);
          });
          
      } else {
        this.cabsi = false;
        this.comprar = [];
        this.comprar.length = 0;
        this.numpags = 0;
        this.comprarpag = [];
        this.comprarpag.length = 0;       
      }
      
    },
    pagmas() {
      this.pagina = this.pagina + 1;
      if (this.pagina > this.numpags) this.pagina = this.numpags;
      let comprars = [];
      comprars.length = 0;
      for (var i = 0; i < this.pagina * 10; i++) {
        if (i > this.pagina * 10 - 11) {
          if (this.comprar[i] !== undefined) comprars.push(this.comprar[i]);
          //  console.log(comprars);
        }
      }
      this.comprarpag = comprars;
    },
    pagmenos() {
      this.pagina = this.pagina - 1;
      if (this.pagina < 1) this.pagina = 1;
      let comprars = [];
      comprars.length = 0;
      for (var i = 0; i < this.pagina * 10; i++) {
        if (i > this.pagina * 10 - 11) {
          if (this.comprar[i] !== undefined) comprars.push(this.comprar[i]);
          // console.log(comprars);
        }
      }
      this.comprarpag = comprars;
    },
    pagini() {
      this.pagina = 1;
      let comprars = [];
      comprars.length = 0;
      for (var i = 0; i < this.pagina * 10; i++) {
        if (i > this.pagina * 10 - 11) {
          if (this.comprar[i] !== undefined) comprars.push(this.comprar[i]);
          // console.log(comprars);
        }
      }
      this.comprarpag = comprars;      
    },
    pagfinal() {
      this.pagina = this.numpags;
      let comprars = [];
      comprars.length = 0;
      for (var i = 0; i < this.pagina * 10; i++) {
        if (i > this.pagina * 10 - 11) {
          if (this.comprar[i] !== undefined) comprars.push(this.comprar[i]);
          // console.log(comprars);
        }
      }
      this.comprarpag = comprars;      
    },
    getlag() {
      // llenamos lag con listaddressgroupings
      if (this.contador < this.numregs) {
        this.axios
          .get(`/rpc-getlag/`)
          .then((res) => {
            this.lag = res.data;
            // console.log(this.lag);
          })
          .catch((e) => {
            //   console.log(e.response);
          });
        this.contador = this.contador + 1;
      }
    },
    omni() {
      // llenamos lag con listaddressgroupings ****falta adaptar**
        this.axios
          .get(`/omni/`) // muestra properties de protocolo omni
          .then((res) => {
           // this.lag = res.data;
           //  console.log(res.data);
          })
          .catch((e) => {
            //   console.log(e.response);
          });
    },    
    getsaldo(address) { 
      let index_found = this.lagtt.findIndex((element) => element === address);
     // console.log('**found indice**->'+index_found+'**saldo**->'+this.lagtt[index_found+1]);
      if (index_found > -1) {       
      return this.lagtt[index_found + 1];
      } else {

        let adr = address;
        let addressB64;
        addressB64 = Buffer.from(adr).toString("base64");
        this.axios
          .get(`/rpc-getsaldott/${addressB64}`)
          .then((res) => {

      //  console.log('**found indice**-> -1 entra en el axios');
        this.lagtt.push(address);
        let balance = 0;

            balance = res.data.balance;
            balance = parseFloat(balance);
            if (isNaN(balance)) {
              balance = 0;
             //console.log("isNaN.....balance = 0"); 
            }
         //    console.log("address.." + address +"respu peticion en getsaldo.." + balance);
        this.lagtt.push(balance);
        //console.log("lagtt.." + this.lagtt);
        let index_found = this.lagtt.findIndex((element) => element === address);
           return this.lagtt[index_found + 1];
           // return balance;
          })
          .catch((e) => {});

      }          

    },
    checkonline(address) {
      if (this.contadorol < this.numregs) {
        let adr = address;
        let addressB64;
        addressB64 = Buffer.from(adr).toString("base64");
        this.axios
          .get(`/seekUser/${addressB64}`)
          .then((res) => {
            //    console.log(res.data.NOMBREUSUARIO+'...'+res.data.activo);
            this.activos.push(res.data.NOMBREUSUARIO);
            this.activos.push(res.data.activo);
          })
          .catch((e) => {});
        this.contadorol = this.contadorol + 1;
        //  console.log('muestra this.activos...'+this.activos);
      }
      return this.activos[
        this.activos.findIndex((element) => element === address) + 1
      ];
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
/*
.vue-treeselect__menu {
  color: orange;
  background-color: yellow;
  font-size:15px;
}
label.vue-treeselect__label {
  color: pink;
}
*/
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
#table {
  margin-top: 30px;
} 
$breakpoint: 680px;
#table {
  margin-top: 0px;
  table{
    min-width: 300px;
    width: 100%;
    height: fit-content;
    overflow-y: scroll;
    border-collapse: collapse;

    tr {
      td {
        padding: 10px;
      }
    }
    .bold {
      border-right: none;
      border-left: none;
      background: #ddd;
      border-bottom: 1px solid #c2c2c2;
      border: none;
      td {
        border: none;
        color: #fff;
        border: none;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }

  .table-hover > tbody > tr:hover {
    background-color: rgb(238, 253, 247);
  }
  
  #treeselid {
   max-width:500px;
   margin:auto;
  }  
  
  @media (max-width: $breakpoint) {
      #treeselid {
        max-width:250px;
        font-size:14px;
        //color: blue;
      }  

      thead:first-of-type {
        display: none;
      }
      tr {
        border: 1px solid rgba(78, 192, 55, 0.165);
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
            content: attr(data-th)"  ";
            font-weight: bold;
            display: inline-block;
            @media (min-width: $breakpoint) {
              display: none;
            }
          }
        }
      }  
  }

}  
</style>
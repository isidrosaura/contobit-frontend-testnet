<template>
  <div class="container">
   <div v-if="this.notas.length === 0 " >
     <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="mensaje.color"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
     >{{mensaje.texto}}</b-alert>
   </div>
   <div v-if="notas.length > 0 " >
      <h4 style='color:rgb(80, 80, 80)'><font-awesome-icon :icon="['far', 'bell']" />{{titul.matrix[svl()][0].value}}</h4>    
     <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="mensaje.color"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
     >{{mensaje.texto}}</b-alert>         
    <table class="table table-hover">
      <tbody>
        <tr v-for="(item, index) in notas" :key="index">
          <td v-if="selectedlang === 'ESP'">▫️<span style="color:grey;font-size:12px;">{{item.date | fecha_spa }}</span><br>{{item.descripcion}}</td>
          <td v-if="selectedlang === 'ENG'">▫️{{item.date | fecha_eng }}<br>{{item.descripcion}}</td>
          <td v-if="selectedlang === 'CAT'">▫️{{item.date | fecha_cat }}<br>{{item.descripcion}} </td>
          <td v-if="selectedlang === 'PORT'">▫️{{item.date | fecha_port }}<br>{{item.descripcion}}</td>
          <td>
          <b-button class="btn-danger btn-sm mx-2" style="margin-top:10px;" @click="eliminarNota(item._id)">{{titul.matrix[svl()][4].value}} <font-awesome-icon icon="trash"/></b-button>
          </td>                                        
        </tr>
      </tbody>
    </table>   
    <hr>
   </div>

  </div>  
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
export default {
  data() {
    return {
      notas: [],
      mensaje: {color: 'info', texto: ''},
      dismissSecs: 5,
      dismissCountDown: 0,
      titul: {
       matrix: [
                [{ value: ' ¡ Mis alertas y notificaciones !' }, { value: 'Alertas y notificaciones' }, { value: 'Fecha' }, { value: 'Acción' }, { value: 'Visto' }],
                [{ value: ' My alerts and notifications!' }, { value: 'Alerts and notifications' }, { value: 'Date' }, { value: 'Action' }, { value: 'Viewed' }],
                [{ value: ' Les meves alertes i notificacions!' }, { value: 'Alertes i notificacions' }, { value: 'Data' }, { value: 'Acció' }, { value: 'Vist' }],
                [{ value: ' Meus alertas e notificações!' }, { value: 'Alertas e notificações' }, { value: 'Encontro' }, { value: 'Açao' }, { value: 'Visto' }],                                               
               ]
      },      
      f_fnes: {
       matrix: [
                [{ value: 'Se muestran alertas' }, { value: 'No tiene alertas nuevas por el momento' }, { value: 'Alerta ya visualizada eliminada con éxito' }],
                [{ value: 'Alerts are displayed' }, { value: 'You have no new alerts at the moment' }, { value: 'Alert already displayed successfully removed' }],
                [{ value: 'Es mostren alertes' }, { value: 'No té alertes noves de moment' }, { value: 'Alerta ja visualitzada eliminada amb èxit' }],
                [{ value: 'Alertas são exibidos' },{ value: 'Você não tem novos alertas no momento' }, { value: 'Alerta já exibido removido com sucesso' }],                                               
               ]
      },      
    };
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
    }            

  },
  computed: {
    ...mapGetters(["estaActivo",
      "selectedlang"]),
    ...mapState(["token"])      
  },    
  created() {
   this.listarNotas(); 
  },
  methods: {
    ...mapMutations(["obtenerUsuario"]),
    ...mapActions(["guardarUsuario", "leerToken", "cerrarSesion",
      "syncUpdateLang","syncUpdateNumAlerts"]),
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
    listarNotas(){
      let config = {
        headers: {
          token: this.token
        }
      }
      this.axios.get('/letusuar', config)
        .then(res => {
         // console.log(res.data);
          this.notas = res.data;
          if (this.notas.length  > 0) {
          this.mensaje.color = 'success';
          this.mensaje.texto = this.f_fnes.matrix[this.svl()][0].value;
           
          this.showAlert();
          } else {
          this.syncUpdateNumAlerts(this.notas.length);  
          this.mensaje.texto = this.f_fnes.matrix[this.svl()][1].value;            
          this.showAlert();          
          }
        })
        .catch(e => {
          console.log(e.response);
        })
    },
    eliminarNota(id){
       // console.log(id);
        this.axios.delete(`/nota/${id}`)
          .then(res => {
            const index = this.notas.findIndex(item => item._id === res.data._id);
            this.notas.splice(index, 1);
            this.mensaje.color = 'success';
            this.mensaje.texto = this.f_fnes.matrix[this.svl()][2].value;              
            this.showAlert();
            this.syncUpdateNumAlerts(this.notas.length);
            if (this.notas.length === 0) window.history.back();
          })
          .catch(e => {
          console.log(e.response);

          })
    },    
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },    
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
    padding: 0px;
}

.table-hover > tbody > tr:hover {
  background-color: rgb(248, 248, 231);
}


$breakpoint: 480px;
@media (max-width: $breakpoint) {

.container {
  max-width: 360px;
}          
           
tr {
        border: 1px solid rgb(211, 211, 211);
        td {
          display: block;
          border: none;
          font-size:12px;
          &:first-child {
            padding-top: 10px;
          }
          &:last-child {
            padding-bottom: 10px;
          }
          &:before {
            content: attr(data-th)"";
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

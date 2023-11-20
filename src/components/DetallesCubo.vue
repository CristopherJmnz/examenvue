<template>
  <div class="container">
    <div class="card" style="width:18rem" v-if="statusCubo">
      <img :src="cubo.imagen" alt="" class="img-top">
      <div class="card-body">
        <h3 class="card-title">{{cubo.nombre}}</h3>
        <p class="card-text">{{cubo.precio}} €</p>
        <p class="card-text">Valoracion: {{cubo.valoracion}}</p>
        <p class="card-text">Modelo: {{cubo.modelo}}</p>
        <p class="card-text">Color: {{cubo.color}}</p>
      </div>
    </div>
    <div v-if="comentarios.length>0">
        <div>
            <h2>Comentarios</h2>
            <div v-for="coment in comentarios" :key="coment">{{coment.comentario}}</div>
        </div>
    </div>
  </div>
</template>

<script>
import CubosService from "./../services/CubosService";
const cubosService = new CubosService();

export default {
    name:"DetallesCubo",
    data(){
        return{
            cubo:null,
            comentarios:[],
            statusCubo:false,
            statusComentarios:false
        }
    },
    methods:{
        loadCubo(){
            cubosService.findCuboById(this.$route.params.id).then(result=>{
                this.cubo=result;
                this.statusCubo=true
            })
        },
        loadComentariosCubo(){
            cubosService.getComentariosCubo(this.$route.params.id).then(result=>{
                this.comentarios=result;
                this.statusComentarios=true
            })
        },
    },
    mounted(){
        this.loadCubo();
        this.loadComentariosCubo();
    }
}
</script>

<style>

</style>
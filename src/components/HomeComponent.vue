<template>
  <div class="container" v-if="status==true">
    <div class="card" style="width:18rem" v-for="cubo in cubos" :key="cubo">
      <img :src="cubo.imagen" alt="" class="img-top">
      <div class="card-body">
        <h3 class="card-title">{{cubo.nombre}}</h3>
        <p class="card-text">{{cubo.precio}} €</p>
        <p class="card-text">Valoracion: {{cubo.valoracion}}</p>
        <router-link class="btn btn-danger" :to="'/detalles/' + cubo.idCubo">Ver</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CubosService from "./../services/CubosService";
const cubosService = new CubosService();
export default {
  name:"HomeComponent",
  data(){
    return{
      cubos:[],
      status:false
    }
  },
  methods:{
    loadCubos(){
      cubosService.getAllCubos().then(result=>{
        this.cubos=result;
        this.status=true;
      })
    }
  },
  mounted(){
    this.loadCubos();
  }
}
</script>

<style>

</style>
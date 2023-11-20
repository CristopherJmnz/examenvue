<template>
  <div v-if="status">
    <h1>Hola, {{user.nombre}}</h1>
    <h2>Detalles</h2>
    <p>Email: {{user.email}}</p>
    <button @click="historialCompras()" class="btn btn-primary">Ver Historial de Compras</button>
    <ul v-if="statusCompras">
      <li v-for="pedido in pedidos" :key="pedido">IdPedido: {{pedido.idPedido}} , Fecha: {{pedido.fechaPedido}}</li>
    </ul>
    <router-link to="/comprar" class="btn btn-danger">Realizar compra</router-link>
  </div>
</template>

<script>
import UsuarioService from "./../services/UsuarioService";
const usuarioService = new UsuarioService();
export default {
  name: "PerfilComponent",
  data() {
    return {
      user: null,
      status:false,
      pedidos:[],
      statusCompras:false
    };
  },
  methods: {
    findUser() {
      usuarioService.getPerfilUser().then((result) => {
        this.user=result;
        this.status=true;
      });
    },
    historialCompras(){
      usuarioService.getCompras().then(result=>{
        this.pedidos=result;
        this.statusCompras=true;
      })
    }
  },
  mounted(){
    this.findUser();
  }
};
</script>

<style>
</style>
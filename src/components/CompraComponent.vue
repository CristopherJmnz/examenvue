<template>
  <div>
    <form v-on:submit.prevent="realizarPedido()" class="w-50 mx-auto mt-5">
      <label>Cubos</label>
      <select class="form-control" name="cubo" id="cubo" v-model="idCubo" v-if="status">
        <option v-for="cubo in cubos" :key="cubo" :value="cubo.idCubo">{{cubo.nombre}}</option>
      </select>
      <button type="submit" class="btn btn-primary">Comprar</button>
    </form>
  </div>
</template>

<script>
import CubosService from "./../services/CubosService";
const cubosService = new CubosService();
import UsuarioService from "./../services/UsuarioService";
const usuarioService = new UsuarioService();
export default {
  name: "CompraComponent",
  data() {
    return {
      idCubo: "",
      cubos: [],
      status: false,
    };
  },
  methods: {
    realizarPedido() {
      usuarioService.realizarPedido(this.idCubo).then(() => {
        this.$router.push("/perfil")
      });
    },
    loadCubos() {
      cubosService.getAllCubos().then((result) => {
        this.cubos = result;
        this.status = true;
      });
    },
  },
  mounted() {
    this.loadCubos();
  },
};
</script>

<style>
</style>
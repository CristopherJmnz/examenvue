<template>
  <div v-if="status">
    <h1>Hola, {{user.nombre}}</h1>
    <h2>Detalles</h2>
    <p>Email: {{user.email}}</p>
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
      status:false
    };
  },
  methods: {
    findUser() {
      usuarioService.getPerfilUser().then((result) => {
        this.user=result;
        this.status=true;
      });
    },
  },
  mounted(){
    this.findUser();
  }
};
</script>

<style>
</style>
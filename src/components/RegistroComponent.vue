<template>
  <div>
    <form v-on:submit.prevent="registro()" class="w-50 mx-auto mt-5">
      <label>Nombre</label>
      <input
        class="form-control"
        type="text"
        name="nombre"
        id="nombre"
        v-model="user.nombre"
      />
      <label>Email</label>
      <input
        class="form-control"
        type="text"
        name="email"
        id="email"
        v-model="user.email"
      />
      <label>Contraseña</label>
      <input
        class="form-control"
        type="pass"
        name="pass"
        id="pass"
        v-model="user.pass"
      />
      <button type="submit" class="btn btn-primary mt-3">Iniciar Sesión</button>
    </form>
  </div>
</template>

<script>
import UsuarioService from "./../services/UsuarioService";
const usuarioService = new UsuarioService();
export default {
  name: "RegistroComponent",
  data() {
    return {
      user: {
        idUsuario: 0,
        pass: "",
        email: "",
        nombre: "",
      },
    };
  },
  methods: {
    registro() {
      usuarioService.registroUser(this.user).then((result) => {
        console.log(result);
        alert("Registro correcto")
        this.$router.push("/login")
      });
    },
  },
  mounted(){
    if(localStorage.getItem("token")){
      this.$router.push("/perfil")
      alert("Ya hay una sesion iniciada")
    }
  }
};
</script>

<style>
</style>
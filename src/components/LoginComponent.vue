<template>
  <div>
    <form v-on:submit.prevent="login()" class="w-50 mx-auto mt-5">
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
        type="password"
        name="password"
        id="password"
        v-model="user.password"
      />
      <button type="submit" class="btn btn-primary mt-3">Iniciar Sesión</button>
      <router-link to="/registro">No tienes una cuenta? Registrate</router-link>
    </form>
  </div>
</template>

<script>
import UsuarioService from "./../services/UsuarioService";
const usuarioService = new UsuarioService();
export default {
  name: "LoginComponent",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      usuarioService.login(this.user).then((result) => {
        let token = JSON.stringify(result);
        localStorage.setItem("token", token);
        this.$router.push("/perfil");
      });
    },
  },
  mounted(){
    if(localStorage.getItem("token")){
      this.$router.push("/perfil")
    }
  }
};
</script>

<style>
</style>
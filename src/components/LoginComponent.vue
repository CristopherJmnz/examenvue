<template>
  <div>
    <form v-on:submit.prevent="login()">
      <label>Email</label>
      <input type="text" name="email" id="email" v-model="user.email" />
      <label>Contraseña</label>
      <input
        type="password"
        name="password"
        id="password"
        v-model="user.password"
      />
      <button type="submit">Iniciar Sesión</button>
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
        let token=JSON.stringify(result);
        localStorage.setItem("token",token);
        this.$router.push("/perfil")
      });
    },
  },
};
</script>

<style>
</style>
<template>
  <nav class="navbar navbar-expand-lg bg-primary " data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" to="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/create">Crear coche</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Desplegable
            </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="#">Action</router-link></li>
              <li><router-link class="dropdown-item" to="#">Another action</router-link></li>
              <li><router-link class="dropdown-item" to="#">Something else here</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    name:"MenuComponent"
};
</script>

<style>
</style>

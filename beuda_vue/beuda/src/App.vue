<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="sm" type="dark">
        <b-navbar-brand href="index.html"><img src="assets/logo.png" alt="Beuda" height="27px"/></b-navbar-brand>

        <b-navbar-toggle target="collapsibleNavbar"></b-navbar-toggle>

        <b-collapse id="collapsibleNavbar" is-nav>
          <b-navbar-nav>
            <b-nav-item class="ml-auto"><router-link to="/">Home</router-link></b-nav-item>
            <b-nav-item class="ml-auto"><router-link to="/about">About</router-link></b-nav-item>
            <b-nav-item class="ml-auto"><router-link to="/vocabulary">Vocabulario</router-link></b-nav-item>
            <b-nav-item class="ml-auto" href="../index.html">TP's</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item id="menuLogIn">
              <button
                class="btn btn-outline-success"
                type="button"
                data-toggle="modal"
                data-target="#logIn">
                Acceder <i class="fa fa-sign-in-alt"></i>
              </button>
            </b-nav-item>
            <b-nav-item-dropdown class="d-none" id="menuLoggedIn">
              <b-dropdown-item
                data-toggle="dropdown"
                href="#"
                id="menuUsername"></b-dropdown-item>
              <b-dropdown-item href="#">Perfil</b-dropdown-item>
              <b-dropdown-item href="#" onclick="logOut()"
                >Cerrar Sesion</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>

        <router-view />
      </b-navbar>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

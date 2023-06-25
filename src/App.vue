<template>
  <div class="header">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>VUEJS JSON PLACEHOLDER</p>
  </div>
  <nav>
    <div class="router">
      <router-link to="/Post-Listing">POST</router-link>
      <router-link to="/about-us">ABOUT US</router-link>
    </div>
    <div class="">
      <router-link to="/add-post">ADD NEW POST</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  width: 80%;
  margin: auto;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: rgba(9, 28, 49, 0.945);
}
.header {
  display: flex;
  width: 100%;
  padding-top: 10px;
}

img {
  max-width: 40px;
  max-height: 40px;
}

nav {
  background-color: #3a3b46;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
nav .router {
  display: flex;
}
nav a {
  display: flex;
  color: white;
  text-decoration: none;
  margin-right: 20px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

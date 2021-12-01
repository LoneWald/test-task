<template>
  <div id="header">
    <router-link to="/">Home</router-link>
    <label> | </label>
    <router-link to="/SearchTickets">SearchTickets</router-link>
  </div>
</template>

<style scoped>

#header {
  padding: 30px;
  background-color: #662e1c;
  text-align: center;
}

#header a {
  font-weight: bold;
  color: #808080;
  font-size: 22px;
}

#header label {
  font-weight: bold;
  color: #000000;
  font-size: 22px;
}

#header a.router-link-exact-active {
  color: #c9a66b;
}
</style>
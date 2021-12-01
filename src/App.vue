<template>
  <div class="wrapper">
    <Header />
    <div class="content">
      <div id="app">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
  name: "app",
  components: {
    Footer,
    Header,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html{
  overflow-y: scroll;
  background-color: #ebdcb2;
  height: 100%;
}
body {
  background-color: #ebdcb2;
  height: 100%;
}
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.content {
  flex: 1 0 auto;
  min-width: 1000px;
  max-width: 1200px;
  margin: auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

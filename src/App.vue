<template>
  <div id="app">
    <Nav />
    <router-view>
      <About />
      <Experience />
      <Academic />
      <Skills />
    </router-view>
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import About from "./components/About.vue";
import Experience from "./components/Experience.vue";
import Academic from "./components/Academic.vue";
import Skills from "./components/Skills.vue";

export default {
  name: "app",
  components: {
    Nav,
    About,
    Experience,
    Academic,
    Skills
  }
};
</script>

<style>
@import "./assets/css/style.css";
</style>

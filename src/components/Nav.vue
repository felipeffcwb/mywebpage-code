<template>
  <nav class="navbar navbar-expand-lg fixed-top" id="sideNav" style="background-color:#8d2b3e;">
    <label class="navbar-brand js-scroll-trigger text-white" to="/About">
      <span class="d-block d-lg-none">Felipe Developer</span>
      <span class="d-none d-lg-block">
        <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="../assets/img/pp.jpg" alt />
      </span>
    </label>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon">
        <font-awesome-icon
            :icon="{ prefix: 'fas', iconName: 'bars' }"
            id="bars"
          />
      </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link js-scroll-trigger" to="/About">About Me</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link js-scroll-trigger" to="/Experience">Experience</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link js-scroll-trigger" to="/Academic">Education</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link js-scroll-trigger" to="/Skills">Skills</router-link>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#interests">Certificados</a>
        </li> -->
        <p class="text-white mt-3">Coding with <font-awesome-icon icon="heart" /> from Brazil</p>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: {}
};
</script>

<style scoped>
#sideNav {
  -webkit-box-shadow: 7px -1px 20px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 7px -1px 20px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 7px -1px 20px -6px rgba(0, 0, 0, 0.75);
}

#bars {
  color:#fff;
  font-size: 25px;
}
</style>
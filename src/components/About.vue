<template>
  <div class="container-fluid p-0">
    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <div class="w-100  d-flex flex-column justify-content-center">
        <h1 class="mb-0 text-weight">
          Felipe
          <span class="myColor">Vicente</span>
        </h1>
        <div class="subheading mb-5">
          172B Basílio Antunes dos Santos Street · Sta Terezinha 2, PR - BRAZIL 83408-796 ·<br> +55 41 99866-7320·
          <a
            href="mailto:felipeffcwb@gmail.com"
          >felipeffcwb@gmail.com</a>
        </div>
        <p
          class="lead mb-5"
        >
          
I take as a professional philosophy the desire to learn new things as well as the desire to collaborate on great ideas, adding knowledge and extracting knowledge.
        </p>
        <div class="social-icons">
          <a href="https://github.com/felipeffcwb/" target="_blank">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }" />
          </a>
          <!-- <a href="#">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" />
          </a> -->
          <a href="https://www.linkedin.com/in/felipe-vicente-140326179/" target="_blank">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" />
          </a>
          <a href="https://www.instagram.com/fe_lipecwb/" target="_blank">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name: "About"
};
</script>

<style scoped>
#about{
    animation: fadein 0.5s;
  -moz-animation: fadein 0.5s; /* Firefox */
  -webkit-animation: fadein 0.5s; /* Safari and Chrome */
  -o-animation: fadein 0.5s; /* Opera */
  }

  h1{
    font-size: 90px;
  }

  .myColor{
    color:#8d2b3e;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
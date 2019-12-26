<template>
  <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
    <div class="w-100 d-flex flex-column justify-content-center">
      <h2 class="mb-5">Experience</h2>
      <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="resume-content">
          <h3 class="mb-0">Intern Web Developer</h3>
          <div class="subheading mb-3">Oction Ltda</div>
          <p>Develop web platforms using the best technologies for companies of various segments. develop web interfaces together with the designer team for mobility and better user experience </p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">August 2019 - Present</span>
        </div>
      </div>

      <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="resume-content">
          <h3 class="mb-0">Freelancer</h3>
          <div class="subheading mb-3">Independent</div>
          <p>Developing layouts and features at the request of companies from various segments, this phase was extremely important for my training as a developer and professional, as I needed to seek knowledge on my own.</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">January 2019 - Present</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Experience"
};
</script>

<style scoped>
#experience {
  animation: fadein 0.5s;
  -moz-animation: fadein 0.5s; /* Firefox */
  -webkit-animation: fadein 0.5s; /* Safari and Chrome */
  -o-animation: fadein 0.5s; /* Opera */
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
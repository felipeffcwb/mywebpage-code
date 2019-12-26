<template>
  <section class="resume-section p-3 p-lg-5 d-flex" id="education">
      <div class="w-100  d-flex flex-column justify-content-center">
        <h2 class="mb-5">Education</h2>
        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">University Estácio De Sá</h3>
            <div class="subheading mb-3">technologist of systems</div>
            <div>technologist in systems analysis and development - Web Development</div>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">January 2019 - December 2021</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
          <div class="resume-content">
            <h3 class="mb-0">Leôncio Correa High School</h3>
            <div class="subheading mb-3">Regular</div>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">January 2013 - December 2016</span>
          </div>
        </div>

      </div>
    </section>
</template>

<script>
export default {
    name: "Academic"
}
</script>

<style scoped>
    #education{
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
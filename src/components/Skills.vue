<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
    <div class="w-100  d-flex flex-column justify-content-center">
      <h2 class="mb-5">Skills</h2>
      <div class="subheading mb-3">Programming Languages &amp; Tools</div>
      <ul class="list-inline dev-icons">
        <li class="list-inline-item">
          <font-awesome-icon
            class="svg-lg"
            :icon="{ prefix: 'fab', iconName: 'vuejs' }"
            id="vuejs"
          />
        </li>
        <li class="list-inline-item">
          <font-awesome-icon class="svg-lg" :icon="{ prefix: 'fab', iconName: 'npm' }" id="npm" />
        </li>
        <li class="list-inline-item">
          <font-awesome-icon class="svg-lg" :icon="{ prefix: 'fab', iconName: 'node' }" id="node" />
        </li>
        <li class="list-inline-item">
          <font-awesome-icon class="svg-lg" :icon="{ prefix: 'fab', iconName: 'js' }" id="js" />
        </li>
        <li class="list-inline-item">
          <font-awesome-icon class="svg-lg" :icon="{ prefix: 'fab', iconName: 'html5' }" id="html" />
        </li>
        <li class="list-inline-item">
          <font-awesome-icon
            class="svg-lg"
            :icon="{ prefix: 'fab', iconName: 'css3-alt' }"
            id="css"
          />
        </li>
        <li class="list-inline-item">
          <font-awesome-icon
            class="svg-lg"
            :icon="{ prefix: 'fab', iconName: 'bootstrap' }"
            id="bootstrap"
          />
        </li>
        <li class="list-inline-item">
          <font-awesome-icon
            class="svg-lg"
            :icon="{ prefix: 'fab', iconName: 'github' }"
            id="github"
          />
        </li>
        <li class="list-inline-item" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
          <img src="../assets/img/C_Sharp_logo.png" width="75px" id="cSharp" />
        </li>
        <li class="list-inline-item">
          <font-awesome-icon
            class="svg-lg"
            :icon="{ prefix: 'fas', iconName: 'database' }"
            id="database"
          />
        </li>
        <li class="list-inline-item">
          <font-awesome-icon
            class="svg-lg"
            :icon="{ prefix: 'fab', iconName: 'trello' }"
            id="trello"
          />
        </li>
        <li class="list-inline-item">
          <i class="fab fa-npm"></i>
        </li>
      </ul>

      <div class="subheading mb-3">Workflow</div>
      <ul class="fa-ul mb-0">
        <li>
          <font-awesome-icon  :icon="{ prefix: 'fas', iconName: 'check' }" />Mobile-First, Responsive Design
        </li>
        <li>
          <font-awesome-icon  :icon="{ prefix: 'fas', iconName: 'check' }" />Cross Browser Testing &amp; Debugging
        </li>
        <li>
          <font-awesome-icon  :icon="{ prefix: 'fas', iconName: 'check' }" />Cross Functional Teams
        </li>
        <li>
          <font-awesome-icon  :icon="{ prefix: 'fas', iconName: 'check' }" />Agile Development &amp; Scrum
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Skills"
};
</script>

<style scoped>
#skills {
  animation: fadein 0.5s;
  -moz-animation: fadein 0.5s; /* Firefox */
  -webkit-animation: fadein 0.5s; /* Safari and Chrome */
  -o-animation: fadein 0.5s; /* Opera */
}

.svg-lg {
  font-size: 90px;
  margin-left: 10px;
}

#vuejs {
  color: #41b883;
}

#npm {
  color: #cc3534;
}

#node {
  color: #68a063;
}

#js {
  color: #f0db4f;
}

#html {
  color: #e44d26;
}

#css {
  color: #2965f1;
}

#cSharp {
  margin-bottom: 40px;
}

#github {
  color: #000;
}

#bootstrap {
  color: #563d7c;
}

#database {
  color: yellow;
}

#trello {
  color: #007ac0;
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
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faGithub, 
  faInstagram, 
  faFacebook, 
  faLinkedin, 
  faVuejs, 
  faNpm,
  faNode,
  faJs,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faTrello
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faCheck,
  faBars,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
 
library.add(
  faGithub, 
  faInstagram, 
  faFacebook, 
  faLinkedin, 
  faVuejs, 
  faNpm, 
  faNode, 
  faJs, 
  faHtml5, 
  faCss3Alt, 
  faBootstrap, 
  faDatabase,
  faCheck,
  faBars,
  faTrello,
  faHeart)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

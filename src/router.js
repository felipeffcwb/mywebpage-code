import Vue from 'vue'
import Router from 'vue-router';
import About from "./components/About.vue";
import Experience from "./components/Experience.vue";
import Academic from "./components/Academic.vue";
import Skills from "./components/Skills.vue";


Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'About',
        component: About
    },

    {
        path: '/Experience',
        name: 'Experience',
        component: Experience
    },

    {
        path: '/About',
        name: 'About',
        component: About
    },

    {
        path: '/Academic',
        name: 'Academic',
        component: Academic
    },

    {
        path: '/Skills',
        name: 'Skills',
        component: Skills
    },
]
})
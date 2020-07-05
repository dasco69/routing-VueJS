import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [ // we import component for redirect route
    {path : '/', component: ()=> import('../components/Home.vue')},
    {path : '/about', component: ()=> import('../components/About.vue') },
    {path : '/contact', component: ()=> import('../components/Contact.vue')},
    {path : '*', redirect: '/'}, //redirect in Home page
]
const router = new VueRouter ({
    routes //short for routes: routes ES6
})


export default router
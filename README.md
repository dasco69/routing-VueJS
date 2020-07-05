# Routing in  VueJS
## Create file App
  touch App.vue

## Dependance node
  npm init

## Install vue-router
  npm i vue-router

## create folder for router
  mkdir router
  cd router/
  touch index.js

## In index.js

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


  export default router //we utilise this inside App.vue

## App.vue
  <template>
      <div>
          <nav>
              <!--We write utilise "to" for to declare path-->
              <router-link to="/">Home</router-link>
              <router-link to="/a">About</router-link>
              <router-link to="/contact">Contact</router-link>
          </nav>
          <div>
              <!--returns the affiliate component-->
              <router-view></router-view>
          </div>
      </div>
  </template>

  <script>
  import router from './router/index.js' //import router from index.js for utilise router-link and router-view
  export default {
      router,
      }
  </script>
  ...

## Add components
  ### We create components folder in root project
  mkdir components
  cd components
  ### Create file components
  touch Home.vue && touch About.vue && touch Contact.vue
## Template Home , About, Contact
  <template>
    <div>
        Home <!--It's just for exemple normaly you push this inside paragraph tag-->
    </div>
  </template>

  <script>
      export default {
          name: 'Home'
      }
  </script>



## Sart Vue app
  vue serve

##Return 
 DONE  Compiled successfully in 2893ms                                13:45:20


  App running at:
  - Local:   http://localhost:8080/ 
  - Network: http://192.168.0.11:8080/

  Note that the development build is not optimized.
  To create a production build, run npm run build.

##OK





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

<style>
    html, body {
        margin: 0;
        padding: 0;
    }
    nav {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 4em;
        background: #f05053;
    }
    li {
        list-style: none;
        transition: 500ms;
    }
    a {
        color: #fff;
        text-decoration: none;
        padding: 1.5em;
    }
    li a:hover {
        color: #e1eec3;
    }
    .router-link-exact-active {
        color: #e1eec3;
        font-size: 1.3em;
        text-shadow: 1px 10px 10px;
    }
</style>
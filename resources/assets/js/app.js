// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueX from 'vuex'
import App from './containers/App'
import store from './store'
import routes from './routes'
import { sync } from 'vuex-router-sync'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

sync(store, router)

new Vue({
  store,
  router,
  components: { App }
}).$mount('#app')

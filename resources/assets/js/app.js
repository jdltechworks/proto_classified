
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'
import ProductList from './components/ProductList'
import ProductMenu from './components/ProductMenu'
import Clients from './components/passport/Clients'
import AuthorizedClients from './components/passport/AuthorizedClients'
import PersonalAccessTokens from './components/passport/PersonalAccessTokens'
import VueQuillEditor from 'vue-quill-editor'

import ProductCreate from './components/ProductCreate'

Vue.use(VueQuillEditor)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


const app = new Vue({
  components: {
  	ProductCreate,
    ProductList,
    ProductMenu,
    AuthorizedClients, 
    Clients, 
    PersonalAccessTokens }
}).$mount('#app')

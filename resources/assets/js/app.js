
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
import Editor from './components/Editor'
import Upload from './components/Upload'
Vue.use(VueQuillEditor)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


const app = new Vue({
  components: {
    Editor,
    ProductList,
    ProductMenu,
    Upload,
    AuthorizedClients, 
    Clients, 
    PersonalAccessTokens }
}).$mount('#app')

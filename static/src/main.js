// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from 'vuetify'
import vueresource from 'vue-resource'
import store from './store/index'
import 'vuetify/dist/vuetify.css'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'
import commonFooter from './components/Footer'
import chart from './components/Chart'
import SearchField from './components/SearchField'
Raven
  .config('http://067a88a545394790801f0086c15c8d15@sentry.btoogle.com/3')
  .addPlugin(RavenVue, Vue)
  .install()
Vue.use(vueresource)
Vue.use(vuetify)
Vue.component('line-chart', chart)
Vue.component('btoogle-footer', commonFooter)
Vue.component('btoogle-search-field', SearchField)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})

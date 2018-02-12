// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router/router'
import store from './store/store'
import App from './App.vue'

import fontawesome from '@fortawesome/fontawesome'
import faUser from '@fortawesome/fontawesome-free-solid/faUser'
import faKey from '@fortawesome/fontawesome-free-solid/faKey'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
import faTag from '@fortawesome/fontawesome-free-solid/faTag'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.min.css'

Vue.use(BootstrapVue)

fontawesome.library.add(faUser, faKey, faEnvelope, faTag)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

import Vue from 'vue'
import App from './App.vue'
import VueConfirmDialog from 'vue-confirm-dialog'

Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)



Vue.config.productionTip = false

import './assets/css/main.css';

new Vue({
  render: h => h(App),
}).$mount('#app')






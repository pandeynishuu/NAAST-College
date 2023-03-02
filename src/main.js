import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueFacebookPage from 'vue-facebook-page'

 
// The plugin is loaded here.
// You have to pass your FB app Id as a second parameter
 
Vue.use(VueFacebookPage, /** Add your facebook appId here */)
 

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router,
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import XyUI from '../packages'

Vue.config.productionTip = false
Vue.use(XyUI)
new Vue({
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
// 清除浏览器默认的样式
import 'normalize.css'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

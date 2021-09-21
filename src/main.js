import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import App from './App.vue'
import router from './router'
// import $ from 'jquery'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle'


import Footer from './components/Footer'

Vue.config.productionTip = false

// 全局注册轮播插件
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
// 全局注册组件
Vue.component(Footer.name,Footer)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

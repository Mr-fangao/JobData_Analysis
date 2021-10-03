import Vue from 'vue'
// import VueParticles from 'vue-particles'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css';
import '../my-theme/index.less';
import '@/assets/css/main.less';
import '@/assets/css/home.less';
import '@/assets/css/map.less';
import '@/assets/css/marker.less';
import '../public/js/gfont/style.css';
import './assets/iconfont/iconfont.css';
import './assets/iconfont/iconfont.js';
import echarts from 'echarts';
import 'echarts/map/js/china';
import './core/';
import $ from "jquery";
import "@/map/api/";
import axios from "axios";
import '../my-theme/index.less';
import scroll from 'vue-seamless-scroll'

// import qs from "qs";
Vue.use(iView);
Vue.use(scroll);
// Vue.use(VueParticles);

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$Message.config({
  top: 60,
});

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(route => {
  iView.LoadingBar.finish();
});
new Vue({
  router,
  store,
  data: {
    Bus: new Vue()
  },
  render: h => h(App)
}).$mount('#app')
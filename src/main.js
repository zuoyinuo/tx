import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import "./plugins/rem.js"
import { Swipe, SwipeItem } from 'vant';
Vue.use(Vant);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.config.productionTip = false
if(process.env.NODE_ENV === "development"){
  // 如果是开发环境,mock 会拦截 ajax 请求
  require("./mock/index.js")
}
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

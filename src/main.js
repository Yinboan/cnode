import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/reset.css"
import axios from "axios"
import Load from '@/components/Load'


Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.component('Load',Load)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.filter('formatDate',function(str){
  if(!str.trim()) return ""
  let date = new Date(str)
  let time = new Date - date
  if (time < 0) {
    return ''
  } else if ((time / 1000 < 30)) {
    return '刚刚'
  } else if (time / 1000 < 60) {
    return parseInt((time / 1000)) + '秒前'
  } else if ((time / 60000) < 60) {
    return parseInt((time / 60000)) + '分钟前'
  } else if ((time / 3600000) < 24) {
    return parseInt(time / 3600000) + '小时前'
  } else if ((time / 86400000) < 31) {
    return parseInt(time / 86400000) + '天前'
  } else if ((time / 2592000000) < 12) {
    return parseInt(time / 2592000000) + '月前'
  } else {
    return parseInt(time / 31536000000) + '年前'
  }
})

Vue.filter('formatTab',function(row){
  if(row.top){
    return '置顶'
  }
  else if(row.good){
    return '精华'
  }
  else if(row.tab === 'ask'){
    return '提问'
  }
  else if(row.tab === 'share'){
    return '分享'
  }
  else if(row.tab === 'job'){
    return '招聘'
  }
  else{
    return '未分类'
  }
})
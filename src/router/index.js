import Vue from 'vue'
import VueRouter from 'vue-router'
import TopicList from '@/components/TopicList.vue'
import Article from '@/components/Article.vue'
import UserInfo from '@/components/UserInfo.vue'
import SlideBar from '@/components/SlideBar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    components: {main:TopicList}
    // component: TopicList
  },
  {
    path: '/topic/:id&:name',
    name: 'article',
    components: {
      main:Article,
      slide:SlideBar
    }
  },
  {
    path:'/usetinfo/:name',
    name:'userInfo',
    components:{
      main:UserInfo
    }
  },
  {
    path: '/about',
    name: 'About',
    //懒加载
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

<template>
  <div class="autherinfo">
    <div class="authersummay">
      <div class="topbar">作者</div>
      <router-link
        :to="{
          name: 'userInfo',
          params: {
            name: userinfo.loginname,
          },
        }"
      >
        <img :src="userinfo.avatar_url" alt="" />
        <span>
          用户名称：{{userinfo.loginname}}
        </span>
        <span>
          用户积分：{{userinfo.score}}
        </span>
      </router-link>
      
      
    </div>
    <div class="recent_topics">
      <div class="topbar">作者最近主题</div>
      <ul>
        <li v-for="item in userinfo.recent_topics" :key="item.id">
          <router-link
            :to="{
              name: 'article',
              params: {
                id: item.id,
                name: item.author.loginname,
              },
            }"
          >
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="recent_replies">
      <div class="topbar">作者最近回复</div>
      <ul>
        <li v-for="item in userinfo.recent_replies" :key="item.id">
          <router-link
            :to="{
              name: 'article',
              params: {
                id: item.id,
                name: item.author.loginname,
              },
            }"
          >
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang='js'>
    export default {
        data(){
            return{
                userinfo:{}
            }
        },
        methods:{
        getData(){
          this.axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
            .then(res=>{
              this.userinfo = res.data.data;
            })
        }
        },
        beforeMount(){
            this.getData()
        },
        watch:{
          $route:function () {
            this.getData()
          }
        }
    };
</script>
<style scoped>
.authersummay,
.recent_replies,
.recent_topics {
  background-color: #fff;
}
.recent_replies,
.recent_topics {
  padding-bottom: 10px;
}
.autherinfo {
  width: 328px;
  float: right;
  margin-top: 0;
}
li {
  padding: 3px 0;
}
.recent_replies ul,
.recent_topics ul {
  margin-top: 0px;
  margin-bottom: 0px;
  list-style: none;
  padding-left: 14px;
}

ul a {
  font-size: 12px;
  text-decoration: none;
  color: #778087;
}

.topbar {
  padding: 10px;
  background-color: #f6f6f6;
  height: 16px;
  font-size: 12px;
  margin-top: 10px;
}

img {
  height: 48px;
  width: 48px;
  border-radius: 3px;
  margin: 10px;
}

.authersummay .topbar {
  margin-top: 0px;
}
.authersummay span{
  color: #778087;
  position: relative;
  top: -46px;
  left: 30%;
  display: block;
}
</style>

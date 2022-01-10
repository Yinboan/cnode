<template>
  <div class="UserInfo">
    <div class="loading" v-if="isLoading">
      <Load></Load>
    </div>
    <div class="userInfomation" v-else>
      <section>
        <img :src="userInfo.avatar_url" />
        <span>{{ userInfo.loginname }}</span>
        <div>{{ userInfo.score }}积分</div>
        <div>注册时间：{{ userInfo.create_at | formatDate }}</div>
      </section>
      <div class="replies">
        <p>最近回复</p>
        <ul>
          <li v-for="item in userInfo.recent_replies" :key="item.id">
            <router-link
              :to="{
                  name:'article',
                  params:{
                      id:item.id
                  }
              }"
            >
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="topics">
        <p>最近创建</p>
        <ul>
          <li v-for="item in userInfo.recent_topics" :key="item.id">
            <router-link
              :to="{
                  name:'article',
                  params:{
                      id:item.id
                  }
              }"
            >
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang='js'>
    export default {
        data(){
            return {
                isLoading:true,
                userInfo:{}
            }
        },
        methods:{
            getData(){
               this.axios
               .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
               .then((res)=>{
                   this.userInfo = res.data.data
                   this.isLoading=false
               })
            }
        },
        beforeMount(){
            this.getData()
        }

    };
</script>
<style scoped>
.userInfomation {
  background: white;
  width: 75%;
  margin: 10px auto;
}
.userInfomation section {
  padding: 12px;
}
.userInfomation section span{
  color: #778087;
}
.userInfomation section div{
  line-height: 28px;
}
.userInfomation img {
  width: 30px;
  margin-right: 12px;
}
.userInfomation li {
  list-style: none;
}
.userInfomation .replies,
.userInfomation .topics {
  font-size: 16px;
  border-top: 10px #dddddd solid;
}
.userInfomation > div > p {
  padding: 12px 0 12px 12px;
  background-color: rgba(212, 205, 205, 0.17);
  font-size: 0.75rem;
  margin: 0;
}
.userInfomation > div > ul > li {
  padding: 4px 0 4px 12px;
  white-space: nowrap;
  font-size: .9rem;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 30px;
  vertical-align: middle;
}
.userInfomation > div > ul > li > a {
  color: #094e99;
  text-decoration: none;
}
</style>

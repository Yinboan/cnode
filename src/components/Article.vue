<template>
  <div class="article">
    <div class="loading" v-if="isLoading">
      <Load></Load>
    </div>
    <div v-else>
      <div class="topic_header">
        <div class="topic_title">{{ data.title }}</div>
        <ul>
          <li>&nbsp;&nbsp;•发布于：{{ data.create_at | formatDate }}</li>
          <li>
            &nbsp;&nbsp;•作者：
            {{ data.author.loginname }}
          </li>
          <li>&nbsp;&nbsp;•{{ data.visit_count }}次浏览</li>
          <li>&nbsp;&nbsp;•来自{{ data | formatTab }}</li>
        </ul>
        <div v-html="data.content" class="topic_content markdown-body"></div>
      </div>
      <div id="reply">
        <div class="topbar">{{ data.reply_count }} 回复</div>
        <div
          class="replySec"
          v-for="(reply, index) in data.replies"
          :key="reply.id"
        >
          <div class="replyUp">
            <router-link
              :to="{
                name: 'userInfo',
                params: {
                  name: reply.author.loginname,
                },
              }"
            >
              <img :src="reply.author.avatar_url" alt="" />
            </router-link>
            <router-link
              :to="{
                name: 'userInfo',
                params: {
                  name: reply.author.loginname,
                },
              }"
            >
              <span style="margin-left:10px;">{{ reply.author.loginname }}</span>
            </router-link>
            <span> 
              {{ index + 1 }}楼 
              &nbsp;&nbsp;·{{reply.create_at |formatDate}}
              </span>
            <span class="up" v-if="reply.ups.length > 0">👍&nbsp;{{ reply.ups.length }} </span>
            <!-- <span v-else></span> -->
          </div>
          <!-- <br> -->
          <p v-html="reply.content" class="markdown-body reply_content"></p>
        </div>
      </div>

    </div>
  </div>
</template>
<script lang='js'>
    export default {
        data(){
            return{
                isLoading:true,
                data:{}
            }
        },
        beforeMount(){
            this.getData()
        },
        mounted(){
          setTimeout(() => {
          (document.querySelector('.reply_content ul'))
          &&
          (document.querySelector('.reply_content ul').style.listStyle='disc')
          }, 1000);
        },
        methods:{
          getData(){
            this.axios.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`).then((res)=>{
              this.isLoading = false
              this.data = res.data.data
            })
          }
        },
        watch:{
          $route:function () {
            this.getData()
          }
        }
    };
</script>
<style   scoped>
/* @import url("../assets/markdown-github.css"); */
@import url("../assets/github-markdown.css");
.topbar {
  padding: 10px;
  background-color: #f6f6f6;
  height: 16px;
  font-size: 12px;
  margin-top: 10px;
}

.article:not(:first-child) {
  margin-right: 340px;
  margin-top: 15px;
}

#reply,
.topic_header {
  background-color: #fff;
}

#reply {
  margin-top: 15px;
}

#reply img {
  width: 30px;
  height: 30px;
  position: relative;
  bottom: -9px;
}

#reply a,
#reply span {
  font-size: 13px;
  color: #666;
  text-decoration: none;
}
.replySec {
  border-bottom: 1px solid #e5e5e5;
  padding: 0 10px;
}
.replySec p{
  padding-left: 50px;
  line-height: 25px;
  margin: 5px 0 15px;
}
.reply_content ul{ 
  list-style: disc;
}

.replyUp a:nth-of-type(2) {
  margin-left: 0px;
  display: inline-block;
}
.up{
  float: right;
  margin-top: 15px;
  font-size: 15px !important;
  vertical-align: baseline;
  color: gray;
  font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
}
.topic_header {
  padding: 10px;
}

.topic_title {
  font-size: 20px;
  font-weight: bold;
  padding-top: 8px;
}

.topic_header ul {
  list-style: none;
  padding: 0px 0px;
  margin: 6px 0px;
}

.topic_header li {
  display: inline-block;
  font-size: 12px;
  color: #838383;
}

.topic_content {
  border-top: 1px solid #e5e5e5;
  padding: 10px;
}
/* .topic_content */
.markdown-text img {
  width: 92% !important;
}
</style>

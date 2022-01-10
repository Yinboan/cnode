<template>
  <div class="PostList">
    <div class="loading" v-if="isLoading">
      <Load></Load>
    </div>
    <div class="posts" v-else>
      <ul>
        <li>
          <div class="toobar" @click="changeTab">
            <span>全部</span>
            <span>精华</span>
            <span>分享</span>
            <span>问答</span>
            <span>招聘</span>
          </div>
        </li>
        <li v-for="el in data" :key="el.id">
          <!--头像-->
          <img :src="el.author.avatar_url" alt="" />
          <!--回复/浏览-->
          <span class="allcount">
            <span class="reply_count">
              {{ el.reply_count }}
            </span>
            /{{ el.visit_count }}
          </span>
          <!--帖子的分类-->
          <span
            :class="[
              {
                put_good: el.good == true,
                put_top: el.top == true,
                'topiclist-tab': el.good != true && el.top != true,
              },
            ]"
          >
            <span>
              {{ el | formatTab }}
            </span>
          </span>
          <!--标题-->
          <router-link
            :to="{
              name: 'article',
              params: {
                id: el.id,
                name: el.author.loginname,
              },
            }"
          >
            <span class="title">
              {{ el.title }}
            </span>
          </router-link>
          <!--最終回复时间-->
          <span class="last_reply">
            {{ el.last_reply_at | formatDate }}
          </span>
        </li>
        <li>
          <!--分页-->
          <!-- <pagination @handleList="renderList"></pagination> -->
          <Page @changePage="pageHandle" ref="page"></Page>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang='js'>
import Page from './Pagination'
    export default {
        data:function(){
            return {
              data:null,
              isLoading:true,
              tab:'all',
              map:{
                ask:'问答',
                share:'分享',
                job:'招聘',
                good:'精华',
                all:'全部',
                '问答':'ask',
                '分享':'share',
                '招聘':'job',
                '精华':'good',
                '全部':'all'
              }
            }
        },
        components:{
          Page
        },
        methods:{
            getData(page=1){
                this.axios.get('https://cnodejs.org/api/v1/topics',{
                  params:{
                    page,
                    limit:40,
                    tab:this.tab
                }
                })
                .then((res)=>{
                    this.isLoading = false
                    this.data = res.data.data.filter((item)=>{
                        return item.id != '5fdb44d70f99cb37f45e3410'
                    })
                })
            },
            pageHandle(val){
              this.getData(val)
            },
            changeTab(ev){
              let text = ev.target.innerText //汉字
              text = this.map[text]
              this.tab = text || 'all'
            }
        },
        beforeMount(){
            this.getData()
        },
        watch:{
          tab(){
            this.getData()
            this.$refs.page.reset()
            // console.log();
          }
        }
    };
</script>
<style scoped>
.PostList {
  background-color: #e1e1e1;
}
.posts {
  margin-top: 10px;
}

.PostList img {
  height: 30px;
  width: 30px;
  vertical-align: middle;
}

ul {
  list-style: none;
  width: 100%;
  max-width: 1344px;
  margin: 0 auto;
  text-align: left;
}

ul li:not(:first-child) {
  padding: 9px;
  font-size: 15px;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif !important;
  font-weight: 400;
  background-color: white;
  color: #333;
  border-top: 1px solid #f0f0f0;
}

li:not(:first-child):hover {
  background: #f5f5f5;
}

li:last-child:hover {
  background: white;
}

li span {
  line-height: 30px;
}
.title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
  max-width: 70%;
  line-height: 30px;
  position: relative;
  top: 8px;
}

.allcount {
  min-width: 70px;
  display: inline-block;
  text-align: center;
  font-size: 12px;
}

.reply_count {
  color: #9e78c0;
  font-size: 14px;
}

.put_good,
.put_top {
  background: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  color: #fff;
  font-size: 12px;
  margin-right: 10px;
}

.topiclist-tab {
  background-color: #e5e5e5;
  color: #999;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  font-size: 12px;
  margin-right: 10px;
}

.last_reply {
  text-align: right;
  min-width: 50px;
  display: inline-block;
  white-space: nowrap;
  float: right;
  color: #778087;
  font-size: 12px;
}

.toobar {
  height: 40px;
  background-color: #f5f5f5;
  padding-left: 10px;
}

.toobar span {
  font-size: 14px;
  color: #80bd01;
  line-height: 40px;
  margin: 0 10px;
  cursor: pointer;
}

.toobar span:hover {
  color: #9e78c0;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: underline;
}
</style>

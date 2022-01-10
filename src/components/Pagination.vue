<template>
    <div class="pagination">
        <button @click="changePage">首页</button>
        <button @click="changePage">上一页</button>
        <button class="pagebtn" v-if="pagebtns[0]!== 1">......</button>
        <button
        @click="changePage(btn)"
        v-for="btn in pagebtns"
        :key="btn"
        :class="[{
            currentPage: btn == currentPage
        },
        'pagebtn']">
        {{btn}}
        </button>
        <button @click="changePage">下一页</button>

    </div>
</template>
<script lang='js'>
    export default {
        data(){
            return{
            pagebtns:[1,2,3,4,5,'......'],
            currentPage:1
            }
        },
        methods:{
            changePage(page){
                if (typeof page !== 'number') {
                  if(typeof page !== 'object') return
                  let dom =document.querySelector('.currentPage')
                  switch (page.target.innerText) {
                    case '首页':
                      this.pagebtns= [1,2,3,4,5,'......']
                      this.changePage(1)
                      break;
                  case '上一页':
                      (dom.previousElementSibling !== page.target)
                      &&
                      dom.previousElementSibling.click()
                      break;
                    case '下一页':
                      dom.nextElementSibling.click()
                      break;
                    default:
                      break;
                  }
                  return
                }
                let arr = this.pagebtns
                this.currentPage = page
                if(page === arr[4]){
                    arr.splice(arr.length-1,0,page+1)
                    arr.shift()
                }
                else if(page === arr[0] && page !==1){
                  arr.unshift(arr[0] -1)
                  arr.splice(arr.length-2,1) 
                }
                this.$emit('changePage',page)
            },
            reset(){
              this.pagebtns= [1,2,3,4,5,'......']
              this.currentPage = 1
            }
        }
    };
</script>
<style scoped>
  .pagination {
    margin-top: 5px;
    margin-bottom: 20px;
    background-color: white;
    padding: 6px 20px;
    border-radius: 5px;
    /*box-shadow: 0px 2px 9px #888888;*/
    border: 1px solid #888888;
  }

  button {
    background-color: #fff;
    border: 1px solid #ddd;
    color: #778087;
    border-radius: 3px;
    outline: none;
    height: 21px;
    cursor: pointer;
    padding: 0 2px;
    width: 55px;
    height: 29px;
  }

  .pagebtn {
    position: relative;
    bottom: 1px;
    width: 40px;
    margin: 0 4px;
  }

  .currentPage {
    color: white;
    background-color: #1f1b1b;

  }
</style>

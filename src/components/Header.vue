<template>
    <div class="header">
        <div class="left-wrapper">
            <router-link
             to="/"
            >
        <img class='logo' src="https://static2.cnodejs.org/public/images/cnodejs_light.svg">
            </router-link>

        <form target="_blank" class="search" @submit="query">
            <input type="text" name='q'>
        </form>
        </div>
        <ul class='nav'>
            <li><router-link to="/">首页</router-link></li>
            <li><a href="https://cnodejs.org/getstart" target="_blank">新手入门</a></li>
            <li><a href="https://cnodejs.org/api" target="_blank">API</a></li>
            <li><a href="https://cnodejs.org/about" target="_blank">关于</a></li>
            <li><a href="https://cnodejs.org/signin" target="_self">注册</a></li>
            <li><a href="https://cnodejs.org/signin" target="_self">登录</a></li>
        </ul>
    </div>
</template>
<script lang='js'>
    export default {
        methods:{
            query(e){
                e.preventDefault()
                let form = e.target
                let input = document.querySelector('input[name]')
                let action = "https://www.google.com/search" 

                form.action =action
                input.value= 'site:cnodejs.org '+input.value
                // console.log(input.value);
                form.submit()
                input.value= ''
            }
        }
    };
</script>
<style scoped>
    .header{
        display: flex;
        width: 100vw;
        justify-content: space-between;
        background-color: #444444;
        height: 50px;
        padding: 0px 10% 5px;
        box-sizing: border-box;
    }
    .left-wrapper{
        display: flex;
        width: 40vw;
        align-items: flex-end;
        padding: 5px 0;
    }
    .left-wrapper a{
        padding: 0;
    }
    .logo{
        height: 28px;
        /* padding: 5px 0; */
    }
    .search{
        display: flex;
        height: 28px;
        margin-left: 20px;
        width: 233px;
    }
    input{
        background-color: #888;
        width: 100%;
        outline: none;
        border: none;
        border-radius: 20px;
        box-sizing: border-box;
        padding: 0 0 0 25px;
    }
    input:hover{
        background-color: #fff;
    }
    input:focus{
        background-color: #fff;
    }
    .search::before{
        content: '🔍';
        display: block;
        position: relative;
        left: 25px;
        top: 5px;
        transform: rotateY(180deg);
    }
    .nav{
        width: 40vw;
        display: flex;
        justify-content: flex-end;
    }
    .nav li{
        font-size: 13px;
    }
   a{
       display: block;
       padding: 10px 15px;
       color: #cccccc;
       line-height: 25px;
   }
</style>

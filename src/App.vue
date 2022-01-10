<template>
  <div id="app">
    <Header></Header>
    <div class="contain">
      <router-view name='slide'></router-view>
      <router-view name='main'></router-view>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'

export default {
  components:{
    Header
  }
}
</script>

<style >
#app{
  background-color: #e1e1e1;
  overflow: hidden;
}
.contain{
  width: 80vw;
  margin: 0 auto;
}
</style>

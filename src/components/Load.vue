<template>
       <div class="load-wrapp">
        <div class="load-2">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
</template>
<script lang='js'>
    export default {
    };
</script>
<style scoped>
.load-wrapp {
  width: 100%;
  height: 100vh;
  background-color: #e1e1e1;
  position: relative;
}
.load-2{
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translateX(-50%) translateY(-50%);
}
.line {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: #4b9cdb;
  margin-right: 10px;
}

.load-2 .line:nth-last-child(1) {
  animation: loadingB 1.5s 1s infinite;
}
.load-2 .line:nth-last-child(2) {
  animation: loadingB 1.5s 0.5s infinite;
}
.load-2 .line:nth-last-child(3) {
  animation: loadingB 1.5s 0s infinite;
}
@keyframes loadingB {
  0% {
    width: 40px;
  }
  50% {
    width: 85px;
  }
  100% {
    width: 40px;
  }
}
</style>

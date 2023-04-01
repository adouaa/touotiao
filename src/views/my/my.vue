<template>
  <div class="my">
    <div class="header">
      <div class="not-login" @click="$router.push('/login')">
        <van-icon style="font-size: 80px" name="phone-circle-o" />
        <span class="text">登录 / 注册</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.header {
  height: 361px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3498ff;
  .not-login {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;

    .text {
      font-size: 28px;
      margin-top: 15px;
    }
  }
}
</style>

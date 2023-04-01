<template>
  <div class="layout">
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/question" icon="chat-o">问答</van-tabbar-item>
      <van-tabbar-item to="/video" icon="video-o">视频</van-tabbar-item>
      <van-tabbar-item to="/my" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup name="layout">
import { ref } from 'vue'
</script>

<style lang="less" scoped></style>

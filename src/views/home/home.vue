<template>
  <div class="home">
    <van-nav-bar class="page-nav-bar" fixed>
      <template #title>
        <div class="search">
          <img class="logo" src="@/assets/image/logo.png" alt="" />
          <van-button round class="search-btn" size="mini" icon="search"> 搜索 </van-button>
        </div>
      </template>
    </van-nav-bar>
    <div class="channel-tabs">
      <van-tabs v-model:active="active" animated swipeable>
        <van-tab v-for="(item, index) in channels" :title="item.name" :key="item.id">
          <article-list :id="index"></article-list>
        </van-tab>
        <template #nav-right>
          <span class="placeholder"></span>
          <van-icon class="hamburger-btn" name="wap-nav" />
        </template>
      </van-tabs>
    </div>
  </div>
</template>

<script setup>
import { getUserChannel } from '@/api/user'
import { ref } from 'vue'
import articleList from './components/article-list.vue'

const active = ref(0)
const channels = ref([])
getUserChannel()
  .then((res) => {
    channels.value = res.data.channels
  })
  .catch((err) => console.log('频道获取失败'))
</script>

<style lang="less" scoped>
.home {
  padding-top: 170px;
  padding-bottom: 100px;
  :deep(.van-nav-bar__title) {
    max-width: unset;
  }
  .search {
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 250px;
      margin-right: 50px;
    }
  }
  .search-btn {
    width: 555px;
    height: 64px;
    font-size: 28px;
    color: #fff;
    border: none;
    background-color: #5babfb;
  }

  :deep(.channel-tabs) {
    .van-tabs__wrap {
      height: 82px;
      position: fixed;
      top: 92px;
      left: 0;
      right: 0;
      z-index: 1;
    }
    margin-top: 10px;
    position: relative;
    .van-tabs__nav {
      padding-bottom: 18px;
    }
    .van-tab {
      min-width: 200px;
      height: 82px;
      border-right: 1px solid #edeff3;
      font-size: 30px;
      color: #777;
    }

    .van-tab--active {
      color: #333;
    }

    .van-tabs__line {
      width: 31px;
    }
    .hamburger-btn {
      width: 66px;
      height: 82px;
      display: flex;
      align-items: center;
      position: fixed;
      right: -1px;
      background-color: #fff;
      opacity: 0.902;
    }
    .placeholder {
      flex-shrink: 0;
      width: 76px;
      height: 82px;
    }
  }
}
</style>

<template>
  <div class="home">
    <van-nav-bar class="page-nav-bar">
      <template #title>
        <div class="search">
          <img class="logo" src="@/assets/image/logo.png" alt="" />
          <van-button round class="search-btn" size="mini" icon="search"> 搜索 </van-button>
        </div>
      </template>
    </van-nav-bar>
    <div class="channel-tabs">
      <van-tabs v-model:active="active" animated swipeable>
        <van-tab v-for="index in 4" :title="'标签 ' + index" :key="index">
          内容 {{ index }}
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<style lang="less" scoped>
.home {
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
  }
}
</style>

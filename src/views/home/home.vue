<template>
  <div class="home">
    <van-nav-bar class="page-nav-bar">
      <template #title>
        <van-button round class="search-btn" size="mini" icon="search"> 搜索 </van-button>
      </template>
    </van-nav-bar>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.home {
  :deep(.van-nav-bar__title) {
    max-width: unset;
  }
  .search-btn {
    width: 555px;
    height: 64px;
    font-size: 28px;
    color: #fff;
    border: none;
    background-color: #5babfb;
  }
}
</style>

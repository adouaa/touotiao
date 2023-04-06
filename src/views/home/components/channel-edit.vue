<template>
  <div class="channel-edit">
    <van-cell>
      <template #title>
        <div style="display: flex; justify-content: space-between; align-items: center">
          <span>我的频道</span>
          <van-button style="padding: 0 10px" type="warning" size="mini" plain round
            >编辑</van-button
          >
        </div>
      </template>
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item v-for="value in 8" :key="value" text="文字" />
    </van-grid>

    <van-cell>
      <template #title> 频道推荐 </template>
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item v-for="value in 8" :key="value" text="文字" />
    </van-grid>
  </div>
</template>

<script setup name="ChannelEdit"></script>

<style lang="less" scoped>
.channel-edit {
  padding: 85px 0;
}
</style>

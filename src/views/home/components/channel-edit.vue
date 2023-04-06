<template>
  <div class="channel-edit">
    <van-cell>
      <template #title>
        <div style="display: flex; justify-content: space-between; align-items: center">
          <span class="title-text">我的频道</span>
          <van-button
            class="edit-btn"
            style="padding: 0 10px"
            type="warning"
            size="mini"
            plain
            round
            >编辑</van-button
          >
        </div>
      </template>
    </van-cell>
    <van-grid class="my-grid" :gutter="10">
      <van-grid-item icon="clear" class="grid-item" v-for="value in 8" :key="value" text="文字" />
    </van-grid>

    <van-cell>
      <template #title>
        <span class="title-text">推荐频道</span>
      </template>
    </van-cell>
    <van-grid class="recommend-grid" :gutter="10">
      <van-grid-item icon="plus" class="grid-item" v-for="value in 8" :key="value" text="文字" />
    </van-grid>
  </div>
</template>

<script setup name="ChannelEdit"></script>

<style lang="less" scoped>
.channel-edit {
  padding: 85px 0;

  .title-text {
    font-size: 32px;
    color: #333;
  }

  .edit-btn {
    width: 104px;
    height: 48px;
    font-size: 26px;
    color: #f85959;
  }

  :deep(.grid-item) {
    width: 160px;
    height: 86px;
    .van-grid-item__content {
      background-color: #f4f5f6;
    }

    .van-grid-item__text {
      font-size: 28px;
      color: #222;
    }
  }

  :deep(.recommend-grid) {
    .van-grid-item__content {
      flex-direction: row;
      .van-grid-item__text {
        margin-top: 0;
      }

      .van-grid-item__icon {
        font-size: 38px;
        margin-right: 6px;
      }
    }
  }

  :deep(.my-grid) {
    .van-grid-item__icon {
      position: absolute;
      top: -10px;
      right: -10px;
      font-size: 30px;
      color: #cacaca;
      z-index: 2;
    }
  }
}
</style>

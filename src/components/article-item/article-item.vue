<template>
  <div class="article-item">
    <van-cell class="item">
      <template #title>
        <div class="title van-multi-ellipsis--l2">{{ article.title }}</div>
      </template>
      <template #label>
        <div class="cover-wrap" v-if="article.cover.type === 3">
          <van-image
            v-for="(item, index) in article.cover.images"
            :key="index"
            fit="cover"
            class="cover-image"
            :src="item"
          />
        </div>
        <div class="info-wrap">
          <span class="auth">{{ article.aut_name }}</span>
          <span class="comm">{{ `${article.comm_count}评论` }}</span>
          <span class="pub-time">{{ article.pubdate }}</span>
        </div>
      </template>
      <template #default v-if="article.cover.type === 1">
        <van-image fit="cover" class="image" :src="article.cover?.images[0]" />
      </template>
    </van-cell>
  </div>
</template>

<script setup name="ArticleItem">
const props = defineProps({
  article: {
    type: Object,
    default: () => ({}),
    required: true
  }
})
</script>

<style lang="less" scoped>
.article-item {
  .item {
    .title {
      font-size: 32px;
      color: #3a3a3a;
    }
    :deep(.van-cell__value) {
      width: 232px;
      height: 146px;
      margin-left: 25px;
      flex: unset;
    }
    .image {
      width: 232px;
      height: 146px;
    }
    .info-wrap {
      .comm {
        margin: 0 25px;
      }
      span {
        font-size: 22px;
        color: #b4b4b4;
      }
    }
    .cover-wrap {
      display: flex;
      margin: 30px 0;
      height: 146px;
      .cover-image {
        flex: 1;
        height: 146px;
      }
    }
  }
}
</style>

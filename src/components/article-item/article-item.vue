<template>
  <div class="article-item">
    <h2>ArticleItem</h2>
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

</style>
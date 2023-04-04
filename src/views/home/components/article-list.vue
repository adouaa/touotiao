<template>
  <div class="article-list">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item.title" />
    </van-list>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getArticles } from '@/api/article'

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const list = ref([])
const loading = ref(false)
const finished = ref(false)
const timestamp = ref(Date.now())

const onLoad = async () => {
  console.log('请求中')
  const { data } = await getArticles({
    channel_id: props.id,
    timestamp: timestamp.value
  })
  if (data.results.length) {
    console.log(timestamp.value)
    list.value.push(...data.results)
    timestamp.value = data.pre_timestamp
    loading.value = false
  } else {
    finished.value = true
  }
}
</script>

<style lang="less" scoped></style>

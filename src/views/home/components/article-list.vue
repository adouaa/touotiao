<template>
  <div class="article-list">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      v-model:error="error"
      error-text="请求失败，点击重新加载"
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
const error = ref(false)

const onLoad = async () => {
  try {
    const { data } = await getArticles({
      channel_id: props.id,
      timestamp: timestamp.value
    })

    // 模拟失败，记得写到 try-catch了里面，不然不会被 catch 捕捉并执行里面的逻辑
    // if (Math.random() > 0.5) {
    //   JSON.parse('d2ds')
    // }

    if (data.results.length) {
      console.log(timestamp.value)
      list.value.push(...data.results)
      timestamp.value = data.pre_timestamp
      loading.value = false
    } else {
      finished.value = true
    }
  } catch (err) {
    // 捕捉到错误，记得要把 loading 状态置为 false，否则户一致转圈圈！
    loading.value = false
    error.value = true
  }
}
</script>

<style lang="less" scoped></style>

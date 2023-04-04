<template>
  <div class="article-list">
    <van-pull-refresh
      :success-text="refreshSuccessText"
      v-model="isRefreshLoading"
      @refresh="onRefresh"
    >
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
    </van-pull-refresh>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getArticles } from '@/api/article'
import { showToast } from 'vant'

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
const isRefreshLoading = ref(false)
const refreshSuccessText = ref('刷新成功')

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
    // 展示错误提示状态
    error.value = true
  }
}

const onRefresh = async () => {
  try {
    timestamp.value = Date.now()
    const { data } = await getArticles({
      channel_id: props.id,
      timestamp: timestamp.value
    })
    
    // if (Math.random() > 0.5) {
    //   JSON.parse('d2ds')
    // }

    // 将数据追加到列表的 顶部
    list.value.unshift(...data.results)
    refreshSuccessText.value = '刷新成功'
    showToast(`刷新成功,加载了${data.results.length}条数据`)
  } catch (error) {
    refreshSuccessText.value = '刷新失败，请重试'
    showToast('刷新失败，请重试')
  }
  // 不管刷新成功还是失败，都要在最后把刷新的状态置为 false
  isRefreshLoading.value = false
}
</script>

<style lang="less" scoped></style>

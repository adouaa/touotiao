import { createApp } from 'vue'
import App from './App.vue'

import '@/styles/index.less'

// 加载动态设置 REM 基准值的包(动态根据手机的宽度，分成十份，每份大小设为font-size)
import 'amfe-flexible'

import router from './router'

createApp(App).use(router).mount('#app')

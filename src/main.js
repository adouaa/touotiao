import { createApp } from 'vue'
import App from './App.vue'

import '@/styles/index.less'

// 加载动态设置 REM 基准值的包(动态根据手机的宽度，分成十份，每份大小设为font-size)
import 'amfe-flexible'

// Toast
import 'vant/es/toast/style';

import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

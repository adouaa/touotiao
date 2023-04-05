import { createApp } from 'vue'
import App from './App.vue'

import '@/styles/index.less'

// 加载动态设置 REM 基准值的包(动态根据手机的宽度，分成十份，每份大小设为font-size)
import 'amfe-flexible'

// Toast
import { showToast, showFailToast, showLoadingToast, showSuccessToast } from 'vant'
import 'vant/es/toast/style';

// Dialog
import 'vant/es/dialog/style';

// Notify
import 'vant/es/notify/style';

// ImagePreview
import 'vant/es/image-preview/style';

import router from './router'

import store from '@/store'

import '@/utils/dayjs'

const app = createApp(App)
app.component('showToast', showToast)
app.component('showFailToast', showFailToast)
app.component('showLoadingToast', showLoadingToast)
app.component('showSuccessToast', showSuccessToast)
app.use(router)
app.use(store)
app.mount('#app')

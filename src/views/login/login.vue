<template>
  <div class="login">
    <van-nav-bar class="page-nav-bar" title="登录" />

    <van-form @submit="onSubmit" ref="loginRef">
      <van-cell-group inset>
        <van-field
          v-model="loginForm.mobile"
          name="mobile"
          placeholder="请输入手机号"
          :rules="loginRules.mobile"
          type="number"
          maxlength="11"
        >
          <template #left-icon>
            <i style="font-size: 20px" class="toutiao toutiao-shouji"></i>
          </template>
        </van-field>
        <van-field
          v-model="loginForm.code"
          name="密码"
          placeholder="请输入验证码"
          :rules="loginRules.code"
          type="number"
          maxlength="6"
        >
          <template #left-icon>
            <i style="font-size: 20px" class="toutiao toutiao-mima"></i>
          </template>
          <template #button>
            <van-button @click="sendCode" round class="code-button" size="small" type="primary">{{
              time > 0 ? time + 's' : '发送验证码'
            }}</van-button>
          </template>
        </van-field>
      </van-cell-group>
      <div class="login-btn-wrap">
        <van-button
          :loading="isLoading"
          loading-type="spinner"
          class="login-btn"
          :disabled="disabled"
          block
          type="primary"
          native-type="submit"
        >
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup name="login">
import { reactive, computed, ref } from 'vue'
import { login, getCode } from '@/api/user'
import { showLoadingToast, showSuccessToast, showFailToast, showToast } from 'vant'
import getCodeTime from '@/hooks/useCodeTime'
import useUsetStore from '@/store/modules/user'

// 登录逻辑
const userStore = useUsetStore()
const loginForm = reactive({
  mobile: 1391111111,
  code: ''
})
const loginRules = {
  mobile: [
    { required: true, message: '手机号不能为空' },
    { pattern: /^1[3 | 5 | 7 | 8]\d{9}$/, message: '手机号格式错误' }
  ],
  code: [
    { required: true, message: '验证码不能为空' },
    { pattern: /^\d{6}$/, message: '验证码格式错误' }
  ]
}
const onSubmit = async () => {
  if (disabled.value) return
  try {
    showLoadingToast({
      message: '登录中',
      forbidClick: true
    })
    isLoading.value = true
    const res = await login(loginForm)
    userStore.setUserInfo(res.data)
    showSuccessToast('登录成功')
  } catch (error) {
    if (error.response.status === 400) {
      showFailToast('手机号或者密码错误')
    } else {
      showFailToast('未知错误，请稍后重试')
    }
  }
  isLoading.value = false
}

const disabled = computed(() => {
  // if (loginForm.mobile && loginForm.code) return false
  // return true
  return loginForm.mobile && loginForm.code ? false : true
  // return loginForm.mobile && loginForm.code 不能直接返回 &&，要返回 Boolean，所以必须加上 三目运算符
})
const isLoading = ref(false)

// 验证码逻辑
const time = ref()
const loginRef = ref()
const sendCode = async () => {
  try {
    await loginRef.value.validate('mobile')
  } catch (error) {
    showFailToast(error.message)
    return
  }
  try {
    if (time.value > 0) return showFailToast(`还有${time.value}秒后才能再次发送，请耐心等待哦`)
    await getCode(loginForm.mobile)
    showToast('发送成功')
    time.value = getCodeTime(time)
  } catch (error) {
    if (error.response.status === 429) {
      return showToast('发送过于频繁，请稍后重试')
    } else {
      return showToast('发送失败，请稍后重试')
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  .van-cell-group {
    margin: 0;
  }

  .code-button {
    font-size: 22px;
    color: #666;
    width: 152px;
    height: 46px;
    line-height: 46px;
    border: none;
    background-color: #ededed;
  }

  .login-btn-wrap {
    padding: 53px 33px;

    .login-btn {
      border: none;
      background-color: #3296fa;
    }
  }
}
</style>

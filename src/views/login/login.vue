<template>
  <div class="login">
    <van-nav-bar class="page-nav-bar" title="登录" />

    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="loginForm.mobile" name="用户名" placeholder="请输入手机号">
          <template #left-icon>
            <i style="font-size: 20px" class="toutiao toutiao-shouji"></i>
          </template>
        </van-field>
        <van-field v-model="loginForm.code" name="密码" placeholder="请输入验证码">
          <template #left-icon>
            <i style="font-size: 20px" class="toutiao toutiao-mima"></i>
          </template>
          <template #button>
            <van-button round class="code-button" size="small" type="primary"
              >发送验证码</van-button
            >
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
import { login } from '@/api/user'

const loginForm = reactive({
  mobile: 13911111111,
  code: ''
})
const onSubmit = async () => {
  if (disabled.value) return
  try {
    isLoading.value = true
    const res = await login(loginForm)
    console.log(res)
  } catch (error) {
    if (error.response.status === 400) {
      console.log('手机号或者密码错误')
    } else {
      console.log('未知错误，请稍后重试')
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

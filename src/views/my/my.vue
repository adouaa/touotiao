<template>
  <div class="my">
    <div v-if="!userStore.user" class="not-login-container">
      <div class="not-login" @click="$router.push('/login')">
        <van-icon style="font-size: 80px" name="phone-circle-o" />
        <span class="text">登录 / 注册</span>
      </div>
    </div>
    <div v-else class="has-login-container">
      <div class="top">
        <div class="left">
          <van-image
            class="avatar"
            round
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
          <span class="text"> 黑马头条号 </span>
        </div>
        <div class="right">
          <van-button class="editor-button" size="mini" round>编辑资料</van-button>
        </div>
      </div>
      <div class="bottom">
        <div class="data">
          <div class="item">
            <span class="number">8</span>
            <span class="type">头条</span>
          </div>
          <div class="item">
            <span class="number">8</span>
            <span class="type">头条</span>
          </div>
          <div class="item">
            <span class="number">8</span>
            <span class="type">头条</span>
          </div>
          <div class="item">
            <span class="number">8</span>
            <span class="type">头条</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useUserStore from '@/store/modules/user'

const userStore = useUserStore()
</script>

<style lang="less" scoped>
.not-login-container {
  height: 361px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3498ff;
  .not-login {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;

    .text {
      font-size: 28px;
      margin-top: 15px;
    }
  }
}

.has-login-container {
  background-color: #3498ff;
  .top {
    box-sizing: border-box;
    padding: 76px 36px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      justify-content: center;

      .avatar {
        width: 131px;
        height: 131px;
        border: 4px solid #fff;
      }
      .text {
        font-size: 30px;
        color: #fff;
        margin-left: 23px;
      }
    }
    .right {
      .editor-button {
        padding: 0 15px;
      }
    }
  }

  .bottom {
    height: 130px;

    .data {
      display: flex;

      .item {
        color: #fff;
        font-size: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex: 1;

        .type {
          margin-top: 10px;
          font-size: 30px;
        }
      }
    }
  }
}
</style>

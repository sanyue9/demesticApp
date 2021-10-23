<template>
    <div class="confirm-container">
        <!-- 标题 -->
        <div class="confirm-title">
            <img :src="ok" alt="">
            预定成功
        </div>
        <!-- 内容 -->
        <div class="confirm-content">
            请耐心等待服务提供者同意后支付费用
        </div>
        <!-- 注意 -->
        <div class="confirm-atention">
            <span>防上当受骗</span>
            <span>请谨慎支付</span>
        </div>
        <!-- 查看订单状态 -->
        <div class="state">查看订单状态</div>
        <!-- 返回首页 -->
        <div class="back" @click="jumpToHome">返回首页</div>
    </div>
</template>
<script>
import ok from '@/assets/ok.png'
export default {
  data () {
    return {
      ok
    }
  },
  methods: {
    jumpToHome () {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>
<style lang="less" scoped>
.confirm-container {
    background-color: #fff;
    .confirm-title {
        margin-top: 20vh;
        font-size: 7vw;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 40px;
            margin-right: 2vw;
        }
    }
    .confirm-content {
        margin: 1vh;
    }
    .confirm-atention {
        margin-top: 2vh;
        span {
            display: block;
            margin-top: 1vh;
            color: gray
        }
    }
    .state {
        height: 8vh;
        width: 80vw;
        margin-top: 3vh;
        font-size: 4vw;
        color:#FFF;
        margin-left: 10vw;
        text-align: center;
        line-height: 8vh;
        border-radius: 5px;
        background-color: rgb(15, 162, 246);
    }
    .back {
        height: 8vh;
        width: 80vw;
        margin-top: 3vh;
        font-size: 4vw;
        margin-left: 10vw;
        text-align: center;
        line-height: 8vh;
        border-radius: 5px;
        background-color: #f1f1f1;
    }
}
</style>

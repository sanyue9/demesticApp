<template>
    <div class="user-container">
         <!--标题部分-->
         <div class="user-title">
             个人中心
         </div>
         <div class="user-card">
            <img :src="userAvatar">
            <div class="content">
            <span class="nickname">三月</span>
            <span class="discription">日子还有很长呢，一起走好吗</span>
            </div>
         </div>
        <Tabbar></Tabbar>
        <OrderMe></OrderMe>
        <Order></Order>
        <Offer></Offer>
        <Finding></Finding>
    </div>
</template>

<script>
import Order from '@/userComponent/Order'
import OrderMe from '@/userComponent/OrderMe'
import Offer from '@/userComponent/Offer'
import Finding from '@/userComponent/Finding'
import Tabbar from '../components/Tabbar.vue'
import userAvatar from '@/assets/user-avatar.jpg'
export default {
  components: {
    Tabbar,
    Order,
    OrderMe,
    Finding,
    Offer
  },
  data () {
    return {
      userAvatar
    }
  }
}
</script>

<style lang="less" scoped>
// 标题样式
.user-container {
    padding-bottom: 50px;
    background-color: #fff;
    .user-title {
        background-color: #ffcb21;
        height: 6vh;
        line-height: 6vh;
        font-size: 1.3rem;
        font-family: "黑体";
    }
    .user-card {
        height: 12vh;
        padding: 10px 0 10px 20px;
        display: flex;
        align-items: center;
        color:rgba(17, 13, 11, 0.671);
        background-color: #fff;
        img {
            width: 15vw;
        }
        .content {
            margin-left: 4vw;
            span {
                display: block;
                text-align: left;
            }
            .nickname {
                font-size: 1.1rem;
                font-family: "宋体";
                font-weight: 600;
            }
            .discription {
                font-size: 0.8rem;
                margin-top: 2vw;
                color: rgb(95, 94, 92);
            }
        }
    }

    }
</style>

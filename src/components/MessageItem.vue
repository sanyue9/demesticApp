<template>
    <div class="item-container">

        <div class="message-item">
          <div class="avater">
              <img :src="avatar">
          </div>
          <div class="content">
            <span class="header"> {{Name}} </span>
            <span class="text">{{content}}</span>
          </div>
          <div class="create-time">{{createTime}}</div>
        </div>
    </div>
</template>
<script>
import userAvatar from '@/assets/user-avatar.jpg'
export default {
  data () {
    return {
      userAvatar
    }
  },
  props: {
    Name: {
      typeof: String
    },
    avatar: {
      typeof: String
    },
    content: {
      typeof: String
    },
    createTime: {
      typeof: [String, Date]
    }
  }
}
</script>
<style lang="less" scoped>
.item-container{
    .message-item {
    border-bottom: 1px solid #f1f1f1;
    padding: 15px 0 0 15px;
    display: flex;
    .avater {
       img {
         width: 15vw;
         border-radius: 50%;;
       }
    }
    .content {
      margin-left: 4vw;
      text-align: left;
      span {
        display: block;
        padding-top: 1vh;
      }
      .text {
        color:gray;
        font-size: 0.8rem;
      }
    }
    .create-time {
        color: gray;
        flex: 1;
        text-align: right;
        padding-right: 10vw;
        font-size: 0.8rem;
        padding-top: 3vw;
    }
  }
}
</style>

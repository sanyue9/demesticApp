<template>
    <div class="message-container">
       <div class="title">消息中心</div>
        <MessageItem
        v-for="item in userList"
        :key="item.id"
        :Name = item.name
        :avatar = item.avatar
        :content = item.content
        :createTime = item.createTime
        >
        </MessageItem>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import MessageItem from '../components/MessageItem.vue'
import Tabbar from '../components/Tabbar.vue'
export default {
  components: {
    Tabbar,
    MessageItem
  },
  data () {
    return {
      userList: [
        { id: 1, name: '小伍', avatar: 'https://img03.sogoucdn.com/app/a/100520093/ca86e620b9e623ff-f4709b64c5c0ee80-287da0816a87392ee2dc2b245bce2b72.jpg', content: '你好，可以咨询一下吗', createTime: '15.30' },
        { id: 2, name: '稚于最初', avatar: 'http://5b0988e595225.cdn.sohucs.com/images/20180702/045ff05e2b4f45229b33b5e8a8c7c132.jpeg', content: '请尽快服务！', createTime: '11.50' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.message-container {
  background-color: #fff;
  .title {
    height: 6vh;
    font-size: 1.2rem;
    line-height: 6vh;
    font-family: "黑体";
    border-bottom: 1px solid #f1f1f1;
  }
}
</style>

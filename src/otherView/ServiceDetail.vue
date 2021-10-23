<template>
  <div class="detail-container">
    <van-nav-bar
      title="服务详情"
      left-arrow
      @click-left="onBack"
    />
    <!--封面图-->
    <div class="cover-container">
      <img :src="serviceData.cover_image.path" alt="">
    </div>
    <!-- 发布者信息 -->
    <div class="publish-info">
      <!--标题-->
      <div class="title">
        <span class="title-text">{{serviceData.title}}</span>
        <img :src="iconShop"  alt="">
        <span class="title-category">{{serviceData.category.name}}</span>
      </div>
      <!--头像-->
      <div class="publisher-info">
        <img class="avatar" :src="serviceData.publisher.avatar" alt="">
        <span class="nickname">{{serviceData.publisher.nickname}}</span>
      </div>
      <div class="create-time">
        {{serviceData.create_time}}
      </div>
      <div class="price">
        ￥{{serviceData.price}}
      </div>
      <div class="description">
        {{serviceData.description}}
      </div>
    </div>
    <!-- 服务评价 -->
    <div class="comments-container">
      <div class="comment-title" >
        历史评价
      </div>
      <div class="no-comment" v-if="commentList.length < 1">暂无评价</div>
      <div class="comment-item" v-for="item in commentList" :key="item.id">
        <div class="user-info">
          <img :src="item.author.avatar" class="user-avatar">
          <span class="nickname">{{item.author.nickname}}</span>
          <span class="create-time">{{item.create_time}}</span>
        </div>
        <div class="score-container">
          <span class="score-text">评分:</span>
          <span class="score-star-container" v-for="i in 5" :key="i">
            <img :src="iconOrangeStar" class="star" v-if="i <= item.score">
            <img :src="iconGrayStar" class="star" v-else>
          </span>
        </div>
        <div class="comment-content">
          <span>{{item.content}}</span>
          <img v-for="image in item.illustration" :src="image" :key="image" >
        </div>
      </div>
    </div>
    <div class="concat-container">
      <div class="cancat-text"
        @click="jumpToCall"
      >
        <img :src="telphone">
        <span>
          联系对方
        </span>
      </div>
      <!-- 立即预约 -->
      <div class="bookservice"
      @click="jumpToBook"
      >
          立即预约
      </div>
    </div>
</div>
</template>

<script>
import telphone from '@/assets/telphone.png'
import iconShop from '@/assets/icon-shop.png'
import iconOrangeStar from '@/assets/icon-orange-star.png'
import iconGrayStar from '@/assets/icon-gray-star.png'
import { getCommentDataApi } from '@/api/getSeriveDetailApi'
export default {
  data () {
    return {
      telphone,
      serviceData: {},
      iconShop,
      iconOrangeStar,
      iconGrayStar,
      page: 1,
      count: 10,
      commentList: []
    }
  },
  created () {
    const serviceData = this.$route.query.serviceData
    this.serviceData = JSON.parse(serviceData)
    this.getCommentData()
  },
  methods: {
    onBack () {
      this.$router.back()
    },
    // 获取评论数据并且存放在comentList列表中
    async getCommentData () {
      const { data: res } = await getCommentDataApi(this.serviceData.id, this.page, this.count)
      this.commentList = res.data.data
    },
    // 跳转到联系页面
    jumpToCall () {
      this.$router.push({
        path: '/call'
      })
    },
    // 跳转到预约页面
    jumpToBook () {
      this.$router.push({
        path: '/book',
        query: {
          serviceData: JSON.stringify(this.serviceData)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.detail-container {
  padding-bottom: 20vh;

  /deep/.van-nav-bar__title {
    font-weight: 900;
  }
  .cover-container {
    img {
      width: 100vw;
    }
  }

  .publish-info {
    background-color: #fff;
    text-align: left;
    padding: 10px 20px 10px 20px;
    margin-top: 2vh;
    .title {
      img {
        width: 4vw;
      }
      span {
        display: inline-block;
      }
      .title-category {
        font-size: 1rem;
        margin-left: 2vw;
      }
    }
   .title-text {
      font-size: 1.2rem;
      font-weight: 600;
      margin-right: 2vw;
      text-align: left;
    }
   .publisher-info {
     height: 7vh;
     display: flex;
     align-items: center;
     margin-top: 1vh;
     .avatar {
       height: 5vh;
       width: 5vh;
       border-radius: 50%;
     }
     .nickname {
       margin-left: 2vw;
       font-size: 1rem;
     }
   }
   .create-time {
     font-size: 1rem;
     margin-top: 1vw;
     color:rgba(0, 0, 0, 0.541)
   }
   .price {
     color: #f00;
     font-size: 1.2rem;
     margin-top: 1vh;
   }
   .description {
     margin-top: 1.5vh;
     font-size: 0.9rem;
   }
  }
  .comments-container {
    margin-top: 4vh;
    padding: 10px 20px 10px 20px;
    background-color: #fff;
    .comment-title {
      text-align: left;
      height: 5vh;
      border-bottom: 1px solid #f1f1f1;
    }
    .no-comment {
      margin-top:2vh;
      color:gray;
      height: 20vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .comment-item {
        border-bottom: 1px solid #f1f1f1;
        text-align: left;
        margin-top: 3vh;
        padding-bottom: 3vh;
        .user-info {
          display: flex;
          align-items: center;
          .user-avatar {
            height: 6vh;
            width: 6vh;
            border-radius: 50%;
          }
          .nickname {
            margin-left: 2vw;
          }
          .create-time {
            color:rgb(151, 151, 151);
            flex: 1;
            text-align: right;
          }
        }
        .score-container {
          display: flex;
          align-items: center;
          margin-top: 2vh;
          height: 6vh;
          .score-text {
            color:rgb(151, 151, 151);
          }
          .star {
            width: 5vw;
            margin-left: 2vw;
            margin-top: 1vw;
          }
        }
        .comment-content {
          margin-top: 2vw;
          img {
            margin-top:5vw;
            width: 40vw;
          }
        }
    }
  }
  .concat-container {
    padding: 10px 20px 10px 20px;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 10vh;
    background-color: #FFF;
    text-align: left;
    .cancat-text {
      img {
        height: 16px;
      }
      span {
        display: inline-block;
        margin-left: 2vw;
      }
    }
    .bookservice {
      width: 30vw;
      height: 6vh;
      text-align: center;
      line-height: 6vh;
      border-radius: 25px;
      background-color: rgba(255, 224, 48, 0.836);
      margin-left:35vw;
    }
  }
}
</style>

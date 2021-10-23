<template>
    <div class="info-container"  @click="jumpToServiceDetail">
        <div class="service-img">
            <img :src="cover_image.path" alt="">
        </div>
        <div class="main">
            <!--标题-->
            <div class="title">
                <span class="title-header">{{title| ellipsis}}</span>
                <img :src="shopIcon" width="20">
                <span class="title-category">{{category.name}}</span>
            </div>
            <!--发布者-->
            <div class="publisher">
                <img :src="publisher.avatar" width="25"  alt="">
                <span>{{publisher.nickname}}</span>
            </div>
              <span id="score"><img :src="iconStar" width="13"> {{score}}</span>
            <!--时间日期-->
            <div class="create-time">
                <span>{{create_time}}</span>
            </div>
            <!--价格-->
            <div>
                <span class="price">￥{{price}}</span>
                <span class="sales">已售 {{sales_valume}}</span>
            </div>
            <!--已经售出的-->
        </div>
    </div>
</template>

<script>
import shopIcon from '@/assets/icon-shop.png'
import iconStar from '@/assets/icon-star.png'
export default {
  data () {
    return {
      shopIcon,
      iconStar
    }
  },
  methods: {
    jumpToServiceDetail () {
      this.$router.push({
        path: '/home/ServiceDetail',
        query: {
          serviceData: JSON.stringify(this.serviceData)
        }
      })
    }
  },
  filters: {
    // 超出八个字后面用省略符号代替
    ellipsis (value) {
      if (!value) {
        return ''
      }
      if (value.length > 8) {
        return value.slice(0, 8) + '...'
      } else {
        return value
      }
    }
  },
  props: {
    // 服务id
    serviceData: {
      typeof: Object
    },
    id: {
      typeof: [Number, String],
      require: true
    },
    // 服务所属类型。1：在提供；2：正在找
    type: {
      typeof: [Number, String],
      require: true
    },
    // 是否要求预约人指定服务地点
    designated_place: {
      typeof: Number,
      require: true
    },
    // 服务的标题
    title: {
      typeof: String,
      require: true
    },
    // 服务详情描述
    description: {
      typeof: String
    },

    // 服务价格
    price: {
      typeof: String,
      default: '0'
    },

    // 历史平均分
    score: {
      typeof: String,
      default: '0'
    },
    // 历史销量
    sales_valume: {
      typeof: [Number, String],
      default: 0
    },
    // 服务创建时间
    create_time: {
      typeof: Date,
      require: true
    },
    // 服务发布者个人信息
    publisher: {
      typeof: Object
    },

    // 所属分类信息。id：分类 id，name：分类名称
    category: {
      typeof: Object
    },
    // 服务封面图信息。id：图片 id，path：图片url
    cover_image: {
      typeof: Object
    }
  }
}
</script>

<style lang="less" scoped>

.info-container {
    padding:4vw;
    text-align: left;
    margin-top: 2vh;
    border-radius: 4vw;
    display: flex;
    height: 16vh;
    background-color: #fff;
}
.service-img {
    width: 30vw;
    margin-right: 2vw;
    img {
        width: 28vw;
        height:15vh;
    }
}
.title-header{
    display: inline-block;
    font-size: 1.1rem;
    margin-right: 2vw ;
    color: #000;
    padding-bottom: 1vh;
}

.title-category {
    display: inline-block;
    margin-left: 2vw;
    font-size: 0.8rem;
    color: #707070;
}
#score {
    color: #FDA527;
    display: block;
}
.publisher {

    display: flex;
    align-content: center;
    height: 5vh;
    span {
        display: inline-block;
        margin-left: 2vw;
        color: #707070;
        font-size: 0.6rem;
    }
    img {
        border-radius: 50%;
        width: 6vw;
        height: 6vw;
    }
}
.create-time {
    font-size: 0.6rem;
    color: #707070;
    display: inline-block;
    height: 3vh;
}
.price {
    color: #F00;
    display: inline-block;
    font-weight: bold;
}

.sales {
    font-size: 0.6rem;
    color: #707070;
    display: inline-block;
    width: 40vw;
    text-align: right;
}
</style>

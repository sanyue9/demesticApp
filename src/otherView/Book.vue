<template>
    <div class="book-container">
        <van-nav-bar
            title="预约服务"
            left-arrow
            @click-left="onBack"
        />
        <!-- 选择地址 -->
        <div class="select-address-container">
            <img :src=" iconAddress">
            <span @click="selectAdress">选择地址</span>
        </div>
        <ArticleInfo
          :serviceData = "serviceData"
          :id="serviceData.id"
          :type="serviceData.type"
          :description="serviceData.description"
          :designated_place="serviceData.designated_place"
          :title="serviceData.title"
          :price="serviceData.price"
          :score="serviceData.score"
          :sales_valume="serviceData.sales_volume"
          :create_time="serviceData.create_time"
          :publisher="serviceData.publisher"
          :category="serviceData.category"
          :cover_image="serviceData.cover_image"
        ></ArticleInfo>
         <div class="concat-container">
            <!-- 立即预约 -->
                <div class="bookservice" @click="showPopup">
                    立即预约
                </div>
     </div>
      <van-popup v-model="show" class="popup-container">
          <div class="pop-title">
              注意
          </div>
          <div class="pop-content">
              是否预约该服务？
          </div>
          <div class="pop-select">
              <span class="cancel" @click="showPopup">取消</span>
              <span class="confirm" @click="canfirmbook">确定</span>
          </div>
      </van-popup>
    </div>
</template>
<script>
import iconAddress from '@/assets/icon-address.png'
import ArticleInfo from '../components/ArticleInfo.vue'
export default {
  data () {
    return {
      iconAddress,
      serviceData: {},
      show: false
    }
  },
  components: {
    ArticleInfo
  },
  created () {
    const serviceData = JSON.parse(this.$route.query.serviceData)
    this.serviceData = serviceData
  },
  methods: {
    selectAdress () {
      this.$router.push({
        path: '/book/addressList'
      })
    },
    // 回到上一页
    onBack () {
      this.$router.back()
    },
    // 判断是否预约
    showPopup () {
      this.show = !this.show
    },
    // 确定预约并且跳转界面
    canfirmbook () {
      this.$router.push({
        path: '/book/confirm'
      })
    }
  }
}
</script>
<style lang="less" scoped>
.book-container {
    .select-address-container {
        text-align: left;
        padding-left: 2vw;
        height: 10vh;
        display: flex;
        align-items: center;
        background-color: #FFF;
        border-bottom: 1px solid #f1f1f1;
        img {
            width: 6vw;
        }
        span {
            margin-left: 2vw;
        }
    }
    .concat-container {
        padding: 10px 20px 10px 20px;
        position: fixed;
        bottom: 0;
        width: 100vw;
        height: 10vh;
        background-color: #FFF;

        .bookservice {
            margin-right: 10vw;
            width: 30vw;
            height: 6vh;
            float: right;
            text-align: center;
            line-height: 6vh;
            border-radius: 25px;
            background-color: rgba(255, 224, 48, 0.836);

        }
        /deep/.van-icon__right-icon {
            display: none;
        }
    }
    .popup-container {
        width: 80vw;
        height: 27vh;
        border-radius: 5%;
        .pop-title {
            font-weight: 600;
            margin-top: 3vh;
            font-size: 1.2rem;
        }
        .pop-content {
            margin-top: 3vh;
            color: rgba(0, 0, 0, 0.562);
            border-bottom: 1px solid #f1f1f1;
            padding-bottom: 4vh;
        }
        .pop-select {
            padding-top: 2vh;
            span {
                display: inline-block;
                width: 48%;
                height: 6vh;
                text-align: center;
                line-height: 6vh;
            }
            .confirm {
                border-left: 1px solid #f1f1f1;
                color:rgb(83, 164, 240)
            }

        }
    }
}
</style>

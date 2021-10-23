<template>
    <div class="home-container">
        <!--标题部分-->
        <van-nav-bar
        title="服务广场"
        class="home-title"
        title-activr-color="#000"
        fixed
        />
        <van-tabs
          class="select-title"
          @click="selectType"
          >
          <van-tab title="所有服务"></van-tab>
          <van-tab title="在提供" ></van-tab>
          <van-tab title="正在找"></van-tab>
          </van-tabs>
        <van-image
        :src="homeAdvertising">
        </van-image>

        <!--服务提供-->
        <van-tabs type="line"
        class="class-tab"
        swipeable
        line-width="30px"
        @click="selectcategory"
        >
        <van-tab v-for="item in category" :title="item.name" :key="item.id"></van-tab>
      </van-tabs>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <ArticleInfo
          v-for="(item, index) in serviceList"
          :key="index"
          :serviceData = "item"
          :id="item.id"
          :type="item.type"
          :description="item.description"
          :designated_place="item.designated_place"
          :title="item.title"
          :price="item.price"
          :score="item.score"
          :sales_valume="item.sales_volume"
          :create_time="item.create_time"
          :publisher="item.publisher"
          :category="item.category"
          :cover_image="item.cover_image"
          ></ArticleInfo>
      </van-pull-refresh>
    <Tabbar></Tabbar>
    </div>
</template>

<script>
import Tabbar from '../components/Tabbar.vue'
import ArticleInfo from '../components/ArticleInfo.vue'
import homeAdvertising from '@/assets/home-advertising.png'
import { getCategoryListApi, getCategoryTypeApi, getTokenApi, getServiceApi, getSeletTypeApi } from '../api/getHomeApi'
export default {
  data () {
    return {
      loading: false,
      finished: false,
      refreshing: true,
      // 标题大图地址
      homeAdvertising,
      token: '', // 令牌
      category: [], // 分类
      serviceList: [], // 所有服务列表
      page: 1, // 起始页码
      count: 10, // 返回数据数
      categoryId: 1
    }
  },
  components: {
    ArticleInfo,
    Tabbar
  },

  created () {
    // 获取分类接口
    this.initcategoryList()
    // 获取令牌
    this.initToken()
    // 获取所有已经发布的服务
    this.queryServiceList()
  },
  methods: {
    // 下拉刷新事件回调
    onRefresh () {
    },
    // 上拉加载并请求下一页数据
    async onLoad () {
      this.loading = true
      this.page++
      const { data: res } = await getCategoryTypeApi(this.categoryId, this.serviceList.type, this.page, this.count)
      console.log(res.data.data)
      if (res.data.data.length === 0) {
        this.finished = true
        return
      }
      this.serviceList.push(...res.data.data)
      // 加载状态结束
      this.loading = false
    },
    // 显示分类数据
    async selectcategory (categoryId) {
      this.categoryId = categoryId
      const { data: res } = await getCategoryTypeApi(this.categoryId, this.serviceList.type, this.page, this.count)
      this.serviceList = res.data.data
    },
    // 获取服务类型并请求接口
    async selectType (name) {
      if (name === 0) {
        const { data: res } = await getServiceApi(this.page, this.count)
        this.serviceList = res.data.data
      } else {
        const { data: res } = await getSeletTypeApi(name, this.page, this.count)
        this.serviceList = res.data.data
      }
    },
    // 获取分类接口
    async initcategoryList () {
      try {
        const { data: res } = await getCategoryListApi()
        this.category = res.data
      } catch (error) {
        console.log(error)
      }
    },
    // 获取令牌
    async initToken () {
      try {
        const { data: res } = await getTokenApi()
        this.token = res
      } catch (error) {
        console.log(error)
      }
    },
    // 查询所有已经发布的服务
    async queryServiceList () {
      try {
        const { data: res } = await getServiceApi(this.page, this.count)
        this.serviceList = res.data.data
      } catch (error) {
        console.log(error)
      }
    }
  }
}

</script>

<style lang="less" scoped>
.home-container {
  padding-top: 46px;
  padding-bottom: 50px;
    .van-nav-bar {
        background-color:#FFD964;
    }
    /deep/ .van-nav-bar__title{
        font-size: large;
        font-weight: bold;
    }
}

.home-title {
  z-index: 2;
}
</style>

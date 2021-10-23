<template>
    <div>
        <van-nav-bar
        title="发布服务"
        />
        <van-form>
            <!--选择服务类型-->
            <van-field
            readonly
            clickable
            name="picker"
            :value="typeValue"
            label="发布类型"
            placeholder="请选择发布类型"
            @click="showPicker = true"
            />
            <van-popup v-model="showPicker" position="bottom">
            <van-picker
                show-toolbar
                :columns="type"
                @confirm="onConfirmType"
                @cancel="showPicker = false"
                />
            </van-popup>

            <!--标题-->
            <van-cell-group>
            <van-field
            v-model="titleValue"
            label="标题"
            placeholder="内容不少于5个字" />
            </van-cell-group>

            <!--所属分类-->
              <van-field
            readonly
            clickable
            name="picker"
            :value="classValue"
            label="所属分类"
            placeholder="请选择分类"
            @click="showClass = true"
            />
            <van-popup v-model="showClass" position="bottom">
            <van-picker
            show-toolbar
            :columns="classification"
            @confirm="onConfirmClass"
            @cancel="showClass = false"
            />
            </van-popup>

            <!--封面图-->
            <van-field name="uploader" label="封面图">
            <template #input>
                <van-uploader />
            </template>
            </van-field>

            <!--服务描述-->
            <van-field
            v-model="message"
            rows="5"
            autosize
            label="服务描述"
            type="textarea"
            maxlength="50"
            placeholder="必填，内容长度不少于20个字"
            show-word-limit
            />
            <!--开始日期-->
            <van-cell
            title="开始日期"
            :value="beginDate"
             @click="showDate1 = true" />
            <van-calendar v-model="showDate1" @confirm="onBeginDate" />
            <!--结束日期-->
            <van-cell
            title="结束日期"
            :value="endDate"
             @click="showDate2 = true" />
            <van-calendar v-model="showDate2" @confirm="onEndDate" />
            <!--提交审核-->
            </van-form>
              <div style="margin: 16px;">
                <van-button
                round block
                type="info"
                native-type="submit">提交</van-button>
            </div>
            <Tabbar></Tabbar>
    </div>
</template>

<script>
import Tabbar from '../components/Tabbar.vue'
export default {
  components: {
    Tabbar
  },
  data () {
    return {
      beginDate: '',
      endDate: '',
      showDate1: false,
      showDate2: false,
      message: '',
      titleValue: '',
      typeValue: '',
      classValue: '',
      showPicker: false,
      showClass: false,
      type: ['提供服务', '找服务'],
      classification: ['保洁', '汽修', '疏通', '护理', '装修', '家电维修', '搬运']
    }
  },
  methods: {
    onConfirmType (value) {
      this.typeValue = value
      this.showPicker = false
    },

    onConfirmClass (value) {
      this.classValue = value
      this.showClass = false
    },

    formatDate (date) {
      return `${date.getMonth() + 1}/${date.getDate()}`
    },

    onBeginDate (date) {
      this.showDate1 = false
      this.beginDate = this.formatDate(date)
    },
    onEndDate (date) {
      this.showDate2 = false
      if (this.beginDate > date) {
        return
      }
      this.endDate = this.formatDate(date)
    }
  }
}
</script>

<style lang="less" scoped></style>

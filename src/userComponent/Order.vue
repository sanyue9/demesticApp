<template>
    <div class="order-container">
        <van-nav-bar
            :border='false'
            >
            <template #left>
                <span><h3>我的预约</h3></span>
            </template>
            <template #right>
                <span>查看全部</span>
            </template>
        </van-nav-bar>

        <van-grid clickable :column-num="5" :border="false">
        <van-grid-item icon="envelop-o" text="待处理" to="/" />
        <van-grid-item icon="balance-pay" text="待支付" to="/" />
        <van-grid-item icon="passed" text="待确认" to="/" />
        <van-grid-item icon="comment-o" text="待评价" to="/" />
        <van-grid-item icon="gold-coin-o" text="售后/退款" to="/" />
        </van-grid>
    </div>
</template>

<script>
</script>

<style lang="less" scoped>
.order-container{
    margin-top: 3vh;
    border-bottom: 1px #f1f1f1 solid;
}

</style>

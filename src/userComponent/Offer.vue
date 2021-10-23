<template>
    <div class="order-container">
        <van-nav-bar
            :border='false'
            >
            <template #left>
                <span><h3>我在提供</h3></span>
            </template>
        </van-nav-bar>

        <van-grid clickable :column-num="4" :border="false">
        <van-grid-item icon="envelop-o" text="待审核" to="/" />
        <van-grid-item icon="balance-pay" text="待发布" to="/" />
        <van-grid-item icon="passed" text="已发布" to="/" />
        <van-grid-item icon="comment-o" text="查看全部" to="/" />
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

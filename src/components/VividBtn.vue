<template>
    <div class="vivid-btn elevation-4 "  v-ripple>
        <div class="vivid-btn-bg"></div>
        <div class="vivid-btn-color"></div>
        <div class="vivid-btn-color-linear"></div>
        <div class="vivid-btn-content"><slot></slot></div>
    </div>
</template>

<script>
    export default {
        name: "VividBtn"
    }
</script>

<style scoped>
    .vivid-btn {
        position: relative;
        z-index: 4;
        min-width: 100px;
        text-align: center;
        border-radius: 30px;
        overflow: hidden;
    }

    .vivid-btn-bg {
        position: absolute;
        z-index: -3;
        width: 100%;
        height: 100%;
        background: url("../assets/test.png") no-repeat right;
        background-size: contain;
    }

    .vivid-btn-color-linear {
        position: absolute;
        right: 30px;
        z-index: -1;
        width: 45px;
        height: 100%;
        background: linear-gradient(to right, rgb(255, 218, 233) 30%, transparent);
    }

    .vivid-btn-color {
        position: absolute;
        z-index: -4;
        width: 100%;
        height: 100%;
        background-color: rgb(255, 218, 233);
    }

    .vivid-btn-content {
        position: relative;
        z-index: 0;
        font-size: 18px;
        font-family: "汉仪方黑", "HYHeiFangJ", "Microsoft YaHei",serif;
        line-height: 40px;
        vertical-align:middle;
        width: 100%;
        height: 100%;
        padding: 0 60px 0 20px;
    }
</style>
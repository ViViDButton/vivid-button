<template>

    <v-hover v-slot:default="{hover}">
        <div class="vivid-btn" :class="hover?'elevation-8':'elevation-3'" v-ripple>
            <div class="vivid-btn-bg"></div>
            <div class="vivid-btn-color"></div>
            <div ref="VividBtnLinear" class="vivid-btn-color-linear"></div>
            <div ref="VividBtnContent" class="vivid-btn-content"><slot></slot></div>
        </div>
    </v-hover>

</template>

<script>
    export default {
        name: "VividBtn",
        mounted() {
            this.resizeBtn()
        },
        methods: {
            resizeBtn() {
                let zoom = Math.floor((this.$refs.VividBtnContent.offsetHeight - 20) / 20)
                this.$refs.VividBtnLinear.style.right = 20 * zoom + 10 + "px"
                this.$refs.VividBtnContent.style.paddingRight = (40 * zoom) + 10 + "px";
            }
        }
    }
</script>

<style scoped>
    .vivid-btn {
        display: inline-block;
        position: relative;
        z-index: 4;
        margin: 5px;
        min-width: 100px;
        text-align: center;
        border-radius: 30px;
        overflow: hidden;
        vertical-align:middle;
        transition: 0.2s;
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
        line-height: 20px;
        font-weight: 700;
        vertical-align:middle;
        width: 100%;
        height: 100%;
        padding: 10px 60px 10px 20px;
    }
</style>
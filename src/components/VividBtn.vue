<template>

    <v-hover v-slot:default="{hover}">
        <div :style="{'--color': color}" class="vivid-btn-box">
            <div class="vivid-btn-new" v-if="isNew">new</div>
            <div class="vivid-btn" :class="hover?'elevation-8':'elevation-3'" v-ripple>
                <div class="vivid-btn-bg" :style="{'background-image':  'url(' + bgImg + ')'}"></div>
                <div class="vivid-btn-color"></div>
                <div ref="VividBtnLinear" class="vivid-btn-color-linear"></div>
                <div ref="VividBtnContent" class="vivid-btn-content"><slot></slot></div>
            </div>
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
        },
        props: {
            isNew: {
                    type: Boolean,
                    default() {
                        return false
                    }
            },
            bgImg: {
                type: String,
                default() {
                    return require("../assets/test.png")
                }
            },
            color: {
                type: String,
                default() {
                    return "rgb(255, 218, 233)"
                }
            }
        }
    }
</script>

<style scoped>
    .vivid-btn-box {
        position: relative;
        display: inline-block;
    }

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

    .vivid-btn-new {
        position: absolute;
        z-index: 10;
        right: -5px;
        padding: 0 6px;
        font-size: 10px;
        text-align: center;
        color: white;
        background-color: rgb(24, 102, 193);
        border-radius: 20px;
    }

    .vivid-btn-bg {
        position: absolute;
        z-index: -3;
        width: 100%;
        height: 100%;
        background-image: url("../assets/test.png");
        background-repeat: no-repeat;
        background-position: right;
        background-size: contain;
    }

    .vivid-btn-color-linear {
        position: absolute;
        right: 30px;
        z-index: -1;
        width: 45px;
        height: 100%;
        background: linear-gradient(to right, var(--color) 30%, transparent);
    }

    .vivid-btn-color {
        position: absolute;
        z-index: -4;
        width: 100%;
        height: 100%;
        background-color: var(--color);
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
<template>

    <v-hover v-slot:default="{hover}">
        <div :style="{'--color': color,'--text-color': $vuetify.theme.dark?'#e8e8e8':'#454545'}" class="vivid-btn-box">
            <div class="vivid-btn-new" v-if="isNew">new</div>
            <div class="vivid-btn" :class="hover?'elevation-8':'elevation-3'" v-ripple>
                <div style="padding: 0 8px">
                    <v-progress-linear v-if="showProgress" v-model="value" :color="progressColor" :background-color="color"/>
                </div>
                <div ref="VividBtnBg" class="vivid-btn-bg" :style="{'background-image': 'url(' + bgImg + ')'}"></div>
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
                // 行
                let zoom = Math.floor((this.$refs.VividBtnContent.offsetHeight - 18) / 20)
                // 调整渐变的位置
                this.$refs.VividBtnLinear.style.right = 25 * zoom + "px"
                // 排除单行撑开后变双行的按钮
                if (zoom === 1 && this.$refs.VividBtnContent.offsetWidth > window.innerWidth - 70 - 56){
                    zoom ++

                }
                if (zoom !== 1) {
                    // 多行背景图半透明并被文字盖住
                    this.$refs.VividBtnContent.style.paddingRight = 20 + "px"
                    this.$refs.VividBtnBg.style.opacity = 0.5
                }else {
                    // 单行背景图显示在外
                    this.$refs.VividBtnContent.style.paddingRight = (40 * zoom) + 10 + "px";
                }
            }
        },
        props: {
            showProgress:{
                type: Boolean,
                default(){
                    return true
                }
            },
            value: {
                type: Number,
                default(){
                    return 0
                }
            },
            progressColor: {
                type: String,
                default() {
                    return "rgb(255, 219, 233)"
                }
            },
            isNew: {
                type: Boolean,
                default() {
                    return false
                }
            },
            bgImg: {
                type: String,
                default() {
                    return require("../assets/test.jpg")
                }
            },
            color: {
                type: String,
                default() {
                    return "rgb(255, 219, 233)"
                }
            }
        }
    }
</script>

<style scoped>
    .vivid-btn-box {
        position: relative;
        display: inline-block;
        max-width: calc(100vw - 56px);
    }

    .vivid-btn {
        position: relative;
        z-index: 1;
        margin: 2px 5px;
        min-width: 100px;
        text-align: center;
        border-radius: 19px;
        overflow: hidden;
        vertical-align:middle;
        transition: 0.2s;

    }

    .vivid-btn-new {
        position: absolute;
        z-index: 2;
        top: -3px;
        right: -5px;
        padding: 0 6px;
        font-size: 9px;
        font-weight: bold;
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
        /*margin-left: 3px;*/
        background-image:url("../assets/test.jpg");
        background-repeat: no-repeat;
        background-position: right;
        background-size: contain;

    }

    .vivid-btn-color-linear {
        position: absolute;
        right: 20px;
        z-index: -1;
        width: 20px;
        height: 100%;
        /*background: linear-gradient(to right, var(--color) 30%, transparent);*/
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
        font-size: 20px;
        /*font-family: "Microsoft YaHei UI", "Microsoft YaHei",serif;*/
        color: var(--text-color);
        line-height: 20px;
        font-weight: 700;
        vertical-align:middle;
        width: 100%;
        height: 100%;
        padding: 8px 0 10px 20px;
    }
</style>
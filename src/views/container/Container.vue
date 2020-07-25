<template>
		<v-container class="fill-height" style="padding: 12px">

			<v-card style="width: 100%; margin: 8px auto;">
				<v-card-title class="headline mb-1"> <v-icon>mdi-account</v-icon> {{info.name}}情报</v-card-title>
				<v-card-text style="font-size: 21px; color: #1a1a1a">

					<span style="display: inline-block;color: #01affd;margin: 0 50px 5px 5px;">B站关注数:{{bilibilifan}}</span>
					<span style="display: inline-block;color: #ff2424;margin: 5px 0 0 5px;">YouTube关注数:{{youtubefan}}</span>

					<div style="margin-top: 10px">
						<v-btn rounded color="#01affd" style="margin: 5px;" :href="'https://space.bilibili.com/'+info.bilibili.id" target="_blank">
							<img src="../../../public/bilibili.svg" alt="" style="width: 30px; height: 30px; position: absolute; left: 2px; bottom: 50%; transform: translate3d(0px, 50%, 0px);">
							<span class="link-text" style="margin-left: 40px">{{info.bilibili.name}}</span>
						</v-btn>

						<v-btn rounded color="#ff2424" style="margin: 5px" :href="'https://www.youtube.com/channel/'+info.youtube.id" target="_blank">
							<v-icon color="#fff" style="font-size: 35px">mdi-youtube</v-icon>
							<span class="link-text">{{info.youtube.name}}</span>
						</v-btn>

						<v-btn rounded color="#01affd" style="margin: 5px" :href="'https://twitter.com/'+info.twitter.id" target="_blank">
							<v-icon color="#fff" style="font-size: 30px">mdi-twitter</v-icon>
							<span class="link-text" >{{info.twitter.name}}</span>
						</v-btn>

					</div>

				</v-card-text>
			</v-card>

      <!--语音按钮-->
			<v-card v-for="(group,index1) in voiceList.groups" :key="index1+group.name" style="width: 100%; margin: 8px auto;">
				<v-card-title class="headline mb-1">{{group.translation[current_language]}}</v-card-title>
				<v-card-text>
					<span v-for="(voice,index2) in group.voicelist"
					      :key="index2+voice.name"
					      @click="loadAudio(voice.path)">
						<vivid-btn :is-new="voice.update===voiceList.last_update"
						           :color="color"
						           :bg-img="bgImg">
							{{voice.translation[current_language]}}
						</vivid-btn>
					</span>
				</v-card-text>
			</v-card>

			<!--右下浮动按钮-->
			<v-btn bottom
			       :color="color"
             dark
             fab
             fixed
             right
             @click="dialog = !dialog"
             style="z-index: 3">
				<v-icon>mdi-plus</v-icon>
			</v-btn>

			<!--页脚-->
			<v-footer padless>
				<v-col class="text-center" cols="12">
					&copy;{{ new Date().getFullYear() }} — <strong><a href="https://github.com/Colter23" target="_blank">Colter</a> & <a href="https://github.com/justice2001" target="_blank">Zhengyi</a></strong>
				</v-col>
			</v-footer>

			<audio :src="audioSrc" ref="audioPlayer" @loadedmetadata="playAudio" class="audio-player"/>

		</v-container>

</template>

<script>

	import VividBtn from "components/VividBtn";
	import {getBiliBiliFan, getYouTubeFan, getVoiceList} from "../../network/home";

	export default {
		name: "Container",
		components: {VividBtn},
		props: {
			bgImg: {
				type: String,
				default(){
					return "https://img.colter.top/vivid/img/bell/btnbg04.png!web"
				}
			},
			color: {
				type: String,
				default(){
					return "rgb(255, 219, 233)"
				}
			},
			info: {
				type: Object,
				default(){
					return {
						name: "Bell",
						bilibili: {name: "猫芒ベル_Official",id: "487550002"},
						youtube: {name: "猫芒ベル-Bell Nekonogi",id: "UCflNPJUJ4VQh1hGDNK7bsFg"},
						twitter: {name: "猫芒ベル🔔ViViD所属",id: "bell_nekonogi"}
					}
				}
			}

		},
		data: () => ({
			voiceList:{},
			bilibilifan: "NULL",
			youtubefan: "NULL",
			audioSrc: ""
		}),
		computed: {
			current_language() {
				return this.$i18n.locale;
			}
		},
		methods: {
			loadAudio(path){
				this.audioSrc = "https://img.colter.top/vivid/voices/"+ this.info.name.toLowerCase() +"/"+path;
			},
			playAudio(){
				this.$refs.audioPlayer.play();
			}

		},
		mounted() {
			/*
			getBiliBiliFan(this.info.bilibili.id).then(res => {
				this.bilibilifan = res.data.follower;
			});
			getYouTubeFan(this.info.youtube.id).then(res => {
				this.youtubefan = res.items[0].statistics.subscriberCount;
			})*/

			getVoiceList(this.info.name.toLowerCase()).then(res => {
				this.voiceList = res;
			})
		}
	}
</script>

<style scoped>
	.link-text{
		margin-left:5px;
		color: #fff;
		font-size: 18px;
		font-weight: bold
	}
</style>
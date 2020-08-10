<template>
	<div >
		<v-container class="fill-height" style="padding: 12px 12px 80px 12px" :class="current_language" ref="container">

			<v-card style="width: 100%; margin: 8px auto;" v-if="!info.hideInfo">
				<v-card-title class="headline mb-1"> <v-icon>mdi-account</v-icon> {{info.name}}{{$t("container.info")}}</v-card-title>
				<v-card-text style="font-size: 21px; color: #1a1a1a">

          <v-alert dismissible
                   dense
                   close-icon="mdi-close-circle"
                   :color="$vuetify.theme.dark?info.darkColor:info.lightColor"
                   border="left"
                   elevation="2"
                   colored-border
                   icon="mdi-alert-circle">
            日本語と英語はほとんど機械翻訳です！Japanese and English are mostly machine translation!
          </v-alert>
          <v-alert v-if="info.info"
                   dismissible
                   dense
                   close-icon="mdi-close-circle"
                   :color="$vuetify.theme.dark?info.darkColor:info.lightColor"
                   border="left"
                   elevation="2"
                   colored-border
                   icon="mdi-alert-circle">
            {{info.info[current_language]}}
          </v-alert>

					<span style="display: inline-block;color: #01affd;margin: 0 50px 5px 5px;">{{$t("container.bilifan")}}:{{bilibilifan}}</span>
					<span style="display: inline-block;color: #ff2424;margin: 5px 0 0 5px;">{{$t("container.ytbfan")}}:{{youtubefan}}</span>

					<div style="margin-top: 10px">
						<v-btn rounded color="#01affd" style="margin: 5px;" :href="'https://space.bilibili.com/'+info.bilibili.id" target="_blank">
							<img src="../../../public/img/bilibili.svg" alt="" style="width: 30px; height: 30px; position: absolute; left: 0px; bottom: 50%; transform: translate3d(0px, 50%, 0px);">
							<span class="link-text" style="margin-left: 37px">{{info.bilibili.name}}</span>
						</v-btn>

						<v-btn rounded color="#ff2424" style="margin: 5px" :href="'https://www.youtube.com/channel/'+info.youtube.id" target="_blank">
							<v-icon color="#fff" style="margin-left: -5px; font-size: 35px">mdi-youtube</v-icon>
							<span class="link-text">{{info.youtube.name}}</span>
						</v-btn>

						<v-btn rounded color="#01affd" style="margin: 5px" :href="'https://twitter.com/'+info.twitter.id" target="_blank">
							<v-icon color="#fff" style="margin-left: -5px;font-size: 30px">mdi-twitter</v-icon>
							<span class="link-text" >{{info.twitter.name}}</span>
						</v-btn>
					</div>

				</v-card-text>
			</v-card>

      <!--语音按钮-->
			<v-card v-for="(group,index1) in voiceList.groups" v-show="!(group.name==='memo小剧场'&&current_language!=='zh')" :key="index1+group.name" style="width: 100%; margin: 8px auto;">
				<v-card-title class="headline mb-1">{{group.translation[current_language]}}</v-card-title>
				<v-card-text>

					<v-alert v-if="info[group.name]"
					         dismissible
					         dense
					         close-icon="mdi-close-circle"
					         :color="$vuetify.theme.dark?info.darkColor:info.lightColor"
					         border="left"
					         elevation="2"
					         colored-border
					         icon="mdi-alert-circle">
						{{info[group.name][current_language]}}
					</v-alert>

					<span v-for="(voice,index2) in group.voicelist"
					      :key="index2+voice.name"
					      @click="loadAudio(voice.path,voice.name,group.name),currentIndex=index1+''+index2">
						<vivid-btn :value="currentIndex===(index1+''+index2)?progress:0"
						           :is-new="voice.tag==='new'"
						           :color="$vuetify.theme.dark?info.darkColor:info.lightColor"
						           :progress-color="info.progressColor"
						           :bg-img="'https://img.colter.top/vivid/img/'+info.name.toLowerCase()+'/btnbg0'+(index1%info.btnBgCount===0?info.btnBgCount:index1%info.btnBgCount)+'.png!web'">
							{{voice.translation[current_language]}}
						</vivid-btn>
					</span>
				</v-card-text>
			</v-card>

			<!--右下浮动按钮-->
			<v-btn bottom
			       :color="$vuetify.theme.dark?info.darkColor:info.lightColor"
             dark
             fab
             fixed
             right
             @click="loopAudio"
             style="z-index: 3">
				<v-icon color="#1d1d1d" v-text="loopicon"></v-icon>
			</v-btn>

			<audio :src="audioSrc"
			       ref="audioPlayer"
			       @timeupdate="update"
			       @ended="audioSrc=''"
			       @loadedmetadata="playAudio"
			       class="audio-player"/>

		</v-container>

		<!--页脚-->
		<v-footer padless style="margin-top: -80px">
			<v-col class="text-left" cols="12" style="padding-bottom: 5px">
				&copy;{{ new Date().getFullYear() }} — <strong><a href="https://github.com/Colter23" target="_blank">Colter</a> & <a href="https://github.com/justice2001" target="_blank">Zhengyi</a></strong><v-icon style="margin: -2px 0 0 3px">mdi-github</v-icon>
			</v-col>
			<v-col class="text-left" cols="12" style="padding-top: 0">
				{{$t("footer.content")}}
			</v-col>
		</v-footer>

	</div>
</template>

<script>

	import VividBtn from "components/VividBtn";
	import {getBiliBiliFan, getYouTubeFan, getVoiceList} from "../../network/home";

	export default {
		name: "Container",
		components: {VividBtn},
		props: {
			info: {
				type: Object,
				default(){
					return {
						name: "Bell",
						btnBgCount: 5,
						lightColor: '#ffdbe9',
						darkColor: '#99566f',
						progressColor: '#f990ca',
						bilibili: {name: "猫芒ベル_Official",id: "487550002"},
						youtube: {name: "猫芒ベル-Bell Nekonogi",id: "UCflNPJUJ4VQh1hGDNK7bsFg"},
						twitter: {name: "猫芒ベル🔔ViViD所属",id: "bell_nekonogi"}
					}
				}
			}
		},
		data: () => ({
			voiceList:{
				last_update: "0721",
				groups: [{
				name: "请求数据。。。",
				translation: {
					zh: "请求数据。。。",
					ja: "请求数据。。。",
					en: "请求数据。。。"
				},
				voicelist: [
					{
						update: "0721",
						name: "请求数据。。。",
						pat: "请求数据。。。.mp3",
						translation: {
							zh: "请求数据。。。",
							ja: "请求数据。。。",
							en: "请求数据。。。"
						}}]}]},
			bilibilifan: "NULL",
			youtubefan: "NULL",
			audioSrc: "",
			path: "",
			voiceLength: 0,
			currentIndex: '00',
			progress: 0,
			loopicon: "mdi-repeat-off"
		}),
		computed: {
			current_language() {
				return this.$i18n.locale;
			},
			volume() {
				return this.$store.state.audioVolume;
			}
		},
		watch:{
			volume(val){
				this.$refs.audioPlayer.volume = val/100;
			}
		},
		methods: {
			loadAudio(path,name,voice){
				if(this.audioSrc==="" || this.path!==path){
					// this.audioSrc = this.$store.state.serverUrl + "voices/"+ this.info.name.toLowerCase() +"/"+path;
					this.audioSrc = path;
					this.path = path;

          gtag('event', 'play', {
            'event_category': voice,
            'event_label': name
          });

				}else {
					if(this.$refs.audioPlayer.paused){
						this.playAudio();
					}else {
						this.pauseAudio();
					}
				}
			},
			playAudio(){
				this.$refs.audioPlayer.play();
				this.voiceLength = Math.round(this.$refs.audioPlayer.duration);
			},
			pauseAudio(){
				this.$refs.audioPlayer.pause();
			},
			loopAudio(){
				this.$refs.audioPlayer.loop = !this.$refs.audioPlayer.loop;
				this.loopicon = "mdi-repeat" + (this.$refs.audioPlayer.loop?"":"-off")
			},
			update(){
				this.progress = this.voiceLength? (Math.round(this.$refs.audioPlayer.currentTime)/this.voiceLength) *100:0;
			}

		},
		mounted() {

		  if(!this.info.hideInfo){
        getBiliBiliFan(this.info.bilibili.id).then(res => {
          this.bilibilifan = res.data.follower;
        });
        getYouTubeFan(this.info.youtube.id).then(res => {
          this.youtubefan = res.items[0].statistics.subscriberCount;
        })
      }

			// getVoiceList(this.info.name.toLowerCase()).then(res => {
			// 	 this.voiceList = res;
			// })

      this.voiceList = require('../../assets/'+this.info.name.toLowerCase()+'voices.json')

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
	.zh{
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	}
	.ja{
		font-family: "work sans","ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro",Osaka,"メイリオ",Meiryo,"ＭＳ Ｐゴシック","MS PGothic",sans-serif;
	}
	.en{
		font-family: Roboto,Arial,sans-serif;
	}
</style>
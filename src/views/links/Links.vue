<template>
	<div>
		<v-container class="fill-height" style="padding: 12px" >

			<v-card style="width: 100%; margin: 8px auto;">
				<v-card-title class="headline mb-1">{{$t("app.links")}}</v-card-title>
				<v-card-text>

					<a href="https://fubuki.moe" @click="loadAudio('fbk-voice')" target="_blank">
						<vivid-btn color="#64b5f6"
						           :bg-img="this.$store.state.serverUrl+'img/others/fbk-btn-bg.png!web'">
							<span  style="font-size: 21px; color: #f1f1f1">{{$t("links.fbkbutton")}}</span>
						</vivid-btn>
					</a>
					<a href="https://peko.top" @click="loadAudio('peko-voice')" target="_blank">
						<vivid-btn color="#919edf"
						           :bg-img="this.$store.state.serverUrl+'img/others/peko-btn-bg.png!web'">
							<span  style="font-size: 21px; color: #f1f1f1">{{$t("links.pekobutton")}}</span>
						</vivid-btn>
					</a>
					<a href="https://sepeach.com" @click="loadAudio('echo-voice')" target="_blank">
						<vivid-btn color="#f06292"
						           :bg-img="this.$store.state.serverUrl+'img/others/echo-btn-bg.png!web'">
							<span  style="font-size: 21px; color: #f1f1f1">{{$t("links.peachbutton")}}</span>
						</vivid-btn>
					</a>
					<a href="http://shirayuri-lilly.chu.jp" @click="loadAudio('lily-voice')" target="_blank">
						<vivid-btn color="#f9f8fd"
						           :bg-img="this.$store.state.serverUrl+'img/others/lily-btn-bg.png!web'">
							<span  style="font-size: 21px; color: #242424">{{$t("links.lilybutton")}}</span>
						</vivid-btn>
					</a>
					<a href="https://vtbbtn.org" @click="loadAudio('mio-voice')" target="_blank">
						<vivid-btn color="#64b5f6"
						           :bg-img="this.$store.state.serverUrl+'img/others/vvbc-btn-bg.png'">
							<span  style="font-size: 21px; color: #f1f1f1">{{$t("links.vtbbutton")}}</span>
						</vivid-btn>
					</a>
					<a href="https://vtbmusic.com" target="_blank">
						<vivid-btn color="#11dbfe"
						           :bg-img="this.$store.state.serverUrl+'img/others/vm-btn-bg.png'">
							<span  style="font-size: 21px; color: #f1f1f1">{{$t("links.vtbMusic")}}</span>
						</vivid-btn>
					</a>

				</v-card-text>
			</v-card>

			<audio :src="audioSrc" ref="audioPlayer" @ended="audioSrc=''" @loadedmetadata="playAudio" class="audio-player"/>

		</v-container>

		<!--页脚-->
		<v-footer padless style="position: absolute; bottom: 0; width: 100%">
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

	export default {
		name: "Links",
		components: {VividBtn},
		data: ()=>({
			audioSrc: "",
			path: ""
		}),
		methods: {
			loadAudio(path){
				if(this.audioSrc==="" || this.path!==path){
					this.audioSrc = this.$store.state.serverUrl + "voices/others/"+path+".mp3";
					this.path = path;
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
			},
			pauseAudio(){
				this.$refs.audioPlayer.pause();
			}
		}
	}
</script>

<style scoped>

</style>
<template>
	<div>
		<v-container class="fill-height" style="padding: 12px 12px 80px 12px" >

			<v-card style="width: 100%; margin: 8px auto;">
				<v-card-title class="headline mb-1"
				              style="font-weight: bold;">
					<a href="https://github.com/ViViDButton" target="_blank">
						<v-icon style="font-size: 30px; margin: -4px 3px 0 0">mdi-github</v-icon>{{$t("about.title")}}
					</a>
				</v-card-title>
				<v-divider></v-divider>

				<v-card-text>
					<h2>{{$t("about.join")}}</h2>
					<h3>{{$t("about.feedback")}} <a href="mailto:3375582524@qq.com">3375582524@qq.com</a> / <a href="mailto:impdoomcc@gmail.com">impdoomcc@gmail.com</a> / {{$t("about.letter")}}:<a href="https://message.bilibili.com/#/whisper/mid32868931" target="_blank">Colter_null</a></h3>
					<h3>{{$t("about.des")}}</h3>
				</v-card-text>

				<v-divider></v-divider>

				<v-card-text>

					<!--开发-->
					<h2>{{$t("about.contributor")}}</h2>
					<h3>{{$t("about.dev")}}</h3>
					<ul>
						<li>Github <a href="https://github.com/Colter23" target="_blank">Colter23</a>
							BiliBili <a href="https://space.bilibili.com/32868931" target="_blank">Colter_null</a>
						</li>
						<li>Github <a href="https://github.com/justice2001" target="_blank">justice2001</a>
							BiliBili <a href="https://space.bilibili.com/30734570" target="_blank">正義desu-null</a>
						</li>
					</ul>

					<!--翻译-->
					<h3>{{$t("about.translate")}}</h3>
					<ul>
						<li><a href="https://space.bilibili.com/396322336" target="_blank">リイン-シュバルツァ</a></li>
					</ul>

					<h3>{{$t("about.voice")}}</h3>
					<ul>
						<li><a href="https://space.bilibili.com/32868931" target="_blank">Colter_null</a></li>
					</ul>

					<h3>{{$t("about.material")}}</h3>
					<ul>
						<li><a href="https://space.bilibili.com/32868931" target="_blank">Colter_null</a></li>
					</ul>
					<ul>
						<li><a href="https://space.bilibili.com/13514116" target="_blank">月岚空</a></li>
					</ul>
					<ul>
						<li><a href="https://space.bilibili.com/290482706" target="_blank">冬中雪初</a></li>
					</ul>

				</v-card-text>

				<v-divider></v-divider>

				<v-card-text>
					<h2>{{$t("about.licence")}}</h2>
					<h3><a href="https://vividnia.com/guidelines" target="_blank">ViViD 二次创作条款</a></h3>
					<h3><a href="https://github.com/Colter23/ViViDButton/blob/master/LICENSE" target="_blank">MIT License</a></h3>
					{{$t("about.copyright")}}
				</v-card-text>

			</v-card>


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
	export default {
		name: "About"
	}
</script>

<style scoped>
	h3{
		margin-top: 10px;
	}
	ul{
		font-size: 16px;
	}
</style>
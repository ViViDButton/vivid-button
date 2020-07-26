<template>
	<div>
		<v-container class="fill-height" style="padding: 12px" >

			<v-card style="width: 100%; margin: 8px auto;">
				<v-card-title class="headline mb-1" style="font-weight: bold;">ViViD按钮合集 / ViViDButton</v-card-title>
				<v-divider></v-divider>

				<v-card-text>
					<h2>参与完善项目</h2>
					<h3>建议,BUG,素材可以发送至 3375582524@qq.com / impdoomcc@gmail.com / B站私信:<a href="https://message.bilibili.com/#/whisper/mid32868931" target="_blank">Colter_null</a></h3>
					<h3>带上标题、内容以及您的ID（Bilibili、Twitter等均可），贡献者名单将会有您的名字。</h3>
				</v-card-text>

				<v-divider></v-divider>

				<v-card-text>
					<h2>贡献者</h2>
					<h3>开发</h3>
					<ul>
						<li>Github <a href="https://github.com/Colter23" target="_blank">Colter23</a></li>
								BiliBili <a href="https://space.bilibili.com/32868931" target="_blank">Colter_null</a>
						<li>Github <a href="https://github.com/justice2001" target="_blank">justice2001</a></li>
								BiliBili <a href="https://space.bilibili.com/30734570" target="_blank">正義desu-null</a>
					</ul>

					<h3>翻译</h3>
					<ul>
						<li>BiliBili <a href="https://space.bilibili.com/396322336" target="_blank">リイン-シュバルツァ</a></li>
						<li>BiliBili </li>
					</ul>

					<h3>音频素材</h3>
					<ul>
						<li>BiliBili <a href="https://space.bilibili.com/32868931" target="_blank">Colter_null</a></li>
					</ul>

				</v-card-text>

				<v-divider></v-divider>

				<v-card-text>
					<h2>协议</h2>
					<h3><a href="https://vividnia.com/guidelines" target="_blank">ViViD 二次创作条款</a></h3>
					<h3><a href="https://github.com/Colter23/ViViDButton/blob/master/LICENSE" target="_blank">MIT License</a></h3>
				</v-card-text>

			</v-card>


		</v-container>

		<!--页脚-->
		<v-footer padless style="position: absolute; bottom: 0; width: 100%">
			<v-col class="text-left" cols="12" style="padding-bottom: 5px">
				&copy;{{ new Date().getFullYear() }} — <strong><a href="https://github.com/Colter23" target="_blank">Colter</a> & <a href="https://github.com/justice2001" target="_blank">Zhengyi</a></strong><v-icon style="margin: -2px 0 0 3px">mdi-github</v-icon>
			</v-col>
			<v-col class="text-left" cols="12" style="padding-top: 0">
				本站为爱好者作品，和ViViD官方没有关联
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
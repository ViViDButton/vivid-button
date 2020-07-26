<template>
	<div>
		<v-container class="fill-height" style="padding: 12px" >

			<v-card style="width: 100%; margin: 8px auto;">
				<v-card-title class="headline mb-1">友情链接</v-card-title>
				<v-card-text>

					<a href="https://fubuki.moe" target="_blank">
						<vivid-btn color="#64b5f6"
						           bg-img="https://img.colter.top/vivid/img/bell/btnbg04.png!web">
							<span  style="font-size: 21px; color: #f1f1f1">狐按钮</span>
						</vivid-btn>
					</a>
					<a href="https://peko.top" target="_blank">
						<vivid-btn color="#fb8c00"
						           bg-img="https://img.colter.top/vivid/img/bell/btnbg04.png!web">
							<span  style="font-size: 21px; color: #f1f1f1">Peko按钮</span>
						</vivid-btn>
					</a>
					<a href="https://sepeach.com" target="_blank">
						<vivid-btn color="#f06292"
						           bg-img="https://img.colter.top/vivid/img/bell/btnbg04.png!web">
							<span  style="font-size: 21px; color: #f1f1f1">桃按钮</span>
						</vivid-btn>
					</a>
					<a href="http://shirayuri-lilly.chu.jp" target="_blank">
						<vivid-btn color="#f9f8fd"
						           bg-img="https://img.colter.top/vivid/img/bell/btnbg04.png!web">
							<span  style="font-size: 21px; color: #242424">Lily按钮</span>
						</vivid-btn>
					</a>
					<a href="https://vtbbtn.org" target="_blank">
						<vivid-btn color="#64b5f6"
						           bg-img="https://img.colter.top/vivid/img/bell/btnbg04.png!web">
							<span  style="font-size: 21px; color: #f1f1f1">VTuber按钮合集</span>
						</vivid-btn>
					</a>
					<a href="https://vtbmusic.com" target="_blank">
						<vivid-btn color="#00b8d4"
						           bg-img="https://img.colter.top/vivid/img/bell/btnbg04.png!web">
							<span  style="font-size: 21px; color: #f1f1f1">VTuber Music</span>
						</vivid-btn>
					</a>

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

	import VividBtn from "components/VividBtn";

	export default {
		name: "Links",
		components: {VividBtn},
	}
</script>

<style scoped>

</style>
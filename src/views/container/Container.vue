<template>
		<v-container class="fill-height" style="padding: 12px">

			<v-card style="width: 100%; margin: 8px auto;">
				<v-card-title class="headline mb-1"> <v-icon>mdi-account</v-icon> Bell情报</v-card-title>
				<v-card-text>
					<v-btn rounded color="#009ffc" >
						B站客人们:99999
					</v-btn>
				</v-card-text>
			</v-card>

			<v-card v-for="(group,index1) in voiceList.groups" :key="index1+group.name" style="width: 100%; margin: 8px auto;">
				<v-card-title class="headline mb-1">{{group.translation[current_language]}}</v-card-title>
				<v-card-text>
					<vivid-btn v-for="(voice,index2) in group.voicelist"
					           :key="index2+voice.name"
					           :is-new="voice.update===voiceList.last_update"
					           :color="color"
					           :bg-img="bgImg">
						{{voice.translation[current_language]}}
					</vivid-btn>
				</v-card-text>
			</v-card>

			<!--右下浮动按钮-->
			<v-btn
							bottom
							color="pink"
							dark
							fab
							fixed
							right
							@click="dialog = !dialog">
				<v-icon>mdi-plus</v-icon>
			</v-btn>
			<v-footer padless>
				<v-col
								class="text-center"
								cols="12"
				>
					{{ new Date().getFullYear() }} — <strong><a href="https://github.com/Colter23" target="_blank">Colter</a> & <a href="https://github.com/justice2001" target="_blank">Zhengyi</a></strong>
				</v-col>
			</v-footer>

		</v-container>
</template>

<script>
	import VividBtn from "components/VividBtn";
	export default {
		name: "Container",
		components: {VividBtn},
		props: {
			voiceList:{},
			bgImg: "",
			color: ""
		},
		data: () => ({

		}),
		computed: {
			current_language() {
				return this.$i18n.locale;
			}
		}
	}
</script>

<style scoped>

</style>
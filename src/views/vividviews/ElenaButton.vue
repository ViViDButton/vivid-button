<template>

	<container :info="elenaInfo" />

</template>

<script>
	import Container from "../container/Container";

	export default {
		name: "ElenaButton",
		components: {Container},
		data: ()=>({
			elenaInfo:{
				name: "Elena",
				btnBgCount: 1,
				lightColor: '#f8b892',
				darkColor: '#936137',
				progressColor: '#fc9d5c',
				bilibili: {name: "未入驻",id: ""},
				youtube: {name: "勇凪エレナ/Elena Yunagi",id: "UCKwATdrcjyzNv9c56PqJbWA"},
				twitter: {name: "勇凪エレナ🍯@ビビフェス",id: "ELENA_YUNAGI"},
        info: {zh:"音量注意！ Elena素材补充中！ Elena素材征集中！",ja:"ボリュームに注意してください！ Elena素材追加中！ Elenaの素材を募集中！",en:"Note the volume! Elena material being added! Elena material call for submissions!"},
        歌: {zh: "如果你对哪首歌有质疑，请联系我删除！", ja: "どの曲について質問がある場合は、私に連絡して削除してください！", en: "If you have questions about which song, please contact me to delete it!"}
			}
		})
	}
</script>

<style scoped>

</style>

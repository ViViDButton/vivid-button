<template>

	<container :info="ankoInfo" />

</template>

<script>

	import Container from "../container/Container";

	export default {
		name: "AnkoButton",
		components: {Container},
		data: ()=>({
			ankoInfo:{
				name: "Anko",
				btnBgCount: 1,
				lightColor: '#a1b9e1',
				darkColor: '#496f91',
        progressColor: '#86b2f5',
				bilibili: {name: "未入住",id: ""},
				youtube: {name: "二和餅あんこ",id: "UCBKxF1PHQtT78ypcVYmBtBA"},
				twitter: {name: "二和餅あんこ🍡ViViD所属",id: "ANKOchan_01"},
        info: {zh:"音量注意！ Anko素材补充中！ Anko素材征集中！",ja:"ボリュームに注意してください！ Anko素材追加中！ Ankoの素材を募集中！",en:"Note the volume! Anko material being added! Anko material call for submissions!"},
        歌: {zh: "如果你对哪首歌有质疑，请联系我删除！", ja: "どの曲について質問がある場合は、私に連絡して削除してください！", en: "If you have questions about which song, please contact me to delete it!"}
			}
		})
	}
</script>

<style scoped>

</style>
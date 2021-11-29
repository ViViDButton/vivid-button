<template>

	<container :info="lilyInfo" :chart="chart"/>

</template>

<script>
	import Container from "../container/Container";

	export default {
		name: "LilyButton",
		components: {Container},
		data: ()=>({
			lilyInfo:{
				name: "Lily",
				btnBgCount: 2,
				lightColor: '#f9f8fd',
				darkColor: '#7b7b7b',
				progressColor: '#c2c2c2',
				bilibili: {name: "白百合リリィOfficial",id: "421347849"},
				youtube: {name: "しらゆりヘブンちゃんねる",id: "UCl-3q6t6zdZwgIsFZELb7Zg"},
				twitter: {name: "白百合リリィ💸🍮",id: "SRYR_0"},
        info: {zh:"音量注意！ Lily素材补充中！ Lily素材征集中！",ja:"ボリュームに注意してください！ Lily素材追加中！ Lilyの素材を募集中！",en:"Note the volume! Lily material being added! Lily material call for submissions!"},
        歌: {zh: "如果你对哪首歌有质疑，请联系我删除！", ja: "どの曲について質問がある場合は、私に連絡して削除してください！", en: "If you have questions about which song, please contact me to delete it!"}
			},
      chart: {
        enable: true,
        // url: 'http://www.colter.top:3000/',
        name: 'lily'
      }
		})
	}
</script>

<style scoped>

</style>
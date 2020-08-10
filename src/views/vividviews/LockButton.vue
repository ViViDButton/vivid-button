<template>

	<container :info="lockInfo" />

</template>

<script>
	import Container from "../container/Container";

	export default {
		name: "LockButton",
		components: {Container},
		data: ()=>({
			lockInfo:{
				name: "Lock",
				btnBgCount: 1,
				lightColor: '#fb7a7a',
				darkColor: '#8b3d3d',
				progressColor: '#f74c4c',
				bilibili: {name: "未入住",id: ""},
				youtube: {name: "クロノロク",id: "UCAvgFoTWEisO5Pp7eYVDgEw"},
				twitter: {name: "クロノロク@マオウ軍募集中⏳",id: "cHRONO_lock"},
        info: {zh:"音量注意！ Lock素材补充中！ Lock素材征集中！",ja:"ボリュームに注意してください！ Lock素材追加中！ Lockの素材を募集中！",en:"Note the volume! Lock material being added! Lock material call for submissions!"},
        歌: {zh: "如果你对哪首歌有质疑，请联系我删除！", ja: "どの曲について質問がある場合は、私に連絡して削除してください！", en: "If you have questions about which song, please contact me to delete it!"}
			}
		})
	}
</script>

<style scoped>

</style>
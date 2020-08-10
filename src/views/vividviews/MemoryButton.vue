<template>

	<container :info="memoryInfo" />

</template>

<script>

	import Container from "../container/Container";

	export default {
		name: "MemoryButton",
		components: {Container},
		data: ()=>({
			memoryInfo:{
				name: "Memory",
				btnBgCount: 3,
				lightColor: '#cfb3d9',
				darkColor: '#72599d',
				progressColor: '#e480f9',
				bilibili: {name: "泡沫メモリ_Official",id: "487551829"},
				youtube: {name: "泡沫メモリ/Utakata Memory",id: "UClV7gDF9sUzu4jJCK7rCYkQ"},
				twitter: {name: "泡沫メモリꉂꉂ👻ViViD所属",id: "Memory_Utakata"},
        info: {zh:"音量注意！ Memory素材补充中！ Memory素材征集中！",ja:"ボリュームに注意してください！ Memory素材追加中！ Memoryの素材を募集中！",en:"Note the volume! Memory material being added! Memory material call for submissions!"},
        歌: {zh: "如果你对哪首歌有质疑，请联系我删除！", ja: "どの曲について質問がある場合は、私に連絡して削除してください！", en: "If you have questions about which song, please contact me to delete it!"}
			}
		})
	}
</script>

<style scoped>

</style>
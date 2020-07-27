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
				bilibili: {name: "未入住",id: ""},
				youtube: {name: "二和餅あんこ",id: "UCBKxF1PHQtT78ypcVYmBtBA"},
				twitter: {name: "二和餅あんこ🍡ViViD所属",id: "ANKOchan_01"}
			}
		})

	}
</script>

<style scoped>

</style>
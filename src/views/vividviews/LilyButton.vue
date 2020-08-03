<template>

	<container :info="lilyInfo" />

</template>

<script>
	import Container from "../container/Container";

	export default {
		name: "LilyButton",
		components: {Container},
		data: ()=>({
			lilyInfo:{
				name: "Lily",
				btnBgCount: 1,
				lightColor: '#f9f8fd',
				darkColor: '#7b7b7b',
				progressColor: '#c2c2c2',
				bilibili: {name: "白百合リリィOfficial",id: "421347849"},
				youtube: {name: "しらゆりヘブンちゃんねる",id: "UCl-3q6t6zdZwgIsFZELb7Zg"},
				twitter: {name: "白百合リリィ💸🍮",id: "SRYR_0"}
			}
		})
	}
</script>

<style scoped>

</style>
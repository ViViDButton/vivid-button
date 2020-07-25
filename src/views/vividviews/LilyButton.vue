<template>

	<container color="rgb(207, 179, 217)"
	           bg-img="https://img.colter.top/vivid/img/bell/btnbg03.png!web"
	           :info="lilyInfo">
	</container>

</template>

<script>
	import Container from "../container/Container";

	export default {
		name: "LilyButton",
		components: {Container},
		data: ()=>({
			lilyInfo:{
				name: "Lily",
				bilibili: {name: "白百合リリィOfficial",id: "421347849"},
				youtube: {name: "しらゆりヘブンちゃんねる",id: "UCl-3q6t6zdZwgIsFZELb7Zg"},
				twitter: {name: "白百合リリィ💸🍮@ビビフェス",id: "SRYR_0"}
			}
		})
	}
</script>

<style scoped>

</style>
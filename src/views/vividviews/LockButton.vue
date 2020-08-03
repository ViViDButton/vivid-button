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
				twitter: {name: "クロノロク@マオウ軍募集中⏳",id: "cHRONO_lock"}
			}
		})
	}
</script>

<style scoped>

</style>
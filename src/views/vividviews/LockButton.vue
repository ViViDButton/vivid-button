<template>

	<container color="rgb(207, 179, 217)"
	           bg-img="https://img.colter.top/vivid/img/bell/btnbg03.png!web"
	           :info="lockInfo">
	</container>

</template>

<script>
	import Container from "../container/Container";

	export default {
		name: "LockButton",
		components: {Container},
		data: ()=>({
			lockInfo:{
				name: "Lock",
				bilibili: {name: "未入住",id: ""},
				youtube: {name: "クロノロク",id: "UCAvgFoTWEisO5Pp7eYVDgEw"},
				twitter: {name: "クロノロク@マオウ軍募集中⏳",id: "cHRONO_lock"}
			}
		})
	}
</script>

<style scoped>

</style>
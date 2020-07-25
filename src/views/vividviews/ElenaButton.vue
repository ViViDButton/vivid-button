<template>

	<container color="rgb(207, 179, 217)"
	           bg-img="https://img.colter.top/vivid/img/bell/btnbg03.png!web"
	           :info="elenaInfo">
	</container>

</template>

<script>
	import Container from "../container/Container";

	export default {
		name: "ElenaButton",
		components: {Container},
		data: ()=>({
			elenaInfo:{
				name: "Elena",
				bilibili: {name: "未入住",id: ""},
				youtube: {name: "勇凪エレナ / Elena Yunagi",id: "UCKwATdrcjyzNv9c56PqJbWA"},
				twitter: {name: "勇凪エレナ🍯@ビビフェス",id: "ELENA_YUNAGI"}
			}
		})
	}
</script>

<style scoped>

</style>
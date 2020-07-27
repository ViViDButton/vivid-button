<template>

	<container :info="elenaInfo" />

</template>

<script>
	import Container from "../container/Container";

	export default {
		name: "ElenaButton",
		components: {Container},
		data: ()=>({
			elenaInfo:{
				name: "Elena",
				btnBgCount: 1,
				lightColor: '#f8b892',
				darkColor: '#936137',
				bilibili: {name: "未入住",id: ""},
				youtube: {name: "勇凪エレナ / Elena Yunagi",id: "UCKwATdrcjyzNv9c56PqJbWA"},
				twitter: {name: "勇凪エレナ🍯@ビビフェス",id: "ELENA_YUNAGI"}
			}
		})
	}
</script>

<style scoped>

</style>
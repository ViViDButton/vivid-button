<template>

	<container color="rgb(207, 179, 217)"
	           bg-img="https://img.colter.top/vivid/img/bell/btnbg03.png!web"
	           :info="memoryInfo">
	</container>

</template>

<script>

	import Container from "../container/Container";

	export default {
		name: "MemoryButton",
		components: {Container},
		data: ()=>({
			memoryInfo:{
				name: "Memory",
				bilibili: {name: "泡沫メモリ_Official",id: "487551829"},
				youtube: {name: "泡沫メモリ / Utakata Memory",id: "UClV7gDF9sUzu4jJCK7rCYkQ"},
				twitter: {name: "泡沫メモリꉂꉂ👻ViViD所属",id: "Memory_Utakata"}
			}
		}),
	}
</script>

<style scoped>

</style>
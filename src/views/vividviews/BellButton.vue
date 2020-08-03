<template>

	<container :info="bellInfo" />

</template>

<script>

	import Container from "../container/Container";

	export default {
		name: "MemoryButton",
		components: {Container},
		data: ()=>({
			bellInfo: {
				name: "Bell",
				btnBgCount: 6,
				lightColor: '#ffdbe9',
				darkColor: '#99566f',//rgba(255,115,167,0.55)
				progressColor: '#f990ca',
				bilibili: {name: "猫芒ベル_Official",id: "487550002"},
				youtube: {name: "猫芒ベル-Bell Nekonogi",id: "UCflNPJUJ4VQh1hGDNK7bsFg"},
				twitter: {name: "猫芒ベル🔔ViViD所属",id: "bell_nekonogi"}
			}
		})
	}
</script>

<style scoped>

</style>
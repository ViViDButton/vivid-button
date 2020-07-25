<template>

	<container :color="$vuetify.theme.dark?'#880E4F':'#ffdbe9'"
	           bg-img="https://img.colter.top/vivid/img/bell/btnbg04.png!web"
	           :info="bellInfo">
	</container>

</template>

<script>

	import Container from "../container/Container";

	export default {
		name: "MemoryButton",
		components: {Container},
		data: ()=>({
			bellInfo: {
				name: "Bell",
				bilibili: {name: "猫芒ベル_Official",id: "487550002"},
				youtube: {name: "猫芒ベル-Bell Nekonogi",id: "UCflNPJUJ4VQh1hGDNK7bsFg"},
				twitter: {name: "猫芒ベル🔔ViViD所属",id: "bell_nekonogi"}
			}
		}),
	}
</script>

<style scoped>

</style>
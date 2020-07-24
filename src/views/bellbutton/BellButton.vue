<template>

	<container :voice-list="Voices"
	           :color="'rgb(255, 219, 233)'"
	           :bg-img="'https://img.mczhengyi.top/A3D3AB578BBC9BD9D3219A932E34A210.jpg'">
	</container>

</template>

<script>

	import Container from "../container/Container";
	import Voices from "assets/bellvoices.json";

	export default {
		name: "MemoryButton",
		components: {Container},
		data: ()=>({
			Voices
		}),
	}
</script>

<style scoped>

</style>
<template>

	<container :voice-list="Voices"
	           :color="'rgb(207, 179, 217)'"
	           :bg-img="'https://img.mczhengyi.top/A3D3AB578BBC9BD9D3219A932E34A210.jpg'">
	</container>

</template>

<script>

	import Container from "../container/Container";
	import Voices from "assets/memoryvoices.json";

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
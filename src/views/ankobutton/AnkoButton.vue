<template>
	<v-container class="fill-height" fluid>
		<v-row align="center" justify="center">
			<vivid-btn><v-icon>mdi-bell</v-icon>Bell天下第一</vivid-btn>
		</v-row>
	</v-container>
</template>

<script>
	import VividBtn from "../../components/VividBtn";

	export default {
		name: "AnkoButton",
		components: {
			VividBtn
		}
	}
</script>

<style scoped>

</style>
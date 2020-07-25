<template>

	<container color="rgb(207, 179, 217)"
	           bg-img="https://img.colter.top/vivid/img/bell/btnbg03.png!web"
	           :info="ankoInfo">
	</container>

</template>

<script>

	import Container from "../container/Container";

	export default {
		name: "AnkoButton",
		components: {Container},
		data: ()=>({
			ankoInfo:{
				name: "Anko",
				bilibili: {name: "未入住",id: ""},
				youtube: {name: "二和餅あんこ",id: "UCBKxF1PHQtT78ypcVYmBtBA"},
				twitter: {name: "二和餅あんこ🍡ViViD所属",id: "ANKOchan_01"}
			}
		})

	}
</script>

<style scoped>

</style>
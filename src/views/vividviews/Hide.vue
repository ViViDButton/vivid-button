<template>

  <container :info="hideInfo" />

</template>

<script>
import Container from "../container/Container";

export default {
  name: "Hide",
  components: {Container},
  data: ()=>({
    hideInfo:{
      hideInfo: true,
      name: "Hide",
      btnBgCount: 1,
      lightColor: '#2196f3',
      darkColor: '#0277bd',
      progressColor: '#398ddf'
    }
  })

}
</script>

<style scoped>

</style>
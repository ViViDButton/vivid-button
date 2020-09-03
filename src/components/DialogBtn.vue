<template>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">

        <div v-bind="attrs" v-on="on" style="display: inline-block">
          <vivid-btn :color="$vuetify.theme.dark?dialoginfo.darkColor:dialoginfo.lightColor"
                     :bg-img="dialoginfo.btnBg">
            {{dialoginfo.btnText}}
          </vivid-btn>
        </div>

      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          {{dialoginfo.title}}
        </v-card-title>

        <v-img :src="dialoginfo.img" height="500" contain></v-img>

        <v-card-text style="padding: 0">
          <p v-if="dialoginfo.text" style="font-size: 20px; margin: 10px 10px 5px 10px">{{dialoginfo.text}}</p>
          <p style="font-size: 20px; margin: 0 0 5px 10px">
            <span v-if="dialoginfo.producer" style="margin-right: 30px">制作：<a :href="'https://space.bilibili.com/'+dialoginfo.producer.bid" target="_blank">{{dialoginfo.producer.name}}</a></span>
            <span v-if="dialoginfo.painter">画：<a :href="'https://space.bilibili.com/'+dialoginfo.painter.bid" target="_blank">{{dialoginfo.painter.name}}</a></span>
          </p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn v-for="download in dialoginfo.download" :href="download.link" color="primary" @click="dialog = false">{{download.text}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

</template>

<script>

import VividBtn from "components/VividBtn";

export default {
  name: "DialogBtn",
  components: {VividBtn},
  props: {
    dialoginfo: {}
  },
  data () {
    return {
      dialog: false,

    }
  },
}
</script>

<style scoped>

</style>

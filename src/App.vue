<template>
  <v-app id="inspire">

    <!--侧边栏-->
    <v-navigation-drawer v-model="drawer" app :clipped="$vuetify.breakpoint.lgAndUp">
      <v-list dense>
        <template v-for="item in items">
          <router-link :to="item.link">
            <v-list-item :key="item.text" link>

              <!--图标-->
              <v-list-item-action>
                <v-icon large :color="item.iconcolor">{{ item.icon }}</v-icon>
              </v-list-item-action>

              <!--文字-->
              <v-list-item-content>
                <v-list-item-title style="font-size: 16px">
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>

            </v-list-item>
          </router-link>
        </template>

        <!--分割线-->
        <v-divider></v-divider>

      </v-list>
    </v-navigation-drawer>
<!--   scroll-threshold="500" shrink-on-scroll-->
    <v-app-bar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            app
            color="pink lighten-3"
            dark
            dense
            prominent
            shrink-on-scroll
            src="../public/topbg.jpg"
            fade-img-on-scroll
            scroll-target="#scrolling">

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">BellButton</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>

    </v-app-bar>


    <!--内容-->
    <v-main ref="appMain">

        <v-sheet ref="appSheet" @scroll="scrolled" id="scrolling" class="overflow-y-auto">
          <keep-alive>
            <router-view/>
          </keep-alive>
        </v-sheet>

    </v-main>


    <!--右下浮动按钮-->
    <v-btn
            bottom
            color="pink"
            dark
            fab
            fixed
            right
            @click="dialog = !dialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>

  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: 'mdi-bell', iconcolor: "yellow accent-4", text: 'BellButton', link: "/bell"},
      { icon: 'mdi-bell', iconcolor: "yellow accent-4", text: 'MemoryButton', link: "/memory" },
      { icon: 'mdi-bell', iconcolor: "yellow accent-4", text: 'LilyButton', link: "/lily" },
      { icon: 'mdi-bell', iconcolor: "yellow accent-4", text: 'ElenaButton', link: "/elena" },
      { icon: 'mdi-bell', iconcolor: "yellow accent-4", text: 'AnkoButton', link: "/anko" },
      { icon: 'mdi-bell', iconcolor: "yellow accent-4", text: 'LockButton', link: "/lock" },
    ],
  }),
  mounted() {
    this.scrolled()
  },
  methods: {
    scrolled() {
      let pageH = window.innerHeight
      let padding = parseInt(this.$refs.appMain.$el.style.paddingTop)
      this.$refs.appSheet.$el.style.maxHeight = pageH - padding + "px"
    }
  }
};
</script>

<style>
  @import "assets/css/base.css";
</style>

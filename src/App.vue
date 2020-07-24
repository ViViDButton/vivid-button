<template>
  <v-app id="inspire">

    <!--侧边栏-->
    <v-navigation-drawer class="elevation-3" v-model="drawer" app :clipped="$vuetify.breakpoint.lgAndUp">
      <v-list dense>

        <router-link to="/">
          <v-list-item link @click="changePage('Home')">

            <!--图标-->
            <v-list-item-action style="font-size: 20px">📺</v-list-item-action>

            <!--文字-->
            <v-list-item-content>
              <v-list-item-title style="font-size: 18px">
                Home
              </v-list-item-title>
            </v-list-item-content>

          </v-list-item>
        </router-link>

        <!--分割线-->
        <v-divider></v-divider>

        <template v-for="item in items">
          <router-link :to="item.link">
            <v-list-item :key="item.text" link @click="changePage(item.text,item.color)">

              <!--图标-->
              <v-list-item-action style="font-size: 20px">
<!--                <v-icon large :color="item.iconcolor">{{ item.icon }}</v-icon>-->
                {{ item.icon }}
              </v-list-item-action>

              <!--文字-->
              <v-list-item-content>
                <v-list-item-title style="font-size: 18px">
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>

            </v-list-item>
          </router-link>
        </template>

        <!--分割线-->
        <v-divider></v-divider>

        <router-link to="/links">
          <v-list-item link @click="changePage('Links')">

            <!--图标-->
            <v-list-item-action style="font-size: 20px">➡</v-list-item-action>

            <!--文字-->
            <v-list-item-content>
              <v-list-item-title style="font-size: 18px">
                友情链接
              </v-list-item-title>
            </v-list-item-content>

          </v-list-item>
        </router-link>

        <router-link to="/about">
          <v-list-item link @click="changePage('About')">

            <!--图标-->
            <v-list-item-action style="font-size: 20px">➡</v-list-item-action>

            <!--文字-->
            <v-list-item-content>
              <v-list-item-title style="font-size: 18px">
                About
              </v-list-item-title>
            </v-list-item-content>

          </v-list-item>
        </router-link>


      </v-list>
    </v-navigation-drawer>
<!--   scroll-threshold="500" shrink-on-scroll-->
    <v-app-bar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            app
            :color="current_color"
            dark
            dense
            prominent
            shrink-on-scroll
            src="../public/topbg.jpg"
            fade-img-on-scroll
            scroll-target="#scrolling">

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down" style="color: #1a1a1a">{{current_page}}</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>

    </v-app-bar>


    <!--内容-->
    <v-main ref="appMain">

        <v-sheet ref="appSheet" @scroll="scrolled"  v-scroll.self="onScroll" id="scrolling" class="overflow-y-auto">
          <keep-alive>
            <router-view />
          </keep-alive>
        </v-sheet>

    </v-main>



  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    current_page: 'Home',
    current_color: 'pink lighten-3',
    dialog: false,
    drawer: null,
    items: [
      { icon: '🔔', color: "pink lighten-3", text: 'BellButton', link: "/bell"},
      { icon: '👻', color: "deep-purple lighten-2", text: 'MemoryButton', link: "/memory" },
      { icon: '💸', color: "yellow accent-4", text: 'LilyButton', link: "/lily" },
      { icon: '🍯', color: "yellow accent-4", text: 'ElenaButton', link: "/elena" },
      { icon: '🍡', color: "yellow accent-4", text: 'AnkoButton', link: "/anko" },
      { icon: '⏳', color: "yellow accent-4", text: 'LockButton', link: "/lock" },/*mdi-bell*/
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
    },
    onScroll(e) {
      // TODO:自制滚动条
    },
    changePage(page,color){
      this.current_page = page;
      this.current_color = color;
    }
  }
};
</script>

<style>
  @import "assets/css/base.css";

  html {
    overflow: hidden !important;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  html::-webkit-scrollbar {
    display: none;
  }

  #scrolling::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
</style>

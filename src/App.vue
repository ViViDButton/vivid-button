<template>
  <v-app id="inspire">

    <!--侧边栏-->
    <v-navigation-drawer class="elevation-3" v-model="drawer" app :clipped="$vuetify.breakpoint.lgAndUp">
      <v-list dense>

        <v-list-item-group v-model="item" color="primary">

          <router-link to="/">
            <v-list-item link key="0" @click="changePage('Home')">

              <!--图标-->
              <v-list-item-action style="font-size: 20px">📺</v-list-item-action>

              <!--文字-->
              <v-list-item-content>
                <v-list-item-title style="font-size: 18px">
                  ViViDnia
                </v-list-item-title>
              </v-list-item-content>

            </v-list-item>
          </router-link>

          <!--分割线-->
          <v-divider></v-divider>

          <template v-for="(item,index) in items">
            <router-link :to="item.link">
              <v-list-item :key="index+1" link @click="changePage(item.text,item.color,item.link)">

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
            <v-list-item link key="7" @click="changePage('Links')">

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
            <v-list-item link key="8" @click="changePage('About')">

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

        </v-list-item-group>
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
            :src="current_topbg"
            fade-img-on-scroll
            scroll-target="#scrolling">

      <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down" >{{current_page}}</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon color="#fff">mdi-brightness-4</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="#fff">mdi-translate</v-icon>
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
    item: 0,
    current_page: 'Home',
    current_color: 'pink lighten-3',
    current_topbg: 'https://img.colter.top/vivid/img/bell/topbg01.png',
    dialog: false,
    drawer: null,
    items: [
      { icon: '🔔', color: "pink lighten-3", text: 'BellButton', link: "/bell"},
      { icon: '👻', color: "deep-purple lighten-2", text: 'MemoryButton', link: "/memory" },
      { icon: '💸', color: "light-blue lighten-4", text: 'LilyButton', link: "/lily" },
      { icon: '🍯', color: "yellow accent-4", text: 'ElenaButton', link: "/elena" },
      { icon: '🍡', color: "cyan lighten-1", text: 'AnkoButton', link: "/anko" },
      { icon: '⏳', color: "grey darken-3", text: 'LockButton', link: "/lock" },/*mdi-bell*/
    ],
  }),
  mounted() {
    this.scrolled();

    // 初始化top
    for(let i=0; i<this.items.length;i++){
      if (this.items[i].link===window.location.pathname){
        this.changePage(this.items[i].text,this.items[i].color,window.location.pathname);
        this.item = i+1;
      }
    }
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
    changePage(page,color,link){
      this.current_page = page;
      this.current_color = color;
      this.current_topbg = 'https://img.colter.top/vivid/img'+link+'/topbg01.png'
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

<template>
  <v-app id="inspire">

    <!--侧边栏-->
    <v-navigation-drawer
            class="elevation-3"
            v-model="drawer"
            app
            :clipped="$vuetify.breakpoint.lgAndUp">
      <v-list dense>
        <v-list-item-group v-model="item" color="primary">

<!--          <router-link to="/">-->
<!--            <v-list-item link key="0" @click="changePage('Home')">-->

<!--              &lt;!&ndash;图标&ndash;&gt;-->
<!--              <v-list-item-action style="font-size: 20px">📺</v-list-item-action>-->

<!--              &lt;!&ndash;文字&ndash;&gt;-->
<!--              <v-list-item-content>-->
<!--                <v-list-item-title style="font-size: 18px">-->
<!--                  ViViDnia-->
<!--                </v-list-item-title>-->
<!--              </v-list-item-content>-->

<!--            </v-list-item>-->
<!--          </router-link>-->

<!--          &lt;!&ndash;分割线&ndash;&gt;-->
<!--          <v-divider></v-divider>-->

          <template v-for="(item,index) in items">
            <router-link :to="item.link">
              <v-list-item :key="index" link @click="changePage(item.text,item.color,item.darkColor,item.link)">
                <!--图标-->
                <v-list-item-action style="font-size: 20px">
                  <img width="25" height="25" :src="'/img/'+item.icon+'.svg'">
                </v-list-item-action>
                <!--文字-->
                <v-list-item-content>
                  <v-list-item-title style="font-size: 18px">
                    {{ $t('app.'+item.text) }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
          </template>

          <!--分割线-->
          <v-divider/>

          <router-link to="/links">
            <v-list-item link @click="changePage('links','blue','light-blue darken-3','/links')">
              <!--图标-->
              <v-list-item-action style="font-size: 20px"><v-icon>mdi-link-variant</v-icon></v-list-item-action>
              <!--文字-->
              <v-list-item-content>
                <v-list-item-title style="font-size: 18px">
                  {{$t("app.links")}}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <router-link to="/about">
            <v-list-item link @click="changePage('about','light-blue','light-blue darken-3','/about')">
              <!--图标-->
              <v-list-item-action style="font-size: 20px"><v-icon >mdi-information-outline</v-icon></v-list-item-action>
              <!--文字-->
              <v-list-item-content>
                <v-list-item-title style="font-size: 18px">
                  {{$t("app.about")}}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!--标题栏-->
    <v-app-bar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            app
            :color="current_color"
            prominent
            shrink-on-scroll
            :src="$vuetify.theme.dark?'':current_topbg"
            fade-img-on-scroll
            scroll-target="#scrolling"
            ref="appbar">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <img class="hidden-sm-and-down"
             v-show="isShowLogo"
             :src="logoPath"
             style="width: 200px; margin-left: -20px; margin-bottom: -10px"/>
        <span v-show="!isShowLogo">{{current_page}}</span>
      </v-toolbar-title>

      <v-spacer/>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon
                 :color="current_color"
                 dark
                 v-bind="attrs"
                 v-on="on"
                 @click="$vuetify.theme.dark = !$vuetify.theme.dark,setTopBg()">
            <v-icon color="#fff">mdi-brightness-4</v-icon>
          </v-btn>
        </template>
        <span>{{$t("app.switch_dark_mode")}}</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon
                 :color="current_color"
                 dark
                 v-bind="attrs"
                 v-on="on"
                 @click="isLanguageBoxOn = !isLanguageBoxOn">
            <v-icon color="#fff">mdi-translate</v-icon>
          </v-btn>
        </template>
        <span>{{$t("app.switch_language")}}</span>
      </v-tooltip>

      <v-card class="elevation-6" v-show="isLanguageBoxOn" style="position: absolute; top: 50px; right: 10px">
        <v-list dense>
          <v-list-item-group color="primary">
            <v-list-item @click="changeLanguage('zh')">
              <v-list-item-content>
                <v-list-item-title >简体中文</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click="changeLanguage('ja')">
              <v-list-item-content>
                <v-list-item-title>日本語</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click="changeLanguage('en')">
              <v-list-item-content>
                <v-list-item-title>English</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-app-bar>

    <!--内容-->
    <v-main ref="appMain">
        <v-sheet ref="appSheet"
                 @click="isLanguageBoxOn = false"
                 @scroll="scrolled"
                 v-scroll.self="onScroll"
                 id="scrolling"
                 :height="innerHeight"
                 class="overflow-y-auto">
          <keep-alive>
            <transition name="slide-fade" mode="out-in">
              <router-view/>
            </transition>
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
    page: 'bellbutton',
    current_page: 'BellButton',
    current_color: 'pink lighten-3',
    current_topbg: 'https://img.colter.top/vivid/img/bell/topbg01.png',
    isLanguageBoxOn: false,
    isShowLogo: true,
    drawer: null,
    items: [
      { icon: 'bell', color: '#f48fb1', darkColor: '#c8527a',text: 'bellbutton', link: '/bell'},
      { icon: 'memory', color: '#9575cd', darkColor: '#7255a7',text: 'memorybutton', link: '/memory'},
      { icon: 'lily', color: '#b3e5fc', darkColor: '#438296',text: 'lilybutton', link: '/lily'},
      { icon: 'elena', color: '#fba150', darkColor: '#bd793e',text: 'elenabutton', link: '/elena'},
      { icon: 'anko', color: '#21b9da', darkColor: '#1e8b99',text: 'ankobutton', link: '/anko'},
      { icon: 'lock', color: '#e55555', darkColor: '#934848',text: 'lockbutton', link: '/lock'}
    ],
  }),
  mounted() {
    this.scrolled();

    // 初始化top
    this.setTopBg();

  },
  methods: {
    scrolled() {
      let padding = parseInt(this.$refs.appMain.$el.style.paddingTop)
      this.isShowLogo = padding !== 56;

      // if (this.$refs.appSheet.$el.scrollTop>100 && this.$refs.appbar.$el.style.maxHeight === "128px"){
      //   this.$refs.appbar.$el.style.maxHeight = "56px";
      //   this.$refs.appMain.$el.height = window.offsetHeight;
        // let pageH = window.innerHeight
        // let scrollTop = this.$refs.appSheet.$el.scrollTop
        // let padding = parseInt(this.$refs.appMain.$el.style.paddingTop)
        // // this.$refs.appSheet.$el.style.maxHeight = pageH - padding + "px"
        // console.log("scrollTop:"+scrollTop+"   pageH:"+pageH+"    maxHeight:"+this.$refs.appSheet.$el.style.maxHeight+"    padding:"+padding)
        // this.isShowLogo = padding !== 56;
      // }
      // if(this.$refs.appSheet.$el.scrollTop<100 && this.$refs.appbar.$el.style.maxHeight === "56px"){
      //   this.$refs.appbar.$el.style.maxHeight = "128px";
      // }

    },
    onScroll(e) {
      // TODO:自制滚动条
    },
    changePage(page,color,darkColor,link){
      this.page = link.slice(1);
      this.current_page = this.$t("app."+page);
      this.current_color = this.$vuetify.theme.dark?darkColor:color;
      this.current_topbg = 'https://img.colter.top/vivid/img'+link+'/topbg01.png'
    },
    changeLanguage(type){
      localStorage.setItem('locale',type);
      this.$i18n.locale = type;
      this.isLanguageBoxOn = false;
      this.$store.state.lang = this.$i18n.locale;
      this.setTopBg();
    },
    setTopBg(){
      for(let i=0; i<this.items.length;i++){
        if ('/links'===window.location.pathname){
          this.changePage('links','blue','light-blue darken-3','/links');
          this.item = 6;
          break;
        }
        if ('/about'===window.location.pathname){
          this.changePage('about','light-blue','light-blue darken-3','/about');
          this.item = 7;
          break;
        }
        if (this.items[i].link===window.location.pathname){
          this.changePage(this.items[i].text,this.items[i].color,this.items[i].darkColor,this.items[i].link);
          this.item = i;
          break;
        }
      }
    }
  },
  computed: {
    innerHeight(){
      return window.innerHeight-50+'px'
    },
    logoPath(){
      return 'https://img.colter.top/vivid/img/'+this.page+'/logo.png'
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

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter{
    transform: translateX(10px);
    opacity: 0;
  }
  .slide-fade-leave-to {
    transform: translateX(-10px);
    opacity: 0;
  }
</style>

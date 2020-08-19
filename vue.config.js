const path = require('path');//引入path模块
function resolve(dir){
  return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack:(config)=>{
    config.resolve.alias
        .set('@',resolve('./src'))
        .set('components',resolve('./src/components'))
        .set('assets',resolve('./src/assets'))
        .set('common',resolve('./src/common'))
        .set('network',resolve('./src/network'))
        .set('views',resolve('./src/views'))
    //set第一个参数：设置的别名，第二个参数：设置的路径

  },
  pwa: {
    name: 'ViViD Button',
    themeColor: '#f48fb1',
    msTileColor: '#f48fb1',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      favicon32: './public/img/icons/favicon-32x32.png',
      favicon16: './public/img/icons/favicon-16x16.png',
      appleTouchIcon: './public/img/icons/apple-touch-icon-152x152.png',
      maskIcon: './public/img/icons/safari-pinned-tab.svg',
      msTileImage: './public/img/icons/msapplication-icon-144x144.png'
    },
    workboxOptions: {
      // https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
      skipWaiting: true,
      clientsClaim: true,
      importWorkboxFrom: 'local',
      importsDirectory: 'js',
      navigateFallback: '/',
      navigateFallbackBlacklist: [/\/api\//]
    }
  }
}
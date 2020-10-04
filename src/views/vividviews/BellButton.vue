<template>

	<container :info="bellInfo" :dialogs="dialogs"/>

</template>

<script>

	import Container from "../container/Container";

	export default {
		name: "MemoryButton",
		components: {Container},
		data: ()=>({
			bellInfo: {
				name: "Bell",
				btnBgCount: 6,
				lightColor: "#ffdbe9",
				darkColor: "#99566f",//rgba(255,115,167,0.55)
				progressColor: "#f990ca",
				bilibili: {name: "猫芒ベル_Official",id: "487550002"},
				youtube: {name: "猫芒ベル-Bell Nekonogi",id: "UCflNPJUJ4VQh1hGDNK7bsFg"},
				twitter: {name: "猫芒ベル🔔ViViD所属",id: "bell_nekonogi"},
        info: {zh:"音量注意！9.4更新52个音频",ja:"ボリュームに注意してください！",en:"Note the volume!"},
				// 歌: {zh: "如果你对哪首歌有质疑，请联系我删除！", ja: "どの曲について質問がある場合は、私に連絡して削除してください！", en: "If you have questions about which song, please contact me to delete it!"}
			},
      dialogs: [
        {
          lightColor: "#ffdbe9",
          darkColor: "#99566f",
          btnBg: "https://img.colter.top/vivid/img/bell/btnbg01.png!web",
          btnText: "耳膜出售",
          title: "耳膜出售",
          imgHeight: "0",
          text: "耳膜出售 敬请期待",
          producer: {bid: "32868931", name: "Colter"},
          download: [
          ]
        },
        {
          lightColor: "#ffdbe9",
          darkColor: "#99566f",
          btnBg: "https://img.colter.top/vivid/img/others/win10logo.png!web",
          btnText: "Bell win主题",
          title: "Bell windows主题",
          img: "https://img.colter.top/vivid/img/others/bell主题.png!web",
          imgHeight: "500",
          text: "Bell windows主题 包含了Bell语音提示包 Bell鼠标指针 建议直接下载安装主题 要不声音手动安装有点麻烦",
          producer: {bid: "32868931", name: "Colter"},
          download: [
            {text:"下载", link: "https://img.colter.top/vivid/files/Bell主题.deskthemepack"},
            {text:"下载-像素鼠标版", link: "https://img.colter.top/vivid/files/Bell主题-像素鼠标版.deskthemepack"}
          ]
        },
        {
          lightColor: "#ffdbe9",
          darkColor: "#99566f",
          btnBg: "https://img.colter.top/vivid/img/bell/btnbg01.png!web",
          btnText: "Bell语音提示包",
          title: "Bell语音提示包",
          img: "https://img.colter.top/vivid/img/others/bell提示音包.png!web",
          imgHeight: "200",
          text: "Bell windows语音提示包",
          producer: {bid: "32868931", name: "Colter"},
          download: [
            {text:"下载", link: "https://img.colter.top/vivid/files/Bell Windows提示音包1.0.zip"}
          ]
        },
        {
          lightColor: "#ffdbe9",
          darkColor: "#99566f",
          btnBg: "https://img.colter.top/vivid/img/others/bell鼠标btnbg1.png!web",
          btnText: "Bell鼠标指针",
          title: "Bell鼠标指针",
          img: "https://img.colter.top/vivid/img/others/bell鼠标.png!web",
          imgHeight: "500",
          text: "使用时请把鼠标指针大小调到2或以上 如果你还是觉得鼠标看不清就试试像素版的吧",
          producer: {bid: "32868931", name: "Colter"},
          painter: {bid: "10425332", name: "赤川"},
          download: [
            {text:"下载", link: "https://img.colter.top/vivid/files/bell鼠标.zip"}
          ]
        },
        {
          lightColor: "#ffdbe9",
          darkColor: "#99566f",
          btnBg: "https://img.colter.top/vivid/img/others/bell鼠标btnbg2.png!web",
          btnText: "Bell鼠标指针-像素版",
          title: "Bell鼠标指针-像素版",
          img: "https://img.colter.top/vivid/img/others/bell鼠标2.0.png!web",
          imgHeight: "500",
          text: "此版为32x32像素风",
          producer: {bid: "32868931", name: "Colter"},
          painter: {bid: "10425332", name: "赤川"},
          download: [
            {text:"下载", link: "https://img.colter.top/vivid/files/bell鼠标2.0.zip"}
          ]
        },
        {
          lightColor: "#ffdbe9",
          darkColor: "#99566f",
          btnBg: "https://img.colter.top/vivid/img/others/此电脑.png",
          btnText: "Bell桌面图标",
          title: "Bell桌面图标1.0",
          img: "https://img.colter.top/vivid/img/others/bell桌面图标.png!web",
          imgHeight: "500",
          text: "Bell桌面图标1.0",
          producer: {bid: "32868931", name: "Colter"},
          painter: {bid: "10425332", name: "赤川"},
          download: [
            {text:"下载", link: "https://img.colter.top/vivid/files/bell桌面图标.zip"}
          ]
        },
        {
          lightColor: "#ffdbe9",
          darkColor: "#99566f",
          btnBg: "https://img.colter.top/vivid/img/others/bell搜狗皮肤btnbg.png!web",
          btnText: "Bell搜狗皮肤",
          title: "Bell搜狗输入法皮肤",
          img: "https://img.colter.top/vivid/img/others/bell搜狗皮肤.png!web",
          imgHeight: "500",
          text: "Bell搜狗输入法皮肤",
          producer: {bid: "32868931", name: "Colter"},
          painter: {bid: "10425332", name: "赤川"},
          download: [
            {text:"下载", link: "https://img.colter.top/vivid/files/bell搜狗皮肤.ssf"}
          ]
        },
        {
          lightColor: "#ffdbe9",
          darkColor: "#99566f",
          btnBg: "https://img.colter.top/vivid/img/others/bell动态壁纸btn.png!web",
          btnText: "Bell动态壁纸",
          title: "Bell动态壁纸",
          img: "https://img.colter.top/vivid/img/others/bell动态壁纸.png!web",
          imgHeight: "500",
          text: "Bell动态壁纸",
          producer: {bid: "669254049", name: "雪迷狐"},
          painter: {bid: "611842", name: "Syakou"},
          download: [
            {text:"Wallpaper Engine", link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2155915122"}
          ]
        },
        {
          lightColor: "#ffdbe9",
          darkColor: "#99566f",
          btnBg: "https://img.colter.top/vivid/files/bell头像框1.png!web",
          btnText: "Bell头像框1",
          title: "Bell头像框1",
          img: "https://img.colter.top/vivid/files/bell头像框1.png!web",
          imgHeight: "500",
          text: "Bell头像框1",
          painter: {bid: "3249148", name: "lariss"},
          download: [
            {text:"下载", link: "https://img.colter.top/vivid/files/bell头像框1.png"}
          ]
        },
        {
          lightColor: "#ffdbe9",
          darkColor: "#99566f",
          btnBg: "https://img.colter.top/vivid/files/bell头像框2.png!web",
          btnText: "Bell头像框2",
          title: "Bell头像框2",
          img: "https://img.colter.top/vivid/files/bell头像框2.png!web",
          imgHeight: "500",
          text: "Bell头像框2",
          painter: {bid: "3249148", name: "lariss"},
          download: [
            {text:"下载", link: "https://img.colter.top/vivid/files/bell头像框2.png"}
          ]
        },
        {
          lightColor: "#ffdbe9",
          darkColor: "#99566f",
          btnBg: "https://img.colter.top/vivid/img/bell/btnbg01.png!web",
          btnText: "Bell同人游戏",
          title: "Bell同人游戏",
          img: "https://img.colter.top/vivid/img/others/bell同人游戏.png!web",
          imgHeight: "400",
          text: "Bell同人RPG游戏 视频：BV1BZ4y1u7BE",
          producer: {bid: "3249148", name: "lariss"},
          download: [
            {text:"下载 107M", link: "https://img.colter.top/vivid/files/萌宠bell的奇妙冒险.zip"}
          ]
        },
        {
          lightColor: "#ffdbe9",
          darkColor: "#99566f",
          btnBg: "https://img.colter.top/vivid/img/bell/btnbg01.png!web",
          btnText: "Bell表情包",
          title: "Bell表情包",
          img: "https://img.colter.top/vivid/img/others/bell同人游戏.png!web",
          imgHeight: "0",
          text: "Bell表情包 敬请期待",
          producer: {bid: "32868931", name: "Colter"},
          download: []
        },
        {
          lightColor: "#ffdbe9",
          darkColor: "#99566f",
          btnBg: "https://img.colter.top/vivid/img/bell/btnbg01.png!web",
          btnText: "广告位招租",
          title: "广告位招租",
          img: "https://img.colter.top/vivid/img/others/bell同人游戏.png!web",
          imgHeight: "0",
          text: "广告位招租😏（×",
          download: []
        }
      ]
		})
	}
</script>

<style scoped>

</style>

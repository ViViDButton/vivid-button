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
        info: {zh:"音量注意！",ja:"ボリュームに注意してください！",en:"Note the volume!"},
				歌: {zh: "如果你对哪首歌有质疑，请联系我删除！", ja: "どの曲について質問がある場合は、私に連絡して削除してください！", en: "If you have questions about which song, please contact me to delete it!"}
			},
      dialogs: [
        {
          lightColor: "#ffdbe9",
          darkColor: "#99566f",
          btnBg: "https://img.colter.top/vivid/img/bell/btnbg01.png!web",
          btnText: "Bell鼠标指针",
          title: "Bell鼠标指针",
          img: "https://img.colter.top/vivid/img/others/bell鼠标.png!web",
          text: "使用时请把鼠标指针大小调到2或以上",
          producer: {bid: "32868931", name: "Colter"},
          painter: {bid: "10425332", name: "赤川"},
          download: [
            {text:"下载", link: "https://img.colter.top/vivid/files/bell鼠标.zip"}
          ]
        },
        {
          lightColor: "#ffdbe9",
          darkColor: "#99566f",
          btnBg: "https://img.colter.top/vivid/img/bell/btnbg01.png!web",
          btnText: "Bell鼠标指针-像素版",
          title: "Bell鼠标指针-像素版",
          img: "https://img.colter.top/vivid/img/others/bell鼠标2.0.png!web",
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
          btnBg: "https://img.colter.top/vivid/img/bell/btnbg01.png!web",
          btnText: "Bell头像框1",
          title: "Bell头像框1",
          img: "https://img.colter.top/vivid/files/bell头像框1.png!web",
          text: "Bell头像框1",
          painter: {bid: "3249148", name: "lariss"},
          download: [
            {text:"下载", link: "https://img.colter.top/vivid/files/bell头像框1.png"}
          ]
        },
        {
          lightColor: "#ffdbe9",
          darkColor: "#99566f",
          btnBg: "https://img.colter.top/vivid/img/bell/btnbg01.png!web",
          btnText: "Bell头像框2",
          title: "Bell头像框2",
          img: "https://img.colter.top/vivid/files/bell头像框2.png!web",
          text: "Bell头像框2",
          painter: {bid: "3249148", name: "lariss"},
          download: [
            {text:"下载", link: "https://img.colter.top/vivid/files/bell头像框2.png"}
          ]
        }
      ]
		})
	}
</script>

<style scoped>

</style>

import {request} from './request'

export function getBiliBiliFan(uid) {
	return request({
		url: 'https://bird.ioliu.cn/v1?url=https://api.bilibili.com/x/relation/stat?vmid='+uid
	})
}

export function getYouTubeFan(user) {
	return request({
		url: 'https://www.googleapis.com/youtube/v3/channels?part=statistics&key=AIzaSyCKUgefjpXwiUEQUU8x6AxdEVJKRPKE3s8&id='+user
	})
}

export function getVoiceList(name) {
	return request({
		// url: 'https://img.colter.top/vivid/voices/'+name+'bellvoices.json'
		url: 'https://api.vividbtn.top/get-voice',
		params:{
			'vtb-name':name
		}
	})
}

export function getIp() {
	return request({
		url: 'https://bird.ioliu.cn/ip',
	})
}

export function getArea() {
	return getIp().then(res=>{
		return request({
			url: 'https://bird.ioliu.cn/v1?url=https://www.ip.cn/api/index?type=1',
			params:{
				'ip':res.data.ip
			}
		})
	})

}

export function getFanData(name,page,count) {
	return request({
		url: 'https://bird.ioliu.cn/v1?url=http://colter.top:3000/'+name+'/'+page+'/'+count
	})
}

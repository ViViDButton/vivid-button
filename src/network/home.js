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
		url: 'https://img.colter.top/vivid/voices/'+name+'voices.json'
	})
}

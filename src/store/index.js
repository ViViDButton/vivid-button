import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    serverUrl: 'https://img.colter.top/vivid/',
    audioVolume: Number,
    area: String
  },
  mutations: {
    setAudioVolume(state,value){
      this.state.audioVolume = value;
    },
    setArea(state,value){
      this.state.area = value
    }
  },
  actions: {
  },
  modules: {
  }
})

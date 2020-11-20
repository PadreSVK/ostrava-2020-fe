import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export default new Vuex.Store(
  {
    state: {
      myData: "my    Value",
      myData2: "my  another  Value"
    },
    mutations: {
      UPDATE_MY_VALUE(state, { myData }) {
        state.myData = myData
      }
    },
    actions: {
      async loadMyData({ commit }) {
        await delay(5000)
        commit("UPDATE_MY_VALUE", { myData: "my changedData" })
      }
    },
    getters: {
      myModifiedData: (state) => `${state.myData} ++++ ${state.myData2}`
    }
  }

)

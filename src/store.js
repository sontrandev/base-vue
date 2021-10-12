import { createStore } from 'vuex'

// Create a new store instance
const store = createStore({
  state () {
    return {
      count: 0,
      transaction: null
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setTransaction (state, transactionPayload) {
      state.transaction = transactionPayload
    }
  },
  actions: {
    async fetchTransaction ({ commit }, { id }) {
      const res = await fetch('http://localhost:3000/transactions/' + id)
      const data = await res.json()
      commit('setTransaction', data)
    }
  }
})

export default store

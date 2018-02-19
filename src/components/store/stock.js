import stocks from '@/data/stocks.js'

const state = {
  stocks: []
};

const actions = {
  BUY_STOCKS({commit}, order){
    commit('BUY_STOCK', order)
  },
  INIT_STOCKS({commit}){
    commit('SET_STOCKS', stocks)
  },
  RANDOMIZE_STOCKS({commit}) {
    commit('RND_STOCKS');
  }
};

const mutations = {
  SET_STOCKS(state, stocks) {
    return state.stocks = stocks;
  },
  RND_STOCKS(state) {

  }
};

const getters = {
  stocks(state) {
    return state.stocks;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
}

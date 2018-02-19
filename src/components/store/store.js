import Vue from 'vue';
import Vuex from 'vuex';
import stocks from './stock.js'
import portfolio from './portfolio.js'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    stocks,
    portfolio
  }
})

export default store

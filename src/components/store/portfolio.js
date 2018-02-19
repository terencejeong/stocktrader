const state = {
  funds: 10000,
  stocks: []
}

const actions = {
  SELLING_STOCKS({commit}, order) {
    commit('SELL_STOCK', order)
  }
}

const mutations = {
  // ES6 destructuring the order property.
  BUY_STOCK(state, {stockId, quantity, stockPrice}) {
    // checking if we have the stock in the array.
    const record = state.stocks.find(element => element.id == stockId);
    if(record) {
      record.quantity += quantity
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      })
    }
    state.funds -= stockPrice * quantity
  },
  SELL_STOCK(state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(element => element.id == stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1)
    }
    state.funds += stockPrice * quantity
  }
}

const getters = {
  // getters allow us to access getter methods in the store.
  getStockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    });
  },
  funds(state) {
    return state.funds
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}

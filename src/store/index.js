import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tickets: []
  },
  getters: {
    ticketsArray: state => {
      return state.tickets
    }
  },
  mutations: {
    addTicket(state, ticket) {
      state.tickets.push(ticket)
    },
    clearTickets(state) {
      while (state.tickets.length > 0)
        state.tickets.pop()
    },
    sortTickets(state, sortBy) {
      state.tickets.sort(sortBy)
    }
  },
  actions: {
    addTicket(context, ticket) {
      context.commit('addTicket', ticket)
    },
    clearTickets(context) {
      context.commit('clearTickets')
    },
    sortTickets(context, sortBy) {
      context.commit('sortTickets', sortBy)
    }
  },
  modules: {
  }
})

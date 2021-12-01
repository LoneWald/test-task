import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/searchTickets',
    name: 'SearchTickets',
    component: () => import('../views/SearchTickets.vue')
  },
  {
    path: '/searchTickets/:departArea/:arrivalArea/:departDate',
    name: 'SearchTicketsByParam',
    component: () => import('../views/SearchTickets.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

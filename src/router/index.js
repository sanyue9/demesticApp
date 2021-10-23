import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Message from '@/views/Message'
import Publish from '@/views/Publish'
import User from '@/views/User'
import ServiceDetail from '@/otherView/ServiceDetail'
import Call from '@/otherView/Call'
import Book from '@/otherView/Book'
import AdressList from '@/otherView/AdressList'
import Confirm from '@/otherView/Confirm'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/pub', component: Publish },
  { path: '/msg', component: Message },
  { path: '/user', component: User },
  { path: '/home/ServiceDetail', component: ServiceDetail },
  { path: '/call', component: Call },
  { path: '/book', component: Book },
  { path: '/book/addressList', component: AdressList },
  { path: '/book/confirm', component: Confirm }
]

const router = new VueRouter({
  routes
})

export default router

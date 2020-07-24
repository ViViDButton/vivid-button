import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  // {
  //   path: '/',
  //   redirect: '/bell'
  // },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/bell',
    name: 'BellButton',
    component: () => import('../views/bellbutton/BellButton.vue')
  },
  {
    path: '/memory',
    name: 'MemoryButton',
    component: () => import('../views/memorybutton/MemoryButton.vue')
  },
  {
    path: '/lily',
    name: 'LilyButton',
    component: () => import('../views/lilybutton/LilyButton.vue')
  },
  {
    path: '/elena',
    name: 'ElenaButton',
    component: () => import('../views/elenabutton/ElenaButton.vue')
  },
  {
    path: '/anko',
    name: 'AnkoButton',
    component: () => import('../views/ankobutton/AnkoButton.vue')
  },
  {
    path: '/lock',
    name: 'LockButton',
    component: () => import('../views/lockbutton/LockButton.vue')
  },
  {
    path: '/links',
    name: 'LockButton',
    component: () => import('../views/links/Links.vue')
  },
  {
    path: '/about',
    name: 'LockButton',
    component: () => import('../views/about/About.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

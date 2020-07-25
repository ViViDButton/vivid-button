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
    component: () => import('../views/vividviews/BellButton.vue')
  },
  {
    path: '/memory',
    name: 'MemoryButton',
    component: () => import('../views/vividviews/MemoryButton.vue')
  },
  {
    path: '/lily',
    name: 'LilyButton',
    component: () => import('../views/vividviews/LilyButton.vue')
  },
  {
    path: '/elena',
    name: 'ElenaButton',
    component: () => import('../views/vividviews/ElenaButton.vue')
  },
  {
    path: '/anko',
    name: 'AnkoButton',
    component: () => import('../views/vividviews/AnkoButton.vue')
  },
  {
    path: '/lock',
    name: 'LockButton',
    component: () => import('../views/vividviews/LockButton.vue')
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

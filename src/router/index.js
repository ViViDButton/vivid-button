import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/bell'
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: () => import('../views/home/Home.vue')
  // },
  {
    path: '/bell',
    name: 'BellButton',
    component: () => import('../views/vividviews/BellButton.vue'),
    meta:{
      title: 'BellButton'
    }
  },
  {
    path: '/memory',
    name: 'MemoryButton',
    component: () => import('../views/vividviews/MemoryButton.vue'),
    meta:{
      title: 'MemoryButton'
    }
  },
  {
    path: '/lily',
    name: 'LilyButton',
    component: () => import('../views/vividviews/LilyButton.vue'),
    meta:{
      title: 'LilyButton'
    }
  },
  {
    path: '/elena',
    name: 'ElenaButton',
    component: () => import('../views/vividviews/ElenaButton.vue'),
    meta:{
      title: 'ElenaButton'
    }
  },
  {
    path: '/anko',
    name: 'AnkoButton',
    component: () => import('../views/vividviews/AnkoButton.vue'),
    meta:{
      title: 'AnkoButton'
    }
  },
  {
    path: '/lock',
    name: 'LockButton',
    component: () => import('../views/vividviews/LockButton.vue'),
    meta:{
      title: 'LockButton'
    }
  },
  {
    path: '/links',
    name: 'Links',
    component: () => import('../views/links/Links.vue'),
    meta:{
      title: 'Links'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about/About.vue'),
    meta:{
      title: 'About'
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

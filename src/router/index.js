import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index'
import CurrentMovies from 'components/currentmovies'
import Search from 'components/search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component: Index
    },
    {
      path: '/topmovies',
      name: 'index',
      component: Index
    },
    {
      path: '/intheater',
      name: 'intheater',
      component: CurrentMovies
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

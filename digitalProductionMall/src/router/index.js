import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import Apple from '@/pages/apple'
import Detail from '@/pages/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    }, {
      path: '/apple',
      name: 'apple',
      component: Apple
    }, {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})

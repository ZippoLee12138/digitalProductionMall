import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import Apple from '@/pages/apple'
import Detail from '@/pages/detail'
import Analysis from '@/pages/detail/analysis'
import Count from '@/pages/detail/count'
import Forecast from '@/pages/detail/forecast'
import Publish from '@/pages/detail/publish'
import OrderList from '@/pages/orderList'

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
      component: Detail,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'analysis',
          component: Analysis
        }, {
          path: 'count',
          component: Count
        }, {
          path: 'forecast',
          component: Forecast
        }, {
          path: 'publish',
          component: Publish
        }

      ]
    }, {
      path: '/orderList',
      name: 'orderList',
      component: OrderList
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import menu from '@/examples/menu'
import API from '@/examples/API'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/daily',
      name: 'dailyDemo',
      component: menu
    },
    { 
      path: '/API',
      name:'API',
      component: API
    }
  ]
})

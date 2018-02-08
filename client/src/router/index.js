import Vue from 'vue'
import Router from 'vue-router'
import Introduce from '@/components/Introduce'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Introduce',
      component: Introduce
    }
  ]
})

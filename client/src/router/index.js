import Vue from 'vue'
import Router from 'vue-router'
import Introduce from '@/components/Introduce'
import Salary from '@/components/Salary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Introduce',
      component: Introduce
    },
    {
      path:'/1-1',
      name:'Salary',
      component:Salary
    }
  ]
})

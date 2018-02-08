import Vue from 'vue'
import Router from 'vue-router'
import Introduce from '@/components/Introduce'
import SalaryAdmin from '@/components/SalaryAdmin'
import SalaryEmployee from '@/components/SalaryEmployee'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Introduce',
      component: Introduce
    },
    {
      path: '/1-1',
      name: 'SalaryAdmin',
      component: SalaryAdmin
    },
    {
      path: '/1-2',
      name: 'SalaryEmployee',
      component: SalaryEmployee
    }
  ]
})

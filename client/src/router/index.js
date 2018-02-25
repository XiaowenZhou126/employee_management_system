import Vue from 'vue'
import Router from 'vue-router'
import Introduce from '@/components/Introduce'
import SalaryAdmin from '@/components/SalaryAdmin'
import SalaryEmployee from '@/components/SalaryEmployee'
import LeaveFormE from '@/components/LeaveFormE'
import AppliedLeaveFormE from '@/components/AppliedLeaveFormE'

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
    },
    {
      path: '/2-1',
      name: 'LeaveFormE',
      component: LeaveFormE
    },
    ,
    {
      path: '/2-2',
      name: 'AppliedLeaveFormE',
      component: AppliedLeaveFormE
    }
  ]
})

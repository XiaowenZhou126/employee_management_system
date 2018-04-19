import Vue from 'vue';
import Router from 'vue-router';
import Introduce from '@/components/Introduce';
import look_notices from '@/components/lookNotices';
import release_notices from '@/components/releaseNotices';
import modify_pwd from '@/components/ModifyPwd';
import salary_admin from '@/components/SalaryAdmin';
import salary_employee from '@/components/SalaryEmployee';
import permit_a_leave_admin from '@/components/PermitALeave';
import through_leave_admin from '@/components/ThroughLeave';
import attendance_record_admin from '@/components/AttendanceRecord';
import apply_employee from '@/components/Apply';
import apply_record_employee from '@/components/ApplyRecord';
import edit_info_admin from '@/components/EditInfoAdmin';
import add_position_admin from '@/components/AddPosition';
import edit_info_employee from '@/components/EditInfoEmployee';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Introduce',
      component: Introduce
    },
    // 1 & 2
    {
      path:'/look_notices',
      name: 'look_noticesn',
      component: look_notices
    },
    {
      path:'/release_notices',
      name: 'release_notices',
      component: release_notices
    },
    // 2-admin
    {
      path: '/salary_admin',
      name: 'salary_admin',
      component: salary_admin
    },
    // 2-em
    {
      path: '/salary_employee',
      name: 'salary_employee',
      component: salary_employee
    },
    // 3-admin
    {
      path: '/permit_a_leave_admin',
      name: 'permit_a_leave_admin',
      component: permit_a_leave_admin
    },
    {
      path:'/through_leave_admin',
      name: 'through_leave_admin',
      component: through_leave_admin
    },
    {
      path:'/attendance_record_admin',
      name: 'attendance_record_admin',
      component: attendance_record_admin
    },
    // 3-em
    {
      path: '/apply_employee',
      name: 'apply_employee',
      component: apply_employee
    },
    {
      path: '/apply_record_employee',
      name: 'apply_record_employee',
      component: apply_record_employee
    },
    // 4-admin
    {
      path:'/edit_info_admin',
      name:'edit_info_admin',
      component:edit_info_admin
    },
    {
      path:'/add_position_admin',
      name:'add_position_admin',
      component:add_position_admin
    },
    // 4-em
    {
      path:'/edit_info_employee',
      name:'edit_info_employee',
      component:edit_info_employee
    },
    {
      path:'/modify_pwd',
      name:'modify_pwd',
      component:modify_pwd
    }
  ]
});

<template>
  <div id="app" style="min-width:992px;">
    <el-header style="font-size: 12px; padding:0">
      <el-row type="flex" class="row-bg" justify="space-between" style="height:60px;">
        <el-col :span="4" style="min-width:200px;text-align: center;background-color:#3186DC; ">
          <h1 style="display: inline-block;margin:0; letter-spacing: 0.3em;">内部管理</h1>
        </el-col>
        <el-col :md="4" :xs="5">
          <el-dropdown>
            <span style="margin:-1px 30px 0 0;font-size:16px;">
              {{account}}&nbsp;&nbsp;
              <i class="el-icon-setting"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-if="!isHighest">
                <router-link to="/edit_info_employee" style="color: #606266;text-decoration: none;">
                  个人中心
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>登出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-badge style="badge_item" :value="noticeCount" :max="99">
            <router-link to="/look_notices" style="color: #606266;text-decoration: none;">
              <el-button icon="el-icon-message" type="primary" style="padding: 0 ;font-size:28px;" @click="resetNoticeCount"></el-button>
            </router-link>
          </el-badge>
        </el-col>
      </el-row>
    </el-header>
    <el-container id="container">
      <el-aside width="200px" style="background-color:#545c64">
        <el-menu :default-openeds="['1','2','3','4']" background-color="#545c64" text-color="#fff" router active-text-color="#ffd04b"
          style="border-color:#545c64">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>公告板</span>
            </template>
            <el-menu-item index="look_notices">查看公告</el-menu-item>
            <el-menu-item index="release_notices" v-if="isAddNotice">发布</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>工资管理</span>
            </template>
            <el-menu-item index="salary_admin" v-if="isHighest">工资发放情况</el-menu-item>
            <el-menu-item index="salary_employee" v-else>查看月工资发放</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>请假</span>
            </template>
            <el-menu-item index="permit_a_leave_admin" v-if="isHighest">待审核</el-menu-item>
            <el-menu-item index="apply_employee" v-else>请假申请表</el-menu-item>
            <el-menu-item index="through_leave_admin" v-if="isHighest">已审核</el-menu-item>
            <el-menu-item index="attendance_record_admin" v-if="isHighest">考勤情况</el-menu-item>
            <el-menu-item index="apply_record_employee" v-else>已申请记录</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>个人中心</span>
            </template>
            <el-menu-item index="edit_info_admin" v-if="isHighest">编辑员工信息</el-menu-item>
            <el-menu-item index="edit_info_employee" v-else>编辑个人信息</el-menu-item>
            <el-menu-item index="add_position_admin" v-if="isHighest">增加岗位</el-menu-item>
            <el-menu-item index="modify_pwd" >密码修改</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    // accunt 账户名
    // isAddNotice 是否有 发布公告的权限（即经理和管理员)
    // isHighest 是否拥有最高权限，即管理员权限
    // newNotice 未读公告
    return {
      account: "王小虎",
      isAddNotice: true,
      isHighest: false,
      noticeCount: 100,
    };
  },
  mounted() {
    var h = $(window).height() - $("header").height() + "px";
    $("#container").css("min-height", h);
  },
  methods: {
    resetNoticeCount: function() {
      this.noticeCount = 0;
    }
  }
};
</script>


<style>
body {
  margin: 0 auto;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.el-header {
  background-color: #399bff;
  color: #ffffff;
  line-height: 60px;
}

.h-btn,
.h-btn:hover {
  height: 60px;
  width: 60px;
  border: none;
  border-left-width: 1px;
  border-left-color: #666;
  border-left-style: solid;
  text-align: center;
  border-radius: 0;
  background-color: transparent;
  color: #000000;
}

.clearBtnStyle,
.clearBtnStyle:hover {
  background-color: transparent;
  border: none;
}

.el-badge__content.is-fixed {
  top: 10px;
}
</style>


<template>
  <div id="app">
    <el-header style="font-size: 12px; padding:0">
      <el-row type="flex" class="row-bg" justify="space-between" style="height:60px;">
        <el-col :span="3" style="text-align: center;background-color:#3186DC; ">
          <h1 style="display: inline-block;margin:0; letter-spacing: 0.3em;">内部管理</h1>
        </el-col>
        <el-col :span="2">
          <el-row>
            <el-col :span="15">
              <span style="margin-right: 15px">{{account}}</span>
              <el-dropdown>
                <i class="el-icon-setting"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item></el-dropdown-item>
                  <el-dropdown-item>
                    <router-link to="/3-1" style="color: #606266;text-decoration: none">
                      个人中心
                    </router-link>
                  </el-dropdown-item>
                  <el-dropdown-item>登出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :span="4">
              <el-popover placement="bottom" width="200" trigger="hover">
                <el-collapse accordion>
                  <el-row>
                    <el-col :span="18">
                      <div style="line-height: 40px;">最新公告</div>
                    </el-col>
                    <el-col :span="6">
                      <div>
                        <el-button icon="el-icon-plus" class="clearBtnStyle" v-if="isAddNotice"></el-button>
                      </div>
                    </el-col>
                  </el-row>
                  <el-collapse-item v-for="item in newNotice" v-bind:key="item.id" v-bind:title="item.title" v-bind:name="item.name">
                    {{item.text}}
                  </el-collapse-item>
                </el-collapse>
                <el-button slot="reference" class="h-btn">
                  <i class="el-icon-message" style="font-size:1.5em"></i>
                </el-button>
              </el-popover>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-header>
    <el-container style="height: 800px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color:#545c64">
        <el-menu :default-openeds="['1','2','3']" background-color="#545c64" text-color="#fff" router active-text-color="#ffd04b"
          style="border-color:#545c64">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>工资</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">查看工资的发放</el-menu-item>
              <el-menu-item index="1-2">导出工资条</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>请假</span>
            </template>
            <el-menu-item index="2-1">请假申请表</el-menu-item>
            <el-menu-item index="2-2">已申请</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>个人中心</span>
            </template>
            <el-menu-item index="3-1">基本信息</el-menu-item>
            <el-menu-item index="3-2">密码修改</el-menu-item>
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
      const item = {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      };
      // accunt 账户名
      // isAddNotice 是否有 发布公告的权限
      // newNotice 未读公告
      return {
        account: "王小虎",
        isAddNotice: true,
        newNotice: [{
            id: 0,
            text: "与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；",
            title: "一致性 Consistency",
            name: "1"
          },
          {
            id: 1,
            text: "与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；",
            title: "反馈 Feedback",
            name: "2"
          }
        ]
      };
    }
  };

</script>


<style>
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

</style>


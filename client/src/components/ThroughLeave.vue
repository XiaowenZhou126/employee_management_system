<template>
  <div>
    <h1>已审核</h1>
    <el-table :data="leaveData" style="width: 100%">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="dateForLeave" label="申请日期" ></el-table-column>
      <el-table-column prop="employeeID" label="工号" ></el-table-column>
      <el-table-column prop="name" label="申请人"></el-table-column>
      <el-table-column  prop="tag" label="审核意见" :filters="[{ text: '通过', value: '通过' }, { text: '未通过', value: '未通过' }]" :filter-method="filterTag"  filter-placement="bottom-start">
      <template slot-scope="scope">
        <el-tag :type="scope.row.tag === '通过' ? 'success' : 'danger'" close-transition>{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>
      <el-table-column type="expand" fixed="right">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="部门名称">
              <span>{{ props.row.department }}</span>
            </el-form-item>
            <el-form-item label="部门职位">
              <span>{{ props.row.position }}</span>
            </el-form-item>
            <el-form-item label="请假/调休时间">
              <span>{{ props.row.dateForLeave }}</span>
            </el-form-item>
            <el-form-item label="">
              <span></span>
            </el-form-item>
            <el-form-item label="请假原因">
              <span>{{ props.row.reasonForLeave }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "LeaveFormAdmin",
    data() {
      return {
        leaveData: [{
          employeeID: "20170101",
          name: "王小虎",
          department: "销售部",
          position: "经理",
          reasonForLeave: "事假",
          dateForLeave: "2017年11月29日 至 2017年12月01日",
          tag:"通过"
        }, {
          employeeID: "20170212",
          name: "王虎",
          department: "市场部",
          position: "普通员工",
          reasonForLeave: "事假",
          dateForLeave: "2017年11月29日 至 2017年12月01日",
          tag:"未通过"
        }, {
          employeeID: "20170125",
          name: "王小二",
          department: "销售部",
          position: "普通员工",
          reasonForLeave: "事假",
          dateForLeave: "2017年11月29日 至 2017年12月01日",
          tag:"通过"
        }]
      };
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-weight: normal;
  }

  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

</style>



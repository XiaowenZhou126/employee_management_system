<template>
  <div class="mainPersonal">
    <h1>已申请记录</h1>
    <el-table :data="applyData" style="" stripe highlight-current-row>
      <el-table-column fixed type="index"></el-table-column>
      <el-table-column prop="employeeID" label="工号" min-width="90"></el-table-column>
      <el-table-column prop="name" label="申请人"></el-table-column>
      <el-table-column prop="reason" label="请假原因"></el-table-column>
      <el-table-column prop="duration" label="请假/调休时间" min-width="250"></el-table-column>
      <el-table-column prop="department" label="部门名称"></el-table-column>
      <el-table-column prop="position" label="部门职位"></el-table-column>
      <el-table-column prop="paid" label="审核意见" fixed="right" width="88" :filters="[{ text: '通过', value: '通过' }, { text: '未通过', value: '未通过' }]"
        :filter-method="filterTag" filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag :type="scope.row.audit === '通过' ? 'success' : 'danger'" close-transition>{{scope.row.audit}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "AppliedLeaveFormE",
  data() {
    return {
      applyData: [
        {
          employeeID: "20170101",
          name: "王小虎",
          department: "销售部",
          position: "经理",
          reason: "事假",
          duration: "2017年11月29日至2017年12月01日",
          audit: "通过"
        },
        {
          employeeID: "20170101",
          name: "王小虎",
          department: "销售部",
          position: "经理",
          reason: "事假",
          duration: "2017年12月29日至2018年1月01日",
          audit: "通过"
        }
      ]
    };
  },
  methods: {
    filterTag(value, row) {
      return row.paid === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainPersonal {
  margin: 0 20px;
}
</style>

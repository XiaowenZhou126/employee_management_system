<template>
  <div>
    <el-table :data="tableData" style="width:1308px">
      <el-table-column fixed type="index"></el-table-column>
      <el-table-column prop="employeeID" label="工号" width="120"></el-table-column>
      <el-table-column prop="name" label="申请人" width="120"></el-table-column>
      <el-table-column prop="department" label="部门名称" width="120"></el-table-column>
      <el-table-column prop="position" label="部门职位" width="120"></el-table-column>
      <el-table-column prop="reasonForLeave" label="请假原因" width="110"></el-table-column>
      <el-table-column prop="dateForLeave" label="请假/调休时间" width="250"></el-table-column>
      <el-table-column prop="paid" label="审核意见" width="100" :filters="[{ text: '通过', value: '通过' }, { text: '未通过', value: '未通过' }]"
        :filter-method="filterTag" filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag :type="scope.row.paid === '通过' ? 'success' : 'danger'" close-transition>{{scope.row.paid}}</el-tag>
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
        tableData: [{
            employeeID: "20170101",
            name: "王小虎",
            department: "销售部",
            position: "经理",
            reasonForLeave: "事假",
            dateForLeave: "2017年11月29日 至 2017年12月01日",
            paid: '通过'
          }
        ]
      };
    },
    methods: {
      filterTag(value, row) {
        return row.paid === value;
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

</style>



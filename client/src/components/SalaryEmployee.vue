<template>
  <div>
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="6">
        <h1 v-if="isPay">本月已发</h1>
        <h1 v-else>本月未发</h1>
      </el-col>
      <el-col :span="3" v-if="isPay">
        <div>
          <el-button @click="exportWages" style="margin-top:20px">一键导出本月工资条</el-button>
        </div>
      </el-col>
    </el-row>
    <hr>
    <h1>仅可查看过去六个月的工资</h1>
    <el-table :data="tableData" style="width:1308px">
      <el-table-column fixed type="index"></el-table-column>
      <el-table-column prop="employeeID" label="工号" width="120"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="department" label="部门名称" width="120"></el-table-column>
      <el-table-column prop="basePay" label="基本工资（元）" width="120"></el-table-column>
      <el-table-column prop="monthBonuses" label="月奖金（元）" width="110"></el-table-column>
      <el-table-column prop="otherBonuses" label="其它（元）" width="110"></el-table-column>
      <el-table-column prop="totalWages" label="工资总额（元）" width="120"></el-table-column>
      <el-table-column prop="incomeTaxes" label="个人所得税（元）" width="100"></el-table-column>
      <el-table-column prop="socialeScurity" label="社保（元）" width="100"></el-table-column>
      <el-table-column prop="realWages" label="实际工资（元）" width="120"></el-table-column>
      <el-table-column prop="data" label="日期" width="120"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "SalaryEmployee",
    data() {
      return {
        isPay: true,
        tableData: [{
            employeeID: "20170101",
            name: "王小虎",
            department: "销售部",
            basePay: "4500",
            monthBonuses: "2000",
            otherBonuses: "500",
            totalWages: "7000",
            incomeTaxes: "800",
            socialeScurity: "500",
            realWages: "5200",
            data: "2017-03"
          },
          {
            employeeID: "20170101",
            name: "王小虎",
            department: "销售部",
            basePay: "4500",
            monthBonuses: "2000",
            otherBonuses: "500",
            totalWages: "7000",
            incomeTaxes: "800",
            socialeScurity: "500",
            realWages: "5200",
            data: "2017-02"
          },
          {
            employeeID: "20170101",
            name: "王小虎",
            department: "销售部",
            basePay: "4500",
            monthBonuses: "2000",
            otherBonuses: "500",
            totalWages: "7000",
            incomeTaxes: "800",
            socialeScurity: "500",
            realWages: "5200",
            data: "2017-01"
          },
          {
            employeeID: "20170101",
            name: "王小虎",
            department: "销售部",
            basePay: "4500",
            monthBonuses: "2000",
            otherBonuses: "500",
            totalWages: "7000",
            incomeTaxes: "800",
            socialeScurity: "500",
            realWages: "5200",
            data: "2016-12"
          },
          {
            employeeID: "20170101",
            name: "王小虎",
            department: "销售部",
            basePay: "4500",
            monthBonuses: "2000",
            otherBonuses: "500",
            totalWages: "7000",
            incomeTaxes: "800",
            socialeScurity: "500",
            realWages: "5200",
            data: "2016-11"
          },
          {
            employeeID: "20170101",
            name: "王小虎",
            department: "销售部",
            basePay: "4500",
            monthBonuses: "2000",
            otherBonuses: "500",
            totalWages: "7000",
            incomeTaxes: "800",
            socialeScurity: "500",
            realWages: "5200",
            data: "2016-10"
          }
        ]
      };
    },
    methods: {
      exportWages() {
        console.log("jjj");
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


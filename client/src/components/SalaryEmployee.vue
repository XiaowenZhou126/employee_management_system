<template>
  <div class="mainPersonal">
    <h1>查看月工资发放</h1>
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="6">
        <h1 v-if="isPay" style="color:red;">本月已发</h1>
        <h1 v-else style="color:red;">本月未发</h1>
      </el-col>
      <el-col :span="3" v-if="isPay">
        <div style="height:70px;line-height:70px;">
          <el-button @click="exportWages">一键导出本月工资条</el-button>
        </div>
      </el-col>
    </el-row>
    <el-table :data="salaryData">
      <el-table-column fixed type="index"></el-table-column>
      <el-table-column prop="employeeID" label="工号" min-width="90"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="department" label="部门名称"></el-table-column>
      <el-table-column prop="basePay" label="基本工资（元）"></el-table-column>
      <el-table-column prop="monthBonuses" label="月奖金（元）"></el-table-column>
      <el-table-column prop="otherBonuses" label="其它（元）"></el-table-column>
      <el-table-column prop="totalWages" label="工资总额（元）"></el-table-column>
      <el-table-column prop="incomeTaxes" label="个人所得税（元）"></el-table-column>
      <el-table-column prop="socialeScurity" label="社保（元）"></el-table-column>
      <el-table-column prop="realWages" label="实际工资（元）"></el-table-column>
      <el-table-column prop="date" label="日期" min-width="95"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "SalaryEmployee",
  data() {
    return {
      isPay: true,
      salaryData: [
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
          date: "2017年03月"
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
          date: "2017年02月"
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
          date: "2017年01月"
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
          date: "2016年12月"
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
          date: "2016年11月"
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
          date: "2016年10月"
        }
      ]
    };
  },
  methods: {
    exportWages() {
      // 点击导出工资条
      console.log("jjj");
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


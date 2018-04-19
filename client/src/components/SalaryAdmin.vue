<template>
  <div class="mainPersonal">
    <h1>工资发放情况</h1>
    <el-row type="flex" class="row-bg" justify="end">
      <el-col :lg="6" :md="8" style="text-align:right;">工资发放日期：{{data}}</el-col>
    </el-row>
    <hr>
    <el-table :data="salaryData">
      <el-table-column fixed type="index"></el-table-column>
      <el-table-column prop="employeeID" label="工号"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="department" label="部门名称"></el-table-column>
      <el-table-column prop="basePay" label="基本工资（元）"></el-table-column>
      <el-table-column prop="monthBonuses" label="月奖金（元）"></el-table-column>
      <el-table-column prop="otherBonuses" label="其它（元）"></el-table-column>
      <el-table-column prop="totalWages" label="工资总额（元）"></el-table-column>
      <el-table-column prop="incomeTaxes" label="个人所得税（元）"></el-table-column>
      <el-table-column prop="socialeScurity" label="社保（元）"></el-table-column>
      <el-table-column prop="realWages" label="实际工资（元）"></el-table-column>
      <el-table-column prop="paid" label="发放情况" :filters="[{ text: '已发', value: '已发' }, { text: '未发', value: '未发' }]" :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag :type="scope.row.paid === '已发' ? 'success' : 'danger'" close-transition>{{scope.row.paid}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Salary",
  data() {
    return {
      isPay: true,
      data: "2017-06-15",
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
          paid: "已发"
        },
        {
          employeeID: "20170102",
          name: "王小虎",
          department: "销售部",
          basePay: "4500",
          monthBonuses: "2000",
          otherBonuses: "500",
          totalWages: "7000",
          incomeTaxes: "800",
          socialeScurity: "500",
          realWages: "5200",
          paid: "已发"
        },
        {
          employeeID: "20170103",
          name: "王小虎",
          department: "销售部",
          basePay: "4500",
          monthBonuses: "2000",
          otherBonuses: "500",
          totalWages: "7000",
          incomeTaxes: "800",
          socialeScurity: "500",
          realWages: "5200",
          paid: "已发"
        },
        {
          employeeID: "20170104",
          name: "王小虎",
          department: "销售部",
          basePay: "4500",
          monthBonuses: "2000",
          otherBonuses: "500",
          totalWages: "7000",
          incomeTaxes: "800",
          socialeScurity: "500",
          realWages: "5200",
          paid: "已发"
        },
        {
          employeeID: "20170201",
          name: "王小虎",
          department: "市场部",
          basePay: "4500",
          monthBonuses: "1000",
          otherBonuses: "500",
          totalWages: "6000",
          incomeTaxes: "800",
          socialeScurity: "500",
          realWages: "5200",
          paid: "已发"
        },
        {
          employeeID: "20170203",
          name: "王小虎",
          department: "市场部",
          basePay: "4500",
          monthBonuses: "1000",
          otherBonuses: "500",
          totalWages: "6000",
          incomeTaxes: "800",
          socialeScurity: "500",
          realWages: "5200",
          paid: "未发"
        }
      ]
    };
  },
  methods: {
    exportWages() {
      console.log("jjj");
    },
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



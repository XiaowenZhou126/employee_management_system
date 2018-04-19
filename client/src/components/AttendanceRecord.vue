<template>
<div class="mainPersonal">
  <h1>考勤情况</h1>
  <el-form :model="searchForm" ref="searchForm" :inline="true" status-icon inline-message>
    <el-form-item label="日期" prop="sdate" label-width="90">
      <el-date-picker v-model="searchForm.sdate" type="date" :editable="false">
      </el-date-picker>
      </el-form-item>
      <el-form-item label="工号" prop="sid">
        <el-input type="text" v-model="searchForm.sid" clearable></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="sname">
        <el-input type="text" v-model="searchForm.sname" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">搜索</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="leaveData" style="width: 100%">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="employeeID" label="工号"></el-table-column>
      <el-table-column prop="name" label="申请人"></el-table-column>
      <el-table-column prop="department" label="部门"></el-table-column>
      <el-table-column prop="position" label="职位"></el-table-column>
      <el-table-column prop="tag" label="考勤情况" :filters="[{ text: '请假', value: '请假' }, { text: '调休', value: '调休' },{text: '正常', value: '正常'}]"
        :filter-method="filterTag" filter-placement="bottom-start">
        <template slot-scope="scope">
          <el-tag :type="scope.row.tag === '正常' ? 'success' : 'danger'" close-transition>{{scope.row.tag}}</el-tag>
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
      searchForm: {
        sdate: "",
        sid: "",
        sname: ""
      },
      leaveData: [
        {
          employeeID: "20170101",
          name: "王小虎",
          department: "销售部",
          position: "经理",
          date: "2017-01-01",
          tag: "请假"
        },
        {
          employeeID: "20170212",
          name: "王虎",
          department: "市场部",
          position: "普通员工",
          date: "2017-01-01",
          tag: "调休"
        },
        {
          employeeID: "20170125",
          name: "王小二",
          department: "销售部",
          position: "普通员工",
          date: "2017-01-01",
          tag: "正常"
        }
      ]
    };
  },
  methods: {
    search() {
      if (
        this.searchForm.sid === "" &&
        this.searchForm.sdate === "" &&
        this.searchForm.sname === ""
      ) {
        alert("请填写条件");
        return false;
      }
      alert("成功");
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
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

.table-expand {
  font-size: 0;
}

.table-expand label {
  width: 90px;
  color: #99a9bf;
}

.table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>


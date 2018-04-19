<template>
  <div class="mainPersonal">
    <h1>添加岗位</h1>
    <el-form :model="infoForm" :rules="rules" ref="infoForm" status-icon label-width="100px">
      <h4>职位信息</h4>
      <el-row>
        <el-col :md="8">
          <el-form-item label="部门编号" prop="departmentID">
            <el-input v-model="infoForm.departmentID"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="8">
          <el-form-item label="部门名称" prop="departmentName">
            <el-input v-model="infoForm.departmentName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="8">
          <el-form-item label="职位" prop="position">
            <el-input v-model="infoForm.position"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <h4>员工信息</h4>
      <el-row>
        <el-col :md="8">
          <el-form-item label="工号" prop="employeeID">
            <el-input v-model="infoForm.employeeID"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="8">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="infoForm.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item>
        <el-button type="primary" @click="saveForm('infoForm')">保存</el-button>
        <el-button type="info" @click="cancelForm('infoForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoForm: {
        departmentID: "01",
        departmentName: "销售部",
        position: "助理",
        employeeID: "2455454",
        name: "王小虎"
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入姓名",
            trigger: "blur"
          },
          {
            min: 2,
            max: 20,
            message: "长度在 2 到 20 个字符",
            trigger: "blur"
          }
        ],
        employeeID: [
          {
            required: true,
            message: "请输入员工工号",
            trigger: "blur"
          }
        ],
        departmentID: [
          {
            required: true,
            message: "请输入员工部门编号",
            trigger: "blur"
          }
        ],
        departmentName: [
          {
            required: true,
            message: "请输入员工部门名称",
            trigger: "blur"
          }
        ],
        position: [
          {
            required: true,
            message: "请输入职位",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    cancelForm(formName) {
      this.$refs[formName].resetFields();
    },
    saveForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainPersonal {
  margin: 0 20px;
  position: relative;
}
</style>




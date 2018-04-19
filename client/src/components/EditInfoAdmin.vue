<template>
  <div class="mainPersonal">
    <h1>编辑员工信息</h1>
    <el-form :model="infoForm" :rules="rules" ref="infoForm" status-icon label-width="100px">
      <h4>基本信息</h4>
      <el-row>
        <el-col :md="12">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="infoForm.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :md="12">
          <el-form-item label="曾用名" prop="formerName">
            <el-input v-model="infoForm.formerName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="infoForm.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :md="12">
          <el-form-item label="身份证号" prop="identityCard">
            <el-input v-model="infoForm.identityCard"></el-input>
          </el-form-item>
        </el-col>
        <el-col :md="12">
          <el-form-item label="联系方式" prop="phone">
            <el-input v-model="infoForm.phone"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="地址" prop="address">
        <el-input type="textarea" v-model="infoForm.address"></el-input>
      </el-form-item>

      <h4>入职信息</h4>
      <el-row>
        <el-col :md="12">
          <el-form-item label="工号" prop="employeeID">
            <el-input v-model="infoForm.employeeID"></el-input>
          </el-form-item>
        </el-col>
        <el-col :md="12">
          <el-form-item prop="hiredate" label="入职时间">
            <el-date-picker type="date" placeholder="选择日期" v-model="infoForm.hiredate" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :md="12">
          <el-form-item label="部门编号" prop="departmentID">
            <el-input v-model="infoForm.departmentID"></el-input>
          </el-form-item>
        </el-col>
        <el-col :md="12">
          <el-form-item label="部门名称" prop="departmentName">
            <el-input v-model="infoForm.departmentName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :md="12">
          <el-form-item label="职位" prop="position">
            <el-input v-model="infoForm.position"></el-input>
          </el-form-item>
        </el-col>
        <el-col :md="12">
          <el-form-item label="薪资（元）" prop="salary">
            <el-input v-model="infoForm.salary"></el-input>
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
    var validateIdentityCard = (rule, value, callback) => {
      if (!/^\d{17}[\d|x]|\d{15}$/.test(value)) {
        callback(new Error("身份证格式错误"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if (!/^1[3|4|5|6|7|8][0-9]\d{4,8}$/.test(value)) {
        callback(new Error("请输入正确的联系方式"));
      } else {
        callback();
      }
    };
    return {
      infoForm: {
        name: "王小虎",
        formerName: "",
        sex: "男",
        identityCard: "460404199506030456",
        phone: "13016232020",
        address: "shanghaishijkjk",
        employeeID: "2455454",
        hiredate: "2017-01-02",
        departmentID: "01",
        departmentName: "销售部",
        position: "助理",
        salary: "6000"
      },
      infoFormCopy: "",
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
        formerName: [
          {
            min: 2,
            max: 20,
            message: "长度在 2 到 20 个字符",
            trigger: "blur"
          }
        ],
        identityCard: [
          {
            required: true,
            message: "请输入身份证号",
            trigger: "blur"
          },
          {
            validator: validateIdentityCard,
            trigger: "blur"
          }
        ],
        phone: [
          {
            required: true,
            message: "请输入联系方式",
            trigger: "blur"
          },
          {
            validator: validatePhone,
            trigger: "blur"
          }
        ],
        address: [
          {
            required: true,
            message: "请输入地址",
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
        hiredate: [
          {
            required: true,
            message: "请输入员工入职时间",
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
            message: "请输入员工职位",
            trigger: "blur"
          }
        ],
        salary: [
          {
            required: true,
            message: "请输入员工薪资",
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


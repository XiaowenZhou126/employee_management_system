<template>
  <div class="mainPersonal">
    <h1>密码修改</h1>
    <el-form :model="pwdForm" ref="pwdForm" status-icon :rules="rules" inline-message label-width="100px">
      <el-row>
        <el-col :md="8">
          <el-form-item label="旧密码" prop="oldpass">
            <el-input type="password" v-model="pwdForm.oldpass"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="8">
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="pwdForm.pass"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="8">
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="pwdForm.checkPass"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button id="sub" type="primary" @click="submitForm('pwdForm')">提交</el-button>
        <el-button @click="resetForm('pwdForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Password",
  data() {
    var validatePwd = (rule, value, callback) => {
      if (!/^[a-z,A-Z,0-9]{6,}$/.test(value)) {
        callback(new Error("密码格式错误"));
      } else {
        callback();
      }
    };
    return {
      pwdForm: {
        pass: "",
        checkPass: "",
        oldpass: ""
      },
      rules: {
        oldpass: [
          {
            required: true,
            message: "请输入旧密码",
            trigger: "blur"
          },
          {
            validator: validatePwd,
            trigger: "blur"
          }
        ],
        pass: [
          {
            required: true,
            message: "请输入新密码",
            trigger: "blur"
          },
          {
            validator: validatePwd,
            trigger: "blur"
          }
        ],
        checkPass: [
          {
            required: true,
            message: "请再次输入新密码",
            trigger: "blur"
          },
          {
            validator: validatePwd,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 请求
          alert("提交成功");
          this.$refs[formName].resetFields();
        } else {
          alert("提交失败");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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


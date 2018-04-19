<template>
  <div class="mainPersonal">
    <h1>请假申请表</h1>
    <el-form ref="applyForm" :model="applyForm" status-icon :rules="rules" inline-message label-width="80px">
      <el-row>
        <el-col>
          <el-form-item label="填写日期">
            <el-date-picker v-model="applyForm.date" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" readonly></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14">
          <el-form-item label="申请人">
            <el-input v-model="applyForm.name" readonly></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14">
          <el-form-item label="工号">
            <el-input v-model="applyForm.employeeID" readonly></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14">
          <el-form-item label="部门">
            <el-input v-model="applyForm.department" readonly></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14">
          <el-form-item label="职务">
            <el-input v-model="applyForm.position" readonly></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="请假时间" prop="duration">
            <el-date-picker v-model="applyForm.duration" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"  format="yyyy-MM-dd HH:mm" value-format="yyyy-MM-dd HH:mm" ></el-date-picker>
        </el-form-item>
      <el-row>
        <el-col :span="14">
          <el-form-item label="请假原因" prop="reason">
            <el-input type="textarea" v-model="applyForm.reason" :rows="3" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="submitForm('applyForm')" >立即申请</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  template: "#",
  data() {
    var validateReason = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请填写请假原因，可以提高您的成功率"));
      } else {
        callback();
      }
    };
    var validateDuration = (rule, value, callback) => {
      var value = value ? value : [];
      if (value.length !== 2) {
        callback(new Error("请填写起始时间"));
      } else {
        callback();
      }
    };
    return {
      applyForm: {
        date: new Date(),
        employeeID: "123",
        name: "446",
        department: "5465",
        position: "54544",
        reason: "",
        duration: []
      },
      rules: {
        reason: [
          {
            validator: validateReason,
            trigger: "blur"
          }
        ],
        duration: [
          {
            validator: validateDuration,
            trigger: "change"
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


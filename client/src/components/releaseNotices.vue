<template>
  <div class="mainPersonal">
    <h1>发布公告</h1>
    <el-form ref="noticeForm" :model="noticeForm" status-icon :rules="rules" inline-message label-width="80px">
      <el-row>
        <el-col>
          <el-form-item label="填写日期">
            <el-date-picker v-model="noticeForm.date" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"
              readonly></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14">
          <el-form-item label="标题" prop="title">
            <el-input v-model="noticeForm.title"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14">
          <el-form-item label="内容" prop="desc">
            <el-input type="textarea" v-model="noticeForm.desc" :rows="6"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14">
          <el-form-item label="发布人">
            <el-input v-model="noticeForm.name" disabled></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14">
          <el-form-item label="工号">
            <el-input v-model="noticeForm.employeeID" disabled></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="submitForm('noticeForm')">发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  template: "#",
  data() {
    return {
      noticeForm: {
        date: new Date(),
        title: "",
        desc: "",
        employeeID: "123",
        name: "446"
      },
      rules: {
        title: [
          {
            required: true,
            message: "请填写标题",
            trigger: "blur"
          }
        ],
        desc: [
          {
            required: true,
            message: "请填写发布内容",
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


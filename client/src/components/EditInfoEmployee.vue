<template>
  <div class="mainPersonal">
    <h1>个人中心</h1>
    <el-form :model="infoForm" :rules="rules" ref="infoForm" status-icon label-width="100px" :disabled="disabled">
      <h4>基本信息</h4>
      <el-row>
        <el-col :span="16">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="infoForm.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
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

      <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload" style=" position: absolute;top: 100px;right:18px;border: 1px #d9d9d9 dashed;">
        <img v-if="infoForm.imageUrl" :src="infoForm.imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>

      <h4>入职信息</h4>
      <el-row>
        <el-col :md="12">
          <el-form-item label="工号" prop="employeeID">
            <el-input v-model="infoForm.employeeID" disabled></el-input>
          </el-form-item>
        </el-col>
        <el-col :md="12">
          <el-form-item prop="hiredate" label="入职时间">
            <el-date-picker type="date" placeholder="选择日期" v-model="infoForm.hiredate" style="width: 100%;" disabled></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :md="12">
          <el-form-item label="部门编号" prop="departmentID">
            <el-input v-model="infoForm.departmentID" disabled></el-input>
          </el-form-item>
        </el-col>
        <el-col :md="12">
          <el-form-item label="部门名称" prop="departmentName">
            <el-input v-model="infoForm.departmentName" disabled></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :md="12">
          <el-form-item label="职位" prop="position">
            <el-input v-model="infoForm.position" disabled></el-input>
          </el-form-item>
        </el-col>
        <el-col :md="12">
          <el-form-item label="薪资（元）" prop="salary">
            <el-input v-model="infoForm.salary" disabled></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item v-if="isEdit">
        <el-button type="primary" @click="saveForm()">保存</el-button>
        <el-button type="info" @click="cancelForm()">取消</el-button>
      </el-form-item>
      <el-form-item v-else>
        <el-button type="primary" @click="editForm()">编辑</el-button>
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
      isEdit: false,
      disabled: true,
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
        position:"助理",
        salary: "6000",
        imageUrl: ""
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
        ]
      }
    };
  },
  methods: {
    editForm() {
      this.infoFormCopy = JSON.stringify(this.infoForm);
      this.isEdit = true;
      this.disabled = false;
    },
    cancelForm() {
      this.infoForm = JSON.parse(this.infoFormCopy);
      this.isEdit = false;
      this.disabled = true;
    },
    saveForm() {
      this.isEdit = false;
      this.disabled = true;
    },
    handleAvatarSuccess(res, file) {
      this.infoForm.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 或 PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
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

.el-form-item {
  margin: 18px;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>


<template>
  <div>
    <h1>请假条</h1>
    <el-form ref="form" :model="form" label-width="80px" style="width:60%">
      <el-form-item label="填写日期">
        <el-date-picker v-model="form.time" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="申请人">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="部门">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="职务">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="请假原因">
        <el-input type="textarea" v-model="form.desc" :rows="3"></el-input>
      </el-form-item>
      <el-form-item label="请假时间">
        <el-col :span="12">
          <el-date-picker v-model="form.date1" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
        </el-col>
        <el-col :span="6">共计 {{form.fDays}} 天 {{form.fHours}} 时</el-col>
      </el-form-item>
      <el-form-item label="审核意见">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即申请</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  const LeaveForm = {
    template:"#",
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
          fDays:'0',
          fHours:'0',
          time: '',
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
  export {LeaveForm as default}

</script>


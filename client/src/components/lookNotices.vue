<template>
  <div class="mainPersonal">
    <h1>查看公告</h1>
    <el-collapse v-model="activeNames">
      <el-collapse-item v-for="item in notices" :key="item.id" :title="item.title">
        <div>{{item.content}}</div>
        <div>发布人：
          <span>{{item.ame}}</span>
        </div>
        <div>发布时间：
          <span>{{item.date}}</span>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"],
      notices: [
        {
          id: 1,
          title: "一致性 Consistency",
          content:
            "与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；\n在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。",
          ame: "job",
          date: "2018年1月2日"
        },
        {
          id: 2,
          title: "反馈 Feedback",
          content:
            "控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。",
          ame: "Lyli",
          date: "2018年1月2日"
        },
        {
          id: 3,
          title: "效率 Efficiency",
          content:
            "简化流程：设计简洁直观的操作流程；清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。",
          ame: "Nace",
          date: "2018年1月2日"
        },
        {
          id: 4,
          title: "可控 Controllability",
          content:
            "用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。",
          ame: "1",
          date: "2018年1月2日"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainPersonal {
  margin: 0 20px;
}
</style>


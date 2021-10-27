<template>
  <div class="middle">
    <el-checkbox v-model="checked1" label="记住密码" class="save"></el-checkbox>
    <a href="./home">
      <text>忘记密码</text>
    </a>
  </div>
</template>

<style lang="less" scoped>
.middle {
  text-align: center;
  .save {
    margin-right: 360px;
  }
  text {
    font-size: 14px;
    color: #409eff;
  }
  a {
    text-decoration: none;
  }
}
</style>

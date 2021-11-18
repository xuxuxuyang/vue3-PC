<template>
  <div class="middle">
    <el-checkbox
      v-model="checked"
      label="记住密码"
      class="save"
      @change="savepassword"
    ></el-checkbox>
    <a href="./home">
      <text>忘记密码</text>
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: ''
    }
  },
  methods: {
    savepassword() {
      this.$store.commit('savepassword', this.checked) //把是否记住密码的状态存入vueX
    }
  }
}
</script>

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

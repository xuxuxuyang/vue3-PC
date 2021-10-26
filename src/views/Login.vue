<template>
  <div class="login">
    <div class="tab">
      <h2 class="middle">美美子财务管理系统</h2>
      <el-tabs type="border-card" stretch>
        <!-- 账号密码登录 -->
        <el-tab-pane label="密码登录">
          <el-form
            ref="LoginForm"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="120px"
            class="demo-ruleForm"
          >
            <el-form-item label="账号" prop="name">
              <el-input
                v-model="ruleForm.name"
                autocomplete="off"
                autofocus
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                v-model="ruleForm.password"
                type="password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login" class="loginbtn"
                >登录</el-button
              >
              <el-button @click="resetForm" class="resetbtn">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <!-- 验证码登录 -->
        <el-tab-pane label="手机登录">
          <el-form
            ref="snedLoginForm"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="120px"
            class="demo-ruleForm"
          >
            <el-form-item label="账号" prop="name">
              <el-input
                v-model="ruleForm.name"
                autocomplete="off"
                autofocus
              ></el-input>
            </el-form-item>
            <div class="send">
              <el-form-item label="验证码" prop="send">
                <el-input v-model="ruleForm.send" autocomplete="off"></el-input>
              </el-form-item>
              <el-button @click="send" class="sendbtn">获取验证码</el-button>
            </div>
            <el-form-item>
              <el-button type="primary" @click="login" class="loginbtn"
                >登录</el-button
              >
              <el-button @click="resetForm" class="resetbtn">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const namerule = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        if (this.ruleForm.name !== 'xuyang') {
          callback(new Error('请输入正确的账号'))
        } else {
          // this.$refs.LoginForm.validateField('name')
        }
        callback()
      }
    }
    const passwordrule = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (this.ruleForm.password !== '123') {
        callback(new Error('请输入正确的密码'))
      } else {
        callback()
      }
    }
    const sendrule = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else if (this.ruleForm.send !== '123') {
        callback(new Error('请输入正确的验证码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        name: '',
        password: ''
      },
      sendruleForm: {
        name: '',
        send: ''
      },
      rules: {
        name: [{ validator: namerule, trigger: 'blur' }],
        password: [{ validator: passwordrule, trigger: 'blur' }],
        send: [{ validator: sendrule, trigger: 'blur' }]
      }
    }
  },
  methods: {
    login() {
      this.$refs.LoginForm.validate((valid) => {
        if (valid) {
          alert('登录成功')
        } else {
          console.log('登录失败')
          return false
        }
      })
    },
    send() {
      alert('发送验证码!')
    },

    resetForm() {
      this.$refs.LoginForm.resetFields()
      this.$refs.snedLoginForm.resetFields()
    }
  }
}
</script>

<style scope="less">
.demo-ruleForm {
  margin-top: 20px;
  width: 350px;
  text-align: center;
}
.loginbtn {
  margin-right: 20px;
  width: 100px;
}
.resetbtn {
  width: 100px;
}
.send .sendbtn {
  /* flex: 1; */
  height: 20px;
  margin-left: 10px;
}
.send {
  display: flex;
}
.login {
  margin-top: 300px;
}
.middle {
  text-align: center;
}
.tab {
  width: 500px;
  margin: 0 auto;
}
</style>

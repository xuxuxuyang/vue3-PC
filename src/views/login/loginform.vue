<template>
  <div class="login">
    <LoginTitle />
    <div class="tab">
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
            ref="sendLoginForm"
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
              <el-button type="primary" @click="sendlogin" class="loginbtn"
                >登录</el-button
              >
              <el-button @click="resetForm" class="resetbtn">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
  <LoginSave />
</template>

<script>
import LoginTitle from './logintitle.vue'
import LoginSave from './loginsave.vue'
export default {
  components: {
    LoginTitle,
    LoginSave
  },
  data() {
    return {
      ruleForm: {
        name: '',
        password: '',
        send: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: '请填写用户名',
            trigger: 'blur'
          },
          {
            pattern: /^[a-z0-9]{5,10}$/,
            message: '用户名必须是5~10个字符',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请填写密码',
            trigger: 'blur'
          },
          {
            pattern: /^[a-z0-9]{6,}$/,
            message: '密码必须是6位以上的字母或数字',
            trigger: 'blur'
          }
        ],
        send: [
          {
            required: true,
            message: '请填写验证码',
            trigger: 'blur'
          },
          {
            pattern: /^[a-z0-9]{4,}$/,
            message: '验证码为4位数字',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    // 登录
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
    sendlogin() {
      this.$refs.sendLoginForm.validate((valid) => {
        if (valid) {
          alert('登录成功')
        } else {
          console.log('登录失败')
          return false
        }
      })
    },
    // 发送验证码
    send() {
      alert('发送验证码!')
    },
    // 重置表单
    resetForm() {
      this.$refs.LoginForm.resetFields()
      this.$refs.sendLoginForm.resetFields()
    }
  }
}
</script>

<style scope>
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

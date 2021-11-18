<template>
  <div>
    <Login-form> </Login-form>
    <Login-save> </Login-save>
  </div>
</template>

<script>
import LoginForm from './cpns/loginform.vue'
import LoginSave from './cpns/loginsave.vue'
export default {
  components: {
    LoginForm,
    LoginSave
  }
}
</script>

<style scoped>
/* .login {
  text-align: center;
} */
</style>

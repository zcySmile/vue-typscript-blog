<template>
  <div class="common-form">
    <div class="content">
      <el-form ref="form"
               label-width="80px"
               :model="ruleForm"
               :rules="rules">
        <el-form-item prop="name"
                      label="账号">
          <el-input v-model="ruleForm.name"
                    placeholder="输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="password"
                      label="密码">
          <el-input type="password"
                    v-model="ruleForm.password"
                    placeholder="输入密码"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary"
                 @click="login">登录</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Ref } from 'vue-property-decorator'
import { Form } from 'element-ui'
import HelloWorld from '@/components/HelloWorld.vue'
import { get } from '@/uitls/http'
import { IResponse } from '@/interface/common'

@Component({
  components: {
    HelloWorld,
    Form
  }
})
export default class Login extends Vue {
  @Ref() public readonly form!: Form
  private ruleForm: object = {
    name: '',
    password: ''
  }
  private rules: object = {}
  private request(): void {
    get('name', {}, (res: IResponse) => {
      window.console.log(res)
      if (res.result === true) {
        localStorage.setItem('user', '{"name":"zcysmile","password":"123455"}')
        this.$router.push('home')
      } else {
        this.$Message({ message: '账号或者密码错误，请重试', type: 'error' })
      }
    })
  }
  private login(): void {
    window.console.log(this.form)
    window.console.log(Vue)
    this.form.validate(value => {
      if (value) {
        this.request()
      }
    })
  }
}
</script>
<style lang="less" scoped>
.content {
  text-align: center;
}
</style>
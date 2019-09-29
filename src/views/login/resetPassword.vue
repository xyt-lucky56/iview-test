<template>
<div class="view-main">
  <div class="container">
    <div class="loginContainer">
      <Steps :current="step">
        <Step title="重置密码方式"></Step>
        <Step title="身份验证"></Step>
        <Step title="设置新密码"></Step>
        <Step title="设置完成"></Step>
      </Steps>

      <div v-if="step===0" class="chose-box">
        <div class="chose-type" @click="toValid('phone')">
          <img src="@/assets/images/phone.png" alt="" class="chose-icon">
          <br/>
          通过注册手机号重置
        </div>
        <div class="chose-type" @click="toValid('email')">
          <img src="@/assets/images/email.png" alt="" class="chose-icon">
          <br/>
          通过注册邮件重置
        </div>
      </div>

      <div v-if="step===1" class="valid-box">
        <div v-if="validType==='phone'" class="validPhone">
          <Form :label-width="100">
            <FormItem prop="user" label="手机号">
              <Input v-model="userInfo.phoneNumber" readonly/>
            </FormItem>
            <FormItem prop="user" label="验证码">
              <Input v-model="validNumber" placeholder="请输入验证码" style="width:150px"/>
              <Button :class="showTime?'showTimer':''" style="width:105px" @click="showModel"><span v-show="!showTime">获取验证码</span><span v-show="showTime">{{sum}}s</span></Button>
            </FormItem>
            <FormItem  label="">
              <Button style="width:100%">下一步</Button>
            </FormItem>
          </Form> 
        </div>
        <div v-if="validType==='email'" style="padding-top:30px">
          <Form :label-width="0">
            <FormItem  label="">
              <Input v-model="userInfo.email" placeholder="请输入验证码" style="width:230px" readonly/>
              <Button style="width:100px; margin-left: 6px">发送邮件</Button>
            </FormItem>
          </Form>
        </div>
      </div>

      <div v-if="step===2" class="reset-box">
        <Form ref="passwordForm" :model="passwordForm" :rules="rulePassword" :label-width="100">
          <FormItem prop="password" label="输入密码">
            <Input type="password" :minlength="6" :maxlength="10" placeholder="请输入登录密码" v-model="passwordForm.password"/>
          </FormItem>
          <FormItem prop="rePassword" label="确认密码">
            <Input type="password" :minlength="6" :maxlength="10" placeholder="请输入登录密码" v-model="passwordForm.rePassword"/>
          </FormItem>
          <FormItem>
            <Button @click="handleSubmit('formCustom')" style="margin-left:-100px;width:100px">确定</Button>
            <Button @click="handleReset('formCustom')" style="margin-left: 8px;width:100px">重置</Button>
          </FormItem>
        </Form>
      </div>

      <div v-if="step===3" class="completed-box">
        <p style="font-size:14px;font-weight:700"><Icon type="ios-checkmark-circle-outline" size="24" color="#009688" style="font-weight:900"/> 恭喜您修改密码成功！</p>
        <p>{{sum1}}s后自动跳转至登录页，点击完成立即跳转</p>
        <Button @click="completed" style="width:150px;margin-top:30px">完成</Button>
      </div>
    </div>
  </div>

  <Modal v-model="model1" :mask-closable="false" width="380" footer-hide>
    <h3 style="text-align:center">输入图中的验证码</h3>
    <Form ref="loginForm" :model="loginForm" :rules="loginRules" :label-width="0" class="login-form">
      <FormItem prop="code">
        <Row>
            <Col span="13">
              <Input v-model="loginForm.code" auto-complete="off" placeholder="输入图片中的数字" @keyup.enter.native="submitForm('loginForm')"/>
            </Col>
            <Col span="11">
              <div class="login-code" @click="refreshCode">
                  <!--验证码组件-->
                  <s-identify :identifyCode="identifyCode" :contentWidth="116"></s-identify>
              </div>
            </Col>
        </Row>
        
      </FormItem>
      
      <FormItem>
        <Button @click="submitForm('loginForm')" class="login-submit">确定</Button>
      </FormItem>
      
    </Form>
    <div slot="footer">
      <!-- <Button @click="submitForm('loginForm')" class="login-submit">确定</Button> -->
    </div>
  </Modal>
</div>
</template>

<script>
import SIdentify from '@/components/sidentify'
export default {
  data() {
    const validateCode = (rule, value, callback) => {
        if (this.identifyCode !== value) {
            // this.loginForm.code = ''
            // this.refreshCode()
            callback(new Error('请输入正确的验证码'))
        } else {
            callback()
        }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
          callback(new Error('请输入您的密码！'));
      } else {
          if (this.passwordForm.rePassword !== '') {
              // 对第二个密码框单独验证
              this.$refs.passwordForm.validateField('rePassword');
          }
          callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
          callback(new Error('请重新您的输入密码'));
      } else if (value !== this.passwordForm.password) {
          callback(new Error('两次输入的密码不匹配！'));
      } else {
          callback();
      }
    };
    return {
      step: 0,
      validType: '',      // 验证类型
      userInfo: {
        phoneNumber: 13926283986,
        email: '497949749@qq.com'
      },
      validNumber: '',
      sum: '',
      showTime: false, //倒计时
      timer: null,
      sum1: '',       // 完成时的倒计时
      show: true,
      timer1: null,
      model1: false,
      passwordForm: {
        password: '',
        rePassword: ''
      },
      rulePassword: {
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        rePassword: [
          { validator: validatePassCheck, trigger: 'blur' }
        ]
      },
      isDebugLogin: false,
      loginForm: {
          code: ''
      },
      identifyCodes: '1234567890',
      identifyCode: '',
      loginRules: {
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { validator: validateCode, trigger: ['change','blur'] }
        ]
      },
    }
  },
  created() {
    console.log(this.$route.query);
  },
  methods: {
    toValid(type){
      console.log(type);
      this.step = 1;
      this.validType = type;

    },
    showModel(){
      this.model1 = true;
      this.refreshCode();
    },
    // 倒计时
    showtime(){
      var time_out = 60;
      if(!this.timer){
        this.sum = time_out;
        this.showTime = true;
        this.timer = setInterval(() => {
          if(this.sum > 1 && this.sum <= time_out){
            this.sum--
          }else {
            this.showTime = false;
            clearInterval(this.timer);
            this.timer = null;
          }
        },1000)
      }
    },
    handleSubmit () {
        this.$refs['passwordForm'].validate((valid) => {
            if (valid) {
                this.$Message.success('Success!');
                this.step = 3;
                this.$refs['passwordForm'].resetFields();
                this.showtime1();
            } else {
                this.$Message.error('Fail!');
            }
        })
    },
    handleReset () {
      this.$refs['passwordForm'].resetFields();
    },
    // 完成跳转登录页倒计时
    showtime1() {
      var time_out1 = 10;
      if(!this.timer1){
        this.sum1 = time_out1;
        this.show = false;
        this.timer1 = setInterval(() => {
          if(this.sum1 > 1 && this.sum1 <= time_out1){
            this.sum1--
          }else {
            this.show = true;
            clearInterval(this.timer);
            this.timer1 = null;
            this.$router.replace('login')
          }
        },1000)
      }
    },
    // 点击完成跳转登录
    completed() {
      this.timer1 = null;
      this.$router.replace('login')
    },

    // 动态验证码
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    refreshCode() {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[
              this.randomNum(0, this.identifyCodes.length)
          ]
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
          if (valid) {
            this.model1 = false;
            this.showtime();
            // 调取发送短信
          } else {
              return false
          }
      })
    }
  },
  components: { SIdentify },
}
</script>

<style scoped lang="less">
.view-main {
  height: 100%;
  background-color: #2F4056
}
.container {
  background: #2F4056;
  padding-top: 138px;
  .loginContainer {
    width: 820px;
    height: 370px;
    border-radius: 6px;
    box-sizing: border-box;
    padding: 52px 64px 0px 57px;
    margin: auto;
    background: #fff;
    text-align: center;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    input[type="number"] {
      -moz-appearance: textfield;
    }
    /deep/input {
      margin: 0;
      padding: 8px 0;
      font-size: 16px;
      border: none!important;
      border-bottom: 1px solid #eee!important;
      outline: none!important;
      box-shadow: none!important;
      text-align: center;
    }
    button {
      padding: 6px 10px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      background: #0e88e5;
      cursor: pointer;
      outline: none!important;
      box-shadow: none!important;
      border: none;
    }
    
    .chose-box {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: 280px;
      .chose-type {
        text-align: center;
        font-size: 14px;
        cursor: pointer;
        .chose-icon {
          width: 104px;
          height: 104px;
          margin-bottom: 10px;
        }
      }
    }
    .valid-box {
      width: 360px;
      margin: 60px auto;
      .showTimer {
        background: #a8a6a8;
      }
    }
    .reset-box {
      width: 360px;
      margin: 50px auto;
    }
    .completed-box {
      margin: 50px auto;
    }
  }
}

.login-form {
  padding: 20px;
  /deep/input {
    margin: 0;
    padding: 8px 0;
    font-size: 14px;
    border: none!important;
    border-bottom: 1px solid #eee!important;
    outline: none!important;
    box-shadow: none!important;
    text-align: center;
  }
  .login-code {
    cursor: pointer;
    .login-code-img {
      width: 100px;
      height: 38px;
      background-color: #eee;
      border: 1px solid #f0f0f0;
      color: #333;
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 2px;
      text-indent: 2px;
      text-align: center;
    }
  } 
}
.login-submit {
  width: 100%;
  border: 0;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  background: #0e88e5;
  cursor: pointer;
  outline: none!important;
  box-shadow: none!important;
  border: none;
}
/deep/.ivu-modal-body {
  padding: 30px;
  padding-bottom: 0;
}
/deep/.ivu-modal-footer {
  border:none;
}
</style>

<template>
  <div class="hello">
    <Modal v-model="modal1" @on-ok="ok" @on-cancel="cancel">
      <div class="login-text">登录</div>
      <Tabs value="name1">
        <TabPane label="管理员" name="name1">
          <Form ref="formInline" :model="formInline" :rules="ruleInline" class="view-form">
            <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="请输入账号">
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="请输入密码">
              </Input>
            </FormItem>
            <div class="movebox">
              <div class="movego"></div>
              <div class="txt" id="txt">按住滑块,拖动到最右边</div>
              <div class="move moveBefore" v-move></div>
            </div>
            <div class="view-change">
              <Checkbox label="记住密码">记住密码</Checkbox>
              <div class="change-login-type" id="tel">手机验证码登录</div>
              <a class="forget-pas">忘记密码?</a>
            </div>
          </Form>
        </TabPane>

        <TabPane label="普通用户" name="name2">
          <Form ref="formInline" :model="formInline" :rules="ruleInline" class="view-form">
            <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="请输入账号">
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="请输入密码">
              </Input>
            </FormItem>
            <div class="movebox">
              <div class="movego"></div>
              <div class="txt" id="txt">按住滑块,拖动到最右边</div>
              <div class="move moveBefore" v-move></div>
            </div>
            <div class="view-change">
              <Checkbox label="记住密码">记住密码</Checkbox>
              <div class="change-login-type" id="tel">手机验证码登录</div>
              <a class="forget-pas">忘记密码?</a>
            </div>
            <FormItem>
            </FormItem>
          </Form>
        </TabPane>
      </Tabs>

      <div slot="footer">
        <Button type="primary" @click="handleSubmit('formInline')" class="btn-green">登录</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
  import {
    userLogin
  } from '@/api/api'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        modal1: false,
        ruleInline: {
          user: [{
            required: true,
            message: 'Please fill in the user name',
            trigger: 'blur'
          }],
          password: [{
              required: true,
              message: 'Please fill in the password.',
              trigger: 'blur'
            },
            {
              type: 'string',
              min: 6,
              message: 'The password length cannot be less than 6 bits',
              trigger: 'blur'
            }
          ]
        },
        formInline: {
          user: '',
          password: ''
        },
      }
    },
    methods: {
      ok() {
        this.$Message.info('Clicked ok');
      },
      //打开弹窗
      openModel() {
        this.modal1 = true;
      },
      // 弹窗关闭
      cancel() {
        this.$Message.info('Clicked cancel');
      },
      // 登录
      handleSubmit(name) {
        console.log('点击登录')
        this.$refs[name].validate((valid) => {
          console.log(valid)
          if (valid) {
            let params = {
              mobile: this.formInline.user,
              passWord: this.formInline.password
            }
            console.log(params)
            userLogin(params).then(res => {

            })
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      }
    },
    //注册自定义指令
    directives: {
      move(el) {
        el.onmousedown = function(e) {
          var X = e.clientX - el.offsetLeft;
          document.onmousemove = function(e) {
            var endx = e.clientX - X;
            el.className = "move moveBefore";
            el.style.left = endx + "px";
            var width = document.querySelector(".movebox").offsetWidth - document.querySelector(".move").offsetWidth;
            el.parentNode.children[0].style.width = endx + "px";
            el.parentNode.children[1].innerHTML = "按住滑块,拖动到最右边";
            //临界值小于
            if (endx <= 0) {
              el.style.left = 0 + "px";
              el.parentNode.children[0].style.width = 0 + "px";
              //document.querySelector('.movego').width(0)
            }
            //临界值大于
            if (parseInt(el.style.left) >= width) {
              el.style.left = width + "px";
              el.parentNode.children[0].style.width = width + "px";
              el.parentNode.children[1].innerHTML = "<span style='color:#fff'>验证通过</span>";
              el.className = "move moveSuccess";
              el.onmousedown = null;
              //利用session判断状态
              sessionStorage.setItem("move", "1");
            }
          };
        };
        document.onmouseup = function() {
          document.onmousemove = null;
        };
      }
    },
  }
</script>
<style>
  .ivu-input {
    width: 316px;
    font-size: 14px;
  }

  .ivu-tabs-bar {
    margin: 0 auto;
    width: 316px;
    border-bottom: 0;
    margin-bottom: 20px;
  }

  .ivu-modal-footer {
    text-align: center;
  }
</style>

<style scoped lang='less'>
  .view-form {
    text-align: center;
  }

  .login-text {
    width: 86px;
    height: 42px;
    font-size: 35px;
    margin: 20px auto;
    color: #009688;
  }

  .view-change {
    width: 316px;
    margin: 0 auto;

    .change-login-type {
      width: 150px;
      display: inline-block;
      // float: left;
      cursor: pointer;
      font-size: 14px;
      color: #009688;
    }

    .forget-pas {
      position: relative;
      float: right;
      cursor: pointer;
      font-size: 14px;
      display: block;
      text-align: right;
      text-decoration: none;
      color: #999;
    }
  }

  .btn-green {
    width: 316px;
    height: 48px;
    font-size: 16px;
    text-align: center;
    color: #fff;
    background-color: #009688;
    border: none;
    margin: 0 auto;
    margin-top: 30px;
  }

  .movebox {
    position: relative;
    background-color: #e8e8e8;
    width: 316px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin: 0 auto;
    margin-top: 18px;
    margin-bottom: 20px;

    .txt {
      position: absolute;
      top: 0px;
      width: 359px;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      -o-user-select: none;
      -ms-user-select: none;
      font-size: 12px;
      color: #999;
    }

    .movego {
      background-color: #22ac38;
      height: 40px;
      width: 0px;
    }

    .move {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 62px;
      height: 40px;
      border: 1px solid #ccc;
      cursor: move;
      border-radius: 4px;
      background: #fff;
    }

    .moveBefore {
      background: #fff url("../assets/images/qj.png") no-repeat center;
    }

    .moveSuccess {
      background: #fff url("../assets/images/yzcg.png") no-repeat center;
    }
  }
</style>

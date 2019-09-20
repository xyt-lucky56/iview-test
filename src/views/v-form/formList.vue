<template>
  <div class="iview-main">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="姓名" prop="name">
        <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
      </FormItem>
      <FormItem label="邮箱" prop="mail">
        <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
      </FormItem>
      <FormItem label="城市" prop="city">
        <cp-select v-model="formValidate.city" :dataList="cityList" :isRemember="true" selectName="saveCity" ref="selectDom"
          placeholder="请选择城市"></cp-select>
      </FormItem>
      <FormItem label="开始时间">
        <Row>
          <Col span="11">
          <FormItem prop="date">
            <DatePicker type="date" placeholder="请选择开始时间" v-model="formValidate.date"></DatePicker>
          </FormItem>
          </Col>
          <Col span="2" style="text-align: center">-</Col>
          <Col span="11">
          <FormItem prop="time">
            <TimePicker type="time" placeholder="请选择结束时间" v-model="formValidate.time"></TimePicker>
          </FormItem>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="性别" prop="gender">
        <cp-radio v-model="formValidate.gender" :dataList="radioList" :isRemember="true" radioName="saveGender" ref="radioDom"></cp-radio>
      </FormItem>
      <FormItem label="出生日期" prop="birthday">
        <DatePicker v-model="formValidate.birthday" type="date" placeholder="请输入出生日期" style="width: 200px"></DatePicker>
      </FormItem>
      <FormItem label="爱好" prop="interest">
        <CheckboxGroup v-model="formValidate.interest">
          <Checkbox label="吃"></Checkbox>
          <Checkbox label="睡觉"></Checkbox>
          <Checkbox label="跑步"></Checkbox>
          <Checkbox label="电影"></Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem label="描述" prop="desc">
        <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请描述..."></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
        <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
      </FormItem>
    </Form>
  </div>

</template>
<script>
  import CpSelect from '@/components/CpSelect'
  import {
    signName,
    getRadioList
  } from '@/api/api'
  import CpRadio from '@/components/CpRadio'
  export default {
    data() {
      return {
        formValidate: {
          name: '',
          mail: '',
          city: '',
          gender: '',
          interest: [],
          date: '',
          time: '',
          desc: '',
          brithday: ''
        },
        cityList: [],
        radioList: [],
        ruleValidate: {
          name: [{
            required: true,
            message: '请输入姓名',
            trigger: 'blur'
          }],
          mail: [{
              required: true,
              message: '请输入邮箱',
              trigger: 'blur'
            },
            {
              type: 'email',
              message: '邮箱格式不正确',
              trigger: 'blur'
            }
          ],
          city: [{
            required: true,
            message: '请选择城市',
            trigger: 'change'
          }],
          gender: [{
            required: true,
            message: '请选择性别',
            trigger: 'change'
          }],
          interest: [{
              required: true,
              type: 'array',
              min: 1,
              message: '至少选择一个爱好',
              trigger: 'change'
            },
            {
              type: 'array',
              max: 2,
              message: '最多选择两个爱好',
              trigger: 'change'
            }
          ],
          date: [{
            required: true,
            type: 'date',
            message: '请选择开始日期',
            trigger: 'change'
          }],
          time: [{
            required: true,
            type: 'string',
            message: '请选择时间',
            trigger: 'change'
          }],
          birthday: [{
            required: true,
            message: '请选择出生时间',
            type: 'date',
            trigger: 'change'
          }],
          desc: [{
              required: true,
              message: '请描述你的印象',
              trigger: 'blur'
            },
            {
              type: 'string',
              min: 20,
              message: '不少于20个字',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    components: {
      CpSelect,
      CpRadio
    },
    created() {
      this.selectInit();
      this.initRadio();
    },
    methods: {
      // 表单提交
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('恭喜您，提交成功!');
          } else {
            this.$Message.error('不好意思，失败了!');
          }
        })
      },
      // 表单重置
      handleReset(name) {
        this.$refs[name].resetFields();
      },
      // 获取select数据
      selectInit() {
        signName().then(res => {
          console.log(res)
          if (res.status == 200) {
            this.cityList = res.data;
            this.$refs.selectDom.setDefaults(this.cityList); //初始化默认选中数据
          }
        })
      },
      // 获取radio数据
      initRadio() {
        getRadioList().then(res => {
          if (res.status == 200) {
            this.radioList = res.data
            this.$refs.radioDom.setDefaults(this.radioList); //设置默认数据
          }
        })
      }
    }
  }
</script>
<style scoped lang="less">
  .iview-main {
    width: 50%;
    margin: 0 auto;
    margin-top: 50px;
  }
</style>


<template>
<div class="view-main">
   <i-form :model="formItem" :label-width="80" :rules="ruleValidate">
        <Form-item label="输入框" prop="input">
            <i-input :value.sync="formItem.input" placeholder="请输入"></i-input>
        </Form-item>
        <Form-item label="选择器" prop="select">
            <i-select :model.sync="formItem.select" placeholder="请选择">
                <i-option value="beijing">北京市</i-option>
                <i-option value="shanghai">上海市</i-option>
                <i-option value="shenzhen">深圳市</i-option>
            </i-select>
        </Form-item>
        <Form-item label="日期控件">
            <Row>
                <i-col span="11">
                    <Date-picker type="date" placeholder="选择日期" :value.sync="formItem.date"></Date-picker>
                </i-col>
                <i-col span="2" style="text-align: center">-</i-col>
                <i-col span="11">
                    <Time-picker type="time" placeholder="选择时间" :value.sync="formItem.time"></Time-picker>
                </i-col>
            </Row>
        </Form-item>
        <Form-item label="单选框">
            <Radio-group :model.sync="formItem.radio">
                <Radio value="male">男</Radio>
                <Radio value="female">女</Radio>
            </Radio-group>
        </Form-item>
        <Form-item label="多选框">
            <Checkbox-group :model.sync="formItem.checkbox">
                <Checkbox value="吃饭">1</Checkbox>
                <Checkbox value="睡觉">2</Checkbox>
                <Checkbox value="跑步">3</Checkbox>
                <Checkbox value="看电影">4</Checkbox>
            </Checkbox-group>
        </Form-item>
        <Form-item label="开关">
            <Switch :checked.sync="formItem.switch" size="large">
                <span slot="open">开启</span>
                <span slot="close">关闭</span>
            </Switch>
        </Form-item>
        <Form-item label="滑块">
            <Slider :value.sync="formItem.slider" range></Slider>
        </Form-item>
        <Form-item label="文本域">
            <i-input :value.sync="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></i-input>
        </Form-item>
        <Form-item>
            <i-button type="primary">提交</i-button>
            <i-button  style="margin-left: 8px">取消</i-button>
        </Form-item>
    </i-form>
</div>
</template>
<script>
export default {
  props: {

  },
  data() {
    return {
      formItem: {
        input: '',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: '',
        ruleValidate: {
          name: [
            { required: true, message: '姓名不能为空', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
          ],
          city: [
            { required: true, message: '请选择城市', trigger: 'change' }
          ],
          gender: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          interest: [
            { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
            { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
          ],
          date: [
            { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
          ],
          time: [
            { required: true, type: 'date', message: '请选择时间', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请输入个人介绍', trigger: 'blur' },
            { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
          ]
        }
      }
    };
  },
  created() {

  },
};
</script>

<style scoped lang="less">
.view-main {
  width: 50%;
  margin: 0 auto;
}
</style>

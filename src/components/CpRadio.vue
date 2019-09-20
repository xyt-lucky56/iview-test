<template>
  <RadioGroup v-model="radioData" @on-change="changeRadio">
    <Radio :label="item.value" v-for="item in dataList" :key="item.value">
      <span>{{item.label}}</span>
    </Radio>
  </RadioGroup>
</template>

<script>
  export default {
    props: ['value', 'dataList', 'isRemember', 'radioName'],
    data() {
      return {
        radioData: ''
      }
    },
    created() {

    },
    methods: {
      // 切换选项
      changeRadio() {
        this.$emit('input', this.radioData)
        if (this.isRemember) { //设置默认缓存
          this.$storage.setStorage(this.radioName, this.radioData)
        }
      },
      // 设置默认选中或者使用缓存
      setDefaults(data) {
        if (data) {
          //设置默认选中数据
          for (let a = 0; a < data.length; a++) {
            if (data[a].defaultSelect) {
              this.radioData = data[a].value
            }
          }
          //如果有存储的值，就用存储的值
          if (this.$storage.getStorage(this.radioName) && this.isRemember) {
            this.radioData = this.$storage.getStorage(this.radioName)
          }
          this.$emit('input', this.radioData);
        }
      }
    }
  }
</script>

<style>
</style>

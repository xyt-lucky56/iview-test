<template>
  <Select v-model="selectData" filterable @on-change="changeSelect">
    <Option v-for="item in dataList" :value="item.value" :key="item.value">{{ item.label }}</Option>
  </Select>
</template>


<script>
  export default {
    props: ['value', 'dataList', 'isRemember', 'selectName'],
    data() {
      return {
        selectData: '',
      }
    },
    created() {},
    methods: {
      //切换下拉框
      changeSelect() {
        this.$emit('input', this.selectData);
        if (this.isRemember) {
          this.$storage.setStorage(this.selectName, this.selectData)
        }
      },
      // 设置默认值或者存储的值,则调用此函数
      setDefaults(data) {
        if (data) {
          //设置默认选中数据
          for (let a = 0; a < data.length; a++) {
            if (data[a].defaultSelect) {
              this.selectData = data[a].value
              this.$emit('input', this.selectData);
            }
          }
          //如果有存储的值，就用存储的值
          if (this.$storage.getStorage(this.selectName) && this.isRemember) {
            this.selectData = this.$storage.getStorage(this.selectName)
            this.$emit('input', this.selectData);
          }
        }
      }
    }
  };
</script>

<style scoped>
  .iview-main {
    margin: 0 auto;
    /* margin-top: 100px; */
    text-align: center;
  }
</style>

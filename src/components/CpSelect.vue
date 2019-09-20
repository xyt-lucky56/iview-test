<template>
  <Select v-model="selectData" filterable @on-change="changeSelect">
    <Option v-for="item in dataList" :value="item.value" :key="item.value">{{ item.label }}</Option>
  </Select>
</template>

<script>
  export default {
    props: ['value', 'dataList', 'isRemember'],
    data() {
      return {
        selectData: '',
      }
    },
    created() {

    },
    methods: {
      //点击下拉框
      changeSelect() {
        console.log(this.selectData)
        this.$emit('input', this.selectData);
        if (this.isRemember) {
          console.log(this.$storage,999)
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

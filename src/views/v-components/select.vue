<template>
  <div class="iview-main">
    <div>下拉框演示 </div>
    <!-- isRemember 为true的时候，才需要设置selectName  否则根本不用写这个 -->
    <cp-select v-model="form.select" :dataList="cityList" :isRemember="true" selectName="saveCar" ref="selectDom"></cp-select>
     </div>
</template>

<script>
  import CpSelect from '@/components/CpSelect'
  import {
    signName
  } from '@/api/api'
  export default {
    data() {
      return {
        //         cityList: [{
        //             value: "1",
        //             label: "待揽货",
        //             defaultSelect: 0
        //           },
        //
        //
        //           {
        //             value: "6",
        //             label: "运输中",
        //             defaultSelect: 1
        //           },
        //         ],
        cityList: [],
        form: {
          select: ''
        }
      }
    },
    components: {
      CpSelect
    },
    created() {
      this.tableInit();
    },
    updated(){
      console.log('下拉框中的值',this.form.select)
    },
    methods: {
      tableInit() {
        signName().then(res => {
          console.log(res)
          if (res.status == 200) {
            this.cityList = res.data;
            this.$refs.selectDom.setDefaults(this.cityList);
          }
        })
      }
    }
  };
</script>

<style scoped>
  .iview-main {
    margin: 0 auto;
    margin-top: 100px;
    text-align: center;
    width: 200px;
  }
</style>
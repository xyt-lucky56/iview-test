<template>
  <div class="iview-main">
    <div>下拉框演示</div>
    <cp-select v-model="form.select" :dataList="cityList" :isRemember="true"></cp-select>
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
//           {
//             value: "2",
//             label: "已揽货",
//             defaultSelect: 0
//           },
//
//           {
//             value: "4",
//             label: "待装车",
//             defaultSelect: 0
//           },
//           {
//             value: "5",
//             label: "已装车",
//             defaultSelect: 0
//           },
//
//           {
//             value: "6",
//             label: "运输中",
//             defaultSelect: 1
//           },
//           {
//             value: "8",
//             label: "返程中",
//             defaultSelect: 0
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
    methods: {
      tableInit() {
        signName().then(res => {
          console.log(res)
          if (res.status == 200) {
            this.cityList = res.data;
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
    width:200px;
  }
</style>
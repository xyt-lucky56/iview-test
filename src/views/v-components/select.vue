<template>
  <div class="iview-main">
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
        cityList: [{
            value: 'New York',
            label: 'New York'
          },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ],
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
  }
</style>
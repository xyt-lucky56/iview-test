<template>
  <div>
    <cp-radio v-model="form.radio" :dataList="radioList" :isRemember="true" radioName="saveWater" ref="radioDom"></cp-radio>
  </div>
</template>

<script>
  import CpRadio from '@/components/CpRadio.vue'
  import {
    getRadioList
  } from '@/api/api'
  export default {
    props: {

    },
    components: {
      CpRadio
    },
    data() {
      return {
        radioList: [],
        form: {
          radio: ''
        }
      };
    },
    created() {
      this.initRadio()
    },
    methods: {
      initRadio() {
        getRadioList().then(res => {
           if (res.status == 200) {
            this.radioList = res.data
            this.$refs.radioDom.setDefaults(this.radioList); //设置默认数据
          }
        })
      }
    }
  };
</script>

<style scoped>

</style>

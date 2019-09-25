<template>
    <div  class="iview-main">
        <CpCascader  v-model='childeValue' cascaderName='cas' :isRemember='true'></CpCascader>
    </div>
</template>

<script>
import CpCascader from '@/components/CpCascader.vue'
export default {
    components:{CpCascader},
    props: {

    },
    data() {
        return {
            childeValue:[]
        };
    },
    created() {

    },
    methods:{

    },
    updated(){
        console.log(this.childeValue,'父组件接收的数据')
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

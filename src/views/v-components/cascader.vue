<template>
    <div>
        <CpCascader  @listenToChildEvent='childeValue1' :arr='[2, 21000, 10001, 30001]'></CpCascader>
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
        childeValue1(value){
            console.log(value,'父组件');//123
        }
    }
};
</script>

<style scoped>

</style>

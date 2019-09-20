<template>
    <div>
        <CpSelect @listenToChildEvent='ChildValue'></CpSelect>
    </div>
</template>

<script>
import CpSelect from '@/components/CpSelect.vue'
export default {
    components:{CpSelect},
    props: {

    },
    data() {
        return {

        };
    },
    created() {

    },
    methods:{
        ChildValue(value){
            console.log(value)
        }
    }
};
</script>

<style scoped>

</style>

<template>
    <div>
        <Table border ref="selection" :columns="columns4" :data="data1" @on-select-all='Allselect' @on-selection-change='ChangeSelect'></Table>
        <Button @click="handleSelectAll(status)">{{status?'全选':'取消全选'}}</Button>
        <br>
        <br>
        <br>
        <Cptimedata v-model="time" />
    </div>
</template>
<script>
import Cptimedata from '@/components/CpTimedata.vue'
    export default {
        components:{Cptimedata},
        data () {
            return {
                status:true,
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
                time:''
            }
        },
        methods: {
            handleSelectAll (status) {
                if(status){
                 this.$refs.selection.selectAll(status);
                 this.status=false
                }else{
                 this.$refs.selection.selectAll(status);
                 this.status=true
                }
            },
            Allselect(s){
                console.log(s)
                 this.status=false
               
            },
            ChangeSelect(s){
                console.log(s)
                if(s.length==0){
                 this.status=true
                }else if(s.length==4){
                    this.status=false
                }else{
                    this.status=true
                }
            }
        },
        updated(){
            console.log(this.time,'父组件得到的时间')
        }
    }
</script>
<style scoped>

</style>
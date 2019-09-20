<template>
    <div>
        <!-- filterable、remote、remote-method、loading、label-in-value- 如需远程检索  -->
        <i-select v-model="data[0]" size="small" style="width:100px" filterable  @on-change='HanderSelectprovince'>
            <i-option v-for="item in cityList1" :label="item.label" :key="item.value" :value='item.value'>{{ item.text }}</i-option>
        </i-select>    
        <i-select  v-model="data[1]" size="small" style="width:100px" filterable @on-change='HanderSelectCity'>
            <i-option v-for="item in cityList2" :label="item.label" :key="item.value" :value='item.value'>{{ item.text }}</i-option>
        </i-select>    
        <i-select  v-model="data[2]" size="small" style="width:100px" filterable @on-change='HanderSelectArea'>
            <i-option v-for="item in cityList3" :label="item.label" :key="item.value" :value='item.value'>{{ item.text }}</i-option>
        </i-select>    
        <i-select  v-model="data[3]" size="small" style="width:100px" filterable @on-change='HanderSelectStreet'>
            <i-option v-for="item in cityList4" :label="item.label" :key="item.value" :value='item.value'>{{ item.text }}</i-option>
        </i-select>
   </div>

</template>

<script>
import {chinaList} from '@/utils/city.js'
  export default {
      props:{
          arr:Array
      },
      data(){
          return {
            //   data:{
            //     model1:'',
            //     model2:'',
            //     model3:'',
            //     model4:'',
            //   },
              data:[],
              cityList1:[],
              cityList2:[],
              cityList3:[],
              cityList4:[],
              sum:[]
          }
      },
      created(){
          if(this.arr){         //如果传值
            this.data=this.arr;
            this.cityList1=chinaList;
            if(this.data.length>0){
              this.acceptingdata()
            }
          }else{
             this.cityList1=chinaList;
          }

      },
      methods:{
          HanderSelectprovince(va){
              console.log(va,'省')
              chinaList.forEach((item,index)=>{
                  if(item.value===va){  
                      this.cityList2=item.childrens
                  }
              });
              this.data.splice(1,);
              this.cityList3=[];
              this.cityList4=[];
              this.$emit('listenToChildEvent',this.model1)
              this.$set(this.data,0,va)
          },
          HanderSelectCity(value){
              this.cityList2.forEach((item,index)=>{
                  if(item.value===value){
                      this.cityList3=item.childrens
                  }
              })
              this.data.splice(2,);
              this.cityList4=[];
              this.$set(this.data,1,value)
          },
          HanderSelectArea(value){
              this.cityList3.forEach((item,index)=>{
                  if(item.value===value){
                      this.cityList4=item.childrens
                  }
              })
              this.$set(this.data,2,value)
          },
          HanderSelectStreet(value){
              console.log(value,'街道')
              this.$set(this.data,3,value)
          },
          acceptingdata(){      //传入数据处理
                chinaList.forEach((item,index)=>{
                    if(item.value===this.data[0]){  
                        this.cityList2=item.childrens
                    }
                });
                this.cityList2.forEach((item,index)=>{
                    if(item.value===this.data[1]){
                        this.cityList3=item.childrens
                    }
                });
                this.cityList3.forEach((item,index)=>{
                    if(item.value===this.data[2]){
                        this.cityList4=item.childrens
                    }
                })
          }
      },
      watch:{
          'data':{
              handler:function(newValue,oldValue){
                  let newArr=this.data.filter(item=>item)
                  this.$emit('listenToChildEvent',newArr)
              },
              deep: true
          }
      }
  }
</script>

<style>
</style>

<template>
    <div>
        <i-select v-model="model1" size="small" style="width:100px" filterable @on-change='HanderSelectprovince'>
            <i-option v-for="item in cityList1" :label="item.label" :key="item.value" :value='item.value'>{{ item.text }}</i-option>
        </i-select>    
        <i-select  v-model="model2" size="small" style="width:100px" filterable @on-change='HanderSelectCity'>
            <i-option v-for="item in cityList2" :label="item.label" :key="item.value" :value='item.value'>{{ item.text }}</i-option>
        </i-select>    
        <i-select  v-model="model3" size="small" style="width:100px" filterable @on-change='HanderSelectArea'>
            <i-option v-for="item in cityList3" :label="item.label" :key="item.value" :value='item.value'>{{ item.text }}</i-option>
        </i-select>    
        <i-select  v-model="model4" size="small" style="width:100px" filterable @on-change='HanderSelectStreet'>
            <i-option v-for="item in cityList4" :label="item.label" :key="item.value" :value='item.value'>{{ item.text }}</i-option>
        </i-select>
   </div>

</template>

<script>
import {chinaList} from '@/utils/city.js'
  export default {
      data(){
          return {
              model1:'',
              model2:'',
              model3:'',
              model4:'',
              cityList1:[],
              cityList2:[],
              cityList3:[],
              cityList4:[],
          }
      },
      created(){
          this.cityList1=chinaList;
          console.log(chinaList)
      },
      methods:{
          HanderSelectprovince(va){
              console.log(va)
              chinaList.forEach((item,index)=>{
                  if(item.value===va){
                      this.cityList2=item.childrens
                  }
              });
              this.model2='';
              this.$emit('listenToChildEvent',this.model1)
          },
          HanderSelectCity(){

          },
          HanderSelectArea(){

          },
          HanderSelectStreet(){

          }
      }
  }
</script>

<style>
</style>

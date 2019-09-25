<template>
    <div>
        <!-- filterable、remote、remote-method、loading、label-in-value- 如需远程检索  -->
        <i-select v-model="data[0]" size="small" style="width:100px" filterable  @on-change='HanderSelectprovince'>
            <i-option v-for="item in cityList1" :label="item.label" :key="item.value" :value='item.value'>{{ item.pingYin }}</i-option>
        </i-select>    
        <i-select  v-model="data[1]" size="small" style="width:100px" filterable @on-change='HanderSelectCity'>
            <i-option v-for="item in cityList2" :label="item.label" :key="item.value" :value='item.value'>{{ item.pingYin }}</i-option>
        </i-select>    
        <i-select  v-model="data[2]" size="small" style="width:100px" filterable @on-change='HanderSelectArea'>
            <i-option v-for="item in cityList3" :label="item.label" :key="item.value" :value='item.value'>{{ item.pingYin }}</i-option>
        </i-select>    
        <i-select  v-model="data[3]" size="small" style="width:100px" filterable @on-change='HanderSelectStreet'>
            <i-option v-for="item in cityList4" :label="item.label" :key="item.value" :value='item.value'>{{ item.pingYin }}</i-option>
        </i-select>
          <i-button type="text" @click="updata">Text</i-button>
   </div>

</template>

<script>
import {chinaList} from '@/utils/city.js'
import {getZoneListProvince,getZoneListCity,getZoneListArea,getZoneListStreet} from '@/api/api'
  export default {
      props:[
            'arr',
            'isRemember',
            'cascaderName',
      ],
      data(){
          return {
              data:[],
              cityList1:[],
              cityList2:[],
              cityList3:[],
              cityList4:[],
              sum:[],
          }
      },
      created(){
          this.saveLocal();
      },
      methods:{
          HanderSelectprovince(va){
              console.log(va,'省')
            //   chinaList.forEach((item,index)=>{
            //       if(item.value===va){  
            //           this.cityList2=item.childrens
            //       }
            //   });
              let params={paraId:va}
              getZoneListCity(params).then(res=>{
                  this.cityList2=res.data
              })
              this.data.splice(1,);
              this.cityList3=[];
              this.cityList4=[];
              this.$set(this.data,0,va)
          },
          HanderSelectCity(value){
            //   this.cityList2.forEach((item,index)=>{
            //       if(item.value===value){
            //           this.cityList3=item.childrens
            //       }
            //   })
            console.log('市',value)
            if(value){
              let params={paraId:value}
              getZoneListArea(params).then(res=>{
                  this.cityList3=res.data
              })
              this.data.splice(2,);
              this.cityList4=[];
              this.$set(this.data,1,value)
            }
          },
          HanderSelectArea(value){
              console.log('区',value)
            //   this.cityList3.forEach((item,index)=>{
            //       if(item.value===value){
            //           this.cityList4=item.childrens
            //       }
            //   })
            if(value){
                let params={paraId:value}
                getZoneListStreet(params).then(res=>{
                    this.cityList4=res.data
                })
                this.$set(this.data,2,value)
            }
          },
          HanderSelectStreet(value){
              if(value){
                console.log(value,'街道')
                this.$set(this.data,3,value)
              }
          },
          acceptingdata(){      //传入数据处理
              let params={paraId:this.data[0]}
              let params1={paraId:this.data[1]}
              let params2={paraId:this.data[2]};
                getZoneListProvince().then(res=>{
                    console.log(res)
                    this.cityList1=res.data
                })
                getZoneListCity(params).then(res=>{
                    this.cityList2=res.data
                })
                getZoneListArea(params1).then(res=>{
                  this.cityList3=res.data
                })
                getZoneListStreet(params2).then(res=>{
                  this.cityList4=res.data
                })
          },
          saveLocal(){

              console.log(this.$storage.getStorage(this.cascaderName))
            //   if(this.arr){
            //       this.data=this.arr;
            //        chinaList.forEach((item,index)=>{
            //             if(item.value=== this.data[0]){  
            //                 this.cityList2=item.childrens
            //             }
            //         });
            //         this.cityList2.forEach((item,index)=>{
            //             if(item.value===this.data[1]){
            //                 this.cityList3=item.childrens
            //             }
            //         })
            //         this.cityList3.forEach((item,index)=>{
            //             if(item.value===this.data[2]){
            //                 this.cityList4=item.childrens
            //             }
            //         })
            //   }
              if(this.$storage.getStorage(this.cascaderName)&&this.isRemember){
                    console.log('有缓存值')
                    this.data=this.$storage.getStorage(this.cascaderName);
                    this.acceptingdata()
                    //     chinaList.forEach((item,index)=>{
                    //         if(item.value=== this.data[0]){  
                    //             this.cityList2=item.childrens
                    //         }
                    //     });
                    //     this.cityList2.forEach((item,index)=>{
                    //         if(item.value===this.data[1]){
                    //             this.cityList3=item.childrens
                    //         }
                    //     })
                    //     this.cityList3.forEach((item,index)=>{
                    //         if(item.value===this.data[2]){
                    //             this.cityList4=item.childrens
                    //         }
                    //     })
              }else{
                getZoneListProvince().then(res=>{
                    console.log(res)
                    this.cityList1=res.data
                })
              }
          },
          updata(){
              if(this.isRemember&&this.cascaderName){
                   this.$storage.setStorage(this.cascaderName,this.data)
              }
          }
      },
      watch:{
          'data':{
              handler:function(newValue,oldValue){
                  let newArr=this.data.filter(item=>item)
                  this.$emit('input',newArr);
              },
              deep: true
          }
      }
  }
</script>

<style>
</style>

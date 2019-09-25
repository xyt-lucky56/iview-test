<template>
  <div>
    <Table  :loading="loading" :columns="columns2" :data="data3" border>
        <template slot-scope="{row}" slot="zip">
            <div>{{row.zip | stringToDefault}}</div>
        </template>
        <template slot-scope="{row}" slot="sex">
            <div>{{row.sex | MenWomen}}</div>
        </template>
    </Table>
    <Page :total='total' :current='current' :page-size='10'  @on-change='pageValue' />        
  </div>
</template>

<script>

export default {
  props: {},
  data() {
    return {
      current:1,
      total:50,
      loading:true,
      columns2: [
        {
          title: "姓名",
          key: "name",
          width: 100,
        },
        {
          title: "年龄",
          key: "age",
          width: 100
        },
        {
          title: "省份",
          key: "province",
          width: 100
        },
        {
          title: "市区",
          key: "city",
          width: 100
        },
        {
          title: "地址",
          key: "address",
          width: 220
        },
        {
          title: "邮编",
          width: 100,
          slot:'zip'                //template
        },
        {
          title: "性别",
          slot: "sex",
          width: 100,
          filters:[
              {label:'男',value:1},
              {label:'女',value:0}
          ],
          filterMultiple:false,
          filterMethod :(value,row)=>{          //过滤
              console.log(value,row,'需要过滤的数据')
              if(value===1){
                  return row.sex==1
              }else if(value===0){
                  return row.sex==0
              }
          },
        },        
        {
          title: "手机号",
          key: "phone",
          width: 100
        },        
        {
          title: "身份证",
          key: "identityCard",
          width: 250,
          ellipsis:true
        },        
        {
          title: "状态",
          key: "state",
        },
        {
          title: "操作",
          key: "action",
          fixed: "right",
          width: 150,
          align:'center',
          render:(h, params)=>{
              return h('div',[
                  h('Button',{
                      props:{
                          type:'primary',
                          size:'small'
                      },
                      style:{
                          marginRight:'5px',
                      },
                      on:{
                          click:()=>{ 
                              console.log('我点击了确定',params.row)
                              this.show(params.row)
                          }
                      }
                  },'确定'),
                  h('Button',{
                      props:{
                          type:'error',
                          size:'small'
                      },
                      on:{
                          click:()=>{ 
                              console.log('我点击了删除',params.row)
                              this.$Modal.warning({
                                  title:'确定删除本条数据',
                                  content:`<div>删除数据地址:${params.row.province}</div>`,
                                  closable:true
                              })
                          }
                      }
                  },'删除')
              ]);
          }
        }
      ],
      data3: [
        {
          name: "王小明",
          age: 18,
          address: "北京市朝阳区芍药居",
          province: "北京市",
          city: "朝阳区",
          zip: null,
          sex:1,
          phone:12345678,
          identityCard:420117199806180888,
          state:1,
        },
        {
          name: "张小刚",
          age: 25,
          address: "北京市海淀区西二旗",
          province: "北京市",
          city: "海淀区",
          zip: 100000,
          sex:1,
          phone:12345678,
          identityCard:420117199806180888,
          state:5
        },
        {
          name: "李小红",
          age: 30,
          address: "上海市浦东新区世纪大道",
          province: "上海市",
          city: "浦东新区",
          zip: 100000,
          sex:1,
          phone:12345678,
          identityCard:420117199806180888,
          state:5
        },
        {
          name: "周小伟",
          age: 26,
          address: "深圳市南山区深南大道",
          province: "广东",
          city: "南山区",
          zip: 100000,
          sex:1,
          phone:12345678,
          identityCard:420117199806180888,
          state:5
        },
        {
          name: "周小伟",
          age: 26,
          address: "深圳市南山区深南大道",
          province: "广东",
          city: "南山区",
          zip: 100000,
          sex:1,
          phone:12345678,
          identityCard:420117199806180888,
          state:5
        },
        {
          name: "周小伟",
          age: 26,
          address: "深圳市南山区深南大道",
          province: "广东",
          city: "南山区",
          zip: 100000,
          sex:0,
          phone:12345678,
          identityCard:420117199806180888,
          state:5
        },
        {
          name: "周小伟",
          age: 26,
          address: "深圳市南山区深南大道",
          province: "广东",
          city: "南山区",
          zip: 100000,
          sex:0,
          phone:12345678,
          identityCard:420117199806180888,
          state:5
        },
        {
          name: "周小伟",
          age: 26,
          address: "深圳市南山区深南大道",
          province: "广东",
          city: "南山区",
          zip: 100000,
          sex:0,
          phone:12345678,
          identityCard:420117199806180888,
          state:5
        },
        {
          name: "周小伟",
          age: 26,
          address: "深圳市南山区深南大道",
          province: "广东",
          city: "南山区",
          zip: 100000,
          sex:1,
          phone:12345678,
          identityCard:420117199806180888,
          state:5
        },
        {
          name: "周小伟",
          age: 26,
          address: "深圳市南山区深南大道",
          province: "广东",
          city: "南山区",
          zip: 100000,
          sex:0,
          phone:12345678,
          identityCard:420117199806180888,
          state:5
        },
        {
          name: "周小伟",
          age: 26,
          address: "深圳市南山区深南大道",
          province: "广东",
          city: "南山区",
          zip: 100000,
          sex:0,
          phone:12345678,
          identityCard:420117199806180888,
          state:5
        }
      ]
    };
  },
  created() {
      setTimeout(()=>{
          this.loading=false
      },1000)
  },
  methods:{
      show(value){
          this.$Modal.confirm({
              title:'查看信息',
              content:`姓名：${value.name}<br>年龄:${value.age}<br>手机号:${value.phone}`,
              closable:true,
              cancelText:'取消'

          })
      },
      pageValue(value){
          console.log(value)
      }
  }
};
</script>

<style scoped>
</style>

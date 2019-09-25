<template>
  <div>
    <DatePicker type="date" :options="options1" placeholder="请选择时间" style="width: 200px"  @on-change='QueryData'></DatePicker>
    <br>
    <br>
    <DatePicker type="datetime" placeholder="请选择时间" format="yyyy年MM月dd日HH点mm分" style="width: 200px" @on-change='QueryData'></DatePicker>
    <br>
    <br>
    <DatePicker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="选择时间范围" style="width: 200px"></DatePicker>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value2:[],
      options1: {
        shortcuts: [
          {
            text: "今天",
            value() {
              return new Date();
            },
            onClick: picker => {
              this.$Message.info("今天");
            }
          },
          {
            text: "昨天",
            value() {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              return date;
            },
            onClick: picker => {
              this.$Message.info("昨天");
            }
          },
          {
            text: "一周前",
            value() {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              return date;
            },
            onClick: picker => {
              this.$Message.info("一周前");
            }
          }
        ],
        disabledDate(data){         //禁用今天以前的
            return data && data.valueOf()<Date.now()-86400000
        }
      }
    };
  },
  methods:{
      QueryData(data,value){
          console.log(data,value)
          this.$emit('input',data)
      }
  }
};
</script>
<style scoped>
</style>
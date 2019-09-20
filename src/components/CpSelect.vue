<template>
    <div class="iview-main">
       <Row>
        <Col span="12" style="padding-right:10px">
            <Select v-model="selectData" filterable @on-change="changeSelect">
                <Option v-for="item in dataList"  :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </Col>
       </Row>
    </div>
</template>

<script>
export default {
  props: ['value', 'dataList', 'isRemember'],
  data() {
    return {
      selectData: '',
    }
  },
  created() {

  },
  methods: {
    changeSelect() {
      console.log(this.selectData)
      this.$emit('input', value);
    }
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

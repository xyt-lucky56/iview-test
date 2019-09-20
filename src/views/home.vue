<template>
  <div class="layout">
    <Layout>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']" @on-select="routeTo">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              组件封装
            </template>
            <MenuItem name="/admin/select">下拉框select</MenuItem>
            <MenuItem name="/admin/cascader">四级联动cascader</MenuItem>
            <MenuItem name="/admin/radio">单选radio</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>
              表格
            </template>
            <MenuItem name="/admin/table">表格1</MenuItem>
            <MenuItem name="/admin/tableTwo">表格2</MenuItem>
            <MenuItem name="/admin/checkBoxTable">全选反选表格</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
              表单
            </template>
            <MenuItem name="/admin/formList">表单1</MenuItem>
            <MenuItem name="/admin/formListTwo">表单2</MenuItem>
          </Submenu>
          <MenuItem name="/admin/jump">
            <Icon type="ios-analytics"></Icon>
            <span>锚点连接</span>
          </MenuItem>
          <MenuItem name="/admin/uploadImg">
            <Icon type="ios-analytics"></Icon>
            <span>上传图片</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
          <div class="layout-nav">
            <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>
            盼盼
            </MenuItem>
            <MenuItem name="2">
            <Icon type="ios-keypad"></Icon>
            修改密码
            </MenuItem>
            <MenuItem name="3">
            <Icon type="ios-analytics"></Icon>
            修改信息
            </MenuItem>
            <MenuItem name="4">
            <div @click="returnLogin">
              <Icon type="ios-paper"></Icon>
              退出登录
            </div>
            </MenuItem>
          </div>
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
    <!-- 登录弹窗 -->
    <cp-login ref="loginDom"></cp-login>
  </div>
</template>
<script>
  import CpLogin from '@/components/CpLogin.vue'
  export default {
    name: 'home',
    data() {
      return {
        isCollapsed: false
      }
    },
    components: {
      CpLogin
    },
    computed: {
      userName() {
        return this.$store.state.addNumber.name
      },
      statusCode() {
        return this.$store.state.addNumber.code
      },
      rotateIcon() {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
      menuitemClasses() {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    watch: {
      statusCode(currVal, oldVal) {
        console.log(currVal, oldVal)
        if (currVal == 401) {
          this.$refs.loginDom.openModel()
        }
      },
    },
    created() {

    },
    methods: {
      collapsedSider() {
        this.$refs.side1.toggleCollapse();
      },
      routeTo(e) {
        this.$router.push(e);
      },
      // 退出登录
      returnLogin() {
        this.$refs.loginDom.openModel()
      }
    }
  }
</script>

<style scoped lang="less">
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
  }

  .ivu-layout.ivu-layout-has-sider {
    height: 100%;
  }

  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }

  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }

  .menu-icon {
    transition: all 0.3s;
  }

  .rotate-icon {
    transform: rotate(-90deg);
  }

  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width 0.2s ease 0.2s;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size 0.2s ease, transform 0.2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0px;
    transition: width 0.2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
    vertical-align: middle;
    font-size: 22px;
  }

  .layout-header-bar {
    .layout-nav {
      float: right;
      margin-right: 100px;

      .ivu-menu-item {
        display: inline-block;
      }
    }
  }
</style>

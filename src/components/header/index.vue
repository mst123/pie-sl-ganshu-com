<template>
  <div id="header">
    <div class="headerLogo">
      <div class="logo"></div>
      <div class="logo-title">
      </div>
    </div>
    <el-menu
      :default-active="$route.path"
      router
      text-color="#ffffff"
      active-text-color="#ffffff"
      class="menu-content"
      mode="horizontal"
      background-color="transparent"
    >
      <template v-for="(item, index) of menuList">
        <template v-if="!(item.sysMenuList&&item.sysMenuList.length)">
          <el-menu-item :index="item.menuUrl" :key="index">{{item.menuTitle}}</el-menu-item>
        </template>
        <template v-else>
          <el-submenu popper-class="menu-popper" :index="'disabled'+index" :key="index">
            <template slot="title">{{item.menuTitle}}</template>
            <el-menu-item v-for="(itemC, indexC) of item.sysMenuList" :index="itemC.menuUrl" :key="indexC+'-'+index">{{itemC.menuTitle}}</el-menu-item>
          </el-submenu>
        </template>
      </template>
    </el-menu>
    <div class="admin">
      <el-tooltip content="退出登录" placement="bottom" effect="light">
        <i @click="logout" class="el-icon-switch-button exit"></i>
      </el-tooltip>
      <el-tooltip
        :content="`欢迎您，${roleName}`"
        placement="bottom"
        effect="light"
      >
        <el-avatar class="admin-img" size="small" :src="circleUrl"></el-avatar>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    };
  },
  mounted() {
  },
  methods: {
    logout() {
      window.open(this.baseURL + "cas/logout", "_self");
    }
  },
  components: {},
  props: {
    menuList: {
      require: true,
      type: Array
    },
    baseURL: {
      require: true,
      type: String
    },
    roleName: {
      require: true,
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
#header {
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row;
  background: url("../../assets/img/headerBag.png") no-repeat center;
  .headerLogo {
    width: 650px;
    line-height: 64px;
    font-size: 24px;
    text-align: center;
    color: #ffffff;
    .logo {
      float: left;
      height: 100%;
      width: 30px;
      background: url("../../assets/img/logo.svg") no-repeat center;
      background-size: contain;
      margin: 0 9px;
    }
    .logo-title {
      height: 100%;
      margin-top:2px;
      background: url("../../assets/img/logTitle.png") no-repeat center;

    }
  }
  /deep/ .menu-content {
    flex: 1;
    z-index: 99;
    border: 0;
    .el-menu-item{
      height: 64px;
      line-height: 64px;
      border-width: 4px;
      &:hover{
        background-color: transparent!important;
      }
      &.is-active{
        font-weight: 900;
      }
    }
    .el-submenu{
      .el-submenu__icon-arrow{
        color: #ffffff;
        display: none;
      }
      &.is-active{
        font-weight: 900;
        .el-submenu__title{
          font-weight: 900;
        }
      }
      .el-submenu__title{
        height: 64px;
        line-height: 64px;
        border-width: 4px;
        &:hover{
          background-color: transparent!important;
        }
      }
    }
  }
  .admin {
    width: 140px;
    line-height: 30px;
    .admin-img {
      margin-top: 16px;
      float: right;
      cursor: pointer;
    }
    .exit {
      font-size: 30px;
      cursor: pointer;
      color: #ffffff;
      float: right;
      margin: 15px;
    }
  }
}
</style>
<style lang="scss">
  .menu-popper{
    background: #ffffff;
    .el-menu--popup{
      min-width: 116px;
    }
    .el-menu-item{
      color: #000000!important;
      &.is-active{
        color: #409EFF!important;
      }
    }
  }
</style>

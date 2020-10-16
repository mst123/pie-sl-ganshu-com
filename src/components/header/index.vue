<template>
  <div id="header">
    <div class="headerLogo">
      <div class="logo"></div>
      <div class="logo-title">
        {{title}}
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
          <el-menu-item :index="item.menuUrl" :key="index">
            <img class="icon-bg" :src="item.menuIcon" alt="" srcset="">
            {{item.menuTitle}}
          </el-menu-item>
        </template>
        <template v-else>
          <el-submenu popper-class="menu-popper" :index="'disabled'+index" :key="index">
            <template slot="title">
              <img class="icon-bg" :src="item.menuIcon" alt="" srcset="">
              {{item.menuTitle}}
            </template>
            <el-menu-item v-for="(itemC, indexC) of item.sysMenuList" :index="itemC.menuUrl" :key="indexC+'-'+index">
              {{itemC.menuTitle}}
            </el-menu-item>
          </el-submenu>
        </template>
      </template>
    </el-menu>
    <div class="admin">
      <el-tooltip content="退出登录" placement="bottom" effect="light">
        <i @click="logout" class="iconfont icon-tuichu"></i>
      </el-tooltip>
      <el-tooltip content="主页" placement="bottom" effect="light">
        <i @click="goHome" class="iconfont icon-zhuye"></i>
      </el-tooltip>
      <span class="line"></span>
      <el-tooltip
        :content="`欢迎您，${roleName}`"
        placement="bottom"
        effect="light"
      >
        <span class="admin-name">{{roleName}}</span>
      </el-tooltip>
      <el-avatar class="admin-img" size="small" :src="circleUrl"></el-avatar>
      <el-tooltip content="帮助" placement="bottom" effect="light">
        <i class="iconfont icon-wenhao"></i>
      </el-tooltip>
      <el-tooltip content="消息" v-if="msgVisible" placement="bottom" effect="light">
        <i class="iconfont icon-lingdang"></i>
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
    },
    goHome() {
      
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
    },
    title: {
      require: true,
      type: String
    },
    msgVisible: {
      type: Boolean,
      default: true
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
    min-width: 350px;
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
      margin: 0 10px;
    }
    .logo-title{
      float: left;
      height: 100%;
      min-width: 300px;
      line-height: 64px;
      font-size: 26px;
      text-align: left;
      padding: 0 30px 0 0;
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
      font-size: 18px;
      &:hover{
        background-color: transparent!important;
      }
      /* &.is-active{
        font-weight: 900;
      } */
    }
    .el-submenu{
      .el-submenu__icon-arrow{
        color: #ffffff;
        display: none;
      }
      /* &.is-active{
        font-weight: 900;
        .el-submenu__title{
          font-weight: 900;
        }
      } */
      .el-submenu__title{
        height: 64px;
        line-height: 64px;
        font-size: 18px;
        border-width: 4px;
        &:hover{
          background-color: transparent!important;
        }
      }
    }
    .icon-bg{
      display: inline-block;
      height: 18px;
      width: 18px;
      margin-right: 8px;
    }
  }
  .admin {
    min-width: 140px;
    line-height: 64px;
    .admin-img {
      margin-top: 19px;
      float: right;
      cursor: pointer;
    }
    .admin-name{
      line-height: 64px;
      float: right;
      color: #ffffff;
      font-size: 18px;
      padding: 0 10px;
    }
    span.line{
      width: 1px;
      height: 24px;
      float: right;
      position: relative;
      top: 20px;
      background: #ffffff;
      margin: 0 16px;
    }
    .iconfont{
      font-size: 24px;
      cursor: pointer;
      color: #ffffff;
      float: right;
      margin-right: 16px;
    }
  }
}
</style>
<style lang="scss">
  .menu-popper{
    background: #2DC2F5;
    .el-menu--popup{
      min-width: 144px;
    }
    .el-menu-item{
      color: #ffffff!important;
      font-size: 16px;
      text-align: center;
      &.is-active{
        background-color: #15BDEA!important;
        font-weight: bold;
      }
      &:hover{
        background-color: #15BDEA!important;
      }
    }
  }
</style>

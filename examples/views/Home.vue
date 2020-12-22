<template>
  <div class="home">
    <main-header
      roleName="测试"
      baseURL="$axios._baseURL"
      :menuList="menuList"
      title="测试测试测试测试测试测试测试测试"
    ></main-header>
    <el-button @click="dialogVisible=true">打开弹窗</el-button>
    <title-bar-line>wrqwtq</title-bar-line>
    <el-dialog-self
      title="提示"
      :visible.sync="dialogVisible"
    >
      <span v-bind:style="menuList[0].iconStyle">这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog-self>
    <el-button @click="drawerVisible=true">打开抽屉</el-button>
    <el-drawer-self title="数据预览" :visible.sync="drawerVisible"></el-drawer-self>
    <!-- <el-drawer-self small title="数据预览" :visible.sync="drawerVisible"></el-drawer-self> -->
    <div class="table-content" style="height:700px;">
      <el-table-ex
        :data="tableData"
        highlight-current-row
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table-ex>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      dialogVisible: false,
      drawerVisible: false,
      menuList: [
        {
          menuTitle: "任务看板",
          menuUrl: "/",
          menuIcon: require("../assets/rwkb.png"),
          sysMenuList: [],
          icon: "el-icon-s-home"
        },
        {
          menuTitle: "任务管理",
          url: null,
          menuIcon: require("../assets/rwgl.png"),
          icon: "el-icon-s-operation",
          sysMenuList: [
            {
              menuTitle: "任务创建",
              url: "/regionSupervise/dutyCreate",
              sysMenuList: [],
              icon: "el-icon-folder-add"
            },
            {
              menuTitle: "任务列表",
              url: "/regionSupervise/checking",
              sysMenuList: [],
              icon: "el-icon-s-marketing"
            },
            {
              menuTitle: "任务归档",
              url: "/regionSupervise/filed",
              sysMenuList: [],
              icon: "el-icon-s-order"
            }
          ]
        },
        {
          menuTitle: "图斑管理",
          url: null,
          menuIcon: require("../assets/tbgl.png"),
          icon: "el-icon-receiving",
          sysMenuList: [
            {
              menuTitle: "图斑复核",
              url: "/regionSupervise/featureCheckAgain",
              sysMenuList: [],
              icon: "el-icon-s-management"
            },
            {
              menuTitle: "图斑审核",
              url: "/regionSupervise/featureCheck",
              sysMenuList: [],
              icon: "el-icon-finished"
            }
          ]
        },
        {
          menuTitle: "设备管理",
          menuIcon: require("../assets/sbgl.png"),
          url: "/regionSupervise/equipManage",
          sysMenuList: [],
          icon: "el-icon-mobile-phone"
        }
      ],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  components: {

  },
  methods: {
    
  },
  mounted() {
  
  },
}
</script>

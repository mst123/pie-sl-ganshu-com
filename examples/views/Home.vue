<template>
  <div class="home">
    <el-button @click="dialogVisible=true">打开</el-button>
    <title-bar-line>wrqwtq</title-bar-line>
    <el-dialog
      title="提示"
      append-to-body
      :visible.sync="dialogVisible"
      width="480px"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      dialogVisible: false
    }
  },
  components: {

  },
  methods: {
    
  },
  mounted() {
    console.log(a);
    
  },
}
</script>

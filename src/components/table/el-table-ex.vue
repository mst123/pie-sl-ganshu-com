<template>
  <div class="self-table-content" ref="table-content">
    <el-table ref="table" v-bind="tableProp" v-on="$listeners" v-if="maxHeight">
      <slot></slot>
    </el-table>
    <slot class="page-control" name="page-control"></slot>
  </div>
</template>

<script>
const eleResizeListen = require("element-resize-detector");
export default {
  name: "ElTableEx",
  inheritAttrs: false,
  data() {
    return {
      maxHeight: 0
    };
  },
  methods: {
    maxHeightReComputed() {
      this.maxHeight =
        this.$refs["table-content"].offsetHeight -
        (this.$slots["page-control"]
          ? this.$slots["page-control"][0].elm.offsetHeight
          : -10) -
        20;
    },
    getTable() {
      return this.$refs["table"];
    }
  },
  mounted() {
    this.maxHeightReComputed();
    const listen = eleResizeListen();
    listen.listenTo(this.$refs["table-content"], () => {
      this.maxHeightReComputed();
    });
  },
  created() {},
  components: {},
  computed: {
    tableProp() {
      return Object.assign(
        {
          size: "small",
          "cell-style": {
            height: "54px"
          },
          "header-row-style": {
            height: "54px",
            color: "#000000",
            "font-size": "14px",
            "font-weight": "900"
          }
        },
        this.$attrs,
        {
          "max-height": this.maxHeight
        }
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.self-table-content {
  width: 100%;
  position: relative;
  .page-control {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  /deep/ .el-table{
    .el-table__header{
      th{
        background-color: #F4F7FD;
      }
    }
  }
}
</style>

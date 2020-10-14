<template>
  <el-drawer
    class="el-drawer-self"
    v-bind="computedProp"
    v-on="$listeners"
  >
    <template v-slot:title>
      <slot name="title"></slot>
    </template>
    <slot></slot>
  </el-drawer>
</template>

<script>
export default {
  name: "ElDrawerSelf",
  inheritAttrs: false,
  data() {
    return {
    }
  },
  components: {
  },
  methods: {
    beforeClose(){
      this.$emit('update:visible', false)
    }
  },
  mounted() {
    
  },
  computed: {
    computedProp(){
      let computedProp = Object.assign(
        {
          'append-to-body': true,
          modal: false,
          size: this.small?"440px":"1200px",
          direction: "rtl",
          'before-close': this.beforeClose
        },
        this.$attrs
      )     
      if(typeof this.$attrs['before-close'] === "function"){
        computedProp['before-close'] = (done)=>{
          this.$attrs['before-close']( this.beforeClose )
        }
      }
      return computedProp
    }
  },
  watch: {
    
  },
  props: {
    small: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.el-drawer-self{
  .el-drawer__header{
    border-bottom: 1px solid #EDF2FB;
    padding:15px 0px;
    margin-bottom: 0;
    span{
      margin-left:15px;
      color:#223556;
      font-weight: bold;
      font-family: WeiRuanYaHei;
    }
  }
  .el-drawer__header::before{
    width: 8px;
    display: inline-block;
    content: "";
    height: 16px;
    margin-right: 8px;
    background: #ffffff;
    border-top: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-left: 4px solid #00B9EF;
  }
  .el-drawer__body{
    padding:0px 19px 19px 19px;
  }
}
</style>

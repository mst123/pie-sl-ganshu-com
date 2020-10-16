<template>
  <el-dialog
    class="el-dialog-self"
    v-bind="computedProp"
    v-on="$listeners"
  > 
    <template v-slot:title>
      <slot name="title"></slot>
    </template>
    <slot></slot>
    <template v-slot:footer>
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: 'ElDialogSelf',
  inheritAttrs: false,
  data () {
    return {
      
    }
  },
  methods: {
    beforeClose(){
      this.$emit('update:visible', false)
    }
  },
  mounted() {
    
  },
  created () {
    
  },
  components: {
    
  },
  computed: {
    computedProp(){
      let computedProp = Object.assign(
        {
          'close-on-click-modal': false,
          'append-to-body': true,
          width: this.small?"480px":"640px",
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
  props: {
    small: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .el-dialog-self{
    /deep/ .el-dialog__title{
      font-size: 16px;
      font-weight: bold;
    }
  }
</style>

<template>
  <p class="title-bar" :style="{ color: color }">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: "TitleBarRound",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  created() {},
  props: {
    color: {
      type: String,
      default: function() {
        return "#000000";
      }
    }
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
p.title-bar {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  padding-left: 10px;
  &:before {
    width: 20px;
    display: inline-block;
    content: "";
    height: 20px;
    position: relative;
    top: 5px;
    margin-right: 15px;
    background: url(../../assets/icons/circle.svg) no-repeat center/contain;
  }
}
</style>

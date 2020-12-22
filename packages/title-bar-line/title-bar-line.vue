<template>
  <p class="title-bar-line" :style="{ color: color }">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: "TitleBarLine",
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
p.title-bar-line {
  height: 34px;
  line-height: 34px;
  font-size: 16px;
  &:before {
    width: 3px;
    display: inline-block;
    content: "";
    height: 18px;
    position: relative;
    top: 3px;
    margin-right: 8px;
    background: #00B9EF;
  }
}
</style>

import MainHeader from './components/header/index.vue'
import TitleBarLine from './components/title-bar/title-bar-line.vue'
import TitleBarRound from './components/title-bar/title-bar-round.vue'
import ElTableEX from './components/table/el-table-ex.vue'
const components = [
  MainHeader,
  TitleBarLine,
  TitleBarRound,
  ElTableEX
]
/**
 * 绑定组件
 * @param Vue
 */
function bindComponents(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
function install(Vue) {
  bindComponents(Vue)
}
export default { 
  install, 
  MainHeader,
  TitleBarLine,
  TitleBarRound,
  ElTableEX
}


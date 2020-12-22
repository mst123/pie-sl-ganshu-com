/*components/index.js*/
import MainHeader from './header'
import TitleBarLine from './title-bar-line'
import TitleBarRound from './title-bar-round'
import ElTableEX from './table'
import ElDrawerSelf from './drawer'
import ElDDialogSelf from './dialog'

export default {
  install(Vue) {
    Vue.use(MainHeader)
    Vue.use(TitleBarLine)
    Vue.use(TitleBarRound)
    Vue.use(ElTableEX)
    Vue.use(ElDrawerSelf)
    Vue.use(ElDDialogSelf)
  }
}
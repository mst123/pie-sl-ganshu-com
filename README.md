# pie-sl-ganshu-com
甘肃省公用组件  

## 总体引入
```
import piesatCom from "pie-sl-ganshu-com";
Vue.use(piesatCom)
```
## 按需引入
```
import { // 文件名引入
  header,
  TitleBarLine,
  TitleBarRound,
  table,
  drawer,
  dialog
} from "piesatCom";
Vue.use(header)
Vue.use(TitleBarLine)
Vue.use(TitleBarRound)
Vue.use(table)
Vue.use(drawer)
Vue.use(dialog)
```
### 实现按需引入需要   
 1. 安装`babel-plugin-import`
 2. 配置babel.config.js
  ```
    "plugins": [
      [
      "import",
      {
        "libraryName": "pie-sl-ganshu-com",
        "camel2DashComponentName": true, // 打开驼峰转连字符
        "camel2UnderlineComponentName": false,
        "style": (name) =>{
          const cssName = name.split('/')[2];
          return `pie-sl-ganshu-com/lib/style/${cssName}.css`
        }
      }
    ]
    ]
  ```
### 使用方法
```
在html 使用短横线连接
MainHeader
TitleBarLine
TitleBarRound
ElTableEX
ElDrawerSelf
ElDDialogSelf
```
## MainHeader

Props

```
		menuList: { // 菜单
      require: true,
      type: Array
    },
    baseURL: { // 后台ip
      require: true,
      type: String
    },
    roleName: { // 用户名
      require: true,
      type: String
    },
    title: { // 项目名称
      require: true,
      type: String
    },
    msgVisible: { // 是否显示信息图标
      type: Boolean,
      default: true
    },
    homeURL: { // 主页地址
      type: String
    },
    exitHome: { // 退出ip
      type: String
    }, 
    version: {
      //版本号
      type: String,
      default: "v.1.1.0"
    },
    documentUrl: {
      // 用户手册
      type: String
    }
```

## TitleBarLine

```
<title-bar-line color="red">标题</title-bar-line>
```

## TitleBarRound

```
<title-bar-round>标题</title-bar-round>
```

## ElTableEX



## ElDrawerSelf

## ElDialogSelf


// 导入组件，组件必须声明 name
import vDrawer from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
vDrawer.install = function (Vue) {
  Vue.component(vDrawer.name, vDrawer)
}

// 默认导出组件
export default vDrawer

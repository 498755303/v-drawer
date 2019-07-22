# vue-drawer

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```


### 抽屉组件
- Attributes

| 参数 | 类型 | 是否必须 | 说明  | 默认值  |
| --------  | ----- | --- | --- | --- |
| value | Boolean | 是 | 抽屉是否显示，可使用 v-model 双向绑定数据  | false |
| title | String | 否 | 标题  | - |
| width | String | 否 | 宽度  | 260px |
| modal | Boolean | 否 | 是否需要遮罩层  | false |
| modalStyle | Object,String | 否 | 遮罩层样式 | - |
| placement | String | 否 | 抽屉的方向，可选值为 left 或 right  | right |
| closable | Boolean | 否 | 是否显示右上角的关闭按钮  | false |
| fullscreen | Boolean | 否 | 是否全屏 | false |
| drawerClass | String | 否 | 外层类名 | - |
| styles | Object | 否 | 内容的样式 | - |
| center | Boolean | 否 | 顶部是否居中 | false |
| lockScroll | Boolean | 否 | 是否在drawer出现时将 body 滚动锁定 | false |
| maskClosable | Boolean | 否 | 是否允许点击遮罩区域关闭 | true |
| outClosable | Boolean | 否 | 是否允许点击其他区域关闭 | true |
| beforeClose | function(done),done 用于关闭  | 否 | 关闭之前回调  | false |
| inner | Boolean | 否 | 是否在某个盒子内部使用,外层盒子需要增加属性position:relative | false |


- Slot

| 参数 | 说明 |
| -------- | ----- |
| header | 自定义标题栏 |


- Events

| 参数 | 说明 | 回调参数 |
| -------- | ----- | ------ |
| input | 关闭处理,必传 | false |
| close | 关闭的回调	 | - |
| onVisibleChange | 显示和关闭切换回调	 | true显示false关闭 |
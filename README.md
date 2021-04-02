# 基本介绍



+ 做什么？

```
Vue-从0到1搭建UI组件库
```

+ 哪些内容？

```
封装常见的功能性组件（Button、Modal、Form相关）
```

+ 涉及知识点

```js
vue基础语法
组件基本语法
组件通讯(sync,provide,inject)
插槽的使用
props校验
过渡与动画处理
计算属性与监听属性
v-model语法糖
vue插件机制
npm发布
```


```js
掌握组件封装的语法和技巧
学会造轮子，了解element-ui组件库的实现原理
搭建和积累自己的组件库。
```



## 效果演示

+ 初始化vue项目

```
vue create demo
```

+ 安装组件库

```js

```

+ 全局导入

```js
import XyUI from 'xy-ui'
import 'xy-ui/lib/xy-ui.css'

Vue.use(XyUI)
```

+ 使用组件

```html
<template>
  <div id="app">
    <xy-button type="success" @click="visible=true">显示登录框</xy-button>
    <xy-dialog title="用户登录" :visible.sync="visible" width="30%">
      <xy-form :model="model" label-width="80px">
        <xy-form-item label="用户名">
          <xy-input v-model="model.username" placeholder="请输入用户名" clearable></xy-input>
        </xy-form-item>
        <xy-form-item label="用户密码">
          <xy-input v-model="model.password" placeholder="请输入用户密码" show-password></xy-input>
        </xy-form-item>
        <xy-form-item label="即时配送">
          <xy-switch v-model="model.soon" active-color="green" inactive-color="red"></xy-switch>
        </xy-form-item>
        <xy-form-item label="爱好">
          <xy-checkbox-group v-model="model.hobby">
            <xy-checkbox label="篮球"></xy-checkbox>
            <xy-checkbox label="足球"></xy-checkbox>
            <xy-checkbox label="乒乓球"></xy-checkbox>
          </xy-checkbox-group>
        </xy-form-item>
        <xy-form-item label="性别">
          <xy-radio-group v-model="model.gender">
            <xy-radio label="1">男</xy-radio>
            <xy-radio label="0">女</xy-radio>
          </xy-radio-group>
        </xy-form-item>
      </xy-form>
      <template v-slot:footer>
        <xy-button type="primary" @click="login">登录</xy-button>
        <xy-button @click="visible=false">取消</xy-button>
      </template>
    </xy-dialog>
  </div>
</template>
```




## button组件


### 参数支持

| 参数名   | 参数描述                                              | 参数类型 | 默认值  |
| -------- | ----------------------------------------------------- | -------- | ------- |
| type     | 按钮类型(primary / success / warning / danger / info) | string   | default |
| plain    | 是否是朴素按钮                                        | boolean  | false   |
| round    | 是否是圆角按钮                                        | boolean  | false   |
| circle   | 是否是圆形按钮                                        | boolean  | false   |
| disabled | 是否禁用按钮                                          | boolean  | false   |
| icon     | 图标类名                                              | string   | 无      |

### 事件支持

| 事件名 | 事件描述 |
| ------ | -------- |
| click  | 点击事件 |



### click事件支持

结构

```html
@click="handleClick"
```

## dialog组件

### 参数支持

| 参数名  | 参数描述                         | 参数类型 | 默认值 |
| ------- | -------------------------------- | -------- | ------ |
| title   | 对话框标题                       | string   | 提示   |
| width   | 宽度                             | string   | 50%    |
| top     | 与顶部的距离                     | string   | 15vh   |
| visible | 是否显示dialog（支持sync修饰符） | boolean  | false  |

### 事件支持

| 事件名 | 事件描述         |
| ------ | ---------------- |
| opened | 模态框显示的事件 |
| closed | 模态框关闭的事件 |

### 插槽说明

| 插槽名称 | 插槽描述           |
| -------- | ------------------ |
| default  | dialog的内容       |
| title    | dialog的标题       |
| footer   | dialog的底部操作区 |







## input组件

### 参数支持

| 参数名称      | 参数描述                  | 参数类型 | 默认值 |
| ------------- | ------------------------- | -------- | ------ |
| placeholder   | 占位符                    | string   | 无     |
| type          | 文本框类型(text/password) | string   | text   |
| disabled      | 禁用                      | boolean  | false  |
| clearable     | 是否显示清空按钮          | boolean  | false  |
| show-password | 是否显示密码切换按钮      | boolean  | false  |
| name          | name属性                  | string   | 无     |



### 事件支持

| 事件名称 | 事件描述       |
| -------- | -------------- |
| blur     | 失去焦点事件   |
| change   | 内容改变事件   |
| focus    | 获取的焦点事件 |






## switch组件

### 参数支持

| 参数名称      | 参数描述             | 参数类型 | 默认值 |
| ------------- | -------------------- | -------- | ------ |
| v-model       | 双向绑定             | 布尔类型 | false  |
| name          | name属性             | string   | text   |
| activeColor   | 自定义的激活的颜色   | string   |        |
| inactiveColor | 自定义的不激活的颜色 | string   |        |

### 事件支持

| 事件名称 | 事件描述           |
| -------- | ------------------ |
| change   | change时触发的事件 |




## radio组件


```js
radio的基本使用
```

### 参数支持

| 参数名称 | 参数描述        | 参数类型            | 默认值 |
| -------- | --------------- | ------------------- | ------ |
| v-model  | 双向绑定        | 布尔类型            | false  |
| label    | 单选框的value值 | string，num,boolean | ''     |
| name     | name属性        | string              |        |






## checkbox组件

### 参数支持

| 参数名称 | 参数描述        | 参数类型            | 默认值 |
| -------- | --------------- | ------------------- | ------ |
| v-model  | 双向绑定        | 布尔类型            | false  |
| label    | 单选框的value值 | string | ''     |
| name     | name属性        | string              |   ''     |



## checkbox-group组件




## form组件



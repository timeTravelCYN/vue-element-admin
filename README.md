# Vue element admin 

引子:

最近在思考着去完善一套 admin 后台集成方案。

此 md 旨在记录过程中的坑
## SVG
需要新增 `svg-sprite-loader` 并且设置 `webpack.base.conf.js` 文件，此处遇到了无法解析 `svg` 的情况，详情请见 [使用 svg-sprite-loader 遇到的情况](https://blog.csdn.net/github_35631540/article/details/78818919)

## axios baseURL

可以通过 `config` 中的 `dev || prod` 文件设置变量，如下
```js
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
})
```

## 组件 name 属性

为组件设置 `name` 属性后，可以允许组件模板递归地调用自身

## mixin

之前从来没有用过mixin,后续需要补充下。

## 实现过程中的感悟

* `Login` 页不必多说， 他是独立于落地之外的，所以按照 UI 图来做就可以。
* 在这里我想多说一些关于落地页的，此项目是包装了一个通用的 `Layout` 页面，当做一级路由，其余的全部放到二级路由里面去。
所以就要提前划分好结构，比如左侧的导航栏，上侧的面包屑导航，还有个人信息之类的，然后右下的部分就是二级路由的 `router-view`



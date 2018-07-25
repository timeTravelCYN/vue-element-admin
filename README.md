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


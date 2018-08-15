# webpack v4.16.5
> add by nohi 20180811
> 参考资料: https://webpack.docschina.org/concepts/


## 概念
* 静态模块打包器
* 核心概念: 入口(entry) 输出(output) loader 插件(plugins)


### 入口(entry) 
>入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始，webpack 会找出有哪些模块和 library 是入口起点（直接和间接）依赖的。
默认值是 ./src/index.js ，可以通过webpack.config.js配置一个／多个
```
module.exports = {
  entry: './src/file.js' //单入口
  entry:{
    app: './src/main.js', //app入口
    vendors: './src/vendors.js' //第三方入口
  }
};
```
### 出口(output) 
> output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，主输出文件默认为 ./dist/main.js，其他生成文件的默认输出目录是 ./dist

### loader 
>作为开箱即用的自带特性，webpack 自身只支持 JavaScript。而 loader 能够让 webpack 处理那些非 JavaScript 文件，并且先将它们转换为有效 模块，然后添加到依赖图中，这样就可以提供给应用程序使用

* loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务，插件的范围包括：打包优化、资源管理和注入环境变量。

```
npm install --save-dev css-loader  //使用 loader 告诉 webpack 加载 CSS 文件
npm install --save-dev ts-loader   //将 TypeScript 转为 JavaScript
```
webpack.config.js
```
module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  }
};
```
* 引入模块
   * ES2015 import 语句
   * CommonJS require() 语句
   * AMD define 和 require 语句
   * css/sass/less 文件中的 @import 语句。
   * 样式(url(...))或 HTML 文件(<img src=...>)中的图片链接(image url)
   
   

## 常用plugin
   * npm install --save-dev html-webpack-plugin
   *
   
   
## 常用命令
   * npm config get registry 查看源
   * npm config set registry http://registry.npm.taobao.org 设置npm镜像
# vue-demo
> 参见 https://blog.csdn.net/qq_34914522/article/details/70226524

* 安装模板：有三种
    * 1）simple 最简单的模板只有一个index.html(基本没什么用）
    * 2）webpack 适合比较大型的项目，有语法检测
    * 3）webpack-simple  我就安装这个，刚刚好
    
* 安装
    vue init webpack-simple webpack-simple-demo
    
* install dependencies
  npm install
    
* 运行: npm  run dev 

## webpack vue 多页应用安装
* vue init webpack-simple webpack-vue-demo
* npm install --save-dev html-webpack-plugin
* 修改webpack.config.js
```
var path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

webpackConfig = {
 entry: {
      'index' : './src/pages/main.js'
     ,'main' : './src/pages/main.js'
     ,'helloworld' : './src/pages/helloworld.js'
  },
  output: {
    path: path.resolve(__dirname, './build'),
    // publicPath: '/build/',   // 输出目录，如果指定，url访问的地址需要加上此路径
    filename: "[name].js",
    chunkFilename: "[id].js"
  }
  ...
  ,plugins:[]
}
if (process.env.NODE_ENV === 'production') {
  webpackConfig.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  webpackConfig.plugins = (webpackConfig.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}

for (let key in webpackConfig.entry) {
  webpackConfig.plugins.push(new HtmlWebpackPlugin({
    chunks: [key],
    hash: true,
    minify: {
      caseSensitive: true,
      collapseInlineTagWhitespace: true,
      collapseWhitespace: true,
      removeComments: true
    },
    filename: key + '.html',
    template: './src/pages/' + key + '.html',
    inject: true
  }));
}

module.exports = webpackConfig;
 
```

* npm install

* 运行: npm run dev

* 加入jquery  : npm install jquery --save-dev
* 加入bootstrap: npm install bootstrap --save-dev
    npm install bootstrap-loader --save-dev
   * Module not found: Error: Can’t resolve ‘popper.js’ 问题解决
     npm install popper.js -D
```

在webpack.config中加入下面这段loader代码
{
   test: require.resolve('jquery'),
   use: [{
      loader: 'expose-loader',
      options: 'jQuery'
   },{
      loader: 'expose-loader',
      options: '$'
   }]
}
== 插件方式，main.js不需要import 或者require
plugins: [
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery",
      "window.jQuery": "jquery"
    })
  ]
  
  require('jquery')
  require('jQuery第三方插件')
  
  在 main.js 中，加入如下代码
  import 'jquery'; //jQuery必须要
  import 'bootstrap/dist/css/bootstrap.css'
  
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.min.js'
 
```

* lodash:  npm i  --save-dev lodash

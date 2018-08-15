
# 使用webpack构建本地服务器

* npm install --save-dev webpack-dev-server
```
webpack.config.js
devServer: {
    contentBase: "./dist",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
}

package.json
"scripts": {
    ...
    ,"server": "webpack-dev-server --open"
  }
  
在终端中输入npm run server即可在本地的8080端口查看结果
  
```
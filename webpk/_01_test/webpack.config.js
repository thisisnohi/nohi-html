const webpack = require('webpack');
module.exports = {
    mode: 'development',
    devtool: 'eval-source-map', //生成Source Maps（使调试更容易）
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/dist",//打包后的文件存放的地方
        filename: 'bundle.js'
    }
};
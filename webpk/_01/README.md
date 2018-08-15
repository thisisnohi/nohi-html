

* npm init

* 安装webpack : npm install --save-dev webpack
 
* 新建src public目录

* webpack app/main.js public/bundle.js

* 输入各种东西

* webpack.config.js
```
// webpack.config.js
const webpack = require('webpack');
module.exports = {
    devtool: 'eval-source-map', //生成Source Maps（使调试更容易）
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: 'bundle.js'
    }
};
```

* 打包 webpack ，会在public下生成bundle.js

优化: 
    package.json
    ```
     "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "webpack"
      },
      
      命令行输入 npm start 即可打包编译
    ```
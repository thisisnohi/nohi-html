
# Loaders
* test：一个用以匹配loaders所处理文件的拓展名的正则表达式（必须）
* loader：loader的名称（必须）
* include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
* query：为loaders提供额外的设置选项（可选）

## Babel

* 作用:
    * 让你能使用最新的JavaScript代码（ES6，ES7...），而不用管新标准是否被当前使用的浏览器完全支持；
    * 让你能使用基于JavaScript进行了拓展的语言，比如React的JSX；

* npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react
  npm一次性安装多个依赖模块，模块之间用空格隔开
  
* npm install --save react react-dom


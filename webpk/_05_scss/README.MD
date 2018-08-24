
# SCSS

*  npm install --save-dev sass-loader //在项目下，运行下列命令行
*  npm install --save-dev node-sass //因为sass-loader依赖于node-sass，所以还要安装node-sass

* css-loader和style-loader也是必须的依赖包
    * css-loader使你能够使用类似@import 和 url(…)的方法实现 require()的功能；
    * style-loader将所有的计算后的样式加入页面中；
    
```
,
{
     test:/\.(sass|scss)$/,
     use:['style-loader','css-loader','sass-loader']
 }

main.js 两种方式引入
 require('./scss/main.scss');
 import sass from './scss/index.scss';
 
```    
    
    
    
    





# CSS

* //安装 npm install --save-dev style-loader css-loader

* 新建 main.css,里面写入css

*　main.js　引用main.css
```
import './main.css';//使用require导入css文件
```

## CSS module
* webpack.config.js　修改配置
```
{
    loader: "css-loader",
    options: {
        modules: true, // 指定启用css modules
        localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
    }
}
```
* css 增加样式
* js 文件
```
import config from './config.json';
return (<div className={main.root}> {config.greetText}</ div> ) ;
```

## CSS预处理器

### 使用PostCSS来为CSS代码自动添加适应不同浏览器的CSS前缀
* 安装 npm install --save-dev postcss-loader autoprefixer
* webpack.config.js修改配置
```
{
    test: /\.css$/,
    use: [
        {
            loader: "style-loader"
        }, {
            loader: "css-loader",
            options: {
                modules: true
            }
        }, {
            loader: "postcss-loader"
        }
    ]
}
```
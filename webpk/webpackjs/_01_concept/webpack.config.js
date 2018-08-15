const path = require('path');

module.exports = {
    mode: 'development', //模式: development, production(默认值) 或 none;
    // entry: './path/to/my/entry/file.js', //单入口(entry)
    entry: {                                //多入口
        app: './src/app.js',
        search: './src/search.js'
    }, //入口(entry)
    output: {     //出口(output)
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js' // filename: '[name].js', 对应多入口的输出, ./dist/app.js ./dist/search.js
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },  //loader
            // { test: /\.css$/, use: 'css-loader' },  // 加载 CSS 文件
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            { test: /\.ts$/, use: 'ts-loader' }     //将 TypeScript 转为 JavaScript
        ]
    },
    plugins: [       //plugins
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        })
    ]
};
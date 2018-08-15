const path = require('path');

module.exports = {
    mode: 'production', //模式: development, production(默认值) 或 none;
    entry: './src/index.js', //入口(entry)
    output: {     //出口(output)
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' }  //loader
        ]
    },
    plugins: [       //plugins
        new HtmlWebpackPlugin({template: './src/app.html'})
    ]
};
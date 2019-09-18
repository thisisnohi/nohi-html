const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
console.info('aaa:' + path.resolve(__dirname, './build'));
webpackConfig = {
  entry: {
      'index' : './src/pages/index.js'
    , 'demo/_01_markdown/markdown' : './src/pages/demo/_01_markdown/markdown.js'
    , 'demo/_02_github/index' : './src/pages/demo/_02_github/index.js'
    , 'demo/index' : './src/pages/demo/index.js'
    // , 'markdown' : './src/pages/markdown.js'
  },
  output: {
    path: path.resolve(__dirname, './build'),
    // publicPath: '/build/',   // 输出目录，如果指定，url访问的地址需要加上此路径
    filename: "[name].js",
    chunkFilename: "[id].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },{
          test: require.resolve('jquery'),
          use: [{
            loader: 'expose-loader',
            options: 'jQuery'
          },{
            loader: 'expose-loader',
            options: '$'
          }]
        }
    ]
  },
  resolve: {
    alias: {
        'src' :  path.resolve(__dirname , '../src')
      , 'vue$': 'vue/dist/vue.esm.js'
      , 'bootstrap$': 'bootstrap/dist/css/bootstrap.css'
      , 'main$': path.resolve(__dirname ,'./src/resources/js/main.js')
      , 'AAA': path.resolve(__dirname ,'./src/resources/js') //以目录方式引入  import aa from 'AAA/a.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
  ,plugins: [
    new webpack.ProvidePlugin({
      "$": "jquery",
      "_": "lodash",
      "jQuery": "jquery",
      "window.jQuery": "jquery",
      "bootstrap": "bootstrap/dist/css/bootstrap.css"
    }),
    new LodashModuleReplacementPlugin,
    new webpack.optimize.UglifyJsPlugin
  ]
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

let webpack = require('webpack')

let path = require('path')

let UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: [ '@babel/polyfill', '../web/typo3conf/ext/shelter/Resources/Private/JavaScript/index.js' ],
  output: {
    path: __dirname,
    filename: '../web/typo3conf/ext/shelter/Resources/Public/JavaScript/index.min.js'
  },
  mode: 'development',
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            require.resolve('@babel/preset-env')
          ],
          plugins: [
            require.resolve('@babel/plugin-proposal-class-properties')
          ]
        }
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules')
    ],
    extensions: [ '.js', '.json', '.jsx' ],
    alias: {
      components: path.resolve(__dirname, '../web/typo3conf/ext/shelter/Resources/Private/JavaScript/components/'),
      jquery: 'jquery/src/jquery'
    }
  },
  performance: {
    hints: false
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  }
}

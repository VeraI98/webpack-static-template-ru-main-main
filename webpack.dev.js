const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: '/' // соответствует output.publicPath на dev
    },
    historyApiFallback: true,
    hot: true,
    port: 8080
  },
  devtool: 'eval-cheap-module-source-map',
  mode: 'development'
});
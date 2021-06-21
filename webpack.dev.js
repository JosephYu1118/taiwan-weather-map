const path = require('path');

const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = (env) => merge(common(env), {
  mode: 'development',
  devtool: 'eval-source-map',
  // 由於 webpack-dev-server 的 bug ，必須加上 target: 'web' 才能開啟 HMR
  target: 'web',
  devServer: {
    port: 9000,
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    hot: true,
    compress: true,
    stats: 'errors-only',
  },
});

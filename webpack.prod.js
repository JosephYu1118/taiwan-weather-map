const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
// 由於 Webpack 5 已內建 Terser webpack plugin，可以不用額外安裝該套件
// eslint-disable-next-line import/no-extraneous-dependencies
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = (env) => merge(common(env), {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerWebpackPlugin(),
      new TerserWebpackPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}`,
    },
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          // default 為 0 ，數字愈高優先度愈高
          priority: 10,
          // async - 只處理 Lazy Loading 的 chunks，例如 import(xxx) 語法載入的模組
          // initial - 只處理同步加載的 chunk，例如 import xxx 語法載入的模組
          // all - 兼容以上兩種方式，通通進行處理
          chunks: 'all',
        },
      },
    },
  },
});

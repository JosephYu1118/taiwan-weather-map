const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotenvWebpack = require('dotenv-webpack');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

const publicPath = process.env.PUBLIC_PATH;

module.exports = (env) => ({
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    publicPath,
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name].[fullhash].js',
    assetModuleFilename: 'static/img/[hash][ext][query]',
    clean: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', 'scss'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          env.production ? {
            loader: MiniCssExtractPlugin.loader,
          } : 'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['postcss-preset-env'],
                ],
              },
            },
          },
          'scoped-css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, 'src/assets/styles/variables.scss'),
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Webpack Practice',
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash].css',
      chunkFilename: 'static/css/[id].[contenthash].css',
    }),
    new DotenvWebpack(),
    new EslintWebpackPlugin(),
  ],
});

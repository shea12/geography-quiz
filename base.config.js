const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/client/index.html',
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
  entry: './src/client/index.jsx',

  module: {
    loaders: [
      { 
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ],
  },

  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV',]),
    HtmlWebpackPluginConfig,
  ],
};
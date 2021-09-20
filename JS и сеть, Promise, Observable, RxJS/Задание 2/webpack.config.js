const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        index: './index.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: true }
            }
          ]
        },
      ]
    },
    devtool: 'inline-source-map',
    devServer: {
         static: './dist'
    },
    plugins: [
      new HtmlWebPackPlugin({
          filename: './index.html',
          template: './index.html',
      }),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
      },
  };

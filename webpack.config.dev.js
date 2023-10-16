const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

var PUBLIC_DIR = path.resolve(__dirname, 'src/frontend/public');
var APP_DIR = path.resolve(__dirname, 'src/frontend/app');

const dotenv = require('dotenv-webpack');
require('dotenv').config();


module.exports = {
  entry: APP_DIR + '/App.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  mode: 'development',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  module: {
    rules: [
        {
            test: /\.(?:js|mjs|cjs|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
        },
      {
        test: /\.css$/,
        use: ['style-loader',
        'css-loader',
        'postcss-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/' 
          }
        }
      }
    ]
  },
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['*','.js','.jsx','.tsx','.ts'],
    fallback: {
      'path': require.resolve('path-browserify'),
      'os': require.resolve('os-browserify/browser'),
      'crypto': require.resolve('crypto-browserify'),
      'stream': require.resolve('stream-browserify'),
      'buffer': require.resolve('buffer/')
    }
  },
  plugins: [
    new dotenv(),
    new HtmlWebpackPlugin({
      template: PUBLIC_DIR +'/index.html',
      favicon: PUBLIC_DIR +'/favicon.ico'
    })
  ],
  devServer: {
    port: parseInt(process.env.PORT) || 9001
  }
};
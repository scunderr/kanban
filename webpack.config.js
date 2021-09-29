const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlagin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const filename = ext => isDev ?  `[name].${ext}` : `[name].[hash].${ext}`;

const optimization = () => {
  const config = {
      splitChunks: {
          chunks: 'all'
      }
  }

  if (isProd) {
      config.minimizer = [
          new OptimizeCssAssetWebpackPlugin(),
          new TerserWebpackPlagin()
      ]
  }

  return config
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill','./index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: filename('js'),
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    // hot: isDev,
    port: 8080,
  },
  optimization: optimization(),
  plugins: [
    new HTMLWebpackPlugin({
        template: './index.html',
        minify: {
          collapseWhitespace: isProd
        }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/note.png'),
          to: path.resolve(__dirname, 'dist'),
        }
      ]
    }),
    new MiniCssExtractPlugin ({
      filename: filename('css')
    })
  ],
  module: {
    rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                '@babel/preset-env'
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties'
              ]
            } 
          }
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"], 
        },
        {
          test: /\.(png|jpg|svg|gif)$/,
          type: 'asset/resource', 
      },
    ], 
  },  
};
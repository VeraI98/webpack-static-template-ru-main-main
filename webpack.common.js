const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash].js',
    clean: true,
    // publicPath можно менять в зависимости от деплоя (см. раздел publicPath ниже)
    publicPath: '/'
  },
  module: {
    rules: [
      // JS
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      // Изображения: small files -> inlined (data URL), большие -> resource file
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024 // inline < 8kb
          }
        },
        generator: {
          filename: 'img/[name].[contenthash][ext]'
        }
      },
      // Шрифты: всегда ресурс-файлы
      {
        test: /\.(woff2?|ttf|eot|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[contenthash][ext]'
        }
      },
      // SCSS/CSS (пример для dev; в проде используйте MiniCssExtractPlugin)
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    })
  ]
};
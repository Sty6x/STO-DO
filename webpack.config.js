const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    taskUI: './src/taskUI.js',
    taskData: './src/taskData.js',
    todayUI: './src/todayUI.js',
    projectUI: './src/projectUI.js',
    projectApp: './src/projectApp.js',
    projectData: './src/projectData.js',
    ToDoLocalStorage: './src/ToDoLocalStorage.js'

  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.html$/i,
      use: [
        {
          loader: 'html-loader'
        }
      ]
    }
    ],

  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Sto-Do',
      template: './src/index.html'
    }),
  ],
  optimization: {
    runtimeChunk: 'single'
  },
}

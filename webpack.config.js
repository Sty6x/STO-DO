const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// var template = require("./file.handlebars");

module.exports = {
    mode: 'development',
    entry: {
        index:'./src/index.js',
        Data:'./src/Data.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Sto-Do',
            template: '!!handlebars-loader!src/index.hbs'
        }),
    ],
    optimization: {
        runtimeChunk: 'single'
    },
}
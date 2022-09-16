const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// var template = require("./file.handlebars");

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        data: './src/data.js',
        taskUi: './src/taskUI.js',
        taskData: './src/taskData.js'
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
        ],

    },
    devtool: 'inline-source-map',
    devServer: {
        static: './src',
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
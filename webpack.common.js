const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const RobotstxtPlugin = require("robotstxt-webpack-plugin");

module.exports = {
    entry:{
        app: './src/app.js'
    },
    output: {
        filename: '[name].bandle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ['@webdiscus/pug-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        //new webpack.ProvidePlugin({
        //    $: 'jquery',
        //    jquery: "jquery",
        //    jQuery: "jquery",
        //    "window.jQuery": "jquery"
        //}),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.pug'
        }),
        new RobotstxtPlugin({})
    ],
    optimization: {
        //splitChunks: {
        //    chunks: 'all'
        //},
        runtimeChunk: 'single',
        moduleIds: 'deterministic'
    }
};

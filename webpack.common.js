const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const I18nPlugin = require('@zainulbr/i18n-webpack-plugin');
const locale = require('./locales/en-ru.json');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const RobotstxtPlugin = require("robotstxt-webpack-plugin");

module.exports = {
    entry:{
        app: './src/app.js'
    },
    output: {
        filename: '[name].bandle.js',
        path: path.resolve(__dirname, 'dist/'),
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
        new webpack.ids.HashedModuleIdsPlugin({
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 20
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.pug'
        }),
        new I18nPlugin(locale, {
            // optionsObj.nested: the default value is
            // false. If set to true, the keys in languageConfig
            // can be nested. This option is interpreted only
            // if languageConfig isn't a function.
            nested: false
        }),
        new RobotstxtPlugin({})
    ],
   optimization: {
        //splitChunks: {
        //    chunks: 'all'
        //},
        runtimeChunk: 'single',
    }
};

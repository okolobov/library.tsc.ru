const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        host: '127.0.0.1',
        port: 8080,
        static: './dist',
        proxy: [
            {
                context: [
                    '/authenticate',
                    '/logout',
                    '/profile',
                    '/registration',
                    '/users/api/v1', 
                    '/catalogue/api/v1'
                ],
                target: 'http://127.0.0.1:3000'
            }
        ],
        historyApiFallback: true
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            API_ENDPOINT_USERS: '/users/api/v1',
            API_ENDPOINT: '/catalogue/api/v1',
        }),
    ]
});

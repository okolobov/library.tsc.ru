const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new webpack.EnvironmentPlugin({
            API_ENDPOINT: '/api/v1',
            API_LF_ENDPOINT: '/lf'
        })
    ]
});

const config = require('./webpack.config.js')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');

config.plugins.push(
    new CopyWebpackPlugin([
        { from: 'src/images', to: 'images' },
    ])
);

config.mode = 'production'

module.exports = config
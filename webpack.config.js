const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        filename: 'bundle.[hash].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            // First Rule
            {
                test: /\.(jsx?)$/,
                resolve: { extensions: ['.js', '.jsx'] },
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            // Second Rule
            { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader' },
        ]
    },
    resolve: {
        alias: {
            "jquery": path.join(__dirname, "./jquery-stub.js"),
            "~": path.join(__dirname + '/src') 
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
        new CopyWebpackPlugin([
            { from: 'node_modules/@atlaskit/css-reset/dist/bundle.css', to: 'css/css-reset.css' },
        ])
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: false,
        headers: {
            'access-control-allow-origin': '*',
            'access-control-allow-methods': '*',
            'access-control-allow-headers': '*'
        }
    }
}
/**
 * @file webpack.config.js
 * @author zhanglei55
 * @date 2017/10/16 00:00:00
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const projectDistDir = path.resolve(__dirname, 'dist');
const projectSrcDir = path.resolve(__dirname, 'src');
const { VueLoaderPlugin } = require('vue-loader')

const webpackConfig = {
    entry: './src/index.js',
    mode: 'none',
    output: {
        filename: '[name].js',
        path: projectDistDir,
        publicPath: './'
    },
    resolve: {
        alias: {
            '@': projectSrcDir
        }
    },
    module: {
        rules: [
            {
                test: /.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /.myless$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    projectSrcDir
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    name: 'imgs/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html'
        })
    ],
    devServer: {
        contentBase: projectSrcDir,
        watchContentBase: false,
        disableHostCheck: true,
        hot: false,
        port: 8001,
        host: '0.0.0.0',
        publicPath: '/'
    }
};

module.exports = webpackConfig;

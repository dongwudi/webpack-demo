const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    entry: {
        index: './src/js/index.js'
    },
    devServer: {
        contentBase: './dist',
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash:6].[ext]',
                            publicPath: './images', //发布目录路径--其实就是打包文件中引用此文件的路径
                            outputPath: './images' //输出目录--相对于打包文件夹目录，当前是相对 dist 文件夹
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash:6].[ext]',
                            publicPath: './fonts', //发布目录路径--其实就是打包文件中引用此文件的路径
                            outputPath: './fonts' //输出目录--相对于打包文件夹目录，当前是相对 dist 文件夹
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options:
                            { 
                                importLoaders: 1
                            }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { 
                            importLoaders: 2,
                            modules: true
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    output: {
        filename: './js/[name].[hash:6].js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })    ]
}
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/js/index.js'
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
            }
        ]
    },
    output: {
        filename: './js/[name].[contenthash:6].js',
        chunkFilename: './js/[name].[contenthash:8].js'
    },
    //代码分割
    optimization: {
        //tree shaking
        usedExports: true,
        // code split
        splitChunks: {
            chunks: 'all', //同步异步都进行分割
            minSize: 30000, //大于30kb才会做代码分割
            maxSize: 0,
            minChunks: 1, //最少引入次数
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10, //优先级--打包到verdors还是default
                },
                //不是node_modules中引入的模块的分割项
                default: {
                    // minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}
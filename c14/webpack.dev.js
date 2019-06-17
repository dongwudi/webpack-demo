const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    devtool: 'cheap-eval-module-source-map',
    devServer: {
        contentBase: './dist',
        open: true
    },
    //tree shaking
    optimization: {
        usedExports: true
    }
}

module.exports = merge(commonConfig,devConfig);
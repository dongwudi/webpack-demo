const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'library.js',
    path: path.resolve(__dirname,'dist'),
    library: 'root', //script标签引入 
    libraryTarget: 'umd' // cmd es amd
  },
  externals: ['lodash']
  // externals: {
  //   "lodash": {
  //     root: '_', //如果我们的库在浏览器中使用，需要提供一个全局的变量‘_’，等价于 var _ = (window._);
  //     commonjs: 'lodash', //如果我们的库运行在Node.js环境中，const lodash = require('lodash')
  //     commonjs2: 'lodash'
  //   }
  // } //忽略打包
}
# webpack demo

## 当前环境
```
$ node -v
v10.15.3
$ npm -v
6.4.1
$ npx webpack-cli -v
3.3.4
$ npx webpack -v
4.34.0
```
## demo查看
```
$ cd c1
$ npm i
$ npm run dev
```

## c1: entry file
单文件入口 [源码](https://github.com/dongwudi/webpack-demo/tree/master/c1)

## c2: multiple entry files
多文件入口 [源码](https://github.com/dongwudi/webpack-demo/tree/master/c2)

## c3: file-loader
处理文件（图片，字体图标）[源码](https://github.com/dongwudi/webpack-demo/tree/master/c3)

## c4: url-loader
和`file-loader`相似 [源码](https://github.com/dongwudi/webpack-demo/tree/master/c4)

## c5: css-loader
`css`处理 [源码](https://github.com/dongwudi/webpack-demo/tree/master/c5)
## c6: sass-loader
`scss`处理 [源码](https://github.com/dongwudi/webpack-demo/tree/master/c6)

## c7: postcss-loader
`css前缀兼容` [源码](https://github.com/dongwudi/webpack-demo/tree/master/c7)

## c8 html-webpack-plugin
`html-webpack-plugin`打包目录自动生成html文件 [源码](https://github.com/dongwudi/webpack-demo/tree/master/c8)

## c9 clean-webpack-plugin
`clean-webpack-plugin`打包时自动清理打包目录 [源码](https://github.com/dongwudi/webpack-demo/tree/master/c9)

## c10 sourcemap
调试代码。开发环境:`cheap-eval-source-map`,生产环境:不使用或`source-map` [源码](https://github.com/dongwudi/webpack-demo/tree/master/c10)

## c11 devServer
启动本地服务器`webpack-dev-server` [源码](https://github.com/dongwudi/webpack-demo/tree/master/c11)

## c12 babal-loader
`babel`处理es6 [源码](https://github.com/dongwudi/webpack-demo/tree/master/c12)

## c13 tree shaking
用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。它依赖于 ES2015 模块系统中的静态结构特性，例如 import 和 export; [源码](https://github.com/dongwudi/webpack-demo/tree/master/c13)

## c14 webpack-merge
分离开发，生产环境webpack配置代码。[源码](https://github.com/dongwudi/webpack-demo/tree/master/c14)

## c15 code split
代码分割两种方式：
* 同步代码：`webpack`配置`optimization`
* 异步代码：安装`@babel/plugin-syntax-dynamic-import`并在`.babelrc`的`plugins`配置 ,配置`optimization`
[源码](https://github.com/dongwudi/webpack-demo/tree/master/c15)


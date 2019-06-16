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
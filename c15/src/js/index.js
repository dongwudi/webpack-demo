import { add } from './math';
import _ from 'lodash';
add(1,8);

console.log(_.join(['a','b'],"**"))

//分析异步代码需要 @babel/plugin-syntax-dynamic-import
// function getComponent() {
//     return import(/* webpackChunkName:"lodash" */ 'lodash').then(({default: _}) => {
//         var ele = document.createElement('div');
//         ele.innerHTML = _.join(['hello','world'],'_');
//         return ele;
//     })
// }

// getComponent().then(ele => {
//     document.body.appendChild(ele)
// })
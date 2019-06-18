import { add } from './math';

//分析异步代码需要 @babel/plugin-syntax-dynamic-import
function getComponent() {
    return import(/* webpackChunkName:"lodash" */ 'lodash').then(({default: _}) => {
        var ele = document.createElement('div');
        ele.innerHTML = _.join(['hello','world'],'_');
        return ele;
    })
}

document.addEventListener('click', () => {
  getComponent().then(ele => {
    document.body.appendChild(ele)
  })
})

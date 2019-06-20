import '../css/index.css';
import '../css/style.css';
import _ from 'lodash';
import $ from 'jquery';

document.addEventListener('click', () => {
  import(/* webpackPrefetch: true*/ './math').then(({default: add}) => {
    add(1,2)
  })
})

const dom = $('<div>');
dom.html(_.join(['hello','world4'],"_"));
$('body').append(dom);

if('serviceWorker' in navigator){
  window.addEventListener('load',()=> {
    navigator.serviceWorker.register('./service-worker.js').then( registration => {
      console.log('service-worker registed')
    }).catch(err => console.log(err))
  })
}
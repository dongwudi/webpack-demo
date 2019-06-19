import '../css/index.css';
import '../css/style.css';
import _ from 'lodash';
import $ from 'jquery';
import { handle } from './jqhandle';

handle();

document.addEventListener('click', () => {
  import(/* webpackPrefetch: true*/ './math').then(({default: add}) => {
    add(1,2)
  })
})

const dom = $('<div>');
dom.html(_.join(['hello','world4'],"_"));
$('body').append(dom);


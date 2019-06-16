// import img from './logo@2x.png';
const img = require('../images/logo@2x.png');
import '../fonts/iconfont.css';
import '../css/index.scss';

console.log(img);

var root = document.getElementById('root');
var img_ = new Image();
img_.src = img;
img_.classList.add('img');
img_.onload = function() {
    root.appendChild(img_);
}
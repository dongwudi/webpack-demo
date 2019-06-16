// import img from './logo@2x.png';
const img = require('../images/logo@2x.png');
import '../fonts/iconfont.css';
import style from  '../css/index.scss';
console.log(style)

console.log(img);

var root = document.getElementById('root');
var img_ = new Image();
img_.src = img;
img_.classList.add(style.img);
img_.onload = function() {
    root.appendChild(img_);
}
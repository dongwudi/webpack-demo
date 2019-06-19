import '../css/index.css';
import '../css/style.css';

document.addEventListener('click', () => {
  import(/* webpackPrefetch: true*/ './math').then(({default: add}) => {
    add(1,2)
  })
})
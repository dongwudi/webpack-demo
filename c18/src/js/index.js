// document.addEventListener('click', () => {
//   import(/* webpackPrefetch: true*/ './math').then(({default: add}) => {
//     add(1,2)
//   })
// })

document.addEventListener('click', () => {
  import(/* webpackPreload: true*/ './math').then(({default: add}) => {
    add(1,2)
  })
})
// console.log(Promise.__proto__);
// console.log(Object.getOwnPropertyNames(Promise));
// console.log(Promise.resolve(1).then((data) => {
//     console.log(data);
// }))
// /*
// [
//   'length',     'name',
//   'prototype',  'all',
//   'allSettled', 'any',
//   'race',       'resolve',
//   'reject'
// ]
// pending fulfied reject 
// 变成私有就是 不可枚举
// */

Promise.resolve(2).then((a) => {
  console.log(a);
})
console.log(1);

setTimeout(() => {
  console.log(1);
  Promise.resolve(2).then((a) => {
    console.log(a);
  })
  setTimeout(() => {
    Promise.resolve(4).then((a) => {
      console.log(a);
    })
  },1)
},1)

setTimeout(() => {
  console.log(3);
},2)
// import {foo} from './a.mjs';
// export function bar() {
//   console.log('bar');uuuuuuuuuuuuuu
//   if (Math.random() > 0.5) {
//     foo();
//   }
// }

var a = 10;
export default a;

setTimeout(() => {
    a = 100;
}, 100)

export function say() {
    console.log(this);
}
// count = 3;
// console.log(count);

// setTimeout(() => {
//     count = 4;
//     console.log(4);
// }, 2000);

// export { count };
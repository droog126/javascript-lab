// const data = 2;
// {
//     const data = 3;
//     console.log(data)
// }


// var i = 100;
// setTimeout(() => {
//     i=10
// }, 10);

// while (i == 100) {
//     console.log('fuck');
// }

// var a = [12, 12, 122, 21, 212, 12, 12, 12, 12, 1, 5];
// var [b,] = a;
// console.log(b);

// console.log(typeof {})

// var a = 0;
// {
//     let a = 2;
// }
// console.log(a);


// if ({}) {
//     console.log('ok')
// }

// console.log(Promise.__proto__);
// console.log(Object.getOwnPropertyNames(Promise));
// console.log(Promise.resolve(1).then((data) => {
//     console.log(data);
// }))

// console.log(Map.prototype.getOwnPropertyNames())
// console.log(Map.__proto__);
// console.log(Map.getOwnPropertyNames())
// Object.hasOwnProperty()


// var a = {
    
// }

// const { b } = a;
// console.log(b);


// new Promise((rsv, rjc) => {
//     rsv(1);
//     console.log('.');
// }).then(() => {
//     console.log('22');
// })




// function bar() {
//     a = 1;
//     console.log(a);
// }
// bar();


// console.log(foo); //函数
// function foo(){
//     console.log("foo");
// }
// var foo = 1;

// var arr = [1, 2, 3, 4, 5, 6, 7];
// arr.forEach((val, index, arr) => {
//     console.log(val, index, arr);
//     arr[index] = 1;
// })
// console.log(arr);


// arr.map((val, index, arr) => {
//     arr[index] = 2;
// })
// console.log(arr);


// setTimeout(() => {
//     console.log('hi');
//     Promise.resolve().then(() => {
//         console.log(6);
//     })
// });

// process.nextTick(() => {
//     console.log(1);
//     Promise.resolve().then(() => {
//         console.log(5);
//     })
// });

// setImmediate(() => {
//     console.log(3)
// })

// console.log(2);


// var arr = [1, 2, 3, 4, 5, 6];
// var r=arr.reduce((prv, cur, index, arr) => {
//     console.log(prv, cur, index, arr);
//     return cur;
// });
// console.log(r);


// function test() {
//     let a = b = 0;

// }
// test();
// console.log(b);
// console.log(a);


// Array.prototype._map = function (fn, _this=this) {
    
//     var r = this.reduce((prv, cur, index, arr) => {
//         prv.push(fn.call(_this, cur, index, arr));
//         return prv;
//     }, []) 
    
// }
// var arr = [1, 2, 3, 4, 5, 6];
// var r=arr._map((cur, value, arr) => {
//     return cur*2
// })
// console.log(r);


// function test() {
//     let test1 = function () {
        
//     }
// }

// test();


// function* genFunc() {
//     console.log('hello');
//     yield;
//     console.log('word');
// }

// var func = genFunc();
// console.log(func);
// func.next();
// func.next();

// function* callee() {
//     console.log('callee: ' + (yield));
// }
// function* caller() {
//     while (true) {
//         yield* callee();
//     }
// }

//  const callerObj = caller();

// callerObj.next();
// callerObj.next();
// callerObj.next();
// callerObj.next();
// callerObj.next();


// Promise.resolve(1)
//     .then(() => {
//         return 2
//     })
//     .then(console.log)
// // 1


// Promise.resolve('resolve')
//   .finally(() => {
//     console.log('this is finally')
//     return 'finally value'
//   })
//   .then(res => {
//     console.log('finally后面的then函数, res的值为：', res)
//   })
// // this is finally


// function sleep (n) {
//     return new Promise((resolve, reject) => {
//         console.log(n)
//         Math.random() > 0.5 ? reject(n) : resolve(n)
//     }, n % 2 === 0 ? 1000 * n : 1000)
// }
// Promise.all([sleep(1), sleep(2), sleep(3)])
//   .then(res => console.log('all res: ', res))
//   .catch(err => console.log('all err：', err))
// Promise.race([sleep(1), sleep(2), sleep(3)])
//   .then(res => console.log('race res: ', res))
//   .catch(err => console.log('race err：', err))

// var a = 2;
// function test() {
//   console.log(a);
//   let a = 3;
  
// }
// if (true) {
//   console.log(a);
//   var a = 10;
// }
// test();

// if (true) {
  
//   if (true) {
//     let a = 5;
//   }

//   console.log(a);
// }



// var len = 10;
// for (let i = 0; i < len; i++){                                                                                                                                                                                
//   for (let i = 0; i < len; i++){
//     console.log(i);
//   }
// }


// var length = 10
// function fn() { return this.length + 1 }
// var obj = { length: 5, test1: function () { return fn() } }
// obj.test2 = fn
// console.log(obj.test1())


// var func1 = x => x;
// var func2 = x => { x };
// var func3 = x => ({ x });
// console.log(func1(1))
// console.log(func2(1))  


// console.log('begin')
// setTimeout(() => {
//     console.log('setTimeout 1')

//     Promise.resolve().then(() => {
//         console.log('promise 1')
//         setTimeout(() => { console.log('setTimeout 2 between promise1&2') })
//     }).then(() => { console.log('promise 2') })
    
// }, 0)
// console.log('end')
   

// function single() {
    
//     var name = null;
//     return function (par) {
//         if (name == null) {
//             name = par;
//         }
//         return name;
//     }

// }
// const control = single();
// var name3 = control("hi");
// var name2 = control('nihao');

// console.log(name3, name2);


// function Foo() {
//     getName = function () {
//         console.log(1);
//     };
//     return this;
// };
// Foo.getName = function () {
//     console.log(2);
// };
// Foo.prototype.getName = function () {
//     console.log(3);
// };
// var getName = function () {
//     console.log(4);
// };
// function getName() {
//     console.log(5);
// };


// Foo.getName(); //2

// getName();  //5
// Foo().getName();  //3
// getName();  //5
// new Foo.getName(); // 2
// new Foo().getName(); // 3
// new new Foo().getName();  // 3


// test();
// function test() {
//     console.log(1);
// }

// var test = function () {
//     console.log(33);
// }

// test();


// globalThis.a = 10;


// console.log('print #1: ', typeof a)  //function
// var a = 1
// console.log('print #2: ', typeof a)
// var a = '1'
// console.log('print #3: ', typeof a)
// function a() {
//     console.log('print #5: ', typeof a)
// }
// console.log('print #4: ', typeof a)
// a()


// function get() {  // 请补全函数参数和实现逻辑 }
//     const obj = {
//         selector: { to: { toutiao: 'FE coder' } },
//         target: [1, 2, { name: 'byted' }]
//     };
// 运行代码get(obj, 'selector.to.toutiao', 'target[0]', 'target[2].name')
// 输出结果：// ['FE coder', 1, 'byted']

// const PENDING = "PENDING",
//     FULFILLED = "FULFILLED",
//     REJECTED = "REJECTED";

// class mypromise{
//     constructor(exec) {
//         this.state = PENDING;
//         this.val = undefined;
//         this.reason = undefined;
//         this.onRsvCallbacks = [];
//         this.onRjcCallbacks = [];
//         const rsv = function (value) {
//             if (this.state == PENDING) {
//                 this.state = FULFILLED;
//                 this.val = value;
//                 this.onRsvCallbacks.forEach(func => {
//                     func(this.val);
//                 });
//             }
//         }
//         const rjc = function (reason) {
//             if ( this.status === PENDING ) {
//                 this.status = REJECTED;
//                 this.reason = reason;
        
//                 this.onRejectedCallbacks.forEach(fn => fn());
//               }
//         }
//         try {
//             exec(rsv, rjc);
//         }
//         catch(err){
//             rjc(err);
//         }
//     }
// }

// class A {}
// class B extends A {}
// const a = new A()
// const b = new B()
// console.log(a.__proto__,b.__proto__,B.__proto__,B.prototype.__proto__,b.__proto__.__proto__)

function run(cur_arr,target){

    var len=cur_arr.length;
    for(var i=0;i<target.length;i++){
        var num=target[i];
        for(var j=0;j<len-1;j++){
            if( num>=cur_arr[j] && num<=cur_arr[j+1] ){
                cur_arr.splice(j, 0, num);
                var len=cur_arr.length;
                break;
            }
            
        }
    }
    return cur_arr;
}

var arr1=[1,2,2,3,4,7,9,10];
var arr2=[2,3,4,7,8];
console.log(run(arr1,arr2));

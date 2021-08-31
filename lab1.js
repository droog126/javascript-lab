function carling(fn,...args){ 
    let length = fn.length  //判断当前传入函数的长度
    console.log(length)
    return function (...nextArgs){
      console.log("args", args)
      console.log("nextArgs",nextArgs)
      var allArgs = [...args, ...nextArgs]
      console.log('allArgs',allArgs)
      if(nextArgs.length == 0){  // 当没有参数的时候我们执行传进来的函数
        return fn.apply(fn,allArgs)
      }
      // if(allArgs.length>=length)
      // console.log(allArgs)
      return carling(fn,...allArgs)
    }
    // Array.prototype.slice.apply(arguments) 返回一个新的数组，一个简单数组拷贝
  }

function sum(...args){
    let res = 0;
    for(let i of arguments){
        res = i+ res
    }
    return res
}

let currySum1 = carling(sum);
let abc = currySum1(1,2,3,4,5)(6)(7)(8)(9)(10)()
//如果没有参数就返回数字

//否者就返回函数
console.log(abc)


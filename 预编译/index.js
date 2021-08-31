
//创建ao
//形参 实参  函数 预编译


//预编译后 就js逐行执行
//js的解释执行  js的逐行执行 

//执行上下文

function fn(a, b){
    console.log(a);
    var a = 123;
    console.log(a);
    console.log(c);
    function a() {
        
    }
    if (false) {
        var d = 678;
    }
    console.log(d);
    console.log(b);
    var b = function () {
        
    }
    console.log(b);
    function c(){
        
    }
    console.log(c);

}
fn(1,2)
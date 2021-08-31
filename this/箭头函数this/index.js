//箭头函数  this 固定化 所以不能做构造函数
var x = 11;
var obj = {
    x: 22,
    say: () => {
        console.log(this.x);
    }
}
//果然是11
//var obj={}
//obj.say=()=>{ console.log(this.x) }
obj.say();


var obj = {
    birth: 1900,
    getAge: function () {
        var b = this.birth;
        console.log(b);
         
        var fn = () => new Date().getFullYear() - this.birth;
        return fn();
    }
}
obj.getAge();//有正确单号

// console.log(Date.now())
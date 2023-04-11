const namea = '张三'
function hello(){
    console.log("我的名字时"+namea);
}
const age = 20;
module.exports.username= 'zs';
module.exports.sayHello = function(){
    console.log('Hello');
}
module.exports.age = age;
// 使用require（）方法导入模块时，倒入的结果，永远module.exports指向的对象为准
// module.exports 与 export 指向同一个对象 如果两者指向的对象不同时以module.exports 为准
module.exports = { // 对象内变量赋值用分号不是等号
    nickname : 'Bob',
    sayHi(){
        console.log('Hi');
    }
}
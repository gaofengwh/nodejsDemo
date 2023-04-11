// https://www.runoob.com/js/js-promise.html

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("First");
        // resolve(); //调用下一个Promise对象，可传参
    }, 1000);
}).then(function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Second");
            resolve();
        }, 4000);
    });
}).then(function () {
    setTimeout(function () {
        console.log("Third");
    }, 3000);
});
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("First");
        // resolve(); //调用then函数
        // reject(); //调用catch函数
    }, 1000);
}).then(function () { 
    // 没有resolve就不会执行
        setTimeout(function () {
            console.log("Third");
        }, 3000);
}).finally(function () { 
    // 没有resolve或reject执行也是不会执行finally
    console.log("End");
});

function print(delay,message){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}
async function asyncFun(){
    await print(1000,"First");
    await print(4000,"Second");
    await print(3000,"Third");
}
asyncFun() // 共需要8s
function syncFun(){
print(1000,"First-A");
print(4000,"Second-A");
print(3000,"Third-A");
}
syncFun()//共需要4s
// print(1000,"f")

// print(1000,"First").then(()=>{
//     return print(2000,"Second");
// }).then(()=>{
//  print(3000,"Third");
// })

// ((function() { // 异步执行，各任务同时开始
//     console.log("auto run");
//     setTimeout(function(){    
//         console.log("auto run1");
//     },1000);
//     setTimeout(function(){
//         console.log("auto run2");
//     },4000);
//     setTimeout(function(){
//         console.log("auto run3");
//     },3000);
// })())
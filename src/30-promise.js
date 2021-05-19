var promise = new Promise(function (resolve, reject) {
    // 异步处理
    setTimeout(function () {
        resolve('success response');
    }, 250);
    // 处理结束后、调用resolve 或 reject
});
var sendMsg = new Promise(function (resolve, reject) {
    // 异步处理
    code = 200
    setTimeout(function () {
        if (code ==200) {
            resolve('');
        } else {
            reject('sendmsg reject');
        }
        
    }, 250);
    // 处理结束后、调用resolve 或 reject
});
promise.then(sr => {
    console.log(sr);
    return sendMsg;
}).then()
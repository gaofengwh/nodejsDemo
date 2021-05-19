// 引入http库，如果url中协议是https则需要使用https库
const http = require('http')
let url1 = 'http://web.itheima.com/teacher.html'
// 创建请求对象，未发送
let req = http.request(url1,res=>{
    // res是个对象打印获取不到内容，异步响应
    // console.log(res)
    // 内容缓存数组保存数据
    let chunks = []
    // 监听data事件，拼接内容
    // res.on('data',chunk=>{
    //     chunks.push(chunk)
    // }) 简写如下
    res.on('data',c=> chunks.push(c))
    // 监听end事件，获取数据完毕时触发
    res.on('end',()=>{
        // 拼接所有chunk，并转换为字符串 ==> html的字符串
        console.log(Buffer.concat(chunks).toString('utf-8'))
    })
})
// 发送请求
req.end()
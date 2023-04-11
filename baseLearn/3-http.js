// 导入http模块
const http = require('http')
// 创建网页服务
const server = http.createServer()
// 影响操作，req请求包的内容，res返回的内容一般用于浏览器渲染
server.on('request',function(req,res){
    console.log('web server');
    // const str = `url is ${req.url}, method is ${req.method}`
    // const str = `您请求的URL地址是${req.url} 方法是${req.method}`
    let content = '<h2>404 not found</h2>'
    // 判断请求url和参数
    if (req.url === '/' || req.url ==='/index.html') {
        content = '<h2>home</h2>'
    }else if (req.url==='/about.html') {
        content = '<h2>about</h2>'
    }
    // 设置响应头
    res.setHeader('Content-Type','text/html; charset=utf-8')
    // console.(str);
    // 响应用户请求，处理好后开始返回给客户端
    res.end(content);
})
// 开始监听服务，端口和启动服务时的响应操作
server.listen(9090,function(){
  console.log('http://127.0.0.1:9090');  
})

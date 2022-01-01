const http = require('http')
const server = http.createServer()
server.on('request',function(req,res){
    console.log('web server');
    // const str = `url is ${req.url}, method is ${req.method}`
    // const str = `您请求的URL地址是${req.url} 方法是${req.method}`
    let content = '<h2>404 not found</h2>'
    if (req.url === '/' || req.url ==='/index.html') {
        content = '<h2>home</h2>'
    }else if (req.url==='/about.html') {
        content = '<h2>about</h2>'
    }
    res.setHeader('Content-Type','text/html; charset=utf-8')
    // console.(str);
    res.end(content);
})
server.listen(9090,function(){
  console.log('http://127.0.0.1:9090');  
})

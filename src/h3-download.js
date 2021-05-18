const http = require('http')
const cheerio = require('cheerio');
const download = require('download')
hostit = 'http://web.itheima.com'
let url1 = hostit+'/teacher.html';
let req = http.request(url1,res=>{
    let chunks = [];
    res.on('data',c=>chunks.push(c));
    res.on('end',()=>{
        let html1 = Buffer.concat(chunks).toString('utf-8');
        let $ = cheerio.load(html1); // 对url中中文字符进行转义
        let imgs = Array.prototype.map.call($('.clears .main_pic > img'),item=>(hostit+encodeURI($(item).attr('src'))));
        console.log(imgs);// x图片链接 dist存储目录
        Promise.all(imgs.map(x=>download(x,'dist'))).them(()=>{
            console.log('image downloaded!');
        })
    })
})
req.end()
// jqure 设计
// import cheerio from 'cheerio';
// import http from 'http';
// const http = require('http')
const cheerio = require('cheerio');
const axios = require('axios')
let url1 = 'https://iya.app/member.php?mod=registration'
axios.get(url1)
.then((res)=>{
    if (res.status==200) {
        let $ = cheerio.load(res.data); 
        let t0 = '抱歉，目前站点禁止新用户注册'
        let t1 = $("#messagetext>p").text();
        if(t0==t1){
            console.log('无变化');
        }else{
            // 发送通知
        }

    } else {
        console.log(res);
    }
})
// const { index } = require('_cheerio@1.0.0-rc.9@cheerio/lib/api/traversing');
// hostit = 'http://web.itheima.com'
// let url1 = hostit+'/teacher.html';
// let req = http.request(url1,res=>{
//     let chunks = [];
//     res.on('data',c=>chunks.push(c));
//     res.on('end',()=>{
//         let html1 = Buffer.concat(chunks).toString('utf-8');
//         let $ = cheerio.load(html1); 
//         // console.log($('.clears .main_pic > img').attr('src')) 
//         // console.log(.length)
//         //1. jq  $('.clears .main_pic > img').each((index,item)=>{
//         //     console.log($(item).attr('src'));
//         // })
//         // 2. ES5的数组用法
//          let imgs = Array.prototype.map.call($('.clears .main_pic > img'),item=>($(item).attr('src')));
//         // 3. 得到的是一个伪数组
//         // let imgs = $('.clears .main_pic > img').map((index,item)=>hostit + $(item).attr('src'))
//         console.log(imgs);

//     })
// })
// req.end()
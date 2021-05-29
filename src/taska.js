const para = require('./parameter')
const axios = require('axios')
const cheerio = require('cheerio');
var TaskaRun = async function(){
    let res = await para.res();
    // alapi的token
    // console.log(res.aToken);

    let url1 = 'https://iya.app/member.php?mod=registration'
    axios.get(url1).then(res=>{
        let $ = cheerio.load(res.data);
        var cnt = $('#messagetext > p').text();
        if(cnt.length !=14){
            para.sedMsg(cnt).then(da=>{
            console.log('tk11');
        });
        } return ;
    })

    let url2 = "https://www.abcxx.net/usid/365.html"
    axios.get(url2).then(res=>{
        let $ = cheerio.load(res.data);
        let cnts = Array.prototype.map.call($('pre'),item=>($(item).text()));
        let td = cnts.pop().split('：').pop();
        var da = new Date();
        var year = da.getFullYear()+'年';
        var month = da.getMonth()+1;
        month =  (month < 10)?('0'+month+'月'):(month+'月');
        var date = da.getDate()+'日';
        let te = year+month+date
        if(td==te){
            // [style='color: #ff0000'] "p>span" "p>span[style]"
            let spans = Array.prototype.map.call($('p>span[style]'),item=>($(item).text()));
            let txt = spans.join('\n');
            if (txt.length==0) {return;}
            para.sedMsg(txt).then(da=>{
                console.log('tk12');
            });
        }
    })
}
module.exports ={
    run:TaskaRun
}

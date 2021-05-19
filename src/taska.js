const para = require('./parameter')
const axios = require('axios')
const cheerio = require('cheerio');
var TaskaRun = async function(){

    // axios.get(process.argv[2]).then(res=>{
    //     cnt = res.data.cnt;
    //     if (cnt.length != 0) return;
    //     para.sedMsg(cnt).then(da=>{
    //         console.log('tk10',da);
    //     });
    // });
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
        var month = da.getMonth()+1+'月';
        var date = da.getDate()+'日';
        let te = year+month+date
        if(td==te){
            let spans = Array.prototype.map.call($("[style='color: #ff0000']"),item=>($(item).text()));
            para.sedMsg(spans.join('\n')).then(da=>{
                console.log('tk12');
            });
        }
        console.log(td,te);
         return ;
    })
    // para.res().then((data)=>{
    //     cnt = data.cnt;
    //     // console.log('2',data.cnt);
    // })

    // para.sedMsg(cnt).then(da=>{
    //     console.log('tk10',da);
    // })

}
module.exports ={
    run:TaskaRun
}

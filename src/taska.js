const para = require('./parameter')

var TaskaRun= async function(){
    var cnt = ''
    await para.res().then((data)=>{
        cnt = data.cnt;
        console.log('2',data.cnt);
    })

    para.sedMsg(cnt).then(da=>{
        console.log('tk10',da);
    })

}
module.exports ={
    run:TaskaRun
}

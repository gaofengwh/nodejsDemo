const axios = require('axios')

// 获取消息内容
let response = async function (){
    // console.log('1',this.url)
    let obj =await new Promise((resolve,reject)=>{
        axios.get(this.url).then(res=>{resolve(res.data);});
    });
    // console.log(obj)
    return obj;
}
// 获取微信通知所需的token
let atoken = async function(){
    let obj = await new Promise((resolve,reject)=>{
        urla = 'https://qyapi.weixin.qq.com/cgi-bin/gettoken'
        axios.get(urla,{
            params: {
                corpid: 'wwc8a260a75fd89284',
                corpsecret:process.argv[3]
              }
        }).then(res=>{
            if(res.data.errcode==0){
                // this.wtoken  =  res.data.access_token;
                resolve(res.data.access_token);
                // console.log('pa26',this.wtoken);
            }
        });
    });
    return obj;
}
// 发送微信文本通知
let sedMsg = async function(txt){
    // console.log('txt',txt);
    if(this.wtoken.length==0){
        await atoken().then(tk=>{this.token=tk}).catch(err=>{console.log('err01',err)});
    }
    let obj =await new Promise((resolve,reject)=>{
        urla = 'https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token='+this.token
        axios.post(urla,{
                touser: 'WuGaoFeng',
                msgtype: 'text',
                agentid:1000002,
                text:{
                    content:txt, 
                }
        }).then(res=>{
            // if(res.data.errcode==0){
                resolve(res.data);
            // }
        });
    });
    return obj;
}
let para = {
    url: process.argv[2],
    res: response,
    wtoken:new String,
    sedMsg:sedMsg,
};

module.exports = para
// module.exports = async (args)=>{
//     console.log(process.argv);
//     url2 = args[0];
//     let obj =await new Promise((resolve,reject)=>{
//         axios.get(url2).then(res=>{resolve(res.data);});
//     });
//     return obj;
// }
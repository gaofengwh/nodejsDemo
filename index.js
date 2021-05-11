
//1. 测试分享链接能否满足数据解析 data
//1.1 上面的不好用，推荐使用gitee静态网页
//2. 实现微信推送
//3. alapi的一些功能
const axios = require("axios");
// var fs = require("fs");
// text = '{ "access_token" : "ZILasDMvowygOx5MJaRjXNpctm-28EW9k0ak-zZUEdIPx66CeeJdjr0ChbV6drfY1FLfpzvmXSDktP_NcsCpaZ0qGF6JK_LIdXkZUoHQjUnrMaXAGSXY6KAG1S0TB3WBMw2gQDilqdkFOw4FzHTDnNs3LgOpTz762oNoy2NrkALVUluBtcOlDmyAF9rWiGYBXoJDmfEouXgmuCMeKGNzwA","cnt":"gitee 二者"}'
// text = '{"access_token":"ZILasDMvowygOx5MJaRjXNpctm-28EW9k0ak-zZUEdIPx66CeeJdjr0ChbV6drfY1FLfpzvmXSDktP_NcsCpaZ0qGF6JK_LIdXkZUoHQjUnrMaXAGSXY6KAG1S0TB3WBMw2gQDilqdkFOw4FzHTDnNs3LgOpTz762oNoy2NrkALVUluBtcOlDmyAF9rWiGYBXoJDmfEouXgmuCMeKGNzwA","cnt":"gitee 二者"}';

// var text = '{ "sites" : [' +
// 	'{ "name":"Runoob" , "url":"www.runoob.com" },' +
// 	'{ "name":"Google" , "url":"www.google.com" },' +
// 	'{ "name":"Taobao" , "url":"www.taobao.com" } ]}';
	
// obj = JSON.parse(text);
// console.log(typeof(obj))
// console.log(obj.access_token)
let urlz = 'https://gitee.com/goofingt/gooPage/raw/dev-a/src/task.html'
let urly = 'https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token='
//	'agentid':'1000002',
//	'text':text'
axios.get(urlz)
.then(res=>{
    if(res.status==200){
        token = res.data.access_token;
        cnt = res.data.cnt
        sendMsg(token,cnt);
        console.log(token,cnt);
    };
});

function sendMsg(token,cnt){
    console.log(cnt)
    axios.post(urly+token,{
            // access_token:token
            touser:'@all',
            msgtype:"text",
            agentid:"1000002",
            text:{
                content:cnt,
            }
    })
    .then(res=>{
        if (res.status==200) {
            if(res.data.errcode=42001){ // 重新请求token
                cpid = 'wwc8a260a75fd89284';
                scret ='2SzLnR2JjrITFfjogyvzfeB7mica99dGyje4aSCkYug';
                let tokenac = getMsgToken(cpid,scret);
                sendMsg(tokenac,cnt);
            }else{

            }
        } else {
            console.log('请求出错')
        }
        // console.log(res);
    })
}
function getMsgToken(corpid,corpsecret){
    let urlt = 'https://qyapi.weixin.qq.com/cgi-bin/gettoken'	
    axios.get(url,{
        params:{
            corpid:args['corpid'],
            corpsecret:args['corpsecret']
        }
    })
    .then(response =>{
    if(response.status==200){
        console.log(response.data)
    }
    })
    .catch(err=>{
    console.log(err)
    })
}
// https://docs.qq.com/doc/DY3JTTHhMVmVLd01z
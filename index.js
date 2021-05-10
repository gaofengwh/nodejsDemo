//1. 测试分享链接能否满足数据解析 data
//1.1 上面的不好用，推荐使用gitee静态网页
//2. 实现微信推送
//3. alapi的一些功能
//// 1
const axios = require("axios");
// var fs = require("fs");
// let urlz ='https://file-contents-23456789.oss-cn-beijing.aliyuncs.com/GCdhxRjYyyVDyq88/'
// let urlz = 'https://file-contents-23456789.oss-cn-beijing.aliyuncs.com/GCdhxRjYyyVDyq88'
// ?OSSAccessKeyId=LTAI4FoEPTasjWkqu1meFaHK&Expires=1620654766&Signature=y89Ffb9UdWyGmTSX66ldPUTG7Z8%3D'
// OSSAccessKeyId: LTAI4FoEPTasjWkqu1meFaHK
// Expires: 1620652913
// Signature: Isx5K9Atb1CEyUwqarvL+jHiqfM=
// text = '{ "access_token" : "ZILasDMvowygOx5MJaRjXNpctm-28EW9k0ak-zZUEdIPx66CeeJdjr0ChbV6drfY1FLfpzvmXSDktP_NcsCpaZ0qGF6JK_LIdXkZUoHQjUnrMaXAGSXY6KAG1S0TB3WBMw2gQDilqdkFOw4FzHTDnNs3LgOpTz762oNoy2NrkALVUluBtcOlDmyAF9rWiGYBXoJDmfEouXgmuCMeKGNzwA","cnt":"gitee 二者"}'
// text = '{"access_token":"ZILasDMvowygOx5MJaRjXNpctm-28EW9k0ak-zZUEdIPx66CeeJdjr0ChbV6drfY1FLfpzvmXSDktP_NcsCpaZ0qGF6JK_LIdXkZUoHQjUnrMaXAGSXY6KAG1S0TB3WBMw2gQDilqdkFOw4FzHTDnNs3LgOpTz762oNoy2NrkALVUluBtcOlDmyAF9rWiGYBXoJDmfEouXgmuCMeKGNzwA","cnt":"gitee 二者"}';
// var obj = JSON.parse(text);
// console.log(obj.access_token);
// console.log(obj.cnt);
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
        console.log(typeof(res.data))
        console.log(res.data.cnt)

        // obj = JSON.parse(res.data);
        token = res.data.access_token;
        cnt = res.data.cnt

        // console.log(typeof(token))

        // console.log(token)
        // cnt = obj.cnt;
        // console.log(token,cnt);
        sendMsg(token,cnt);
        // var json = (new Function("return " + res.data))();
        // console.log(typeof(json))
        // var json = eval('('+res.data+')');
        // console.log(obj);         //控制台返回  Object
        // console.log(obj.key);     //控制台返回  value
        // console.log(obj.jian);    //控制台返回  zhi
        // token = res.data.get('access_token');
        // cnt = res.data['cnt'];
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
            content:'djodjofjsof',
    })
    .then(res=>{
        console.log(res);
    })
}
// https://docs.qq.com/doc/DY3JTTHhMVmVLd01z
console.log('85号公路')
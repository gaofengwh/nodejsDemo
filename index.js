
//1. 测试分享链接能否满足数据解析 data
//1.1 上面的不好用，推荐使用gitee静态网页
//2. 实现微信推送
//3. alapi的一些功能
const axios = require("axios");
let urlz = 'https://gitee.com/goofingt/gooPage/raw/dev-a/src/task.html'
let urly = 'https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token='
var getCnt = new Promise((resolve) => {
    axios.get(urlz)
        .then(res => {
            if (res.status == 200) {
                resolve(res.data);
            } else {
                console.log('gitee 任务获取失败')
            }
        });
});

function sendMsg(data) {
    // console.log('sendmsg', data)
    var p = new Promise((resolve) => {
        axios.post(urly + data.access_token, {
            touser: '@all',
            msgtype: "text",
            agentid: "1000002",
            enable_duplicate_check: 1,
            text: {
                content: data.cnt,
            }
        })
            .then(res => {
                if (res.status == 200) {
                    data.errcode = res.data.errcode;
                    // console.log('sendmsg2', res.data);
                    resolve(data);
                } else {
                    console.log('请求出错')
                }
            })
    })
    return p;
}
function getMsgToken(data) {
    var p = new Promise((resolve) => {
        let urlt = 'https://qyapi.weixin.qq.com/cgi-bin/gettoken'
        axios.get(urlt, {
            params: {
                corpid: 'wwc8a260a75fd89284',
                corpsecret: '2SzLnR2JjrITFfjogyvzfeB7mica99dGyje4aSCkYug',
            }
        })
            .then(response => {
                console.log('gettoke', response);
                if (response.status == 200) {
                    data.access_token = response.data.access_token;
                    resolve(data);
                } else {
                    console.log(response.data)
                }
            })
            .catch(err => {
                console.log(err)
            })
    })
    return p;
}
getCnt.then((data) => {
    return sendMsg(data);
}).then((data) => {
    if (data.errcode > 0) {
        return getMsgToken(data);
    } else {
        console.log(data);
    }
}).then(data => {
    sendMsg(data);
})

// https://docs.qq.com/doc/DY3JTTHhMVmVLd01z
const axios = require("axios");
let url = 'https://v1.hitokoto.cn/'
// let url = 'https://v2.alapi.cn/api/hitokoto'
axios.get(url)
.then(res=>{
    if(res.status==200){
        console.log(res.data)
    }else{
        console.log(res)
    }
})

// axios.get(url,{
//     // headers:{
//         // "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0",
//         // "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
//         // "Accept-Encoding": "gzip, deflate, br",
//         // "Accept-Language": "zh-CN,en-US;q=0.7,en;q=0.3",
//         // "Connection": "keep-alive",
//         // "Host": "v1.hitokoto.cn",
//         // "TE": "Trailers",
//         // "Upgrade-Insecure-Requests": 1
//     // }
// })
// .then(response =>{
// if(response.status==200){
//     console.log(response.data)
// }else{
//     console.log(response.data)
// }
// })
// .catch(err=>{
//     console.log(err)
// // console.log(url,'failed')
// })
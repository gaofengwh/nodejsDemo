const args = require('minimist')(process.argv.slice(2))
// node index.js --name=joe  或 node index --name=joe
// console.log(args['name'])
const axios = require("axios");
let url = 'https://qyapi.weixin.qq.com/cgi-bin/gettoken'
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
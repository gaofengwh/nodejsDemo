const axios = require('axios')
// let urlz = 'https://v2.alapi.cn/api/tianqi'
let urlz = 'https://v2.alapi.cn/api/weather/hourly'
axios.get(urlz, {
    params: {
        token: 'b8nn8zChQLbVvmrp',
        location: '101200101'
    }
})
    .then((res) => {
        if (res.data.code == 200) {
            console.log(res.data.data);
        }
    })
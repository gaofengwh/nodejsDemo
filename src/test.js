const axios = require('axios')
let urlz = 'https://gitee.com/goofingt/gooPage/raw/dev-a/src/task.html'
axios.get(urlz)
.then((res)=>{
    console.log(res);
})
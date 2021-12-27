// import fs from 'fs';
const fs = require('fs')
const path = require('path')
// './01.txt' 会随着node所运行是处在的目录发生改变，而找不到正真的文件
fs.readFile(__dirname+'/01.txt','utf-8',function(err,das){
    if (err) {
        console.log('文件读取错误',err.message);
    }
    console.log(das);
    const arra = das.split('，')
    const arrb = []
    arra.forEach(item=>{
        arrb.push(item.replace('=',':'))
    })
    const dtb = arrb.join('\n')
    console.log(dtb);
    // __dirname+'./02.txt' 会出错 使用
    fs.writeFile(path.join(__dirname,'./02.txt'),dtb,function(err,dtas){
        if (err) {
            console.log('write fail');
            return 
        }
        console.log('write success');
    })
})

// console.log('hello ts');
const http = require('http')

import SpiderOptions from './interface/SpiderOptions'
// 创建对象，使用父类获取内容，子类处理结果
export default class Spider {
    // 成员变量
    options: SpiderOptions
    // 构造函数，传入URL和其他参数
    constructor(options: SpiderOptions = { url: '', method: 'get' }) {
        // 初始化
        this.options = options
        this.start()
    }
    start() {
        let req = http.request(this.options.url, {
            headers: this.options.headers,
            method: this.options.method
        }, (res: any) => {
            let chunks: any[] = []
            res.on('data', (c: any) => { chunks.push(c) })
            res.on('end', () => {
                let result = Buffer.concat(chunks).toString('utf-8')
                console.log(result)
            })
        })
        req.end()
    }
}
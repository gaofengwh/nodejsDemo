// console.log('hello ts');
const http = require('http')
// 导入对象
import SpiderOptions from './interface/SpiderOptions'
// 创建对象，使用父类获取内容，子类处理结果
export default class Spider {
    // 成员变量
    options: SpiderOptions
    // 构造函数，传入URL和其他参数
    constructor(options: SpiderOptions = { url: '', method: 'get' }) {
        // 初始化，并开始执行
        this.options = options
        this.start()
    }
    // 对象方法
    start() {
        let req = http.request(this.options.url, {
            headers: this.options.headers,
            method: this.options.method
        }, (res: any) => {
            // 缓存区，任意类型
            let chunks: any[] = []
            // on 用于添加回调函数（会在事件被触发时执行）JS中的事件
            res.on('data', (c: any) => { chunks.push(c) })
            res.on('end', () => {
                let result = Buffer.concat(chunks).toString('utf-8')
                console.log(result)
            })
        })
        req.end()
    }
}
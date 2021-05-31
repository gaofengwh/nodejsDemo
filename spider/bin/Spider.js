"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log('hello ts');
const http = require('http');
// 创建对象，使用父类获取内容，子类处理结果
class Spider {
    // 构造函数，传入URL和其他参数
    constructor(options = { url: '', method: 'get' }) {
        // 初始化
        this.options = options;
        this.start();
    }
    start() {
        let req = http.request(this.options.url, {
            headers: this.options.headers,
            method: this.options.method
        }, (res) => {
            let chunks = [];
            res.on('data', (c) => { chunks.push(c); });
            res.on('end', () => {
                let result = Buffer.concat(chunks).toString('utf-8');
                console.log(result);
            });
        });
        req.end();
    }
}
exports.default = Spider;

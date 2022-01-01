const path = require('path')
const fpath = '/a/b/c/index.html'
var fullpath = path.basename(fpath)
console.log(fullpath); // index.html
var nameWithoutExt=path.basename(fpath,'.html')
console.log(nameWithoutExt); // index
const fext  = path.extname(fpath)
console.log(fext); // .html
// ../ 会抵消前面一个路径，使用join方法替换+
const pathstr = path.join('/a','/b/c','../../','./d','e')
console.log(pathstr);
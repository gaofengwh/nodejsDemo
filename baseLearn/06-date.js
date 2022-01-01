function dateFormate(dtStr){
    const dt = new Date()
    const y = dt.getFullYear()
    const m = padZero(dt.getMonth())
    const d = padZero( dt.getDay())
    const h = padZero( dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())
    return `${y}-${m}-${d} ${h}:${mm}:${ss}`   
} 
function padZero(n){
 return  n> 9? n: '0'+n
}
// exports.dateFormate = dateFormate
module.exports={
    dateFormate
}

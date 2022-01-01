// const dtf = require('./06-date')
const monent = require('moment')
const dt = new Date
// const dts = dtf.dateFormate(dt)
const dts = moment.defaultFormat('YYYY-MM-DD hh:mm:ss');
console.log(dts);
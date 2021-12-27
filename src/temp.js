function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}
console.log(add.call(sub, 2, 1));//3
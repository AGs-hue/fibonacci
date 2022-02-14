// const { compileFunction } = require("vm");

const isFibonacci = (num, count = 1, last = 0) => {
    if (count < num) {
        return isFibonacci(num, count + last, count);
    }
    if (count === num) {
        return true;
    }
    return false;
};

console.log (isFibonacci(1));
console.log(isFibonacci(5));
console.log(isFibonacci(90));
console.log(isFibonacci(36)); 
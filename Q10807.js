// 개수 세기

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = input[0];
const arr = input[1];
const v = input[2];

let result = arr.split(' ').filter((x) => x == v).length;
console.log(result);

console.log(arr.split(' '));

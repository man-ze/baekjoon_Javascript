// X보다 작은 수

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input[1];
const n = parseInt(input[0].split(' ')[0]);
const x = parseInt(input[0].split(' ')[1]);

let result = arr.split(' ').filter((ele) => x > ele);
console.log(result.join(' '));

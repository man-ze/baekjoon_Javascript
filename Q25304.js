// 영수증

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let cost = parseInt(input[0]);
let num = parseInt(input[1].split(' ')[0]);
let sum = 0;

for (let i = 2; i <= num + 1; i++) {
  const space = input[i].split(' ');
  const a = parseInt(space[0]);
  const b = parseInt(space[1]);
  sum += a * b;
}
cost === sum ? console.log('Yes') : console.log('No');

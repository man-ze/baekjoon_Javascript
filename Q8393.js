// 합

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split();

const n = parseInt(input[0]);

let sum = 0;
for (i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);

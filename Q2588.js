// 세자리 곱셈

const fs = require('fs');
const input = fs.readFileSync('index.txt').toString().trim().split('\n'); // /dev/stdin

const n1 = input[0];
const n2 = input[1];

n2Arr = [...n2]; // spread Operator
n2Arr.reverse().join();

n2Arr.map(function (e, i) {});

for (i = 0; i <= input.length; i++) {
  console.log(n1 * n2Arr[i]);
}
console.log(n1 * n2);

// 빠른 A+B (시간초과)

const fs = require('fs');
const input = fs.readFileSync('index.txt').toString().trim().split('\n'); // /dev/stdin

const t = input[0];
let sum = 0;

for (let i = 1; i <= t; i++) {
  const space = input[i].split(' ');
  const [a, b] = [(parseInt(space[0]), parseInt(space[1]))];
  // const a = parseInt(space[0]);
  // const b = parseInt(space[1]);
  sum = a + b;
  console.log(sum);
}

// input.map(function (e, i) {
//   const space = input[i].split(' ');
//   e = space[0];
//   return console.log(e);
// });

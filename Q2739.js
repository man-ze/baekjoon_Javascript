// 구구단

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const n = parseInt(input[0]);

for (let i = 1; i < 2; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${n} * ${j} = ${n * j}`);
  }
}

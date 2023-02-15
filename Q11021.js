// A+B - 7

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const t = parseInt(input[0]);

for (let i = 1; i <= t; i++) {
  const space = input[i].split(' ');
  const a = parseInt(space[0]);
  const b = parseInt(space[1]);
  console.log(`Case #${i}: ${a + b}`);
}

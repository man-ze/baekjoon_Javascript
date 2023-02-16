// A+B - 4

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let zero = input.slice().length - 1;

for (let i = 0; i <= zero; i++) {
  const space = input[i].split(' ');
  const a = parseInt(space[0]);
  const b = parseInt(space[1]);
  console.log(a + b);
}


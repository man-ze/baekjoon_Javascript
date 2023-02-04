// A+B-3

// .map(Number 메서드 땜에 계속 에러남)

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); //

const t = input[0]; // 최초 테스트 케이스

for (let i = 1; i <= t; i++) {
  const space = input[i].split(' ');
  const a = parseInt(space[0]);
  const b = parseInt(space[1]);
  console.log(a + b);
}

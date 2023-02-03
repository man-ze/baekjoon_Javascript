// 알람 시계 (45분 일찍 알람 설정하기)

const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let h = input[0];
let m = input[1] - 45;

if (m < 0) {
  m += 60;
  h--;
}
if (h === -1) {
  h = 23;
}

console.log(h, m);

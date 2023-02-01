// 입력 : 서기 연도를 알아보고 싶은 불기 연도 y가 주어진다. (1000 ≤ y ≤ 3000)
// 출력 : 불기 연도를 서기 연도로 변환한 결과를 출력한다.

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

console.log(parseInt(input) - 543);

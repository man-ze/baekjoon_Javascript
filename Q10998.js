// 두 정수 A와 B를 입력받은 다음, A×B를 출력하는 프로그램 작성하기

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const [a, b] = input;

console.log(parseInt(a) * parseInt(b));

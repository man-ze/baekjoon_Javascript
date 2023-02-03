// 사분면 고르기 (readline 모듈로)

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
  const x = input[0];
  const y = input[1];

  // 코드 작성하는 곳

  x > 0 && y > 0
    ? console.log('1')
    : x < 0 && y > 0
    ? console.log('2')
    : x < 0 && y < 0
    ? console.log('3')
    : console.log('4');

  process.exit();
});

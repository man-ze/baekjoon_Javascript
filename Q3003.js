// 체스말(총16개) / 킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개
// 동혁이가 발견한 흰색 피스의 개수가 주어졌을 때, 몇 개를 더하거나 빼야 올바른 세트가
// 되는지 구하는 프로그램 만들기

// 입력 : 첫째 줄에 동혁이가 찾은 흰색 킹, 퀸, 룩, 비숍, 나이트, 폰의 개수가 주어진다. (0 <= x <= 10)
// 출력 : 첫째 줄에 입력에서 주어진 순서대로 몇 개의 피스를 더하거나 빼야 되는지를 출력한다
// 만약 수가 양수라면 동혁이는 그 개수 만큼 피스를 더해야 하는 것이고, 음수라면 제거해야 하는 것이다.

const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const arr = [1, 1, 2, 2, 2, 8];

let result = arr.map(function (item, idx) {
  return item - input[idx];
});

console.log(result.join(' '));

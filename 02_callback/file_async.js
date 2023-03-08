//file.js 랑 같은건데 depth 를 줄이려고 이렇게 씀 if else 대신임
// 비동기적 특성으로 인한 오류를 보여주는 코드, 순서가 계속 바뀜

const fs = require('fs');

fs.readFile('test.txt', 'utf-8', function (err, data) {
  if (err) return console.log(err);

  console.log('1번', data.toString());
});

fs.readFile('test.txt', 'utf-8', function (err, data) {
  if (err) return console.log(err);
  console.log('2번', data.toString());
});

fs.readFile('test.txt', 'utf-8', function (err, data) {
  if (err) return console.log(err);

  console.log('3번', data.toString());
});

fs.readFile('test.txt', 'utf-8', function (err, data) {
  if (err) return console.log(err);

  console.log('4번', data.toString());
});

//callback hell 로 순서대로 나오게 하기 (함수내부에서 함수나오게하기 / 강제적으로)

const fs = require('fs');

fs.readFile('test.txt', 'utf-8', function (err, data) {
  if (err) return console.log(err);

  console.log('1번', data.toString());
  fs.readFile('test.txt', 'utf-8', function (err, data) {
    if (err) return console.log(err);

    console.log('2번', data.toString());
    fs.readFile('test.txt', 'utf-8', function (err, data) {
      if (err) return console.log(err);

      console.log('3번', data.toString());

      fs.readFile('test.txt', 'utf-8', function (err, data) {
        if (err) return console.log(err);

        console.log('4번', data.toString());
      });
    });
  });
});

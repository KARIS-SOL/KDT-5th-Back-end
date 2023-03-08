// @ts-check

const fs = require('fs'); //fs 는 설치하지않아도 됨

fs.readFile('test.txt', 'utf-8', function (err, data) {
  //file 가져올땐 readFile,  err자리엔 뭐든 써도됨
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

const str = '파일 쓰기 테스트';

fs.writeFile('test1.txt', str, 'utf-8', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('파일쓰기 완료!');
  }
});

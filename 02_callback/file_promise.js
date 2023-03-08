const fs = require('fs').promises; //promise 기능이 내장된 파일 시스템

fs.readFile('test.txt', 'utf-8') //여기서 function(err,data) 등 안써도됨 promises 에 기능이있어서
  .then(function (data) {
    //익명함수 방식
    console.log('1번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })

  .then((data) => {
    //화살표함수 방식
    console.log('2번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })

  .then((data) => {
    console.log('3번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })

  .then((data) => {
    console.log('4번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })

  .catch(function (err) {
    console.log(err);
  });

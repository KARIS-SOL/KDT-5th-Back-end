// @ts-check
const express = require('express');

const server = express();

const PORT = 4000;

//http://localhost:4000/api
server.use('/', (req, res, next) => {
  // res.send('Hello, Express');
  console.log('미들웨어1');
  res.send('응답종료');
});
//주소값 '/' 가 없으므로 내부에서만 받을 수 있다
server.use((req, res, next) => {
  console.log('미들웨어2');
  res.send('응답!');
  next();
  console.log('next 아래에 있는 콘솔로그');
});

server.use((req, res, next) => {
  console.log('미들웨어3');
});

server.listen(PORT, () => {
  console.log(`익스프레스 서버는 ${PORT}번 포트에서 작동중입니다!`);
});

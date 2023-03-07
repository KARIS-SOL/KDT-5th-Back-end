// @ts-check

// const str = 'Hello'; //첫 str에 빨간줄은 아직 사용하지 않아서
// const num = Math.log(str); // 여기서 str을 사용해서 위 str 에 빨간줄 사라짐
// console.log(num);

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello');
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`서버는 ${PORT}번 포트에서 작동 중입니다!`);
});

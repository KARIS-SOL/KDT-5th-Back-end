// @ts-nocheck
const express = require('express');
const cors = require('cors');

const PORT = 4000; //어떤 포트에서 쓸건지

const app = express(); //express 를 실행해서 넣어줌

app.use(cors()); //use : 필요한 모듈을 쓰는것 여기서는 cors 라는 package를 쓰겠다는 뜻

app.use('/', (req, res) => {
  const str = 'Hello, here is back-end! 한글도 보낸다!'; //응답
  const json = JSON.stringify(str); //문자열을 json 형태로 변경
  // res.send(json);
  res.send(str);
});

app.listen(PORT, () => {
  console.log(`데이터 통신 서버가 ${PORT}번에서 실행중입니다!`);
});

//port에서 서버가 실행되면 {}를 실행해주세요

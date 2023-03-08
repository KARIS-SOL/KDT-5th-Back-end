// @ts-check

const express = require('express'); //express 불러오기 from node-moduels

const app = express(); //express 실행
const PORT = 1324;
//주소가 동일하더라도 get 방식이 아니면 안받음
app.get('/', (req, res) => {
  res.send('GET 메소드');
});

app.post('/', (req, res) => {
  res.send('POST 메소드');
});

app.put('/', (req, res) => {
  res.send('PUT 메소드');
});

app.delete('/', (req, res) => {
  res.send('DELETE 메소드');
});

app.listen(PORT, () => {
  console.log(`서버가 ${PORT} 번에서 실행중입니다`);
});

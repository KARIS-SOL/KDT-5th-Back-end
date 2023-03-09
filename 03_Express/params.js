// @ts-check
const express = require('express');

const app = express();
const PORT = 4000;

// local host 4000/~~~ 에서 ~~~를  ID 라는 parameter 로 받겠다 : req.params로 받음
app.get('/id/:email/:password/:name:/gender', (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

app.get('/', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.get('/api', (req, res) => {
  res.send('api 요청이 접수되었습니다!'); // 이미 위에서 id 값이 있기때문에 여기서 api 는 parameter 로 받는데 꼭 /: 이 있어야 api 랑 안겹침
});
app.listen(PORT, () => {
  console.log(`${PORT} 번 실행중`);
});

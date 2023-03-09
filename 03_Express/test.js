// @ts-check
const express = require('express');

const app = express();

const userRouter = express.Router();
const PORT = 4000;

const USER = {
  1: {
    email: 'karis',
    name: '백진솔',
  },
};

app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('Hello, Express World ! ');
});
// 수정
userRouter.put('/modify/:id', (req, res) => {
  if (req.query.email && req.query.name) {
    // query 에 email 과 name 이 들어왔다면
    if (req.params.id in USER) {
      // user라는 객체에 내가 방금 받아온 params 가 존재한다면 변경
      USER[req.params.id] = {
        email: req.query.email,
        name: req.query.name,
      };
      res.send('회원정보 수정완료');
    } else {
      res.send('해당 ID를 가진회원이 존재하지않습니다');
    }
  } else {
    res.send('잘못 된 쿼리 입력입니다');
  }
});

//삭제
userRouter.delete('/delete/:id', (req, res) => {
  if (req.params.id in USER) {
    delete USER[req.params.id]; // key 가 id 가 params 로 받은것들
    res.send('회원 삭제완료');
  } else {
    res.send('해당 ID를 가진회원이 존재하지않습니다');
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} 번에서 서버 실행`);
});

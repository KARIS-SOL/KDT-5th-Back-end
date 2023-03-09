// @ts-check
const express = require('express');

const app = express();
const PORT = 4000;

const userRouter = require('./routes/users'); //module in users.js

// // router 설정
// const userRouter = express.Router();  userRouter = require

// app setting
app.set('view engine', 'ejs');
// user 에 관한건 app 말고 userRouter 에서 받게됨
app.use(express.static('public'));
// console.log(__dirname); // 절대경로!
// app.use('/css', express.static('views/css'));
// views 폴더를 외부에서 접근하게 할 수 있게해줌 for css
// app.use(express.static(__dirname + '/js'));
// app.use('/js', express.static('js'));
app.use('/users', userRouter); // users.js 를 가져와서 userRouter 에 넣어준다는 것

// app: server 전체에대한 기준
app.get('/', (req, res) => {
  res.send('Hello, Express World ! ');
});

app.listen(PORT, () => {
  console.log(`${PORT} 번에서 서버 실행`);
});

// @ts-check
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

const mainRouter = require('./routes'); // import from index.js  (index.js 생략가능)
const userRouter = require('./routes/users');
const postsRouter = require('./routes/posts'); // module in users.js

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// localhost:4000
app.use('/', mainRouter);
// localhost:4000/users
// users.js 를 가져와서 userRouter 에 넣어준다는 것
app.use('/users', userRouter);
app.use('/posts', postsRouter);

// app: server 전체에대한 기준
app.get('/', (req, res) => {
  res.send('Hello, Posts World ! ');
});

// Error 받아주기 from index.js
// 어디서 error가생기든 다 여기서 받음
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message + `<a href="/"> 홈으로 </a>`);
});

app.listen(PORT, () => {
  console.log(`${PORT} 번에서 서버 실행`);
});

// @ts-check
const express = require('express');

const router = express.Router();

const USER = {
  1: {
    id: 'karis',
    name: '백진솔',
  },
};

const USER_ARR = [
  {
    id: 'karis',
    name: '백진솔',
    email: '@gmail.com',
  },
  {
    id: 'pororo',
    name: '뽀로로',
    email: '@gmail.com',
  },
];

// http://loacalhost:4000/users
// http://127.0.0.1:4000/users
// 회원목록을 보여주는 API 작성, 위에서 가져온 USER

router.get('/', (req, res) => {
  // res.send(USER);
  res.render('users', { USER_ARR, userCounts: USER_ARR.length });
});
// 저 아이디를 가진 회원정보는 여기
// router.get('/id/:id', (req, res) => {
//   res.send('특정 회원 정보');
// });

// params로 받는 API
router.get('/id/:id', (req, res) => {
  const userData = USER[req.params.id];
  if (userData) {
    res.send(userData);
  } else {
    res.send('ID를 못찾겠어요');
  }
});
// get 방식은 server에 변화가 보통 없기 때문에 create가 가능한post 로 method 설정
// router.post('/add', (req, res) => {
//   res.send('회원등록');
// });

router.post('/add', (req, res) => {
  if (!req.query.id || !req.query.name) {
    return res.send('쿼리 입력이 잘못되었습니다!');
  }

  const newUser = {
    id: req.query.id,
    name: req.query.name,
  };
  USER[Object.keys(USER).length + 1] = newUser;
  res.send('회원등록 완료');
});
//   if (req.query.id && req.query.name) {
//     const newUser = {
//       id: req.query.id,
//       name: req.query.name,
//     };
//     //
//     USER[Object.keys(USER).length + 1] = newUser;

//     res.send('회원등록 완료');
//   } else {
//     res.send('쿼리 입력이 잘못 되었습니다!');
//   }
// });

//
router.get('/show', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
  res.write('<h1>Hello, Dynamic Web Page </h1>');

  for (let i = 0; i < USER_ARR.length; i++) {
    res.write(`<h2>USER ID is ${USER_ARR[i].id}</h2>`);
    res.write(`<h2>USER NAME is ${USER_ARR[i].name}</h2>`);
  }
  res.end();
});

// router.get('/ejs', (req, res) => {
//   const userCounts = USER_ARR.length;
//   res.render('index', { USER_ARR, userCounts }); //app setting 에서 해줬으니깐 index.ejs 를 index로 표기가능
// });

module.exports = router;

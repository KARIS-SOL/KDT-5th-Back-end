// function knockDoor(time, person, callback) {

//   setTimeout(function () {
//     console.log('노크를하고 기다립니다');
//     const

//     callback();

// },2000);

// function callName() {
//   console.log(`${person} 이가 ${time} 만에 문을 열고 나왔습니다}`);
// }

// knockDoor(3, '영식', callName);   // 내가 이상한짓 한것...

//강사님 코드

function knockDoor(time, name, callback) {
  console.log('노크를 하고 기다립니다');

  setTimeout(function () {
    //실행하고 싶은 코드
    callback(time, name);
  }, 1000 * time);
}

function callName(time, name) {
  console.log(`${name} 이가 ${time} 초 만에 문을 열고 나왔습니다!`);
}

knockDoor(3, '영식', callName);

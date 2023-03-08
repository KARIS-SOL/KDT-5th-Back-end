// function func1(callback) {
//   console.log('1번함수');
//   callback(func3); //callback 에 func2 가 찍히고
// }

// function func2(callback) {
//   //callback에 func3 가찍히고
//   console.log('2번함수');
// }

// function func3() {
//   console.log('3번함수');
// }

// func1(() => {
//   //이름이 없는 익명함수 선언
//   console.log('2번 인척하는 새로만든 익명함수');
// });

// function multiplecation(number, callback) {
//   //호출할 함수는 multiplecation
//   let answer = 0;
//   setTimeout(() => {
//     answer = number * number;
//     callback(answer);
//   }, 2000);
// }

// function say(result) {
//   //result값에 2초있다가 answer값이 들어오게됨
//   console.log(result);
// }

// multiplecation(3, say);

function buySync(item, price, quantity) {
  console.log(`${item} 상품을 ${quantity} 개 골라서 점원에게 주었습니다.`);
  setTimeout(function () {
    console.log('계산이 필요합니다.');
    const total = price * quantity;
    pay(total);
  }, 1000);
}

function pay(tot) {
  console.log(`${tot} 원을 지불하였습니다.`);
}
buySync('포켓몬빵', 1000, 5);

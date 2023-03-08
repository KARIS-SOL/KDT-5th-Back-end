// @ts-check

function buySync(item, price, quantity, callback) {
  console.log(`${item}상품을 ${quantity} 개골라서 점원에게 주었습니다.`);

  setTimeout(function () {
    console.log('계산이 필요합니다');
    const total = price * quantity;

    // return total;
    callback(total);
  }, 2000);
  //2000 = 1초  => 1초라는 시간이 걸려서 먼저 totalMoney 가 실행이되어 버림
  //   undefined 원을 지불 하였습니다.
  // 계산이 필요합니다

  // console.log('계산이 필요합니다');
  // const total = price * quantity;
  // return total; //2- 정상적인 순서
}

function pay(total) {
  console.log(`${total} 원을 지불 하였습니다.`); //4
}

// const totalMoney = buySync('포켓몬빵', 1000, 5); //1

// pay(totalMoney); //3
buySync('포켓몬빵', 1000, 5, pay); //pay 함수를 callback 으로 받을거고

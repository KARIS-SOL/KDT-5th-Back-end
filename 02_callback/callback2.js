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

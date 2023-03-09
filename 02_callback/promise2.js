const lucky = false;
const promise = new Promise((resolve, reject) => {
  console.log('주식이 오르기를 기다리기 시작합니다!');
  setTimeout(() => {
    console.log('3년의 시간이 흐르고....');
    if (lucky) {
      const profit = 3000; //1초후에
      resolve(profit);
    } else {
      reject('아.... 망했어요');
    }
  }, 2000);
});

// promise
//   .then(function (data) {//tetz is old 가 data 안에 들어간다
//     console.log(data);
//   })
//   .catch(function (data) {
//     console.log(data);
//   });

async function howMuch() {
  const result = await promise;
  console.log(result);
} // 함수선언

// 함수 실행
howMuch();

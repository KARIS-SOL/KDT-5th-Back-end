function funcHell(callback) {
  callback();
}

funcHell(function () {
  console.log('1번 인척하는 새로만든 익명함수');
  funcHell(function () {
    console.log('2번 인척하는 새로만든 익명함수');
    funcHell(function () {
      console.log('3번 인척하는 새로만든 익명함수');
    });
  });
});

const promise = new Promise(function (resolve, reject) {
  const tetz = 'old'; // older 로 바꿔주면 3초 안기다려주고 바로 reject 가 뜸

  if (tetz === 'old') {
    setTimeout(function () {
      resolve('tetz is old');
    }, 3000);
  } else {
    reject('tetz is getting old');
  }
});

promise
  .then(function (data) {
    //tetz is old 가 data 안에 들어간다
    console.log(data);
  })
  .catch(function (data) {
    console.log(data);
  });

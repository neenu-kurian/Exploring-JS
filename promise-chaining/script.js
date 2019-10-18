//.then returns a promise, so we can call then on it. TO get the result of previos then in next one, return the result inside then statement

new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000); // (*)
})
  .then(function(result) {
    console.log('result of first then', result); // 1
    return result * 2;
  })
  .then(function(result) {
    console.log('result of second then', result); // 2
    return result * 2;
  })
  .then(function(result) {
    console.log('result of third then', result); // 4
    return result * 2;
  });

//you can also return another promise inside then
new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function(result) {
    console.log(result); // 1

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function(result) {
    console.log(result); // 2

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function(result) {
    console.log(result); // 4
  });

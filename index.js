function delayedPromise(value, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
  return promise;
}

const arr = [
  delayedPromise("abc", 1000),
  delayedPromise("promise2", 3000),
  delayedPromise("12443", 2000),
  delayedPromise("qwerty", 5000),
  delayedPromise("promise5", 4000),
];
Promise.all(arr).then((value) => {
  console.log(value);
});

/////////////////////////////////////////////////////////////////

function randomDelay(value) {
    const delay = parseInt(Math.random() * 5000) + 1000;
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(value);
        }, delay);
    });
  return promise;
}

const arr2 = [randomDelay("abc"), randomDelay("123"), randomDelay("promsise3"), randomDelay("qwerty"), randomDelay("alphabet"),];
Promise.race(arr2)
    .then(value => {
        console.log(value);
    });
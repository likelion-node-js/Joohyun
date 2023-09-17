// 4번째로 실행
setImmediate(() => {
  console.log("immediate");
});

// nextTick은 setTimeout, setImmediate, Promise보다 먼저 실행된다. -> 1번째로 실행
process.nextTick(() => {
  console.log("nextTick");
});

// 3번째로 실행
setTimeout(() => {
  console.log("timeout");
}, 0);

// Promise 또한 setTimeout, setImmediate보다 먼저 실행된다. -> 2번째로 실행
Promise.resolve().then(() => console.log("promise"));

/* 
nextTick, Promise처럼 다른 콜백들보다 우선시되는 것들을 마이크로태스크(microtask)라고 구분짓는다.
*/

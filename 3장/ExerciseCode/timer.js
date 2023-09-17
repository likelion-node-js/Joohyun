// 코드의 실행 순서들을 예측해보자
// setTimeout, setInterval, setImmediate 함수를 섞어서 사용

// clearTimeout이 실행되기 전에 1.5초 후 실행
const timeout = setTimeout(() => {
  console.log("1.5초 후 실행");
}, 1500);

// clearInterval가 실행되기 전까지 1초마다 setInterval 실행
const interval = setInterval(() => {
  console.log("1초마다 실행");
}, 1000);

// 3초가 되기 전 clearTimeout이 실행 -> 실행 취소
const timeout2 = setTimeout(() => {
  console.log("실행되지 않습니다.");
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 2500);

// 가장 먼저 실행
const immediate = setImmediate(() => {
  console.log("즉시 실행");
});

// clearImmediate가 실행 -> 실행 취소
const immediate2 = setImmediate(() => {
  console.log("실행되지 않습니다.");
});

clearImmediate(immediate2);

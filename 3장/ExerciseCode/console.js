const string = "abc";
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: "value",
    },
  },
};

// console.timeEnd와 대응(동일한 레이블에서 적용)
console.time("Entire time");
// 평범한 로그를 콘솔에 표시해주는 용도
console.log("평범한 로그입니다. 쉼표로 구분해 여러 값을 찍을 수 있습니다.");
console.log(string, number, boolean);
// 에러를 콘솔에 표시해주는 용도
console.error("에러 메시지는 console.error에 담아주세요.");

// 객체의 속성들이 테이블 형태로 표현된다.
console.table([
  { name: "주현", birth: 2001 },
  { name: "lucy", birth: 2008 },
]);

// 객체를 콘솔에 표시할 때 사용하는 용도(default value of depth : 2)
console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { color: true, depth: 1 });

console.time("시간 측정");
for (let i = 0; i < 100000; i++) {}
console.timeEnd("시간 측정");

// 에러가 발생한 위치를 추적할 수 있게 해주는 용도
function b() {
  console.trace("에러 위치를 추적");
}
function a() {
  b();
}
a();

console.timeEnd("Entire time");

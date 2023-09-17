const A = require("./globalA");
// globalA 모듈의 함수를 호출하고 할당

global.message = "안녕하세요";
// global 객체에 속성이 message인 값을 대입
console.log(A());

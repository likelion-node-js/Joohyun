// ES모듈의 impor나 export default는 함수나 객체가 아니라 그 자체로 문법이다.
// 파일명도 js 대신 mjs로 변경
import { odd, even } from "./var.mjs";
import checkNumber from "./func.mjs";

function checkStringOddOrEven(str) {
  if (str.length % 2) {
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven("hello"));

// 살짝 느낀 점 : ECMAScript Module은 리액트 문법과 상당히 유사하다.

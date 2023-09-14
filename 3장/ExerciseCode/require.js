// require가 반드시 파일의 최상단에 위치할 필요가 없다.
console.log("require가 가장 위에 오지 않아도 됩니다.");

// module.exports도 최하단에 위치할 필요가 없다. -> 아무데서나 사용해도 된다.
module.exports = "저를 찾아보세요.";

require("./var");
require("./func");

console.log("require.cache입니다.");
// require.cache 객체에 require.js & var.js같은 파일명이 속성명으로 들어있다.
// 한번 require한 require.cache에 저장된다.
// 다음 번에 require할때는 새로 불러오지 않고 require.cache에 있는 것을 재사용한다.
// 만약 새로 require를 원한다면? require.cache의 속성을 제거
console.log(require.cache);
console.log("require.main입니다.");
// 현재 파일이 첫 모듈인지 알아보는 방법
console.log(require.main === module);
// 첫 모듈의 이름을 알아보는 방법 -> 현재에서는 require.js 나옴
console.log(require.main.filename);

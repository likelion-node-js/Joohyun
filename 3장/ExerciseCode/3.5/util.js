const util = require("util");
const crypto = require("crypto");

// util.deprecate : 함수가 deprecated 처리되었음을 알려준다.
// 함수가 조만간 사라지거나 변경될 때 알려줄 수 있어 유용하다.
const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y);
}, "dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!");
dontUseMe(1, 2);

// 콜백 패턴을 프로미스 패턴으로 바꿔준다. -> async, await 패턴도 사용이 가능하다.
const randomByTesPromise = util.promisify(crypto.randomBytes);
randomByTesPromise(64)
  .then((buf) => {
    console.log(buf.toString("base64"));
  })
  .catch((error) => {
    console.error(error);
  });

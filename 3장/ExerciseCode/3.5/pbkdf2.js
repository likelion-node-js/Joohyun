const crypto = require("crypto");

// 1. randomBytes() 메소드로 64비트 길이의 문자열을 생성 -> salt
crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString("base64");
  console.log("salt:", salt);
  crypto.pbkdf2("비밀번호", salt, 100000, 64, "sha512", (err, key) => {
    console.log("password:", key.toString("base64"));
  });
});

const fs = require("fs");

console.log("시작");
// 동일한 파일을 여러 번 읽어보기
fs.readFile("3장/ExerciseCode/3.6/readme2.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("1번", data.toString());
});
fs.readFile("3장/ExerciseCode/3.6/readme2.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("2번", data.toString());
});
fs.readFile("3장/ExerciseCode/3.6/readme2.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("3번", data.toString());
});

console.log("끝");

const fs = require("fs").promises;

// fs 모듈을 콜백 함수 형식이 아닌 프로미스 형식으로 바꿔서 사용
fs.readFile("3장/ExerciseCode/3.6/readme.txt")
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });

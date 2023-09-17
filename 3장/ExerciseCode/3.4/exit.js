let i = 1;
// 1부터 4까지 표시한 뒤, 5가 되면 프로세스를 종료시키기
setInterval(() => {
  if (i === 5) {
    console.log("종료!");
    process.exit();
  }
  console.log(i);
  i += 1;
}, 1000);

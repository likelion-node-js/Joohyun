// url 모듈을 사용하기 위해 불러오기
const url = require("url");

const { URL } = url;
const myURL = new URL(
  "http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor"
);
console.log("new URL():", myURL);
console.log("url.format():", url.format(myURL));

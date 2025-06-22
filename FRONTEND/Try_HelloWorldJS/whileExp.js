// 0~1 사이의 난수를 생성하는 Math.random() 함수와 실수를 정수로 올림하는 Math.ceil() 함수를 이용하면 임의의 문제를 만들 수 있음

// Math.random() 함수에 10을 곱해서 0~10 사이의 실수를 만들고,
// Math.ceil() 함수를 이용해 0 ~ 10 사이의 정수를 생성

var a = Math.ceil(Math.random() * 10);
var b = Math.ceil(Math.random() * 10);

var solution = a * b;
var ans;

ans = parseInt(prompt(a + "*" + b + "=?"));
if (ans == solution) {
  console.log("맞았습니다.");
} else {
  console.log("틀렸습니다.");
}

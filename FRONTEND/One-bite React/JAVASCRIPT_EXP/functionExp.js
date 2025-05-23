// 환영 인사를 하는 기능을 함수로
function greeting() {
  console.log("안녕하세요!");
} // 이렇게 함수를 정의하는 작업을 '함수 선언'이라고 함

greeting();

console.log("//////////////////////////////////////////////////");

// 함수를 호출하면 코드의 실행 흐름이 바뀐다
function hi() {
  console.log("안녕하세요");
}

console.log("함수시작전");
hi();
console.log("함수종료");

// 함수를 이용해 직사각형 넓이 구하기
// 가로 * 세로
function getArea() {
  let width = 10;
  let height = 20;

  let area = width * height;

  console.log(area); // 200
}

getArea();

console.log("===================");

// 함수의 인수와 매개 변수
// 함수 getARENA에 높이와 너비의 값을 전달
function getARENA(a, b) {
  let arena = a * b;
  console.log(arena);
}

getARENA(10, 20); // 200

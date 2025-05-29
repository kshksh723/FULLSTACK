if (true) {
  var a = 1;
}
console.log(a); // 1

// 함수 내부에서 var로 변수를 선언한 예
function foo() {
  var a1 = 1;
}
console.log(a1); // a1은 정의되지 않았음

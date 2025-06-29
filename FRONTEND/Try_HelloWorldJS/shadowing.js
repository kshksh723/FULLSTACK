function shadowing_example() {
  console.log("F", val); // 함수 안에서 변수 val의 값 출력
  val++; // val 값을 1 증가
}
var val = 0; // 함수의 바깥에서는 변수 val을 선언하고 0으로 초기화
shadowing_example(); // 함수 호출
console.log("0", val); // 가장 바깥에서 변수 val의 값 출력
/*
F 0
0 1
*/

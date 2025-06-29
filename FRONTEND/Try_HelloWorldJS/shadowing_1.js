function shadowing_example() {
  var val = 0;
  // 함수 안쪽에서 바깥에서 선언한 변수와 이름이 같은 변수 val을 선언하고 초기화
  console.log("F", val);
  val++;
}

var val = 0;
shadowing_example();
console.log("0", val);
/*
F 0
0 0
*/

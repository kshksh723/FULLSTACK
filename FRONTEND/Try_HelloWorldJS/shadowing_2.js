function shadowing_example() {
  var val = 5; // 변수 val를 5로 초기화
  console.log("F", val);
  val++;
}

var val = 0;
shadowing_example();
console.log("0", val);
/*
F 5
0 0
*/

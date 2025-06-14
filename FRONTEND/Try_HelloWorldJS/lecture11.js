function return_test() {
  return;
  console.log("실행되지 않는 코드");
}

function print(msg) {
  console.log("print function in");
  console.log(msg);
  console.log("print function out");
}

function sum(arg1, arg2) {
  var result = arg1 + arg2;
  return result;
}

function return_test1() {
  // return_test() 함수를 호출하면
  return; // return 구문을 만나서 그 밑에 있는
  console.log("실행되지 않는 코드"); // 이 코드는 실행되지 않고
} //  로 넘어가 바로 함수가 종료됨
// 반환하는 결괏값이 따로 없으므로 개발자도구에서 undefined가 출력됨

// print 함수 코드
function print(msg) {
  console.log("print function in"); // print function in과
  console.log(msg); // 그 사이에 인수로 입력한 문자열 메시지(hello function)가 출력
  console.log("print function out"); // print function out이 출력되고
} // 마찬가지로 반환값이 없음(undefined)

// sum() 함수의 코드
function sum(arg1, arg2) {
  var result = arg1 + arg2;
  return result;
}

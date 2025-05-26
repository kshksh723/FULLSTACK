let greeting = function () {
  console.log("hello");
};
greeting(); // hello

console.log("========");

// 선언한 함수를 변수에 저장해 사용하는 예
function greetFunc() {
  console.log("hello");
}

greetFunc(); // hello

let greeting1 = greetFunc;
greeting1(); // hello

console.log("=============");

funcA();
//funcB(); // funcB는 정의되지 않았으며 함수가 아니다
function funcA() {
  console.log("func A");
}
//let funcB = function () {
//console.log("func B");
//};

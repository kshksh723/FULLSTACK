// 전역, 지역 스코프
// let a = 1;

// function foo() {
//   console.log(a);
// }

// function bar() {
//   console.log(a);
// }

// foo();
// bar();
// console.log(a);
// /*
// 1
// 1
// 1
// */
// console.log("======");
// 함수 내부에 변수를 선언하고 함수 외부에서 그 변수에 접근하는 예
/*
function foo1() {
  let a1 = 1;
}
console.log(a1); 
// a1는 정의되지 않았습니다.
*/

//조건문 내부에서 변수를 선언하고 해당 변수를 조건문 외부에서 접근하는 예
/*
if (true) {
  let a2 = 1;
}
console.log(a2); // a2는 정의되지 않음
*/
// 반복문 내부에 변수를 선언하고 해당 변수를 반복문 외부에서 접근하는 예
// for (let i = 0; i < 10; i++) {
//   let a3 = 1;
// }

// console.log(a3); // a3은 정의되지 않음
// console.log(i); // i는 정의되지 않음

// 함수가 또 다른 함수를 호출하는 예
// function foo1() {
//   console.log("foo");
// }
// function bar1() {
//   foo1();
//   console.log("bar");
// }

// bar1();
// // foo
// // bar
// console.log("======");
// 함수 내부에 중첩 함수를 만들고 함수 외부에서 이 중첩 함수를 호출하는 예
// function foo3() {
//   console.log("foo");

//   function bar3() {
//     console.log("bar");
//   }
// }
// bar3();
// undefined

// 조건문 내부에 함수를 선언하고 해당 함수를 조건문 외부에서 호출하는 예
// if (true) {
//   function foo4() {
//     console.log("bar");
//   }
// }

// foo4();

// for (let i = 1; i < 10; i++) {
//   function bar5() {
//     console.log("bar");
//   }
// }
// bar5();

function parentFunc(callBack) {
  // 매개변수 callback에는 함수 childFunc이 저장됨
  console.log("parent");
  callBack();
}

function childFunc() {
  console.log("child");
}

parentFunc(childFunc);

// parent
// child
console.log("================");
// 콜백함수가 필요한 이유  : 0 부터 전달받은 숫자만큼 반복하는 함수
function repeat(count) {
  for (let idx = 0; idx < count; idx++) {
    console.log(idx + 1);
  }
}
repeat(5);
// 1
// 2
// 3
// 4
// 5

console.log("================");

// 다른 기능을 추가로 한다면
function repeat1(count1) {
  for (let idx1 = 0; idx1 < count1; idx1++) {
    console.log(idx1 + 1);
  }
}

function repeatDouble(count1) {
  for (let idx1 = 0; idx1 < count1; idx1++) {
    console.log((idx1 + 1) * 2);
  }
}

repeatDouble(5);

console.log("================");

// 콜백함수를 사용하면 이러한 문제를 효과적으로 해결할 수 있음
function repeat2(count2, callBack2) {
  for (let idx = 0; idx < count2; idx++) {
    callBack2(idx + 1);
  }
}

function origin(count2) {
  console.log(count2);
}
repeat2(5, origin);
/*
1
2
3
4
5
*/
console.log("=============");

// 함수 repeat3에서 반복문의 동작을 변경하고 싶다면 새 함수를 만들어 repeat3의 인수로 전달하면 됌
function repeat3(count3, callBack3) {
  for (let idx3 = 0; idx3 < count3; idx3++) {
    callBack3(idx3 + 1);
  }
}

function origin(count3) {
  console.log(count3);
}

function double(count3) {
  console.log(count3 * 2);
}

repeat3(5, double);
/*
2
4
6
8
10
*/

console.log("===========");

// 함수 표현식을 이용한 콜백 함수
function repeat4(count4, callBack) {
  for (let idx4 = 0; idx4 < count4; idx4++) {
    callBack(idx4 + 1);
  }
}

const double4 = function (count4) {
  console.log(count4 * 2);
};
repeat4(5, double4);
/*
2
4
6
8
10
*/
console.log("===========");
// 변수 double에 저장한 익명 함수를 다시 사용할 필요가 없는 상황이라면 다음과 같이 익명 함수를 직접 인수 형태로 전달 가능
// => 코드를 더 줄일 수 있음
function repeat5(count5, callBack4) {
  for (let idx5 = 0; idx5 < count5; idx5++) {
    callBack4(idx5 + 1);
  }
}
repeat5(5, function (count5) {
  console.log(count5 * 2);
});
console.log("===========");
/*
 function (count5) {
  console.log(count5);
}
  */
/*
 2
4
6
8
10
*/

// 화살표 함수
// 리터럴 형식으로
let greeting = (name) => `hello ${name}`;

const greetingText = greeting("유지민");
console.log(greetingText);
// hello 유지민
console.log("===========");
// 화살표 함수 본문이 여러 줄이면 ➡️ 중괄호 사용
let greeting1 = (name1) => {
  let greetingText1 = `hello ${name1}`;
  return greetingText1;
};

console.log(greeting1("유지민11")); // hello 유지민11
console.log("===========");
// 콜백 함수로 사용할 함수 또한 화살표 함수로 작성 가능
let isConfirm = true;

function confirm(onYes, onNo) {
  if (isConfirm) onYes();
  else onNo();
}
confirm(
  () => console.log("승인"),
  () => console.log("거부")
); // 승인
console.log("===========");

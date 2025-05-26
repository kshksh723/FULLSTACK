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

// 다른 기능을 추가로 한다면
function repeat1(count1) {
  for (let idx1 = 0; idx1 < count1; idx1++) {
    console.log(idx1 + 1);
  }
}

function repeatDouble(count1) {
  for (let idx2 = 0; idx2 < count1; idx2++) {
    console.log(idx2 + 1 * 2);
  }
}

repeatDouble(5);

// 콜백함수를 사용하면 이러한 문제를 효과적으로 해결할 수 있음

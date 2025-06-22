var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < array.length; i++) {
  // 조건식
  // 반복 실행할 코드
  console.log(array[i]);
}

// 변수 여러 개를 한꺼번에 초기화하기
// for 반복문을 사용할 때 쉼표를 활용하면 변수 여러 개를 한꺼번에 초기화하거나 업데이트를 할 수 있따

for (var i = 0, j = 10; i < j; i++, j--) {
  console.log(i, j);
}

// 이중 반복문과 다중 반복문 사용하기
for (var i = 2; i <= 9; i++) {
  for (var j = 1; j <= 9; j++) {
    console.log(i + "*" + j + "=" + i * j);
  }
}

// 다중 반복문을 사용할 때는 보통 변수를 i, j, k 순서로 사용함

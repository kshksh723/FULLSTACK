var cond = false;

// while 반복문
while (cond) {
  console.log("이 구문은 실행되지 않습니다.");
}
// do while 반복문
do {
  console.log("이 구문은 한 번은 실행됨");
} while (cond);

/*
do while 반복문에서 계속 반복할지 말지는(while 반복문을 실행할지 말지는) 반복문의 맨 끝에서 검사한다.
이 말은 반복문 안의 코드가 적어도 한 번은 실행된다
일단 반복문을 한 번 실행한 다음 더 반복할지 말지를 조건식을 보고 결정하는 원리
*/

// 어떨 때 while 반복문보다 do while 반복문이 유용한지
do {
  var ans = parseInt(prompt("1+1 = ? ")); // 변수 ans는 문제(1+1)의 답을 사용자에게 입력받음 그런 다음
} while (ans != 2); // while 반복문을 이용해서 입력 값으로 정답 2가 입력되지 않으면(정답이 아니면) 계속 반복하도록 함
console.log("맞혔습니다."); // while 반복문이 종료되면 맞혔습니다!라는 메시지를 출력함

/*
실행 결과

이 구문은 한 번은 실행됩니다.
맞혔습니다.
*/

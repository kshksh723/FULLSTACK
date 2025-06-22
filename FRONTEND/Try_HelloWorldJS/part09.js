/*
count를 0으로 초기화하고 while 반복문 안에서 1씩 증가시킴
이렇게하면 count가 9까지 증가한 다음 while 반복문의 조건식에 따라 반복이 종료됨 
*/
var count = 0;
while (count < 10) {
  console.log(count);
  count++;
}

/*
sumFrom1ToN() 함수는 n을 인자로 받아서 1부터 n까지 더한 값을 반환하는 함수
예를 들어 sumFrom1toN(3)을 호출하면 1+2+3의 결괏값인 6을 반환함
코드 네번째 줄과 코드 다섯 번째 줄을 수정해서 sumFrom1ToN() 함수를 완성 시킴
*/
function sumFrom1ToN(n) {
  // n 을 3으로 호출
  // 더한 값과 반환하는 값을 변수로 해야함
  var count = 1; // 1부터 더하기 위해 count를 1로 설정해서 n보다 작거나 같을 동안(count <= n) while 반복문을 실행함
  var sum = 0; // sum이란 변수를 0으로 설정하고 반복해서 count를 더해 저장하는 부분

  while (count <= n) {
    sum = sum + count;
    count++;
  }
  return sum; // 6
}
// count : 1 -> 2 -> 3 -> 4
// sum : 0 + 1 = 1 , 1 + 2 = 3,  3 + 3 = 6
// n : 3
//

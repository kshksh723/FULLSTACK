/*
if 조건문 뒤에 따라오는 괄호 안에 불형(true 또는 false) 값을 직접 넣는 경우는 거의 없음
대신 관계 연산자를 주로 사용함
다음 예는 변수 age의 값을 판정해서 20세 미만인지 확인하는 예이다.

*/
var age = 25;

if (age > 20) {
  console.log("20세 미만입니다.");
} else {
  console.log("20세 이상입니다");
}

/*
조건 두 개를 합치고 싶다면 논리 연산자를 이용함 코드에서 is20s() 함수는 age가 20대인지 확인하는 함수로 20대면 true를 반환하고 20대가 아니면 false를 반환함
코드 세번째 줄에서 20대인지 확인하기 위해 20세 이상이면서 30세 미만인지를 체크한다
*/
function is20s(age) {
  if (age <= 20 && age < 30) {
    // age가 20이상이고 30 미만이면서 20대
    return true;
  } else {
    return false;
  }
}
/*
인자 year가 윤년인지 아닌지 판단하여 결괏값을 true와 false로 반환하는 isLearYear() 함수를 완성시키기

✅ 힌트 : 편의상 4의 배수인 해는 모두 윤년이라 생각하기 4의 배수인지 검사하려면 year % 4 == 0을 확인하면 됨
*/
function isLearYear(year) {
  // if 조건문을 추가하세요
  if (year % 4 == 0) {
    return true;
  } else {
    return false;
  }
}
/*
✅ tip
실습 문제에는 if 조건문을 사용했지만 대개는 다음과 같이 더 효과적으로 작성함

funtion isLeapYear(year){
    return(year % 4 == 0);
}
*/

// dynamicTyping
let varA = 1;
varA = "우왕굳";

console.log(++varA); // NaN

// typeofoperator
let varAB = 1;
varAB = "우왕굳굳";

console.log(typeof varAB); //string

let varAC = "우왕굳굳굳";
varAC = 1;

console.log(typeof varAC); // number

// 🔽 typeof와 삼항 연산자를 함께 사용하는데 변수의 자료형에 따라 다른 동작을 수행
const varAD = "안녕하세요";

typeof varAD === "string"
  ? console.log("문자자료형")
  : console.log("문자 자료형 아님"); // 문자자료형

// 삼항 연산자를 이용해 값이 홀수인지 짝수인지 판별
let num = 1;
num % 2 === 0 ? console.log("짝수") : console.log("홀수");
/*
num % 2 === 0은 삼항 연산자의 조건식
조건식은 변수 num의 값을 2로 나누었을 때 나머지가 0인지를 묻고 있음음
나머지가 0이라는 것은 변수에 저장된 값이 짝수라는 의미
따라서 조건식이 참(짝수)이면 전반부의 consol.log("짝수")를 실행하고, 그렇지 않으면 후반부의 consol.log("홀수")를 실행함
*/
// 삼항연산자에서 참과 거짓에 따라 수행하는 명령 대신에 값을 입력하면 조건식에서 정한 값을 반환
let num1 = 1;
let result = num % 2 === 0 ? "짝수" : "홀수";

console.log(result); // 홀수

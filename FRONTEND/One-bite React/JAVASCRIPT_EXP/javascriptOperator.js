// 대입연산자

// 🧩 결합방향 : 같은 수식 내에 우선순위가 같은 연산자가 둘 이상 있을 때 어느 연산을 먼저 수행할지 결정
// 대입 연산자의 결합 방향은 오른쪽에서 왼쪽
let numA = 1;
let numB;
let numC;

numB = numC = numA;
console.log(numA, numB, numC); // 1 1 1
console.log("=======");
// 산술 연산자

// 🧩 산술 연산자는 곱셈, 나눗셈, 나머지 연산자가 덧셈, 뺄셈 연산자보다 우선순위가 더 높다
// 🧩 연산자가 동등한 우선순위를 가질 때는 왼쪽에서 오른쪽으로 차례대로 계산
let numberA = 1;
let numberB = 2;

console.log(numberA + numberB); // 3
console.log(numberA - numberB); // -1
console.log(numberA * numberB); // 2
console.log(numberA / numberB); // 0.5
console.log(numberA % numberB); // 1
console.log("=======");
let sampleA = 1 + 2 * 10;
console.log(sampleA); // 21
console.log("=======");
// 소괄호를 사용하면 원하는 연산부터 먼저 수행
let sampleB = (1 + 2) * 10;
console.log(sampleB); // 30
console.log("=======");
/* 복합 대입 연산자 
: 대입 연산자와 산술 연산자의 기능을 함께 이용할 때 사용
*/
let numberC = 10;
number = numberC + 10;
console.log(number); // 20
console.log("=======");
// 복합 대입 연산자를 사용
let numberD = 10;
number += 10; // number = number + 10
console.log(numberD); // 20
console.log("=======");
// 복합 대입 연산자는 산술 연산자와 대입 연산자를 서로 이어 붙여(+=) 사용

// 복합 대입 연산자는 모든 산술 연산자와 함께 사용 가능
let numberE = 10;

numberE += 10;
console.log(numberE); // 20

numberE -= 10;
console.log(numberE); // 10

numberE *= 10;
console.log(numberE); // 100

numberE /= 10;
console.log(numberE); // 10

numberE %= 10;
console.log(numberE); // 0
console.log("=======");

/* 증감연산자
    : 값을 1씩 늘리거나 줄일 때 사용하는 연산자
    : 덧셈 또는 뺄셈 연산자를 두 개 연달아 붙여 사용
*/

let a = 1;
a++;
console.log(a); // 2

let b = 1;
b--;
console.log(b); // 0

console.log("===============");

let C = 1;
console.log(C++); // 1
console.log(C); // 2

let D = 1;
console.log(D--); // 1
console.log(D); // 0

console.log("===============");

let E = 1;
console.log(++E); // 2
console.log(E); // 2

let F = 1;
console.log(--F); // 0
console.log(F); // 0

console.log("===============");

/*
논리 연산자
: 참(TRUE)와 거짓(FALSE)을 포함하는 불리언 값을 다룰 때 사용하는 연산자
1) OR(||) : 둘 중 하나라도 참이면 참
2) AND(&&) : 둘 중 하나라도 거짓이면 거짓
3) NOT(!) : 참이면 거짓, 거짓이면 참
*/
let boolD = true;
let boolE = false;

console.log(boolD || boolE); // true

console.log("=========");

let boolF = true;
let boolG = false;
console.log(boolF && boolG); // false

console.log("=========");

let boolH = true;
let boolI = false;

console.log(!boolH); // false
console.log(!boolI); // true
console.log("=========");
/*
비교 연산자
: 두 값을 비교하는 연산자

=== : 같다(동등 비교 연산자)
!== : 같지 않다
> : 크다
>= : 크거나 같다
< : 작다
<= : 작거나 같다

*/

let numberF = 2;
let numberG = 2;
let numberH = "2";

console.log(numberF === numberG); // true
console.log(numberG === numberH); // false
console.log("=========");

let numberI = 2;
let numberJ = 2;
let numberK = "2";

console.log(numberI === numberJ); // true
console.log(numberJ === numberK); // false
console.log(numberJ == numberK); // == 를 사용해 두 변수의 값을 비교하고 결과를 출력 ==> true
console.log("=========");

let numberL = 2;
let numberM = 2;
let numberN = "2";

console.log(numberL !== numberM); //false
// numberL와 numberM은 값과 자료형이 모두 일치하기 때문에 출력 결과는 거짓이 된다
console.log(numberM !== numberN); // true
// numberM과 numberN의 값은 같지만, 자료형은 다르기 때문에 출력 결과는 참이 된다
console.log(numberM != numberN); // false
// numberM과 numberC는 자료형이 다르지만 값은 같기 때문에 출력결과는 거짓이 된다
console.log("=========");
/*
✔️
!== 연산자는 값과 자료형 중 하나라도 다르면 참으로 판단
!= 연산자는 자료형은 비교하지 않고 값이 다르면 참으로 판단단
*/

// 대소비교

let numberO = 1;
let numberP = 2;
let numberQ = 3;

console.log(numberO < numberP); // true
console.log(numberO > numberP); // false
console.log(numberP < numberQ); // true
console.log(numberP > numberQ); // false
console.log("=========");
// 크거나 같다 >=, 작거나 같다 <=

let numberR = 1;
let numberS = 2;
let numberT = 2;

console.log(numberR <= numberB); // true
console.log(numberR >= numberB); //false
console.log(numberS <= numberT); // true
console.log(numberS >= numberT); //true

/* null 병합 연산자
: 값이 확정된 변수를 찾을 때 사용하는 연산자
값이 '없음'을 나타내는 자료형으로 null과 undefined가 있다
*/

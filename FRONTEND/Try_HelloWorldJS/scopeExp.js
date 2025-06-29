// for 문의 변수 i를 let과 var로 각각 선언한 다음 실행
function test() {
  for (let i = 0; i < 3; i++) {
    // let i를 var i로 바꿔서 실행해 볼 것
    // 함수 안과 블록 안에서는 항상 number가 출력됨
    console.log("typeof(i) inside the block : ", typeof i);
  }

  // 함수 안과 블록 바깥에서는 let과 var에 따라 결과가 다름
  console.log("typeof(i) outside the block: ", typeof i);
}

test();
// 함수 바깥과 블록 바깥에서는 둘다 undefined가 출력됨
console.log("typeof(i) outside the function : ", typeof i);

/*
let i일 경우
typeof(i) inside the block :  number
typeof(i) inside the block :  number
typeof(i) inside the block :  number
typeof(i) outside the block:  undefined
typeof(i) outside the function :  undefined
*/

/*
var i일 경우
typeof(i) inside the block :  number
typeof(i) inside the block :  number
typeof(i) inside the block :  number
typeof(i) outside the block:  number
typeof(i) outside the function :  undefined
*/

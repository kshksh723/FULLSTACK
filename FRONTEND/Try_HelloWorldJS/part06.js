// 길이가 5인 배열 arr을 만들고 원하는 값으로 초기화
var arr = [1, 2, 3, 4, 5];

// firstElement() 함수를 수정해서 매개변수로 받는 배열 arr의 첫 번째 엘리먼트를 반환하도록 만들어보기
function firstElement(arr) {
  return arr[0];
}

// 배열 arr의 맨 앞에는 "begin", 맨 뒤에는 "end" 문자열을 엘리먼트로 추가하시오. push()와 unshift() 명령을 사용하면 됨
var arr1 = [1, 2, 3];
// arr의 맨 앞에 "begin", 맨 뒤에는 "end"를 엘리먼트로 추가
// push()와 unshift() 명령을 이용함
var a = arr1.push("end");
console.log(a);

var b = arr1.unshift("begin");
console.log(b);

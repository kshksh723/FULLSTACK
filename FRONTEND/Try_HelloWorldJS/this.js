// function f() {
//   console.log("f is called");
// }
// var o = { name: "object", method: f }; // 함수 바깥에서 변수 o의 객체 생성

// f(); // f()함수를 바로 호출할 수도 있고
// o.method(); // 객체의 속성에 바인드된 함수로 호출할 수도 있음

// // 브라우저에서 파일을 로드하면 f is called(함수를 불러왔다)라는 메시지가 두 번 호출된 것
// /*
// f is called
// f is called
// */

// 함수 안에 this 키워드 사용하기
function f() {
  console.log(this);
  console.log("f is called");
}
/*
// 첫 번째 함수가 호출되었을 때는 this가 window 객체고, 두번째 함수가 호출되었을 때 this가 o.method()에서 정의한 object인 객체
// this는 예약어
// this 키워드는 f() 함수를 호출되었을 때 어떤 객체에 바인드된 속성으로 호출된 것인지를 보여줌
function f() {
  console.log(this);
  console.log("f is called");
}
function setName(name) {
  // 새 함수 추가
  this.name = name; // this의 이름을 name으로 변경
}
// 객체 o를 만들고 setName 속성에 방금 정의한 함수를 지정
var o = { name: "object", method: f, setName: setName };

// 비슷한 객체 o2를 만들고 name 속성의 값은 비워둠
var o2 = { name: "", setName: setName };

o.setName("object"); // 첫 번째 객체의 메서드 호출
o2.setName("object2"); // 두 번째 객체의 메서드 호출

console.log(o, o2);
 */

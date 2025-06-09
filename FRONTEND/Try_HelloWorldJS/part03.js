// 변수 obj를 객체로 선언하고 name과 age라는 속성을 추가한 다음 각 속성의 값에 자신의 이름과 나이를 입력하시오
// 1
var obj = {};
obj["name"] = "홍길동";
obj["age"] = 20;

// 2
var obj1 = { name: "홍길동", age: 20 };

// book의 title을 이용해서 코드의 두 번째 줄이 책 제목을 출력하도록 밑줄 친 부분을 채우기
// 1
var book = { title: "어린왕자" };
console.log("제목: ", book.title);

// 2
var book1 = { title: "어린왕자" };
console.log("제목:", book["title"]);

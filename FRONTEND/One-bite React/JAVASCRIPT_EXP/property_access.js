// 프로퍼티에 접근
let person = {
  name: "김태연",
  age: 25,
  "like cat": true,
};

const personName = person.name; // 점 표기법
const personAge = person["age"]; // 괄호 표기법

console.log(personName); // 김태연

console.log(personAge); // 25

console.log("==========================");
// 프로퍼티 추가

let person1 = {
  name: "김태연",
  age: 25,
  "like cat": true,
};
person.gender = "male"; // 점 표기법을 이용한 프로퍼티 추가
person["nickname"] = "winterlood"; // 괄호 표기법을 이용한 프로퍼티 추가
console.log(person.gender); // male
console.log(person["nickname"]); // winterlood

console.log("=============");

// key와 value가 유동적인 프로퍼티를 괄호 표기법으로 객체에 추가
function addProperty(obj, key, value) {
  obj[key] = value;
}
let obj = {};

addProperty(obj, "a", 1);
addProperty(obj, "b", 2);
addProperty(obj, "c", 3);

console.log(obj); // { a: 1, b: 2, c: 3 }

console.log("============");

// 프로퍼티 수정
let cat = {
  catname: "치삼이",
  catage: 4,
};
cat.catname = "치삼";
cat["catage"] = 5;

console.log(cat); // { catname: '치삼', catage: 5 }

// 프로퍼티 삭제
let cat1 = {
  name1: "치삼이",
  age1: 4,
};
delete cat1.name1;
delete cat1["age1"];

console.log(cat1); // {}

// 상수 객체의 프로퍼티
const obj1 = {
  a: 1,
  b: "text",
};
obj1.a = 2;
obj1.c = undefined;
delete obj1.b;
console.log(obj1); //{ a: 2, c: undefined }

// in 연산자
let obj2 = {
  a: 1,
};

console.log(obj2.b); // undefined

// undefined를 반환하는 이런 객체의 특징을 이용해 특정 프로퍼티의 존재 여부를 확인할 수 있음
let obj3 = {
  a: 1,
};

let isPropertyExist = obj3.b !== undefined;

console.log(isPropertyExist); // false

// 객체에서 해당 프로퍼티의 존재 여부를 확인 할 때는 주로 in 연산자를 이용함
let person2 = {
  age1: 10,
};

let isNameExist1 = "name" in person2;
console.log(isNameExist1); // false

// 메서드
let person3 = {
  name2: "김태연",
  sayHi: function () {
    console.log("안녕");
  },
};
person3.sayHi(); // 안녕

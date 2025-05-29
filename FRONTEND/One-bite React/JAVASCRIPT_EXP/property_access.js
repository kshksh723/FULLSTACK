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

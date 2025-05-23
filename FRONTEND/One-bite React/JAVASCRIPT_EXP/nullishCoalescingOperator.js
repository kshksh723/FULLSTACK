let varA = 10;
let varB = 20;
let varC;

console.log(varA ?? varB); //10
console.log(varC ?? varB); // 20

// 변수 user에 해당 사용자의 이름이 있다면 이름을, 이름이 없다면 닉네임을 지정하시오
let name;
let nickname = "이름 추천 좀";

let user = name ?? nickname;

console.log(user); // 이름 추천 좀

// 변수 userid에 "aka"이라는 문자열을 입력해 값을 확정한다면~?
let username = "aka";
let usernickname = "별명 추천 좀";

let userid = username ?? usernickname;

console.log(userid); // aka

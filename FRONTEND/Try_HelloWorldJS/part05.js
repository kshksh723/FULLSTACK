// 변수 prefix와 변수 suffix에 저장된 문자열을 이어 붙여서 변수 word에 저장
// 다음에는 문자열의 길이를 변수 word_length에 저장
var prefix = "program";
var suffix = "mer";
var word;
var word_length;

// 이 줄 아래에 코드 적기
word = prefix + suffix;
var word1 = prefix.concat(suffix);
word_length = word.length;
var word_length1 = word1.length;

// firstLetter() 함수를 수정해서 매개변수 str의 첫 번째 문자를 반환하는 함수  ➡️charAt() 명령 사용
function firstLetter(str) {
  return str.charAt(0);
}

// first2Letters() 함수를 수정해서 매개변수 str의 첫 두 문자를 문자열로 반환하는 함수를 만들기
// substring() 또는 substr() 명령을 이용하기
// 예를들어 str이 "hello"라면 substring() 또는 substr() 명령을 써서 "he"로 반환
function first2Letters(str1) {
  return str1.substr(0, 2);
}

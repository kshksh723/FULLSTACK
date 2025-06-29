function a() {
  // a() 함수 생성
  var v_a = "a"; // 변수 v_a 초기화

  function b() {
    //a() 함수 안에 b() 함수를 생성
    var v_b = "b"; //b() 함수 안에서 변수 v_b를 초기화
    console.log("b: ", typeof v, typeof v_a, typeof v_b);
    // v는 전역변수이므로 string
    // v_a 는 a() 함수 내에서 정의된 지역변수
    // v_b는 b() 함수 내에서 정의된 지역변수
  }
  b(); // a() 함수 안에서 b() 함수를 호출
  console.log("a : ", typeof v, typeof v_a, typeof v_b);
  // v는 전역변수 string, v_a는 string, v_b는 b() 함수 내에서만 정의되어 있기 때문에 a() 함수 내에서는 접근할 수 없어서 undefined를 반환
}

var v = "v"; // a() 함수 바깥에서 변수 v 초기화
a(); //a() 함수 초기화
console.log("o : ", typeof v, typeof v_a, typeof v_b); // 마지막으로 실행됨
// v는 전역변수, v_a는 전역에서 정의되지 않아서 undefined v_b도 정의 안되서 undefined

/*
b:  string string string
a :  string string undefined
o :  string undefined undefined
*/

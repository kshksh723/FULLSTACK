function a() {
  // a() 함수 생성
  var v_a = "a"; // 변수 v_a 초기화

  function b() {
    //a() 함수 안에 b() 함수를 생성
    var v_b = "b"; //b() 함수 안에서 변수 v_b를 초기화
    console.log("b: ", typeof v, typeof v_a, typeof v_b);
  }
  b(); // a() 함수 안에서 b() 함수를 호출
  console.log("a : ", typeof v, typeof v_a, typeof v_b);
}

var v = "v"; // a()

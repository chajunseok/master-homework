/**
 * 과제 파일
 */

// 과제 2-1번. 의도적인 메모리 누수 코드

  function createLeakingClosure() {
    let bigData = new Array(1000000).fill('데이터');  // 큰 배열 생성
  
    // setInterval로 반복 작업 등록
    setInterval(function handler() {
      console.log(bigData[0]);  // 클로저가 bigData를 참조, 참조 안해도 클로저는 빅 데이터를 참조하고 있음
    }, 1000);
  }
  
  createLeakingClosure();
  
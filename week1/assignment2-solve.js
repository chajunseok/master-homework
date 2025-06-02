/**
 * 과제 파일
 */

// 과제 2-1번. 의도적인 메모리 누수 코드 해결
// 클로저가 메모리 누수를 유발하는 이유는 클로저가 참조하는 변수가 메모리에 남아있기 때문'
// clean up 함수를 통해 메모리 누수를 방지할 수 있음

function createFixedClosure() {
    let bigData = new Array(1000000).fill('데이터');  // 큰 배열 생성
  
    // setInterval로 반복 작업 등록
    const intervalId = setInterval(function handler() {
      console.log(bigData[0]);  // 클로저가 bigData를 참조
    }, 1000);
  
    // 5초 후에 setInterval 해제 + bigData 참조 해제
    setTimeout(() => {
      clearInterval(intervalId);  // setInterval 해제
      bigData = null;             // bigData 참조 해제
      console.log('Interval 클린업, bigData 클린업!!');
    }, 5000);
  }
  
  createFixedClosure();
  
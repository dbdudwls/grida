// Promise를 사용한 비동기 함수 정의
function delay(message, ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(message);
        resolve(message); // 작업이 완료되면 메시지를 반환하는 Promise를 이행(resolve)합니다.
      }, ms);
    });
  }
  
  // Promise 체인을 사용한 예제
  console.log("시작");
  
  delay("첫 번째 메시지", 2000)
    .then((message) => {
      // 이전 작업의 결과를 이용한 다음 작업
      return delay(`다음 작업 - ${message}`, 1500);
    })
    .then((message) => {
      return delay(`또 다음 작업 - ${message}`, 1000);
    })
    .then(() => {
      console.log("끝");
    })
    .catch((error) => {
      console.error("에러 발생:", error);
    });
  
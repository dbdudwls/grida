// Promise를 사용한 비동기 함수 정의
function delay(message, ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(message);
        resolve(message); // 작업이 완료되면 메시지를 반환하는 Promise를 이행(resolve)합니다.
      }, ms);
    });
  }
  
  // async/await를 사용한 예제
  async function main() {
    console.log("시작");
  
    try {
      const message1 = await delay("첫 번째 메시지", 2000);
      const message2 = await delay(`다음 작업 - ${message1}`, 1500);
      const message3 = await delay(`또 다음 작업 - ${message2}`, 1000);
  
      console.log("끝");
    } catch (error) {
      console.error("에러 발생:", error);
    }
  }
  
  main();
  
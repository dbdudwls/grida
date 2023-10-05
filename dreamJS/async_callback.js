'use strict';

// 비동기 작업을 시뮬레이션하는 함수
function simulateAsyncTask(callback) {
    setTimeout(function () {
        const result = "비동기 작업이 완료되었습니다!";
        callback(result);
    }, 2000); // 2초 후에 작업이 완료됨
}

// 콜백 함수를 사용하여 작업이 완료된 후 결과를 처리
function handleResult(result) {
    console.log(result);
}

// 비동기 작업 시작
console.log("비동기 작업 시작");
simulateAsyncTask(handleResult);
console.log("비동기 작업 진행 중...");

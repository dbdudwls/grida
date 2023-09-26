// 변수 지정
let num1 = 0; // 처음 입력한 숫자
let num2 = 0; // 연산자를 누른 후 숫자
let result = 0; // 연산 후 결과 값
let calmod = ""; // 사칙연산 계산 모드
let iscal = false; // 계산 중인지 아닌지
let iseq = false; // =를 누른 후인지 아닌지
let ismul = false; // 곱셈,나눗셈을 누른 후 인지 아닌지

// 최초 모니터에 표시될 숫자 표시
let monitor = document.getElementById("monitor");
monitor.innerHTML = num1.toLocaleString();

const buttons = document.querySelectorAll('.btnNum,.btnCal,.btnC,.btnEq');
let currentButton = null;
buttons.forEach(button => { // 버튼 눌러져있는 디자인 
    button.addEventListener('click', () => {
        if (currentButton) {
            currentButton.classList.remove('pressed-button');
        }
        button.classList.add('pressed-button');
        currentButton = button;
    });
})

const numBtns = document.getElementsByClassName("btnNum");
for (const numBtn of numBtns) { // 숫자버튼 눌렀을 때 이벤트 발생
    numBtn.addEventListener("click", (event) => {
        const btnText = event.target.textContent;
        numberBtn(btnText);
    });
}

const calBtns = document.getElementsByClassName("btnCal");
for (const calBtn of calBtns) { // 계산버튼 눌렀을 때 이벤트 발생
    calBtn.addEventListener("click", (event) => {
        const btnText = event.target.textContent;
        if (btnText === "+" || btnText === "-") {
            handleCalBtn(btnText);
        } else {
            handleCalBtn2(btnText)
        }
    });
}

// C버튼과 Eq버튼 눌렀을때 이벤트 발생
document.getElementById("btnC").addEventListener("click", clickBtnC);
document.getElementById("btnEq").addEventListener("click", clickBtnEq);

function reset() { // 변수초기화 메서드
    num1 = 0; num2 = 0; result = 0; iscal = false; iseq = false; calmod = "", ismul = false;
}

function cal() { // 사칙연산 계산에 대한 함수
    if (calmod === "+") {
        result = num1 + num2
    } else if (calmod === "-") {
        result = num1 - num2
    } else if (calmod === "*") {
        result = num1 * num2
    } else if (calmod === "/") {
        result = num1 / num2
    } else {
        result = num1
    }
    num1 = result
    monitor.innerHTML = result.toLocaleString()
}

function checkNumberLimits() { // 일정 숫자보다 커지면 에러표시 후 초기화
    if (num1 >= 100000000000000 || num2 >= 100000000000000 || result >= 100000000000000) {
        monitor.innerHTML = "Digit Error";
        reset()
    }
}

function checkNumberminus() { // 일정 숫자보다 작아지면 에러표시 후 초기화
    if (num1 < -100000000000000 || num2 < -100000000000000 || result < -100000000000000) {
        monitor.innerHTML = "Digit Error";
        reset()
    }
}

function numberBtn(btnValue) { // 숫자버튼을 눌렀을 때 실행되는 메서드
    if (ismul) { // mul상태에서 num2=1이므로 0으로 초기화
        num2 = 0
        ismul = false
    }
    if (iseq) { // =으로 계산을 끝내고 다시 숫자를 눌렀을때 계산초기화
        reset()
    }
    if (!iscal) { // 연산자 누르기 전에는 num1에 저장
        num1 = parseInt(num1.toString() + btnValue)
        monitor.innerHTML = num1.toLocaleString();
    } else { // 연산자 누른 후에는 num2에 저장
        num2 = parseInt(num2.toString() + btnValue)
        monitor.innerHTML = num2.toLocaleString();
    }
    checkNumberLimits()
    checkNumberminus()
}

function handleCalBtn(btnValue) { // 계산(덧셈)버튼을 눌렀을 때 실행되는 메서드
    if (iseq) { // = 계산이 끝난 후 다시 연산자를 누르면 num2초기화
        num2 = 0
        iseq = false
    }
    if (!iscal) { // 계산모드와 아닐때를 구분
        iscal = true
    } else {
        if (ismul) { // 연속해서 연산자를 누를때 덧셈과 곱셈을 구분
            if (calmod === "/" || calmod === "*") {
                num2 = 1
            } else {
                num2 = 0
            }
        }
        cal()
        num2 = 0
    }
    calmod = btnValue;
    iseq = false
    checkNumberLimits()
    checkNumberminus()
}

function handleCalBtn2(btnValue) { // 계산(곱셈)버튼을 눌렀을 때 실행되는 메서드 
    if (iseq) { // = 계산이 끝난 후 다시 연산자를 누르면 num2초기화
        num2 = 1 // 곱셈연산의 경우에는 num2를 0으로 초기화 시켜버리면 숫자를 제외한 연산기호나 =을 클릭했을때 결과가 0이 됨
        iseq = false
    }
    if (!iscal) { // 계산모드와 아닐때를 구분
        iscal = true
    } else {
        if (ismul) { // 연속해서 연산자를 누를때 덧셈과 곱셈을 구분
            if (calmod === "/" || calmod === "*") {
                num2 = 1
            } else {
                num2 = 0
            }
        }
        cal()
        num2 = 0
    }
    calmod = btnValue;
    iseq = false
    checkNumberLimits()
    checkNumberminus()
    ismul = true
}

function clickBtnEq() { // = 버튼을 눌렀을 때 실행되는 메서드
    cal()
    iseq = true
    iscal = false
    checkNumberLimits()
    checkNumberminus()
}

function clickBtnC() { // 초기화 버튼을 눌렀을 때 실행되는 메서드
    reset()
    monitor.innerHTML = num1.toLocaleString();
}
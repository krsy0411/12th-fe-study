const buttons = document.querySelectorAll('button');
const displayElement = document.querySelector('.input');

let operatorOn = ''; // 연산자 입력
let previousNum = ''; // 이전 값
let resentNum = ''; // 최근 값
let resultNum = ''; // 계산 결과 값

// calculate 함수 (previousNum, operatorOn, resentNum 인자로 받음)
const calculate = (n1, operator, n2) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = Number(n1) + Number(n2);
      break;
    case '-':
      result = Number(n1) - Number(n2);
      break;
    case '*':
      result = Number(n1) * Number(n2);
      break;
    case '/':
      result = Number(n1) / Number(n2);
      break;
    default:
      break;
  }
  return String(result);
};

const calculator = () => {
  let isFirstDigit = true; // 첫 번째 숫자 여부를 판별하는 변수

  buttons.forEach((item) => {
    item.addEventListener('click', (e) => {
      let action = e.target.classList.contains('operator') ? 'operator' :
                   e.target.classList.contains('num') ? 'num' :
                   e.target.classList.contains('clear') ? 'clear' :
                   e.target.classList.contains('result') ? 'result' : '';
      let click = e.target.innerHTML;

      if (action === 'operator') {
        // 연산자 눌렀을 때
        operatorOn = click;
        previousNum = resultNum;
        displayElement.textContent += ' ' + operatorOn + ' ';
        isFirstDigit = true; 
      }

      if (action === 'num') {
        if (isFirstDigit) {
          // 첫 번째 숫자이고 입력된 값이 0인 경우 아무 작업도 수행하지 않음
          if (click === '0') {
            displayElement.textContent += '0';
            resultNum = '0';
            return;
          }

          if (operatorOn === '') {
            // 창이 비어있고 연산자 누르지 않았을 때 (한자리)
            displayElement.textContent = click;
            resultNum = click;
            previousNum = resultNum;
          } else {
            // 창이 비어있고 연산자 눌렀을 때 (한자리)
            displayElement.textContent += click;
            resultNum = click;
            resentNum = resultNum;
          }
        } else {
          // 첫 번째 숫자가 아닐 때 (한자리 이상)
          displayElement.textContent += click;
          resultNum += click;

          if (operatorOn === '') {
            previousNum = resultNum;
          } else {
            resentNum = resultNum;
          }
        }
        isFirstDigit = false; 
      }

      if (action === 'result') {
        // = 눌렀을 때 calculate 함수 실행
        displayElement.textContent = calculate(previousNum, operatorOn, resentNum);
        resultNum = displayElement.textContent;
        isFirstDigit = true; 
      }

      if (action === 'clear') {
        // C 버튼 눌렀을 때 모든 할당 초기화
        displayElement.textContent = '';
        previousNum = '';
        operatorOn = '';
        resentNum = '';
        resultNum = '';
        isFirstDigit = true; 
      }
    });
  });
};

calculator();

const text = "Anima~~~~~~ted Text";
const textWrapper = document.querySelector(".animated-text"); // DOM
const textArray = text.split(''); // 문자열 분리

textArray.forEach(letter => { // 각 요소에 대해 반복
    const letterElement = document.createElement("span"); // 새 span 요소 추가

    letterElement.textContent = letter;
    letterElement.classList.add("letter");

    textWrapper.appendChild(letterElement); // 추가
})
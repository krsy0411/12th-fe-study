const text = "오... 이게 애니메이션 텍스트??";
const textWrapper = document.querySelector(".animated-text");
const textArray = text.split('');

textArray.forEach(letter => {
    const letterElement = document.createElement("span");

    letterElement.textContent = letter;
    letterElement.classList.add("letter");

    textWrapper.appendChild(letterElement);
})
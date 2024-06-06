const text = "Animmmmmated Text";
const textWrapper = document.querySelector(".animated-text");
const textArray = text.split('');

textArray.forEach(letter => {
    const letterElement = document.createElement("span");

    letterElement.textContent = letter;
    letterElement.classList.add("letter");

    textWrapper.appendChild(letterElement);
})
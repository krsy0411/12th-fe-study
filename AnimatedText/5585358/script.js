const text = "칙칙폭폭 기차가 지나갑니다";
const textWrapper = document.querySelector(".animated-text");
const textArray = text.split("");

textArray.forEach((letter) => {
  const letterElement = document.createElement("span");

  console.log(letterElement);
  letterElement.innerHTML = letter;
  letterElement.classList.add("letter");

  textWrapper.appendChild(letterElement);
});

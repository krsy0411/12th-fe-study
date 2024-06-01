const text1="Animated Text";
const text2="Underline Text";
const textWrapper1=document.querySelector('.anmiated-text')
const underLineText=document.querySelector('.underline-text')
const textArray=text1.split('');

textArray.forEach((letter)=>{
    const letterElement=document.createElement('span');

    letterElement.textContent=letter;
    letterElement.classList.add('letter');

    textWrapper1.appendChild(letterElement);
})

underLineText.textContent=text2;
const themeButton=document.getElementById('theme-button')
const checkbox=document.getElementById('checkbox')
const iconSun=document.getElementById('icon-sun');
const iconMoon=document.getElementById('icon-moon');

// themeButton.addEventListener('click',()=>{
//     document.body.classList.toggle('dark-mode');
//     iconSun.classList.toggle('hidden');
//     iconMoon.classList.toggle('hidden');
// })

checkbox.addEventListener('change',()=>{
    document.body.classList.toggle('dark-mode');
    iconSun.classList.toggle('hidden');
    iconMoon.classList.toggle('hidden');
})
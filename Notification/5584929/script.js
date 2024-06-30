const showToastMessageButton = document.querySelector(".notification-button");
const notification = document.querySelector(".notification");
const notificationCloseButton=document.querySelector(".notification__close__button");

// Show Toast Message 버튼 클릭시 notification 보이기
showToastMessageButton.addEventListener('click',()=>
    notification.classList.remove('hidden')
)

// notification 내 x 버튼 클릭시 notification 숨기기
notificationCloseButton.addEventListener('click',()=>
    notification.classList.add('hidden')
)

document.addEventListener('click',(e)=>{
    // notification과 Show Toast Message 버튼을 클릭하지 않은 경우 notification 숨기기
    if(!notification.contains(e.target) && !showToastMessageButton.contains(e.target))
        notification.classList.add('hidden')
})
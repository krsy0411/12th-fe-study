const notification = document.querySelector('.notification');
const button = document.querySelector('.trigger-button');
const XButton = document.querySelector('.XButton'); // X 버튼

// figure태그 내 hide, none 클래스명을 지우는 역할의 함수
const toggleNotification = () => {
    notification.classList.remove('none');
    notification.classList.remove('hide');
}

// 클릭 이벤트를 넣어주는 곳
document.addEventListener("click", (event) => {
    const isClickedInsideOfNotification = notification.contains(event.target);
    const isButtonClicked = button.contains(event.target);
    const isXButtonClicked = XButton.contains(event.target); // X 버튼
    console.log(event.target);

    // 알림창 내부를 누른 경우가 아니고 && toggle button을 누른게 아니라면 === 배경을 눌렀다면
    if (!isClickedInsideOfNotification && !isButtonClicked) {
        // hide 클래스를 넣어 안 보이도록 설정
        notification.classList.add('hide');
    }
    // X 버튼을 클릭했을 때
    if (isXButtonClicked) {
        notification.classList.add('hide');
    }
});
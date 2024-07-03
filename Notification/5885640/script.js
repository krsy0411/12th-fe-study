const notification = document.querySelector('.notification');
const button = document.querySelector('.trigger-button');
const closeButton = document.querySelector('.closeButton');

const toggleNotification = () => {
    notification.classList.remove('none');
    notification.classList.remove('hide');
}

closeButton.addEventListener("click", () => {
    notification.classList.add('hide');
});

document.addEventListener("click", (event) => {
    const isClickedInsideOfNotification = notification.contains(event.target);
    const isButtonClicked = button.contains(event.target);
    console.log(event.target);

    if(!isClickedInsideOfNotification && !isButtonClicked) {
        notification.classList.add('hide');
    }
});
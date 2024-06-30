const notification = document.querySelector(".notification");
const button = document.querySelector(".trigger-button");

const toggleNotification = () => {
  notification.classList.remove("none");
  notification.classList.remove("hide");
};

document.addEventListener("click", (event) => {
  const isClickedInsideOfNotification = notification.contains(event.target);
  const isButtonClicked = button.contains(event.target);
  console.log(event.target);
  console.log(isClickedInsideOfNotification);
  console.log(isButtonClicked);

  // notification 버튼을 눌렀을 때 없애기 위함
  if (isClickedInsideOfNotification && !isButtonClicked) {
    notification.classList.add("hide");
    button.classList.remove("hide");
  } else if (!isClickedInsideOfNotification && isButtonClicked) {
    button.classList.add("hide");
    notification.classList.remove("hide");
  }
});

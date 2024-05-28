const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", function () {
  document.body.classList.toggle("dark-mode");
})
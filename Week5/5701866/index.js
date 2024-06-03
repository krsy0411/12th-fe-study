const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '='];

var display = document.getElementById("display");
var displayL1 = document.getElementById("l1");
var displayL2 = document.getElementById("l2");
var number = "";
var number0 = "";
var opt = "";

function calc() {
  let n1 = Number(number0);
  let n2 = Number(number);
  let result;

  switch(opt) {
    case '+':
      result = n1+n2; break;
    case '-':
      result = n1-n2; break;
    case 'x':
      result = n1*n2; break;
    case '/':
      result = n1/n2; break;
  }

  return String(result);
}

function showL2(show) {
  if(show) {
    displayL1.style.fontSize = "40px";
    displayL2.style.display = "block";
  } else {
    displayL1.style.fontSize = "48px";
    displayL2.style.display = "none";
  }
}

function warning() {
  display.classList.remove("warning");
  void display.offsetWidth;
  display.classList.add("warning");
}

function updateDisplay(key) {
  switch(key) {
    case 'C':
      number = "";
      number0 = "";
      opt = "";
      showL2(false);
      break;
    case '0':
    case '1': 
    case '2':
    case '3':
    case '4':
    case '5': 
    case '6': 
    case '7': 
    case '8': 
    case '9':
      number += key;
      break;
    case '.':
      if(number == "")
        number = "0";
      if(!number.includes("."))
        number += ".";
      break;
    case '+': 
    case '-': 
    case 'X': 
    case '/': 
      if(opt != "") {
        if(number != "")
          number0 = calc();
        number = "";
      }
      number0 = number;
      number = "";
      opt = key.toLowerCase();
      showL2(true);
      break;
    case '=':
      if(opt == "" || number == "") {
        warning();
      } else {
        number0 = calc();
        number = number0;
        opt = "";
        showL2(false);
      }
      break;
  }

  displayL1.innerText = number;
  displayL2.innerText = number0 + opt + number;
}

window.onkeydown = function(e) {
  if(e.key == 'c')
    updateDisplay('C');
  if(e.key == '*')
    updateDisplay('X');
  else
    updateDisplay(e.key);
}

document.querySelectorAll(".item").forEach(item => {
  if(item.id == "display")
    return;

  item.onclick = function() {
    updateDisplay(item.innerText);
  }
});


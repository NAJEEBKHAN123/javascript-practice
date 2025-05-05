


let count = 0;

function updateDisplay() {
  document.getElementById("count").textContent = count;
}

function increase() {
  count++;
  updateDisplay();
}

function decrease() {
  count--;
  updateDisplay();
}



function reset() {
  count = 0;
  updateDisplay();
}

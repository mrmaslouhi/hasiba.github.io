
function appendToDisplay(input) {
  return display.value += input;
}
function resetDisplay() {
  return display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}
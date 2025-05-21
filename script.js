function append(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function clearAll() {
  document.getElementById("display").value = "";
}

function clearLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function toggleSign() {
  const display = document.getElementById("display");
  if (display.value) {
    if (display.value.startsWith("-")) {
      display.value = display.value.slice(1);
    } else {
      display.value = "-" + display.value;
    }
  }
}

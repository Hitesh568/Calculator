const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let current = "";
let operator = null;
let firstValue = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      current = "";
      operator = null;
      firstValue = "";
      display.textContent = "0";
    } else if (["+", "-", "*", "/"].includes(value)) {
      if (current === "") return;
      operator = value;
      firstValue = current;
      current = "";
    } else if (value === "=") {
      if (operator && firstValue !== "") {
        const result = eval(`${firstValue} ${operator} ${current}`);
        current = result.toString();
        display.textContent = current;
        operator = null;
        firstValue = "";
      }
    } else {
      current += value;
      display.textContent = current;
    }
  });
});

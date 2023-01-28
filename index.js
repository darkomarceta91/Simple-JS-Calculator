"use strict";
const textField = document.querySelector(".text");
const allButtons = document.querySelectorAll("button");
let inputedValue = "";

textField.addEventListener("input", (e) => {
  inputedValue = e.target.value;
});
const isRoundNumber = (number) => {
  if (number - Math.floor(number) === 0) {
    return Math.floor(number);
  } else return parseFloat(number.toFixed(3));
};
allButtons.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.innerHTML === "=") {
      textField.value = isRoundNumber(eval(inputedValue));
      inputedValue = textField.value;
    } else if (element.innerHTML === "C") {
      inputedValue = "";
      textField.value = "";
    } else {
      inputedValue += element.innerHTML;
      textField.value = inputedValue;
    }
  });
});

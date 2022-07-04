// Parašykite JS kodą, kuris nuspaudus mygtuką "Plus one" pridės vieną prie counter skaičiaus
// nuspaudus "Minus one" atims vieną nuo counter skaičiaus

// let displayElement = document.querySelector(".btn_state");
// let plusElement = document.querySelector(".btn__element_plus");
// let minusElement = document.querySelector(".btn__element_minus");

// updateDisplay();

// plusElement.addEventListener("click", () => {
//   counter++;
//   updateDisplay();
// });

// minusElement.addEventListener("click", () => {
//   counter--;
//   updateDisplay();
// });

// function updateDisplay() {
//   displayElement.innerHTML = count;
// }

let numberCount = 0;

const plusButton = document.getElementById("btn__element_plus");
plusButton.addEventListener("click", () => {
  numberCount++;
  document.getElementById("btn__state").textContent = numberCount;
});

const minusButton = document.getElementById("btn__element_minus");
minusButton.addEventListener("click", () => {
  numberCount--;
  document.getElementById("btn__state").textContent = numberCount;
});

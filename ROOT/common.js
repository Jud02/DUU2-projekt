
function randomNumber (min, max) {
    return Math.floor(min + (max - min) * Math.random());
  }
  
function newNumbers (number1, number2) {
    const numbersContainer = document.getElementById("numbersDiv");
    numbersContainer.innerHTML= "";
    
    for (let i = 0; i < number1; i++) {
      const cell = document.createElement("div");
      
      numbersContainer.appendChild(cell);
      
      if (number2) {
        cell.textContent = randomNumber(0, 99);
      }
    }
};


  
const buttonCreate = document.querySelector("#buttonCreate");
buttonCreate.addEventListener("click", function () {
    let input = document.querySelector("input").value;
    newNumbers(input, true);
});

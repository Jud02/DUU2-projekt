document.addEventListener("DOMContentLoaded", function () {
    const buttonFindTwo = document.getElementById("buttonFindTow");
    const inputNumber = document.getElementById("inputNumber");
    const numbersDiv = document.getElementById("numbersDiv");

    buttonFindTwo.addEventListener("click", function () {
        const targetSum = parseInt(inputNumber.value, 10);

        if (isNaN(targetSum)) {
            alert("Please enter a valid number.");
            return;
        }

        const cells = numbersDiv.querySelectorAll("div");
        const cellValues = Array.from(cells).map(cell => parseInt(cell.textContent, 10));

        cells.forEach(cell => (cell.style.backgroundColor = ""));

        let found = false;
        for (let i = 0; i < cellValues.length; i++) {
            for (let j = i + 1; j < cellValues.length; j++) {
                if (cellValues[i] + cellValues[j] === targetSum) {
                    cells[i].style.backgroundColor = "lightgreen";
                    found = true;
                    break;
                }
            }
            if (found) break;
        }

        if (!found) {
            alert("No two cells add up to the given number.");
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const buttonFillCleard = document.getElementById("buttonFillCleard");
    let originalNumbers = [];

    function addEventListenersToCells() {
        const cells = document.querySelectorAll("#numbersDiv div");
        originalNumbers = [];
        for (let i = 0; i < cells.length; i++) {
            originalNumbers[i] = cells[i].textContent;

            cells[i].addEventListener("click", function () {
                cells[i].textContent = "";
                cells[i].style.backgroundColor = "purple";
            });
        }
    }

    const buttonCreate = document.getElementById("buttonCreate");
    buttonCreate.addEventListener("click", function () {
        addEventListenersToCells(); 
    });

    buttonFillCleard.addEventListener("click", function () {
        const cells = document.querySelectorAll("#numbersDiv div");
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = originalNumbers[i];
            cells[i].style.backgroundColor = "";
        }
    });

});

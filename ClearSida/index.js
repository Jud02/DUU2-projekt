
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


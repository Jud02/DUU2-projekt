
document.addEventListener("DOMContentLoaded", function () {
    const resetButton = document.getElementById("resetButton");
    const pElement = document.querySelector("#howMany");


    function handleCellClick(cell, cells) {
        const number = cell.textContent;
        let count = 0;

        for (let i = 0; i < cells.length; i++) {
            if (cells[i].textContent === number) {
                cells[i].style.backgroundColor = "blue";
                count++;
            } else {
                cells[i].style.backgroundColor = "";
            }
        }

        updateCountText(number, count);
    }



    function updateCountText(number, count) {
        pElement.textContent = count + " copies of the number " + number;
    }

    function addEventListenersToCells() {
        const cells = document.querySelectorAll("#numbersDiv div");
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener("click", function () {
                handleCellClick(cells[i], cells);
            });
        }
    }


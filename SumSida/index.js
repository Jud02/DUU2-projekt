function sumNumbers() {
    const cells = document.querySelectorAll("#numbersDiv div"); // Se till att rätt ID används
    let totalSum = 0;

    for (let i = 0; i < cells.length; i++) {
        const number = Number(cells[i].textContent);

        if (!isNaN(number)) {
            totalSum = totalSum + number;
        }
    }

    document.getElementById("top").textContent = totalSum;
}


document.getElementById("buttonCreate").addEventListener("click", function () {
    sumNumbers();
});

//______________________________________________________________________

let selectedSum = 0; 

function handleCellClick(event) {
    const cell = event.target;

    if (cell.parentElement.id === "numbersDiv") {
        const number = Number(cell.textContent);

        if (cell.classList.contains("add")) {
            selectedSum -= number; 
        } else {
            cell.classList.add("add"); 
            selectedSum += number; 
        }

        document.getElementById("bottom").textContent = selectedSum || "-";
    }
}


function resetGrid() {
    selectedSum = 0; 
    document.getElementById("bottom").textContent = "-"; 

    const cells = document.querySelectorAll("#numbersDiv div");
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove("add");
    }
}

document.getElementById("numbersDiv").addEventListener("click", handleCellClick);

document.getElementById("buttonReset").addEventListener("click", resetGrid);



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


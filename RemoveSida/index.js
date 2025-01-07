
const newRandomButton = document.getElementById("newRandomButton");
const leftParagraph = document.getElementById("left");
const numbersDiv = document.getElementById("numbersDiv");

newRandomButton.addEventListener("click", function () {
    const randomNum = randomNumber(0, 99); 
    leftParagraph.textContent = randomNum; 

    const cells = document.querySelectorAll("#numbersDiv div"); 

    for (let i = 0; i < cells.length; i++) { 
        const cellNumber = +cells[i].textContent; 
        if (cellNumber === randomNum) {
            cells[i].style.backgroundColor = "white"; 
        } else if (cells[i].textContent !== "X") { 
            cells[i].style.backgroundColor = ""; 
        }
    }
});


const removeButton = document.getElementById("removeButton");
const rightParagraph = document.getElementById("right");

removeButton.addEventListener("click", function () {
    const randomNum = +leftParagraph.textContent; 
    const cells = document.querySelectorAll("#numbersDiv div"); 
    let count = 0; 

    for (let i = 0; i < cells.length; i++) { 
        const cellNumber = +cells[i].textContent; 
        if (cellNumber === randomNum) { 
            cells[i].textContent = "X"; 
            cells[i].style.backgroundColor = "#8C030E"; 
            count++;
        }
    }

    if (count > 0) {
        rightParagraph.textContent = `${randomNum} was removed ${count} time(s).`;
    } else {
        rightParagraph.textContent = "Nothing to remove"; 
    }
});

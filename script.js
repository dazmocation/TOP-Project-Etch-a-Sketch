const sketchBoard = document.getElementById('sketchBoard');
const square = document.getElementsByClassName('square');

//create grid
function createGrid() {
    for (i = 0; i < 256; i++){
        const square = document.createElement('div');
        square.className = "square";
        square.addEventListener('mouseover',changeColor);
        sketchBoard.appendChild(square);
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = "#333";
}

createGrid();
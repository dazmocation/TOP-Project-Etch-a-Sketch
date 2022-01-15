const sketchBoard = document.getElementById('sketchBoard');

//create grid
function createGrid() {
    for (i = 0; i < 256; i++){
        const square = document.createElement('div');
        square.className = "square";
        sketchBoard.appendChild(square);
    }
}

console.log(sketchBoard);
createGrid();
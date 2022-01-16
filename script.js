const sketchBoard = document.getElementById('sketchBoard');
const square = document.getElementsByClassName('square');
const gridOne = document.getElementById('button1');
const gridTwo = document.getElementById('button2');
const gridThree = document.getElementById('button3');
const gridFour = document.getElementById('button4');
const black = document.getElementById('black');
const white = document.getElementById('white');
const red = document.getElementById('red');
const orange = document.getElementById('orange');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const purple = document.getElementById('purple');


//choose grid size


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
    e.target.style.backgroundColor = "black";
}

createGrid();
const sketchBoard = document.getElementById('sketchBoard');
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
gridOne.addEventListener('click',function() {
    createGrid(16);
});
gridTwo.addEventListener('click',function() {
    createGrid(32);
});
gridThree.addEventListener('click',function() {
    createGrid(64)
});
gridFour.addEventListener('click',function() {
    createGrid(128)
});

//create grid
function createGrid(gridSize) {
    while (sketchBoard.firstChild) {
        sketchBoard.removeChild(sketchBoard.firstChild);
    }
    for (i = 0; i < gridSize * gridSize; i++){
        const square = document.createElement('div');
        square.className = "square";
        let box = 512 / gridSize;
        square.style.width = box + "px";
        square.style.height = box + "px";
        square.addEventListener('mouseover',changeColor);
        sketchBoard.appendChild(square);
    }
}

//sketch
function changeColor(e) {
    e.target.style.backgroundColor = "black";
}

//reset grid


//create initial grid
createGrid(16);
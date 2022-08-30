// defining constants
const rangeValueHTML = document.getElementById('rangeValue')
const gridSize = document.getElementById('gridSize')
const defaultMode = document.getElementById('defaultMode')
const rainbowMode = document.getElementById('rainbowMode')
const eraserMode = document.getElementById('eraserMode')
const clearBtn = document.getElementById('clearBtn')

// define size, show size on UI
let size = document.getElementById('gridSize').value;
rangeValueHTML.textContent = `${size} x ${size}`;

// initialize grid
createGrid(size);

// event listeners
gridSize.addEventListener('click', () => { 
    // remove colors from grid
    clearGrid();
    createGrid(size);
    updateRangeValue(size);
});
clearBtn.addEventListener('click', () => {
    clearGrid();
});

// functions
function makeRainbowColor () {
    rainbowR = (Math.floor(Math.random() * 255));
    rainbowG = (Math.floor(Math.random() * 255));
    rainbowB = (Math.floor(Math.random() * 255));
    return 'rgb('+rainbowR+', '+rainbowG+', '+rainbowB+')';
}
function createGrid(size) {
    // let gridWidth = 
    for (let i=1; i <= (size); i++) {
        let gridBox = document.createElement('div');
        gridBox.textContent = `${i}`;
        gridBox.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        gridBox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        gridBox.addEventListener('mousedown', () => {changeColor()});
        grid.appendChild(gridBox); 
    }
}
function updateRangeValue(size) {
    size = document.getElementById('gridSize').value;
    rangeValueHTML.textContent = `${size} x ${size}`;
    createGrid(size);
}
function changeColor() {
    if (defaultMode.checked) {grid.style.backgroundColor = 'rgb(0, 0, 0)';}
    if (rainbowMode.checked) {grid.style.backgroundColor = makeRainbowColor();}
    if (eraserMode.checked) {grid.style.backgroundColor = 'whitesmoke';}
}
function clearGrid() {
    grid.style.backgroundColor = 'whitesmoke';
}
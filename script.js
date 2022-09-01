// defining constants
const rangeValueHTML = document.getElementById('rangeValue');
const gridSize = document.getElementById('gridSize');
const defaultMode = document.getElementById('defaultMode');
const rainbowMode = document.getElementById('rainbowMode');
const eraserMode = document.getElementById('eraserMode');
const clearBtn = document.getElementById('clearBtn');
const grid = document.getElementById('grid');

// define size, show size on UI
let size = document.getElementById('gridSize').value;
rangeValueHTML.textContent = `${size} x ${size}`;

// initialize grid
createGrid(size);

// event listeners
gridSize.addEventListener('click', () => { 
    grid.innerHTML = '';
    let size = document.getElementById('gridSize').value;
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
    for (let i = 1; i <= (size*size); i++) {
        gridBox = document.createElement('div');
        gridBox.classList.add('gridBoxes');
        // gridBox.textContent = i;
        gridBox.addEventListener('mousedown', () => {changeColor()});
        grid.appendChild(gridBox);
    }
    grid.style.gridTemplateColumns = (`repeat(${size}, 1fr)`);
    grid.style.gridTemplateRows = (`repeat(${size}, 1fr)`);
}
function updateRangeValue(size) {
    size = document.getElementById('gridSize').value;
    rangeValueHTML.textContent = `${size} x ${size}`;
}
function changeColor() {
    if (defaultMode.checked) {gridBox.style.backgroundColor = 'rgb(0, 0, 0)'};
    if (rainbowMode.checked) {gridBox.style.backgroundColor = makeRainbowColor()};
    if (eraserMode.checked)  {gridBox.style.backgroundColor = 'whitesmoke'};
}
function clearGrid() {
    gridBox.style.backgroundColor = 'whitesmoke';
}
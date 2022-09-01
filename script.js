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
    size = document.getElementById('gridSize').value;
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
    return `rgb(${rainbowR}, ${rainbowG}, ${rainbowB})`
}
function createGrid(size) {
    for (let i = 1; i <= size * size; i++) {
        box = document.createElement('div');
        box.classList.add('gridBoxes');
        box.addEventListener('mouseover', () => {changeColor()});
        grid.appendChild(box);
        }
    grid.style.gridTemplateColumns = (`repeat(${size}, 1fr)`);
    grid.style.gridTemplateRows = (`repeat(${size}, 1fr)`);
}
function updateRangeValue(size) {
    size = document.getElementById('gridSize').value;
    rangeValueHTML.textContent = `${size} x ${size}`;
}
function changeColor() {
    if (defaultMode.checked) {event.target.style.backgroundColor = 'rgb(0, 0, 0)'};
    if (rainbowMode.checked) {event.target.style.backgroundColor = makeRainbowColor()};
    if (eraserMode.checked)  {event.target.style.backgroundColor = 'whitesmoke'};
}
function clearGrid() {
    box.style.backgroundColor = 'whitesmoke';
    grid.innerHTML= '';
    createGrid(document.getElementById('gridSize').value);
}
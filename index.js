const board = document.querySelector(".board");
const clear = document.querySelector('.clear');
const colorBtn = document.querySelector('.colorBtn');
const gridSize = document.querySelector('.gridSize');
const gridText = document.querySelector('.gridText');

let input = gridSize.value;
let area = 0;
let size = 0;

const removeBoard = () => {

    while (board.firstChild) {
        board.removeChild(board.lastChild);
    }
}

const newBoard = () => {

    removeBoard();

    board.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${input}, 1fr)`;

    area = input**2;
    size = 1000/input;

    for (i = 0; i < area; i++) {

        const square = document.createElement("div");
    
        square.classList.add("square", i);
    
        board.appendChild(square);
    }

    const squares = document.querySelectorAll('.square');
    console.log(squares)
    for (s of squares) {

        s.addEventListener('mousedown', (e) => {
            e.target.classList.toggle('color');
        
        })

        s.style.height = `${size}px`;
        s.style.width = `${size}px`;

    }
    colorBtn.addEventListener('click', () => {

        for (s of squares) {
    
            s.addEventListener('mousedown', (e) => {
                e.target.style.backgroundColor = getColor();
            
            })
        
        }    
    })

    clear.addEventListener('click', () => {
        for (s of squares) {
            s.classList.remove('color');
            s.style.backgroundColor = 'white';
        }
    })

};

newBoard();

const getColor = () => {
    let r = Math.floor((Math.random()*255) + 1)
    let g = Math.floor((Math.random()*255) + 1)
    let b = Math.floor((Math.random()*255) + 1)
    let rndColor = `rgb(${r},${g},${b})`;
    return rndColor;
}

gridSize.addEventListener('input', function (e) {
    input = e.target.value;
    newBoard();
    gridText.textContent = `${input} x ${input}`;
});


const board = document.querySelector(".board");
const square = document.createElement("div");
square.classList.add("square");
for (i = 0; i < 15; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    board.appendChild(square);
}



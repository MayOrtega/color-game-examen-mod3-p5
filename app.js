// const colors = [
//     "rgb(240, 14, 128)",
//     "rgb(249, 34, 11)",
//     "rgb(158, 249, 11)",
//     "rgb(11, 249, 227)",
//     "rgb(11, 97, 249)",
//     "rgb(202, 11, 288)"
// ]


let colors = [];
let squares = document.querySelectorAll(".square");
let pickedColor;
let colorDisplay = document.querySelector("#colorDisplay");
let clickedColor;
let message = document.querySelector("#message");
let titulo = document.querySelector("h1");
let squaresQuantify = 6;
let reset = document.querySelector("#reset");
let btnEasy = document.querySelector("#facil")
let btnHard = document.querySelector("#dificil")
let estadoJuego;

resetGame()
squareGenerate()


function squareGenerate() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            clickedColor = colors[i];
            if (clickedColor === pickedColor) {
                message.textContent = "¡You Win!";
                reset.textContent = "Play Again";
                titulo.style.backgroundColor = colors[i];
                changeColors(clickedColor);
               } else {
                squares[i].style.backgroundColor = "#232323";
                 message.textContent = "Try Again";
            }
        })
    }
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let numAleatorio = Math.floor(Math.random() * colors.length);
    pickedColor = colors[numAleatorio];
    return pickedColor;
}


function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "RGB" + "(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(squaresQuantify) {
    let generarColores = [];
    for (let i = 0; i < squaresQuantify; i++) {
        generarColores.push(randomColor());
    }
    return generarColores;
}


function resetGame() {
    colors = generateRandomColors(squaresQuantify);
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;
    message.textContent = "";
    reset.textContent = "New Colors";
    titulo.style.backgroundColor = "#03557e";
     
    for (let i = 0; i < squares.length; i++) {
           if (colors[i] != undefined) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}

reset.addEventListener("click", function () {
    resetGame();
})

btnEasy.addEventListener("click", function () {
    btnEasy.classList.add("selected");
    btnHard.classList.remove("selected");
    squaresQuantify = 3;
    resetGame();
})

btnHard.addEventListener("click", function () {
    btnHard.classList.add("selected");
    btnEasy.classList.remove("selected");
    squaresQuantify = 6;
    resetGame();
})


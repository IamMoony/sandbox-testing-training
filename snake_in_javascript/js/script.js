/*console.log("Hello World");*/

// CONSTANTS --> always stays the same

const CANVAS_BORDER_COLOR = 'black';
const CANVAS_BACKGROUND_COLOR = 'lightgrey';
const SNAKE_COLOR = "darkgray";
const SNAKE_BORDER_COLOR = "black";

// Get Canvas Element --> GET THE DIV WHERE THE CANVAS GETS DRAWN

var gameCanv = document.getElementById("canvas");

// Create The Canvas And Save It In A Var

var ctx = gameCanv. getContext("2d");

// Color For Background
ctx.fillStyle = CANVAS_BACKGROUND_COLOR;
// Color For Border
ctx.strokeStyle = CANVAS_BORDER_COLOR;


ctx.fillRect(0, 0, gameCanv.width, gameCanv.height);

ctx.strokeRect(0, 0, gameCanv.width, gameCanv.height);

ctx.strokeWidth = 5;

// Create Snake
let snake = [

{x: 150, y: 150},
{x: 140, y: 150},
{x: 130, y: 150},
{x: 120, y: 150},
{x: 110, y: 150}

];
//Function To Draw The Snake Parts
function drawSnakePart(snakepart) {

//Define Color Of The Snake
	ctx.fillStyle = SNAKE_COLOR;
	ctx.strokeStyle = SNAKE_BORDER_COLOR;
//Define Size Of The Snake Parts
	ctx.fillRect(snakepart.x, snakepart.y, 10, 10);
	ctx.strokeRect(snakepart.x, snakepart.y, 10, 10);
}

// Call The drawSnake Function 
drawSnake();

//Loops Through Every Part Of The Snake And Prints It On The Canvas
function drawSnake() {
	snake.forEach(drawSnakePart);
}

let nextSnake [
{x: 160, y: 150;},
{x: 150, y: 150;},
{x: 140, y: 150;},
{x: 130, y: 150;},
{x: 120, y: 150;}
];

function advancedSnake {
	
}

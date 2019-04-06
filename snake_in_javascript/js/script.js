// Prevent Default Space And Arrow Key On Click Scroll
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);


// CONSTANTS --> always stays the same

const CANVAS_BORDER_COLOR = 'black';
const CANVAS_BACKGROUND_COLOR = 'lightgrey';
const SNAKE_COLOR = "yellow";
const SNAKE_BORDER_COLOR = "black";

// Create Snake
let snake = [

    { x: 150, y: 150 },
    { x: 140, y: 150 },
    { x: 130, y: 150 },
    { x: 120, y: 150 },
    { x: 110, y: 150 }

];
// Score
let score = 0;
// Horizontal Velocity
let dx = 10;
// Vertical Velocity
let dy = 0;




// Get Canvas Element --> GET THE DIV WHERE THE CANVAS GETS DRAWN

var gameCanv = document.getElementById("canvas");

// Create The Canvas And Save It In A Var

var ctx = gameCanv.getContext("2d");

// Color For Background
ctx.fillStyle = CANVAS_BACKGROUND_COLOR;
// Color For Border
ctx.strokeStyle = CANVAS_BORDER_COLOR;


ctx.fillRect(0, 0, gameCanv.width, gameCanv.height);

ctx.strokeRect(0, 0, gameCanv.width, gameCanv.height);

// Start Game
main();
// Create Food
createFood();


// Call Event Listener When Key Is Pressed
document.addEventListener("keydown", changeDirection);

advanceSnake();

dx = 0;

dy = -10;

advanceSnake();

// Call The drawSnake Function 
drawSnake();



/*let nextSnake [
{x: 160, y: 150;},
{x: 150, y: 150;},
{x: 140, y: 150;},
{x: 130, y: 150;},
{x: 120, y: 150;}
];*/

//Function To Move The Snake
/**
 * Advances the snake by changing the x-coordinates of its parts
 * according to the horizontal velocity and the y-coordinates of its parts
 * according to the vertical veolocity
 */
function advanceSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    const didEatFood = snake[0].x === foodX && snake[0].y === foodY;
    if (didEatFood) {
    	score += 10;
    	document.getElementById("score").innerHTML = score;
        createFood();
    } else {
        snake.pop();
    }

}

//Loops Through Every Part Of The Snake And Prints It On The Canvas
function drawSnake() {
    snake.forEach(drawSnakePart);
}

//Function To Draw The Snake Parts
function drawSnakePart(snakepart) {

    //Define Color Of The Snake
    ctx.fillStyle = SNAKE_COLOR;
    ctx.strokeStyle = SNAKE_BORDER_COLOR;
    //Define Size Of The Snake Parts
    ctx.fillRect(snakepart.x, snakepart.y, 10, 10);
    ctx.strokeRect(snakepart.x, snakepart.y, 10, 10);
}

function clearCanvas() {
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';

    ctx.fillRect(0, 0, gameCanv.width, gameCanv.height);
    ctx.strokeRect(0, 0, gameCanv.width, gameCanv.height);
}

function main() {
    setTimeout(function onTick() {
        clearCanvas();
        drawFood();
        advanceSnake();
        drawSnake();

        //Call main again
        main();

    }, 100)
}

function randomTen(min, max) {
    return Math.round(Math.random() * (max - min) + min / 10) * 10;
}

function createFood() {
    foodX = randomTen(0, gameCanv.width - 10);
    foodY = randomTen(0, gameCanv.height - 10);

    snake.forEach(function isFoodOnSnake(part) {
        const foodIsOnSnake = part.x == foodX && part.y == foodY
        if (foodIsOnSnake)
            createFood();
    });
}

function drawFood() {
    ctx.fillStyle = "red";
    ctx.strokeStyle = "black";

    ctx.fillRect(foodX, foodY, 10, 10);
    ctx.strokeRect(foodX, foodY, 10, 10);
}

function changeDirection(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    const keyPressed = event.keyCode;
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingLeft = dx === -10
    const goingRight = dx === 10

    if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -10;
        dy = 0;
    }

    if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -10;
    }

    if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10;
        dy = 0;
    }

    if (keyPressed === DOWN_KEY && !goingDown) {
        dx = 0;
        dy = 10;
    }
}

function didGameEnd() {
	for (let i = 4; i < snake.length; i++) {
		const didCollide = snake[i].x  === snake[0].x && snake[i].y === snake[0].y 
		if (didCollide) return true
	}

const hitLeftWall = snake[0].x < 0;
const hitRightWall = snake[0].x > gameCanv.width - 10;
const hitTopWall = snake[0].y < 0;
const hitBottomWall = snake[0].y > gameCanv.height - 10;

return hitLeftWall ||
		hitRightWall ||
		hitTopWall ||
		hitBottomWallt
}


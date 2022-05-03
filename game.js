const canvas = document.getElementById('game');
const ctx = canvas.getContext("2d");
let moveX = 10;
let speed = 8;
let moveY = 10;
let tileSize = 28;
let WsnaketileSize = 28;
let HsnaketileSize = 28;
let tileCount = 30;
let velocityX = 0;
let velocityY = 0;
let foodX = Math.floor(Math.random() * 20);
let foodY = Math.floor(Math.random() * 20);
let score = 0;
let big = false;



function startGame() {
    clearScreen()
    food()
    drawSnake()
    snakePos()
    borders()
    eat()
    drawScore()
    grow()
    setTimeout(startGame, 1000 / speed);
    
}

function snakePos(){
    moveX = moveX + velocityX;
    moveY = moveY + velocityY;
}

function borders(){
    if (moveX*tileCount < 0){
        moveX = 10;
        moveY = 10;
    }
    if (moveX*tileCount > 600){
        moveX = 10;
        moveY = 10;
    }
    if (moveY*tileCount < 0){
        moveX = 10;
        moveY = 10;
    }
    if (moveY*tileCount > 600){
        moveX = 10;
        moveY = 10;
    }
}

function food(){
    ctx.fillStyle = 'black';
    ctx.fillRect(foodX*tileCount,foodY*tileCount,tileSize,tileSize);
    ctx.fillStyle = 'red';
    ctx.fillRect(foodX*tileCount+2,foodY*tileCount+2,tileSize-4,tileSize-4);
}

function eat(){
    if (moveX*tileCount == foodX*tileCount & moveY*tileCount == foodY*tileCount ){
        foodX = Math.floor(Math.random() * 20);
        foodY = Math.floor(Math.random() * 20);
        score = score + 1;
        console.log('eat');
        big = true;
    }
}

function grow(){
    ctx.fillStyle = 'green';
    ctx.fillRect((moveX*tileCount)-(score*28),(moveY*tileCount)-(score*28),28,28);
    /*if (big == true){
        ctx.fillStyle = 'green';
        ctx.fillRect(moveX*tileCount,moveY*tileCount,28,28);
        console.log('grow')
        
    }*/
}


function drawScore() {
    ctx.fillStyle = "white";
    ctx.font = "10px Verdana";
    ctx.fillText("Score " + score, canvas.width - 590, 10);
  }

function clearScreen() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function drawSnake() {
    ctx.fillStyle = 'yellow';
    snake = ctx.fillRect(moveX*tileCount,moveY*tileCount,WsnaketileSize,HsnaketileSize);
}

document.addEventListener('keydown', keyDown);

function keyDown(event){
    if (event.keyCode == 87) {
        velocityY = - 1;
        velocityX = 0;
        console.log('up')
    }
    if (event.keyCode == 65) {
        velocityY = 0;
        velocityX = -1;
        console.log('left')
    }
    if (event.keyCode == 83) {
        velocityY = + 1;
        velocityX = 0;
        console.log('down')
    }
    if (event.keyCode == 68) {
        velocityY = 0;
        velocityX = + 1;
        console.log('right')
    }
}


startGame()
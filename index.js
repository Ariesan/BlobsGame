const canvas = document.getElementById("gameArea")
const ctx = canvas.getContext("2d")

let x = 100;
let y = 100;
let radius = 30;
let speed = 10;

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

//Game Loop
//requestAnimationFrame(func) or
//setInterval(drawGame,1000 / 60)
function drawGame() {
    requestAnimationFrame(drawGame);
    clearScreen();
    inputs();
    boundryCheck();
    drawGreenBlob();
}

function boundryCheck() {
    //up
    if (y < radius) {
        y = radius;
    }
    //down
    if (y > canvas.height - radius) {
        y = canvas.height - radius;
    } 
    //left
    if (x < radius) {
        x = radius;
    }
    //right
    if (x > canvas.height - radius) {
        x = canvas.height - radius;
    } 
}

function inputs() {
    if (upPressed) {
        y -= speed;
    }
    if (downPressed) {
        y = y + speed;
    }
    if (leftPressed) {
        x = x - speed;
    }
    if (rightPressed) {
        x = x + speed;
    }
}

function drawGreenBlob() {
    ctx.fillStyle = "yellow";

    //to change color when arrow key pressed
    if (upPressed) {
        ctx.fillStyle = "green";
    }
    if (downPressed) {
        ctx.fillStyle = "blue";
    }
    if (leftPressed) {
        ctx.fillStyle = "purple";
    }
    if (rightPressed) {
        ctx.fillStyle = "red";
    }

    ctx.beginPath();
    ctx.arc(x,y, radius,0, Math.PI * 2);
    ctx.fill();
}

function clearScreen() {
    ctx.fillStyle = "#D16BA5";
    ctx.fillRect(0,0, canvas.width, canvas.height);
}

document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);

function keyDown(event) {
    //up
    if (event.keyCode == 38) {
        upPressed = true;
    }
    //down
    if (event.keyCode == 40) {
        downPressed = true;
    }
    //left
    if (event.keyCode == 37) {
        leftPressed = true;
    }
    //right
    if (event.keyCode == 39) {
        rightPressed = true;
    }

}

function keyUp(event) {
     //up
    if (event.keyCode == 38) {
        upPressed = false;
    }
    //down
    if (event.keyCode == 40) {
        downPressed = false;
    }
    //left
    if (event.keyCode == 37) {
        leftPressed = false;
    }
    //right
    if (event.keyCode == 39) {
        rightPressed = false;
    }
}

drawGame();
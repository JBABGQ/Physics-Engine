let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let height = 400;
let width = 400;
let x = 0;
let y = 0;
let velocityX = parseFloat(document.getElementById("VelocityX").value);
let velocityY = -1.0 * parseFloat(document.getElementById("VelocityY").value);
let acceleration = 9.8;
let timeStep = 0.1;
let intervalId;
draw();

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    if (intervalId) {
        clearInterval(intervalId);
    }

    velocityX = parseFloat(document.getElementById("VelocityX").value);
    velocityY = -1.0 * parseFloat(document.getElementById("VelocityY").value);
    acceleration = 9.8;
    draw();
    intervalId = setInterval(physicsEngine, timeStep);
});

document.querySelector('form').addEventListener('reset', function(event){
    if (intervalId) {
        clearInterval(intervalId);
    }
    event.preventDefault();
    x = 15;
    y = 15;
    draw();
});


function physicsEngine(){
    if (y < height - (Math.PI * 2)){
    y += (0.5 * acceleration * timeStep*timeStep) + velocityY * timeStep;
    velocityY += acceleration*timeStep;
    x += velocityX * timeStep;
    draw();
} else {
    clearInterval(intervalId);
    velocityY = -1.0 * parseFloat(document.getElementById("VelocityY").value);
    y = 0;
    timeToLand = (-velocityY + Math.sqrt((velocityY*velocityY) + 4*(height-y)*4.9))/acceleration
    x = velocityX * timeToLand;
    y = 390;
    velocityX = 0;
    draw();
    message = x;
    document.querySelector('#output').innerHTML += "The ball's x position is: " + message;
}
    
}

function draw()
{
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, height);
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(x, y, 10, 0, Math.PI * 2, true);
    
    ctx.fill();
    
    ctx.closePath();
}


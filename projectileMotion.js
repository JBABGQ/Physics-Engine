let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let height = 400;
let width = 400;
let x = 15;
let y = 15;
let velocityX = parseFloat(document.getElementById("VelocityX").value);
let velocityY = -1 * parseFloat(document.getElementById("VelocityY").value);
let acceleration = 9.8;
let timeStep = 5;
let intervalId;
draw();

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    if (intervalId) {
        clearInterval(intervalId);
    }

    velocityX = parseFloat(document.getElementById("VelocityX").value);
    velocityY = -1 * parseFloat(document.getElementById("VelocityY").value);
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
    if (y <height - (Math.PI * 2)){
    y += 0.5 * (velocityY + (velocityY+acceleration));
    velocityY += acceleration;
    x += velocityX;
    draw();
} else {
    y = 400 - (Math.PI * 2);
    velocityX = 0;
    draw();
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


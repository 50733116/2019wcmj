function setup() {
    console.log("setup animation");
    ballElement = document.querySelector(".ball");
    
    var box = document.querySelector(".box");
    maxX = box.clientWidth - ballElement.clientWidth;
    maxY = box.clientHeight - ballElement.clientHeight;
    
    animate();
}

var maxX;
var maxY;

var ballElement;
var ballX = 160;
var speedX = 100;

var ballY = 100;
var speedY = 100;
var lastTime;

function animate() {
    //requestAnimationFrame(animate);
    
    
    var now = Date.now();
    var deltaTime = (now - (lastTime || now)) / 1000;
    
    lastTime = now;
    
    //console.log("animates: " + deltaTime);
    ballX = ballX + (speedX * deltaTime);
    ballY = ballY + (speedY * deltaTime);
    
    if(ballX >= maxX  || ballX <= 0){
        //change Direction
        speedX = -speedX;
        
       
    }
    
    if(ballY >= maxY  || ballY <= 0){
        //change Direction
        speedY = -speedY;
    }
    console.log("X: " + ballX);
    ballElement.style.left = ballX + "px";
    ballElement.style.top = ballY + "px";
    
    setTimeout( animate, 10);

}

setup();


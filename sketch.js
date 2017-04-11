var x = 300;
var y = 200;
var speedx = 7;
var speedy = 2;
var words= ["this", "is","the","last","step."];
var j = 0;

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(255,0,0);
    display();
    move();
    bouce();
    
    for(var x = 0; x <650; x = x + 50){
        fill(255, 244, 45);
        stroke(255,255,255);
        strokeWeight(3);
        rect(x, 75, 25, 25);
    }
        
    y = y + speedy;
    x = x + speedx;
    
     fill(255);
    textSize(50);
    text(words[j],250,150);
    
}
function display(){
    stroke(255,255,255);
    strokeWeight(3);
    fill(252, 136, 35);
    ellipse(x, y, 30, 30);
}
function move(){
    y = y + speedy;
    x = x + speedx;
}
function bouce(){
    if(x>600 || x<0){
        speedx = -speedx;
    }
     if(y>400 || y<0){
        speedy = -speedy;
    }
}

    function mousePressed(){
    j++;
    if(j==words.length){
        j=0;
        }
    }
    


var x = 0 ;

function setup() {
createCanvas(600,
500);
}

function draw() {
background(220);
noStroke();
push();
avatar();
x= x + 5;
if (x > width){
  x = 0;
}
pop() ;
translate(x, 0);
} 

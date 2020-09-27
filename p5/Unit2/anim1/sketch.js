var x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
background(100);
text("sting like a bee", x , 250);

rect(x, 250,50,50);
color("red");
x += 5 ;

if(x > width){
x = random(-500,-200);
 }
}


//Dyan Bermeo, Fall 2020
var f;

 function setup() {
   createCanvas(800, 800);

   f = loadFont("assets/GoudyTrajanBold.ttf");




 }

function draw() {
  background('#FA8072');

if (mouseIsPressed) {


  fill('black');
  textFont(f);
  textSize(30);
  text('Dyno is a sneaky villain who is hard to find. He can be really quiet when moving and stealthy,',40, 600, 600, 200) ;

    fill('red');
  ellipse(250,250,500,500);
   fill('orange')
  ellipse(250,250,400,400);

  }

// Palm hands
fill('#EE3E38 ');
noStroke();
rect(150, 180, 180,280);

  // Middle Fingers
  fill ('#FFD0C2');
  noStroke();
  rect(210, 80, 40, 100);

  // Sparks
  strokeWeight(1);
stroke(51);
  fill ('#FFA500');

  ellipse(230, 100, 60, 60);


  //
  fill("black");
  noStroke();
  rect(195, 180, 70, 25);






}

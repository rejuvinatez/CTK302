var f;
 var f1;


function setup() {
  createCanvas(800, 800);

  f = loadFont("assets/GoudyTrajanBold.ttf");
  f1= loadFont("assets/Milletun.otf");

  textAlign(Center);

}

function draw() {
background(100) ;

fill('white')
textFont(f) ;
textSize(60) ;
text("Be Excellent", width/ 2, height/ 2) ;

fill('red');
textFont(f1) ;
textSize(30) ;
text("Family dont end in blood", width/ 2, height/ 2) ;

}

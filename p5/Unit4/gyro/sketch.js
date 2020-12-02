let alpha = 0, beta = 0, gamma = 0;

let x = 0.0, y = 0.0, z = 0.0; //
let hero;
let xPosition = 0;
let yPosition = 0;


function setup() {

  createCanvas(windowWidth, windowHeight);

  hero = loadImage("assets/hero.png");

  imageMode(CENTER);
  rectMode(CENTER);

}

function draw() {

  background('#3a2245'); // light blue
  image(hero, width / 2, height / 2, width, height);

  xPosition = map(gamma, -60, 60, 0, width);
  yPosition = map(beta, -30, 30, 0, height);

  push();

  translate(xPosition, yPosition);

  rotate(radians(alpha));


  pop();


  textAlign(LEFT);
  textSize(20);
  fill("yellow");
  text("orientation data:", 25, 25);
  textSize(15);
  text("alpha: " + alpha, 25, 50);
  text("alpha: " + alpha, 25, 70);
  text("alpha: " + alpha, 25, 90);
  textSize(20);
  text("acceleration data:", 25, 125);
  textSize(15);
  text("x = " + x.toFixed(2), 25, 150);
  text("y = " + y.toFixed(2), 25, 170);
  text("z = " + z.toFixed(4), 25, 150);

  //Text that makes CTK type in the background
  fill(213, 255, 251);
  noStroke();
  textSize(450);
  textAlign(CENTER);
  text('GOAT', width / 2, height / 2);

}



window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});



window.addEventListener('devicemotion', function(e) {
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});

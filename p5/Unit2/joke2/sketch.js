
let timer = 0;

let state = 0;

function setup() {
  createCanvas(500, 500);

  textSize(32);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {

  switch(state){

  case 0:
  background('red');
  text("Marry had a little lamb\nwere did it follow her too?",250,250,350,250);
  timer = timer + 1;
  if (timer > 5*60) {
  	state = 1;
  	timer = 0;
  }

  break;

  case 1:
  background('green');
  text("a school", 250, 250, 350, 400);
  break;
    }
  }

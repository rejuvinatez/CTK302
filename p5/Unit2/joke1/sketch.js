let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER) ;
  textSize(32);
}

function draw() {
  switch(state){
    case 0:
    background('purple');
    break;


case 1:
  background('orange');
text("because it was\nstapled to the chicken", 250, 250);
  break;

 }
}

function mouseReleased(){
  state++;
  if (state > 1){
    state = 0;
  }
}

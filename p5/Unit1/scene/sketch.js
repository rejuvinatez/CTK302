function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(100) ;
  // put your shapes here!

  // put your shapes here!

  if (mouseIsPressed) {
    //change eyeballs!



  text(mouseX + " , " + mouseY, 10, 20) ;  // this helps know where the mouse is
}



function mouseReleased() {
  // if you click the mouse, you'll see the location in the debugging console
  print(mouseX + " , " + mouseY) ;
}

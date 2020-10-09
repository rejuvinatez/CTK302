let img;
var song1;
let mySound;
let state = 0;
let timer = 0;

function preload() {

  soundFormats('mp3', 'ogg');
  song1 = loadSound("assets/nickleback.mp3");
}

function setup() {
  createCanvas(500, 500);

  song1.loop();
  //imageMode (CENTER);
  textAlign(CENTER);
  textSize(32);
  img = loadImage('assets/covidworldmap.png');


}

function draw() {

  switch (state) {

    case 0:
      // covid ball
      circle(30, 30, 20);
      fill('magenta');
      noStroke();
      circle(30, 30, 20);

      image(img, 0, 0);


      text("Covid19\nbroke out", 250, 250, 350, 250);
      timer = timer + 1;
      if (timer > 5 * 60) {
        state = 1;
        timer = 0;
      }
      break;

    case 1:
      background('orange');
      text("Was it a bug or a virus\nIt was a virus", 250, 250);
      break;

    case 2:
      background('blue');
      text("It went global", 250, 250);
      break;

    case 3:
      background('white');
      text("It is airborne", 250, 250);
      break;

  }
}

function mouseReleased() {
  if (song1.isPlaying()) {
    song1.pause();
  } else {
    song1.loop();
  }
  state++;
  if (state > 3) {
    state = 0;
  }

}


//freeze code 7.30 pm 10/08/2020

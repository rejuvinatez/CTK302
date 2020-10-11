var song1, song2, song3, song4, song5;
var myState = 0;


function preload() {
  song1 = loadSound('assets/refuzion.mp3');
  song2 = loadSound('assets/Emin150.wav');
  song3 = loadSound('assets/Fmin150.wav');
  song4 = loadSound('assets/Gmin150.wav');
  song5 = loadSound('assets/refuzion.mp3');

  song1.loop();
  song1.stop();
  song2.loop();
  song2.stop();
  song3.loop();
  song3.stop();
  song4.loop();
  song4.stop();
  song5.loop();
  song5.stop();

}

function setup() {

  createCanvas(700, 700);

}

function draw() {
  switch (myState) {

    case 0:
      song1.play();
      myState = 1;
      break;

    case 1:
      background(0, 255, 0);
      fill('orange');
      textSize(20);
      text('case 1.', 80, 80);
      break;

    case 2:
      song2.play();
      myState = 3;
      break;

    case 3:
      background(150, 0, 0);
      fill('blue');
      textSize(15);
      text('case 4', 80, 80);
      break;

    case 4:
      song3.play();
      myState = 5;
      break;

    case 5:
      background(0, 255, 0);
      fill('#fae');
      textSize(15);
      text('case 5', 80, 80);
      break;

    case 6:
      song4.play();
      myState = 7;
      break;

    case 7:
      fill('255, 204, 100');
      background(0, 0, 180);
      textSize(15);
      text('case 7', 80, 80);
      break;

    case 8:
      song5.play();
      myState = 9;
      break;

    case 9:
      background(0, 0, 255);
      fill('51');
      textSize(15);
      text('case9', 50, 50);
      break;

  }

}

function mouseReleased() {
  myState++;


  // pause all the songs
  song1.pause();
  song2.pause();
  song3.pause();
  song4.pause();
  song5.pause();

  if (myState > 5) {
    myState = 0;
  }
}

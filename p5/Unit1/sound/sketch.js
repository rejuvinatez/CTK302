var song1;
let mySound;
function preload(){
  soundFormats('mp3', 'ogg');
  song1 = loadSound("assets/refuzion.mp3");
}


function setup(){
  createCanvas(800,800);
  song1.loop();
}



function draw(){
background(100);
}
function mouseReleased(){

if (song1.isPlaying()){
  song1.pause();
} else {
  song1.loop();
}

}

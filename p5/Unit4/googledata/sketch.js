var bubbles = [];
var board;

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1VLlLyj6MdvIeqxUv6dkRv_H8F8_9QzgS2rGDMKR5F98'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  background(100);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].App, data[i].Coffee, data[i].Drink)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  imageMode(CENTER);
  image(board, width/2, height/2, width, height);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].drive();
  }

}

//background image
function preload(){
  board = loadImage('assets/board.jpg');

}


// my Bubble class
class Bubble {

  constructor(myApp, myCoffee, myDrink) {
    //this.name = myName;
    this.App = myApp;
    this.Coffee = myCoffee;
    this.Drink = myDrink;
    this.pos = createVector(random(width), random(height));
    this.vel = random(1, 3);
  }


  display() {
    //  if (this.shape == "Square") {
    //  rect(this.pos.x, this.pos.y, 50, 50);
    //  // image(name, this.pos.x...)
    // } else {
    // ellipse(this.pos.x, this.pos.y, 50, 50);
    //}
    ellipse(this.pos.x, this.pos.y, 80, 80);
    //text(this.name, this.pos.x, this.pos.y - 20);
    text(this.App, this.pos.x, this.pos.y + 16);
    text(this.Coffee, this.pos.x, this.pos.y - 16);
    text(this.Drink, this.pos.x, this.pos.y);
  }

  drive() {
    this.pos.x = this.pos.x + this.vel;
    if (this.pos.x > width) this.pos.x = 0;
  }

}

let cars = [];

function setup() {
createCanvas(500, 500);

//for (let i = 0; i < 20.cars.length; i++) {
  //cars.push(new Car());
// }

}

  function draw() {
    background('grey');
    cars.push(new Car())


    for (let i = 0; i < cars.length; i++) {
      cars[i].display();
      cars[i].move();
    }
  }

 class Car {

  constructor() {
    // attributes
    this.pos = createVector(width/2, height-80);
    this.vel = createVector(random(-.8, .8)/2, random(-10,10)) ;
    this.r = random(255) // random(255) ;
    this.g = random(255) ; // random(255) ;
    this.b = random(255) ; // random(255) ;
    this.a = random (200, 255) ;
  }

  // methods
    display() {
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, 20);
    //fill(this.r, this.g this.b);
    //rect(this.pos.x, this.pos.y, this.w,25);
    // fill('black')
    // ellipse(this.pos.x - 20, this.pos.y +15, 15);
    // ellipse(this.pos.x + 20, this.pos.y + 15, 15);


  move() {
    this.pos.add(this.vel);
    this.a = this.a-5;
    //if (this.pos.x > width) this.pos.x = 0;
    //if (this.pos.x < 0) this.pos.x = width;
    //if (this.pos.y > height) this.pos.y = 0;
    //if (this.pos.x < 0) this.pos.y = 0;
  }


}

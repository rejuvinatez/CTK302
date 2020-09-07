var img1, img2, img3;

function setup() {
  createCanvas(800, 800);
  imageMode(CENTER);

  img1 = loadimage("assets/angel/1.png")
  img2 = loadimage("assets/Mike15/2.jpg")
  img3 = loiadimage("assets/vince/3.png")
}

function draw() {
  image(img1, width/2, height/ 2), 200, 200);
  image(img1, width/2, height/ 2 - 210, 200, 200);
  image(img1, width/2, height/ 2 + 210, 200, 200);

}

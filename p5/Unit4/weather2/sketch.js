// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var Chicago;
var x = 0;
var a = 10;
var b = 30;
var c = 35;
var d = 0;

var windspeed = 0;
var temp = 0;
var hum = 0;


function setup() {
  createCanvas(800, 800);
  Chicago = loadImage('assets/Chicago.png');
  imageMode(CENTER);

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Chicago,IL,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=1c6e8464ca585cef83b2bf0197960c34'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temp = weather.main.temp;
  hum = weather.main.humidity;


}


function draw() {



  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;








    case 1:
      background('#519df5');
      image(Chicago, width / 2, height / 2, width, height);
      fill('yellow');
      textSize(20);
      text("Windy City " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
      text('The temperature is ' + weather.main.temp, 20, 240);
      text('The Humidity is ' + weather.main.humidity, 20, 260);

      var color = 0;
      color = map(hum, 0, 200, 2, height - 10);



      fill('#e0fffc');
      rect(0, 700, width, 100);
      fill('red');
      ellipse(width - 25, height - 25, 40, 40);
      stroke(8);
      //fill('black');
      rect(width - 43, height - 15, 35, -300);
      //fill('black');
      ellipse(width - 25.7, 85, 35, 35);
      //fill('black');
      ellipse(width - 25, height - 25, 45, 45);



      // cloud
      fill('white');
      noStroke();
      ellipse(x, 300, 200, 100);
      ellipse(x + 50, 360, 275, 80);

      // move the cloud's x position
      x = x + windspeed / 2;
      if (x > width) x = 0;

      break;


  }
}

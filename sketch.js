var mic;
var analyzer;
var capture;


function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
	capture.size(640, 480);
	capture.hide();
  background(255);

  //Create an Audio input
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  // Get the overall volume (between 0 and 1.0)
  var volume = mic.getLevel();

  // If the volume > 0.1,  a circle is drawn at a random location.
  // The louder the volume, the larger the circle.
  var threshold = 0.1;
  if (volume > threshold) {
    stroke(255);
    strokeWeight(random(1,3));
    fill(0);
    ellipse(random(width), random(height), volume*40);
  }

  //webcam changes filter
	var myImage = capture.loadPixels();
  imageMode(CENTER);
	image(myImage, width/2, height/2, 600, 600);
  if (volume>0 && volume<0.15) {
    filter(THRESHOLD);
    fill(random(255),random(255),random(255));
    ellipse(random(width),random(height),volume*40);
  }  else if (volume>0.15 && volume<.2) {
    filter(POSTERIZE,4);
    fill(random(255),random(255),random(255));
    ellipse(random(width),random(height),volume*40);
  }  else if (volume>0.2 && volume<0.4) {
    filter(INVERT);
    fill(random(255),random(255),random(255));
    ellipse(random(width),random(height),volume*40);
  } else if (volume>0.4 && volume<0.6) {
    filter(GRAY);
    fill(random(255),random(255),random(255));
    ellipse(random(width),random(height),volume*40);
  }

}

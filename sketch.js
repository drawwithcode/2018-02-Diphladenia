function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(40);
  angleMode(DEGREES);

  frameRate(12);
}

function draw() {
  // put drawing code here
  translate(width/2,height/2);
  //rotate(frameCount*3);


  stroke(lerpColor(color('#F6CEF5'),color('#29088A'), frameCount/120));
  line(100,0,(cos(frameCount*3)*100),(sin(frameCount*3)*100));
// Stops the draw function if a certain condition avaluates true
 if (frameCount == 120) {
   noLoop();
 }
}

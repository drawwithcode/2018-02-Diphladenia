function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  frameRate(12);
}

function draw() {

  //background
    push();
    stroke(255,255,0);
    strokeWeight(0.2);
    noFill();
    translate(width/2,height/2);
    rotate(frameCount*12);
    line(800,10,cos(frameCount*3)*200,sin(frameCount*3)*200);
    pop();

    push();
    stroke(0,255,0);
    strokeWeight(0.2);
    noFill();
    translate(width/2,height/2);
    rotate(frameCount*12);
    line(-800,10,-cos(frameCount*3)*200,-sin(frameCount*3)*200);
    pop();

  //image to costumize
    push();
    stroke(lerpColor(color('#F9FAA7'),color('#F6CEF5'), frameCount/120));
    strokeWeight(0.8);
    noFill();
    translate(width/2,height/2);
    line(100,0,(cos(frameCount*3)*100),(sin(frameCount*3)*100));
    pop()

  //ellipseflower
    push();
    strokeWeight(0.4);
    stroke(255);
    noFill();
    translate(width/6,height/2);
    rotate(frameCount*3);
    ellipse(0,110,20,20);
    pop()

    push();
    strokeWeight(0.4);
    stroke(255);
    noFill();
    translate(width-width/6,height/2);
    rotate(frameCount*3);
    ellipse(0,110,20,20);
    pop()

    //flower
    push();
    stroke(lerpColor(color('#F8F412'), color('#12F845'), frameCount/120));
    strokeWeight(1.5);
    noFill();
    translate(width/6,height/2);
    rotate(frameCount);
    scale(0.3);
    var x = sin(frameCount*3)*300;
    line(0, 0, 0, x);
    line(0, 0, -x, 0);
    line(0, 0, 0, -x);
    line(0, 0, x, 0);
    pop();

    push();
    stroke(lerpColor(color('#F8F412'), color('#12F845'), frameCount/120));
    strokeWeight(1.5);
    noFill();
    translate(width-width/6,height/2);
    rotate(frameCount);
    scale(0.3);
    var x = sin(frameCount*3)*300;
    line(0, 0, 0, x);
    line(0, 0, -x, 0);
    line(0, 0, 0, -x);
    line(0, 0, x, 0);
    pop();

    //rotazione
    push();
    strokeWeight(0.3);
    stroke(255);
    noFill();
    translate(width/2,height/2);
    rotate(frameCount*3);
    ellipse(100,0,200,200);
    pop()

    //spiral1
    push()
    stroke(lerpColor(color('#FAFD91'), color('#12F845'), frameCount/120));
    strokeWeight(0.8);
    translate(width/2,height/2);
    rotate(frameCount);
    line((frameCount)*cos(frameCount*3), (frameCount)*sin(frameCount),(frameCount/3+frameCount)*cos(frameCount*3), (frameCount/3+frameCount)*sin(frameCount));
    line(-(frameCount)*cos(frameCount*3), -(frameCount)*sin(frameCount),-(frameCount/3+frameCount)*cos(frameCount*3), -(frameCount/3+frameCount)*sin(frameCount));
    pop()

    //spiral2
    push();
    stroke(lerpColor(color('#F9FAA7'),color('#E7A7FA'), frameCount/120));
    strokeWeight(1.2);
    translate(width/2,height/2);
    rotate(frameCount);
    line(1.5*(frameCount)*cos(frameCount*3), 1.5*(frameCount)*sin(frameCount),1.5*(frameCount/3+frameCount)*cos(frameCount*3), 1.5*(frameCount/3+frameCount)*sin(frameCount));
    line(-1.5*(frameCount)*cos(frameCount*3), -1.5*(frameCount)*sin(frameCount),-1.5*(frameCount/3+frameCount)*cos(frameCount*3), -1.5*(frameCount/3+frameCount)*sin(frameCount));
    pop();

    //spiral3
    push()
    stroke(lerpColor(color('#F9FAA7'), color('#12F845'), frameCount/120));
    strokeWeight(0.8);
    translate(width/2,height/2);
    rotate(180);
    line((frameCount)*cos(frameCount*3), (frameCount)*sin(frameCount),(frameCount/3+frameCount)*cos(frameCount*3), (frameCount/3+frameCount)*sin(frameCount));
    line(-(frameCount)*cos(frameCount*3), -(frameCount)*sin(frameCount),-(frameCount/3+frameCount)*cos(frameCount*3), -(frameCount/3+frameCount)*sin(frameCount));
    pop()

    //spiral4
    push();
    stroke(lerpColor(color('#F9FAA7'),color('#E7A7FA'), frameCount/120));
    strokeWeight(1.2);
    translate(width/2,height/2);
    rotate(180);
    line(1.5*(frameCount)*cos(frameCount*3), 1.5*(frameCount)*sin(frameCount),1.5*(frameCount/3+frameCount)*cos(frameCount*3), 1.5*(frameCount/3+frameCount)*sin(frameCount));
    line(-1.5*(frameCount)*cos(frameCount*3), -1.5*(frameCount)*sin(frameCount),-1.5*(frameCount/3+frameCount)*cos(frameCount*3), -1.5*(frameCount/3+frameCount)*sin(frameCount));
    pop();

// Stops the draw function if a certain condition avaluates true
 if (frameCount == 120) {
 noLoop();
 }

}

var speedScale =0.1;

var windowHeight = $(window).height(),
windowWidth = $(window).width(),
radius = 20,
angleMer = 0,
angleVe=20,
angleEa=60,
angleMa=100,
angleBe=110,
angleJu=130,
angleSa=170,
angleUr=210,
angleNe=240,
// angleMer = 0,
// angleVe=0,
// angleEa=0,
// angleMa=0,
// angleJu=0,
// angleSa=0,
// angleUr=0,
// angleNe=0,
speedMer=0.02*speedScale,
speedVe=0.018*speedScale,
speedEa=0.010*speedScale,
speedMa=0.008*speedScale,
speedJu=0.004*speedScale,
speedSa=0.002*speedScale,
speedUr=0.001*speedScale,
speedNe=0.0008*speedScale,
x, y,
scaleAmount = 1.0, translateX=0, translateY=0, scaleAmountR;




function setup() {
  bg = loadImage("images/stars.png");
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100); // Set colour mode to hue-saturation-brightness-(alpha) and value upperbounds

}



function draw() {
  background(bg);
  // Add semi-transparent rectangle on every run of draw, creates fading visuals effect
  noStroke();

  fill(220, 30, 11, 50);
  clear();
  rect(0, 0, windowWidth, windowHeight);

  translate(translateX, translateY);
  scale(scaleAmount, scaleAmount);

  drawSun();
  drawMercury();
  drawVenus();
  drawEarth();
  drawMars();
  drawJupiter();
  drawSaturn();
  drawUranus();
  drawNeptune();
}//end of draw


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function drawSun(){
  fill(46, 97, 98, 100);
  noStroke();
  ellipse(windowWidth/2, windowHeight/2, 160, 160); // Larger circles with higher amplitude - (high amplitude = large circles + wider spread of circles)
}


function drawMercury(){
  noFill();
  stroke(255, 5);
  ellipse(windowWidth/2, windowHeight/2, radius*10, radius*10);

  fill(230, 29, 67, 100);
  x = windowWidth/2 + cos(angleMer)*radius*5; // Set frequency on x-axis
  y = windowHeight/2 + sin(angleMer)*radius*5; // Set frequency on y-axis
  noStroke();
  ellipse(x, y, radius, radius); // Larger circles with higher amplitude - (high amplitude = large circles + wider spread of circles)
  textSize(12);
  text("Mercury", x+25, y+25);
  angleMer += speedMer;
}


function drawVenus(){
  noFill();
  stroke(255, 5);
  ellipse(windowWidth/2, windowHeight/2, radius*14, radius*14);

  fill(32, 86, 67, 100);
  x = windowWidth/2 + cos(angleVe)*radius*7; // Set frequency on x-axis
  y = windowHeight/2 + sin(angleVe)*radius*7; // Set frequency on y-axis
  noStroke();
  ellipse(x, y, radius+10, radius+10); // Larger circles with higher amplitude - (high amplitude = large circles + wider spread of circles)
  textSize(12);
  text("Venus", x+25, y+25);
  angleVe += speedVe;
}

function drawEarth(){
  noFill();
  stroke(255, 5);
  ellipse(windowWidth/2, windowHeight/2, radius*20, radius*20);

  fill(185, 36, 73, 100);
  x = windowWidth/2 + cos(angleEa)*radius*10; // Set frequency on x-axis
  y = windowHeight/2 + sin(angleEa)*radius*10; // Set frequency on y-axis
  noStroke();
  ellipse(x, y, radius+15, radius+15); // Larger circles with higher amplitude - (high amplitude = large circles + wider spread of circles)
  textSize(12);
  text("Earth", x+25, y+25);
  angleEa += speedEa;
}

function drawMars(){
  noFill();
  stroke(255, 5);
  ellipse(windowWidth/2, windowHeight/2, radius*26, radius*26);

  fill(31, 44, 71, 100);
  x = windowWidth/2 + cos(angleMa)*radius*13; // Set frequency on x-axis
  y = windowHeight/2 + sin(angleMa)*radius*13; // Set frequency on y-axis
  noStroke();
  ellipse(x, y, radius+10, radius+10); // Larger circles with higher amplitude - (high amplitude = large circles + wider spread of circles)
  textSize(12);
  text("Mars", x+25, y+25);
  angleMa += speedMa;
}

function drawJupiter(){
  noFill();
  stroke(255, 5);
  ellipse(windowWidth/2, windowHeight/2, radius*32, radius*32);

  fill(20, 71, 95, 100);
  x = windowWidth/2 + cos(angleJu)*radius*16; // Set frequency on x-axis
  y = windowHeight/2 + sin(angleJu)*radius*16; // Set frequency on y-axis
  noStroke();
  ellipse(x, y, radius+35, radius+35); // Larger circles with higher amplitude - (high amplitude = large circles + wider spread of circles)
  textSize(12);
  text("Jupiter", x+25, y+25);
  angleJu += speedJu;
}

function drawSaturn(){
  noFill();
  stroke(255, 5);
  ellipse(windowWidth/2, windowHeight/2, radius*38, radius*38);

  fill(39, 65, 93, 100);
  x = windowWidth/2 + cos(angleSa)*radius*19; // Set frequency on x-axis
  y = windowHeight/2 + sin(angleSa)*radius*19; // Set frequency on y-axis
  noStroke();
  ellipse(x, y, radius+30, radius+30); // Larger circles with higher amplitude - (high amplitude = large circles + wider spread of circles)
  textSize(12);
  text("Saturn", x+25, y+25);
  angleSa += speedSa;
}

function drawUranus(){
  noFill();
  stroke(255, 5);
  ellipse(windowWidth/2, windowHeight/2, radius*44, radius*44);

  fill(181, 22, 75, 100);
  x = windowWidth/2 + cos(angleUr)*radius*22; // Set frequency on x-axis
  y = windowHeight/2 + sin(angleUr)*radius*22; // Set frequency on y-axis
  noStroke();
  ellipse(x, y, radius+18, radius+18); // Larger circles with higher amplitude - (high amplitude = large circles + wider spread of circles)
  textSize(12);
  text("Uranus", x+25, y+25);
  angleUr += speedUr;
}

function drawNeptune(){
  noFill();
  stroke(255, 5);
  ellipse(windowWidth/2, windowHeight/2, radius*50, radius*50);

  fill(215, 38, 80, 100);
  x = windowWidth/2 + cos(angleNe)*radius*25; // Set frequency on x-axis
  y = windowHeight/2 + sin(angleNe)*radius*25; // Set frequency on y-axis
  noStroke();
  ellipse(x, y, radius+24, radius+24); // Larger circles with higher amplitude - (high amplitude = large circles + wider spread of circles)
  textSize(12);
  text("Neptune", x+25, y+25);
  angleNe += speedNe;
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
ellipse(200,100,100);
  line(200,150,200,300);//body
  line(200,200,300,100);//Rigt arm
  line(200,200,100,100);
  line(200,300,400,600);
  line(200,300,50,600);
  ellipse(180,100,10);
  ellipse(220,100,10);
  arc(200,120,30, 60,50, PI + QUARTER_PI, CHORD);
}
function setup() {
  createCanvas(800, 800);}

function draw() {
  background(220);
  let x=mouseX
  let y=mouseY
  let xislarge = (x>=400)
  let circlesize = 100
   if(xislarge) {circlesize = circlesize * 2}
  circle(x,y,circlesize)
  line(400,0,400,800)
  line(0,400,800,400)
  if(xislarge  )
  fill('red');
}






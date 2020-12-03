let xBalls = [];
let yBalls = [];
let xBallsSpeed = []
let yBallsSpeed = []
let BallsColor = []
let r = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  Spawnballs()
}

function draw() {
  background(220)
  for(i = 0; i < xBalls.length; i++){
    fill(BallsColor[i])
    circle(xBalls[i] += xBallsSpeed[i], yBalls[i] += yBallsSpeed[i],r[i])
    if(xBalls[i] > width - r[i] || xBalls[i] < r[i]){
        xBallsSpeed[i] = -xBallsSpeed[i];
    }
    if(yBalls[i] > height -r[i]|| yBalls[i] < r[i]){
      yBallsSpeed[i] = -yBallsSpeed[i];
    }
  }
}


function Spawnballs(){
  for(i=0; i < 30; i++) {
   let y = random(0,windowHeight)
  let x = random(0,windowWidth)
  y = 100
  x = 100
  xBalls.push(x)
  yBalls.push(y)
  BallsColor.push(color(random(0,255),random(0,255),random(0,255)))
  let xBallsSpeedRandom = random(-20,30)
  let yBallsSpeedRandom = random(-20,30)
  xBallsSpeed.push(xBallsSpeedRandom)
  yBallsSpeed.push(yBallsSpeedRandom)
  r.push(random(1,100))  
  }
 
}
let n = 0;
let d = 0;
const n_target = 6;
const d_target = 71;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0,0,0,100);
  translate(width / 2, height / 2);

  if (n >= n_target) {
    n = n_target;
  } else {
    n += 0.015;
  }
   //petals(1);it is kept 1 for the border of the petals. DO NOT change this!!!!!!!!
  if (n >= n_target) {
    if (d >= d_target) {
      d = d_target;
    } else {
      d += 0.2;
    }
    petals(d);
  }
  petals(1);
}

function petals(d) {
  noFill();
  if (d === 1) {
    stroke(255, 0, 0, 255);
    strokeWeight(3);
  } else {
    stroke(0, 0, 255, 200);
    strokeWeight(1);
  }
  
  beginShape();
  for (let i = 0; i < 361; i++){
    let k = i * d;
    let r = 250 *  sin(n*k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape(CLOSE);
}


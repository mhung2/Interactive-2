function setup () {
  createCanvas (windowWidth, windowHeight);
}

function draw () {
  if (mouseIsPressed == true) {
  	noStroke();
    fill(random (255), random(255), random(255)); 
  } else {
    fill(181, 226, 187);
    noStroke();
  }
  ellipse(495, 50, 100, 100);
}
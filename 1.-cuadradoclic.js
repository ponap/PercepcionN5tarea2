
function setup() {
  createCanvas(400, 400);
  background(0);
      stroke(255);
      rect(150,150,100,100);
}

function draw() {
  
  if(mouseIsPressed && mouseX > 150 && mouseY > 150 && mouseX < 250 && mouseY < 250){
	  background(255,0,0);
      stroke(255);
      rect(150,150,100,100);
  }
  else
  {
	  background(0);
      stroke(255);
      rect(150,150,100,100);
  }
}

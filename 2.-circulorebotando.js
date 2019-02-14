var x = 0,y = 200;
var velocidad = 15;
var vuelta = 0;
function setup() {
  createCanvas(400, 400);
	 background(0);
}

function draw() {
	
		background(0);
		fill(150,200,100);
		ellipse(x,y,50,50);
		if(x < 400 && vuelta == 0)
		{
			x=x+velocidad;
			if(x >= 400) vuelta = 1;
		}
		else {
			x=x-velocidad;
			if(x <= 0) vuelta = 0;
		}
			
	
}

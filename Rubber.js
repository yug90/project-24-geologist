class Rubber{
	constructor(x,y,r){
	
	// assign options to the rubber ball
		var options={
			'density':4,
			'friction': 0.3,
			'restitution':0.5

		}
		this.x=250;
		this.y=120;
		this.r=-20/2
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, )
		World.add(world, this.body);
		
	

	}
	display(){
	
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			ellipse(0,0,this.r,this.r)
			pop()
	}

}
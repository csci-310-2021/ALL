function Food(){
	this.x;
	this.y;

	this.randLocation = function() {
		this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
		this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale; 
	}

	this.draw = function() {
		ctx.fillStyle = "#e70d4f";
		ctx.fillRect(this.x, this.y, scale, scale);
	}
}
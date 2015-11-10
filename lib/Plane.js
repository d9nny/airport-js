function Plane() {
}

Plane.prototype.land = function() {
  this.landed = true;
};

Plane.prototype.isLanded = function() {
  return this.landed;
};

Plane.prototype.takeOff = function() {
	this.landed = false;
};

module.exports = Plane;

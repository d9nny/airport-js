function Plane() {
}

Plane.prototype.land = function() {
  this.landed = true;
};

Plane.prototype.isLanded = function() {
  return this.landed;
};

module.exports = Plane;
